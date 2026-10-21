import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { AuthUser } from "@/types";

interface AuthState {
    user: AuthUser | null;
    rememberedEmail: string;
    login: (user: AuthUser, rememberedEmail: string) => void;
    logout: () => void;
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            user: null,
            rememberedEmail: "",
            login: (user, rememberedEmail) => set({ user, rememberedEmail }),
            logout: () => set({ user: null }),
        }),
        { name: "freemarket-auth" },
    ),
);