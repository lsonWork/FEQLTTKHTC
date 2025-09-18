import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../lib/axios";

export type CreateDocumentDTO = {
  name: string;
  content: string;
  accountId: number;
  cif: string;
};

export const usePostDocumentApi = () => {
  return useMutation({
    mutationFn: async (data: CreateDocumentDTO): Promise<any> => {
      const result = await axiosInstance.post(
        `${import.meta.env.VITE_API_URL}/document`,
        data
      );
      return result.data;
    },
  });
};
