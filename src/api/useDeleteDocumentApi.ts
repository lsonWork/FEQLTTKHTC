import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "../lib/axios";

export const useDeleteDocumentApi = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string) => {
      return await axiosInstance.delete(
        `${import.meta.env.VITE_API_URL}/document/${id}`
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["document"] });
    },
  });
};
