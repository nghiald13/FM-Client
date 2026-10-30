import { z } from "zod";
import { getBackendFailureMessage, postBackend, type BackendFailure } from "@/lib/backend";
import { ActionFailure, ActionResult, VerifyAccountUser } from "@/types";


const EXPIRED_MESSAGE = "Phiên xác minh đã hết hạn. Vui lòng đăng nhập lại để nhận mã mới";

const keyDataSchema = z.string().min(1);

const resolveDataSchema = z.union([
    z
        .string()
        .min(1)
        .transform((email): VerifyAccountUser => ({ email })),
    z.object({
        email: z.string().min(1),
        fullName: z.string().optional(),
    }),
]);

function toActionFailure(failure: BackendFailure, fallback: string): ActionFailure {
    if (failure.kind === "backend" && failure.errorName === "InvalidTokenException") {
        return { ok: false, code: "invalid_token", message: EXPIRED_MESSAGE };
    }
    return { ok: false, message: getBackendFailureMessage(failure, fallback) };
}

/** Sau khi login báo AccountInactiveException: gửi email để nhận key. */
export async function requestVerifyProcess(email: string): Promise<ActionResult<{ key: string }>> {
    const result = await postBackend("BE_VERIFY_PROCESS", { email });
    if (!result.ok) return toActionFailure(result, "Không thể gửi yêu cầu xác minh cho email này");

    const parsed = keyDataSchema.safeParse(result.data);
    if (!parsed.success) {
        return { ok: false, message: getBackendFailureMessage({ ok: false, kind: "invalid_response" }, "") };
    }
    return { ok: true, data: { key: parsed.data } };
}

/** SSR: đổi key lấy thông tin account cần verify. */
export async function resolveVerifyKey(key: string): Promise<ActionResult<VerifyAccountUser>> {
    const result = await postBackend("BE_VERIFY_RESOLVE", { key });
    if (!result.ok) return toActionFailure(result, "Liên kết xác minh không hợp lệ");

    const parsed = resolveDataSchema.safeParse(result.data);
    if (!parsed.success) {
        return { ok: false, message: getBackendFailureMessage({ ok: false, kind: "invalid_response" }, "") };
    }
    return { ok: true, data: parsed.data };
}

/** Gửi (lại) email chứa OTP. */
export async function requestVerifyEmail(key: string): Promise<ActionResult> {
    const result = await postBackend("BE_VERIFY_EMAIL_REQUEST", { key });
    if (!result.ok) return toActionFailure(result, "Không thể gửi email. Vui lòng thử lại sau");
    return { ok: true, data: undefined };
}