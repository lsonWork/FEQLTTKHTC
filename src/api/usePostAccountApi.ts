import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../lib/axios";

export type CreateAccountDTO = {
  username: string;
  password: string;
};

export const usePostAccountApi = () => {
  return useMutation({
    mutationFn: async (data: CreateAccountDTO): Promise<any> => {
      const result = await axiosInstance.post(
        `${import.meta.env.VITE_API_URL}/account`,
        data
      );
      return result.data;
    },
  });
};
