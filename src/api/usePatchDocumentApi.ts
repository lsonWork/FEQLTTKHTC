import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../lib/axios";

export type PatchDocumentDTO = {
  name?: string;
  content?: string;
  cif?: string;
  accountId: number;
};

export const usePatchDocumentApi = (id: number) => {
  return useMutation({
    mutationFn: async (data: PatchDocumentDTO): Promise<any> => {
      const result = await axiosInstance.patch(
        `${import.meta.env.VITE_API_URL}/document/${id}`,
        data
      );
      return result.data;
    },
  });
};
