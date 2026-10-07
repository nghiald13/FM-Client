import Link from "next/link";

export function SiteFooter() {
    return (
        <footer className="hidden border-t border-slate-200 bg-white md:block">
            <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-6 text-sm text-slate-500">
                <p>© 2026 FreeMarket. Chợ mua bán giữa người với người.</p>
                <nav aria-label="Liên kết chân trang" className="flex gap-4">
                    <Link href="/help" className="transition-colors duration-150 hover:text-slate-900">
                        Trợ giúp
                    </Link>
                    <Link href="/terms" className="transition-colors duration-150 hover:text-slate-900">
                        Điều khoản
                    </Link>
                    <Link href="/privacy" className="transition-colors duration-150 hover:text-slate-900">
                        Bảo mật
                    </Link>
                </nav>
            </div>
        </footer>
    );
}