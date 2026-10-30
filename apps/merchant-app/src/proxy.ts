// apps/merchant-app/src/proxy.ts
import { NextResponse, type NextRequest } from "next/server";
import { auth } from "@/auth";

export default auth((req: NextRequest & { auth: unknown }) => {
    if (!req.auth) {
        const url = new URL("/login", req.nextUrl.origin);
        url.searchParams.set("redirect", "/merchant");
        return NextResponse.redirect(url);
    }
    return NextResponse.next();
});

export const config = { matcher: ["/((?!_next|favicon.ico).*)"] };