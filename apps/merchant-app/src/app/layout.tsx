import type { ReactNode } from "react";
import { MerchantShell } from "@/components/merchant/merchant-shell";

import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";
import { AuthProvider } from "@/components/providers/auth-provider";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const inter = Inter({
    subsets: ["latin", "vietnamese"],
    variable: "--font-inter",
    display: "swap",
});

export const metadata: Metadata = {
    title: {
        default: "FreeMarket - Chợ mua bán đồ mới & cũ",
        template: "%s | FreeMarket",
    },
    description:
        "FreeMarket là chợ C2C giúp bạn mua bán đồ mới và đồ cũ nhanh chóng, an toàn, minh bạch giá.",
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    themeColor: "#ffffff",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    const session = await auth();

    if (!session) {
        redirect("/login?redirect=/merchant");
    }
    return (
        <html lang="vi" className={inter.variable}>
            <body className="min-h-dvh bg-slate-50/80 font-sans text-slate-900 antialiased">
                <AuthProvider>
                    <MerchantShell>
                        {children}
                    </MerchantShell>;
                </AuthProvider>
                <Toaster position="top-center" richColors closeButton />
            </body>
        </html>
    );
}