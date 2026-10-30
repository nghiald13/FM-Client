import NextAuth, { CredentialsSignin, type User } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import { loginSchema } from "@/lib/validations/auth";
import { otpSchema } from "@/lib/validations/verify";
import { LoginErrorCode } from "@/lib/auth-errors";
import { BackendFailure, postBackend } from "@/lib/backend";

class LoginError extends CredentialsSignin {
    constructor(code: LoginErrorCode) {
        super();
        this.code = code;
    }
}

const credentialsSchema = loginSchema.pick({ emailOrPhone: true, password: true });

const verifyCredentialsSchema = z.object({
    key: z.string().min(1),
    otp: otpSchema,
});

const tokenDataSchema = z.object({
    accessToken: z.string().min(1),
    refreshToken: z.string().min(1),
    tokenType: z.string().optional(),
    expiresIn: z.number().positive().optional(),
});

const jwtPayloadSchema = z.object({
    exp: z.number().optional(),
    sub: z.string().optional(),
});

const backendErrorCodes = new Map<string, LoginErrorCode>([
    ["AccountInactiveException", "account_inactive"],
    ["InvalidTokenException", "invalid_token"],
    ["IncorrectOtpException", "incorrect_otp"],
    ["AccountMfaException", "mfa_locked"],
]);

function decodeJwtPayload(token: string): z.infer<typeof jwtPayloadSchema> {
    const payload = token.split(".")[1];
    if (!payload) return {};
    try {
        const json: unknown = JSON.parse(Buffer.from(payload, "base64url").toString("utf8"));
        const parsed = jwtPayloadSchema.safeParse(json);
        return parsed.success ? parsed.data : {};
    } catch {
        return {};
    }
}

function toLoginErrorCode(failure: BackendFailure, fallback: LoginErrorCode): LoginErrorCode {
    switch (failure.kind) {
        case "network":
            return "network_error";
        case "rate_limit":
            return "too_many_requests";
        case "server":
        case "config":
            return "server_error";
        case "invalid_response":
            return "invalid_response";
        case "backend":
            return (failure.errorName && backendErrorCodes.get(failure.errorName)) || fallback;
    }
}

function toAuthUser(data: unknown, fallbackId: string, email?: string): User {
    const parsed = tokenDataSchema.safeParse(data);
    if (!parsed.success) throw new LoginError("invalid_response");

    const { accessToken, refreshToken, tokenType, expiresIn } = parsed.data;
    const claims = decodeJwtPayload(accessToken);

    const accessTokenExpires = expiresIn
        ? Date.now() + expiresIn * 1000
        : claims.exp
            ? claims.exp * 1000
            : undefined;

    return {
        id: claims.sub ?? fallbackId,
        email,
        accessToken,
        refreshToken,
        tokenType,
        accessTokenExpires,
    };
}

export const { handlers, auth, signIn, signOut } = NextAuth({
    trustHost: true,
    session: { strategy: "jwt" },
    pages: { signIn: "/login" },
    providers: [
        Credentials({
            credentials: {
                emailOrPhone: { label: "Email", type: "text" },
                password: { label: "Mật khẩu", type: "password" },
            },
            async authorize(rawCredentials) {
                const parsed = credentialsSchema.safeParse(rawCredentials);
                if (!parsed.success) throw new LoginError("invalid_credentials");

                const result = await postBackend("BE_LOGIN_API", parsed.data);
                if (!result.ok) throw new LoginError(toLoginErrorCode(result, "invalid_credentials"));

                return toAuthUser(result.data, parsed.data.emailOrPhone, parsed.data.emailOrPhone);
            },
        }),
        // Đăng nhập sau khi verify OTP: server tự gọi BE nên token không đi qua client.
        Credentials({
            id: "verify-otp",
            credentials: {
                key: { label: "Key", type: "text" },
                otp: { label: "OTP", type: "text" },
            },
            async authorize(rawCredentials) {
                const parsed = verifyCredentialsSchema.safeParse(rawCredentials);
                if (!parsed.success) throw new LoginError("incorrect_otp");

                const result = await postBackend("BE_VERIFY_PROCEED", parsed.data);
                if (!result.ok) throw new LoginError(toLoginErrorCode(result, "server_error"));

                return toAuthUser(result.data, parsed.data.key);
            },
        }),
    ],
    callbacks: {
        jwt({ token, user }) {
            if (user) {
                token.accessToken = user.accessToken;
                token.refreshToken = user.refreshToken;
                token.tokenType = user.tokenType;
                token.accessTokenExpires = user.accessTokenExpires;
            }
            return token;
        },
        session({ session, token }) {
            session.accessToken = token.accessToken;
            return session;
        },
    },
});