import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "../lib/axios";

export type PatchAccountDTO = {
  username: string;
  password: string;
};

export const usePatchAccountApi = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      id,
      data,
    }: {
      id: number;
      data: PatchAccountDTO;
    }): Promise<any> => {
      const result = await axiosInstance.patch(
        `${import.meta.env.VITE_API_URL}/account/${id}`,
        data
      );
      return result.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["account"] });
    },
  });
};
