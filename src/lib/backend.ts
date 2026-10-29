import { z } from "zod";

export type BackendEndpoint =
    | "BE_LOGIN_API"
    | "BE_VERIFY_PROCESS"
    | "BE_VERIFY_RESOLVE"
    | "BE_VERIFY_EMAIL_REQUEST"
    | "BE_VERIFY_PROCEED";

export type BackendFailureKind =
    | "config"
    | "network"
    | "rate_limit"
    | "server"
    | "invalid_response"
    | "backend";

export interface BackendFailure {
    ok: false;
    kind: BackendFailureKind;
    /** Giá trị field `error` của BE, ví dụ "InvalidTokenException" */
    errorName?: string;
}

export type BackendResult = { ok: true; data: unknown } | BackendFailure;

const envelopeSchema = z.object({
    data: z.unknown().optional(),
    error: z.string().nullish(),
    message: z.string().nullish(),
    statusCode: z.number().nullish(),
    success: z.boolean().nullish(),
});

export async function postBackend(
    endpoint: BackendEndpoint,
    payload: Record<string, string>,
): Promise<BackendResult> {
    const url = process.env[endpoint];
    if (!url) {
        console.error(`[backend] Thiếu biến môi trường ${endpoint}`);
        return { ok: false, kind: "config" };
    }

    let response: Response;
    try {
        response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
            cache: "no-store",
        });
    } catch {
        return { ok: false, kind: "network" };
    }

    let json: unknown = null;
    try {
        json = await response.json();
    } catch {
        json = null;
    }
    const parsed = envelopeSchema.safeParse(json);
    const envelope = parsed.success ? parsed.data : null;

    if (response.status === 429) return { ok: false, kind: "rate_limit" };
    if (response.status >= 500) return { ok: false, kind: "server" };

    if (!response.ok || envelope?.success === false) {
        return { ok: false, kind: "backend", errorName: envelope?.error ?? undefined };
    }

    return { ok: true, data: envelope?.data ?? null };
}

export function getBackendFailureMessage(failure: BackendFailure, fallback: string): string {
    switch (failure.kind) {
        case "network":
            return "Không thể kết nối tới máy chủ. Kiểm tra mạng và thử lại";
        case "rate_limit":
            return "Bạn thử quá nhiều lần. Vui lòng đợi một lúc rồi thử lại";
        case "server":
        case "config":
            return "Máy chủ đang gặp sự cố. Vui lòng thử lại sau";
        case "invalid_response":
            return "Máy chủ trả về dữ liệu không hợp lệ. Vui lòng thử lại sau";
        case "backend":
            return fallback;
    }
}