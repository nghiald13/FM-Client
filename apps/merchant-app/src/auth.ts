import NextAuth from "next-auth";
import { sharedAuthConfig } from "@freemarket/auth-config";

export const { auth } = NextAuth({
    ...sharedAuthConfig,
    providers: [],
});