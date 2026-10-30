import type { Metadata } from "next";
import { VerifyKeyError } from "@/components/auth/verify-key-error";
import { resolveVerifyKey } from "@/lib/verify-api";
import { VerifyAccountForm } from "@/components/auth/verify-account-form";

export const metadata: Metadata = {
    title: "Xác minh tài khoản",
    robots: { index: false },
};

interface VerifyPageProps {
    searchParams: Promise<{ key?: string }>;
}

export default async function VerifyPage({ searchParams }: VerifyPageProps) {
    const { key } = await searchParams;

    if (!key) {
        return (
            <VerifyKeyError message="Liên kết xác minh thiếu thông tin. Vui lòng đăng nhập lại để nhận liên kết mới." />
        );
    }

    const result = await resolveVerifyKey(key);
    if (!result.ok) {
        return <VerifyKeyError message={result.message} />;
    }

    return <VerifyAccountForm user={result.data} verifyKey={key} redirectTo="/" />;
}