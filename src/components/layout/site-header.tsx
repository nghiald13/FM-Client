import Link from "next/link";
import { Search, Store } from "lucide-react";
import { Input } from "@/components/ui/input";
import { CartLink } from "@/components/layout/cart-link";
import { DesktopNav } from "@/components/layout/desktop-nav";
import { ModeSwitcher } from "@/components/layout/mode-switcher";

function SearchForm({ className }: { className?: string }) {
    return (
        <form action="/search" role="search" className={className}>
            <div className="relative">
                <Search
                    className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400"
                    aria-hidden="true"
                />
                <Input
                    type="search"
                    name="q"
                    placeholder="Tìm sản phẩm, danh mục, người bán..."
                    aria-label="Tìm kiếm sản phẩm"
                    className="h-10 border-slate-200 bg-slate-50 pl-9"
                />
            </div>
        </form>
    );
}

export function SiteHeader() {
    return (
        <header className="sticky top-0 z-30 border-b border-slate-200 bg-white">
            <div className="mx-auto flex h-14 w-full max-w-6xl items-center gap-3 px-4">
                <Link href="/" className="flex shrink-0 items-center gap-2" aria-label="FreeMarket - Trang chủ">
                    <span className="flex size-8 items-center justify-center rounded-lg bg-emerald-600 text-white">
                        <Store className="size-4" aria-hidden="true" />
                    </span>
                    <span className="hidden text-lg font-bold tracking-tight text-slate-900 sm:inline">
                        FreeMarket
                    </span>
                </Link>

                <SearchForm className="hidden max-w-md flex-1 md:block" />

                <div className="ml-auto flex items-center gap-2">
                    <DesktopNav />
                    <ModeSwitcher />
                    <CartLink />
                </div>
            </div>

            <div className="border-t border-slate-100 px-4 py-2 md:hidden">
                <SearchForm />
            </div>
        </header>
    );
}