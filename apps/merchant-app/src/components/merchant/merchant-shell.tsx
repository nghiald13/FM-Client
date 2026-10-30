"use client";

import { useState, type ReactNode } from "react";
import { Menu } from "lucide-react";
import { Button } from "../../../../../packages/ui/button";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
} from "../../../../../packages/ui/sheet";
import { MerchantSidebar } from "@/components/merchant/merchant-sidebar";

interface MerchantShellProps {
    children: ReactNode;
}

export function MerchantShell({ children }: MerchantShellProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div className="min-h-screen bg-slate-50/80">
            {/* Mobile top bar */}
            <header className="sticky top-0 z-30 flex h-14 items-center gap-2 border-b border-slate-200 bg-white px-3 md:hidden">
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(true)}
                    aria-label="Mở menu merchant"
                >
                    <Menu className="size-5" />
                </Button>
                <span className="text-sm font-semibold text-slate-900">Merchant Studio</span>
            </header>

            {/* Mobile drawer */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetContent side="left" className="w-72 p-0 duration-200">
                    <SheetHeader className="sr-only">
                        <SheetTitle>Menu Merchant Studio</SheetTitle>
                        <SheetDescription>Điều hướng quản lý cửa hàng</SheetDescription>
                    </SheetHeader>
                    <MerchantSidebar onNavigate={() => setIsOpen(false)} />
                </SheetContent>
            </Sheet>

            <div className="mx-auto flex max-w-7xl">
                {/* Desktop sidebar */}
                <aside className="sticky top-0 hidden h-screen w-64 shrink-0 border-r border-slate-200 bg-white md:block">
                    <MerchantSidebar />
                </aside>

                <main className="min-w-0 flex-1 pb-24 md:pb-8">{children}</main>
            </div>
        </div>
    );
}