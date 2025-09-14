import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../lib/axios";

export type PatchAccountDTO = {
  username: string;
  password: string;
};

export const usePatchAccountApi = () => {
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
  });
};
