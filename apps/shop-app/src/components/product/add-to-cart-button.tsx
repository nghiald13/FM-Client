"use client";

import { ShoppingCart } from "lucide-react";
import { toast } from "sonner";
import { Button } from "../../../../../packages/ui/button";
import { useCartStore } from "../../stores/use-cart-store";
import type { Product } from "@/types";

interface AddToCartButtonProps {
    product: Product;
    className?: string;
}

export function AddToCartButton({ product, className }: AddToCartButtonProps) {
    const addItem = useCartStore((state) => state.addItem);

    function handleClick(): void {
        addItem({
            productId: product.id,
            title: product.title,
            price: product.price,
            image: product.images[0],
            sellerName: product.seller.name,
            color: product.colors[0],
        });
        toast.success("Đã thêm vào giỏ hàng!");
    }

    return (
        <Button
            type="button"
            size="sm"
            onClick={handleClick}
            className={`w-full bg-emerald-600 text-white transition-colors duration-150 hover:bg-emerald-700 ${className ?? ""}`}
        >
            <ShoppingCart className="size-4" aria-hidden="true" />
            Thêm vào giỏ
        </Button>
    );
}