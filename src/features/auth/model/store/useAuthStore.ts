import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type AuthState = {
  accessToken: string | null;
  userId: string | null;
  username: string | null;
  setAuth: (data: { token: string; id: string; username: string }) => void;
  clearAuth: () => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      accessToken: null,
      userId: null,
      username: null,
      setAuth: ({ token, id, username }) => set({ accessToken: token, userId: id, username }),
      clearAuth: () => set({ accessToken: null, userId: null, username: null }),
    }),
    {
      name: 'auth-storage',
    }
  )
);
