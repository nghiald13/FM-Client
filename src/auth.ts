import NextAuth, { CredentialsSignin } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import type { LoginErrorCode } from "@/lib/auth-errors";
import { loginSchema } from "@/lib/validations/auth";

class LoginError extends CredentialsSignin {
    constructor(code: LoginErrorCode) {
        super();
        this.code = code;
    }
}

const credentialsSchema = loginSchema.pick({ emailOrPhone: true, password: true });

const backendLoginResponseSchema = z.object({
    success: z.boolean().optional(),
    message: z.string().optional(),
    data: z.object({
        accessToken: z.string().min(1),
        refreshToken: z.string().min(1),
        expiresIn: z.number().positive().optional(),
    }),
});

const jwtPayloadSchema = z.object({
    exp: z.number().optional(),
    sub: z.string().optional(),
});

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

function getLoginEndpoint(): string {
    const loginEndpoint = process.env.BE_LOGIN_API;
    if (!loginEndpoint) {
        console.error("[auth] Thiếu biến môi trường BE_LOGIN_API");
        throw new LoginError("server_error");
    }
    return loginEndpoint;
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

                const endpoint = getLoginEndpoint();

                let response: Response;
                try {
                    response = await fetch(endpoint, {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(parsed.data),
                        cache: "no-store",
                        // signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
                    });
                } catch {
                    throw new LoginError("network_error");
                }

                if (response.status === 429) throw new LoginError("too_many_requests");
                if (response.status >= 500) throw new LoginError("server_error");
                if (!response.ok) throw new LoginError("invalid_credentials");

                let body: unknown;
                try {
                    body = await response.json();
                } catch {
                    throw new LoginError("invalid_response");
                }

                const parsedBody = backendLoginResponseSchema.safeParse(body);
                if (!parsedBody.success) throw new LoginError("invalid_response");

                const { accessToken, refreshToken, expiresIn } = parsedBody.data.data;
                const claims = decodeJwtPayload(accessToken);

                const accessTokenExpires = expiresIn
                    ? Date.now() + expiresIn * 1000
                    : claims.exp
                        ? claims.exp * 1000
                        : undefined;

                return {
                    id: claims.sub ?? parsed.data.emailOrPhone,
                    email: parsed.data.emailOrPhone,
                    accessToken,
                    refreshToken,
                    accessTokenExpires,
                };
            },
        }),
    ],
    callbacks: {
        jwt({ token, user }) {
            if (user) {
                token.accessToken = user.accessToken;
                token.refreshToken = user.refreshToken;
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