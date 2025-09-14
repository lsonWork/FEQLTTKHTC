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
    if (error.response?.status === 403) {
      location.href = "/";
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
