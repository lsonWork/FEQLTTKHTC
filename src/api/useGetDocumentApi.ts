import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../lib/axios";

export const useGetDocumentApi = (page: number, search?: string) => {
  return useQuery({
    queryFn: async (): Promise<any> => {
      return await axiosInstance.get(
        `${import.meta.env.VITE_API_URL}/document?page=${page}&limit=${
          import.meta.env.VITE_PAGE_SIZE
        }${search ? `&cif=${search}` : ""}`
      );
    },
    queryKey: ["document", page, search],
  });
};
