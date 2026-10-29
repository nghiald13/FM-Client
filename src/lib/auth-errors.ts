export type LoginErrorCode =
    | "invalid_credentials"
    | "account_inactive"
    | "invalid_token"
    | "incorrect_otp"
    | "mfa_locked"
    | "too_many_requests"
    | "network_error"
    | "server_error"
    | "invalid_response";

const loginErrorMessages: Record<LoginErrorCode, string> = {
    invalid_credentials: "Email hoặc mật khẩu không đúng",
    account_inactive: "Tài khoản chưa được xác minh",
    invalid_token: "Phiên xác minh đã hết hạn. Vui lòng đăng nhập lại để nhận mã mới",
    incorrect_otp: "Mã OTP không đúng. Vui lòng thử lại",
    mfa_locked: "Bạn đã nhập sai OTP quá số lần cho phép. Vui lòng đăng nhập lại sau để thử lại",
    too_many_requests: "Bạn thử quá nhiều lần. Vui lòng đợi một lúc rồi thử lại",
    network_error: "Không thể kết nối tới máy chủ. Kiểm tra mạng và thử lại",
    server_error: "Máy chủ đang gặp sự cố. Vui lòng thử lại sau",
    invalid_response: "Máy chủ trả về dữ liệu không hợp lệ. Vui lòng thử lại sau",
};

const FALLBACK_MESSAGE = "Đăng nhập thất bại. Vui lòng thử lại";

function isLoginErrorCode(code: string): code is LoginErrorCode {
    return code in loginErrorMessages;
}

export function getLoginErrorMessage(code: string | null | undefined): string {
    if (code && isLoginErrorCode(code)) return loginErrorMessages[code];
    return FALLBACK_MESSAGE;
}