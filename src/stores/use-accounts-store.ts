import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { MockAccount } from "@/types";

interface AccountsState {
    accounts: MockAccount[];
    addAccount: (account: MockAccount) => void;
}

export const useAccountsStore = create<AccountsState>()(
    persist(
        (set) => ({
            accounts: [],
            addAccount: (account) => set((state) => ({ accounts: [...state.accounts, account] })),
        }),
        { name: "freemarket-accounts" },
    ),
);