import Link from "next/link";
import { Store } from "lucide-react";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-dvh flex-col items-center justify-center px-4 py-10">
            <Link
                href="/"
                className="mb-6 flex items-center gap-2"
                aria-label="FreeMarket - Về trang chủ"
            >
                <span className="flex size-10 items-center justify-center rounded-xl bg-emerald-600 text-white">
                    <Store className="size-5" aria-hidden="true" />
                </span>
                <span className="text-xl font-bold tracking-tight text-slate-900">FreeMarket</span>
            </Link>

            <div className="w-full max-w-sm">{children}</div>

            <p className="mt-8 text-xs text-slate-400">© 2026 FreeMarket</p>
        </div>
    );
}