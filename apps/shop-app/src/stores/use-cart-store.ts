import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CartItem } from "@/types";

interface CartState {
    items: CartItem[];
    addItem: (item: Omit<CartItem, "quantity">, quantity?: number) => void;
    removeItem: (productId: string, color?: string) => void;
    updateQuantity: (productId: string, quantity: number, color?: string) => void;
    clear: () => void;
}

const isSameLine = (item: CartItem, productId: string, color?: string): boolean =>
    item.productId === productId && item.color === color;

export const useCartStore = create<CartState>()(
    persist(
        (set) => ({
            items: [],
            addItem: (item, quantity = 1) =>
                set((state) => {
                    const exists = state.items.some((i) => isSameLine(i, item.productId, item.color));
                    if (exists) {
                        return {
                            items: state.items.map((i) =>
                                isSameLine(i, item.productId, item.color)
                                    ? { ...i, quantity: i.quantity + quantity }
                                    : i,
                            ),
                        };
                    }
                    return { items: [...state.items, { ...item, quantity }] };
                }),
            removeItem: (productId, color) =>
                set((state) => ({
                    items: state.items.filter((i) => !isSameLine(i, productId, color)),
                })),
            updateQuantity: (productId, quantity, color) =>
                set((state) => ({
                    items:
                        quantity <= 0
                            ? state.items.filter((i) => !isSameLine(i, productId, color))
                            : state.items.map((i) =>
                                isSameLine(i, productId, color) ? { ...i, quantity } : i,
                            ),
                })),
            clear: () => set({ items: [] }),
        }),
        { name: "freemarket-cart" },
    ),
);

export const selectCartCount = (state: CartState): number =>
    state.items.reduce((total, item) => total + item.quantity, 0);