import { create } from "zustand";

type User = {
  id: number;
  username: string;
  email: string;
};

type UserState = {
  user: User | null;
  setUser: (user: User | null) => void;
};

export const userStore = create<UserState>((set) => ({
  user: null,
  setUser: (user: User | null) => set({ user }),
}));
