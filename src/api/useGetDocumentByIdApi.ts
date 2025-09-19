import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../lib/axios";

export const useGetDocumentByIdApi = (id: number) => {
  return useQuery({
    queryFn: async (): Promise<any> => {
      return await axiosInstance.get(
        `${import.meta.env.VITE_API_URL}/document/${id}`
      );
    },
    queryKey: ["document", id],
  });
};
