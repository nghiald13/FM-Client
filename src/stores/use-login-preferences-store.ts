import { create } from "zustand";
import { persist } from "zustand/middleware";

interface LoginPreferencesState {
    rememberedEmail: string;
    setRememberedEmail: (email: string) => void;
}

export const useLoginPreferencesStore = create<LoginPreferencesState>()(
    persist(
        (set) => ({
            rememberedEmail: "",
            setRememberedEmail: (rememberedEmail) => set({ rememberedEmail }),
        }),
        { name: "freemarket-login-preferences" },
    ),
);