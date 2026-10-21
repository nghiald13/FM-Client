"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useHasMounted } from "@/hooks/use-has-mounted";
import { selectCartCount, useCartStore } from "@/stores/use-cart-store";

export function CartLink() {
  const hasMounted = useHasMounted();
  const count = useCartStore(selectCartCount);
  const showBadge = hasMounted && count > 0;

  return (
    <Link
      href="/cart"
      aria-label={showBadge ? `Giỏ hàng, ${count} sản phẩm` : "Giỏ hàng"}
      className="relative inline-flex size-10 items-center justify-center rounded-lg text-slate-700 transition-colors duration-150 hover:bg-slate-100"
    >
      <ShoppingCart className="size-5" aria-hidden="true" />
      {showBadge && (
        <span className="absolute right-0.5 top-0.5 flex min-w-4 items-center justify-center rounded-full bg-emerald-600 px-1 text-[10px] font-semibold leading-4 text-white">
          {count > 99 ? "99+" : count}
        </span>
      )}
    </Link>
  );
}