"use client";

import { LogIn, LogOut } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import { toast } from "sonner";
import { AppLink } from "@freemarket/ui/app-link";
import { Button } from "@freemarket/ui/button";

export function UserMenu() {
    const { data: session, status } = useSession();

    async function handleSignOut(): Promise<void> {
        await signOut({ redirect: false });
        toast.success("Đã đăng xuất");
        window.location.assign("/");
    }

    if (status === "loading") return <div className="size-8" aria-hidden="true" />;

    if (!session) {
        return (
            <AppLink
                href="/login"
                crossZone
                className="inline-flex h-8 items-center gap-1.5 rounded-lg px-2.5 text-sm font-medium text-slate-700 transition-colors duration-150 hover:bg-slate-100"
            >
                <LogIn className="size-4" aria-hidden="true" />
                Đăng nhập
            </AppLink>
        );
    }

    return (
        <Button variant="ghost" size="sm" onClick={() => void handleSignOut()} aria-label="Đăng xuất">
            <LogOut className="size-4" aria-hidden="true" />
            <span className="hidden sm:inline">{session.user?.email ?? "Đăng xuất"}</span>
        </Button>
    );
}