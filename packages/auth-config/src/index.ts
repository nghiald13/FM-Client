/// <reference path="./types.d.ts" />
import type { NextAuthConfig } from "next-auth";

export const sharedAuthConfig = {
    session: { strategy: "jwt" },
    pages: { signIn: "/login" },
    trustHost: true,
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
} satisfies Omit<NextAuthConfig, "providers">;