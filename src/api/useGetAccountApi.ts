import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../lib/axios";

export const useGetAccountApi = (page: number, search?: string) => {
  return useQuery({
    queryFn: async (): Promise<any> => {
      return await axiosInstance.get(
        `${import.meta.env.VITE_API_URL}/account?page=${page}&limit=${
          import.meta.env.VITE_PAGE_SIZE
        }${search ? `&username=${search}` : ""}`
      );
    },
    queryKey: ["account", page, search],
  });
};
