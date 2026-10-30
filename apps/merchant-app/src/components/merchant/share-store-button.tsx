"use client";

import { Share2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "../../../../../packages/ui/button";

interface ShareStoreButtonProps {
    handle: string;
}

export function ShareStoreButton({ handle }: ShareStoreButtonProps) {
    async function handleCopy(): Promise<void> {
        try {
            await navigator.clipboard.writeText(
                `${window.location.origin}/store/${handle.replace("@", "")}`
            );
            toast.success("Đã sao chép liên kết cửa hàng!");
        } catch {
            toast.info("Không thể sao chép liên kết.");
        }
    }

    return (
        <Button variant="outline" size="sm" onClick={handleCopy}>
            <Share2 className="size-4" />
            Chia sẻ
        </Button>
    );
}