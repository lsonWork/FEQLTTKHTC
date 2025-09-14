import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "../lib/axios";

export const usePatchAccountActiveApi = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: number): Promise<any> => {
      const result = await axiosInstance.patch(
        `${import.meta.env.VITE_API_URL}/account/${id}`,
        { status: true }
      );
      return result.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["account"] });
    },
  });
};
