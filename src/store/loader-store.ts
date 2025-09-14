import { create } from "zustand";

type LoaderState = {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
};

export const loaderStore = create<LoaderState>((set) => ({
  isLoading: false,
  setIsLoading: (isLoading: boolean) => set({ isLoading }),
}));
