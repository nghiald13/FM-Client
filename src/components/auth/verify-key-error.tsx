import Link from "next/link";
import { AlertCircle } from "lucide-react";

interface VerifyKeyErrorProps {
    message: string;
}

export function VerifyKeyError({ message }: VerifyKeyErrorProps) {
    return (
        <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center sm:p-6">
            <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-rose-50 text-rose-600">
                <AlertCircle className="size-6" aria-hidden="true" />
            </span>
            <h1 className="mt-4 text-xl font-bold text-slate-900">Không thể xác minh</h1>
            <p role="alert" className="mt-1 text-sm text-slate-500">
                {message}
            </p>
            <Link
                href="/login"
                className="mt-5 inline-flex h-11 w-full items-center justify-center rounded-lg bg-emerald-600 px-4 text-sm font-medium text-white transition-colors duration-150 hover:bg-emerald-700"
            >
                Quay lại đăng nhập
            </Link>
        </div>
    );
}