import type { Metadata } from "next";
import { LoginForm } from "@/components/auth/login-form";

export const metadata: Metadata = {
    title: "Đăng nhập",
};

interface LoginPageProps {
    searchParams: Promise<{ redirect?: string }>;
}

function getSafeRedirect(value: string | undefined): string {
    if (!value) return "/";
    return value.startsWith("/") && !value.startsWith("//") ? value : "/";
}

export default async function LoginPage({ searchParams }: LoginPageProps) {
    const params = await searchParams;

    return <LoginForm redirectTo={getSafeRedirect(params.redirect)} />;
}