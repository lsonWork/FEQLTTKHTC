import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export type LoginFormData = {
  username: string;
  password: string;
};

export const usePostLoginApi = () => {
  return useMutation({
    mutationFn: async (data: LoginFormData): Promise<any> => {
      const result = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/login`,
        data
      );
      return result.data;
    },
  });
};
