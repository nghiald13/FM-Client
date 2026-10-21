"use client";

import { Heart } from "lucide-react";
import { toast } from "sonner";
import { useHasMounted } from "@/hooks/use-has-mounted";
import { cn } from "@/lib/utils";
import { useWishlistStore } from "@/stores/use-wishlist-store";

interface WishlistButtonProps {
    productId: string;
    className?: string;
}

export function WishlistButton({ productId, className }: WishlistButtonProps) {
    const hasMounted = useHasMounted();
    const isSaved = useWishlistStore((state) => state.ids.includes(productId));
    const toggle = useWishlistStore((state) => state.toggle);
    const active = hasMounted && isSaved;

    function handleClick(): void {
        toggle(productId);
        if (active) {
            toast.info("Đã bỏ khỏi danh sách yêu thích");
        } else {
            toast.success("Đã lưu vào yêu thích!");
        }
    }

    return (
        <button
            type="button"
            onClick={handleClick}
            aria-pressed={active}
            aria-label={active ? "Bỏ yêu thích" : "Lưu vào yêu thích"}
            className={cn(
                "flex size-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition-colors duration-150 hover:text-rose-600",
                active && "text-rose-600",
                className,
            )}
        >
            <Heart className={cn("size-4", active && "fill-rose-600")} aria-hidden="true" />
        </button>
    );
}