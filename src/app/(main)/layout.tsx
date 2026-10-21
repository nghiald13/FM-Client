import { BottomNav } from "@/components/layout/bottom-nav";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-dvh flex-col">
            <SiteHeader />
            <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-4 pb-24 md:py-6 md:pb-8">
                {children}
            </main>
            <SiteFooter />
            <BottomNav />
        </div>
    );
}