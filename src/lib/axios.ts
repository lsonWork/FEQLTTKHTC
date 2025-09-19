import { showNotification } from "@mantine/notifications";
import axios from "axios";
import Cookies from "js-cookie";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // thay url thật
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor request (nếu cần gắn token)
axiosInstance.interceptors.request.use((config) => {
  const token = Cookies.get("access_token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Interceptor response (bắt lỗi)
axiosInstance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    // xử lý lỗi chung, ví dụ 401
    if (error.response?.status === 401) {
      location.href = "/signin";
    }
    if (error.response?.data.data === "Forbidden resource") {
      const user = localStorage.getItem("user");
      if (user) {
        const userData = JSON.parse(user);
        if (userData.role === "admin") {
          location.href = "/admin";
        } else {
          location.href = "/";
        }
      }
    }
    if (error.response?.status === 400 && error.response?.data?.data) {
      error.response.data.data.map((el: string) => {
        if (el === "cif should not be empty") {
          showNotification({
            title: "Lỗi",
            message: "Mã khách hàng (CIF) không được để trống",
            color: "red",
          });
        } else {
          showNotification({
            title: "Lỗi",
            message: el,
            color: "red",
          });
        }
      });
    }
    if (
      error.response?.data.statusCode === 403 &&
      error.response?.data.message === "Account is not active"
    ) {
      localStorage.removeItem("user");
      Cookies.remove("access_token");
      location.href = "/signin";
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
