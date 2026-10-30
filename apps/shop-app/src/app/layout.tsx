import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import { AuthProvider } from "@/components/providers/auth-provider";
import { BottomNav } from "@/components/layout/bottom-nav";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "vietnamese"], variable: "--font-sans" });

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="vi" className={inter.variable}>
            <body className="min-h-screen bg-slate-50/80 text-slate-900 antialiased">
                <AuthProvider>
                    <SiteHeader />
                    <main>{children}</main>
                    <SiteFooter />
                    <BottomNav />
                </AuthProvider>
                <Toaster position="top-center" richColors />
            </body>
        </html>
    );
}