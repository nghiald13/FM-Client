import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import { BottomNav } from "@/components/layout/bottom-nav";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import "./globals.css";

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={inter.variable}>
      <body className="flex min-h-dvh flex-col bg-slate-50/80 font-sans text-slate-900 antialiased">
        <SiteHeader />
        <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-4 pb-24 md:py-6 md:pb-8">
          {children}
        </main>
        <SiteFooter />
        <BottomNav />
        <Toaster position="top-center" richColors closeButton />
      </body>
    </html>
  );
}