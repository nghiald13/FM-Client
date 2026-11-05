import { AlertCircle, Clock } from "lucide-react";

interface MerchantStatusNoticeProps {
    variant: "pending" | "error";
    message?: string;
}

const linkClass =
    "inline-flex h-11 w-full items-center justify-center rounded-lg px-4 text-sm font-medium transition-colors duration-150";

/** Dùng cho OnboardPendingException, hoàn tất stage 3 và lỗi tải dữ liệu merchant. */
export function MerchantStatusNotice({ variant, message }: MerchantStatusNoticeProps) {
    if (variant === "pending") {
        return (
            <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center sm:p-6">
                <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-amber-50 text-amber-600">
                    <Clock className="size-6" aria-hidden="true" />
                </span>
                <h1 className="mt-4 text-xl font-bold text-slate-900">Hồ sơ đang được thụ lý</h1>
                <p className="mt-1 text-sm text-slate-500">
                    Chúng tôi đã nhận hồ sơ đăng ký bán hàng của bạn. Kết quả sẽ được gửi qua email ngay khi
                    hồ sơ được xử lý xong.
                </p>
                <a href="/" className={`${linkClass} mt-5 bg-emerald-600 text-white hover:bg-emerald-700`}>
                    Quay lại mua sắm
                </a>
            </div>
        );
    }

    return (
        <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center sm:p-6">
            <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-rose-50 text-rose-600">
                <AlertCircle className="size-6" aria-hidden="true" />
            </span>
            <h1 className="mt-4 text-xl font-bold text-slate-900">Không thể tải cửa hàng</h1>
            <p role="alert" className="mt-1 text-sm text-slate-500">
                {message ?? "Đã có lỗi xảy ra. Vui lòng thử lại."}
            </p>
            <a href="/merchant" className={`${linkClass} mt-5 bg-emerald-600 text-white hover:bg-emerald-700`}>
                Thử lại
            </a>
            <a href="/login?redirect=/merchant" className={`${linkClass} mt-2 border border-slate-200 text-slate-700 hover:bg-slate-50`}>
                Đăng nhập lại
            </a>
        </div>
    );
}