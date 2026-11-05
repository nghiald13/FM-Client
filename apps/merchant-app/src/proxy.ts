import { NextResponse } from "next/server";
import { auth } from "@/auth";

const APP_ORIGIN = process.env.APP_ORIGIN ?? "http://localhost:3000";

export default auth((req) => {
    if (!req.auth) {
        const path = req.nextUrl.pathname === "/" ? "" : req.nextUrl.pathname;
        const url = new URL("/login", APP_ORIGIN);
        url.searchParams.set("redirect", `/merchant${path}`);
        return NextResponse.redirect(url);
    }
    return NextResponse.next();
});

export const config = { matcher: ["/((?!_next|favicon.ico).*)"] };