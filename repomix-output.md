This file is a merged representation of the entire codebase, combined into a single document by Repomix.

# File Summary

## Purpose
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
````
apps/
  auth-app/
    public/
      file.svg
      globe.svg
      next.svg
      vercel.svg
      window.svg
    src/
      actions/
        verify-actions.ts
      app/
        (auth)/
          login/
            page.tsx
          register/
            page.tsx
          verify/
            loading.tsx
            page.tsx
          layout.tsx
        api/
          auth/
            [...nextauth]/
              route.ts
        favicon.ico
        globals.css
        layout.tsx
      components/
        auth/
          form-field.tsx
          login-form.tsx
          otp-input.tsx
          password-strength.tsx
          register-form.tsx
          register-progress.tsx
          verify-account-form.tsx
          verify-key-error.tsx
        providers/
          auth-provider.tsx
      hooks/
        use-countdown.ts
      lib/
        validations/
          auth.ts
          verify.ts
        auth-errors.ts
        backend.ts
        constants.ts
        format.ts
        verify-api.ts
      stores/
        use-accounts-store.ts
        use-login-preferences-store.ts
      types/
        index.ts
      auth.ts
    .gitignore
    AGENTS.md
    eslint.config.mjs
    next.config.ts
    package.json
    postcss.config.mjs
    README.md
    tsconfig.json
  merchant-app/
    public/
      file.svg
      globe.svg
      next.svg
      vercel.svg
      window.svg
    src/
      actions/
        onboard-actions.ts
      app/
        (studio)/
          onboard/
            page.tsx
          layout.tsx
          loading.tsx
          page.tsx
        favicon.ico
        globals.css
        layout.tsx
      components/
        dashboard/
          dashboard-stats.tsx
          recent-orders.tsx
        merchant/
          centered-page.tsx
          merchant-product-card.tsx
          merchant-products.tsx
          merchant-profile-header.tsx
          merchant-shell.tsx
          merchant-sidebar.tsx
          merchant-status-notice.tsx
          share-store-button.tsx
        onboard/
          form-field.tsx
          onboard-progress.tsx
          onboard-wizrd.tsx
          stage1-form.tsx
          stage2-form.tsx
          stage3-form.tsx
        providers/
          auth-provider.tsx
      lib/
        validations/
          onboard.ts
        backend.ts
        constants.ts
        merchant-api.ts
        mock-data.ts
        utils.ts
      types/
        dashboard.ts
        merchant.ts
        onboard.ts
      auth.ts
      proxy.ts
    .gitignore
    AGENTS.md
    eslint.config.mjs
    next.config.ts
    package.json
    postcss.config.mjs
    README.md
    tsconfig.json
  shop-app/
    public/
      file.svg
      globe.svg
      next.svg
      vercel.svg
      window.svg
    src/
      app/
        favicon.ico
        globals.css
        layout.tsx
        page.tsx
      components/
        home/
          category-bar.tsx
          sort-tabs.tsx
        layout/
          bottom-nav.tsx
          cart-link.tsx
          desktop-nav.tsx
          mode-switcher.tsx
          site-footer.tsx
          site-header.tsx
        product/
          add-to-cart-button.tsx
          condition-badge.tsx
          product-card-skeleton.tsx
          product-card.tsx
          seller-badge.tsx
          wishlist-button.tsx
        providers/
          auth-provider.tsx
        shared/
          empty-state.tsx
      hooks/
        use-has-mounted.ts
      lib/
        mock-data.ts
        navigation.ts
        utils.ts
      stores/
        use-cart-store.ts
        use-wishlist-store.ts
      types/
        index.ts
    .gitignore
    AGENTS.md
    eslint.config.mjs
    next.config.ts
    package.json
    postcss.config.mjs
    README.md
    tsconfig.json
packages/
  auth-config/
    src/
      index.ts
      types.d.ts
    package.json
  ui/
    src/
      alert-dialog.tsx
      app-link.tsx
      badge.tsx
      button.tsx
      checkbox.tsx
      input.tsx
      label.tsx
      sheet.tsx
      skeleton.tsx
      tabs.tsx
      theme.css
    package.json
  utils/
    src/
      cn.ts
      format.ts
      index.ts
    package.json
.gitignore
AGENTS.md
CLAUDE.md
eslint.config.mjs
package.json
pnpm-workspace.yaml
README.md
repomix-output.xml
tsconfig.json
````

# Files

## File: repomix-output.xml
````xml
This file is a merged representation of the entire codebase, combined into a single document by Repomix.

<file_summary>
This section contains a summary of this file.

<purpose>
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.
</purpose>

<file_format>
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  - File path as an attribute
  - Full contents of the file
</file_format>

<usage_guidelines>
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.
</usage_guidelines>

<notes>
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)
</notes>

</file_summary>

<directory_structure>
apps/
  auth-app/
    public/
      file.svg
      globe.svg
      next.svg
      vercel.svg
      window.svg
    src/
      actions/
        verify-actions.ts
      app/
        (auth)/
          login/
            page.tsx
          register/
            page.tsx
          verify/
            loading.tsx
            page.tsx
          layout.tsx
        api/
          auth/
            [...nextauth]/
              route.ts
        favicon.ico
        globals.css
        layout.tsx
      components/
        auth/
          form-field.tsx
          login-form.tsx
          otp-input.tsx
          password-strength.tsx
          register-form.tsx
          register-progress.tsx
          verify-account-form.tsx
          verify-key-error.tsx
        providers/
          auth-provider.tsx
      hooks/
        use-countdown.ts
      lib/
        validations/
          auth.ts
          verify.ts
        auth-errors.ts
        backend.ts
        constants.ts
        format.ts
        verify-api.ts
      stores/
        use-accounts-store.ts
        use-login-preferences-store.ts
      types/
        index.ts
      auth.ts
    .gitignore
    AGENTS.md
    eslint.config.mjs
    next.config.ts
    package.json
    postcss.config.mjs
    README.md
    tsconfig.json
  merchant-app/
    public/
      file.svg
      globe.svg
      next.svg
      vercel.svg
      window.svg
    src/
      actions/
        onboard-actions.ts
      app/
        (studio)/
          onboard/
            page.tsx
          layout.tsx
          loading.tsx
          page.tsx
        favicon.ico
        globals.css
        layout.tsx
      components/
        dashboard/
          dashboard-stats.tsx
          recent-orders.tsx
        merchant/
          centered-page.tsx
          merchant-product-card.tsx
          merchant-products.tsx
          merchant-profile-header.tsx
          merchant-shell.tsx
          merchant-sidebar.tsx
          merchant-status-notice.tsx
          share-store-button.tsx
        onboard/
          form-field.tsx
          onboard-progress.tsx
          onboard-wizrd.tsx
          stage1-form.tsx
          stage2-form.tsx
          stage3-form.tsx
        providers/
          auth-provider.tsx
      lib/
        validations/
          onboard.ts
        backend.ts
        constants.ts
        merchant-api.ts
        mock-data.ts
        utils.ts
      types/
        dashboard.ts
        merchant.ts
        onboard.ts
      auth.ts
      proxy.ts
    .gitignore
    AGENTS.md
    eslint.config.mjs
    next.config.ts
    package.json
    postcss.config.mjs
    README.md
    tsconfig.json
  shop-app/
    public/
      file.svg
      globe.svg
      next.svg
      vercel.svg
      window.svg
    src/
      app/
        favicon.ico
        globals.css
        layout.tsx
        page.tsx
      components/
        home/
          category-bar.tsx
          sort-tabs.tsx
        layout/
          bottom-nav.tsx
          cart-link.tsx
          desktop-nav.tsx
          mode-switcher.tsx
          site-footer.tsx
          site-header.tsx
        product/
          add-to-cart-button.tsx
          condition-badge.tsx
          product-card-skeleton.tsx
          product-card.tsx
          seller-badge.tsx
          wishlist-button.tsx
        providers/
          auth-provider.tsx
        shared/
          empty-state.tsx
      hooks/
        use-has-mounted.ts
      lib/
        mock-data.ts
        navigation.ts
        utils.ts
      stores/
        use-cart-store.ts
        use-wishlist-store.ts
      types/
        index.ts
    .gitignore
    AGENTS.md
    eslint.config.mjs
    next.config.ts
    package.json
    postcss.config.mjs
    README.md
    tsconfig.json
packages/
  auth-config/
    src/
      index.ts
      types.d.ts
    package.json
  ui/
    src/
      alert-dialog.tsx
      app-link.tsx
      badge.tsx
      button.tsx
      checkbox.tsx
      input.tsx
      label.tsx
      sheet.tsx
      skeleton.tsx
      tabs.tsx
      theme.css
    package.json
  utils/
    src/
      cn.ts
      format.ts
      index.ts
    package.json
.gitignore
AGENTS.md
CLAUDE.md
eslint.config.mjs
package.json
pnpm-workspace.yaml
README.md
tsconfig.json
</directory_structure>

<files>
This section contains the contents of the repository's files.

<file path="apps/auth-app/public/file.svg">
<svg fill="none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 13.5V5.41a1 1 0 0 0-.3-.7L9.8.29A1 1 0 0 0 9.08 0H1.5v13.5A2.5 2.5 0 0 0 4 16h8a2.5 2.5 0 0 0 2.5-2.5m-1.5 0v-7H8v-5H3v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1M9.5 5V2.12L12.38 5zM5.13 5h-.62v1.25h2.12V5zm-.62 3h7.12v1.25H4.5zm.62 3h-.62v1.25h7.12V11z" clip-rule="evenodd" fill="#666" fill-rule="evenodd"/></svg>
</file>

<file path="apps/auth-app/public/globe.svg">
<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g clip-path="url(#a)"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.27 14.1a6.5 6.5 0 0 0 3.67-3.45q-1.24.21-2.7.34-.31 1.83-.97 3.1M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.48-1.52a7 7 0 0 1-.96 0H7.5a4 4 0 0 1-.84-1.32q-.38-.89-.63-2.08a40 40 0 0 0 3.92 0q-.25 1.2-.63 2.08a4 4 0 0 1-.84 1.31zm2.94-4.76q1.66-.15 2.95-.43a7 7 0 0 0 0-2.58q-1.3-.27-2.95-.43a18 18 0 0 1 0 3.44m-1.27-3.54a17 17 0 0 1 0 3.64 39 39 0 0 1-4.3 0 17 17 0 0 1 0-3.64 39 39 0 0 1 4.3 0m1.1-1.17q1.45.13 2.69.34a6.5 6.5 0 0 0-3.67-3.44q.65 1.26.98 3.1M8.48 1.5l.01.02q.41.37.84 1.31.38.89.63 2.08a40 40 0 0 0-3.92 0q.25-1.2.63-2.08a4 4 0 0 1 .85-1.32 7 7 0 0 1 .96 0m-2.75.4a6.5 6.5 0 0 0-3.67 3.44 29 29 0 0 1 2.7-.34q.31-1.83.97-3.1M4.58 6.28q-1.66.16-2.95.43a7 7 0 0 0 0 2.58q1.3.27 2.95.43a18 18 0 0 1 0-3.44m.17 4.71q-1.45-.12-2.69-.34a6.5 6.5 0 0 0 3.67 3.44q-.65-1.27-.98-3.1" fill="#666"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></svg>
</file>

<file path="apps/auth-app/public/next.svg">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 394 80"><path fill="#000" d="M262 0h68.5v12.7h-27.2v66.6h-13.6V12.7H262V0ZM149 0v12.7H94v20.4h44.3v12.6H94v21h55v12.6H80.5V0h68.7zm34.3 0h-17.8l63.8 79.4h17.9l-32-39.7 32-39.6h-17.9l-23 28.6-23-28.6zm18.3 56.7-9-11-27.1 33.7h17.8l18.3-22.7z"/><path fill="#000" d="M81 79.3 17 0H0v79.3h13.6V17l50.2 62.3H81Zm252.6-.4c-1 0-1.8-.4-2.5-1s-1.1-1.6-1.1-2.6.3-1.8 1-2.5 1.6-1 2.6-1 1.8.3 2.5 1a3.4 3.4 0 0 1 .6 4.3 3.7 3.7 0 0 1-3 1.8zm23.2-33.5h6v23.3c0 2.1-.4 4-1.3 5.5a9.1 9.1 0 0 1-3.8 3.5c-1.6.8-3.5 1.3-5.7 1.3-2 0-3.7-.4-5.3-1s-2.8-1.8-3.7-3.2c-.9-1.3-1.4-3-1.4-5h6c.1.8.3 1.6.7 2.2s1 1.2 1.6 1.5c.7.4 1.5.5 2.4.5 1 0 1.8-.2 2.4-.6a4 4 0 0 0 1.6-1.8c.3-.8.5-1.8.5-3V45.5zm30.9 9.1a4.4 4.4 0 0 0-2-3.3 7.5 7.5 0 0 0-4.3-1.1c-1.3 0-2.4.2-3.3.5-.9.4-1.6 1-2 1.6a3.5 3.5 0 0 0-.3 4c.3.5.7.9 1.3 1.2l1.8 1 2 .5 3.2.8c1.3.3 2.5.7 3.7 1.2a13 13 0 0 1 3.2 1.8 8.1 8.1 0 0 1 3 6.5c0 2-.5 3.7-1.5 5.1a10 10 0 0 1-4.4 3.5c-1.8.8-4.1 1.2-6.8 1.2-2.6 0-4.9-.4-6.8-1.2-2-.8-3.4-2-4.5-3.5a10 10 0 0 1-1.7-5.6h6a5 5 0 0 0 3.5 4.6c1 .4 2.2.6 3.4.6 1.3 0 2.5-.2 3.5-.6 1-.4 1.8-1 2.4-1.7a4 4 0 0 0 .8-2.4c0-.9-.2-1.6-.7-2.2a11 11 0 0 0-2.1-1.4l-3.2-1-3.8-1c-2.8-.7-5-1.7-6.6-3.2a7.2 7.2 0 0 1-2.4-5.7 8 8 0 0 1 1.7-5 10 10 0 0 1 4.3-3.5c2-.8 4-1.2 6.4-1.2 2.3 0 4.4.4 6.2 1.2 1.8.8 3.2 2 4.3 3.4 1 1.4 1.5 3 1.5 5h-5.8z"/></svg>
</file>

<file path="apps/auth-app/public/vercel.svg">
<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1155 1000"><path d="m577.3 0 577.4 1000H0z" fill="#fff"/></svg>
</file>

<file path="apps/auth-app/public/window.svg">
<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 2.5h13v10a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1zM0 1h16v11.5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 0 12.5zm3.75 4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M7 4.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m1.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5" fill="#666"/></svg>
</file>

<file path="apps/auth-app/src/actions/verify-actions.ts">
"use server";

import { z } from "zod";
import { requestVerifyEmail, requestVerifyProcess } from "@/lib/verify-api";
import type { ActionResult } from "@/types";

const emailSchema = z.string().trim().min(1).max(254);
const keySchema = z.string().min(1).max(512);

export async function requestVerifyProcessAction(
    email: string,
): Promise<ActionResult<{ key: string }>> {
    const parsed = emailSchema.safeParse(email);
    if (!parsed.success) return { ok: false, message: "Email không hợp lệ" };
    return requestVerifyProcess(parsed.data);
}

export async function requestVerifyEmailAction(key: string): Promise<ActionResult> {
    const parsed = keySchema.safeParse(key);
    if (!parsed.success) return { ok: false, message: "Liên kết xác minh không hợp lệ" };
    return requestVerifyEmail(parsed.data);
}
</file>

<file path="apps/auth-app/src/app/(auth)/login/page.tsx">
import type { Metadata } from "next";
import { LoginForm } from "@/components/auth/login-form";

export const metadata: Metadata = {
    title: "Đăng nhập",
};

interface LoginPageProps {
    searchParams: Promise<{ redirect?: string }>;
}

function getSafeRedirect(value: string | undefined): string {
    if (!value) return "/";
    return value.startsWith("/") && !value.startsWith("//") ? value : "/";
}

export default async function LoginPage({ searchParams }: LoginPageProps) {
    const params = await searchParams;

    return <LoginForm redirectTo={getSafeRedirect(params.redirect)} />;
}
</file>

<file path="apps/auth-app/src/app/(auth)/register/page.tsx">
import type { Metadata } from "next";
import { RegisterForm } from "@/components/auth/register-form";

export const metadata: Metadata = {
    title: "Đăng ký",
};

export default function RegisterPage() {
    return <RegisterForm />;
}
</file>

<file path="apps/auth-app/src/app/(auth)/verify/loading.tsx">
import { Skeleton } from "@freemarket/ui/skeleton";

export default function VerifyLoading() {
    return (
        <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
            <Skeleton className="size-12 rounded-full" />
            <Skeleton className="h-6 w-48" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-11 w-full" />
            <Skeleton className="h-12 w-full" />
        </div>
    );
}
</file>

<file path="apps/auth-app/src/app/(auth)/verify/page.tsx">
import type { Metadata } from "next";
import { VerifyKeyError } from "@/components/auth/verify-key-error";
import { resolveVerifyKey } from "@/lib/verify-api";
import { VerifyAccountForm } from "@/components/auth/verify-account-form";

export const metadata: Metadata = {
    title: "Xác minh tài khoản",
    robots: { index: false },
};

interface VerifyPageProps {
    searchParams: Promise<{ key?: string }>;
}

export default async function VerifyPage({ searchParams }: VerifyPageProps) {
    const { key } = await searchParams;

    if (!key) {
        return (
            <VerifyKeyError message="Liên kết xác minh thiếu thông tin. Vui lòng đăng nhập lại để nhận liên kết mới." />
        );
    }

    const result = await resolveVerifyKey(key);
    if (!result.ok) {
        return <VerifyKeyError message={result.message} />;
    }

    return <VerifyAccountForm user={result.data} verifyKey={key} redirectTo="/" />;
}
</file>

<file path="apps/auth-app/src/app/(auth)/layout.tsx">
import Link from "next/link";
import { Store } from "lucide-react";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-dvh flex-col items-center justify-center px-4 py-10">
            <Link
                href="/"
                className="mb-6 flex items-center gap-2"
                aria-label="FreeMarket - Về trang chủ"
            >
                <span className="flex size-10 items-center justify-center rounded-xl bg-emerald-600 text-white">
                    <Store className="size-5" aria-hidden="true" />
                </span>
                <span className="text-xl font-bold tracking-tight text-slate-900">FreeMarket</span>
            </Link>

            <div className="w-full max-w-sm">{children}</div>

            <p className="mt-8 text-xs text-slate-400">© 2026 FreeMarket</p>
        </div>
    );
}
</file>

<file path="apps/auth-app/src/app/api/auth/[...nextauth]/route.ts">
import { handlers } from "@/auth";

export const { GET, POST } = handlers;
</file>

<file path="apps/auth-app/src/components/auth/verify-key-error.tsx">
import Link from "next/link";
import { AlertCircle } from "lucide-react";

interface VerifyKeyErrorProps {
    message: string;
}

export function VerifyKeyError({ message }: VerifyKeyErrorProps) {
    return (
        <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center sm:p-6">
            <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-rose-50 text-rose-600">
                <AlertCircle className="size-6" aria-hidden="true" />
            </span>
            <h1 className="mt-4 text-xl font-bold text-slate-900">Không thể xác minh</h1>
            <p role="alert" className="mt-1 text-sm text-slate-500">
                {message}
            </p>
            <Link
                href="/login"
                className="mt-5 inline-flex h-11 w-full items-center justify-center rounded-lg bg-emerald-600 px-4 text-sm font-medium text-white transition-colors duration-150 hover:bg-emerald-700"
            >
                Quay lại đăng nhập
            </Link>
        </div>
    );
}
</file>

<file path="apps/auth-app/src/hooks/use-countdown.ts">
"use client";

import { useCallback, useEffect, useState } from "react";

interface Countdown {
    secondsLeft: number;
    start: (seconds: number) => void;
}

export function useCountdown(initialSeconds: number): Countdown {
    const [secondsLeft, setSecondsLeft] = useState<number>(initialSeconds);

    useEffect(() => {
        if (secondsLeft <= 0) return;
        const timer = window.setTimeout(() => setSecondsLeft((current) => current - 1), 1000);
        return () => window.clearTimeout(timer);
    }, [secondsLeft]);

    const start = useCallback((seconds: number): void => setSecondsLeft(seconds), []);

    return { secondsLeft, start };
}
</file>

<file path="apps/auth-app/src/lib/validations/auth.ts">
import { z } from "zod";
import type { LoginFormValues, RegisterFormValues } from "@/types";

export const loginSchema = z.object({
    emailOrPhone: z.string().min(1, "Vui lòng nhập email hoặc số điện thoại"),
    password: z
        .string()
        .min(1, "Vui lòng nhập mật khẩu")
        .min(6, "Mật khẩu tối thiểu 6 ký tự"),
    rememberMe: z.boolean(),
}) satisfies z.ZodType<LoginFormValues>;

const phoneRegex = /^(0|\+84)(3|5|7|8|9)\d{8}$/;

export const registerSchema = z
    .object({
        fullName: z
            .string()
            .trim()
            .min(1, "Vui lòng nhập họ tên")
            .min(2, "Họ tên tối thiểu 2 ký tự")
            .max(50, "Họ tên tối đa 50 ký tự"),
        email: z.string().min(1, "Vui lòng nhập email").email("Email không hợp lệ"),
        password: z
            .string()
            .min(1, "Vui lòng nhập mật khẩu")
            .min(8, "Mật khẩu tối thiểu 8 ký tự")
            .regex(/[A-Za-z]/, "Mật khẩu cần có ít nhất 1 chữ cái")
            .regex(/\d/, "Mật khẩu cần có ít nhất 1 chữ số"),
        confirmPassword: z.string().min(1, "Vui lòng nhập lại mật khẩu"),
        phone: z
            .string()
            .min(1, "Vui lòng nhập số điện thoại")
            .regex(phoneRegex, "Số điện thoại không hợp lệ"),
        city: z.string().min(1, "Vui lòng chọn tỉnh/thành"),
        intent: z.enum(["buy", "sell", "both"]),
        acceptTerms: z.boolean().refine((value) => value, "Bạn cần đồng ý với điều khoản để tiếp tục"),
    })
    .refine((values) => values.password === values.confirmPassword, {
        message: "Mật khẩu xác nhận không khớp",
        path: ["confirmPassword"],
    }) satisfies z.ZodType<RegisterFormValues>;

export const registerStepFields: (keyof RegisterFormValues)[][] = [
    ["fullName", "email", "password", "confirmPassword"],
    ["phone", "city", "intent"],
    ["acceptTerms"],
];

export function getPasswordStrength(password: string): { score: number; label: string } {
    if (!password) return { score: 0, label: "" };

    const checks: boolean[] = [
        password.length >= 8,
        /[a-z]/.test(password) && /[A-Z]/.test(password),
        /\d/.test(password),
        /[^A-Za-z0-9]/.test(password),
    ];
    const score = checks.filter(Boolean).length;
    const labels = ["Rất yếu", "Yếu", "Trung bình", "Khá mạnh", "Mạnh"];

    return { score, label: labels[score] };
}
</file>

<file path="apps/auth-app/src/lib/validations/verify.ts">
import { z } from "zod";

export const OTP_LENGTH = 6;

export const otpSchema = z.string().regex(/^\d{6}$/, "Mã OTP gồm đúng 6 chữ số");
</file>

<file path="apps/auth-app/src/lib/auth-errors.ts">
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
</file>

<file path="apps/auth-app/src/lib/backend.ts">
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
</file>

<file path="apps/auth-app/src/lib/constants.ts">
import { ShoppingBag, Store, Repeat } from "lucide-react";
import type { IntentOption, RegisterStepConfig } from "@/types";

export const registerSteps: RegisterStepConfig[] = [
    { id: "account", label: "Tài khoản", description: "Tạo thông tin đăng nhập của bạn." },
    { id: "profile", label: "Thông tin", description: "Giúp người mua và người bán tin tưởng bạn hơn." },
    { id: "confirm", label: "Xác nhận", description: "Kiểm tra lại và hoàn tất đăng ký." },
];

export const intentOptions: IntentOption[] = [
    { value: "buy", label: "Mua sắm", description: "Tìm đồ mới và đồ cũ giá tốt.", icon: ShoppingBag },
    { value: "sell", label: "Bán hàng", description: "Đăng bán nhanh, quản lý đơn trong Studio.", icon: Store },
    { value: "both", label: "Cả hai", description: "Vừa mua vừa bán, chuyển chế độ bất kỳ lúc nào.", icon: Repeat },
];

export const vietnamCities: string[] = [
    "TP. Hồ Chí Minh",
    "Hà Nội",
    "Đà Nẵng",
    "Cần Thơ",
    "Hải Phòng",
    "Huế",
    "Nha Trang",
    "Đà Lạt",
    "Vũng Tàu",
    "Biên Hòa",
    "Khác",
];

export const DEFAULT_AVATAR =
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=800&q=80";
</file>

<file path="apps/auth-app/src/lib/format.ts">
export function maskEmail(email: string): string {
    const [local, domain] = email.split("@");
    if (!local || !domain) return email;
    const visible = local.slice(0, Math.min(2, local.length));
    return `${visible}${"*".repeat(Math.max(local.length - visible.length, 2))}@${domain}`;
}

export function formatCountdown(totalSeconds: number): string {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}
</file>

<file path="apps/auth-app/src/lib/verify-api.ts">
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
</file>

<file path="apps/auth-app/src/stores/use-accounts-store.ts">
import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { MockAccount } from "@/types";

interface AccountsState {
    accounts: MockAccount[];
    addAccount: (account: MockAccount) => void;
}

export const useAccountsStore = create<AccountsState>()(
    persist(
        (set) => ({
            accounts: [],
            addAccount: (account) => set((state) => ({ accounts: [...state.accounts, account] })),
        }),
        { name: "freemarket-accounts" },
    ),
);
</file>

<file path="apps/auth-app/src/stores/use-login-preferences-store.ts">
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface LoginPreferencesState {
    rememberedEmail: string;
    setRememberedEmail: (email: string) => void;
}

export const useLoginPreferencesStore = create<LoginPreferencesState>()(
    persist(
        (set) => ({
            rememberedEmail: "",
            setRememberedEmail: (rememberedEmail) => set({ rememberedEmail }),
        }),
        { name: "freemarket-login-preferences" },
    ),
);
</file>

<file path="apps/auth-app/src/types/index.ts">
import { LucideIcon } from "lucide-react";


export interface AuthUser {
    id: string;
    name: string;
    email: string;
    avatar: string;
}

export interface MockAccount extends AuthUser {
    password: string;
}

export interface LoginFormValues {
    emailOrPhone: string;
    password: string;
    rememberMe: boolean;
}

export type LoginResult =
    | { ok: true; user: AuthUser }
    | { ok: false; message: string };

export type RegisterIntent = "buy" | "sell" | "both";

export interface RegisterFormValues {
    fullName: string;
    email: string;
    password: string;
    confirmPassword: string;
    phone: string;
    city: string;
    intent: RegisterIntent;
    acceptTerms: boolean;
}

export type RegisterResult =
    | { ok: true; account: MockAccount }
    | { ok: false; message: string };

export interface RegisterStepConfig {
    id: string;
    label: string;
    description: string;
}

export interface IntentOption {
    value: RegisterIntent;
    label: string;
    description: string;
    icon: LucideIcon;
}

export interface PasswordStrength {
    score: number;
    label: string;
}

export type ItemCondition = "New" | "Like New" | "Well Used";
export type ListingStatus = "active" | "paused";
export type OrderStatus = "pending" | "shipped" | "completed";

export interface ActionFailure {
    ok: false;
    message: string;
    /** "invalid_token": key đã hết hạn hoặc không hợp lệ */
    code?: "invalid_token";
}

export type ActionResult<T = void> = { ok: true; data: T } | ActionFailure;

export interface VerifyAccountUser {
    email: string;
    fullName?: string;
}
</file>

<file path="apps/auth-app/.gitignore">
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.*
.yarn/*
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/versions

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.pnpm-debug.log*

# env files (can opt-in for committing if needed)
.env*

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
</file>

<file path="apps/auth-app/AGENTS.md">
<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
</file>

<file path="apps/auth-app/eslint.config.mjs">
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
</file>

<file path="apps/auth-app/postcss.config.mjs">
const config = { plugins: { "@tailwindcss/postcss": {} } };
export default config;
</file>

<file path="apps/auth-app/README.md">
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
</file>

<file path="apps/auth-app/tsconfig.json">
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".next/dev/types/**/*.ts",
    "**/*.mts"
  ],
  "exclude": ["node_modules"]
}
</file>

<file path="apps/merchant-app/public/file.svg">
<svg fill="none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 13.5V5.41a1 1 0 0 0-.3-.7L9.8.29A1 1 0 0 0 9.08 0H1.5v13.5A2.5 2.5 0 0 0 4 16h8a2.5 2.5 0 0 0 2.5-2.5m-1.5 0v-7H8v-5H3v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1M9.5 5V2.12L12.38 5zM5.13 5h-.62v1.25h2.12V5zm-.62 3h7.12v1.25H4.5zm.62 3h-.62v1.25h7.12V11z" clip-rule="evenodd" fill="#666" fill-rule="evenodd"/></svg>
</file>

<file path="apps/merchant-app/public/globe.svg">
<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g clip-path="url(#a)"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.27 14.1a6.5 6.5 0 0 0 3.67-3.45q-1.24.21-2.7.34-.31 1.83-.97 3.1M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.48-1.52a7 7 0 0 1-.96 0H7.5a4 4 0 0 1-.84-1.32q-.38-.89-.63-2.08a40 40 0 0 0 3.92 0q-.25 1.2-.63 2.08a4 4 0 0 1-.84 1.31zm2.94-4.76q1.66-.15 2.95-.43a7 7 0 0 0 0-2.58q-1.3-.27-2.95-.43a18 18 0 0 1 0 3.44m-1.27-3.54a17 17 0 0 1 0 3.64 39 39 0 0 1-4.3 0 17 17 0 0 1 0-3.64 39 39 0 0 1 4.3 0m1.1-1.17q1.45.13 2.69.34a6.5 6.5 0 0 0-3.67-3.44q.65 1.26.98 3.1M8.48 1.5l.01.02q.41.37.84 1.31.38.89.63 2.08a40 40 0 0 0-3.92 0q.25-1.2.63-2.08a4 4 0 0 1 .85-1.32 7 7 0 0 1 .96 0m-2.75.4a6.5 6.5 0 0 0-3.67 3.44 29 29 0 0 1 2.7-.34q.31-1.83.97-3.1M4.58 6.28q-1.66.16-2.95.43a7 7 0 0 0 0 2.58q1.3.27 2.95.43a18 18 0 0 1 0-3.44m.17 4.71q-1.45-.12-2.69-.34a6.5 6.5 0 0 0 3.67 3.44q-.65-1.27-.98-3.1" fill="#666"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></svg>
</file>

<file path="apps/merchant-app/public/next.svg">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 394 80"><path fill="#000" d="M262 0h68.5v12.7h-27.2v66.6h-13.6V12.7H262V0ZM149 0v12.7H94v20.4h44.3v12.6H94v21h55v12.6H80.5V0h68.7zm34.3 0h-17.8l63.8 79.4h17.9l-32-39.7 32-39.6h-17.9l-23 28.6-23-28.6zm18.3 56.7-9-11-27.1 33.7h17.8l18.3-22.7z"/><path fill="#000" d="M81 79.3 17 0H0v79.3h13.6V17l50.2 62.3H81Zm252.6-.4c-1 0-1.8-.4-2.5-1s-1.1-1.6-1.1-2.6.3-1.8 1-2.5 1.6-1 2.6-1 1.8.3 2.5 1a3.4 3.4 0 0 1 .6 4.3 3.7 3.7 0 0 1-3 1.8zm23.2-33.5h6v23.3c0 2.1-.4 4-1.3 5.5a9.1 9.1 0 0 1-3.8 3.5c-1.6.8-3.5 1.3-5.7 1.3-2 0-3.7-.4-5.3-1s-2.8-1.8-3.7-3.2c-.9-1.3-1.4-3-1.4-5h6c.1.8.3 1.6.7 2.2s1 1.2 1.6 1.5c.7.4 1.5.5 2.4.5 1 0 1.8-.2 2.4-.6a4 4 0 0 0 1.6-1.8c.3-.8.5-1.8.5-3V45.5zm30.9 9.1a4.4 4.4 0 0 0-2-3.3 7.5 7.5 0 0 0-4.3-1.1c-1.3 0-2.4.2-3.3.5-.9.4-1.6 1-2 1.6a3.5 3.5 0 0 0-.3 4c.3.5.7.9 1.3 1.2l1.8 1 2 .5 3.2.8c1.3.3 2.5.7 3.7 1.2a13 13 0 0 1 3.2 1.8 8.1 8.1 0 0 1 3 6.5c0 2-.5 3.7-1.5 5.1a10 10 0 0 1-4.4 3.5c-1.8.8-4.1 1.2-6.8 1.2-2.6 0-4.9-.4-6.8-1.2-2-.8-3.4-2-4.5-3.5a10 10 0 0 1-1.7-5.6h6a5 5 0 0 0 3.5 4.6c1 .4 2.2.6 3.4.6 1.3 0 2.5-.2 3.5-.6 1-.4 1.8-1 2.4-1.7a4 4 0 0 0 .8-2.4c0-.9-.2-1.6-.7-2.2a11 11 0 0 0-2.1-1.4l-3.2-1-3.8-1c-2.8-.7-5-1.7-6.6-3.2a7.2 7.2 0 0 1-2.4-5.7 8 8 0 0 1 1.7-5 10 10 0 0 1 4.3-3.5c2-.8 4-1.2 6.4-1.2 2.3 0 4.4.4 6.2 1.2 1.8.8 3.2 2 4.3 3.4 1 1.4 1.5 3 1.5 5h-5.8z"/></svg>
</file>

<file path="apps/merchant-app/public/vercel.svg">
<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1155 1000"><path d="m577.3 0 577.4 1000H0z" fill="#fff"/></svg>
</file>

<file path="apps/merchant-app/public/window.svg">
<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 2.5h13v10a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1zM0 1h16v11.5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 0 12.5zm3.75 4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M7 4.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m1.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5" fill="#666"/></svg>
</file>

<file path="apps/merchant-app/src/actions/onboard-actions.ts">
"use server";

import { postOnboardStage } from "@/lib/merchant-api";
import {
    merchantAddressDtoSchema,
    merchantKycSchema,
    merchantSchema,
} from "@/lib/validations/onboard";
import type {
    ActionResult,
    MerchantAddressDto,
    MerchantDto,
    MerchantKycDto,
} from "@/types/onboard";

const INVALID: ActionResult = { ok: false, message: "Dữ liệu không hợp lệ. Vui lòng kiểm tra lại" };

export async function submitStage1Action(values: MerchantDto): Promise<ActionResult> {
    const parsed = merchantSchema.safeParse(values);
    if (!parsed.success) return INVALID;
    return postOnboardStage("stage1", parsed.data);
}

export async function submitStage2Action(values: MerchantAddressDto): Promise<ActionResult> {
    const parsed = merchantAddressDtoSchema.safeParse(values);
    if (!parsed.success) return INVALID;
    return postOnboardStage("stage2", parsed.data);
}

export async function submitStage3Action(values: MerchantKycDto): Promise<ActionResult> {
    const parsed = merchantKycSchema.safeParse(values);
    if (!parsed.success) return INVALID;
    return postOnboardStage("stage3", parsed.data);
}
</file>

<file path="apps/merchant-app/src/app/(studio)/onboard/page.tsx">
import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { CenteredPage } from "@/components/merchant/centered-page";
import { MerchantStatusNotice } from "@/components/merchant/merchant-status-notice";

import { getMerchantState } from "@/lib/merchant-api";
import { OnboardWizard } from "@/components/onboard/onboard-wizrd";

export const metadata: Metadata = {
    title: "Đăng ký bán hàng",
    robots: { index: false },
};

export default async function OnboardPage() {
    const state = await getMerchantState();

    if (state.status === "active") redirect("/");

    if (state.status === "pending") {
        return (
            <CenteredPage>
                <MerchantStatusNotice variant="pending" />
            </CenteredPage>
        );
    }

    if (state.status === "error") {
        return (
            <CenteredPage>
                <MerchantStatusNotice variant="error" message={state.message} />
            </CenteredPage>
        );
    }

    return (
        <CenteredPage wide>
            <OnboardWizard />
        </CenteredPage>
    );
}
</file>

<file path="apps/merchant-app/src/app/(studio)/layout.tsx">
import type { ReactNode } from "react";
import { redirect } from "next/navigation";
import { MerchantShell } from "@/components/merchant/merchant-shell";
import { MerchantStatusNotice } from "@/components/merchant/merchant-status-notice";
import { CenteredPage } from "@/components/merchant/centered-page";
import { getMerchantState } from "@/lib/merchant-api";

export default async function StudioLayout({ children }: { children: ReactNode }) {
    const state = await getMerchantState();

    switch (state.status) {
        case "not_onboarded":
            redirect("/onboard");
        case "pending":
            return (
                <CenteredPage>
                    <MerchantStatusNotice variant="pending" />
                </CenteredPage>
            );
        case "error":
            return (
                <CenteredPage>
                    <MerchantStatusNotice variant="error" message={state.message} />
                </CenteredPage>
            );
        case "active":
            return <MerchantShell>{children}</MerchantShell>;
    }
}
</file>

<file path="apps/merchant-app/src/app/(studio)/loading.tsx">
import { Skeleton } from "@freemarket/ui/skeleton";

export default function MerchantLoading() {
    return (
        <div>
            <Skeleton className="h-36 w-full rounded-none sm:h-52" />
            <div className="px-4 sm:px-6">
                <Skeleton className="-mt-10 size-20 rounded-full ring-4 ring-white sm:size-24" />
                <Skeleton className="mt-3 h-6 w-48" />
                <Skeleton className="mt-2 h-4 w-full max-w-md" />
                <div className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
                    {Array.from({ length: 4 }, (_, i) => (
                        <Skeleton key={i} className="h-24 w-full" />
                    ))}
                </div>
                <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                    {Array.from({ length: 8 }, (_, i) => (
                        <div key={i} className="space-y-2">
                            <Skeleton className="aspect-square w-full" />
                            <Skeleton className="h-4 w-3/4" />
                            <Skeleton className="h-4 w-1/2" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
</file>

<file path="apps/merchant-app/src/app/(studio)/page.tsx">
import { DashboardStats } from "@/components/dashboard/dashboard-stats";
import { RecentOrders } from "@/components/dashboard/recent-orders";
import { MerchantProducts } from "@/components/merchant/merchant-products";
import { MerchantProfileHeader } from "@/components/merchant/merchant-profile-header";
import { getMerchantState } from "@/lib/merchant-api";
import {
    mockCategories,
    mockDashboardStats,
    mockProducts,
    mockRecentOrders,
} from "@/lib/mock-data";

export default async function MerchantDashboardPage() {
    const state = await getMerchantState();
    // Layout đã xử lý pending / onboard / lỗi; ở đây chỉ còn trạng thái active.
    if (state.status !== "active") return null;

    return (
        <>
            <MerchantProfileHeader merchant={state.merchant} />
            <DashboardStats stats={mockDashboardStats} />
            <RecentOrders orders={mockRecentOrders} />
            <MerchantProducts categories={mockCategories} products={mockProducts} />
        </>
    );
}
</file>

<file path="apps/merchant-app/src/components/dashboard/dashboard-stats.tsx">
import { ClipboardList, Package, Star, Wallet, type LucideIcon } from "lucide-react";
import type { DashboardStat, DashboardStatId } from "@/types/dashboard";

const icons: Record<DashboardStatId, LucideIcon> = {
    revenue: Wallet,
    orders: ClipboardList,
    listings: Package,
    rating: Star,
};

interface DashboardStatsProps {
    stats: DashboardStat[];
}

export function DashboardStats({ stats }: DashboardStatsProps) {
    return (
        <section className="px-4 pt-5 sm:px-6" aria-label="Tổng quan cửa hàng">
            <h2 className="mb-3 text-lg font-semibold text-slate-900">Tổng quan</h2>
            <dl className="grid grid-cols-2 gap-3 lg:grid-cols-4">
                {stats.map(({ id, label, value, hint }) => {
                    const Icon = icons[id];
                    return (
                        <div key={id} className="rounded-lg border border-slate-200 bg-white p-3.5">
                            <dt className="flex items-center gap-1.5 text-xs text-slate-500">
                                <Icon className="size-4 text-emerald-600" aria-hidden="true" />
                                {label}
                            </dt>
                            <dd className="mt-1.5 text-xl font-semibold text-slate-900">{value}</dd>
                            <p className="mt-0.5 text-xs text-slate-500">{hint}</p>
                        </div>
                    );
                })}
            </dl>
        </section>
    );
}
</file>

<file path="apps/merchant-app/src/components/dashboard/recent-orders.tsx">
import { ClipboardList } from "lucide-react";
import { Badge } from "@freemarket/ui/badge";
import { cn, formatVnd } from "@freemarket/utils";
import type { OrderStatus, RecentOrder } from "@/types/dashboard";

const statusMap: Record<OrderStatus, { label: string; className: string }> = {
    pending: { label: "Chờ xử lý", className: "bg-amber-50 text-amber-700 border-amber-200" },
    shipped: { label: "Đang giao", className: "bg-sky-50 text-sky-700 border-sky-200" },
    completed: { label: "Hoàn tất", className: "bg-emerald-50 text-emerald-700 border-emerald-200" },
};

interface RecentOrdersProps {
    orders: RecentOrder[];
}

export function RecentOrders({ orders }: RecentOrdersProps) {
    return (
        <section className="px-4 pt-6 sm:px-6" aria-label="Đơn hàng gần đây">
            <h2 className="mb-3 text-lg font-semibold text-slate-900">Đơn hàng gần đây</h2>

            {orders.length === 0 ? (
                <div className="flex flex-col items-center gap-2 rounded-lg border border-dashed border-slate-300 bg-white px-4 py-10 text-center">
                    <ClipboardList className="size-8 text-slate-400" aria-hidden="true" />
                    <p className="text-sm text-slate-600">Chưa có đơn hàng nào.</p>
                </div>
            ) : (
                <ul className="divide-y divide-slate-100 rounded-lg border border-slate-200 bg-white">
                    {orders.map((order) => {
                        const status = statusMap[order.status];
                        return (
                            <li key={order.id} className="flex items-center justify-between gap-3 px-3.5 py-3">
                                <div className="min-w-0">
                                    <p className="truncate text-sm font-medium text-slate-900">{order.productTitle}</p>
                                    <p className="truncate text-xs text-slate-500">
                                        #{order.code} · {order.buyerName} · {order.createdLabel}
                                    </p>
                                </div>
                                <div className="flex shrink-0 flex-col items-end gap-1">
                                    <span className="text-sm font-semibold text-slate-900">{formatVnd(order.total)}</span>
                                    <Badge variant="outline" className={cn(status.className)}>
                                        {status.label}
                                    </Badge>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            )}
        </section>
    );
}
</file>

<file path="apps/merchant-app/src/components/merchant/centered-page.tsx">
import type { ReactNode } from "react";
import { Store } from "lucide-react";

interface CenteredPageProps {
    children: ReactNode;
    wide?: boolean;
}

export function CenteredPage({ children, wide = false }: CenteredPageProps) {
    return (
        <div className="flex min-h-dvh flex-col items-center justify-center px-4 py-10">
            <div className="mb-6 flex items-center gap-2">
                <span className="flex size-10 items-center justify-center rounded-xl bg-emerald-600 text-white">
                    <Store className="size-5" aria-hidden="true" />
                </span>
                <span className="text-xl font-bold tracking-tight text-slate-900">FreeMarket</span>
            </div>
            <div className={wide ? "w-full max-w-lg" : "w-full max-w-sm"}>{children}</div>
        </div>
    );
}
</file>

<file path="apps/merchant-app/src/components/merchant/merchant-status-notice.tsx">
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
</file>

<file path="apps/merchant-app/src/components/onboard/form-field.tsx">
import type { ComponentProps, ReactNode } from "react";
import { AlertCircle, ArrowRight, Loader2 } from "lucide-react";
import { Button } from "@freemarket/ui/button";
import { Input } from "@freemarket/ui/input";
import { Label } from "@freemarket/ui/label";
import { cn } from "@freemarket/utils";

export const nativeControlClass =
    "w-full rounded-md border border-slate-200 bg-white px-3 text-sm text-slate-900 outline-none transition-colors duration-150 focus-visible:border-emerald-600 focus-visible:ring-2 focus-visible:ring-emerald-600/30";

interface FormFieldProps {
    id: string;
    label: string;
    error?: string;
    hint?: string;
    children: ReactNode;
}

export function FormField({ id, label, error, hint, children }: FormFieldProps) {
    return (
        <div className="space-y-1.5">
            <Label htmlFor={id}>{label}</Label>
            {children}
            {error ? (
                <p id={`${id}-error`} className="text-xs text-rose-600">
                    {error}
                </p>
            ) : (
                hint && <p className="text-xs text-slate-500">{hint}</p>
            )}
        </div>
    );
}

interface TextFieldProps extends ComponentProps<"input"> {
    id: string;
    label: string;
    error?: string;
    hint?: string;
}

export function TextField({ id, label, error, hint, className, ...props }: TextFieldProps) {
    return (
        <FormField id={id} label={label} error={error} hint={hint}>
            <Input
                id={id}
                aria-invalid={Boolean(error)}
                aria-describedby={error ? `${id}-error` : undefined}
                className={cn("h-11", error && "border-rose-400", className)}
                {...props}
            />
        </FormField>
    );
}

export function FormError({ message }: { message?: string }) {
    if (!message) return null;
    return (
        <div
            role="alert"
            className="flex items-start gap-2 rounded-lg border border-rose-200 bg-rose-50 px-3 py-2.5 text-sm text-rose-700"
        >
            <AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
            <span>{message}</span>
        </div>
    );
}

interface StageActionsProps {
    isSubmitting: boolean;
    submitLabel: string;
    submittingLabel: string;
}

export function StageActions({ isSubmitting, submitLabel, submittingLabel }: StageActionsProps) {
    return (
        <Button
            type="submit"
            disabled={isSubmitting}
            className="h-11 w-full bg-emerald-600 text-white transition-colors duration-150 hover:bg-emerald-700"
        >
            {isSubmitting ? (
                <>
                    <Loader2 className="size-4 animate-spin" aria-hidden="true" />
                    {submittingLabel}
                </>
            ) : (
                <>
                    {submitLabel}
                    <ArrowRight className="size-4" aria-hidden="true" />
                </>
            )}
        </Button>
    );
}
</file>

<file path="apps/merchant-app/src/components/onboard/onboard-progress.tsx">
import { Check } from "lucide-react";
import { cn } from "@freemarket/utils";
import type { OnboardStepConfig } from "@/types/onboard";

interface OnboardProgressProps {
    steps: OnboardStepConfig[];
    currentStep: number;
}

export function OnboardProgress({ steps, currentStep }: OnboardProgressProps) {
    const percent = Math.round(((currentStep + 1) / steps.length) * 100);

    return (
        <div>
            <div className="mb-2 flex items-baseline justify-between text-xs">
                <span className="font-semibold text-slate-900">
                    Bước {currentStep + 1}/{steps.length}: {steps[currentStep].label}
                </span>
                <span className="text-slate-500">{percent}%</span>
            </div>

            <div
                role="progressbar"
                aria-label="Tiến trình đăng ký bán hàng"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={percent}
                className="h-2 overflow-hidden rounded-full bg-slate-100"
            >
                <div
                    className="h-full rounded-full bg-emerald-600 transition-[width] duration-200"
                    style={{ width: `${percent}%` }}
                />
            </div>

            <ol
                className="mt-3 grid gap-1"
                style={{ gridTemplateColumns: `repeat(${steps.length}, minmax(0, 1fr))` }}
            >
                {steps.map((step, index) => {
                    const isDone = index < currentStep;
                    const isCurrent = index === currentStep;
                    return (
                        <li
                            key={step.id}
                            aria-current={isCurrent ? "step" : undefined}
                            className="flex flex-col items-center gap-1 text-center"
                        >
                            <span
                                className={cn(
                                    "flex size-6 items-center justify-center rounded-full border text-xs font-semibold transition-colors duration-150",
                                    isDone && "border-emerald-600 bg-emerald-600 text-white",
                                    isCurrent && "border-emerald-600 bg-white text-emerald-700",
                                    !isDone && !isCurrent && "border-slate-200 bg-white text-slate-400",
                                )}
                            >
                                {isDone ? <Check className="size-3.5" aria-hidden="true" /> : index + 1}
                            </span>
                            <span
                                className={cn(
                                    "text-[11px] font-medium",
                                    isCurrent || isDone ? "text-slate-900" : "text-slate-400",
                                )}
                            >
                                {step.label}
                            </span>
                        </li>
                    );
                })}
            </ol>
        </div>
    );
}
</file>

<file path="apps/merchant-app/src/components/onboard/onboard-wizrd.tsx">
"use client";

import { useState } from "react";
import { MerchantStatusNotice } from "@/components/merchant/merchant-status-notice";
import { OnboardProgress } from "@/components/onboard/onboard-progress";
import { Stage1Form } from "@/components/onboard/stage1-form";
import { Stage2Form } from "@/components/onboard/stage2-form";
import { Stage3Form } from "@/components/onboard/stage3-form";
import { onboardSteps } from "@/lib/constants";

const LAST_STEP = onboardSteps.length - 1;

export function OnboardWizard() {
    const [step, setStep] = useState<number>(0);
    const [isPending, setIsPending] = useState<boolean>(false);

    // Xong stage 3 (hoặc BE báo hồ sơ đang thụ lý): dùng lại trang thông báo
    if (isPending) return <MerchantStatusNotice variant="pending" />;

    function handleNext(): void {
        if (step >= LAST_STEP) {
            setIsPending(true);
            return;
        }
        setStep((current) => current + 1);
    }

    const stageProps = { onSuccess: handleNext, onPending: () => setIsPending(true) };

    return (
        <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
            <div className="mb-5 space-y-1">
                <h1 className="text-xl font-bold text-slate-900">Đăng ký bán hàng</h1>
                <p className="text-sm text-slate-500">{onboardSteps[step].description}</p>
            </div>

            <div className="mb-6">
                <OnboardProgress steps={onboardSteps} currentStep={step} />
            </div>

            {step === 0 && <Stage1Form {...stageProps} />}
            {step === 1 && <Stage2Form {...stageProps} />}
            {step === 2 && <Stage3Form {...stageProps} />}
        </div>
    );
}
</file>

<file path="apps/merchant-app/src/components/onboard/stage1-form.tsx">
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { submitStage1Action } from "@/actions/onboard-actions";
import {
    FormError,
    FormField,
    StageActions,
    TextField,
    nativeControlClass,
} from "@/components/onboard/form-field";
import { cn } from "@freemarket/utils";
import { merchantSchema } from "@/lib/validations/onboard";
import type { MerchantDto, StageFormProps } from "@/types/onboard";

export function Stage1Form({ onSuccess, onPending }: StageFormProps) {
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting },
    } = useForm<MerchantDto>({
        resolver: zodResolver(merchantSchema),
        mode: "onTouched",
        defaultValues: {
            shopName: "",
            description: "",
            logoUrl: "",
            bannerUrl: "",
            contactEmail: "",
            contactPhone: "",
        },
    });

    async function onSubmit(values: MerchantDto): Promise<void> {
        const result = await submitStage1Action(values);
        if (!result.ok) {
            if (result.code === "pending") {
                onPending();
                return;
            }
            setError("root", { message: result.message });
            toast.error(result.message);
            return;
        }
        toast.success("Đã lưu thông tin cửa hàng");
        onSuccess();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
            <FormError message={errors.root?.message} />

            <TextField
                id="shopName"
                label="Tên cửa hàng"
                placeholder="VD: Minh Anh Store"
                error={errors.shopName?.message}
                {...register("shopName")}
            />

            <FormField
                id="description"
                label="Mô tả cửa hàng"
                error={errors.description?.message}
                hint="Giới thiệu ngắn về sản phẩm và cách bạn bán hàng."
            >
                <textarea
                    id="description"
                    rows={4}
                    aria-invalid={Boolean(errors.description)}
                    aria-describedby={errors.description ? "description-error" : undefined}
                    className={cn(nativeControlClass, "resize-none py-2.5", errors.description && "border-rose-400")}
                    {...register("description")}
                />
            </FormField>

            <TextField
                id="logoUrl"
                label="Đường dẫn ảnh đại diện (logo)"
                type="url"
                inputMode="url"
                placeholder="https://..."
                error={errors.logoUrl?.message}
                {...register("logoUrl")}
            />

            <TextField
                id="bannerUrl"
                label="Đường dẫn ảnh bìa"
                type="url"
                inputMode="url"
                placeholder="https://..."
                error={errors.bannerUrl?.message}
                {...register("bannerUrl")}
            />

            <TextField
                id="contactEmail"
                label="Email liên hệ"
                type="email"
                autoComplete="email"
                inputMode="email"
                placeholder="shop@email.com"
                error={errors.contactEmail?.message}
                {...register("contactEmail")}
            />

            <TextField
                id="contactPhone"
                label="Số điện thoại liên hệ"
                type="tel"
                autoComplete="tel"
                inputMode="tel"
                placeholder="0901234567"
                error={errors.contactPhone?.message}
                {...register("contactPhone")}
            />

            <StageActions isSubmitting={isSubmitting} submitLabel="Lưu và tiếp tục" submittingLabel="Đang lưu..." />
        </form>
    );
}
</file>

<file path="apps/merchant-app/src/components/onboard/stage2-form.tsx">
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { LocateFixed } from "lucide-react";
import { toast } from "sonner";
import { submitStage2Action } from "@/actions/onboard-actions";
import { FormError, StageActions, TextField } from "@/components/onboard/form-field";
import { Button } from "@freemarket/ui/button";
import { Checkbox } from "@freemarket/ui/checkbox";
import { Label } from "@freemarket/ui/label";
import { merchantAddressFormSchema } from "@/lib/validations/onboard";
import type { MerchantAddressFormValues, StageFormProps } from "@/types/onboard";

type FlagName = "isPickup" | "isReturn" | "isDefault";

const flags: { name: FlagName; label: string; hint: string }[] = [
    { name: "isPickup", label: "Địa chỉ lấy hàng", hint: "Đơn vị vận chuyển sẽ đến lấy hàng tại đây." },
    { name: "isReturn", label: "Địa chỉ nhận hàng hoàn", hint: "Hàng bị trả lại sẽ gửi về đây." },
    { name: "isDefault", label: "Đặt làm địa chỉ mặc định", hint: "Dùng cho các đơn hàng mới." },
];

export function Stage2Form({ onSuccess, onPending }: StageFormProps) {
    const {
        register,
        control,
        handleSubmit,
        setValue,
        setError,
        formState: { errors, isSubmitting },
    } = useForm<MerchantAddressFormValues>({
        resolver: zodResolver(merchantAddressFormSchema),
        mode: "onTouched",
        defaultValues: {
            label: "",
            contactName: "",
            contactPhone: "",
            province: "",
            district: "",
            ward: "",
            addressLine: "",
            latitude: "",
            longtitude: "",
            isPickup: true,
            isReturn: true,
            isDefault: true,
        },
    });

    function handleLocate(): void {
        if (!navigator.geolocation) {
            toast.info("Trình duyệt không hỗ trợ định vị. Vui lòng nhập thủ công.");
            return;
        }
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setValue("latitude", position.coords.latitude.toFixed(6), { shouldValidate: true });
                setValue("longtitude", position.coords.longitude.toFixed(6), { shouldValidate: true });
                toast.success("Đã lấy vị trí hiện tại");
            },
            () => toast.info("Không thể lấy vị trí. Vui lòng nhập thủ công."),
        );
    }

    async function onSubmit(values: MerchantAddressFormValues): Promise<void> {
        const result = await submitStage2Action({
            ...values,
            latitude: Number(values.latitude),
            longtitude: Number(values.longtitude),
        });
        if (!result.ok) {
            if (result.code === "pending") {
                onPending();
                return;
            }
            setError("root", { message: result.message });
            toast.error(result.message);
            return;
        }
        toast.success("Đã lưu địa chỉ cửa hàng");
        onSuccess();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
            <FormError message={errors.root?.message} />

            <TextField
                id="label"
                label="Tên gợi nhớ"
                placeholder="VD: Kho chính"
                error={errors.label?.message}
                {...register("label")}
            />

            <div className="grid gap-4 sm:grid-cols-2">
                <TextField
                    id="contactName"
                    label="Người liên hệ"
                    autoComplete="name"
                    placeholder="Nguyễn Văn A"
                    error={errors.contactName?.message}
                    {...register("contactName")}
                />
                <TextField
                    id="addressPhone"
                    label="Số điện thoại"
                    type="tel"
                    inputMode="tel"
                    placeholder="0901234567"
                    error={errors.contactPhone?.message}
                    {...register("contactPhone")}
                />
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
                <TextField id="province" label="Tỉnh/Thành phố" error={errors.province?.message} {...register("province")} />
                <TextField id="district" label="Quận/Huyện" error={errors.district?.message} {...register("district")} />
                <TextField id="ward" label="Phường/Xã" error={errors.ward?.message} {...register("ward")} />
            </div>

            <TextField
                id="addressLine"
                label="Số nhà, tên đường"
                autoComplete="street-address"
                error={errors.addressLine?.message}
                {...register("addressLine")}
            />

            <div className="space-y-2">
                <div className="flex items-center justify-between gap-2">
                    <span className="text-sm font-medium text-slate-900">Toạ độ</span>
                    <Button type="button" variant="outline" size="sm" onClick={handleLocate}>
                        <LocateFixed className="size-4" aria-hidden="true" />
                        Lấy vị trí hiện tại
                    </Button>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                    <TextField
                        id="latitude"
                        label="Vĩ độ (latitude)"
                        inputMode="decimal"
                        placeholder="10.776889"
                        error={errors.latitude?.message}
                        {...register("latitude")}
                    />
                    <TextField
                        id="longtitude"
                        label="Kinh độ (longitude)"
                        inputMode="decimal"
                        placeholder="106.700806"
                        error={errors.longtitude?.message}
                        {...register("longtitude")}
                    />
                </div>
            </div>

            <fieldset className="space-y-3 rounded-lg border border-slate-200 bg-slate-50/60 p-3">
                <legend className="px-1 text-sm font-medium text-slate-900">Mục đích sử dụng</legend>
                {flags.map(({ name, label, hint }) => (
                    <Controller
                        key={name}
                        control={control}
                        name={name}
                        render={({ field }) => (
                            <div className="flex items-start gap-2.5">
                                <Checkbox
                                    id={name}
                                    checked={field.value}
                                    onCheckedChange={(checked) => field.onChange(checked === true)}
                                    className="mt-0.5"
                                />
                                <div className="space-y-0.5">
                                    <Label htmlFor={name} className="cursor-pointer">
                                        {label}
                                    </Label>
                                    <p className="text-xs text-slate-500">{hint}</p>
                                </div>
                            </div>
                        )}
                    />
                ))}
            </fieldset>

            <StageActions isSubmitting={isSubmitting} submitLabel="Lưu và tiếp tục" submittingLabel="Đang lưu..." />
        </form>
    );
}
</file>

<file path="apps/merchant-app/src/components/onboard/stage3-form.tsx">
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { submitStage3Action } from "@/actions/onboard-actions";
import { FormError, StageActions, TextField } from "@/components/onboard/form-field";
import { businessTypes, merchantKycSchema } from "@/lib/validations/onboard";
import type { MerchantKycDto, StageFormProps } from "@/types/onboard";

export function Stage3Form({ onSuccess, onPending }: StageFormProps) {
    const {
        register,
        handleSubmit,
        setError,
        watch,
        formState: { errors, isSubmitting },
    } = useForm<MerchantKycDto>({
        resolver: zodResolver(merchantKycSchema),
        mode: "onTouched",
        defaultValues: {
            businessType: "INDIVIDUAL",
            legalName: "",
            taxCode: "",
            businessLicenseNo: "",
            businessLicenseUrl: "",
            idNumber: "",
            idFrontUrl: "",
            idBackUrl: "",
        },
    });

    const businessType = watch("businessType");
    const isBusiness = businessType !== "INDIVIDUAL";

    async function onSubmit(values: MerchantKycDto): Promise<void> {
        const result = await submitStage3Action(values);
        if (!result.ok) {
            if (result.code === "pending") {
                onPending();
                return;
            }
            setError("root", { message: result.message });
            toast.error(result.message);
            return;
        }
        toast.success("Đã gửi hồ sơ xác minh!");
        onSuccess();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
            <FormError message={errors.root?.message} />

            <fieldset className="space-y-2">
                <legend className="mb-1.5 text-sm font-medium text-slate-900">Hình thức kinh doanh</legend>
                {businessTypes.map(({ value, label, description }) => (
                    <label
                        key={value}
                        className="group flex cursor-pointer items-center gap-3 rounded-lg border border-slate-200 bg-white p-3 transition-colors duration-150 hover:bg-slate-50 has-[:checked]:border-emerald-600 has-[:checked]:bg-emerald-50/60 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-emerald-600/40"
                    >
                        <input type="radio" value={value} className="sr-only" {...register("businessType")} />
                        <span className="min-w-0 flex-1">
                            <span className="block text-sm font-medium text-slate-900">{label}</span>
                            <span className="block text-xs text-slate-500">{description}</span>
                        </span>
                        <span
                            aria-hidden="true"
                            className="size-4 shrink-0 rounded-full border border-slate-300 bg-white group-has-[:checked]:border-[5px] group-has-[:checked]:border-emerald-600"
                        />
                    </label>
                ))}
            </fieldset>

            <TextField
                id="legalName"
                label={isBusiness ? "Tên pháp lý" : "Họ tên theo giấy tờ"}
                error={errors.legalName?.message}
                {...register("legalName")}
            />

            {isBusiness && (
                <div className="space-y-4">
                    <TextField id="taxCode" label="Mã số thuế" inputMode="numeric" error={errors.taxCode?.message} {...register("taxCode")} />
                    <TextField
                        id="businessLicenseNo"
                        label="Số giấy phép kinh doanh"
                        error={errors.businessLicenseNo?.message}
                        {...register("businessLicenseNo")}
                    />
                    <TextField
                        id="businessLicenseUrl"
                        label="Đường dẫn ảnh giấy phép kinh doanh"
                        type="url"
                        inputMode="url"
                        placeholder="https://..."
                        error={errors.businessLicenseUrl?.message}
                        {...register("businessLicenseUrl")}
                    />
                </div>
            )}

            <TextField
                id="idNumber"
                label="Số CCCD/CMND"
                inputMode="numeric"
                hint="9 hoặc 12 chữ số."
                error={errors.idNumber?.message}
                {...register("idNumber")}
            />
            <TextField
                id="idFrontUrl"
                label="Đường dẫn ảnh mặt trước"
                type="url"
                inputMode="url"
                placeholder="https://..."
                error={errors.idFrontUrl?.message}
                {...register("idFrontUrl")}
            />
            <TextField
                id="idBackUrl"
                label="Đường dẫn ảnh mặt sau"
                type="url"
                inputMode="url"
                placeholder="https://..."
                error={errors.idBackUrl?.message}
                {...register("idBackUrl")}
            />

            <StageActions isSubmitting={isSubmitting} submitLabel="Gửi hồ sơ" submittingLabel="Đang gửi hồ sơ..." />
        </form>
    );
}
</file>

<file path="apps/merchant-app/src/components/providers/auth-provider.tsx">
"use client";

import type { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";

export function AuthProvider({ children }: { children: ReactNode }) {
    return <SessionProvider basePath="/api/auth">{children} </SessionProvider>
}
</file>

<file path="apps/merchant-app/src/lib/validations/onboard.ts">
import { z } from "zod";
import type {
    BusinessType,
    MerchantAddressDto,
    MerchantAddressFormValues,
    MerchantDto,
    MerchantKycDto,
} from "@/types/onboard";

const phoneRegex = /^(0|\+84)(3|5|7|8|9)\d{8}$/;

function isHttpUrl(value: string): boolean {
    try {
        const url = new URL(value);
        return url.protocol === "http:" || url.protocol === "https:";
    } catch {
        return false;
    }
}

function isInRange(value: string, min: number, max: number): boolean {
    if (value === "") return false;
    const num = Number(value);
    return Number.isFinite(num) && num >= min && num <= max;
}

const phone = z
    .string()
    .trim()
    .min(1, "Vui lòng nhập số điện thoại")
    .regex(phoneRegex, "Số điện thoại không hợp lệ");

const requiredText = (message: string, max = 120) =>
    z.string().trim().min(1, message).max(max, `Tối đa ${max} ký tự`);

const requiredUrl = (message: string) =>
    z.string().trim().min(1, message).refine(isHttpUrl, "Đường dẫn không hợp lệ");

const optionalUrl = z
    .string()
    .trim()
    .refine((value) => value === "" || isHttpUrl(value), "Đường dẫn không hợp lệ");

/* Stage 1 */
export const merchantSchema = z.object({
    shopName: requiredText("Vui lòng nhập tên cửa hàng", 60).min(3, "Tên cửa hàng tối thiểu 3 ký tự"),
    description: z.string().trim().max(500, "Mô tả tối đa 500 ký tự"),
    logoUrl: optionalUrl,
    bannerUrl: optionalUrl,
    contactEmail: z.string().trim().min(1, "Vui lòng nhập email liên hệ").email("Email không hợp lệ"),
    contactPhone: phone,
}) satisfies z.ZodType<MerchantDto>;

/* Stage 2 */
const addressBase = z.object({
    label: requiredText("Vui lòng nhập tên gợi nhớ (VD: Kho chính)", 40),
    contactName: requiredText("Vui lòng nhập tên người liên hệ", 60),
    contactPhone: phone,
    province: requiredText("Vui lòng nhập tỉnh/thành"),
    district: requiredText("Vui lòng nhập quận/huyện"),
    ward: requiredText("Vui lòng nhập phường/xã"),
    addressLine: requiredText("Vui lòng nhập số nhà, tên đường", 200),
    isPickup: z.boolean(),
    isReturn: z.boolean(),
    isDefault: z.boolean(),
});

export const merchantAddressFormSchema = addressBase.extend({
    latitude: z.string().trim().refine((v) => isInRange(v, -90, 90), "Vĩ độ hợp lệ từ -90 đến 90"),
    longtitude: z.string().trim().refine((v) => isInRange(v, -180, 180), "Kinh độ hợp lệ từ -180 đến 180"),
}) satisfies z.ZodType<MerchantAddressFormValues>;

export const merchantAddressDtoSchema = addressBase.extend({
    latitude: z.number().min(-90).max(90),
    longtitude: z.number().min(-180).max(180),
}) satisfies z.ZodType<MerchantAddressDto>;

/* Stage 3 */
export const businessTypes: { value: BusinessType; label: string; description: string }[] = [
    { value: "INDIVIDUAL", label: "Cá nhân", description: "Bán hàng với tư cách cá nhân." },
    { value: "HOUSEHOLD", label: "Hộ kinh doanh", description: "Có giấy phép hộ kinh doanh." },
    { value: "COMPANY", label: "Doanh nghiệp", description: "Công ty có đăng ký doanh nghiệp." },
];

export const merchantKycSchema = z
    .object({
        businessType: z.enum(["INDIVIDUAL", "HOUSEHOLD", "COMPANY"]),
        legalName: requiredText("Vui lòng nhập họ tên hoặc tên pháp lý"),
        taxCode: z.string().trim().max(20, "Mã số thuế tối đa 20 ký tự"),
        businessLicenseNo: z.string().trim().max(50, "Số giấy phép tối đa 50 ký tự"),
        businessLicenseUrl: optionalUrl,
        idNumber: z.string().trim().regex(/^(\d{9}|\d{12})$/, "Số CCCD/CMND gồm 9 hoặc 12 chữ số"),
        idFrontUrl: requiredUrl("Vui lòng nhập ảnh mặt trước giấy tờ"),
        idBackUrl: requiredUrl("Vui lòng nhập ảnh mặt sau giấy tờ"),
    })
    .superRefine((values, ctx) => {
        if (values.businessType === "INDIVIDUAL") return;
        if (!values.taxCode) {
            ctx.addIssue({ code: "custom", path: ["taxCode"], message: "Vui lòng nhập mã số thuế" });
        }
        if (!values.businessLicenseNo) {
            ctx.addIssue({ code: "custom", path: ["businessLicenseNo"], message: "Vui lòng nhập số giấy phép" });
        }
        if (!values.businessLicenseUrl) {
            ctx.addIssue({ code: "custom", path: ["businessLicenseUrl"], message: "Vui lòng nhập ảnh giấy phép" });
        }
    }) satisfies z.ZodType<MerchantKycDto>;
</file>

<file path="apps/merchant-app/src/lib/backend.ts">
import { z } from "zod";
import { auth } from "@/auth";

const API_BASE = process.env.MERCHANT_API_URL ?? "http://localhost:8084";

export type BackendFailureKind =
    | "unauthorized"
    | "network"
    | "rate_limit"
    | "server"
    | "invalid_response"
    | "backend";

export interface BackendFailure {
    ok: false;
    kind: BackendFailureKind;
    /** Giá trị field `error` của BE, ví dụ "OnboardPendingException" */
    errorName?: string;
    message?: string;
}

export type BackendResult = { ok: true; data: unknown } | BackendFailure;

const envelopeSchema = z.object({
    data: z.unknown().optional(),
    error: z.string().nullish(),
    message: z.string().nullish(),
    statusCode: z.number().nullish(),
    success: z.boolean().nullish(),
});

interface RequestOptions {
    method: "GET" | "POST";
    body?: unknown;
}

export async function backendRequest(
    path: string,
    { method, body }: RequestOptions,
): Promise<BackendResult> {
    const session = await auth();
    if (!session?.accessToken) return { ok: false, kind: "unauthorized" };

    let response: Response;
    try {
        response = await fetch(`${API_BASE}${path}`, {
            method,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${session.accessToken}`,
            },
            body: body === undefined ? undefined : JSON.stringify(body),
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

    if (response.status === 401) return { ok: false, kind: "unauthorized" };
    if (response.status === 429) return { ok: false, kind: "rate_limit" };

    if (!response.ok || envelope?.success === false) {
        if (envelope?.error) {
            return {
                ok: false,
                kind: "backend",
                errorName: envelope.error,
                message: envelope.message ?? undefined,
            };
        }
        return {
            ok: false,
            kind: response.status >= 500 ? "server" : "backend",
            message: envelope?.message ?? undefined,
        };
    }

    return { ok: true, data: envelope?.data ?? null };
}

export function getBackendFailureMessage(failure: BackendFailure, fallback: string): string {
    switch (failure.kind) {
        case "unauthorized":
            return "Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại";
        case "network":
            return "Không thể kết nối tới máy chủ. Kiểm tra mạng và thử lại";
        case "rate_limit":
            return "Bạn thử quá nhiều lần. Vui lòng đợi một lúc rồi thử lại";
        case "server":
            return "Máy chủ đang gặp sự cố. Vui lòng thử lại sau";
        case "invalid_response":
            return "Máy chủ trả về dữ liệu không hợp lệ. Vui lòng thử lại sau";
        case "backend":
            return failure.message ?? fallback;
    }
}
</file>

<file path="apps/merchant-app/src/lib/constants.ts">
import type { OnboardStepConfig } from "@/types/onboard";

export const onboardSteps: OnboardStepConfig[] = [
    { id: "shop", label: "Cửa hàng", description: "Giới thiệu cửa hàng và thông tin liên hệ." },
    { id: "address", label: "Địa chỉ", description: "Nơi lấy hàng và nhận hàng hoàn của cửa hàng." },
    { id: "kyc", label: "Xác minh", description: "Xác minh danh tính để bắt đầu bán hàng." },
];
</file>

<file path="apps/merchant-app/src/lib/merchant-api.ts">
import { cache } from "react";
import { z } from "zod";
import { backendRequest, getBackendFailureMessage } from "@/lib/backend";
import type { ActionResult, MerchantState, OnboardStage } from "@/types/onboard";

const merchantProfileSchema = z.object({
    shopName: z.string().min(1),
    description: z.string().nullish(),
    logoUrl: z.string().nullish(),
    bannerUrl: z.string().nullish(),
    contactEmail: z.string().nullish(),
    contactPhone: z.string().nullish(),
});

/**
 * GET /merchant. Bọc bằng cache() để layout và page trong cùng một request
 * chỉ gọi backend một lần.
 */
export const getMerchantState = cache(async (): Promise<MerchantState> => {
    const result = await backendRequest("/merchant", { method: "GET" });

    if (result.ok) {
        const parsed = merchantProfileSchema.safeParse(result.data);
        if (!parsed.success) {
            return {
                status: "error",
                message: getBackendFailureMessage({ ok: false, kind: "invalid_response" }, ""),
            };
        }
        return { status: "active", merchant: parsed.data };
    }

    if (result.kind === "backend") {
        if (result.errorName === "OnboardPendingException") return { status: "pending" };
        if (result.errorName === "InvalidMerchantException") return { status: "not_onboarded" };
    }

    return {
        status: "error",
        message: getBackendFailureMessage(result, "Không thể tải thông tin cửa hàng"),
    };
});

export async function postOnboardStage(stage: OnboardStage, payload: unknown): Promise<ActionResult> {
    const result = await backendRequest(`/merchant/onboard/${stage}`, { method: "POST", body: payload });
    if (result.ok) return { ok: true };

    if (result.kind === "unauthorized") {
        return { ok: false, code: "unauthorized", message: getBackendFailureMessage(result, "") };
    }
    if (result.kind === "backend" && result.errorName === "OnboardPendingException") {
        return { ok: false, code: "pending", message: "Hồ sơ của bạn đang được thụ lý" };
    }
    return {
        ok: false,
        message: getBackendFailureMessage(result, "Không thể lưu thông tin. Vui lòng kiểm tra lại và thử lại"),
    };
}
</file>

<file path="apps/merchant-app/src/lib/utils.ts">
import type { Product, ProductVariant } from "@/types/merchant";

export function getDefaultVariant(product: Product): ProductVariant {
    return product.variants.find((v) => v.isDefault) ?? product.variants[0];
}
</file>

<file path="apps/merchant-app/src/types/dashboard.ts">
export type DashboardStatId = "revenue" | "orders" | "listings" | "rating";

export interface DashboardStat {
    id: DashboardStatId;
    label: string;
    value: string;
    hint: string;
}

export type OrderStatus = "pending" | "shipped" | "completed";

export interface RecentOrder {
    id: string;
    code: string;
    buyerName: string;
    productTitle: string;
    total: number;
    status: OrderStatus;
    createdLabel: string;
}
</file>

<file path="apps/merchant-app/src/types/merchant.ts">
export type ProductCondition = "new" | "like-new" | "well-used";

export interface ProductVariant {
    id: string;
    name: string;
    sku: string;
    price: number;
    stock: number;
    colorHex?: string;
    isDefault: boolean;
}

export interface ProductCategory {
    id: string;
    name: string;
}

export interface Product {
    id: string;
    title: string;
    categoryId: string;
    image: string;
    condition: ProductCondition;
    location: string;
    sold: number;
    /** Luôn có ít nhất 1 variant (kiểu tuple non-empty). */
    variants: [ProductVariant, ...ProductVariant[]];
}

export interface Merchant {
    id: string;
    name: string;
    handle: string;
    avatar: string;
    banner: string;
    bio: string;
    location: string;
    rating: number;
    reviewCount: number;
    totalSales: number;
    responseTime: string;
    joinedAt: string;
    verified: boolean;
}
</file>

<file path="apps/merchant-app/src/types/onboard.ts">
export interface MerchantProfile {
    shopName: string;
    description?: string | null;
    logoUrl?: string | null;
    bannerUrl?: string | null;
    contactEmail?: string | null;
    contactPhone?: string | null;
}

export type MerchantState =
    | { status: "active"; merchant: MerchantProfile }
    | { status: "pending" }
    | { status: "not_onboarded" }
    | { status: "error"; message: string };

export interface MerchantDto {
    shopName: string;
    description: string;
    logoUrl: string;
    bannerUrl: string;
    contactEmail: string;
    contactPhone: string;
}

export interface MerchantAddressDto {
    label: string;
    contactName: string;
    contactPhone: string;
    province: string;
    district: string;
    ward: string;
    addressLine: string;
    latitude: number;
    longtitude: number;
    isPickup: boolean;
    isReturn: boolean;
    isDefault: boolean;
}

/** Form giữ toạ độ dạng chuỗi để nhập liệu; chuyển sang số trước khi gửi. */
export type MerchantAddressFormValues = Omit<MerchantAddressDto, "latitude" | "longtitude"> & {
    latitude: string;
    longtitude: string;
};

export type BusinessType = "INDIVIDUAL" | "HOUSEHOLD" | "COMPANY";

export interface MerchantKycDto {
    businessType: BusinessType;
    legalName: string;
    taxCode: string;
    businessLicenseNo: string;
    businessLicenseUrl: string;
    idNumber: string;
    idFrontUrl: string;
    idBackUrl: string;
}

export type OnboardStage = "stage1" | "stage2" | "stage3";

export interface ActionFailure {
    ok: false;
    message: string;
    /** pending: hồ sơ đã nộp và đang thụ lý. unauthorized: hết phiên đăng nhập. */
    code?: "pending" | "unauthorized";
}

export type ActionResult = { ok: true } | ActionFailure;

export interface OnboardStepConfig {
    id: string;
    label: string;
    description: string;
}

export interface StageFormProps {
    onSuccess: () => void;
    onPending: () => void;
}
</file>

<file path="apps/merchant-app/src/auth.ts">
import NextAuth from "next-auth";
import { sharedAuthConfig } from "@freemarket/auth-config";

export const { auth } = NextAuth({
    ...sharedAuthConfig,
    providers: [],
});
</file>

<file path="apps/merchant-app/src/proxy.ts">
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
</file>

<file path="apps/merchant-app/.gitignore">
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.*
.yarn/*
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/versions

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.pnpm-debug.log*

# env files (can opt-in for committing if needed)
.env*

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
</file>

<file path="apps/merchant-app/AGENTS.md">
<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
</file>

<file path="apps/merchant-app/eslint.config.mjs">
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
</file>

<file path="apps/merchant-app/postcss.config.mjs">
const config = { plugins: { "@tailwindcss/postcss": {} } };
export default config;
</file>

<file path="apps/merchant-app/README.md">
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
</file>

<file path="apps/shop-app/public/file.svg">
<svg fill="none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 13.5V5.41a1 1 0 0 0-.3-.7L9.8.29A1 1 0 0 0 9.08 0H1.5v13.5A2.5 2.5 0 0 0 4 16h8a2.5 2.5 0 0 0 2.5-2.5m-1.5 0v-7H8v-5H3v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1M9.5 5V2.12L12.38 5zM5.13 5h-.62v1.25h2.12V5zm-.62 3h7.12v1.25H4.5zm.62 3h-.62v1.25h7.12V11z" clip-rule="evenodd" fill="#666" fill-rule="evenodd"/></svg>
</file>

<file path="apps/shop-app/public/globe.svg">
<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g clip-path="url(#a)"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.27 14.1a6.5 6.5 0 0 0 3.67-3.45q-1.24.21-2.7.34-.31 1.83-.97 3.1M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.48-1.52a7 7 0 0 1-.96 0H7.5a4 4 0 0 1-.84-1.32q-.38-.89-.63-2.08a40 40 0 0 0 3.92 0q-.25 1.2-.63 2.08a4 4 0 0 1-.84 1.31zm2.94-4.76q1.66-.15 2.95-.43a7 7 0 0 0 0-2.58q-1.3-.27-2.95-.43a18 18 0 0 1 0 3.44m-1.27-3.54a17 17 0 0 1 0 3.64 39 39 0 0 1-4.3 0 17 17 0 0 1 0-3.64 39 39 0 0 1 4.3 0m1.1-1.17q1.45.13 2.69.34a6.5 6.5 0 0 0-3.67-3.44q.65 1.26.98 3.1M8.48 1.5l.01.02q.41.37.84 1.31.38.89.63 2.08a40 40 0 0 0-3.92 0q.25-1.2.63-2.08a4 4 0 0 1 .85-1.32 7 7 0 0 1 .96 0m-2.75.4a6.5 6.5 0 0 0-3.67 3.44 29 29 0 0 1 2.7-.34q.31-1.83.97-3.1M4.58 6.28q-1.66.16-2.95.43a7 7 0 0 0 0 2.58q1.3.27 2.95.43a18 18 0 0 1 0-3.44m.17 4.71q-1.45-.12-2.69-.34a6.5 6.5 0 0 0 3.67 3.44q-.65-1.27-.98-3.1" fill="#666"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></svg>
</file>

<file path="apps/shop-app/public/next.svg">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 394 80"><path fill="#000" d="M262 0h68.5v12.7h-27.2v66.6h-13.6V12.7H262V0ZM149 0v12.7H94v20.4h44.3v12.6H94v21h55v12.6H80.5V0h68.7zm34.3 0h-17.8l63.8 79.4h17.9l-32-39.7 32-39.6h-17.9l-23 28.6-23-28.6zm18.3 56.7-9-11-27.1 33.7h17.8l18.3-22.7z"/><path fill="#000" d="M81 79.3 17 0H0v79.3h13.6V17l50.2 62.3H81Zm252.6-.4c-1 0-1.8-.4-2.5-1s-1.1-1.6-1.1-2.6.3-1.8 1-2.5 1.6-1 2.6-1 1.8.3 2.5 1a3.4 3.4 0 0 1 .6 4.3 3.7 3.7 0 0 1-3 1.8zm23.2-33.5h6v23.3c0 2.1-.4 4-1.3 5.5a9.1 9.1 0 0 1-3.8 3.5c-1.6.8-3.5 1.3-5.7 1.3-2 0-3.7-.4-5.3-1s-2.8-1.8-3.7-3.2c-.9-1.3-1.4-3-1.4-5h6c.1.8.3 1.6.7 2.2s1 1.2 1.6 1.5c.7.4 1.5.5 2.4.5 1 0 1.8-.2 2.4-.6a4 4 0 0 0 1.6-1.8c.3-.8.5-1.8.5-3V45.5zm30.9 9.1a4.4 4.4 0 0 0-2-3.3 7.5 7.5 0 0 0-4.3-1.1c-1.3 0-2.4.2-3.3.5-.9.4-1.6 1-2 1.6a3.5 3.5 0 0 0-.3 4c.3.5.7.9 1.3 1.2l1.8 1 2 .5 3.2.8c1.3.3 2.5.7 3.7 1.2a13 13 0 0 1 3.2 1.8 8.1 8.1 0 0 1 3 6.5c0 2-.5 3.7-1.5 5.1a10 10 0 0 1-4.4 3.5c-1.8.8-4.1 1.2-6.8 1.2-2.6 0-4.9-.4-6.8-1.2-2-.8-3.4-2-4.5-3.5a10 10 0 0 1-1.7-5.6h6a5 5 0 0 0 3.5 4.6c1 .4 2.2.6 3.4.6 1.3 0 2.5-.2 3.5-.6 1-.4 1.8-1 2.4-1.7a4 4 0 0 0 .8-2.4c0-.9-.2-1.6-.7-2.2a11 11 0 0 0-2.1-1.4l-3.2-1-3.8-1c-2.8-.7-5-1.7-6.6-3.2a7.2 7.2 0 0 1-2.4-5.7 8 8 0 0 1 1.7-5 10 10 0 0 1 4.3-3.5c2-.8 4-1.2 6.4-1.2 2.3 0 4.4.4 6.2 1.2 1.8.8 3.2 2 4.3 3.4 1 1.4 1.5 3 1.5 5h-5.8z"/></svg>
</file>

<file path="apps/shop-app/public/vercel.svg">
<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1155 1000"><path d="m577.3 0 577.4 1000H0z" fill="#fff"/></svg>
</file>

<file path="apps/shop-app/public/window.svg">
<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 2.5h13v10a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1zM0 1h16v11.5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 0 12.5zm3.75 4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M7 4.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m1.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5" fill="#666"/></svg>
</file>

<file path="apps/shop-app/src/app/page.tsx">
import type { Metadata } from "next";
import { PackageSearch } from "lucide-react";
import { CategoryBar } from "../components/home/category-bar";
import { SortTabs } from "../components/home/sort-tabs";
import { ProductCard } from "../components/product/product-card";
import { EmptyState } from "../components/shared/empty-state";
import type { SortOption } from "@/types";
import { categories, getProducts } from "@/lib/mock-data";
export const metadata: Metadata = {
  title: "Trang chủ",
};

interface HomePageProps {
  searchParams: Promise<{ category?: string; sort?: string }>;
}

const validSorts: SortOption[] = ["newest", "price-asc", "price-desc"];

function parseSort(value: string | undefined): SortOption {
  return validSorts.find((option) => option === value) ?? "newest";
}

export default async function HomePage({ searchParams }: HomePageProps) {
  const params = await searchParams;
  const activeCategory = categories.find((c) => c.id === params.category)?.id;
  const sort = parseSort(params.sort);
  const items = getProducts({ category: activeCategory, sort });
  const activeLabel = categories.find((c) => c.id === activeCategory)?.label;

  return (
    <div className="space-y-4">
      <CategoryBar categories={categories} activeCategory={activeCategory} sort={sort} />

      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <h1 className="text-lg font-bold text-slate-900">
            {activeLabel ?? "Tin đăng mới nhất"}
          </h1>
          <p className="text-sm text-slate-500">{items.length} sản phẩm</p>
        </div>
        <SortTabs activeSort={sort} category={activeCategory} />
      </div>

      {items.length === 0 ? (
        <EmptyState
          icon={PackageSearch}
          title="Chưa có sản phẩm nào"
          description="Danh mục này hiện chưa có tin đăng. Hãy xem các danh mục khác hoặc quay lại sau."
          actionLabel="Xem tất cả sản phẩm"
          actionHref="/"
        />
      ) : (
        <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
          {items.map((product, index) => (
            <li key={product.id}>
              <ProductCard product={product} priority={index < 4} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
</file>

<file path="apps/shop-app/src/components/layout/cart-link.tsx">
"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useHasMounted } from "../../hooks/use-has-mounted";
import { selectCartCount, useCartStore } from "../../stores/use-cart-store";

export function CartLink() {
  const hasMounted = useHasMounted();
  const count = useCartStore(selectCartCount);
  const showBadge = hasMounted && count > 0;

  return (
    <Link
      href="/cart"
      aria-label={showBadge ? `Giỏ hàng, ${count} sản phẩm` : "Giỏ hàng"}
      className="relative inline-flex size-10 items-center justify-center rounded-lg text-slate-700 transition-colors duration-150 hover:bg-slate-100"
    >
      <ShoppingCart className="size-5" aria-hidden="true" />
      {showBadge && (
        <span className="absolute right-0.5 top-0.5 flex min-w-4 items-center justify-center rounded-full bg-emerald-600 px-1 text-[10px] font-semibold leading-4 text-white">
          {count > 99 ? "99+" : count}
        </span>
      )}
    </Link>
  );
}
</file>

<file path="apps/shop-app/src/components/layout/site-footer.tsx">
import Link from "next/link";

export function SiteFooter() {
    return (
        <footer className="hidden border-t border-slate-200 bg-white md:block">
            <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-6 text-sm text-slate-500">
                <p>© 2026 FreeMarket. Chợ mua bán giữa người với người.</p>
                <nav aria-label="Liên kết chân trang" className="flex gap-4">
                    <Link href="/help" className="transition-colors duration-150 hover:text-slate-900">
                        Trợ giúp
                    </Link>
                    <Link href="/terms" className="transition-colors duration-150 hover:text-slate-900">
                        Điều khoản
                    </Link>
                    <Link href="/privacy" className="transition-colors duration-150 hover:text-slate-900">
                        Bảo mật
                    </Link>
                </nav>
            </div>
        </footer>
    );
}
</file>

<file path="apps/shop-app/src/components/providers/auth-provider.tsx">
"use client";

import type { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";

export function AuthProvider({ children }: { children: ReactNode }) {
    return <SessionProvider basePath="/api/auth">{children} </SessionProvider>
}
</file>

<file path="apps/shop-app/src/hooks/use-has-mounted.ts">
"use client";

import { useSyncExternalStore } from "react";

const subscribe = (): (() => void) => () => { };

export function useHasMounted(): boolean {
    return useSyncExternalStore(
        subscribe,
        () => true,
        () => false,
    );
}
</file>

<file path="apps/shop-app/src/lib/mock-data.ts">
import { Category, Seller, Product, ProductQuery } from "@/types";
import { Smartphone, Laptop, Headphones, Camera, Shirt, Home, Bike } from "lucide-react";

const img = (id: string): string =>
    `https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&q=80`;

export const categories: Category[] = [
    { id: "phone", label: "Điện thoại", icon: Smartphone },
    { id: "laptop", label: "Laptop", icon: Laptop },
    { id: "audio", label: "Âm thanh", icon: Headphones },
    { id: "camera", label: "Máy ảnh", icon: Camera },
    { id: "fashion", label: "Thời trang", icon: Shirt },
    { id: "home", label: "Nhà cửa", icon: Home },
    { id: "bike", label: "Xe đạp", icon: Bike },
];

export const sellers: Record<string, Seller> = {
    linh: { id: "s1", name: "Linh Store", rating: 4.9, totalSales: 1280, responseTime: "Trả lời trong 5 phút", verified: true },
    minh: { id: "s2", name: "Minh Tech", rating: 4.7, totalSales: 642, responseTime: "Trả lời trong 15 phút", verified: true },
    hoa: { id: "s3", name: "Hoa Vintage", rating: 4.8, totalSales: 311, responseTime: "Trả lời trong 1 giờ", verified: false },
    nam: { id: "s4", name: "Nam Cycle", rating: 4.6, totalSales: 98, responseTime: "Trả lời trong 3 giờ", verified: false },
};

export const products: Product[] = [
    {
        id: "p1",
        title: "Tai nghe over-ear chống ồn chủ động",
        description: "Tai nghe không dây, pin 30 giờ, chống ồn chủ động. Đầy đủ hộp, cáp sạc và túi đựng.",
        price: 1850000,
        originalPrice: 3200000,
        images: [img("photo-1505740420928-5e560c06d30e")],
        category: "audio",
        condition: "like-new",
        location: "Quận 1, TP.HCM",
        stock: 1,
        tags: ["bluetooth", "chống ồn"],
        colors: ["Đen", "Bạc"],
        postedLabel: "2 giờ trước",
        createdAt: "2026-10-06T08:00:00Z",
        seller: sellers.minh,
    },
    {
        id: "p2",
        title: "Đồng hồ cơ dây da phong cách tối giản",
        description: "Đồng hồ automatic mặt trắng, dây da nâu, chạy chuẩn, bảo hành shop 3 tháng.",
        price: 2400000,
        images: [img("photo-1523275335684-37898b6baf30")],
        category: "fashion",
        condition: "new",
        location: "Hoàn Kiếm, Hà Nội",
        stock: 3,
        tags: ["automatic", "dây da"],
        colors: ["Nâu"],
        postedLabel: "3 giờ trước",
        createdAt: "2026-10-06T07:00:00Z",
        seller: sellers.linh,
    },
    {
        id: "p3",
        title: "Giày sneaker đỏ size 42",
        description: "Giày mang vài lần, đế còn mới, đã vệ sinh sạch. Có hộp gốc.",
        price: 950000,
        originalPrice: 2100000,
        images: [img("photo-1542291026-7eec264c27ff")],
        category: "fashion",
        condition: "like-new",
        location: "Hải Châu, Đà Nẵng",
        stock: 1,
        tags: ["sneaker", "size 42"],
        colors: ["Đỏ"],
        postedLabel: "5 giờ trước",
        createdAt: "2026-10-06T05:00:00Z",
        seller: sellers.hoa,
    },
    {
        id: "p4",
        title: "Máy ảnh film compact kèm ống kính 50mm",
        description: "Máy ảnh film hoạt động tốt, kèm dây đeo và bao da. Phù hợp người mới chơi film.",
        price: 3600000,
        images: [img("photo-1526170375885-4d8ecf77b99f")],
        category: "camera",
        condition: "well-used",
        location: "Quận 3, TP.HCM",
        stock: 1,
        tags: ["film", "vintage"],
        colors: ["Đen"],
        postedLabel: "Hôm qua",
        createdAt: "2026-10-05T10:00:00Z",
        seller: sellers.minh,
    },
    {
        id: "p5",
        title: "Laptop 13 inch mỏng nhẹ, RAM 16GB",
        description: "Pin còn tốt, máy nguyên zin, không trầy xước đáng kể. Tặng kèm balo và chuột.",
        price: 14500000,
        originalPrice: 22000000,
        images: [img("photo-1517336714731-489689fd1ca8")],
        category: "laptop",
        condition: "like-new",
        location: "Cầu Giấy, Hà Nội",
        stock: 2,
        tags: ["16GB", "SSD 512GB"],
        colors: ["Bạc", "Xám"],
        postedLabel: "Hôm qua",
        createdAt: "2026-10-05T08:00:00Z",
        seller: sellers.linh,
    },
    {
        id: "p6",
        title: "Điện thoại thông minh 128GB, fullbox",
        description: "Máy chính hãng, pin 92%, màn hình không xước. Fullbox, bảo hành 1 tháng.",
        price: 6800000,
        originalPrice: 11900000,
        images: [img("photo-1511707171634-5f897ff02aa9")],
        category: "phone",
        condition: "like-new",
        location: "Thủ Đức, TP.HCM",
        stock: 4,
        tags: ["128GB", "fullbox"],
        colors: ["Đen", "Trắng", "Xanh"],
        postedLabel: "2 ngày trước",
        createdAt: "2026-10-04T09:00:00Z",
        seller: sellers.minh,
    },
    {
        id: "p7",
        title: "Sofa vải 2 chỗ màu xám",
        description: "Sofa gọn nhẹ, vải bọc dễ giặt, khung gỗ chắc chắn. Người mua tự vận chuyển hoặc thoả thuận ship.",
        price: 2900000,
        images: [img("photo-1555041469-a586c61ea9bc")],
        category: "home",
        condition: "well-used",
        location: "Bình Thạnh, TP.HCM",
        stock: 1,
        tags: ["sofa", "phòng khách"],
        colors: ["Xám"],
        postedLabel: "2 ngày trước",
        createdAt: "2026-10-04T06:00:00Z",
        seller: sellers.hoa,
    },
    {
        id: "p8",
        title: "Xe đạp thành phố khung nhôm",
        description: "Xe đạp 7 tốc độ, phanh đĩa, đã thay lốp mới. Chạy êm, phù hợp đi làm hằng ngày.",
        price: 4200000,
        originalPrice: 5900000,
        images: [img("photo-1485965120184-e220f721d03e")],
        category: "bike",
        condition: "like-new",
        location: "Ninh Kiều, Cần Thơ",
        stock: 1,
        tags: ["7 tốc độ", "phanh đĩa"],
        colors: ["Xanh navy"],
        postedLabel: "3 ngày trước",
        createdAt: "2026-10-03T09:00:00Z",
        seller: sellers.nam,
    },
    {
        id: "p9",
        title: "Balo du lịch chống nước 25L",
        description: "Balo còn rất mới, nhiều ngăn, có ngăn laptop 15 inch. Chưa qua sử dụng.",
        price: 420000,
        originalPrice: 650000,
        images: [img("photo-1553062407-98eeb64c6a62")],
        category: "fashion",
        condition: "new",
        location: "Quận 7, TP.HCM",
        stock: 6,
        tags: ["chống nước", "25L"],
        colors: ["Đen", "Be"],
        postedLabel: "3 ngày trước",
        createdAt: "2026-10-03T07:00:00Z",
        seller: sellers.linh,
    },
    {
        id: "p10",
        title: "Kính mát gọng nhựa phân cực",
        description: "Kính chống tia UV400, tròng phân cực, kèm hộp và khăn lau.",
        price: 380000,
        images: [img("photo-1572635196237-14b3f281503f")],
        category: "fashion",
        condition: "new",
        location: "Hoàn Kiếm, Hà Nội",
        stock: 8,
        tags: ["UV400", "phân cực"],
        colors: ["Đen"],
        postedLabel: "4 ngày trước",
        createdAt: "2026-10-02T09:00:00Z",
        seller: sellers.hoa,
    },
    {
        id: "p11",
        title: "Laptop văn phòng 15 inch cũ giá rẻ",
        description: "Máy chạy ổn định cho học tập, văn phòng. Pin dùng được khoảng 3 giờ, có vài vết xước nhỏ.",
        price: 5200000,
        images: [img("photo-1496181133206-80ce9b88a853")],
        category: "laptop",
        condition: "well-used",
        location: "Hải Châu, Đà Nẵng",
        stock: 2,
        tags: ["văn phòng", "SSD"],
        colors: ["Xám"],
        postedLabel: "5 ngày trước",
        createdAt: "2026-10-01T09:00:00Z",
        seller: sellers.minh,
    },
];

export function getProducts({ category, sort = "newest" }: ProductQuery = {}): Product[] {
    const filtered = category ? products.filter((p) => p.category === category) : [...products];

    return filtered.sort((a, b) => {
        if (sort === "price-asc") return a.price - b.price;
        if (sort === "price-desc") return b.price - a.price;
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });
}
</file>

<file path="apps/shop-app/src/lib/navigation.ts">
import { NavItem, AppMode } from "@/types";
import {
    ClipboardList,
    Home,
    LayoutDashboard,
    MessageCircle,
    Package,
    PlusCircle,
    Search,
    User,
} from "lucide-react";

export const buyerNav: NavItem[] = [
    { label: "Trang chủ", href: "/", icon: Home, exact: true },
    { label: "Tìm kiếm", href: "/search", icon: Search },
    { label: "Đăng bán", href: "/sell", icon: PlusCircle, highlight: true },
    { label: "Tin nhắn", href: "/messages", icon: MessageCircle },
    { label: "Cá nhân", href: "/profile", icon: User },
];

export const merchantNav: NavItem[] = [
    { label: "Tổng quan", href: "/studio", icon: LayoutDashboard, exact: true },
    { label: "Tin đăng", href: "/studio/listings", icon: Package },
    { label: "Đăng bán", href: "/sell", icon: PlusCircle, highlight: true },
    { label: "Đơn hàng", href: "/studio/orders", icon: ClipboardList },
    { label: "Tin nhắn", href: "/messages", icon: MessageCircle },
];

export function getAppMode(pathname: string): AppMode {
    return pathname.startsWith("/studio") || pathname.startsWith("/sell")
        ? "merchant"
        : "buyer";
}

export function getNavItems(mode: AppMode): NavItem[] {
    return mode === "merchant" ? merchantNav : buyerNav;
}

export function isNavActive(pathname: string, item: NavItem): boolean {
    if (item.exact) return pathname === item.href;
    return pathname === item.href || pathname.startsWith(`${item.href}/`);
}
</file>

<file path="apps/shop-app/src/stores/use-cart-store.ts">
import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CartItem } from "@/types";

interface CartState {
    items: CartItem[];
    addItem: (item: Omit<CartItem, "quantity">, quantity?: number) => void;
    removeItem: (productId: string, color?: string) => void;
    updateQuantity: (productId: string, quantity: number, color?: string) => void;
    clear: () => void;
}

const isSameLine = (item: CartItem, productId: string, color?: string): boolean =>
    item.productId === productId && item.color === color;

export const useCartStore = create<CartState>()(
    persist(
        (set) => ({
            items: [],
            addItem: (item, quantity = 1) =>
                set((state) => {
                    const exists = state.items.some((i) => isSameLine(i, item.productId, item.color));
                    if (exists) {
                        return {
                            items: state.items.map((i) =>
                                isSameLine(i, item.productId, item.color)
                                    ? { ...i, quantity: i.quantity + quantity }
                                    : i,
                            ),
                        };
                    }
                    return { items: [...state.items, { ...item, quantity }] };
                }),
            removeItem: (productId, color) =>
                set((state) => ({
                    items: state.items.filter((i) => !isSameLine(i, productId, color)),
                })),
            updateQuantity: (productId, quantity, color) =>
                set((state) => ({
                    items:
                        quantity <= 0
                            ? state.items.filter((i) => !isSameLine(i, productId, color))
                            : state.items.map((i) =>
                                isSameLine(i, productId, color) ? { ...i, quantity } : i,
                            ),
                })),
            clear: () => set({ items: [] }),
        }),
        { name: "freemarket-cart" },
    ),
);

export const selectCartCount = (state: CartState): number =>
    state.items.reduce((total, item) => total + item.quantity, 0);
</file>

<file path="apps/shop-app/src/stores/use-wishlist-store.ts">
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface WishlistState {
    ids: string[];
    toggle: (productId: string) => void;
    clear: () => void;
}

export const useWishlistStore = create<WishlistState>()(
    persist(
        (set) => ({
            ids: [],
            toggle: (productId) =>
                set((state) => ({
                    ids: state.ids.includes(productId)
                        ? state.ids.filter((id) => id !== productId)
                        : [...state.ids, productId],
                })),
            clear: () => set({ ids: [] }),
        }),
        { name: "freemarket-wishlist" },
    ),
);
</file>

<file path="apps/shop-app/src/types/index.ts">
import type { LucideIcon } from "lucide-react";

export type AppMode = "buyer" | "merchant";

export interface NavItem {
    label: string;
    href: string;
    icon: LucideIcon;
    exact?: boolean;
    highlight?: boolean;
}

export interface CartItem {
    productId: string;
    title: string;
    price: number;
    image: string;
    sellerName: string;
    color?: string;
    quantity: number;
}

export type ProductCondition = "new" | "like-new" | "well-used";

export type SortOption = "newest" | "price-asc" | "price-desc";

export interface Category {
    id: string;
    label: string;
    icon: LucideIcon;
}

export interface Seller {
    id: string;
    name: string;
    rating: number;
    totalSales: number;
    responseTime: string;
    verified: boolean;
}

export interface Product {
    id: string;
    title: string;
    description: string;
    price: number;
    originalPrice?: number;
    images: string[];
    category: string;
    condition: ProductCondition;
    location: string;
    stock: number;
    tags: string[];
    colors: string[];
    postedLabel: string;
    createdAt: string;
    seller: Seller;
}

export interface ProductQuery {
    category?: string;
    sort?: SortOption;
}
</file>

<file path="apps/shop-app/.gitignore">
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.*
.yarn/*
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/versions

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.pnpm-debug.log*

# env files (can opt-in for committing if needed)
.env*

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
</file>

<file path="apps/shop-app/AGENTS.md">
<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
</file>

<file path="apps/shop-app/eslint.config.mjs">
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
</file>

<file path="apps/shop-app/postcss.config.mjs">
const config = { plugins: { "@tailwindcss/postcss": {} } };
export default config;
</file>

<file path="apps/shop-app/README.md">
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
</file>

<file path="apps/shop-app/tsconfig.json">
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".next/dev/types/**/*.ts",
    "**/*.mts"
  ],
  "exclude": ["node_modules"]
}
</file>

<file path="packages/auth-config/src/index.ts">
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
</file>

<file path="packages/auth-config/src/types.d.ts">
// packages/auth-config/src/types.d.ts
import "next-auth";
import "next-auth/jwt";

declare module "next-auth" {
    interface User {
        accessToken?: string;
        refreshToken?: string;
        tokenType?: string;
        accessTokenExpires?: number;
    }
    interface Session {
        accessToken?: string;
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        accessToken?: string;
        refreshToken?: string;
        tokenType?: string;
        accessTokenExpires?: number;
    }
}
</file>

<file path="packages/auth-config/package.json">
{
    "name": "@freemarket/auth-config",
    "version": "0.0.0",
    "private": true,
    "exports": {
        ".": "./src/index.ts"
    },
    "dependencies": {
        "next-auth": "5.0.0-beta.32"
    }
}
</file>

<file path="packages/ui/src/alert-dialog.tsx">
"use client"

import * as React from "react"
import { AlertDialog as AlertDialogPrimitive } from "@base-ui/react/alert-dialog"
import { cn } from "@freemarket/utils"

import { Button } from "./button"

function AlertDialog({ ...props }: AlertDialogPrimitive.Root.Props) {
  return <AlertDialogPrimitive.Root data-slot="alert-dialog" {...props} />
}

function AlertDialogTrigger({ ...props }: AlertDialogPrimitive.Trigger.Props) {
  return (
    <AlertDialogPrimitive.Trigger data-slot="alert-dialog-trigger" {...props} />
  )
}

function AlertDialogPortal({ ...props }: AlertDialogPrimitive.Portal.Props) {
  return (
    <AlertDialogPrimitive.Portal data-slot="alert-dialog-portal" {...props} />
  )
}

function AlertDialogOverlay({
  className,
  ...props
}: AlertDialogPrimitive.Backdrop.Props) {
  return (
    <AlertDialogPrimitive.Backdrop
      data-slot="alert-dialog-overlay"
      className={cn(
        "fixed inset-0 isolate z-50 bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-xs data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0",
        className
      )}
      {...props}
    />
  )
}

function AlertDialogContent({
  className,
  size = "default",
  ...props
}: AlertDialogPrimitive.Popup.Props & {
  size?: "default" | "sm"
}) {
  return (
    <AlertDialogPortal>
      <AlertDialogOverlay />
      <AlertDialogPrimitive.Popup
        data-slot="alert-dialog-content"
        data-size={size}
        className={cn(
          "group/alert-dialog-content fixed top-1/2 left-1/2 z-50 grid w-full -translate-x-1/2 -translate-y-1/2 gap-4 rounded-xl bg-popover p-4 text-popover-foreground ring-1 ring-foreground/10 duration-100 outline-none data-[size=default]:max-w-xs data-[size=sm]:max-w-xs data-[size=default]:sm:max-w-sm data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
          className
        )}
        {...props}
      />
    </AlertDialogPortal>
  )
}

function AlertDialogHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-dialog-header"
      className={cn(
        "grid grid-rows-[auto_1fr] place-items-center gap-1.5 text-center has-data-[slot=alert-dialog-media]:grid-rows-[auto_auto_1fr] has-data-[slot=alert-dialog-media]:gap-x-4 sm:group-data-[size=default]/alert-dialog-content:place-items-start sm:group-data-[size=default]/alert-dialog-content:text-left sm:group-data-[size=default]/alert-dialog-content:has-data-[slot=alert-dialog-media]:grid-rows-[auto_1fr]",
        className
      )}
      {...props}
    />
  )
}

function AlertDialogFooter({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-dialog-footer"
      className={cn(
        "-mx-4 -mb-4 flex flex-col-reverse gap-2 rounded-b-xl border-t bg-muted/50 p-4 group-data-[size=sm]/alert-dialog-content:grid group-data-[size=sm]/alert-dialog-content:grid-cols-2 sm:flex-row sm:justify-end",
        className
      )}
      {...props}
    />
  )
}

function AlertDialogMedia({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-dialog-media"
      className={cn(
        "mb-2 inline-flex size-10 items-center justify-center rounded-md bg-muted sm:group-data-[size=default]/alert-dialog-content:row-span-2 *:[svg:not([class*='size-'])]:size-6",
        className
      )}
      {...props}
    />
  )
}

function AlertDialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Title>) {
  return (
    <AlertDialogPrimitive.Title
      data-slot="alert-dialog-title"
      className={cn(
        "font-heading text-base font-medium sm:group-data-[size=default]/alert-dialog-content:group-has-data-[slot=alert-dialog-media]/alert-dialog-content:col-start-2",
        className
      )}
      {...props}
    />
  )
}

function AlertDialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Description>) {
  return (
    <AlertDialogPrimitive.Description
      data-slot="alert-dialog-description"
      className={cn(
        "text-sm text-balance text-muted-foreground md:text-pretty *:[a]:underline *:[a]:underline-offset-3 *:[a]:hover:text-foreground",
        className
      )}
      {...props}
    />
  )
}

function AlertDialogAction({
  className,
  ...props
}: React.ComponentProps<typeof Button>) {
  return (
    <Button
      data-slot="alert-dialog-action"
      className={cn(className)}
      {...props}
    />
  )
}

function AlertDialogCancel({
  className,
  variant = "outline",
  size = "default",
  ...props
}: AlertDialogPrimitive.Close.Props &
  Pick<React.ComponentProps<typeof Button>, "variant" | "size">) {
  return (
    <AlertDialogPrimitive.Close
      data-slot="alert-dialog-cancel"
      className={cn(className)}
      render={<Button variant={variant} size={size} />}
      {...props}
    />
  )
}

export {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger,
}
</file>

<file path="packages/ui/src/app-link.tsx">
// packages/ui/src/app-link.tsx
import Link from "next/link";
import type { ComponentProps } from "react";

interface AppLinkProps extends Omit<ComponentProps<"a">, "href"> {
    href: string;
    /** true khi đích nằm ở zone khác: dùng <a> để hard navigation */
    crossZone?: boolean;
}

export function AppLink({ href, crossZone = false, children, ...props }: AppLinkProps) {
    if (crossZone) return <a href={href} {...props}> {children} </a>;
    return <Link href={href} {...props}> {children} </Link>;
}
</file>

<file path="packages/ui/src/theme.css">
@custom-variant dark (&:is(.dark *));

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-destructive: var(--destructive);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  --font-sans: var(--font-inter), ui-sans-serif, system-ui, sans-serif;
}

:root {
  --radius: 0.625rem;
  --background: oklch(1 0 0);
  --foreground: oklch(0.21 0.03 265);
  --primary: oklch(0.596 0.145 163.2);        /* emerald-600 */
  --primary-foreground: oklch(0.985 0 0);
  --secondary: oklch(0.968 0.007 247.9);
  --secondary-foreground: oklch(0.21 0.03 265);
  --muted: oklch(0.968 0.007 247.9);
  --muted-foreground: oklch(0.554 0.046 257.4);
  --destructive: oklch(0.577 0.245 27.3);
  --border: oklch(0.929 0.013 255.5);          /* slate-200 */
  --input: oklch(0.929 0.013 255.5);
  --ring: oklch(0.596 0.145 163.2);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.21 0.03 265);
}

@layer base {
  * { @apply border-border; }
  body { @apply bg-background text-foreground; }
}
</file>

<file path="packages/utils/src/cn.ts">
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]): string {
    return twMerge(clsx(inputs));
}
</file>

<file path="packages/utils/src/format.ts">
const priceFormatter = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    maximumFractionDigits: 0,
});

export function formatPrice(value: number): string {
    return priceFormatter.format(value);
}

export function formatVnd(value: number): string {
    return priceFormatter.format(value);
}

export function formatCompactNumber(value: number): string {
    return new Intl.NumberFormat("vi-VN", { notation: "compact" }).format(value);
}
</file>

<file path="packages/utils/src/index.ts">
export { cn } from "./cn";
export * from "./format";
</file>

<file path="packages/utils/package.json">
{
    "name": "@freemarket/utils",
    "version": "0.0.0",
    "private": true,
    "exports": {
        ".": "./src/index.ts",
        "./format": "./src/format.ts"
    },
    "dependencies": {
        "clsx": "^2.1.1",
        "tailwind-merge": "^3.7.0"
    }
}
</file>

<file path="AGENTS.md">
<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
</file>

<file path="eslint.config.mjs">
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
</file>

<file path="README.md">
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
</file>

<file path="apps/auth-app/src/app/globals.css">
@import "tailwindcss";
@import "tw-animate-css";
@import "@freemarket/ui/theme.css";
@source "../../../../packages/ui/src";
</file>

<file path="apps/auth-app/src/app/layout.tsx">
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";
import { AuthProvider } from "@/components/providers/auth-provider";

const inter = Inter({
    subsets: ["latin", "vietnamese"],
    variable: "--font-inter",
    display: "swap",
});

export const metadata: Metadata = {
    title: {
        default: "FreeMarket - Chợ mua bán đồ mới & cũ",
        template: "%s | FreeMarket",
    },
    description:
        "FreeMarket là chợ C2C giúp bạn mua bán đồ mới và đồ cũ nhanh chóng, an toàn, minh bạch giá.",
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    themeColor: "#ffffff",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="vi" className={inter.variable}>
            <body className="min-h-dvh bg-slate-50/80 font-sans text-slate-900 antialiased">
                <AuthProvider>{children}</AuthProvider>
                <Toaster position="top-center" richColors closeButton />
            </body>
        </html>
    );
}
</file>

<file path="apps/auth-app/src/components/auth/otp-input.tsx">
"use client";

import { useRef, type ChangeEvent, type ClipboardEvent, type KeyboardEvent } from "react";
import { cn } from "@freemarket/utils"
import { OTP_LENGTH } from "@/lib/validations/verify";

interface OtpInputProps {
    value: string;
    onChange: (value: string) => void;
    disabled?: boolean;
    invalid?: boolean;
    describedBy?: string;
}

export function OtpInput({ value, onChange, disabled, invalid, describedBy }: OtpInputProps) {
    const refs = useRef<(HTMLInputElement | null)[]>([]);
    const digits = Array.from({ length: OTP_LENGTH }, (_, index) => value[index] ?? "");

    function focusAt(index: number): void {
        refs.current[Math.min(Math.max(index, 0), OTP_LENGTH - 1)]?.focus();
    }

    function handleChange(index: number, event: ChangeEvent<HTMLInputElement>): void {
        const raw = event.target.value.replace(/\D/g, "");

        if (raw === "") {
            onChange(value.slice(0, index) + value.slice(index + 1));
            return;
        }

        const typed = raw.length > 1 && digits[index] ? raw.slice(-1) : raw;
        const next =
            typed.length > 1
                ? (value.slice(0, index) + typed).slice(0, OTP_LENGTH)
                : value.slice(0, index) + typed + value.slice(index + 1);

        onChange(next);
        focusAt(index + typed.length);
    }

    function handleKeyDown(index: number, event: KeyboardEvent<HTMLInputElement>): void {
        if (event.key === "Backspace" && !digits[index]) {
            event.preventDefault();
            onChange(value.slice(0, Math.max(index - 1, 0)) + value.slice(index));
            focusAt(index - 1);
        } else if (event.key === "ArrowLeft") {
            event.preventDefault();
            focusAt(index - 1);
        } else if (event.key === "ArrowRight") {
            event.preventDefault();
            focusAt(index + 1);
        }
    }

    function handlePaste(event: ClipboardEvent<HTMLInputElement>): void {
        event.preventDefault();
        const pasted = event.clipboardData.getData("text").replace(/\D/g, "").slice(0, OTP_LENGTH);
        if (!pasted) return;
        onChange(pasted);
        focusAt(pasted.length);
    }

    function handleFocus(index: number): void {
        if (index > value.length) focusAt(value.length);
    }

    return (
        <div role="group" aria-label="Mã OTP 6 chữ số" className="flex justify-between gap-2">
            {digits.map((digit, index) => (
                <input
                    key={index}
                    ref={(element) => {
                        refs.current[index] = element;
                    }}
                    type="text"
                    inputMode="numeric"
                    autoComplete={index === 0 ? "one-time-code" : "off"}
                    maxLength={index === 0 ? OTP_LENGTH : 2}
                    value={digit}
                    disabled={disabled}
                    aria-label={`Chữ số thứ ${index + 1}`}
                    aria-invalid={invalid}
                    aria-describedby={describedBy}
                    onChange={(event) => handleChange(index, event)}
                    onKeyDown={(event) => handleKeyDown(index, event)}
                    onPaste={handlePaste}
                    onFocus={() => handleFocus(index)}
                    className={cn(
                        "h-12 w-full min-w-0 rounded-lg border border-slate-200 bg-white text-center text-lg font-semibold text-slate-900 outline-none transition-colors duration-150 focus-visible:border-emerald-600 focus-visible:ring-2 focus-visible:ring-emerald-600/30 disabled:opacity-50",
                        invalid && "border-rose-400",
                    )}
                />
            ))}
        </div>
    );
}
</file>

<file path="apps/auth-app/src/components/auth/password-strength.tsx">
import { getPasswordStrength } from "@/lib/validations/auth";
import { cn } from "@freemarket/utils"

interface PasswordStrengthProps {
    password: string;
}

const segmentColors: string[] = ["bg-rose-500", "bg-amber-500", "bg-yellow-400", "bg-emerald-500"];

export function PasswordStrength({ password }: PasswordStrengthProps) {
    const { score, label } = getPasswordStrength(password);
    if (!password) return null;

    return (
        <div className="space-y-1" aria-live="polite">
            <div className="grid grid-cols-4 gap-1">
                {segmentColors.map((color, index) => (
                    <span
                        key={color}
                        className={cn(
                            "h-1 rounded-full transition-colors duration-150",
                            index < score ? color : "bg-slate-200",
                        )}
                    />
                ))}
            </div>
            <p className="text-xs text-slate-500">Độ mạnh: {label}</p>
        </div>
    );
}
</file>

<file path="apps/auth-app/src/components/auth/register-progress.tsx">
import { Check } from "lucide-react";
import { cn } from "@freemarket/utils"
import type { RegisterStepConfig } from "@/types";

interface RegisterProgressProps {
    steps: RegisterStepConfig[];
    currentStep: number;
}

export function RegisterProgress({ steps, currentStep }: RegisterProgressProps) {
    const percent = Math.round(((currentStep + 1) / steps.length) * 100);

    return (
        <div>
            <div className="mb-2 flex items-baseline justify-between text-xs">
                <span className="font-semibold text-slate-900">
                    Bước {currentStep + 1}/{steps.length}: {steps[currentStep].label}
                </span>
                <span className="text-slate-500">{percent}%</span>
            </div>

            <div
                role="progressbar"
                aria-label="Tiến trình đăng ký"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={percent}
                className="h-2 overflow-hidden rounded-full bg-slate-100"
            >
                <div
                    className="h-full rounded-full bg-emerald-600 transition-[width] duration-200"
                    style={{ width: `${percent}%` }}
                />
            </div>

            <ol
                className="mt-3 grid gap-1"
                style={{ gridTemplateColumns: `repeat(${steps.length}, minmax(0, 1fr))` }}
            >
                {steps.map((step, index) => {
                    const isDone = index < currentStep;
                    const isCurrent = index === currentStep;
                    return (
                        <li
                            key={step.id}
                            aria-current={isCurrent ? "step" : undefined}
                            className="flex flex-col items-center gap-1 text-center"
                        >
                            <span
                                className={cn(
                                    "flex size-6 items-center justify-center rounded-full border text-xs font-semibold transition-colors duration-150",
                                    isDone && "border-emerald-600 bg-emerald-600 text-white",
                                    isCurrent && "border-emerald-600 bg-white text-emerald-700",
                                    !isDone && !isCurrent && "border-slate-200 bg-white text-slate-400",
                                )}
                            >
                                {isDone ? <Check className="size-3.5" aria-hidden="true" /> : index + 1}
                            </span>
                            <span
                                className={cn(
                                    "text-[11px] font-medium",
                                    isCurrent || isDone ? "text-slate-900" : "text-slate-400",
                                )}
                            >
                                {step.label}
                            </span>
                        </li>
                    );
                })}
            </ol>
        </div>
    );
}
</file>

<file path="apps/auth-app/src/components/providers/auth-provider.tsx">
"use client";

import type { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";

export function AuthProvider({ children }: { children: ReactNode }) {
    return <SessionProvider basePath="/api/auth">{children} </SessionProvider>
}
</file>

<file path="apps/auth-app/src/auth.ts">
import NextAuth, { CredentialsSignin, type User } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import { loginSchema } from "@/lib/validations/auth";
import { otpSchema } from "@/lib/validations/verify";
import { LoginErrorCode } from "@/lib/auth-errors";
import { BackendFailure, postBackend } from "@/lib/backend";
import { sharedAuthConfig } from "@freemarket/auth-config";

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
    ...sharedAuthConfig,
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
</file>

<file path="apps/merchant-app/src/app/globals.css">
@import "tailwindcss";
@import "tw-animate-css";
@import "@freemarket/ui/theme.css";
@source "../../../../packages/ui/src";
</file>

<file path="apps/merchant-app/src/components/merchant/merchant-profile-header.tsx">
import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import type { MerchantProfile } from "@/types/onboard";
import { ShareStoreButton } from "@/components/merchant/share-store-button";

interface MerchantProfileHeaderProps {
  merchant: MerchantProfile;
}

function toHandle(shopName: string): string {
  const slug = shopName
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ".")
    .replace(/^\.+|\.+$/g, "");
  return `@${slug || "store"}`;
}

export function MerchantProfileHeader({ merchant }: MerchantProfileHeaderProps) {
  const handle = toHandle(merchant.shopName);

  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="relative h-36 w-full bg-slate-200 sm:h-52">
        {merchant.bannerUrl && (
          <Image
            src={merchant.bannerUrl}
            alt={`Ảnh bìa của ${merchant.shopName}`}
            fill
            priority
            unoptimized
            sizes="(min-width: 1280px) 960px, 100vw"
            className="object-cover"
          />
        )}
      </div>

      <div className="px-4 pb-5 sm:px-6">
        <div className="-mt-10 flex items-end justify-between gap-3 sm:-mt-12">
          <div className="relative flex size-20 shrink-0 items-center justify-center overflow-hidden rounded-full bg-emerald-100 text-2xl font-semibold text-emerald-700 ring-4 ring-white sm:size-24">
            {merchant.logoUrl ? (
              <Image
                src={merchant.logoUrl}
                alt={`Ảnh đại diện của ${merchant.shopName}`}
                fill
                unoptimized
                sizes="96px"
                className="object-cover"
              />
            ) : (
              <span aria-hidden="true">{merchant.shopName.charAt(0).toUpperCase()}</span>
            )}
          </div>
          <ShareStoreButton handle={handle} />
        </div>

        <h1 className="mt-3 text-xl font-semibold text-slate-900">{merchant.shopName}</h1>
        <p className="text-sm text-slate-500">{handle}</p>
        {merchant.description && (
          <p className="mt-2 max-w-prose text-sm leading-relaxed text-slate-700">{merchant.description}</p>
        )}

        <p className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500">
          {merchant.contactEmail && (
            <span className="flex items-center gap-1">
              <Mail className="size-3.5" aria-hidden="true" />
              {merchant.contactEmail}
            </span>
          )}
          {merchant.contactPhone && (
            <span className="flex items-center gap-1">
              <Phone className="size-3.5" aria-hidden="true" />
              {merchant.contactPhone}
            </span>
          )}
        </p>
      </div>
    </section>
  );
}
</file>

<file path="apps/merchant-app/tsconfig.json">
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": [
        "./src/*"
      ]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".next/dev/types/**/*.ts",
    "**/*.mts",
    "src/components/onboard/form-field.tsx"
  ],
  "exclude": [
    "node_modules"
  ]
}
</file>

<file path="apps/shop-app/src/app/globals.css">
@import "tailwindcss";
@import "tw-animate-css";
@import "@freemarket/ui/theme.css";
@source "../../../../packages/ui/src";
</file>

<file path="apps/shop-app/src/app/layout.tsx">
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import { AuthProvider } from "@/components/providers/auth-provider";
import { BottomNav } from "@/components/layout/bottom-nav";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "vietnamese"], variable: "--font-sans" });

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="vi" className={inter.variable}>
            <body className="min-h-screen bg-slate-50/80 text-slate-900 antialiased">
                <AuthProvider>
                    <SiteHeader />
                    <main>{children}</main>
                    <SiteFooter />
                    <BottomNav />
                </AuthProvider>
                <Toaster position="top-center" richColors />
            </body>
        </html>
    );
}
</file>

<file path="apps/shop-app/src/components/home/category-bar.tsx">
import Link from "next/link";
import { LayoutGrid } from "lucide-react";
import { cn } from "@freemarket/utils"
import type { Category, SortOption } from "@/types";

interface CategoryBarProps {
    categories: Category[];
    activeCategory?: string;
    sort: SortOption;
}

function buildHref(category: string | undefined, sort: SortOption): string {
    const params = new URLSearchParams();
    if (category) params.set("category", category);
    if (sort !== "newest") params.set("sort", sort);
    const query = params.toString();
    return query ? `/?${query}` : "/";
}

const chipBase =
    "flex shrink-0 items-center gap-1.5 rounded-full border px-3.5 py-2 text-sm font-medium transition-colors duration-150";

export function CategoryBar({ categories, activeCategory, sort }: CategoryBarProps) {
    return (
        <nav aria-label="Danh mục sản phẩm" className="-mx-4 overflow-x-auto px-4">
            <ul className="flex gap-2 pb-1">
                <li>
                    <Link
                        href={buildHref(undefined, sort)}
                        aria-current={!activeCategory ? "page" : undefined}
                        className={cn(
                            chipBase,
                            !activeCategory
                                ? "border-emerald-600 bg-emerald-600 text-white"
                                : "border-slate-200 bg-white text-slate-700 hover:bg-slate-100",
                        )}
                    >
                        <LayoutGrid className="size-4" aria-hidden="true" />
                        Tất cả
                    </Link>
                </li>
                {categories.map(({ id, label, icon: Icon }) => {
                    const isActive = activeCategory === id;
                    return (
                        <li key={id}>
                            <Link
                                href={buildHref(id, sort)}
                                aria-current={isActive ? "page" : undefined}
                                className={cn(
                                    chipBase,
                                    isActive
                                        ? "border-emerald-600 bg-emerald-600 text-white"
                                        : "border-slate-200 bg-white text-slate-700 hover:bg-slate-100",
                                )}
                            >
                                <Icon className="size-4" aria-hidden="true" />
                                {label}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}
</file>

<file path="apps/shop-app/src/components/layout/bottom-nav.tsx">
"use client";

import { getNavItems, getAppMode, isNavActive } from "@/lib/navigation";
import { cn } from "@freemarket/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function BottomNav() {
    const pathname = usePathname();
    const items = getNavItems(getAppMode(pathname));

    return (
        <nav
            aria-label="Điều hướng di động"
            className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white pb-[env(safe-area-inset-bottom)] md:hidden"
        >
            <ul className="mx-auto grid h-16 max-w-lg grid-cols-5 items-center">
                {items.map((item) => {
                    const isActive = isNavActive(pathname, item);
                    const Icon = item.icon;
                    return (
                        <li key={item.href} className="flex justify-center">
                            <Link
                                href={item.href}
                                aria-current={isActive ? "page" : undefined}
                                className="flex flex-col items-center gap-0.5 px-2 py-1 text-[11px] font-medium"
                            >
                                {item.highlight ? (
                                    <span className="flex size-11 -translate-y-2 items-center justify-center rounded-full bg-emerald-600 text-white transition-colors duration-150 active:bg-emerald-700">
                                        <Icon className="size-6" aria-hidden="true" />
                                        <span className="sr-only">{item.label}</span>
                                    </span>
                                ) : (
                                    <>
                                        <Icon
                                            className={cn(
                                                "size-5 transition-colors duration-150",
                                                isActive ? "text-emerald-600" : "text-slate-500",
                                            )}
                                            aria-hidden="true"
                                        />
                                        <span className={isActive ? "text-emerald-700" : "text-slate-500"}>
                                            {item.label}
                                        </span>
                                    </>
                                )}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}
</file>

<file path="apps/shop-app/src/components/layout/mode-switcher.tsx">
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag, Store } from "lucide-react";
import { toast } from "sonner";
import { getAppMode } from "@/lib/navigation";
import { cn } from "@freemarket/utils"
import type { AppMode } from "@/types";

interface ModeOption {
    mode: AppMode;
    label: string;
    href: string;
    icon: typeof Store;
    toastMessage: string;
}

const options: ModeOption[] = [
    {
        mode: "buyer",
        label: "Mua sắm",
        href: "/",
        icon: ShoppingBag,
        toastMessage: "Đã chuyển sang chế độ Mua sắm",
    },
    {
        mode: "merchant",
        label: "Studio",
        href: "/merchant",
        icon: Store,
        toastMessage: "Đã chuyển sang Merchant Studio",
    },
];

export function ModeSwitcher() {
    const pathname = usePathname();
    const currentMode = getAppMode(pathname);

    return (
        <div
            role="tablist"
            aria-label="Chuyển chế độ tài khoản"
            className="flex items-center rounded-lg border border-slate-200 bg-slate-100 p-0.5"
        >
            {options.map(({ mode, label, href, icon: Icon, toastMessage }) => {
                const isActive = currentMode === mode;
                return (
                    <Link
                        key={mode}
                        href={href}
                        role="tab"
                        aria-selected={isActive}
                        onClick={() => {
                            if (!isActive) toast.info(toastMessage);
                        }}
                        className={cn(
                            "flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-medium transition-colors duration-150 sm:text-sm",
                            isActive
                                ? "bg-white text-slate-900 shadow-sm"
                                : "text-slate-500 hover:text-slate-900",
                        )}
                    >
                        <Icon className="size-4" aria-hidden="true" />
                        <span>{label}</span>
                    </Link>
                );
            })}
        </div>
    );
}
</file>

<file path="apps/shop-app/src/components/product/product-card-skeleton.tsx">
import { Skeleton } from "@freemarket/ui/skeleton";

export function ProductCardSkeleton() {
    return (
        <div className="space-y-3 overflow-hidden rounded-xl border border-slate-200 bg-white pb-3">
            <Skeleton className="aspect-square w-full rounded-none" />
            <div className="space-y-2 px-3">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
                <Skeleton className="h-5 w-1/2" />
                <Skeleton className="h-3 w-3/4" />
                <Skeleton className="h-8 w-full" />
            </div>
        </div>
    );
}
</file>

<file path="apps/shop-app/src/components/product/wishlist-button.tsx">
"use client";

import { Heart } from "lucide-react";
import { toast } from "sonner";
import { useHasMounted } from "../../hooks/use-has-mounted";
import { cn } from "@freemarket/utils"
import { useWishlistStore } from "@/stores/use-wishlist-store";

interface WishlistButtonProps {
    productId: string;
    className?: string;
}

export function WishlistButton({ productId, className }: WishlistButtonProps) {
    const hasMounted = useHasMounted();
    const isSaved = useWishlistStore((state) => state.ids.includes(productId));
    const toggle = useWishlistStore((state) => state.toggle);
    const active = hasMounted && isSaved;

    function handleClick(): void {
        toggle(productId);
        if (active) {
            toast.info("Đã bỏ khỏi danh sách yêu thích");
        } else {
            toast.success("Đã lưu vào yêu thích!");
        }
    }

    return (
        <button
            type="button"
            onClick={handleClick}
            aria-pressed={active}
            aria-label={active ? "Bỏ yêu thích" : "Lưu vào yêu thích"}
            className={cn(
                "flex size-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition-colors duration-150 hover:text-rose-600",
                active && "text-rose-600",
                className,
            )}
        >
            <Heart className={cn("size-4", active && "fill-rose-600")} aria-hidden="true" />
        </button>
    );
}
</file>

<file path="apps/shop-app/src/lib/utils.ts">
export { cn } from "@freemarket/utils"
</file>

<file path="apps/shop-app/package.json">
{
  "name": "shop-app",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev -p 3000",
    "build": "next build",
    "start": "next start -p 3000",
    "lint": "eslint"
  },
  "dependencies": {
    "@freemarket/ui": "workspace:*",
    "@freemarket/utils": "workspace:*",
    "lucide-react": "^1.52.0",
    "next": "16.3.7",
    "next-auth": "5.0.0-beta.32",
    "react": "19.2.8",
    "react-dom": "19.2.8",
    "sonner": "^2.0.8",
    "tw-animate-css": "^1.4.0",
    "zustand": "^5.0.15"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "babel-plugin-react-compiler": "1.0.0",
    "eslint": "^9",
    "eslint-config-next": "16.3.7",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}
</file>

<file path="packages/ui/src/badge.tsx">
import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@freemarket/utils"

const badgeVariants = cva(
  "group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-4xl border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3!",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
        secondary:
          "bg-secondary text-secondary-foreground [a]:hover:bg-secondary/80",
        destructive:
          "bg-destructive/10 text-destructive focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:focus-visible:ring-destructive/40 [a]:hover:bg-destructive/20",
        outline:
          "border-border text-foreground [a]:hover:bg-muted [a]:hover:text-muted-foreground",
        ghost:
          "hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant = "default",
  render,
  ...props
}: useRender.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return useRender({
    defaultTagName: "span",
    props: mergeProps<"span">(
      {
        className: cn(badgeVariants({ variant }), className),
      },
      props
    ),
    render,
    state: {
      slot: "badge",
      variant,
    },
  })
}

export { Badge, badgeVariants }
</file>

<file path="packages/ui/src/button.tsx">
import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@freemarket/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/80",
        outline:
          "border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        ghost:
          "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default:
          "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        icon: "size-8",
        "icon-xs":
          "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
        "icon-sm":
          "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
        "icon-lg": "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
</file>

<file path="packages/ui/src/checkbox.tsx">
"use client"

import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox"
import { cn } from "@freemarket/utils"
import { CheckIcon } from "lucide-react"

function Checkbox({ className, ...props }: CheckboxPrimitive.Root.Props) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer relative flex size-4 shrink-0 items-center justify-center rounded-[4px] border border-input transition-colors outline-none group-has-disabled/field:opacity-50 group-has-[:focus-visible]/field-label:ring-0 group-has-[:focus-visible]/field-label:not-data-checked:border-input after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aria-invalid:aria-checked:border-primary dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground group-has-[:focus-visible]/field-label:data-checked:border-primary dark:data-checked:bg-primary",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="grid place-content-center text-current transition-none [&>svg]:size-3.5"
      >
        <CheckIcon
        />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }
</file>

<file path="packages/ui/src/input.tsx">
import * as React from "react"
import { Input as InputPrimitive } from "@base-ui/react/input"
import { cn } from "@freemarket/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(
        "h-8 w-full min-w-0 rounded-lg border border-input bg-transparent px-2.5 py-1 text-base transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
        className
      )}
      {...props}
    />
  )
}

export { Input }
</file>

<file path="packages/ui/src/label.tsx">
"use client"

import * as React from "react"
import { cn } from "@freemarket/utils"

function Label({ className, ...props }: React.ComponentProps<"label">) {
  return (
    <label
      data-slot="label"
      className={cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export { Label }
</file>

<file path="packages/ui/src/sheet.tsx">
"use client"

import * as React from "react"
import { Dialog as SheetPrimitive } from "@base-ui/react/dialog"
import { cn } from "@freemarket/utils"

import { Button } from "./button"
import { XIcon } from "lucide-react"

function Sheet({ ...props }: SheetPrimitive.Root.Props) {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />
}

function SheetTrigger({ ...props }: SheetPrimitive.Trigger.Props) {
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />
}

function SheetClose({ ...props }: SheetPrimitive.Close.Props) {
  return <SheetPrimitive.Close data-slot="sheet-close" {...props} />
}

function SheetPortal({ ...props }: SheetPrimitive.Portal.Props) {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />
}

function SheetOverlay({ className, ...props }: SheetPrimitive.Backdrop.Props) {
  return (
    <SheetPrimitive.Backdrop
      data-slot="sheet-overlay"
      className={cn(
        "fixed inset-0 z-50 bg-black/10 transition-opacity duration-150 data-ending-style:opacity-0 data-starting-style:opacity-0 supports-backdrop-filter:backdrop-blur-xs",
        className
      )}
      {...props}
    />
  )
}

function SheetContent({
  className,
  children,
  side = "right",
  showCloseButton = true,
  ...props
}: SheetPrimitive.Popup.Props & {
  side?: "top" | "right" | "bottom" | "left"
  showCloseButton?: boolean
}) {
  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Popup
        data-slot="sheet-content"
        data-side={side}
        className={cn(
          "fixed z-50 flex flex-col gap-4 bg-popover bg-clip-padding text-sm text-popover-foreground shadow-lg transition duration-200 ease-in-out data-ending-style:opacity-0 data-starting-style:opacity-0 data-[side=bottom]:inset-x-0 data-[side=bottom]:bottom-0 data-[side=bottom]:h-auto data-[side=bottom]:border-t data-[side=bottom]:data-ending-style:translate-y-[2.5rem] data-[side=bottom]:data-starting-style:translate-y-[2.5rem] data-[side=left]:inset-y-0 data-[side=left]:left-0 data-[side=left]:h-full data-[side=left]:w-3/4 data-[side=left]:border-r data-[side=left]:data-ending-style:translate-x-[-2.5rem] data-[side=left]:data-starting-style:translate-x-[-2.5rem] data-[side=right]:inset-y-0 data-[side=right]:right-0 data-[side=right]:h-full data-[side=right]:w-3/4 data-[side=right]:border-l data-[side=right]:data-ending-style:translate-x-[2.5rem] data-[side=right]:data-starting-style:translate-x-[2.5rem] data-[side=top]:inset-x-0 data-[side=top]:top-0 data-[side=top]:h-auto data-[side=top]:border-b data-[side=top]:data-ending-style:translate-y-[-2.5rem] data-[side=top]:data-starting-style:translate-y-[-2.5rem] data-[side=left]:sm:max-w-sm data-[side=right]:sm:max-w-sm",
          className
        )}
        {...props}
      >
        {children}
        {showCloseButton && (
          <SheetPrimitive.Close
            data-slot="sheet-close"
            render={
              <Button
                variant="ghost"
                className="absolute top-3 right-3"
                size="icon-sm"
              />
            }
          >
            <XIcon
            />
            <span className="sr-only">Close</span>
          </SheetPrimitive.Close>
        )}
      </SheetPrimitive.Popup>
    </SheetPortal>
  )
}

function SheetHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-header"
      className={cn("flex flex-col gap-0.5 p-4", className)}
      {...props}
    />
  )
}

function SheetFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-footer"
      className={cn("mt-auto flex flex-col gap-2 p-4", className)}
      {...props}
    />
  )
}

function SheetTitle({ className, ...props }: SheetPrimitive.Title.Props) {
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      className={cn(
        "font-heading text-base font-medium text-foreground",
        className
      )}
      {...props}
    />
  )
}

function SheetDescription({
  className,
  ...props
}: SheetPrimitive.Description.Props) {
  return (
    <SheetPrimitive.Description
      data-slot="sheet-description"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
}

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}
</file>

<file path="packages/ui/src/skeleton.tsx">
import { cn } from "@freemarket/utils"

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("animate-pulse rounded-md bg-muted", className)}
      {...props}
    />
  )
}

export { Skeleton }
</file>

<file path="packages/ui/src/tabs.tsx">
"use client"

import { Tabs as TabsPrimitive } from "@base-ui/react/tabs"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@freemarket/utils"

function Tabs({
  className,
  orientation = "horizontal",
  ...props
}: TabsPrimitive.Root.Props) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      data-orientation={orientation}
      className={cn(
        "group/tabs flex gap-2 data-horizontal:flex-col",
        className
      )}
      {...props}
    />
  )
}

const tabsListVariants = cva(
  "group/tabs-list inline-flex w-fit items-center justify-center rounded-lg p-[3px] text-muted-foreground group-data-horizontal/tabs:h-8 group-data-vertical/tabs:h-fit group-data-vertical/tabs:flex-col data-[variant=line]:rounded-none",
  {
    variants: {
      variant: {
        default: "bg-muted",
        line: "gap-1 bg-transparent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function TabsList({
  className,
  variant = "default",
  ...props
}: TabsPrimitive.List.Props & VariantProps<typeof tabsListVariants>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      data-variant={variant}
      className={cn(tabsListVariants({ variant }), className)}
      {...props}
    />
  )
}

function TabsTrigger({ className, ...props }: TabsPrimitive.Tab.Props) {
  return (
    <TabsPrimitive.Tab
      data-slot="tabs-trigger"
      className={cn(
        "relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-1.5 py-0.5 text-sm font-medium whitespace-nowrap text-foreground/60 transition-all group-data-vertical/tabs:w-full group-data-vertical/tabs:justify-start hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 has-data-[icon=inline-end]:pr-1 has-data-[icon=inline-start]:pl-1 aria-disabled:pointer-events-none aria-disabled:opacity-50 dark:text-muted-foreground dark:hover:text-foreground group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        "group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-active:bg-transparent dark:group-data-[variant=line]/tabs-list:data-active:border-transparent dark:group-data-[variant=line]/tabs-list:data-active:bg-transparent",
        "data-active:bg-background data-active:text-foreground dark:data-active:border-input dark:data-active:bg-input/30 dark:data-active:text-foreground",
        "after:absolute after:bg-foreground after:opacity-0 after:transition-opacity group-data-horizontal/tabs:after:inset-x-0 group-data-horizontal/tabs:after:bottom-[-5px] group-data-horizontal/tabs:after:h-0.5 group-data-vertical/tabs:after:inset-y-0 group-data-vertical/tabs:after:-right-1 group-data-vertical/tabs:after:w-0.5 group-data-[variant=line]/tabs-list:data-active:after:opacity-100",
        className
      )}
      {...props}
    />
  )
}

function TabsContent({ className, ...props }: TabsPrimitive.Panel.Props) {
  return (
    <TabsPrimitive.Panel
      data-slot="tabs-content"
      className={cn("flex-1 text-sm outline-none", className)}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent, tabsListVariants }
</file>

<file path="packages/ui/package.json">
{
    "name": "@freemarket/ui",
    "version": "0.0.0",
    "private": true,
    "exports": {
        "./theme.css": "./src/theme.css",
        "./*": "./src/*.tsx"
    },
    "dependencies": {
        "@base-ui/react": "^1.8.0",
        "@freemarket/utils": "workspace:*",
        "class-variance-authority": "^0.7.1",
        "lucide-react": "^1.52.0"
    },
    "peerDependencies": {
        "react": "^19",
        "react-dom": "^19",
        "next": "*"
    },
    "devDependencies": {
        "@types/react": "^19",
        "@types/react-dom": "^19",
        "react": "^19",
        "react-dom": "^19"
    }
}
</file>

<file path="CLAUDE.md">
# FREEMARKET FRONTEND NEXT.JS GUIDELINES

## 1. Core Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript (Strict mode enabled)
- **Styling**: Tailwind CSS v4 + shadcn/ui
- **Icons**: Lucide React (`lucide-react`)
- **State Management**: Zustand (with `persist` middleware for LocalStorage)
- **Form & Validation**: React Hook Form + Zod
- **Animations**: Framer Motion / Tailwind CSS transitions
- **Notifications**: Sonner (`toast`)

## 2. Project Domain & Visual Vibe
- **Domain**: Two-sided C2C E-commerce Marketplace (Users act seamlessly as both Buyers and Merchants/Sellers).
  - **Buyer Experience**: Product feed, category filters, item details, order tracking, direct seller chat, wishlist/cart.
  - **Merchant Experience**: Quick product listing creation, active listings manager, simple order fulfillment status, sales summary.
  - **Account Mode**: Seamless UI role-switching between "Buyer Mode" (Shopping) and "Merchant Studio" (Selling/Managing).

- **Visual Aesthetic & Motion Rules**:
  - **Utilitarian & Clean**: Practical, distraction-free UI focused on content, price clarity, and fast scanning.
  - **Zero Gloss / No Flashy FX**: STRICTLY NO complex 3D effects, heavy glassmorphism, glowing gradients, or bouncy/fancy animations.
  - **Minimal Motion**: Limit animations strictly to functional UI state changes (e.g., accordion expansion, bottom-sheet slide up, tab switching) with fast durations (`duration-150` or `duration-200`).

- **Color Palette (Light & Approachable)**:
  - **Backgrounds**: Bright, clean, crisp light mode (`bg-white`, `bg-slate-50/80`), subtle slate borders (`border-slate-200`).
  - **Primary Accent**: Friendly, trustworthy high-contrast accent (e.g., Slate/Emerald/Teal or Warm Coral) for key CTAs.
  - **Condition & Status Badges**: Light pastel color-coded badges for item conditions (*New*, *Like New*, *Well Used*) and order states (*Pending*, *Shipped*, *Completed*).

- **Layout & Mobile-First UX Patterns**:
  - **Mobile-First Navigation**: Fixed bottom navigation bar (Home, Search, Sell +, Messages, Profile/Studio).
  - **Touch-Friendly Controls**: Use Bottom Sheets (`drawer`) for mobile filters/actions instead of center popups. Sticky bottom action bar for "Buy Now / Chat with Seller" on product detail pages.
  - **Trust & Micro-Signals**: Always display seller reputation badges (rating, total sales, response speed) and item location/condition clearly on product cards.

## 3. Component & Boundary Rules (RSC vs Client)
- **Server Components (Default)**: All pages (`app/**/page.tsx`), layouts, and static content displays MUST be React Server Components (RSC) by default.
- **Client Components**: Add `"use client"` strictly at the top of files that require browser interactivity (`useState`, `useEffect`, event listeners, Zustand hooks).
- **Isolate Interactivity**: Do NOT mark entire pages as `"use client"` for a single interactive element. Extract interactive components (e.g., `<AddToCartButton />`, `<CartDrawer />`) into separate client files.

## 5. Mock Data & Data Flow (No Backend APIs)
- **No Real API Requests**: Do NOT build backend API routes, Database queries, or external `fetch()` calls.
- **Centralized Mock Data**: Place all mock items in `@/lib/mock-data.ts`.
- **Rich & Realistic Data**: Include high-resolution Unsplash URLs, realistic prices, ratings, stock counts, tags, variant colors, and descriptions.
- **High Quality Images**: Use Unsplash image URLs with query params (`?auto=format&fit=crop&w=800&q=80`) and ensure standard aspect ratios (`aspect-square`, `aspect-[4/5]`).

## 6. State Management & Persistence
- **Cart & Wishlist**: Use Zustand stores with `persist` middleware to preserve items in `localStorage` across page reloads.
- **Immediate Feedback**: Trigger a toast notification (`toast.success("Added to cart!")` or `toast.info(...)`) via `sonner` on every user action (Add to Cart, Save Wishlist, Apply Coupon, Copy Link).

## 7. Edge Cases, Loading & Empty States
- **Skeleton UI**: Always provide `<Skeleton />` variants or `loading.tsx` fallbacks for product cards, details, and lists.
- **Empty States**: Design polished empty state UI with helpful CTA buttons for cases like empty cart, no search results, or empty wishlist.

## 9. Coding & Naming Conventions
- **Naming**:
  - Components & Interfaces: `PascalCase` (e.g., `ProductCard.tsx`, `ProductProps`)
  - Files & Folders: `kebab-case` (e.g., `product-card.tsx`, `use-cart.ts`)
  - Functions & Variables: `camelCase` (e.g., `calculateTotal`, `isCartOpen`)
- **Exports**: Prefer named exports (`export function ProductCard() {}`), reserving default exports ONLY for Next.js route components (`page.tsx`, `layout.tsx`, `loading.tsx`).
- **Strict TypeScript**:
  - NO `any` or implicit `unknown`. Explicitly define all props and type shapes in `@/types/`.
- **Tailwind Helper**: Always use `cn()` from `@/lib/utils` when conditionally merging dynamic class names.

## 10. AI Behavioral & Output Expectations
- **Production-Ready Code**: Output complete, copy-pasteable, runnable code. NEVER use placeholders like `// TODO: Implement later` or truncation comment tags like `// ... rest of code`.
- **Self-Correction**: Automatically check for missing imports, syntax discrepancies, mismatched RSC boundaries, or unhandled TypeScript types before finalizing code output.
</file>

<file path="pnpm-workspace.yaml">
allowBuilds:
  sharp: false
  unrs-resolver: false

packages:
  - 'apps/*'
  - 'packages/*'
</file>

<file path="apps/merchant-app/src/components/merchant/merchant-product-card.tsx">
"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { cn, formatVnd } from "@freemarket/utils"
import type { Product, ProductCondition } from "@/types/merchant";
import { getDefaultVariant } from "@/lib/utils";
import { Badge } from "@freemarket/ui/badge";

const conditionMap: Record<ProductCondition, { label: string; className: string }> = {
    new: { label: "Mới", className: "bg-emerald-50 text-emerald-700 border-emerald-200" },
    "like-new": { label: "Như mới", className: "bg-sky-50 text-sky-700 border-sky-200" },
    "well-used": { label: "Đã dùng nhiều", className: "bg-amber-50 text-amber-700 border-amber-200" },
};

interface MerchantProductCardProps {
    product: Product;
}

export function MerchantProductCard({ product }: MerchantProductCardProps) {
    const [selectedId, setSelectedId] = useState<string>(getDefaultVariant(product).id);
    const selected =
        product.variants.find((v) => v.id === selectedId) ?? getDefaultVariant(product);
    const condition = conditionMap[product.condition];
    const isOutOfStock = selected.stock === 0;

    return (
        <article className="flex flex-col overflow-hidden rounded-lg border border-slate-200 bg-white">
            <div className="relative aspect-square bg-slate-100">
                <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(min-width: 1024px) 220px, 50vw"
                    className="object-cover"
                />
                <Badge
                    variant="outline"
                    className={cn("absolute left-2 top-2 bg-white", condition.className)}
                >
                    {condition.label}
                </Badge>
            </div>

            <div className="flex flex-1 flex-col gap-2 p-3">
                <h3 className="line-clamp-2 text-sm font-medium text-slate-900">{product.title}</h3>

                <p className="text-base font-semibold text-emerald-700">{formatVnd(selected.price)}</p>

                <div className="flex flex-wrap gap-1.5" role="radiogroup" aria-label="Phân loại">
                    {product.variants.map((variant) => {
                        const isActive = variant.id === selected.id;
                        return (
                            <button
                                key={variant.id}
                                type="button"
                                role="radio"
                                aria-checked={isActive}
                                onClick={() => setSelectedId(variant.id)}
                                className={cn(
                                    "flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs transition-colors duration-150",
                                    isActive
                                        ? "border-emerald-600 bg-emerald-50 text-emerald-700"
                                        : "border-slate-200 text-slate-600 hover:border-slate-300",
                                    variant.stock === 0 && "text-slate-400 line-through"
                                )}
                            >
                                {variant.colorHex && (
                                    <span
                                        className="size-2.5 rounded-full border border-slate-300"
                                        style={{ backgroundColor: variant.colorHex }}
                                    />
                                )}
                                {variant.name}
                            </button>
                        );
                    })}
                </div>

                <p className="text-xs text-slate-500">
                    {selected.isDefault ? "Phân loại mặc định · " : ""}
                    {isOutOfStock ? (
                        <span className="font-medium text-rose-600">Hết hàng</span>
                    ) : (
                        <>Còn {selected.stock}</>
                    )}
                    {" · "}SKU {selected.sku}
                </p>

                <p className="mt-auto flex items-center gap-1 pt-1 text-xs text-slate-500">
                    <MapPin className="size-3" />
                    {product.location} · Đã bán {product.sold}
                </p>
            </div>
        </article>
    );
}
</file>

<file path="apps/merchant-app/src/components/merchant/merchant-products.tsx">
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { PackageOpen } from "lucide-react";
import { Button } from "@freemarket/ui/button";
import { MerchantProductCard } from "@/components/merchant/merchant-product-card";
import { cn } from "@freemarket/utils"
import type { Product, ProductCategory } from "@/types/merchant";

interface MerchantProductsProps {
    categories: ProductCategory[];
    products: Product[];
}

const ALL = "all";

export function MerchantProducts({ categories, products }: MerchantProductsProps) {
    const [activeId, setActiveId] = useState<string>(ALL);

    const groups = useMemo(
        () =>
            categories
                .filter((c) => activeId === ALL || c.id === activeId)
                .map((category) => ({
                    category,
                    items: products.filter((p) => p.categoryId === category.id),
                }))
                .filter((g) => g.items.length > 0),
        [categories, products, activeId]
    );

    const chips: ProductCategory[] = [{ id: ALL, name: "Tất cả" }, ...categories];

    return (
        <section className="px-4 py-5 sm:px-6">
            <div className="flex items-baseline justify-between">
                <h2 className="text-lg font-semibold text-slate-900">Sản phẩm đang bán</h2>
                <span className="text-sm text-slate-500">{products.length} sản phẩm</span>
            </div>

            <div className="-mx-4 mt-3 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:px-0">
                {chips.map((chip) => (
                    <button
                        key={chip.id}
                        type="button"
                        onClick={() => setActiveId(chip.id)}
                        className={cn(
                            "shrink-0 rounded-full border px-3.5 py-1.5 text-sm transition-colors duration-150",
                            activeId === chip.id
                                ? "border-emerald-600 bg-emerald-600 text-white"
                                : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                        )}
                    >
                        {chip.name}
                    </button>
                ))}
            </div>

            {groups.length === 0 ? (
                <div className="mt-8 flex flex-col items-center gap-3 rounded-lg border border-dashed border-slate-300 bg-white px-4 py-12 text-center">
                    <PackageOpen className="size-10 text-slate-400" />
                    <p className="text-sm text-slate-600">Chưa có sản phẩm nào đang bán.</p>
                    <Button className="bg-emerald-600 hover:bg-emerald-700">
                        <Link href="/merchant/listings/new">Đăng sản phẩm đầu tiên</Link>
                    </Button>
                </div>
            ) : (
                <div className="mt-5 flex flex-col gap-8">
                    {groups.map(({ category, items }) => (
                        <div key={category.id}>
                            <h3 className="mb-3 text-base font-medium text-slate-900">
                                {category.name}
                                <span className="ml-2 text-sm font-normal text-slate-500">({items.length})</span>
                            </h3>
                            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                                {items.map((product) => (
                                    <MerchantProductCard key={product.id} product={product} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}
</file>

<file path="apps/merchant-app/src/components/merchant/merchant-shell.tsx">
"use client";

import { useState, type ReactNode } from "react";
import { Menu } from "lucide-react";
import { Button } from "@freemarket/ui/button";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
} from "@freemarket/ui/sheet";
import { MerchantSidebar } from "@/components/merchant/merchant-sidebar";

interface MerchantShellProps {
    children: ReactNode;
}

export function MerchantShell({ children }: MerchantShellProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div className="min-h-screen bg-slate-50/80">
            {/* Mobile top bar */}
            <header className="sticky top-0 z-30 flex h-14 items-center gap-2 border-b border-slate-200 bg-white px-3 md:hidden">
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(true)}
                    aria-label="Mở menu merchant"
                >
                    <Menu className="size-5" />
                </Button>
                <span className="text-sm font-semibold text-slate-900">Merchant Studio</span>
            </header>

            {/* Mobile drawer */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetContent side="left" className="w-72 p-0 duration-200">
                    <SheetHeader className="sr-only">
                        <SheetTitle>Menu Merchant Studio</SheetTitle>
                        <SheetDescription>Điều hướng quản lý cửa hàng</SheetDescription>
                    </SheetHeader>
                    <MerchantSidebar onNavigate={() => setIsOpen(false)} />
                </SheetContent>
            </Sheet>

            <div className="mx-auto flex max-w-7xl">
                {/* Desktop sidebar */}
                <aside className="sticky top-0 hidden h-screen w-64 shrink-0 border-r border-slate-200 bg-white md:block">
                    <MerchantSidebar />
                </aside>

                <main className="min-w-0 flex-1 pb-24 md:pb-8">{children}</main>
            </div>
        </div>
    );
}
</file>

<file path="apps/merchant-app/src/components/merchant/merchant-sidebar.tsx">
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    BarChart3,
    ClipboardList,
    LayoutDashboard,
    Package,
    Plus,
    Settings,
    ShoppingBag,
    Store,
    type LucideIcon,
} from "lucide-react";
import { Button } from "@freemarket/ui/button";
import { cn } from "@freemarket/utils"

interface NavItem {
    href: string;
    label: string;
    icon: LucideIcon;
}

const navItems: NavItem[] = [
    { href: "/", label: "Cửa hàng của tôi", icon: Store },
    { href: "/dashboard", label: "Tổng quan", icon: LayoutDashboard },
    { href: "/listings", label: "Sản phẩm đang bán", icon: Package },
    { href: "/orders", label: "Đơn hàng", icon: ClipboardList },
    { href: "/sales", label: "Doanh thu", icon: BarChart3 },
    { href: "/settings", label: "Cài đặt cửa hàng", icon: Settings },
];

interface MerchantSidebarProps {
    onNavigate?: () => void;
}

export function MerchantSidebar({ onNavigate }: MerchantSidebarProps) {
    const pathname = usePathname();

    return (
        <div className="flex h-full flex-col gap-4 p-4">
            <div className="px-2 pt-1">
                <p className="text-base font-semibold text-slate-900">Merchant Studio</p>
                <p className="text-xs text-slate-500">Quản lý cửa hàng của bạn</p>
            </div>

            <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                <Link href="/listings/new" onClick={onNavigate}>
                    <Plus className="size-4" />
                    Đăng sản phẩm
                </Link>
            </Button>

            <nav className="flex flex-1 flex-col gap-1" aria-label="Merchant">
                {navItems.map(({ href, label, icon: Icon }) => {
                    const isActive = pathname === href;
                    return (
                        <Link
                            key={href}
                            href={href}
                            onClick={onNavigate}
                            aria-current={isActive ? "page" : undefined}
                            className={cn(
                                "flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-colors duration-150",
                                isActive
                                    ? "bg-emerald-50 text-emerald-700"
                                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                            )}
                        >
                            <Icon className="size-4 shrink-0" />
                            {label}
                        </Link>
                    );
                })}
            </nav>

            <a href="/" className="flex items-center gap-3 rounded-md border border-slate-200 px-3 py-2.5 text-sm font-medium text-slate-700 transition-colors duration-150 hover:bg-slate-50">
                <ShoppingBag className="size-4" />
                Chuyển sang Buyer Mode
            </a>
        </div>
    );
}
</file>

<file path="apps/merchant-app/src/components/merchant/share-store-button.tsx">
"use client";

import { Share2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@freemarket/ui/button";

interface ShareStoreButtonProps {
    handle: string;
}

export function ShareStoreButton({ handle }: ShareStoreButtonProps) {
    async function handleCopy(): Promise<void> {
        try {
            await navigator.clipboard.writeText(
                `${window.location.origin}/store/${handle.replace("@", "")}`
            );
            toast.success("Đã sao chép liên kết cửa hàng!");
        } catch {
            toast.info("Không thể sao chép liên kết.");
        }
    }

    return (
        <Button variant="outline" size="sm" onClick={handleCopy}>
            <Share2 className="size-4" />
            Chia sẻ
        </Button>
    );
}
</file>

<file path="apps/merchant-app/src/lib/mock-data.ts">
import type { Merchant, Product, ProductCategory } from "@/types/merchant";
import type { DashboardStat, RecentOrder } from "@/types/dashboard";
const img = (id: string): string =>
    `https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&q=80`;

export const mockMerchant: Merchant = {
    id: "m-001",
    name: "Minh Anh Store",
    handle: "@minhanh.store",
    avatar: img("photo-1494790108377-be9c29b29330"),
    banner: img("photo-1441986300917-64674bd600d8"),
    bio: "Chuyên đồ công nghệ và phụ kiện second-hand tuyển chọn. Hàng chính hãng, mô tả trung thực, đóng gói cẩn thận.",
    location: "Quận 3, TP. Hồ Chí Minh",
    rating: 4.9,
    reviewCount: 312,
    totalSales: 1284,
    responseTime: "Phản hồi trong 10 phút",
    joinedAt: "03/2023",
    verified: true,
};

export const mockCategories: ProductCategory[] = [
    { id: "electronics", name: "Điện tử" },
    { id: "fashion", name: "Thời trang" },
    { id: "accessories", name: "Phụ kiện" },
];

export const mockProducts: Product[] = [
    {
        id: "p-001",
        title: "Tai nghe over-ear chống ồn",
        categoryId: "electronics",
        image: img("photo-1505740420928-5e560c06d30e"),
        condition: "like-new",
        location: "Quận 3, TP.HCM",
        sold: 42,
        variants: [
            { id: "p-001-v1", name: "Đen", sku: "HP-BLK", price: 1850000, stock: 5, colorHex: "#111827", isDefault: true },
            { id: "p-001-v2", name: "Bạc", sku: "HP-SLV", price: 1900000, stock: 2, colorHex: "#cbd5e1", isDefault: false },
        ],
    },
    {
        id: "p-002",
        title: "Máy ảnh film compact",
        categoryId: "electronics",
        image: img("photo-1526170375885-4d8ecf77b99f"),
        condition: "well-used",
        location: "Quận 3, TP.HCM",
        sold: 9,
        variants: [
            { id: "p-002-v1", name: "Mặc định", sku: "CAM-STD", price: 2400000, stock: 1, isDefault: true },
        ],
    },
    {
        id: "p-003",
        title: "Giày sneaker chạy bộ",
        categoryId: "fashion",
        image: img("photo-1542291026-7eec264c27ff"),
        condition: "new",
        location: "Quận 1, TP.HCM",
        sold: 77,
        variants: [
            { id: "p-003-v1", name: "Đỏ / 40", sku: "SN-RED-40", price: 1250000, stock: 3, colorHex: "#dc2626", isDefault: true },
            { id: "p-003-v2", name: "Đỏ / 41", sku: "SN-RED-41", price: 1250000, stock: 0, colorHex: "#dc2626", isDefault: false },
            { id: "p-003-v3", name: "Đỏ / 42", sku: "SN-RED-42", price: 1290000, stock: 4, colorHex: "#dc2626", isDefault: false },
        ],
    },
    {
        id: "p-004",
        title: "Giày thể thao đế êm",
        categoryId: "fashion",
        image: img("photo-1491553895911-0055eca6402d"),
        condition: "like-new",
        location: "Quận 3, TP.HCM",
        sold: 23,
        variants: [
            { id: "p-004-v1", name: "Xám / 41", sku: "SP-GRY-41", price: 780000, stock: 2, colorHex: "#94a3b8", isDefault: true },
            { id: "p-004-v2", name: "Xám / 43", sku: "SP-GRY-43", price: 780000, stock: 1, colorHex: "#94a3b8", isDefault: false },
        ],
    },
    {
        id: "p-005",
        title: "Đồng hồ đeo tay dây da",
        categoryId: "accessories",
        image: img("photo-1523275335684-37898b6baf30"),
        condition: "new",
        location: "Quận 3, TP.HCM",
        sold: 31,
        variants: [
            { id: "p-005-v1", name: "Dây nâu", sku: "WT-BRN", price: 990000, stock: 6, colorHex: "#78350f", isDefault: true },
            { id: "p-005-v2", name: "Dây đen", sku: "WT-BLK", price: 990000, stock: 8, colorHex: "#111827", isDefault: false },
        ],
    },
    {
        id: "p-006",
        title: "Kính mát gọng nhựa",
        categoryId: "accessories",
        image: img("photo-1572635196237-14b3f281503f"),
        condition: "well-used",
        location: "Quận 3, TP.HCM",
        sold: 15,
        variants: [
            { id: "p-006-v1", name: "Mặc định", sku: "SG-STD", price: 320000, stock: 4, isDefault: true },
        ],
    },
];

export const mockDashboardStats: DashboardStat[] = [
    { id: "revenue", label: "Doanh thu 30 ngày", value: "42.350.000 ₫", hint: "Tăng 12% so với kỳ trước" },
    { id: "orders", label: "Đơn cần xử lý", value: "7", hint: "3 đơn chờ đóng gói" },
    { id: "listings", label: "Sản phẩm đang bán", value: "6", hint: "1 phân loại đã hết hàng" },
    { id: "rating", label: "Đánh giá trung bình", value: "4,9", hint: "312 đánh giá" },
];

export const mockRecentOrders: RecentOrder[] = [
    { id: "o-1", code: "FM2481", buyerName: "Trần Quốc Bảo", productTitle: "Tai nghe over-ear chống ồn", total: 1850000, status: "pending", createdLabel: "15 phút trước" },
    { id: "o-2", code: "FM2480", buyerName: "Lê Thu Hà", productTitle: "Giày sneaker chạy bộ (Đỏ / 42)", total: 1290000, status: "pending", createdLabel: "1 giờ trước" },
    { id: "o-3", code: "FM2476", buyerName: "Phạm Gia Huy", productTitle: "Đồng hồ đeo tay dây da (Dây nâu)", total: 990000, status: "shipped", createdLabel: "Hôm qua" },
    { id: "o-4", code: "FM2471", buyerName: "Đỗ Mai Anh", productTitle: "Kính mát gọng nhựa", total: 320000, status: "completed", createdLabel: "2 ngày trước" },
];
</file>

<file path="apps/merchant-app/next.config.ts">
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/merchant",
  transpilePackages: ["@freemarket/ui", "@freemarket/utils", "@freemarket/auth-config"],
  images: { remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }] },
};

export default nextConfig;
</file>

<file path="apps/merchant-app/package.json">
{
  "name": "merchant-app",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev -p 3002",
    "build": "next build",
    "start": "next start -p 3002",
    "lint": "eslint"
  },
  "dependencies": {
    "@freemarket/auth-config": "workspace:*",
    "@freemarket/ui": "workspace:*",
    "@freemarket/utils": "workspace:*",
    "@hookform/resolvers": "^7.0.1",
    "lucide-react": "^1.52.0",
    "next": "16.3.7",
    "next-auth": "5.0.0-beta.32",
    "react": "19.2.8",
    "react-dom": "19.2.8",
    "react-hook-form": "^7.91.0",
    "sonner": "^2.0.8",
    "tw-animate-css": "^1.4.0",
    "zod": "^4.6.7",
    "zustand": "^5.0.15"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "babel-plugin-react-compiler": "1.0.0",
    "eslint": "^9",
    "eslint-config-next": "16.3.7",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}
</file>

<file path="apps/shop-app/src/components/home/sort-tabs.tsx">
import Link from "next/link";
import { cn } from "@freemarket/utils"
import type { SortOption } from "@/types";

interface SortTabsProps {
    activeSort: SortOption;
    category?: string;
}

const sortOptions: { value: SortOption; label: string }[] = [
    { value: "newest", label: "Mới nhất" },
    { value: "price-asc", label: "Giá thấp" },
    { value: "price-desc", label: "Giá cao" },
];

function buildHref(category: string | undefined, sort: SortOption): string {
    const params = new URLSearchParams();
    if (category) params.set("category", category);
    if (sort !== "newest") params.set("sort", sort);
    const query = params.toString();
    return query ? `/?${query}` : "/";
}

export function SortTabs({ activeSort, category }: SortTabsProps) {
    return (
        <div
            role="group"
            aria-label="Sắp xếp sản phẩm"
            className="flex items-center rounded-lg border border-slate-200 bg-slate-100 p-0.5"
        >
            {sortOptions.map(({ value, label }) => {
                const isActive = activeSort === value;
                return (
                    <Link
                        key={value}
                        href={buildHref(category, value)}
                        aria-current={isActive ? "true" : undefined}
                        className={cn(
                            "rounded-md px-2.5 py-1.5 text-xs font-medium transition-colors duration-150 sm:text-sm",
                            isActive ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-900",
                        )}
                    >
                        {label}
                    </Link>
                );
            })}
        </div>
    );
}
</file>

<file path="apps/shop-app/src/components/layout/desktop-nav.tsx">
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getAppMode, getNavItems, isNavActive } from "@/lib/navigation";
import { cn } from "@freemarket/utils";

export function DesktopNav() {
    const pathname = usePathname();
    const items = getNavItems(getAppMode(pathname));

    return (
        <nav aria-label="Điều hướng chính" className="hidden items-center gap-1 md:flex">
            {items.map((item) => {
                const isActive = isNavActive(pathname, item);
                const Icon = item.icon;
                return (
                    <Link
                        key={item.href}
                        href={item.href}
                        aria-current={isActive ? "page" : undefined}
                        className={cn(
                            "flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-150",
                            item.highlight
                                ? "bg-emerald-600 text-white hover:bg-emerald-700"
                                : isActive
                                    ? "bg-slate-100 text-slate-900"
                                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900",
                        )}
                    >
                        <Icon className="size-4" aria-hidden="true" />
                        {item.label}
                    </Link>
                );
            })}
        </nav>
    );
}
</file>

<file path="apps/shop-app/src/components/layout/site-header.tsx">
import Link from "next/link";
import { Search, Store } from "lucide-react";
import { Input } from "@freemarket/ui/input";
import { CartLink } from "@/components/layout/cart-link";
import { DesktopNav } from "@/components/layout/desktop-nav";
import { ModeSwitcher } from "@/components/layout/mode-switcher";

function SearchForm({ className }: { className?: string }) {
    return (
        <form action="/search" role="search" className={className}>
            <div className="relative">
                <Search
                    className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400"
                    aria-hidden="true"
                />
                <Input
                    type="search"
                    name="q"
                    placeholder="Tìm sản phẩm, danh mục, người bán..."
                    aria-label="Tìm kiếm sản phẩm"
                    className="h-10 border-slate-200 bg-slate-50 pl-9"
                />
            </div>
        </form>
    );
}

export function SiteHeader() {
    return (
        <header className="sticky top-0 z-30 border-b border-slate-200 bg-white">
            <div className="mx-auto flex h-14 w-full max-w-6xl items-center gap-3 px-4">
                <Link href="/" className="flex shrink-0 items-center gap-2" aria-label="FreeMarket - Trang chủ">
                    <span className="flex size-8 items-center justify-center rounded-lg bg-emerald-600 text-white">
                        <Store className="size-4" aria-hidden="true" />
                    </span>
                    <span className="hidden text-lg font-bold tracking-tight text-slate-900 sm:inline">
                        FreeMarket
                    </span>
                </Link>

                <SearchForm className="hidden max-w-md flex-1 md:block" />

                <div className="ml-auto flex items-center gap-2">
                    <DesktopNav />
                    <ModeSwitcher />
                    <CartLink />
                </div>
            </div>

            <div className="border-t border-slate-100 px-4 py-2 md:hidden">
                <SearchForm />
            </div>
        </header>
    );
}
</file>

<file path="apps/shop-app/src/components/product/add-to-cart-button.tsx">
"use client";

import { ShoppingCart } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@freemarket/ui/button";
import { useCartStore } from "../../stores/use-cart-store";
import type { Product } from "@/types";

interface AddToCartButtonProps {
    product: Product;
    className?: string;
}

export function AddToCartButton({ product, className }: AddToCartButtonProps) {
    const addItem = useCartStore((state) => state.addItem);

    function handleClick(): void {
        addItem({
            productId: product.id,
            title: product.title,
            price: product.price,
            image: product.images[0],
            sellerName: product.seller.name,
            color: product.colors[0],
        });
        toast.success("Đã thêm vào giỏ hàng!");
    }

    return (
        <Button
            type="button"
            size="sm"
            onClick={handleClick}
            className={`w-full bg-emerald-600 text-white transition-colors duration-150 hover:bg-emerald-700 ${className ?? ""}`}
        >
            <ShoppingCart className="size-4" aria-hidden="true" />
            Thêm vào giỏ
        </Button>
    );
}
</file>

<file path="apps/shop-app/src/components/product/condition-badge.tsx">
import type { ProductCondition } from "@/types";
import { cn } from "@freemarket/utils";

const conditionConfig: Record<ProductCondition, { label: string; className: string }> = {
    new: { label: "Mới", className: "bg-emerald-50 text-emerald-700 ring-emerald-200" },
    "like-new": { label: "Như mới", className: "bg-sky-50 text-sky-700 ring-sky-200" },
    "well-used": { label: "Đã dùng nhiều", className: "bg-amber-50 text-amber-700 ring-amber-200" },
};

interface ConditionBadgeProps {
    condition: ProductCondition;
    className?: string;
}

export function ConditionBadge({ condition, className }: ConditionBadgeProps) {
    const config = conditionConfig[condition];
    return (
        <span
            className={cn(
                "inline-flex items-center rounded-md px-1.5 py-0.5 text-[11px] font-medium ring-1 ring-inset",
                config.className,
                className,
            )}
        >
            {config.label}
        </span>
    );
}
</file>

<file path="apps/shop-app/src/components/product/product-card.tsx">
import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { AddToCartButton } from "./add-to-cart-button";
import { ConditionBadge } from "./condition-badge";
import { SellerBadge } from "./seller-badge";
import { WishlistButton } from "./wishlist-button";
import { formatPrice } from "@freemarket/utils";
import type { Product } from "@/types";

interface ProductCardProps {
    product: Product;
    priority?: boolean;
}

export function ProductCard({ product, priority = false }: ProductCardProps) {
    const discount =
        product.originalPrice && product.originalPrice > product.price
            ? Math.round((1 - product.price / product.originalPrice) * 100)
            : 0;

    return (
        <article className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white">
            <div className="relative">
                <Link href={`/product/${product.id}`} className="block" aria-label={product.title}>
                    <div className="relative aspect-square w-full bg-slate-100">
                        <Image
                            src={product.images[0]}
                            alt={product.title}
                            fill
                            priority={priority}
                            sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                            className="object-cover"
                        />
                    </div>
                </Link>
                <ConditionBadge condition={product.condition} className="absolute left-2 top-2 bg-white" />
                <WishlistButton productId={product.id} className="absolute right-2 top-2" />
                {discount > 0 && (
                    <span className="absolute bottom-2 left-2 rounded-md bg-rose-600 px-1.5 py-0.5 text-[11px] font-semibold text-white">
                        -{discount}%
                    </span>
                )}
            </div>

            <div className="flex flex-1 flex-col gap-2 p-3">
                <Link
                    href={`/product/${product.id}`}
                    className="line-clamp-2 min-h-10 text-sm font-medium leading-5 text-slate-900 hover:underline"
                >
                    {product.title}
                </Link>

                <div>
                    <p className="text-base font-bold text-slate-900">{formatPrice(product.price)}</p>
                    {discount > 0 && product.originalPrice && (
                        <p className="text-xs text-slate-400 line-through">{formatPrice(product.originalPrice)}</p>
                    )}
                </div>

                <div className="flex items-center gap-1 text-xs text-slate-500">
                    <MapPin className="size-3 shrink-0" aria-hidden="true" />
                    <span className="truncate">{product.location}</span>
                    <span aria-hidden="true">·</span>
                    <span className="shrink-0">{product.postedLabel}</span>
                </div>

                <div className="border-t border-slate-100 pt-2">
                    <SellerBadge seller={product.seller} />
                </div>

                <div className="mt-auto pt-1">
                    <AddToCartButton product={product} />
                </div>
            </div>
        </article>
    );
}
</file>

<file path="apps/shop-app/src/components/product/seller-badge.tsx">
import { BadgeCheck, Clock, Star } from "lucide-react";
import { formatCompactNumber } from "@freemarket/utils";
import type { Seller } from "@/types";

interface SellerBadgeProps {
    seller: Seller;
}

export function SellerBadge({ seller }: SellerBadgeProps) {
    return (
        <div className="space-y-0.5 text-xs text-slate-500">
            <div className="flex items-center gap-1">
                <span className="truncate font-medium text-slate-700">{seller.name}</span>
                {seller.verified && (
                    <BadgeCheck className="size-3.5 shrink-0 text-emerald-600" aria-label="Người bán đã xác minh" />
                )}
            </div>
            <div className="flex items-center gap-1.5">
                <span className="flex items-center gap-0.5">
                    <Star className="size-3 fill-amber-400 text-amber-400" aria-hidden="true" />
                    {seller.rating.toFixed(1)}
                </span>
                <span aria-hidden="true">·</span>
                <span>Đã bán {formatCompactNumber(seller.totalSales)}</span>
            </div>
            <div className="flex items-center gap-1">
                <Clock className="size-3" aria-hidden="true" />
                <span className="truncate">{seller.responseTime}</span>
            </div>
        </div>
    );
}
</file>

<file path="apps/shop-app/src/components/shared/empty-state.tsx">
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { Button } from "@freemarket/ui/button";

interface EmptyStateProps {
    icon: LucideIcon;
    title: string;
    description: string;
    actionLabel: string;
    actionHref: string;
}

export function EmptyState({ icon: Icon, title, description, actionLabel, actionHref }: EmptyStateProps) {
    return (
        <div className="flex flex-col items-center rounded-xl border border-dashed border-slate-300 bg-white px-6 py-14 text-center">
            <span className="flex size-12 items-center justify-center rounded-full bg-slate-100 text-slate-500">
                <Icon className="size-6" aria-hidden="true" />
            </span>
            <h2 className="mt-4 text-base font-semibold text-slate-900">{title}</h2>
            <p className="mt-1 max-w-sm text-sm text-slate-500">{description}</p>
            {/* <Button asChild className="mt-5 bg-emerald-600 text-white hover:bg-emerald-700">
                <Link href={actionHref}>{actionLabel}</Link>
            </Button> */}
        </div>
    );
}
</file>

<file path="apps/shop-app/next.config.ts">
import type { NextConfig } from "next";

const AUTH_ZONE_URL = process.env.AUTH_ZONE_URL ?? "http://localhost:3001";
const MERCHANT_ZONE_URL = process.env.MERCHANT_ZONE_URL ?? "http://localhost:3002";

const nextConfig: NextConfig = {
  transpilePackages: ["@freemarket/ui", "@freemarket/utils", "@freemarket/auth-config"],
  images: {
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
  async rewrites() {
    return [
      { source: "/merchant", destination: `${MERCHANT_ZONE_URL}/merchant` },
      { source: "/merchant/:path+", destination: `${MERCHANT_ZONE_URL}/merchant/:path+` },
      { source: "/login", destination: `${AUTH_ZONE_URL}/login` },
      { source: "/register", destination: `${AUTH_ZONE_URL}/register` },
      { source: "/verify", destination: `${AUTH_ZONE_URL}/verify` },
      { source: "/api/auth/:path+", destination: `${AUTH_ZONE_URL}/api/auth/:path+` },
      { source: "/auth-static/:path+", destination: `${AUTH_ZONE_URL}/auth-static/:path+` },
    ];
  },
};

export default nextConfig;
</file>

<file path=".gitignore">
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.*
.yarn/*
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/versions

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.pnpm-debug.log*

# env files (can opt-in for committing if needed)
.env

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts

# repomix
.repomixignore
proj-context.md
repomix.config.json
</file>

<file path="tsconfig.json">
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": [
        "./src/*"
      ],
      "@freemarket/ui/*": [
        "./packages/ui/src/*"
      ],
      "@freemarket/utils": [
        "./packages/utils/src/index.ts"
      ],
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".next/dev/types/**/*.ts",
    "**/*.mts",
    "apps/merchant-app/src/components/onboard/form-fieldstsx"
  ],
  "exclude": [
    "node_modules"
  ]
}
</file>

<file path="apps/auth-app/src/components/auth/form-field.tsx">
import { Label } from "@freemarket/ui/label";
import type { ReactNode } from "react";

interface FormFieldProps {
    id: string;
    label: string;
    error?: string;
    hint?: string;
    children: ReactNode;
}

export function FormField({ id, label, error, hint, children }: FormFieldProps) {
    return (
        <div className="space-y-1.5">
            <Label htmlFor={id}>{label}</Label>
            {children}
            {error ? (
                <p id={`${id}-error`} className="text-xs text-rose-600">
                    {error}
                </p>
            ) : (
                hint && <p className="text-xs text-slate-500">{hint}</p>
            )}
        </div>
    );
}
</file>

<file path="apps/auth-app/src/components/auth/login-form.tsx">
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { Controller, useForm } from "react-hook-form";
import { AlertCircle, Eye, EyeOff, Loader2, LogIn } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@freemarket/ui/button";
import { Checkbox } from "@freemarket/ui/checkbox";
import { Input } from "@freemarket/ui/input";
import { Label } from "@freemarket/ui/label";
import { getLoginErrorMessage } from "@/lib/auth-errors";
import { cn } from "@freemarket/utils"
import { loginSchema } from "@/lib/validations/auth";
import { useLoginPreferencesStore } from "@/stores/use-login-preferences-store";
import type { LoginFormValues } from "@/types";
import { requestVerifyProcessAction } from "@/actions/verify-actions";

interface LoginFormProps {
    redirectTo: string;
}

export function LoginForm({ redirectTo }: LoginFormProps) {
    const router = useRouter();
    const setRememberedEmail = useLoginPreferencesStore((state) => state.setRememberedEmail);
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const {
        register,
        control,
        handleSubmit,
        setValue,
        setError,
        formState: { errors, isSubmitting },
    } = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema),
        defaultValues: { emailOrPhone: "", password: "", rememberMe: false },
    });

    useEffect(() => {
        const rememberedEmail = useLoginPreferencesStore.getState().rememberedEmail;
        if (rememberedEmail) {
            setValue("emailOrPhone", rememberedEmail);
            setValue("rememberMe", true);
        }
    }, [setValue]);

    function showError(message: string): void {
        setError("root", { message });
        toast.error(message);
    }

    async function redirectToVerify(email: string): Promise<void> {
        toast.info("Tài khoản chưa được xác minh. Đang chuyển đến trang xác minh...");
        const result = await requestVerifyProcessAction(email);
        if (!result.ok) {
            showError(result.message);
            return;
        }
        router.push(`/verify?key=${encodeURIComponent(result.data.key)}`);
    }

    async function onSubmit(values: LoginFormValues): Promise<void> {
        const emailOrPhone = values.emailOrPhone.trim();

        const result = await signIn("credentials", {
            emailOrPhone,
            password: values.password,
            redirect: false,
        });

        if (!result || result.error) {
            if (result?.code === "account_inactive") {
                await redirectToVerify(emailOrPhone);
                return;
            }
            showError(getLoginErrorMessage(result?.code));
            return;
        }

        setRememberedEmail(values.rememberMe ? emailOrPhone : "");
        toast.success("Đăng nhập thành công!");
        router.replace(redirectTo);
        router.refresh();
    }

    return (
        <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
            <div className="mb-5 space-y-1">
                <h1 className="text-xl font-bold text-slate-900">Đăng nhập</h1>
                <p className="text-sm text-slate-500">Mua bán dễ dàng, giao dịch an tâm.</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
                {errors.root?.message && (
                    <div
                        role="alert"
                        className="flex items-start gap-2 rounded-lg border border-rose-200 bg-rose-50 px-3 py-2.5 text-sm text-rose-700"
                    >
                        <AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                        <span>{errors.root.message}</span>
                    </div>
                )}

                <div className="space-y-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        type="email"
                        autoComplete="email"
                        inputMode="email"
                        placeholder="ten@email.com"
                        aria-invalid={Boolean(errors.emailOrPhone)}
                        aria-describedby={errors.emailOrPhone ? "email-error" : undefined}
                        className={cn("h-11", errors.emailOrPhone && "border-rose-400")}
                        {...register("emailOrPhone")}
                    />
                    {errors.emailOrPhone && (
                        <p id="email-error" className="text-xs text-rose-600">
                            {errors.emailOrPhone.message}
                        </p>
                    )}
                </div>

                <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                        <Label htmlFor="password">Mật khẩu</Label>
                        <Link
                            href="/forgot-password"
                            className="text-xs font-medium text-emerald-700 hover:underline"
                        >
                            Quên mật khẩu?
                        </Link>
                    </div>
                    <div className="relative">
                        <Input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            autoComplete="current-password"
                            placeholder="Nhập mật khẩu"
                            aria-invalid={Boolean(errors.password)}
                            aria-describedby={errors.password ? "password-error" : undefined}
                            className={cn("h-11 pr-11", errors.password && "border-rose-400")}
                            {...register("password")}
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword((prev) => !prev)}
                            aria-label={showPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
                            aria-pressed={showPassword}
                            className="absolute right-1 top-1/2 flex size-9 -translate-y-1/2 items-center justify-center rounded-md text-slate-400 transition-colors duration-150 hover:text-slate-700"
                        >
                            {showPassword ? (
                                <EyeOff className="size-4" aria-hidden="true" />
                            ) : (
                                <Eye className="size-4" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                    {errors.password && (
                        <p id="password-error" className="text-xs text-rose-600">
                            {errors.password.message}
                        </p>
                    )}
                </div>

                <Controller
                    control={control}
                    name="rememberMe"
                    render={({ field }) => (
                        <div className="flex items-center gap-2">
                            <Checkbox
                                id="rememberMe"
                                checked={field.value}
                                onCheckedChange={(checked) => field.onChange(checked === true)}
                            />
                            <Label htmlFor="rememberMe" className="cursor-pointer text-sm font-normal text-slate-600">
                                Ghi nhớ email của tôi
                            </Label>
                        </div>
                    )}
                />

                <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="h-11 w-full bg-emerald-600 text-white transition-colors duration-150 hover:bg-emerald-700"
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 className="size-4 animate-spin" aria-hidden="true" />
                            Đang đăng nhập...
                        </>
                    ) : (
                        <>
                            <LogIn className="size-4" aria-hidden="true" />
                            Đăng nhập
                        </>
                    )}
                </Button>
            </form>

            <p className="mt-5 text-center text-sm text-slate-500">
                Chưa có tài khoản?{" "}
                <Link href="/register" className="font-semibold text-emerald-700 hover:underline">
                    Đăng ký ngay
                </Link>
            </p>
        </div>
    );
}
</file>

<file path="apps/auth-app/src/components/auth/register-form.tsx">
"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { ArrowLeft, ArrowRight, Eye, EyeOff, Loader2, UserPlus } from "lucide-react";
import { toast } from "sonner";
import { FormField } from "@/components/auth/form-field";
import { PasswordStrength } from "@/components/auth/password-strength";
import { RegisterProgress } from "@/components/auth/register-progress";
import { Button } from "@freemarket/ui/button";
import { Checkbox } from "@freemarket/ui/checkbox";
import { Input } from "@freemarket/ui/input";
import { intentOptions, registerSteps, vietnamCities } from "@/lib/constants";
// import { registerAccount } from "@/lib/mock-auth";
import { cn } from "@freemarket/utils"
import { registerSchema, registerStepFields } from "@/lib/validations/auth";
import { useAccountsStore } from "@/stores/use-accounts-store";
import type { RegisterFormValues } from "@/types";

const LAST_STEP = registerSteps.length - 1;

const selectClassName =
    "h-11 w-full rounded-md border border-slate-200 bg-white px-3 text-sm text-slate-900 outline-none transition-colors duration-150 focus-visible:border-emerald-600 focus-visible:ring-2 focus-visible:ring-emerald-600/30";

export function RegisterForm() {
    const router = useRouter();
    const registeredAccounts = useAccountsStore((state) => state.accounts);
    const addAccount = useAccountsStore((state) => state.addAccount);

    const [step, setStep] = useState<number>(0);
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const {
        register,
        control,
        handleSubmit,
        trigger,
        setError,
        getValues,
        watch,
        formState: { errors, isSubmitting },
    } = useForm<RegisterFormValues>({
        resolver: zodResolver(registerSchema),
        mode: "onTouched",
        defaultValues: {
            fullName: "",
            email: "",
            password: "",
            confirmPassword: "",
            phone: "",
            city: "",
            intent: "buy",
            acceptTerms: false,
        },
    });

    const passwordValue = watch("password");
    const summary = watch();

    async function handleNext(): Promise<void> {
        const isValid = await trigger(registerStepFields[step]);
        if (!isValid) return;

        if (step === 0 && getValues("password") !== getValues("confirmPassword")) {
            setError("confirmPassword", { message: "Mật khẩu xác nhận không khớp" });
            return;
        }

        setStep((current) => Math.min(current + 1, LAST_STEP));
    }

    function handleBack(): void {
        setStep((current) => Math.max(current - 1, 0));
    }

    function handleFormSubmit(event: FormEvent<HTMLFormElement>): void {
        event.preventDefault();
        if (step < LAST_STEP) {
            void handleNext();
            return;
        }
        void handleSubmit(onSubmit)(event);
    }

    async function onSubmit(values: RegisterFormValues): Promise<void> {
        // const result = await registerAccount(values, registeredAccounts);

        // if (!result.ok) {
        //     setStep(0);
        //     setError("email", { message: result.message });
        //     toast.error(result.message);
        //     return;
        // }

        // addAccount(result.account);
        toast.success("Đăng ký thành công! Vui lòng đăng nhập.");
        router.replace("/login");
    }

    const currentIntentLabel =
        intentOptions.find((option) => option.value === summary.intent)?.label ?? "";

    return (
        <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
            <div className="mb-5 space-y-1">
                <h1 className="text-xl font-bold text-slate-900">Tạo tài khoản</h1>
                <p className="text-sm text-slate-500">{registerSteps[step].description}</p>
            </div>

            <div className="mb-6">
                <RegisterProgress steps={registerSteps} currentStep={step} />
            </div>

            <form onSubmit={handleFormSubmit} noValidate className="space-y-4">
                {step === 0 && (
                    <div className="space-y-4">
                        <FormField id="fullName" label="Họ và tên" error={errors.fullName?.message}>
                            <Input
                                id="fullName"
                                autoComplete="name"
                                placeholder="Nguyễn Văn A"
                                aria-invalid={Boolean(errors.fullName)}
                                aria-describedby={errors.fullName ? "fullName-error" : undefined}
                                className={cn("h-11", errors.fullName && "border-rose-400")}
                                {...register("fullName")}
                            />
                        </FormField>

                        <FormField id="email" label="Email" error={errors.email?.message}>
                            <Input
                                id="email"
                                type="email"
                                autoComplete="email"
                                inputMode="email"
                                placeholder="ten@email.com"
                                aria-invalid={Boolean(errors.email)}
                                aria-describedby={errors.email ? "email-error" : undefined}
                                className={cn("h-11", errors.email && "border-rose-400")}
                                {...register("email")}
                            />
                        </FormField>

                        <FormField
                            id="password"
                            label="Mật khẩu"
                            error={errors.password?.message}
                            hint="Tối thiểu 8 ký tự, gồm chữ và số."
                        >
                            <div className="relative">
                                <Input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    autoComplete="new-password"
                                    placeholder="Tạo mật khẩu"
                                    aria-invalid={Boolean(errors.password)}
                                    aria-describedby={errors.password ? "password-error" : undefined}
                                    className={cn("h-11 pr-11", errors.password && "border-rose-400")}
                                    {...register("password")}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword((prev) => !prev)}
                                    aria-label={showPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
                                    aria-pressed={showPassword}
                                    className="absolute right-1 top-1/2 flex size-9 -translate-y-1/2 items-center justify-center rounded-md text-slate-400 transition-colors duration-150 hover:text-slate-700"
                                >
                                    {showPassword ? (
                                        <EyeOff className="size-4" aria-hidden="true" />
                                    ) : (
                                        <Eye className="size-4" aria-hidden="true" />
                                    )}
                                </button>
                            </div>
                            <PasswordStrength password={passwordValue} />
                        </FormField>

                        <FormField
                            id="confirmPassword"
                            label="Nhập lại mật khẩu"
                            error={errors.confirmPassword?.message}
                        >
                            <Input
                                id="confirmPassword"
                                type={showPassword ? "text" : "password"}
                                autoComplete="new-password"
                                placeholder="Nhập lại mật khẩu"
                                aria-invalid={Boolean(errors.confirmPassword)}
                                aria-describedby={errors.confirmPassword ? "confirmPassword-error" : undefined}
                                className={cn("h-11", errors.confirmPassword && "border-rose-400")}
                                {...register("confirmPassword")}
                            />
                        </FormField>
                    </div>
                )}

                {step === 1 && (
                    <div className="space-y-4">
                        <FormField
                            id="phone"
                            label="Số điện thoại"
                            error={errors.phone?.message}
                            hint="Dùng để người mua và người bán liên hệ khi giao dịch."
                        >
                            <Input
                                id="phone"
                                type="tel"
                                autoComplete="tel"
                                inputMode="tel"
                                placeholder="0901234567"
                                aria-invalid={Boolean(errors.phone)}
                                aria-describedby={errors.phone ? "phone-error" : undefined}
                                className={cn("h-11", errors.phone && "border-rose-400")}
                                {...register("phone")}
                            />
                        </FormField>

                        <FormField id="city" label="Tỉnh/Thành phố" error={errors.city?.message}>
                            <select
                                id="city"
                                aria-invalid={Boolean(errors.city)}
                                aria-describedby={errors.city ? "city-error" : undefined}
                                className={cn(selectClassName, errors.city && "border-rose-400")}
                                {...register("city")}
                            >
                                <option value="">Chọn tỉnh/thành</option>
                                {vietnamCities.map((city) => (
                                    <option key={city} value={city}>
                                        {city}
                                    </option>
                                ))}
                            </select>
                        </FormField>

                        <fieldset className="space-y-2">
                            <legend className="mb-1.5 text-sm font-medium text-slate-900">
                                Bạn muốn làm gì trên FreeMarket?
                            </legend>
                            {intentOptions.map(({ value, label, description, icon: Icon }) => (
                                <label
                                    key={value}
                                    className="group flex cursor-pointer items-center gap-3 rounded-lg border border-slate-200 bg-white p-3 transition-colors duration-150 hover:bg-slate-50 has-[:checked]:border-emerald-600 has-[:checked]:bg-emerald-50/60 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-emerald-600/40"
                                >
                                    <input type="radio" value={value} className="sr-only" {...register("intent")} />
                                    <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-600 group-has-[:checked]:bg-emerald-100 group-has-[:checked]:text-emerald-700">
                                        <Icon className="size-4" aria-hidden="true" />
                                    </span>
                                    <span className="min-w-0 flex-1">
                                        <span className="block text-sm font-medium text-slate-900">{label}</span>
                                        <span className="block text-xs text-slate-500">{description}</span>
                                    </span>
                                    <span
                                        aria-hidden="true"
                                        className="size-4 shrink-0 rounded-full border border-slate-300 bg-white group-has-[:checked]:border-[5px] group-has-[:checked]:border-emerald-600"
                                    />
                                </label>
                            ))}
                        </fieldset>
                    </div>
                )}

                {step === 2 && (
                    <div className="space-y-4">
                        <dl className="divide-y divide-slate-100 rounded-lg border border-slate-200 bg-slate-50/60 text-sm">
                            {[
                                { label: "Họ và tên", value: summary.fullName },
                                { label: "Email", value: summary.email },
                                { label: "Số điện thoại", value: summary.phone },
                                { label: "Tỉnh/Thành phố", value: summary.city },
                                { label: "Mục đích", value: currentIntentLabel },
                            ].map((row) => (
                                <div key={row.label} className="flex items-start justify-between gap-4 px-3 py-2.5">
                                    <dt className="shrink-0 text-slate-500">{row.label}</dt>
                                    <dd className="break-all text-right font-medium text-slate-900">{row.value}</dd>
                                </div>
                            ))}
                        </dl>

                        <Controller
                            control={control}
                            name="acceptTerms"
                            render={({ field }) => (
                                <div className="space-y-1.5">
                                    <div className="flex items-start gap-2">
                                        <Checkbox
                                            id="acceptTerms"
                                            checked={field.value}
                                            onCheckedChange={(checked) => field.onChange(checked === true)}
                                            aria-invalid={Boolean(errors.acceptTerms)}
                                            aria-describedby={errors.acceptTerms ? "acceptTerms-error" : undefined}
                                            className="mt-0.5"
                                        />
                                        <label
                                            htmlFor="acceptTerms"
                                            className="cursor-pointer text-sm leading-5 text-slate-600"
                                        >
                                            Tôi đồng ý với{" "}
                                            <Link href="/terms" className="font-medium text-emerald-700 hover:underline">
                                                Điều khoản sử dụng
                                            </Link>{" "}
                                            và{" "}
                                            <Link href="/privacy" className="font-medium text-emerald-700 hover:underline">
                                                Chính sách bảo mật
                                            </Link>
                                            .
                                        </label>
                                    </div>
                                    {errors.acceptTerms && (
                                        <p id="acceptTerms-error" className="text-xs text-rose-600">
                                            {errors.acceptTerms.message}
                                        </p>
                                    )}
                                </div>
                            )}
                        />
                    </div>
                )}

                <div className="flex items-center gap-2 pt-2">
                    {step > 0 && (
                        <Button
                            type="button"
                            variant="outline"
                            onClick={handleBack}
                            disabled={isSubmitting}
                            className="h-11 border-slate-300 bg-white"
                        >
                            <ArrowLeft className="size-4" aria-hidden="true" />
                            Quay lại
                        </Button>
                    )}

                    {step < LAST_STEP ? (
                        <Button
                            key="next"
                            type="button"
                            onClick={() => void handleNext()}
                            className="h-11 flex-1 bg-emerald-600 text-white transition-colors duration-150 hover:bg-emerald-700"
                        >
                            Tiếp tục
                            <ArrowRight className="size-4" aria-hidden="true" />
                        </Button>
                    ) : (
                        <Button
                            key="submit"
                            type="submit"
                            disabled={isSubmitting}
                            className="h-11 flex-1 bg-emerald-600 text-white transition-colors duration-150 hover:bg-emerald-700"
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="size-4 animate-spin" aria-hidden="true" />
                                    Đang tạo tài khoản...
                                </>
                            ) : (
                                <>
                                    <UserPlus className="size-4" aria-hidden="true" />
                                    Hoàn tất đăng ký
                                </>
                            )}
                        </Button>
                    )}
                </div>
            </form>

            <p className="mt-5 text-center text-sm text-slate-500">
                Đã có tài khoản?{" "}
                <Link href="/login" className="font-semibold text-emerald-700 hover:underline">
                    Đăng nhập
                </Link>
            </p>
        </div>
    );
}
</file>

<file path="apps/auth-app/src/components/auth/verify-account-form.tsx">
"use client";

import { useRef, useState, type ChangeEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { AlertCircle, Clock, Loader2, Mail, ShieldCheck } from "lucide-react";
import { toast } from "sonner";
import { requestVerifyEmailAction } from "@/actions/verify-actions";
import { Button } from "@freemarket/ui/button";
import { Input } from "@freemarket/ui/input";
import { useCountdown } from "@/hooks/use-countdown";
import { getLoginErrorMessage } from "@/lib/auth-errors";
import { cn } from "@freemarket/utils"
import { OTP_LENGTH, otpSchema } from "@/lib/validations/verify";
import type { VerifyAccountUser } from "@/types";
import { formatCountdown, maskEmail } from "@/lib/format";

const OTP_TTL_SECONDS = 5 * 60;
const RESEND_COOLDOWN_SECONDS = 60;

type BlockReason = "expired" | "locked" | null;

interface VerifyAccountFormProps {
    user: VerifyAccountUser;
    verifyKey: string;
    redirectTo: string;
}

export function VerifyAccountForm({ user, verifyKey, redirectTo }: VerifyAccountFormProps) {
    const router = useRouter();
    const inputRef = useRef<HTMLInputElement>(null);

    const [otp, setOtp] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [blockReason, setBlockReason] = useState<BlockReason>(null);
    const [isVerifying, setIsVerifying] = useState<boolean>(false);
    const [isSending, setIsSending] = useState<boolean>(false);
    const [isDone, setIsDone] = useState<boolean>(false);

    const ttl = useCountdown(OTP_TTL_SECONDS);
    const cooldown = useCountdown(0);

    const isExpired = blockReason === "expired" || ttl.secondsLeft === 0;
    const isLocked = blockReason === "locked";
    const isBlocked = isExpired || isLocked;
    const maskedEmail = maskEmail(user.email);

    function handleFailure(code: string | null | undefined): void {
        const message = getLoginErrorMessage(code);

        if (code === "invalid_token") {
            setBlockReason("expired");
            toast.error(message);
            return;
        }
        if (code === "mfa_locked") {
            setBlockReason("locked");
            toast.error(message);
            return;
        }

        // incorrect_otp và các lỗi tạm thời: cho nhập lại
        setOtp("");
        setErrorMessage(message);
        toast.error(message);
        inputRef.current?.focus();
    }

    async function submitOtp(code: string): Promise<void> {
        if (isVerifying || isBlocked || isDone) return;

        setIsVerifying(true);
        setErrorMessage(null);
        try {
            const result = await signIn("verify-otp", {
                key: verifyKey,
                otp: code,
                redirect: false,
            });

            if (result && !result.error) {
                setIsDone(true);
                toast.success("Xác minh thành công!");
                router.replace(redirectTo);
                router.refresh();
                return;
            }
            handleFailure(result?.code);
        } catch {
            handleFailure("network_error");
        } finally {
            setIsVerifying(false);
        }
    }

    function handleChange(event: ChangeEvent<HTMLInputElement>): void {
        const digits = event.target.value.replace(/\D/g, "").slice(0, OTP_LENGTH);
        setOtp(digits);
        setErrorMessage(null);
        if (otpSchema.safeParse(digits).success) void submitOtp(digits);
    }

    async function handleResend(): Promise<void> {
        setIsSending(true);
        try {
            const result = await requestVerifyEmailAction(verifyKey);
            if (!result.ok) {
                if (result.code === "invalid_token") setBlockReason("expired");
                toast.error(result.message);
                return;
            }
            cooldown.start(RESEND_COOLDOWN_SECONDS);
            setOtp("");
            setErrorMessage(null);
            toast.success(`Đã gửi mã xác minh đến ${maskedEmail}`);
            inputRef.current?.focus();
        } finally {
            setIsSending(false);
        }
    }

    return (
        <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
            <div className="mb-5 space-y-3">
                <span className="flex size-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
                    <ShieldCheck className="size-6" aria-hidden="true" />
                </span>
                <div className="space-y-1">
                    <h1 className="text-xl font-bold text-slate-900">Xác minh tài khoản</h1>
                    <p className="text-sm text-slate-500">
                        {user.fullName ? `Xin chào ${user.fullName}. ` : ""}
                        Nhập mã gồm 6 chữ số đã gửi đến{" "}
                        <span className="font-medium text-slate-900">{maskedEmail}</span>.
                    </p>
                </div>
            </div>

            {isBlocked && (
                <div
                    role="alert"
                    className="mb-4 flex items-start gap-2 rounded-lg border border-rose-200 bg-rose-50 px-3 py-2.5 text-sm text-rose-700"
                >
                    <AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                    <span>
                        {isLocked
                            ? getLoginErrorMessage("mfa_locked")
                            : "Đã hết thời gian xác minh. Vui lòng đăng nhập lại để nhận mã mới."}
                    </span>
                </div>
            )}

            <div className="space-y-2">
                <div className="flex items-center justify-between">
                    <label htmlFor="otp" className="text-sm font-medium text-slate-900">
                        Mã OTP
                    </label>
                    <span
                        role="timer"
                        className={cn(
                            "flex items-center gap-1 text-xs tabular-nums",
                            isExpired ? "text-rose-600" : "text-slate-500",
                        )}
                    >
                        <Clock className="size-3.5" aria-hidden="true" />
                        {isExpired ? "Đã hết hạn" : `Hết hạn sau ${formatCountdown(ttl.secondsLeft)}`}
                    </span>
                </div>

                <Input
                    id="otp"
                    ref={inputRef}
                    type="text"
                    inputMode="numeric"
                    pattern="\d*"
                    autoComplete="one-time-code"
                    maxLength={OTP_LENGTH}
                    placeholder="••••••"
                    value={otp}
                    onChange={handleChange}
                    readOnly={isVerifying}
                    disabled={isBlocked || isDone}
                    aria-invalid={Boolean(errorMessage)}
                    aria-describedby={errorMessage ? "otp-error" : undefined}
                    className={cn(
                        "h-12 text-center text-xl font-semibold tracking-[0.5em] tabular-nums",
                        errorMessage && "border-rose-400",
                    )}
                />

                {errorMessage && (
                    <p id="otp-error" role="alert" className="text-xs text-rose-600">
                        {errorMessage}
                    </p>
                )}

                {(isVerifying || isDone) && (
                    <p className="flex items-center gap-1.5 text-xs text-slate-500" aria-live="polite">
                        <Loader2 className="size-3.5 animate-spin" aria-hidden="true" />
                        {isDone ? "Đang đăng nhập..." : "Đang xác minh..."}
                    </p>
                )}
            </div>

            <Button
                type="button"
                variant="outline"
                onClick={() => void handleResend()}
                disabled={isSending || isVerifying || isBlocked || isDone || cooldown.secondsLeft > 0}
                className="mt-5 h-11 w-full border-slate-300 bg-white"
            >
                {isSending ? (
                    <>
                        <Loader2 className="size-4 animate-spin" aria-hidden="true" />
                        Đang gửi...
                    </>
                ) : (
                    <>
                        <Mail className="size-4" aria-hidden="true" />
                        {cooldown.secondsLeft > 0
                            ? `Gửi lại email sau ${cooldown.secondsLeft}s`
                            : "Gửi lại email"}
                    </>
                )}
            </Button>

            {isBlocked ? (
                <Link
                    href="/login"
                    className="mt-3 inline-flex h-11 w-full items-center justify-center rounded-lg bg-emerald-600 px-4 text-sm font-medium text-white transition-colors duration-150 hover:bg-emerald-700"
                >
                    Quay lại đăng nhập
                </Link>
            ) : (
                <p className="mt-5 text-center text-sm text-slate-500">
                    <Link href="/login" className="font-semibold text-emerald-700 hover:underline">
                        Quay lại đăng nhập
                    </Link>
                </p>
            )}
        </div>
    );
}
</file>

<file path="apps/auth-app/next.config.ts">
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  assetPrefix: "/auth-static",
  transpilePackages: ["@freemarket/ui", "@freemarket/utils", "@freemarket/auth-config"],
  async rewrites() {
    // Để truy cập trực tiếp localhost:3001 vẫn tải được asset
    return {
      beforeFiles: [{ source: "/auth-static/_next/:path+", destination: "/_next/:path+" }],
    };
  },
};

export default nextConfig;
</file>

<file path="apps/auth-app/package.json">
{
  "name": "auth-app",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev -p 3001",
    "build": "next build",
    "start": "next start -p 3001",
    "lint": "eslint"
  },
  "dependencies": {
    "@freemarket/auth-config": "workspace:*",
    "@freemarket/ui": "workspace:*",
    "@freemarket/utils": "workspace:*",
    "@hookform/resolvers": "^6.0.0",
    "lucide-react": "^1.52.0",
    "next": "16.3.7",
    "next-auth": "5.0.0-beta.32",
    "react": "19.2.8",
    "react-dom": "19.2.8",
    "react-hook-form": "^7.90.0",
    "sonner": "^2.0.8",
    "tw-animate-css": "^1.4.0",
    "zod": "^4.6.7",
    "zustand": "^5.0.15"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "babel-plugin-react-compiler": "1.0.0",
    "eslint": "^9",
    "eslint-config-next": "16.3.7",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}
</file>

<file path="apps/merchant-app/src/app/layout.tsx">
import type { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { redirect } from "next/navigation";
import { Toaster } from "sonner";
import "./globals.css";
import { AuthProvider } from "@/components/providers/auth-provider";
import { auth } from "@/auth";

const inter = Inter({
    subsets: ["latin", "vietnamese"],
    variable: "--font-inter",
    display: "swap",
});

export const metadata: Metadata = {
    title: {
        default: "FreeMarket - Chợ mua bán đồ mới & cũ",
        template: "%s | FreeMarket",
    },
    description:
        "FreeMarket là chợ C2C giúp bạn mua bán đồ mới và đồ cũ nhanh chóng, an toàn, minh bạch giá.",
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    themeColor: "#ffffff",
};

export default async function RootLayout({ children }: { children: ReactNode }) {
    const session = await auth();

    if (!session) {
        redirect("/login?redirect=/merchant");
    }

    return (
        <html lang="vi" className={inter.variable}>
            <body className="min-h-dvh bg-slate-50/80 font-sans text-slate-900 antialiased">
                <AuthProvider>{children}</AuthProvider>
                <Toaster position="top-center" richColors closeButton />
            </body>
        </html>
    );
}
</file>

<file path="package.json">
{
  "name": "freemarket",
  "private": true,
  "packageManager": "pnpm@12.8.1",
  "scripts": {
    "dev": "pnpm --parallel --filter \"./apps/*\" dev",
    "build": "pnpm --filter \"./apps/*\" build",
    "lint": "pnpm -r lint"
  }
}
</file>

</files>
````

## File: apps/auth-app/public/file.svg
````xml
<svg fill="none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 13.5V5.41a1 1 0 0 0-.3-.7L9.8.29A1 1 0 0 0 9.08 0H1.5v13.5A2.5 2.5 0 0 0 4 16h8a2.5 2.5 0 0 0 2.5-2.5m-1.5 0v-7H8v-5H3v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1M9.5 5V2.12L12.38 5zM5.13 5h-.62v1.25h2.12V5zm-.62 3h7.12v1.25H4.5zm.62 3h-.62v1.25h7.12V11z" clip-rule="evenodd" fill="#666" fill-rule="evenodd"/></svg>
````

## File: apps/auth-app/public/globe.svg
````xml
<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g clip-path="url(#a)"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.27 14.1a6.5 6.5 0 0 0 3.67-3.45q-1.24.21-2.7.34-.31 1.83-.97 3.1M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.48-1.52a7 7 0 0 1-.96 0H7.5a4 4 0 0 1-.84-1.32q-.38-.89-.63-2.08a40 40 0 0 0 3.92 0q-.25 1.2-.63 2.08a4 4 0 0 1-.84 1.31zm2.94-4.76q1.66-.15 2.95-.43a7 7 0 0 0 0-2.58q-1.3-.27-2.95-.43a18 18 0 0 1 0 3.44m-1.27-3.54a17 17 0 0 1 0 3.64 39 39 0 0 1-4.3 0 17 17 0 0 1 0-3.64 39 39 0 0 1 4.3 0m1.1-1.17q1.45.13 2.69.34a6.5 6.5 0 0 0-3.67-3.44q.65 1.26.98 3.1M8.48 1.5l.01.02q.41.37.84 1.31.38.89.63 2.08a40 40 0 0 0-3.92 0q.25-1.2.63-2.08a4 4 0 0 1 .85-1.32 7 7 0 0 1 .96 0m-2.75.4a6.5 6.5 0 0 0-3.67 3.44 29 29 0 0 1 2.7-.34q.31-1.83.97-3.1M4.58 6.28q-1.66.16-2.95.43a7 7 0 0 0 0 2.58q1.3.27 2.95.43a18 18 0 0 1 0-3.44m.17 4.71q-1.45-.12-2.69-.34a6.5 6.5 0 0 0 3.67 3.44q-.65-1.27-.98-3.1" fill="#666"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></svg>
````

## File: apps/auth-app/public/next.svg
````xml
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 394 80"><path fill="#000" d="M262 0h68.5v12.7h-27.2v66.6h-13.6V12.7H262V0ZM149 0v12.7H94v20.4h44.3v12.6H94v21h55v12.6H80.5V0h68.7zm34.3 0h-17.8l63.8 79.4h17.9l-32-39.7 32-39.6h-17.9l-23 28.6-23-28.6zm18.3 56.7-9-11-27.1 33.7h17.8l18.3-22.7z"/><path fill="#000" d="M81 79.3 17 0H0v79.3h13.6V17l50.2 62.3H81Zm252.6-.4c-1 0-1.8-.4-2.5-1s-1.1-1.6-1.1-2.6.3-1.8 1-2.5 1.6-1 2.6-1 1.8.3 2.5 1a3.4 3.4 0 0 1 .6 4.3 3.7 3.7 0 0 1-3 1.8zm23.2-33.5h6v23.3c0 2.1-.4 4-1.3 5.5a9.1 9.1 0 0 1-3.8 3.5c-1.6.8-3.5 1.3-5.7 1.3-2 0-3.7-.4-5.3-1s-2.8-1.8-3.7-3.2c-.9-1.3-1.4-3-1.4-5h6c.1.8.3 1.6.7 2.2s1 1.2 1.6 1.5c.7.4 1.5.5 2.4.5 1 0 1.8-.2 2.4-.6a4 4 0 0 0 1.6-1.8c.3-.8.5-1.8.5-3V45.5zm30.9 9.1a4.4 4.4 0 0 0-2-3.3 7.5 7.5 0 0 0-4.3-1.1c-1.3 0-2.4.2-3.3.5-.9.4-1.6 1-2 1.6a3.5 3.5 0 0 0-.3 4c.3.5.7.9 1.3 1.2l1.8 1 2 .5 3.2.8c1.3.3 2.5.7 3.7 1.2a13 13 0 0 1 3.2 1.8 8.1 8.1 0 0 1 3 6.5c0 2-.5 3.7-1.5 5.1a10 10 0 0 1-4.4 3.5c-1.8.8-4.1 1.2-6.8 1.2-2.6 0-4.9-.4-6.8-1.2-2-.8-3.4-2-4.5-3.5a10 10 0 0 1-1.7-5.6h6a5 5 0 0 0 3.5 4.6c1 .4 2.2.6 3.4.6 1.3 0 2.5-.2 3.5-.6 1-.4 1.8-1 2.4-1.7a4 4 0 0 0 .8-2.4c0-.9-.2-1.6-.7-2.2a11 11 0 0 0-2.1-1.4l-3.2-1-3.8-1c-2.8-.7-5-1.7-6.6-3.2a7.2 7.2 0 0 1-2.4-5.7 8 8 0 0 1 1.7-5 10 10 0 0 1 4.3-3.5c2-.8 4-1.2 6.4-1.2 2.3 0 4.4.4 6.2 1.2 1.8.8 3.2 2 4.3 3.4 1 1.4 1.5 3 1.5 5h-5.8z"/></svg>
````

## File: apps/auth-app/public/vercel.svg
````xml
<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1155 1000"><path d="m577.3 0 577.4 1000H0z" fill="#fff"/></svg>
````

## File: apps/auth-app/public/window.svg
````xml
<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 2.5h13v10a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1zM0 1h16v11.5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 0 12.5zm3.75 4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M7 4.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m1.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5" fill="#666"/></svg>
````

## File: apps/auth-app/src/actions/verify-actions.ts
````typescript
"use server";

import { z } from "zod";
import { requestVerifyEmail, requestVerifyProcess } from "@/lib/verify-api";
import type { ActionResult } from "@/types";

const emailSchema = z.string().trim().min(1).max(254);
const keySchema = z.string().min(1).max(512);

export async function requestVerifyProcessAction(
    email: string,
): Promise<ActionResult<{ key: string }>> {
    const parsed = emailSchema.safeParse(email);
    if (!parsed.success) return { ok: false, message: "Email không hợp lệ" };
    return requestVerifyProcess(parsed.data);
}

export async function requestVerifyEmailAction(key: string): Promise<ActionResult> {
    const parsed = keySchema.safeParse(key);
    if (!parsed.success) return { ok: false, message: "Liên kết xác minh không hợp lệ" };
    return requestVerifyEmail(parsed.data);
}
````

## File: apps/auth-app/src/app/(auth)/login/page.tsx
````typescript
import type { Metadata } from "next";
import { LoginForm } from "@/components/auth/login-form";

export const metadata: Metadata = {
    title: "Đăng nhập",
};

interface LoginPageProps {
    searchParams: Promise<{ redirect?: string }>;
}

function getSafeRedirect(value: string | undefined): string {
    if (!value) return "/";
    return value.startsWith("/") && !value.startsWith("//") ? value : "/";
}

export default async function LoginPage({ searchParams }: LoginPageProps) {
    const params = await searchParams;

    return <LoginForm redirectTo={getSafeRedirect(params.redirect)} />;
}
````

## File: apps/auth-app/src/app/(auth)/register/page.tsx
````typescript
import type { Metadata } from "next";
import { RegisterForm } from "@/components/auth/register-form";

export const metadata: Metadata = {
    title: "Đăng ký",
};

export default function RegisterPage() {
    return <RegisterForm />;
}
````

## File: apps/auth-app/src/app/(auth)/verify/loading.tsx
````typescript
import { Skeleton } from "@freemarket/ui/skeleton";

export default function VerifyLoading() {
    return (
        <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
            <Skeleton className="size-12 rounded-full" />
            <Skeleton className="h-6 w-48" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-11 w-full" />
            <Skeleton className="h-12 w-full" />
        </div>
    );
}
````

## File: apps/auth-app/src/app/(auth)/verify/page.tsx
````typescript
import type { Metadata } from "next";
import { VerifyKeyError } from "@/components/auth/verify-key-error";
import { resolveVerifyKey } from "@/lib/verify-api";
import { VerifyAccountForm } from "@/components/auth/verify-account-form";

export const metadata: Metadata = {
    title: "Xác minh tài khoản",
    robots: { index: false },
};

interface VerifyPageProps {
    searchParams: Promise<{ key?: string }>;
}

export default async function VerifyPage({ searchParams }: VerifyPageProps) {
    const { key } = await searchParams;

    if (!key) {
        return (
            <VerifyKeyError message="Liên kết xác minh thiếu thông tin. Vui lòng đăng nhập lại để nhận liên kết mới." />
        );
    }

    const result = await resolveVerifyKey(key);
    if (!result.ok) {
        return <VerifyKeyError message={result.message} />;
    }

    return <VerifyAccountForm user={result.data} verifyKey={key} redirectTo="/" />;
}
````

## File: apps/auth-app/src/app/(auth)/layout.tsx
````typescript
import Link from "next/link";
import { Store } from "lucide-react";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-dvh flex-col items-center justify-center px-4 py-10">
            <Link
                href="/"
                className="mb-6 flex items-center gap-2"
                aria-label="FreeMarket - Về trang chủ"
            >
                <span className="flex size-10 items-center justify-center rounded-xl bg-emerald-600 text-white">
                    <Store className="size-5" aria-hidden="true" />
                </span>
                <span className="text-xl font-bold tracking-tight text-slate-900">FreeMarket</span>
            </Link>

            <div className="w-full max-w-sm">{children}</div>

            <p className="mt-8 text-xs text-slate-400">© 2026 FreeMarket</p>
        </div>
    );
}
````

## File: apps/auth-app/src/app/api/auth/[...nextauth]/route.ts
````typescript
import { handlers } from "@/auth";

export const { GET, POST } = handlers;
````

## File: apps/auth-app/src/components/auth/verify-key-error.tsx
````typescript
import Link from "next/link";
import { AlertCircle } from "lucide-react";

interface VerifyKeyErrorProps {
    message: string;
}

export function VerifyKeyError({ message }: VerifyKeyErrorProps) {
    return (
        <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center sm:p-6">
            <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-rose-50 text-rose-600">
                <AlertCircle className="size-6" aria-hidden="true" />
            </span>
            <h1 className="mt-4 text-xl font-bold text-slate-900">Không thể xác minh</h1>
            <p role="alert" className="mt-1 text-sm text-slate-500">
                {message}
            </p>
            <Link
                href="/login"
                className="mt-5 inline-flex h-11 w-full items-center justify-center rounded-lg bg-emerald-600 px-4 text-sm font-medium text-white transition-colors duration-150 hover:bg-emerald-700"
            >
                Quay lại đăng nhập
            </Link>
        </div>
    );
}
````

## File: apps/auth-app/src/hooks/use-countdown.ts
````typescript
"use client";

import { useCallback, useEffect, useState } from "react";

interface Countdown {
    secondsLeft: number;
    start: (seconds: number) => void;
}

export function useCountdown(initialSeconds: number): Countdown {
    const [secondsLeft, setSecondsLeft] = useState<number>(initialSeconds);

    useEffect(() => {
        if (secondsLeft <= 0) return;
        const timer = window.setTimeout(() => setSecondsLeft((current) => current - 1), 1000);
        return () => window.clearTimeout(timer);
    }, [secondsLeft]);

    const start = useCallback((seconds: number): void => setSecondsLeft(seconds), []);

    return { secondsLeft, start };
}
````

## File: apps/auth-app/src/lib/validations/auth.ts
````typescript
import { z } from "zod";
import type { LoginFormValues, RegisterFormValues } from "@/types";

export const loginSchema = z.object({
    emailOrPhone: z.string().min(1, "Vui lòng nhập email hoặc số điện thoại"),
    password: z
        .string()
        .min(1, "Vui lòng nhập mật khẩu")
        .min(6, "Mật khẩu tối thiểu 6 ký tự"),
    rememberMe: z.boolean(),
}) satisfies z.ZodType<LoginFormValues>;

const phoneRegex = /^(0|\+84)(3|5|7|8|9)\d{8}$/;

export const registerSchema = z
    .object({
        fullName: z
            .string()
            .trim()
            .min(1, "Vui lòng nhập họ tên")
            .min(2, "Họ tên tối thiểu 2 ký tự")
            .max(50, "Họ tên tối đa 50 ký tự"),
        email: z.string().min(1, "Vui lòng nhập email").email("Email không hợp lệ"),
        password: z
            .string()
            .min(1, "Vui lòng nhập mật khẩu")
            .min(8, "Mật khẩu tối thiểu 8 ký tự")
            .regex(/[A-Za-z]/, "Mật khẩu cần có ít nhất 1 chữ cái")
            .regex(/\d/, "Mật khẩu cần có ít nhất 1 chữ số"),
        confirmPassword: z.string().min(1, "Vui lòng nhập lại mật khẩu"),
        phone: z
            .string()
            .min(1, "Vui lòng nhập số điện thoại")
            .regex(phoneRegex, "Số điện thoại không hợp lệ"),
        city: z.string().min(1, "Vui lòng chọn tỉnh/thành"),
        intent: z.enum(["buy", "sell", "both"]),
        acceptTerms: z.boolean().refine((value) => value, "Bạn cần đồng ý với điều khoản để tiếp tục"),
    })
    .refine((values) => values.password === values.confirmPassword, {
        message: "Mật khẩu xác nhận không khớp",
        path: ["confirmPassword"],
    }) satisfies z.ZodType<RegisterFormValues>;

export const registerStepFields: (keyof RegisterFormValues)[][] = [
    ["fullName", "email", "password", "confirmPassword"],
    ["phone", "city", "intent"],
    ["acceptTerms"],
];

export function getPasswordStrength(password: string): { score: number; label: string } {
    if (!password) return { score: 0, label: "" };

    const checks: boolean[] = [
        password.length >= 8,
        /[a-z]/.test(password) && /[A-Z]/.test(password),
        /\d/.test(password),
        /[^A-Za-z0-9]/.test(password),
    ];
    const score = checks.filter(Boolean).length;
    const labels = ["Rất yếu", "Yếu", "Trung bình", "Khá mạnh", "Mạnh"];

    return { score, label: labels[score] };
}
````

## File: apps/auth-app/src/lib/validations/verify.ts
````typescript
import { z } from "zod";

export const OTP_LENGTH = 6;

export const otpSchema = z.string().regex(/^\d{6}$/, "Mã OTP gồm đúng 6 chữ số");
````

## File: apps/auth-app/src/lib/auth-errors.ts
````typescript
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
````

## File: apps/auth-app/src/lib/backend.ts
````typescript
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
````

## File: apps/auth-app/src/lib/constants.ts
````typescript
import { ShoppingBag, Store, Repeat } from "lucide-react";
import type { IntentOption, RegisterStepConfig } from "@/types";

export const registerSteps: RegisterStepConfig[] = [
    { id: "account", label: "Tài khoản", description: "Tạo thông tin đăng nhập của bạn." },
    { id: "profile", label: "Thông tin", description: "Giúp người mua và người bán tin tưởng bạn hơn." },
    { id: "confirm", label: "Xác nhận", description: "Kiểm tra lại và hoàn tất đăng ký." },
];

export const intentOptions: IntentOption[] = [
    { value: "buy", label: "Mua sắm", description: "Tìm đồ mới và đồ cũ giá tốt.", icon: ShoppingBag },
    { value: "sell", label: "Bán hàng", description: "Đăng bán nhanh, quản lý đơn trong Studio.", icon: Store },
    { value: "both", label: "Cả hai", description: "Vừa mua vừa bán, chuyển chế độ bất kỳ lúc nào.", icon: Repeat },
];

export const vietnamCities: string[] = [
    "TP. Hồ Chí Minh",
    "Hà Nội",
    "Đà Nẵng",
    "Cần Thơ",
    "Hải Phòng",
    "Huế",
    "Nha Trang",
    "Đà Lạt",
    "Vũng Tàu",
    "Biên Hòa",
    "Khác",
];

export const DEFAULT_AVATAR =
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=800&q=80";
````

## File: apps/auth-app/src/lib/format.ts
````typescript
export function maskEmail(email: string): string {
    const [local, domain] = email.split("@");
    if (!local || !domain) return email;
    const visible = local.slice(0, Math.min(2, local.length));
    return `${visible}${"*".repeat(Math.max(local.length - visible.length, 2))}@${domain}`;
}

export function formatCountdown(totalSeconds: number): string {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}
````

## File: apps/auth-app/src/lib/verify-api.ts
````typescript
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
````

## File: apps/auth-app/src/stores/use-accounts-store.ts
````typescript
import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { MockAccount } from "@/types";

interface AccountsState {
    accounts: MockAccount[];
    addAccount: (account: MockAccount) => void;
}

export const useAccountsStore = create<AccountsState>()(
    persist(
        (set) => ({
            accounts: [],
            addAccount: (account) => set((state) => ({ accounts: [...state.accounts, account] })),
        }),
        { name: "freemarket-accounts" },
    ),
);
````

## File: apps/auth-app/src/stores/use-login-preferences-store.ts
````typescript
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface LoginPreferencesState {
    rememberedEmail: string;
    setRememberedEmail: (email: string) => void;
}

export const useLoginPreferencesStore = create<LoginPreferencesState>()(
    persist(
        (set) => ({
            rememberedEmail: "",
            setRememberedEmail: (rememberedEmail) => set({ rememberedEmail }),
        }),
        { name: "freemarket-login-preferences" },
    ),
);
````

## File: apps/auth-app/src/types/index.ts
````typescript
import { LucideIcon } from "lucide-react";


export interface AuthUser {
    id: string;
    name: string;
    email: string;
    avatar: string;
}

export interface MockAccount extends AuthUser {
    password: string;
}

export interface LoginFormValues {
    emailOrPhone: string;
    password: string;
    rememberMe: boolean;
}

export type LoginResult =
    | { ok: true; user: AuthUser }
    | { ok: false; message: string };

export type RegisterIntent = "buy" | "sell" | "both";

export interface RegisterFormValues {
    fullName: string;
    email: string;
    password: string;
    confirmPassword: string;
    phone: string;
    city: string;
    intent: RegisterIntent;
    acceptTerms: boolean;
}

export type RegisterResult =
    | { ok: true; account: MockAccount }
    | { ok: false; message: string };

export interface RegisterStepConfig {
    id: string;
    label: string;
    description: string;
}

export interface IntentOption {
    value: RegisterIntent;
    label: string;
    description: string;
    icon: LucideIcon;
}

export interface PasswordStrength {
    score: number;
    label: string;
}

export type ItemCondition = "New" | "Like New" | "Well Used";
export type ListingStatus = "active" | "paused";
export type OrderStatus = "pending" | "shipped" | "completed";

export interface ActionFailure {
    ok: false;
    message: string;
    /** "invalid_token": key đã hết hạn hoặc không hợp lệ */
    code?: "invalid_token";
}

export type ActionResult<T = void> = { ok: true; data: T } | ActionFailure;

export interface VerifyAccountUser {
    email: string;
    fullName?: string;
}
````

## File: apps/auth-app/.gitignore
````
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.*
.yarn/*
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/versions

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.pnpm-debug.log*

# env files (can opt-in for committing if needed)
.env*

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
````

## File: apps/auth-app/AGENTS.md
````markdown
<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
````

## File: apps/auth-app/eslint.config.mjs
````javascript
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
````

## File: apps/auth-app/postcss.config.mjs
````javascript
const config = { plugins: { "@tailwindcss/postcss": {} } };
export default config;
````

## File: apps/auth-app/README.md
````markdown
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
````

## File: apps/auth-app/tsconfig.json
````json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".next/dev/types/**/*.ts",
    "**/*.mts"
  ],
  "exclude": ["node_modules"]
}
````

## File: apps/merchant-app/public/file.svg
````xml
<svg fill="none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 13.5V5.41a1 1 0 0 0-.3-.7L9.8.29A1 1 0 0 0 9.08 0H1.5v13.5A2.5 2.5 0 0 0 4 16h8a2.5 2.5 0 0 0 2.5-2.5m-1.5 0v-7H8v-5H3v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1M9.5 5V2.12L12.38 5zM5.13 5h-.62v1.25h2.12V5zm-.62 3h7.12v1.25H4.5zm.62 3h-.62v1.25h7.12V11z" clip-rule="evenodd" fill="#666" fill-rule="evenodd"/></svg>
````

## File: apps/merchant-app/public/globe.svg
````xml
<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g clip-path="url(#a)"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.27 14.1a6.5 6.5 0 0 0 3.67-3.45q-1.24.21-2.7.34-.31 1.83-.97 3.1M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.48-1.52a7 7 0 0 1-.96 0H7.5a4 4 0 0 1-.84-1.32q-.38-.89-.63-2.08a40 40 0 0 0 3.92 0q-.25 1.2-.63 2.08a4 4 0 0 1-.84 1.31zm2.94-4.76q1.66-.15 2.95-.43a7 7 0 0 0 0-2.58q-1.3-.27-2.95-.43a18 18 0 0 1 0 3.44m-1.27-3.54a17 17 0 0 1 0 3.64 39 39 0 0 1-4.3 0 17 17 0 0 1 0-3.64 39 39 0 0 1 4.3 0m1.1-1.17q1.45.13 2.69.34a6.5 6.5 0 0 0-3.67-3.44q.65 1.26.98 3.1M8.48 1.5l.01.02q.41.37.84 1.31.38.89.63 2.08a40 40 0 0 0-3.92 0q.25-1.2.63-2.08a4 4 0 0 1 .85-1.32 7 7 0 0 1 .96 0m-2.75.4a6.5 6.5 0 0 0-3.67 3.44 29 29 0 0 1 2.7-.34q.31-1.83.97-3.1M4.58 6.28q-1.66.16-2.95.43a7 7 0 0 0 0 2.58q1.3.27 2.95.43a18 18 0 0 1 0-3.44m.17 4.71q-1.45-.12-2.69-.34a6.5 6.5 0 0 0 3.67 3.44q-.65-1.27-.98-3.1" fill="#666"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></svg>
````

## File: apps/merchant-app/public/next.svg
````xml
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 394 80"><path fill="#000" d="M262 0h68.5v12.7h-27.2v66.6h-13.6V12.7H262V0ZM149 0v12.7H94v20.4h44.3v12.6H94v21h55v12.6H80.5V0h68.7zm34.3 0h-17.8l63.8 79.4h17.9l-32-39.7 32-39.6h-17.9l-23 28.6-23-28.6zm18.3 56.7-9-11-27.1 33.7h17.8l18.3-22.7z"/><path fill="#000" d="M81 79.3 17 0H0v79.3h13.6V17l50.2 62.3H81Zm252.6-.4c-1 0-1.8-.4-2.5-1s-1.1-1.6-1.1-2.6.3-1.8 1-2.5 1.6-1 2.6-1 1.8.3 2.5 1a3.4 3.4 0 0 1 .6 4.3 3.7 3.7 0 0 1-3 1.8zm23.2-33.5h6v23.3c0 2.1-.4 4-1.3 5.5a9.1 9.1 0 0 1-3.8 3.5c-1.6.8-3.5 1.3-5.7 1.3-2 0-3.7-.4-5.3-1s-2.8-1.8-3.7-3.2c-.9-1.3-1.4-3-1.4-5h6c.1.8.3 1.6.7 2.2s1 1.2 1.6 1.5c.7.4 1.5.5 2.4.5 1 0 1.8-.2 2.4-.6a4 4 0 0 0 1.6-1.8c.3-.8.5-1.8.5-3V45.5zm30.9 9.1a4.4 4.4 0 0 0-2-3.3 7.5 7.5 0 0 0-4.3-1.1c-1.3 0-2.4.2-3.3.5-.9.4-1.6 1-2 1.6a3.5 3.5 0 0 0-.3 4c.3.5.7.9 1.3 1.2l1.8 1 2 .5 3.2.8c1.3.3 2.5.7 3.7 1.2a13 13 0 0 1 3.2 1.8 8.1 8.1 0 0 1 3 6.5c0 2-.5 3.7-1.5 5.1a10 10 0 0 1-4.4 3.5c-1.8.8-4.1 1.2-6.8 1.2-2.6 0-4.9-.4-6.8-1.2-2-.8-3.4-2-4.5-3.5a10 10 0 0 1-1.7-5.6h6a5 5 0 0 0 3.5 4.6c1 .4 2.2.6 3.4.6 1.3 0 2.5-.2 3.5-.6 1-.4 1.8-1 2.4-1.7a4 4 0 0 0 .8-2.4c0-.9-.2-1.6-.7-2.2a11 11 0 0 0-2.1-1.4l-3.2-1-3.8-1c-2.8-.7-5-1.7-6.6-3.2a7.2 7.2 0 0 1-2.4-5.7 8 8 0 0 1 1.7-5 10 10 0 0 1 4.3-3.5c2-.8 4-1.2 6.4-1.2 2.3 0 4.4.4 6.2 1.2 1.8.8 3.2 2 4.3 3.4 1 1.4 1.5 3 1.5 5h-5.8z"/></svg>
````

## File: apps/merchant-app/public/vercel.svg
````xml
<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1155 1000"><path d="m577.3 0 577.4 1000H0z" fill="#fff"/></svg>
````

## File: apps/merchant-app/public/window.svg
````xml
<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 2.5h13v10a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1zM0 1h16v11.5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 0 12.5zm3.75 4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M7 4.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m1.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5" fill="#666"/></svg>
````

## File: apps/merchant-app/src/actions/onboard-actions.ts
````typescript
"use server";

import { postOnboardStage } from "@/lib/merchant-api";
import {
    merchantAddressDtoSchema,
    merchantKycSchema,
    merchantSchema,
} from "@/lib/validations/onboard";
import type {
    ActionResult,
    MerchantAddressDto,
    MerchantDto,
    MerchantKycDto,
} from "@/types/onboard";

const INVALID: ActionResult = { ok: false, message: "Dữ liệu không hợp lệ. Vui lòng kiểm tra lại" };

export async function submitStage1Action(values: MerchantDto): Promise<ActionResult> {
    const parsed = merchantSchema.safeParse(values);
    if (!parsed.success) return INVALID;
    return postOnboardStage("stage1", parsed.data);
}

export async function submitStage2Action(values: MerchantAddressDto): Promise<ActionResult> {
    const parsed = merchantAddressDtoSchema.safeParse(values);
    if (!parsed.success) return INVALID;
    return postOnboardStage("stage2", parsed.data);
}

export async function submitStage3Action(values: MerchantKycDto): Promise<ActionResult> {
    const parsed = merchantKycSchema.safeParse(values);
    if (!parsed.success) return INVALID;
    return postOnboardStage("stage3", parsed.data);
}
````

## File: apps/merchant-app/src/app/(studio)/onboard/page.tsx
````typescript
import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { CenteredPage } from "@/components/merchant/centered-page";
import { MerchantStatusNotice } from "@/components/merchant/merchant-status-notice";

import { getMerchantState } from "@/lib/merchant-api";
import { OnboardWizard } from "@/components/onboard/onboard-wizrd";

export const metadata: Metadata = {
    title: "Đăng ký bán hàng",
    robots: { index: false },
};

export default async function OnboardPage() {
    const state = await getMerchantState();

    if (state.status === "active") redirect("/");

    if (state.status === "pending") {
        return (
            <CenteredPage>
                <MerchantStatusNotice variant="pending" />
            </CenteredPage>
        );
    }

    if (state.status === "error") {
        return (
            <CenteredPage>
                <MerchantStatusNotice variant="error" message={state.message} />
            </CenteredPage>
        );
    }

    return (
        <CenteredPage wide>
            <OnboardWizard />
        </CenteredPage>
    );
}
````

## File: apps/merchant-app/src/app/(studio)/layout.tsx
````typescript
import type { ReactNode } from "react";
import { redirect } from "next/navigation";
import { MerchantShell } from "@/components/merchant/merchant-shell";
import { MerchantStatusNotice } from "@/components/merchant/merchant-status-notice";
import { CenteredPage } from "@/components/merchant/centered-page";
import { getMerchantState } from "@/lib/merchant-api";

export default async function StudioLayout({ children }: { children: ReactNode }) {
    const state = await getMerchantState();

    switch (state.status) {
        case "not_onboarded":
            redirect("/onboard");
        case "pending":
            return (
                <CenteredPage>
                    <MerchantStatusNotice variant="pending" />
                </CenteredPage>
            );
        case "error":
            return (
                <CenteredPage>
                    <MerchantStatusNotice variant="error" message={state.message} />
                </CenteredPage>
            );
        case "active":
            return <MerchantShell>{children}</MerchantShell>;
    }
}
````

## File: apps/merchant-app/src/app/(studio)/loading.tsx
````typescript
import { Skeleton } from "@freemarket/ui/skeleton";

export default function MerchantLoading() {
    return (
        <div>
            <Skeleton className="h-36 w-full rounded-none sm:h-52" />
            <div className="px-4 sm:px-6">
                <Skeleton className="-mt-10 size-20 rounded-full ring-4 ring-white sm:size-24" />
                <Skeleton className="mt-3 h-6 w-48" />
                <Skeleton className="mt-2 h-4 w-full max-w-md" />
                <div className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
                    {Array.from({ length: 4 }, (_, i) => (
                        <Skeleton key={i} className="h-24 w-full" />
                    ))}
                </div>
                <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                    {Array.from({ length: 8 }, (_, i) => (
                        <div key={i} className="space-y-2">
                            <Skeleton className="aspect-square w-full" />
                            <Skeleton className="h-4 w-3/4" />
                            <Skeleton className="h-4 w-1/2" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
````

## File: apps/merchant-app/src/app/(studio)/page.tsx
````typescript
import { DashboardStats } from "@/components/dashboard/dashboard-stats";
import { RecentOrders } from "@/components/dashboard/recent-orders";
import { MerchantProducts } from "@/components/merchant/merchant-products";
import { MerchantProfileHeader } from "@/components/merchant/merchant-profile-header";
import { getMerchantState } from "@/lib/merchant-api";
import {
    mockCategories,
    mockDashboardStats,
    mockProducts,
    mockRecentOrders,
} from "@/lib/mock-data";

export default async function MerchantDashboardPage() {
    const state = await getMerchantState();
    // Layout đã xử lý pending / onboard / lỗi; ở đây chỉ còn trạng thái active.
    if (state.status !== "active") return null;

    return (
        <>
            <MerchantProfileHeader merchant={state.merchant} />
            <DashboardStats stats={mockDashboardStats} />
            <RecentOrders orders={mockRecentOrders} />
            <MerchantProducts categories={mockCategories} products={mockProducts} />
        </>
    );
}
````

## File: apps/merchant-app/src/components/dashboard/dashboard-stats.tsx
````typescript
import { ClipboardList, Package, Star, Wallet, type LucideIcon } from "lucide-react";
import type { DashboardStat, DashboardStatId } from "@/types/dashboard";

const icons: Record<DashboardStatId, LucideIcon> = {
    revenue: Wallet,
    orders: ClipboardList,
    listings: Package,
    rating: Star,
};

interface DashboardStatsProps {
    stats: DashboardStat[];
}

export function DashboardStats({ stats }: DashboardStatsProps) {
    return (
        <section className="px-4 pt-5 sm:px-6" aria-label="Tổng quan cửa hàng">
            <h2 className="mb-3 text-lg font-semibold text-slate-900">Tổng quan</h2>
            <dl className="grid grid-cols-2 gap-3 lg:grid-cols-4">
                {stats.map(({ id, label, value, hint }) => {
                    const Icon = icons[id];
                    return (
                        <div key={id} className="rounded-lg border border-slate-200 bg-white p-3.5">
                            <dt className="flex items-center gap-1.5 text-xs text-slate-500">
                                <Icon className="size-4 text-emerald-600" aria-hidden="true" />
                                {label}
                            </dt>
                            <dd className="mt-1.5 text-xl font-semibold text-slate-900">{value}</dd>
                            <p className="mt-0.5 text-xs text-slate-500">{hint}</p>
                        </div>
                    );
                })}
            </dl>
        </section>
    );
}
````

## File: apps/merchant-app/src/components/dashboard/recent-orders.tsx
````typescript
import { ClipboardList } from "lucide-react";
import { Badge } from "@freemarket/ui/badge";
import { cn, formatVnd } from "@freemarket/utils";
import type { OrderStatus, RecentOrder } from "@/types/dashboard";

const statusMap: Record<OrderStatus, { label: string; className: string }> = {
    pending: { label: "Chờ xử lý", className: "bg-amber-50 text-amber-700 border-amber-200" },
    shipped: { label: "Đang giao", className: "bg-sky-50 text-sky-700 border-sky-200" },
    completed: { label: "Hoàn tất", className: "bg-emerald-50 text-emerald-700 border-emerald-200" },
};

interface RecentOrdersProps {
    orders: RecentOrder[];
}

export function RecentOrders({ orders }: RecentOrdersProps) {
    return (
        <section className="px-4 pt-6 sm:px-6" aria-label="Đơn hàng gần đây">
            <h2 className="mb-3 text-lg font-semibold text-slate-900">Đơn hàng gần đây</h2>

            {orders.length === 0 ? (
                <div className="flex flex-col items-center gap-2 rounded-lg border border-dashed border-slate-300 bg-white px-4 py-10 text-center">
                    <ClipboardList className="size-8 text-slate-400" aria-hidden="true" />
                    <p className="text-sm text-slate-600">Chưa có đơn hàng nào.</p>
                </div>
            ) : (
                <ul className="divide-y divide-slate-100 rounded-lg border border-slate-200 bg-white">
                    {orders.map((order) => {
                        const status = statusMap[order.status];
                        return (
                            <li key={order.id} className="flex items-center justify-between gap-3 px-3.5 py-3">
                                <div className="min-w-0">
                                    <p className="truncate text-sm font-medium text-slate-900">{order.productTitle}</p>
                                    <p className="truncate text-xs text-slate-500">
                                        #{order.code} · {order.buyerName} · {order.createdLabel}
                                    </p>
                                </div>
                                <div className="flex shrink-0 flex-col items-end gap-1">
                                    <span className="text-sm font-semibold text-slate-900">{formatVnd(order.total)}</span>
                                    <Badge variant="outline" className={cn(status.className)}>
                                        {status.label}
                                    </Badge>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            )}
        </section>
    );
}
````

## File: apps/merchant-app/src/components/merchant/centered-page.tsx
````typescript
import type { ReactNode } from "react";
import { Store } from "lucide-react";

interface CenteredPageProps {
    children: ReactNode;
    wide?: boolean;
}

export function CenteredPage({ children, wide = false }: CenteredPageProps) {
    return (
        <div className="flex min-h-dvh flex-col items-center justify-center px-4 py-10">
            <div className="mb-6 flex items-center gap-2">
                <span className="flex size-10 items-center justify-center rounded-xl bg-emerald-600 text-white">
                    <Store className="size-5" aria-hidden="true" />
                </span>
                <span className="text-xl font-bold tracking-tight text-slate-900">FreeMarket</span>
            </div>
            <div className={wide ? "w-full max-w-lg" : "w-full max-w-sm"}>{children}</div>
        </div>
    );
}
````

## File: apps/merchant-app/src/components/merchant/merchant-status-notice.tsx
````typescript
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
````

## File: apps/merchant-app/src/components/onboard/form-field.tsx
````typescript
import type { ComponentProps, ReactNode } from "react";
import { AlertCircle, ArrowRight, Loader2 } from "lucide-react";
import { Button } from "@freemarket/ui/button";
import { Input } from "@freemarket/ui/input";
import { Label } from "@freemarket/ui/label";
import { cn } from "@freemarket/utils";

export const nativeControlClass =
    "w-full rounded-md border border-slate-200 bg-white px-3 text-sm text-slate-900 outline-none transition-colors duration-150 focus-visible:border-emerald-600 focus-visible:ring-2 focus-visible:ring-emerald-600/30";

interface FormFieldProps {
    id: string;
    label: string;
    error?: string;
    hint?: string;
    children: ReactNode;
}

export function FormField({ id, label, error, hint, children }: FormFieldProps) {
    return (
        <div className="space-y-1.5">
            <Label htmlFor={id}>{label}</Label>
            {children}
            {error ? (
                <p id={`${id}-error`} className="text-xs text-rose-600">
                    {error}
                </p>
            ) : (
                hint && <p className="text-xs text-slate-500">{hint}</p>
            )}
        </div>
    );
}

interface TextFieldProps extends ComponentProps<"input"> {
    id: string;
    label: string;
    error?: string;
    hint?: string;
}

export function TextField({ id, label, error, hint, className, ...props }: TextFieldProps) {
    return (
        <FormField id={id} label={label} error={error} hint={hint}>
            <Input
                id={id}
                aria-invalid={Boolean(error)}
                aria-describedby={error ? `${id}-error` : undefined}
                className={cn("h-11", error && "border-rose-400", className)}
                {...props}
            />
        </FormField>
    );
}

export function FormError({ message }: { message?: string }) {
    if (!message) return null;
    return (
        <div
            role="alert"
            className="flex items-start gap-2 rounded-lg border border-rose-200 bg-rose-50 px-3 py-2.5 text-sm text-rose-700"
        >
            <AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
            <span>{message}</span>
        </div>
    );
}

interface StageActionsProps {
    isSubmitting: boolean;
    submitLabel: string;
    submittingLabel: string;
}

export function StageActions({ isSubmitting, submitLabel, submittingLabel }: StageActionsProps) {
    return (
        <Button
            type="submit"
            disabled={isSubmitting}
            className="h-11 w-full bg-emerald-600 text-white transition-colors duration-150 hover:bg-emerald-700"
        >
            {isSubmitting ? (
                <>
                    <Loader2 className="size-4 animate-spin" aria-hidden="true" />
                    {submittingLabel}
                </>
            ) : (
                <>
                    {submitLabel}
                    <ArrowRight className="size-4" aria-hidden="true" />
                </>
            )}
        </Button>
    );
}
````

## File: apps/merchant-app/src/components/onboard/onboard-progress.tsx
````typescript
import { Check } from "lucide-react";
import { cn } from "@freemarket/utils";
import type { OnboardStepConfig } from "@/types/onboard";

interface OnboardProgressProps {
    steps: OnboardStepConfig[];
    currentStep: number;
}

export function OnboardProgress({ steps, currentStep }: OnboardProgressProps) {
    const percent = Math.round(((currentStep + 1) / steps.length) * 100);

    return (
        <div>
            <div className="mb-2 flex items-baseline justify-between text-xs">
                <span className="font-semibold text-slate-900">
                    Bước {currentStep + 1}/{steps.length}: {steps[currentStep].label}
                </span>
                <span className="text-slate-500">{percent}%</span>
            </div>

            <div
                role="progressbar"
                aria-label="Tiến trình đăng ký bán hàng"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={percent}
                className="h-2 overflow-hidden rounded-full bg-slate-100"
            >
                <div
                    className="h-full rounded-full bg-emerald-600 transition-[width] duration-200"
                    style={{ width: `${percent}%` }}
                />
            </div>

            <ol
                className="mt-3 grid gap-1"
                style={{ gridTemplateColumns: `repeat(${steps.length}, minmax(0, 1fr))` }}
            >
                {steps.map((step, index) => {
                    const isDone = index < currentStep;
                    const isCurrent = index === currentStep;
                    return (
                        <li
                            key={step.id}
                            aria-current={isCurrent ? "step" : undefined}
                            className="flex flex-col items-center gap-1 text-center"
                        >
                            <span
                                className={cn(
                                    "flex size-6 items-center justify-center rounded-full border text-xs font-semibold transition-colors duration-150",
                                    isDone && "border-emerald-600 bg-emerald-600 text-white",
                                    isCurrent && "border-emerald-600 bg-white text-emerald-700",
                                    !isDone && !isCurrent && "border-slate-200 bg-white text-slate-400",
                                )}
                            >
                                {isDone ? <Check className="size-3.5" aria-hidden="true" /> : index + 1}
                            </span>
                            <span
                                className={cn(
                                    "text-[11px] font-medium",
                                    isCurrent || isDone ? "text-slate-900" : "text-slate-400",
                                )}
                            >
                                {step.label}
                            </span>
                        </li>
                    );
                })}
            </ol>
        </div>
    );
}
````

## File: apps/merchant-app/src/components/onboard/onboard-wizrd.tsx
````typescript
"use client";

import { useState } from "react";
import { MerchantStatusNotice } from "@/components/merchant/merchant-status-notice";
import { OnboardProgress } from "@/components/onboard/onboard-progress";
import { Stage1Form } from "@/components/onboard/stage1-form";
import { Stage2Form } from "@/components/onboard/stage2-form";
import { Stage3Form } from "@/components/onboard/stage3-form";
import { onboardSteps } from "@/lib/constants";

const LAST_STEP = onboardSteps.length - 1;

export function OnboardWizard() {
    const [step, setStep] = useState<number>(0);
    const [isPending, setIsPending] = useState<boolean>(false);

    // Xong stage 3 (hoặc BE báo hồ sơ đang thụ lý): dùng lại trang thông báo
    if (isPending) return <MerchantStatusNotice variant="pending" />;

    function handleNext(): void {
        if (step >= LAST_STEP) {
            setIsPending(true);
            return;
        }
        setStep((current) => current + 1);
    }

    const stageProps = { onSuccess: handleNext, onPending: () => setIsPending(true) };

    return (
        <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
            <div className="mb-5 space-y-1">
                <h1 className="text-xl font-bold text-slate-900">Đăng ký bán hàng</h1>
                <p className="text-sm text-slate-500">{onboardSteps[step].description}</p>
            </div>

            <div className="mb-6">
                <OnboardProgress steps={onboardSteps} currentStep={step} />
            </div>

            {step === 0 && <Stage1Form {...stageProps} />}
            {step === 1 && <Stage2Form {...stageProps} />}
            {step === 2 && <Stage3Form {...stageProps} />}
        </div>
    );
}
````

## File: apps/merchant-app/src/components/onboard/stage1-form.tsx
````typescript
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { submitStage1Action } from "@/actions/onboard-actions";
import {
    FormError,
    FormField,
    StageActions,
    TextField,
    nativeControlClass,
} from "@/components/onboard/form-field";
import { cn } from "@freemarket/utils";
import { merchantSchema } from "@/lib/validations/onboard";
import type { MerchantDto, StageFormProps } from "@/types/onboard";

export function Stage1Form({ onSuccess, onPending }: StageFormProps) {
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting },
    } = useForm<MerchantDto>({
        resolver: zodResolver(merchantSchema),
        mode: "onTouched",
        defaultValues: {
            shopName: "",
            description: "",
            logoUrl: "",
            bannerUrl: "",
            contactEmail: "",
            contactPhone: "",
        },
    });

    async function onSubmit(values: MerchantDto): Promise<void> {
        const result = await submitStage1Action(values);
        if (!result.ok) {
            if (result.code === "pending") {
                onPending();
                return;
            }
            setError("root", { message: result.message });
            toast.error(result.message);
            return;
        }
        toast.success("Đã lưu thông tin cửa hàng");
        onSuccess();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
            <FormError message={errors.root?.message} />

            <TextField
                id="shopName"
                label="Tên cửa hàng"
                placeholder="VD: Minh Anh Store"
                error={errors.shopName?.message}
                {...register("shopName")}
            />

            <FormField
                id="description"
                label="Mô tả cửa hàng"
                error={errors.description?.message}
                hint="Giới thiệu ngắn về sản phẩm và cách bạn bán hàng."
            >
                <textarea
                    id="description"
                    rows={4}
                    aria-invalid={Boolean(errors.description)}
                    aria-describedby={errors.description ? "description-error" : undefined}
                    className={cn(nativeControlClass, "resize-none py-2.5", errors.description && "border-rose-400")}
                    {...register("description")}
                />
            </FormField>

            <TextField
                id="logoUrl"
                label="Đường dẫn ảnh đại diện (logo)"
                type="url"
                inputMode="url"
                placeholder="https://..."
                error={errors.logoUrl?.message}
                {...register("logoUrl")}
            />

            <TextField
                id="bannerUrl"
                label="Đường dẫn ảnh bìa"
                type="url"
                inputMode="url"
                placeholder="https://..."
                error={errors.bannerUrl?.message}
                {...register("bannerUrl")}
            />

            <TextField
                id="contactEmail"
                label="Email liên hệ"
                type="email"
                autoComplete="email"
                inputMode="email"
                placeholder="shop@email.com"
                error={errors.contactEmail?.message}
                {...register("contactEmail")}
            />

            <TextField
                id="contactPhone"
                label="Số điện thoại liên hệ"
                type="tel"
                autoComplete="tel"
                inputMode="tel"
                placeholder="0901234567"
                error={errors.contactPhone?.message}
                {...register("contactPhone")}
            />

            <StageActions isSubmitting={isSubmitting} submitLabel="Lưu và tiếp tục" submittingLabel="Đang lưu..." />
        </form>
    );
}
````

## File: apps/merchant-app/src/components/onboard/stage2-form.tsx
````typescript
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { LocateFixed } from "lucide-react";
import { toast } from "sonner";
import { submitStage2Action } from "@/actions/onboard-actions";
import { FormError, StageActions, TextField } from "@/components/onboard/form-field";
import { Button } from "@freemarket/ui/button";
import { Checkbox } from "@freemarket/ui/checkbox";
import { Label } from "@freemarket/ui/label";
import { merchantAddressFormSchema } from "@/lib/validations/onboard";
import type { MerchantAddressFormValues, StageFormProps } from "@/types/onboard";

type FlagName = "isPickup" | "isReturn" | "isDefault";

const flags: { name: FlagName; label: string; hint: string }[] = [
    { name: "isPickup", label: "Địa chỉ lấy hàng", hint: "Đơn vị vận chuyển sẽ đến lấy hàng tại đây." },
    { name: "isReturn", label: "Địa chỉ nhận hàng hoàn", hint: "Hàng bị trả lại sẽ gửi về đây." },
    { name: "isDefault", label: "Đặt làm địa chỉ mặc định", hint: "Dùng cho các đơn hàng mới." },
];

export function Stage2Form({ onSuccess, onPending }: StageFormProps) {
    const {
        register,
        control,
        handleSubmit,
        setValue,
        setError,
        formState: { errors, isSubmitting },
    } = useForm<MerchantAddressFormValues>({
        resolver: zodResolver(merchantAddressFormSchema),
        mode: "onTouched",
        defaultValues: {
            label: "",
            contactName: "",
            contactPhone: "",
            province: "",
            district: "",
            ward: "",
            addressLine: "",
            latitude: "",
            longtitude: "",
            isPickup: true,
            isReturn: true,
            isDefault: true,
        },
    });

    function handleLocate(): void {
        if (!navigator.geolocation) {
            toast.info("Trình duyệt không hỗ trợ định vị. Vui lòng nhập thủ công.");
            return;
        }
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setValue("latitude", position.coords.latitude.toFixed(6), { shouldValidate: true });
                setValue("longtitude", position.coords.longitude.toFixed(6), { shouldValidate: true });
                toast.success("Đã lấy vị trí hiện tại");
            },
            () => toast.info("Không thể lấy vị trí. Vui lòng nhập thủ công."),
        );
    }

    async function onSubmit(values: MerchantAddressFormValues): Promise<void> {
        const result = await submitStage2Action({
            ...values,
            latitude: Number(values.latitude),
            longtitude: Number(values.longtitude),
        });
        if (!result.ok) {
            if (result.code === "pending") {
                onPending();
                return;
            }
            setError("root", { message: result.message });
            toast.error(result.message);
            return;
        }
        toast.success("Đã lưu địa chỉ cửa hàng");
        onSuccess();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
            <FormError message={errors.root?.message} />

            <TextField
                id="label"
                label="Tên gợi nhớ"
                placeholder="VD: Kho chính"
                error={errors.label?.message}
                {...register("label")}
            />

            <div className="grid gap-4 sm:grid-cols-2">
                <TextField
                    id="contactName"
                    label="Người liên hệ"
                    autoComplete="name"
                    placeholder="Nguyễn Văn A"
                    error={errors.contactName?.message}
                    {...register("contactName")}
                />
                <TextField
                    id="addressPhone"
                    label="Số điện thoại"
                    type="tel"
                    inputMode="tel"
                    placeholder="0901234567"
                    error={errors.contactPhone?.message}
                    {...register("contactPhone")}
                />
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
                <TextField id="province" label="Tỉnh/Thành phố" error={errors.province?.message} {...register("province")} />
                <TextField id="district" label="Quận/Huyện" error={errors.district?.message} {...register("district")} />
                <TextField id="ward" label="Phường/Xã" error={errors.ward?.message} {...register("ward")} />
            </div>

            <TextField
                id="addressLine"
                label="Số nhà, tên đường"
                autoComplete="street-address"
                error={errors.addressLine?.message}
                {...register("addressLine")}
            />

            <div className="space-y-2">
                <div className="flex items-center justify-between gap-2">
                    <span className="text-sm font-medium text-slate-900">Toạ độ</span>
                    <Button type="button" variant="outline" size="sm" onClick={handleLocate}>
                        <LocateFixed className="size-4" aria-hidden="true" />
                        Lấy vị trí hiện tại
                    </Button>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                    <TextField
                        id="latitude"
                        label="Vĩ độ (latitude)"
                        inputMode="decimal"
                        placeholder="10.776889"
                        error={errors.latitude?.message}
                        {...register("latitude")}
                    />
                    <TextField
                        id="longtitude"
                        label="Kinh độ (longitude)"
                        inputMode="decimal"
                        placeholder="106.700806"
                        error={errors.longtitude?.message}
                        {...register("longtitude")}
                    />
                </div>
            </div>

            <fieldset className="space-y-3 rounded-lg border border-slate-200 bg-slate-50/60 p-3">
                <legend className="px-1 text-sm font-medium text-slate-900">Mục đích sử dụng</legend>
                {flags.map(({ name, label, hint }) => (
                    <Controller
                        key={name}
                        control={control}
                        name={name}
                        render={({ field }) => (
                            <div className="flex items-start gap-2.5">
                                <Checkbox
                                    id={name}
                                    checked={field.value}
                                    onCheckedChange={(checked) => field.onChange(checked === true)}
                                    className="mt-0.5"
                                />
                                <div className="space-y-0.5">
                                    <Label htmlFor={name} className="cursor-pointer">
                                        {label}
                                    </Label>
                                    <p className="text-xs text-slate-500">{hint}</p>
                                </div>
                            </div>
                        )}
                    />
                ))}
            </fieldset>

            <StageActions isSubmitting={isSubmitting} submitLabel="Lưu và tiếp tục" submittingLabel="Đang lưu..." />
        </form>
    );
}
````

## File: apps/merchant-app/src/components/onboard/stage3-form.tsx
````typescript
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { submitStage3Action } from "@/actions/onboard-actions";
import { FormError, StageActions, TextField } from "@/components/onboard/form-field";
import { businessTypes, merchantKycSchema } from "@/lib/validations/onboard";
import type { MerchantKycDto, StageFormProps } from "@/types/onboard";

export function Stage3Form({ onSuccess, onPending }: StageFormProps) {
    const {
        register,
        handleSubmit,
        setError,
        watch,
        formState: { errors, isSubmitting },
    } = useForm<MerchantKycDto>({
        resolver: zodResolver(merchantKycSchema),
        mode: "onTouched",
        defaultValues: {
            businessType: "INDIVIDUAL",
            legalName: "",
            taxCode: "",
            businessLicenseNo: "",
            businessLicenseUrl: "",
            idNumber: "",
            idFrontUrl: "",
            idBackUrl: "",
        },
    });

    const businessType = watch("businessType");
    const isBusiness = businessType !== "INDIVIDUAL";

    async function onSubmit(values: MerchantKycDto): Promise<void> {
        const result = await submitStage3Action(values);
        if (!result.ok) {
            if (result.code === "pending") {
                onPending();
                return;
            }
            setError("root", { message: result.message });
            toast.error(result.message);
            return;
        }
        toast.success("Đã gửi hồ sơ xác minh!");
        onSuccess();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
            <FormError message={errors.root?.message} />

            <fieldset className="space-y-2">
                <legend className="mb-1.5 text-sm font-medium text-slate-900">Hình thức kinh doanh</legend>
                {businessTypes.map(({ value, label, description }) => (
                    <label
                        key={value}
                        className="group flex cursor-pointer items-center gap-3 rounded-lg border border-slate-200 bg-white p-3 transition-colors duration-150 hover:bg-slate-50 has-[:checked]:border-emerald-600 has-[:checked]:bg-emerald-50/60 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-emerald-600/40"
                    >
                        <input type="radio" value={value} className="sr-only" {...register("businessType")} />
                        <span className="min-w-0 flex-1">
                            <span className="block text-sm font-medium text-slate-900">{label}</span>
                            <span className="block text-xs text-slate-500">{description}</span>
                        </span>
                        <span
                            aria-hidden="true"
                            className="size-4 shrink-0 rounded-full border border-slate-300 bg-white group-has-[:checked]:border-[5px] group-has-[:checked]:border-emerald-600"
                        />
                    </label>
                ))}
            </fieldset>

            <TextField
                id="legalName"
                label={isBusiness ? "Tên pháp lý" : "Họ tên theo giấy tờ"}
                error={errors.legalName?.message}
                {...register("legalName")}
            />

            {isBusiness && (
                <div className="space-y-4">
                    <TextField id="taxCode" label="Mã số thuế" inputMode="numeric" error={errors.taxCode?.message} {...register("taxCode")} />
                    <TextField
                        id="businessLicenseNo"
                        label="Số giấy phép kinh doanh"
                        error={errors.businessLicenseNo?.message}
                        {...register("businessLicenseNo")}
                    />
                    <TextField
                        id="businessLicenseUrl"
                        label="Đường dẫn ảnh giấy phép kinh doanh"
                        type="url"
                        inputMode="url"
                        placeholder="https://..."
                        error={errors.businessLicenseUrl?.message}
                        {...register("businessLicenseUrl")}
                    />
                </div>
            )}

            <TextField
                id="idNumber"
                label="Số CCCD/CMND"
                inputMode="numeric"
                hint="9 hoặc 12 chữ số."
                error={errors.idNumber?.message}
                {...register("idNumber")}
            />
            <TextField
                id="idFrontUrl"
                label="Đường dẫn ảnh mặt trước"
                type="url"
                inputMode="url"
                placeholder="https://..."
                error={errors.idFrontUrl?.message}
                {...register("idFrontUrl")}
            />
            <TextField
                id="idBackUrl"
                label="Đường dẫn ảnh mặt sau"
                type="url"
                inputMode="url"
                placeholder="https://..."
                error={errors.idBackUrl?.message}
                {...register("idBackUrl")}
            />

            <StageActions isSubmitting={isSubmitting} submitLabel="Gửi hồ sơ" submittingLabel="Đang gửi hồ sơ..." />
        </form>
    );
}
````

## File: apps/merchant-app/src/components/providers/auth-provider.tsx
````typescript
"use client";

import type { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";

export function AuthProvider({ children }: { children: ReactNode }) {
    return <SessionProvider basePath="/api/auth">{children} </SessionProvider>
}
````

## File: apps/merchant-app/src/lib/validations/onboard.ts
````typescript
import { z } from "zod";
import type {
    BusinessType,
    MerchantAddressDto,
    MerchantAddressFormValues,
    MerchantDto,
    MerchantKycDto,
} from "@/types/onboard";

const phoneRegex = /^(0|\+84)(3|5|7|8|9)\d{8}$/;

function isHttpUrl(value: string): boolean {
    try {
        const url = new URL(value);
        return url.protocol === "http:" || url.protocol === "https:";
    } catch {
        return false;
    }
}

function isInRange(value: string, min: number, max: number): boolean {
    if (value === "") return false;
    const num = Number(value);
    return Number.isFinite(num) && num >= min && num <= max;
}

const phone = z
    .string()
    .trim()
    .min(1, "Vui lòng nhập số điện thoại")
    .regex(phoneRegex, "Số điện thoại không hợp lệ");

const requiredText = (message: string, max = 120) =>
    z.string().trim().min(1, message).max(max, `Tối đa ${max} ký tự`);

const requiredUrl = (message: string) =>
    z.string().trim().min(1, message).refine(isHttpUrl, "Đường dẫn không hợp lệ");

const optionalUrl = z
    .string()
    .trim()
    .refine((value) => value === "" || isHttpUrl(value), "Đường dẫn không hợp lệ");

/* Stage 1 */
export const merchantSchema = z.object({
    shopName: requiredText("Vui lòng nhập tên cửa hàng", 60).min(3, "Tên cửa hàng tối thiểu 3 ký tự"),
    description: z.string().trim().max(500, "Mô tả tối đa 500 ký tự"),
    logoUrl: optionalUrl,
    bannerUrl: optionalUrl,
    contactEmail: z.string().trim().min(1, "Vui lòng nhập email liên hệ").email("Email không hợp lệ"),
    contactPhone: phone,
}) satisfies z.ZodType<MerchantDto>;

/* Stage 2 */
const addressBase = z.object({
    label: requiredText("Vui lòng nhập tên gợi nhớ (VD: Kho chính)", 40),
    contactName: requiredText("Vui lòng nhập tên người liên hệ", 60),
    contactPhone: phone,
    province: requiredText("Vui lòng nhập tỉnh/thành"),
    district: requiredText("Vui lòng nhập quận/huyện"),
    ward: requiredText("Vui lòng nhập phường/xã"),
    addressLine: requiredText("Vui lòng nhập số nhà, tên đường", 200),
    isPickup: z.boolean(),
    isReturn: z.boolean(),
    isDefault: z.boolean(),
});

export const merchantAddressFormSchema = addressBase.extend({
    latitude: z.string().trim().refine((v) => isInRange(v, -90, 90), "Vĩ độ hợp lệ từ -90 đến 90"),
    longtitude: z.string().trim().refine((v) => isInRange(v, -180, 180), "Kinh độ hợp lệ từ -180 đến 180"),
}) satisfies z.ZodType<MerchantAddressFormValues>;

export const merchantAddressDtoSchema = addressBase.extend({
    latitude: z.number().min(-90).max(90),
    longtitude: z.number().min(-180).max(180),
}) satisfies z.ZodType<MerchantAddressDto>;

/* Stage 3 */
export const businessTypes: { value: BusinessType; label: string; description: string }[] = [
    { value: "INDIVIDUAL", label: "Cá nhân", description: "Bán hàng với tư cách cá nhân." },
    { value: "HOUSEHOLD", label: "Hộ kinh doanh", description: "Có giấy phép hộ kinh doanh." },
    { value: "COMPANY", label: "Doanh nghiệp", description: "Công ty có đăng ký doanh nghiệp." },
];

export const merchantKycSchema = z
    .object({
        businessType: z.enum(["INDIVIDUAL", "HOUSEHOLD", "COMPANY"]),
        legalName: requiredText("Vui lòng nhập họ tên hoặc tên pháp lý"),
        taxCode: z.string().trim().max(20, "Mã số thuế tối đa 20 ký tự"),
        businessLicenseNo: z.string().trim().max(50, "Số giấy phép tối đa 50 ký tự"),
        businessLicenseUrl: optionalUrl,
        idNumber: z.string().trim().regex(/^(\d{9}|\d{12})$/, "Số CCCD/CMND gồm 9 hoặc 12 chữ số"),
        idFrontUrl: requiredUrl("Vui lòng nhập ảnh mặt trước giấy tờ"),
        idBackUrl: requiredUrl("Vui lòng nhập ảnh mặt sau giấy tờ"),
    })
    .superRefine((values, ctx) => {
        if (values.businessType === "INDIVIDUAL") return;
        if (!values.taxCode) {
            ctx.addIssue({ code: "custom", path: ["taxCode"], message: "Vui lòng nhập mã số thuế" });
        }
        if (!values.businessLicenseNo) {
            ctx.addIssue({ code: "custom", path: ["businessLicenseNo"], message: "Vui lòng nhập số giấy phép" });
        }
        if (!values.businessLicenseUrl) {
            ctx.addIssue({ code: "custom", path: ["businessLicenseUrl"], message: "Vui lòng nhập ảnh giấy phép" });
        }
    }) satisfies z.ZodType<MerchantKycDto>;
````

## File: apps/merchant-app/src/lib/backend.ts
````typescript
import { z } from "zod";
import { auth } from "@/auth";

const API_BASE = process.env.MERCHANT_API_URL ?? "http://localhost:8084";

export type BackendFailureKind =
    | "unauthorized"
    | "network"
    | "rate_limit"
    | "server"
    | "invalid_response"
    | "backend";

export interface BackendFailure {
    ok: false;
    kind: BackendFailureKind;
    /** Giá trị field `error` của BE, ví dụ "OnboardPendingException" */
    errorName?: string;
    message?: string;
}

export type BackendResult = { ok: true; data: unknown } | BackendFailure;

const envelopeSchema = z.object({
    data: z.unknown().optional(),
    error: z.string().nullish(),
    message: z.string().nullish(),
    statusCode: z.number().nullish(),
    success: z.boolean().nullish(),
});

interface RequestOptions {
    method: "GET" | "POST";
    body?: unknown;
}

export async function backendRequest(
    path: string,
    { method, body }: RequestOptions,
): Promise<BackendResult> {
    const session = await auth();
    if (!session?.accessToken) return { ok: false, kind: "unauthorized" };

    let response: Response;
    try {
        response = await fetch(`${API_BASE}${path}`, {
            method,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${session.accessToken}`,
            },
            body: body === undefined ? undefined : JSON.stringify(body),
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

    if (response.status === 401) return { ok: false, kind: "unauthorized" };
    if (response.status === 429) return { ok: false, kind: "rate_limit" };

    if (!response.ok || envelope?.success === false) {
        if (envelope?.error) {
            return {
                ok: false,
                kind: "backend",
                errorName: envelope.error,
                message: envelope.message ?? undefined,
            };
        }
        return {
            ok: false,
            kind: response.status >= 500 ? "server" : "backend",
            message: envelope?.message ?? undefined,
        };
    }

    return { ok: true, data: envelope?.data ?? null };
}

export function getBackendFailureMessage(failure: BackendFailure, fallback: string): string {
    switch (failure.kind) {
        case "unauthorized":
            return "Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại";
        case "network":
            return "Không thể kết nối tới máy chủ. Kiểm tra mạng và thử lại";
        case "rate_limit":
            return "Bạn thử quá nhiều lần. Vui lòng đợi một lúc rồi thử lại";
        case "server":
            return "Máy chủ đang gặp sự cố. Vui lòng thử lại sau";
        case "invalid_response":
            return "Máy chủ trả về dữ liệu không hợp lệ. Vui lòng thử lại sau";
        case "backend":
            return failure.message ?? fallback;
    }
}
````

## File: apps/merchant-app/src/lib/constants.ts
````typescript
import type { OnboardStepConfig } from "@/types/onboard";

export const onboardSteps: OnboardStepConfig[] = [
    { id: "shop", label: "Cửa hàng", description: "Giới thiệu cửa hàng và thông tin liên hệ." },
    { id: "address", label: "Địa chỉ", description: "Nơi lấy hàng và nhận hàng hoàn của cửa hàng." },
    { id: "kyc", label: "Xác minh", description: "Xác minh danh tính để bắt đầu bán hàng." },
];
````

## File: apps/merchant-app/src/lib/merchant-api.ts
````typescript
import { cache } from "react";
import { z } from "zod";
import { backendRequest, getBackendFailureMessage } from "@/lib/backend";
import type { ActionResult, MerchantState, OnboardStage } from "@/types/onboard";

const merchantProfileSchema = z.object({
    shopName: z.string().min(1),
    description: z.string().nullish(),
    logoUrl: z.string().nullish(),
    bannerUrl: z.string().nullish(),
    contactEmail: z.string().nullish(),
    contactPhone: z.string().nullish(),
});

/**
 * GET /merchant. Bọc bằng cache() để layout và page trong cùng một request
 * chỉ gọi backend một lần.
 */
export const getMerchantState = cache(async (): Promise<MerchantState> => {
    const result = await backendRequest("/merchant", { method: "GET" });

    if (result.ok) {
        const parsed = merchantProfileSchema.safeParse(result.data);
        if (!parsed.success) {
            return {
                status: "error",
                message: getBackendFailureMessage({ ok: false, kind: "invalid_response" }, ""),
            };
        }
        return { status: "active", merchant: parsed.data };
    }

    if (result.kind === "backend") {
        if (result.errorName === "OnboardPendingException") return { status: "pending" };
        if (result.errorName === "InvalidMerchantException") return { status: "not_onboarded" };
    }

    return {
        status: "error",
        message: getBackendFailureMessage(result, "Không thể tải thông tin cửa hàng"),
    };
});

export async function postOnboardStage(stage: OnboardStage, payload: unknown): Promise<ActionResult> {
    const result = await backendRequest(`/merchant/onboard/${stage}`, { method: "POST", body: payload });
    if (result.ok) return { ok: true };

    if (result.kind === "unauthorized") {
        return { ok: false, code: "unauthorized", message: getBackendFailureMessage(result, "") };
    }
    if (result.kind === "backend" && result.errorName === "OnboardPendingException") {
        return { ok: false, code: "pending", message: "Hồ sơ của bạn đang được thụ lý" };
    }
    return {
        ok: false,
        message: getBackendFailureMessage(result, "Không thể lưu thông tin. Vui lòng kiểm tra lại và thử lại"),
    };
}
````

## File: apps/merchant-app/src/lib/utils.ts
````typescript
import type { Product, ProductVariant } from "@/types/merchant";

export function getDefaultVariant(product: Product): ProductVariant {
    return product.variants.find((v) => v.isDefault) ?? product.variants[0];
}
````

## File: apps/merchant-app/src/types/dashboard.ts
````typescript
export type DashboardStatId = "revenue" | "orders" | "listings" | "rating";

export interface DashboardStat {
    id: DashboardStatId;
    label: string;
    value: string;
    hint: string;
}

export type OrderStatus = "pending" | "shipped" | "completed";

export interface RecentOrder {
    id: string;
    code: string;
    buyerName: string;
    productTitle: string;
    total: number;
    status: OrderStatus;
    createdLabel: string;
}
````

## File: apps/merchant-app/src/types/merchant.ts
````typescript
export type ProductCondition = "new" | "like-new" | "well-used";

export interface ProductVariant {
    id: string;
    name: string;
    sku: string;
    price: number;
    stock: number;
    colorHex?: string;
    isDefault: boolean;
}

export interface ProductCategory {
    id: string;
    name: string;
}

export interface Product {
    id: string;
    title: string;
    categoryId: string;
    image: string;
    condition: ProductCondition;
    location: string;
    sold: number;
    /** Luôn có ít nhất 1 variant (kiểu tuple non-empty). */
    variants: [ProductVariant, ...ProductVariant[]];
}

export interface Merchant {
    id: string;
    name: string;
    handle: string;
    avatar: string;
    banner: string;
    bio: string;
    location: string;
    rating: number;
    reviewCount: number;
    totalSales: number;
    responseTime: string;
    joinedAt: string;
    verified: boolean;
}
````

## File: apps/merchant-app/src/types/onboard.ts
````typescript
export interface MerchantProfile {
    shopName: string;
    description?: string | null;
    logoUrl?: string | null;
    bannerUrl?: string | null;
    contactEmail?: string | null;
    contactPhone?: string | null;
}

export type MerchantState =
    | { status: "active"; merchant: MerchantProfile }
    | { status: "pending" }
    | { status: "not_onboarded" }
    | { status: "error"; message: string };

export interface MerchantDto {
    shopName: string;
    description: string;
    logoUrl: string;
    bannerUrl: string;
    contactEmail: string;
    contactPhone: string;
}

export interface MerchantAddressDto {
    label: string;
    contactName: string;
    contactPhone: string;
    province: string;
    district: string;
    ward: string;
    addressLine: string;
    latitude: number;
    longtitude: number;
    isPickup: boolean;
    isReturn: boolean;
    isDefault: boolean;
}

/** Form giữ toạ độ dạng chuỗi để nhập liệu; chuyển sang số trước khi gửi. */
export type MerchantAddressFormValues = Omit<MerchantAddressDto, "latitude" | "longtitude"> & {
    latitude: string;
    longtitude: string;
};

export type BusinessType = "INDIVIDUAL" | "HOUSEHOLD" | "COMPANY";

export interface MerchantKycDto {
    businessType: BusinessType;
    legalName: string;
    taxCode: string;
    businessLicenseNo: string;
    businessLicenseUrl: string;
    idNumber: string;
    idFrontUrl: string;
    idBackUrl: string;
}

export type OnboardStage = "stage1" | "stage2" | "stage3";

export interface ActionFailure {
    ok: false;
    message: string;
    /** pending: hồ sơ đã nộp và đang thụ lý. unauthorized: hết phiên đăng nhập. */
    code?: "pending" | "unauthorized";
}

export type ActionResult = { ok: true } | ActionFailure;

export interface OnboardStepConfig {
    id: string;
    label: string;
    description: string;
}

export interface StageFormProps {
    onSuccess: () => void;
    onPending: () => void;
}
````

## File: apps/merchant-app/src/auth.ts
````typescript
import NextAuth from "next-auth";
import { sharedAuthConfig } from "@freemarket/auth-config";

export const { auth } = NextAuth({
    ...sharedAuthConfig,
    providers: [],
});
````

## File: apps/merchant-app/src/proxy.ts
````typescript
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
````

## File: apps/merchant-app/.gitignore
````
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.*
.yarn/*
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/versions

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.pnpm-debug.log*

# env files (can opt-in for committing if needed)
.env*

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
````

## File: apps/merchant-app/AGENTS.md
````markdown
<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
````

## File: apps/merchant-app/eslint.config.mjs
````javascript
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
````

## File: apps/merchant-app/postcss.config.mjs
````javascript
const config = { plugins: { "@tailwindcss/postcss": {} } };
export default config;
````

## File: apps/merchant-app/README.md
````markdown
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
````

## File: apps/shop-app/public/file.svg
````xml
<svg fill="none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 13.5V5.41a1 1 0 0 0-.3-.7L9.8.29A1 1 0 0 0 9.08 0H1.5v13.5A2.5 2.5 0 0 0 4 16h8a2.5 2.5 0 0 0 2.5-2.5m-1.5 0v-7H8v-5H3v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1M9.5 5V2.12L12.38 5zM5.13 5h-.62v1.25h2.12V5zm-.62 3h7.12v1.25H4.5zm.62 3h-.62v1.25h7.12V11z" clip-rule="evenodd" fill="#666" fill-rule="evenodd"/></svg>
````

## File: apps/shop-app/public/globe.svg
````xml
<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g clip-path="url(#a)"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.27 14.1a6.5 6.5 0 0 0 3.67-3.45q-1.24.21-2.7.34-.31 1.83-.97 3.1M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.48-1.52a7 7 0 0 1-.96 0H7.5a4 4 0 0 1-.84-1.32q-.38-.89-.63-2.08a40 40 0 0 0 3.92 0q-.25 1.2-.63 2.08a4 4 0 0 1-.84 1.31zm2.94-4.76q1.66-.15 2.95-.43a7 7 0 0 0 0-2.58q-1.3-.27-2.95-.43a18 18 0 0 1 0 3.44m-1.27-3.54a17 17 0 0 1 0 3.64 39 39 0 0 1-4.3 0 17 17 0 0 1 0-3.64 39 39 0 0 1 4.3 0m1.1-1.17q1.45.13 2.69.34a6.5 6.5 0 0 0-3.67-3.44q.65 1.26.98 3.1M8.48 1.5l.01.02q.41.37.84 1.31.38.89.63 2.08a40 40 0 0 0-3.92 0q.25-1.2.63-2.08a4 4 0 0 1 .85-1.32 7 7 0 0 1 .96 0m-2.75.4a6.5 6.5 0 0 0-3.67 3.44 29 29 0 0 1 2.7-.34q.31-1.83.97-3.1M4.58 6.28q-1.66.16-2.95.43a7 7 0 0 0 0 2.58q1.3.27 2.95.43a18 18 0 0 1 0-3.44m.17 4.71q-1.45-.12-2.69-.34a6.5 6.5 0 0 0 3.67 3.44q-.65-1.27-.98-3.1" fill="#666"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></svg>
````

## File: apps/shop-app/public/next.svg
````xml
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 394 80"><path fill="#000" d="M262 0h68.5v12.7h-27.2v66.6h-13.6V12.7H262V0ZM149 0v12.7H94v20.4h44.3v12.6H94v21h55v12.6H80.5V0h68.7zm34.3 0h-17.8l63.8 79.4h17.9l-32-39.7 32-39.6h-17.9l-23 28.6-23-28.6zm18.3 56.7-9-11-27.1 33.7h17.8l18.3-22.7z"/><path fill="#000" d="M81 79.3 17 0H0v79.3h13.6V17l50.2 62.3H81Zm252.6-.4c-1 0-1.8-.4-2.5-1s-1.1-1.6-1.1-2.6.3-1.8 1-2.5 1.6-1 2.6-1 1.8.3 2.5 1a3.4 3.4 0 0 1 .6 4.3 3.7 3.7 0 0 1-3 1.8zm23.2-33.5h6v23.3c0 2.1-.4 4-1.3 5.5a9.1 9.1 0 0 1-3.8 3.5c-1.6.8-3.5 1.3-5.7 1.3-2 0-3.7-.4-5.3-1s-2.8-1.8-3.7-3.2c-.9-1.3-1.4-3-1.4-5h6c.1.8.3 1.6.7 2.2s1 1.2 1.6 1.5c.7.4 1.5.5 2.4.5 1 0 1.8-.2 2.4-.6a4 4 0 0 0 1.6-1.8c.3-.8.5-1.8.5-3V45.5zm30.9 9.1a4.4 4.4 0 0 0-2-3.3 7.5 7.5 0 0 0-4.3-1.1c-1.3 0-2.4.2-3.3.5-.9.4-1.6 1-2 1.6a3.5 3.5 0 0 0-.3 4c.3.5.7.9 1.3 1.2l1.8 1 2 .5 3.2.8c1.3.3 2.5.7 3.7 1.2a13 13 0 0 1 3.2 1.8 8.1 8.1 0 0 1 3 6.5c0 2-.5 3.7-1.5 5.1a10 10 0 0 1-4.4 3.5c-1.8.8-4.1 1.2-6.8 1.2-2.6 0-4.9-.4-6.8-1.2-2-.8-3.4-2-4.5-3.5a10 10 0 0 1-1.7-5.6h6a5 5 0 0 0 3.5 4.6c1 .4 2.2.6 3.4.6 1.3 0 2.5-.2 3.5-.6 1-.4 1.8-1 2.4-1.7a4 4 0 0 0 .8-2.4c0-.9-.2-1.6-.7-2.2a11 11 0 0 0-2.1-1.4l-3.2-1-3.8-1c-2.8-.7-5-1.7-6.6-3.2a7.2 7.2 0 0 1-2.4-5.7 8 8 0 0 1 1.7-5 10 10 0 0 1 4.3-3.5c2-.8 4-1.2 6.4-1.2 2.3 0 4.4.4 6.2 1.2 1.8.8 3.2 2 4.3 3.4 1 1.4 1.5 3 1.5 5h-5.8z"/></svg>
````

## File: apps/shop-app/public/vercel.svg
````xml
<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1155 1000"><path d="m577.3 0 577.4 1000H0z" fill="#fff"/></svg>
````

## File: apps/shop-app/public/window.svg
````xml
<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 2.5h13v10a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1zM0 1h16v11.5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 0 12.5zm3.75 4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M7 4.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m1.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5" fill="#666"/></svg>
````

## File: apps/shop-app/src/app/page.tsx
````typescript
import type { Metadata } from "next";
import { PackageSearch } from "lucide-react";
import { CategoryBar } from "../components/home/category-bar";
import { SortTabs } from "../components/home/sort-tabs";
import { ProductCard } from "../components/product/product-card";
import { EmptyState } from "../components/shared/empty-state";
import type { SortOption } from "@/types";
import { categories, getProducts } from "@/lib/mock-data";
export const metadata: Metadata = {
  title: "Trang chủ",
};

interface HomePageProps {
  searchParams: Promise<{ category?: string; sort?: string }>;
}

const validSorts: SortOption[] = ["newest", "price-asc", "price-desc"];

function parseSort(value: string | undefined): SortOption {
  return validSorts.find((option) => option === value) ?? "newest";
}

export default async function HomePage({ searchParams }: HomePageProps) {
  const params = await searchParams;
  const activeCategory = categories.find((c) => c.id === params.category)?.id;
  const sort = parseSort(params.sort);
  const items = getProducts({ category: activeCategory, sort });
  const activeLabel = categories.find((c) => c.id === activeCategory)?.label;

  return (
    <div className="space-y-4">
      <CategoryBar categories={categories} activeCategory={activeCategory} sort={sort} />

      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <h1 className="text-lg font-bold text-slate-900">
            {activeLabel ?? "Tin đăng mới nhất"}
          </h1>
          <p className="text-sm text-slate-500">{items.length} sản phẩm</p>
        </div>
        <SortTabs activeSort={sort} category={activeCategory} />
      </div>

      {items.length === 0 ? (
        <EmptyState
          icon={PackageSearch}
          title="Chưa có sản phẩm nào"
          description="Danh mục này hiện chưa có tin đăng. Hãy xem các danh mục khác hoặc quay lại sau."
          actionLabel="Xem tất cả sản phẩm"
          actionHref="/"
        />
      ) : (
        <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
          {items.map((product, index) => (
            <li key={product.id}>
              <ProductCard product={product} priority={index < 4} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
````

## File: apps/shop-app/src/components/layout/cart-link.tsx
````typescript
"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useHasMounted } from "../../hooks/use-has-mounted";
import { selectCartCount, useCartStore } from "../../stores/use-cart-store";

export function CartLink() {
  const hasMounted = useHasMounted();
  const count = useCartStore(selectCartCount);
  const showBadge = hasMounted && count > 0;

  return (
    <Link
      href="/cart"
      aria-label={showBadge ? `Giỏ hàng, ${count} sản phẩm` : "Giỏ hàng"}
      className="relative inline-flex size-10 items-center justify-center rounded-lg text-slate-700 transition-colors duration-150 hover:bg-slate-100"
    >
      <ShoppingCart className="size-5" aria-hidden="true" />
      {showBadge && (
        <span className="absolute right-0.5 top-0.5 flex min-w-4 items-center justify-center rounded-full bg-emerald-600 px-1 text-[10px] font-semibold leading-4 text-white">
          {count > 99 ? "99+" : count}
        </span>
      )}
    </Link>
  );
}
````

## File: apps/shop-app/src/components/layout/site-footer.tsx
````typescript
import Link from "next/link";

export function SiteFooter() {
    return (
        <footer className="hidden border-t border-slate-200 bg-white md:block">
            <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-6 text-sm text-slate-500">
                <p>© 2026 FreeMarket. Chợ mua bán giữa người với người.</p>
                <nav aria-label="Liên kết chân trang" className="flex gap-4">
                    <Link href="/help" className="transition-colors duration-150 hover:text-slate-900">
                        Trợ giúp
                    </Link>
                    <Link href="/terms" className="transition-colors duration-150 hover:text-slate-900">
                        Điều khoản
                    </Link>
                    <Link href="/privacy" className="transition-colors duration-150 hover:text-slate-900">
                        Bảo mật
                    </Link>
                </nav>
            </div>
        </footer>
    );
}
````

## File: apps/shop-app/src/components/providers/auth-provider.tsx
````typescript
"use client";

import type { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";

export function AuthProvider({ children }: { children: ReactNode }) {
    return <SessionProvider basePath="/api/auth">{children} </SessionProvider>
}
````

## File: apps/shop-app/src/hooks/use-has-mounted.ts
````typescript
"use client";

import { useSyncExternalStore } from "react";

const subscribe = (): (() => void) => () => { };

export function useHasMounted(): boolean {
    return useSyncExternalStore(
        subscribe,
        () => true,
        () => false,
    );
}
````

## File: apps/shop-app/src/lib/mock-data.ts
````typescript
import { Category, Seller, Product, ProductQuery } from "@/types";
import { Smartphone, Laptop, Headphones, Camera, Shirt, Home, Bike } from "lucide-react";

const img = (id: string): string =>
    `https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&q=80`;

export const categories: Category[] = [
    { id: "phone", label: "Điện thoại", icon: Smartphone },
    { id: "laptop", label: "Laptop", icon: Laptop },
    { id: "audio", label: "Âm thanh", icon: Headphones },
    { id: "camera", label: "Máy ảnh", icon: Camera },
    { id: "fashion", label: "Thời trang", icon: Shirt },
    { id: "home", label: "Nhà cửa", icon: Home },
    { id: "bike", label: "Xe đạp", icon: Bike },
];

export const sellers: Record<string, Seller> = {
    linh: { id: "s1", name: "Linh Store", rating: 4.9, totalSales: 1280, responseTime: "Trả lời trong 5 phút", verified: true },
    minh: { id: "s2", name: "Minh Tech", rating: 4.7, totalSales: 642, responseTime: "Trả lời trong 15 phút", verified: true },
    hoa: { id: "s3", name: "Hoa Vintage", rating: 4.8, totalSales: 311, responseTime: "Trả lời trong 1 giờ", verified: false },
    nam: { id: "s4", name: "Nam Cycle", rating: 4.6, totalSales: 98, responseTime: "Trả lời trong 3 giờ", verified: false },
};

export const products: Product[] = [
    {
        id: "p1",
        title: "Tai nghe over-ear chống ồn chủ động",
        description: "Tai nghe không dây, pin 30 giờ, chống ồn chủ động. Đầy đủ hộp, cáp sạc và túi đựng.",
        price: 1850000,
        originalPrice: 3200000,
        images: [img("photo-1505740420928-5e560c06d30e")],
        category: "audio",
        condition: "like-new",
        location: "Quận 1, TP.HCM",
        stock: 1,
        tags: ["bluetooth", "chống ồn"],
        colors: ["Đen", "Bạc"],
        postedLabel: "2 giờ trước",
        createdAt: "2026-10-06T08:00:00Z",
        seller: sellers.minh,
    },
    {
        id: "p2",
        title: "Đồng hồ cơ dây da phong cách tối giản",
        description: "Đồng hồ automatic mặt trắng, dây da nâu, chạy chuẩn, bảo hành shop 3 tháng.",
        price: 2400000,
        images: [img("photo-1523275335684-37898b6baf30")],
        category: "fashion",
        condition: "new",
        location: "Hoàn Kiếm, Hà Nội",
        stock: 3,
        tags: ["automatic", "dây da"],
        colors: ["Nâu"],
        postedLabel: "3 giờ trước",
        createdAt: "2026-10-06T07:00:00Z",
        seller: sellers.linh,
    },
    {
        id: "p3",
        title: "Giày sneaker đỏ size 42",
        description: "Giày mang vài lần, đế còn mới, đã vệ sinh sạch. Có hộp gốc.",
        price: 950000,
        originalPrice: 2100000,
        images: [img("photo-1542291026-7eec264c27ff")],
        category: "fashion",
        condition: "like-new",
        location: "Hải Châu, Đà Nẵng",
        stock: 1,
        tags: ["sneaker", "size 42"],
        colors: ["Đỏ"],
        postedLabel: "5 giờ trước",
        createdAt: "2026-10-06T05:00:00Z",
        seller: sellers.hoa,
    },
    {
        id: "p4",
        title: "Máy ảnh film compact kèm ống kính 50mm",
        description: "Máy ảnh film hoạt động tốt, kèm dây đeo và bao da. Phù hợp người mới chơi film.",
        price: 3600000,
        images: [img("photo-1526170375885-4d8ecf77b99f")],
        category: "camera",
        condition: "well-used",
        location: "Quận 3, TP.HCM",
        stock: 1,
        tags: ["film", "vintage"],
        colors: ["Đen"],
        postedLabel: "Hôm qua",
        createdAt: "2026-10-05T10:00:00Z",
        seller: sellers.minh,
    },
    {
        id: "p5",
        title: "Laptop 13 inch mỏng nhẹ, RAM 16GB",
        description: "Pin còn tốt, máy nguyên zin, không trầy xước đáng kể. Tặng kèm balo và chuột.",
        price: 14500000,
        originalPrice: 22000000,
        images: [img("photo-1517336714731-489689fd1ca8")],
        category: "laptop",
        condition: "like-new",
        location: "Cầu Giấy, Hà Nội",
        stock: 2,
        tags: ["16GB", "SSD 512GB"],
        colors: ["Bạc", "Xám"],
        postedLabel: "Hôm qua",
        createdAt: "2026-10-05T08:00:00Z",
        seller: sellers.linh,
    },
    {
        id: "p6",
        title: "Điện thoại thông minh 128GB, fullbox",
        description: "Máy chính hãng, pin 92%, màn hình không xước. Fullbox, bảo hành 1 tháng.",
        price: 6800000,
        originalPrice: 11900000,
        images: [img("photo-1511707171634-5f897ff02aa9")],
        category: "phone",
        condition: "like-new",
        location: "Thủ Đức, TP.HCM",
        stock: 4,
        tags: ["128GB", "fullbox"],
        colors: ["Đen", "Trắng", "Xanh"],
        postedLabel: "2 ngày trước",
        createdAt: "2026-10-04T09:00:00Z",
        seller: sellers.minh,
    },
    {
        id: "p7",
        title: "Sofa vải 2 chỗ màu xám",
        description: "Sofa gọn nhẹ, vải bọc dễ giặt, khung gỗ chắc chắn. Người mua tự vận chuyển hoặc thoả thuận ship.",
        price: 2900000,
        images: [img("photo-1555041469-a586c61ea9bc")],
        category: "home",
        condition: "well-used",
        location: "Bình Thạnh, TP.HCM",
        stock: 1,
        tags: ["sofa", "phòng khách"],
        colors: ["Xám"],
        postedLabel: "2 ngày trước",
        createdAt: "2026-10-04T06:00:00Z",
        seller: sellers.hoa,
    },
    {
        id: "p8",
        title: "Xe đạp thành phố khung nhôm",
        description: "Xe đạp 7 tốc độ, phanh đĩa, đã thay lốp mới. Chạy êm, phù hợp đi làm hằng ngày.",
        price: 4200000,
        originalPrice: 5900000,
        images: [img("photo-1485965120184-e220f721d03e")],
        category: "bike",
        condition: "like-new",
        location: "Ninh Kiều, Cần Thơ",
        stock: 1,
        tags: ["7 tốc độ", "phanh đĩa"],
        colors: ["Xanh navy"],
        postedLabel: "3 ngày trước",
        createdAt: "2026-10-03T09:00:00Z",
        seller: sellers.nam,
    },
    {
        id: "p9",
        title: "Balo du lịch chống nước 25L",
        description: "Balo còn rất mới, nhiều ngăn, có ngăn laptop 15 inch. Chưa qua sử dụng.",
        price: 420000,
        originalPrice: 650000,
        images: [img("photo-1553062407-98eeb64c6a62")],
        category: "fashion",
        condition: "new",
        location: "Quận 7, TP.HCM",
        stock: 6,
        tags: ["chống nước", "25L"],
        colors: ["Đen", "Be"],
        postedLabel: "3 ngày trước",
        createdAt: "2026-10-03T07:00:00Z",
        seller: sellers.linh,
    },
    {
        id: "p10",
        title: "Kính mát gọng nhựa phân cực",
        description: "Kính chống tia UV400, tròng phân cực, kèm hộp và khăn lau.",
        price: 380000,
        images: [img("photo-1572635196237-14b3f281503f")],
        category: "fashion",
        condition: "new",
        location: "Hoàn Kiếm, Hà Nội",
        stock: 8,
        tags: ["UV400", "phân cực"],
        colors: ["Đen"],
        postedLabel: "4 ngày trước",
        createdAt: "2026-10-02T09:00:00Z",
        seller: sellers.hoa,
    },
    {
        id: "p11",
        title: "Laptop văn phòng 15 inch cũ giá rẻ",
        description: "Máy chạy ổn định cho học tập, văn phòng. Pin dùng được khoảng 3 giờ, có vài vết xước nhỏ.",
        price: 5200000,
        images: [img("photo-1496181133206-80ce9b88a853")],
        category: "laptop",
        condition: "well-used",
        location: "Hải Châu, Đà Nẵng",
        stock: 2,
        tags: ["văn phòng", "SSD"],
        colors: ["Xám"],
        postedLabel: "5 ngày trước",
        createdAt: "2026-10-01T09:00:00Z",
        seller: sellers.minh,
    },
];

export function getProducts({ category, sort = "newest" }: ProductQuery = {}): Product[] {
    const filtered = category ? products.filter((p) => p.category === category) : [...products];

    return filtered.sort((a, b) => {
        if (sort === "price-asc") return a.price - b.price;
        if (sort === "price-desc") return b.price - a.price;
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });
}
````

## File: apps/shop-app/src/lib/navigation.ts
````typescript
import { NavItem, AppMode } from "@/types";
import {
    ClipboardList,
    Home,
    LayoutDashboard,
    MessageCircle,
    Package,
    PlusCircle,
    Search,
    User,
} from "lucide-react";

export const buyerNav: NavItem[] = [
    { label: "Trang chủ", href: "/", icon: Home, exact: true },
    { label: "Tìm kiếm", href: "/search", icon: Search },
    { label: "Đăng bán", href: "/sell", icon: PlusCircle, highlight: true },
    { label: "Tin nhắn", href: "/messages", icon: MessageCircle },
    { label: "Cá nhân", href: "/profile", icon: User },
];

export const merchantNav: NavItem[] = [
    { label: "Tổng quan", href: "/studio", icon: LayoutDashboard, exact: true },
    { label: "Tin đăng", href: "/studio/listings", icon: Package },
    { label: "Đăng bán", href: "/sell", icon: PlusCircle, highlight: true },
    { label: "Đơn hàng", href: "/studio/orders", icon: ClipboardList },
    { label: "Tin nhắn", href: "/messages", icon: MessageCircle },
];

export function getAppMode(pathname: string): AppMode {
    return pathname.startsWith("/studio") || pathname.startsWith("/sell")
        ? "merchant"
        : "buyer";
}

export function getNavItems(mode: AppMode): NavItem[] {
    return mode === "merchant" ? merchantNav : buyerNav;
}

export function isNavActive(pathname: string, item: NavItem): boolean {
    if (item.exact) return pathname === item.href;
    return pathname === item.href || pathname.startsWith(`${item.href}/`);
}
````

## File: apps/shop-app/src/stores/use-cart-store.ts
````typescript
import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CartItem } from "@/types";

interface CartState {
    items: CartItem[];
    addItem: (item: Omit<CartItem, "quantity">, quantity?: number) => void;
    removeItem: (productId: string, color?: string) => void;
    updateQuantity: (productId: string, quantity: number, color?: string) => void;
    clear: () => void;
}

const isSameLine = (item: CartItem, productId: string, color?: string): boolean =>
    item.productId === productId && item.color === color;

export const useCartStore = create<CartState>()(
    persist(
        (set) => ({
            items: [],
            addItem: (item, quantity = 1) =>
                set((state) => {
                    const exists = state.items.some((i) => isSameLine(i, item.productId, item.color));
                    if (exists) {
                        return {
                            items: state.items.map((i) =>
                                isSameLine(i, item.productId, item.color)
                                    ? { ...i, quantity: i.quantity + quantity }
                                    : i,
                            ),
                        };
                    }
                    return { items: [...state.items, { ...item, quantity }] };
                }),
            removeItem: (productId, color) =>
                set((state) => ({
                    items: state.items.filter((i) => !isSameLine(i, productId, color)),
                })),
            updateQuantity: (productId, quantity, color) =>
                set((state) => ({
                    items:
                        quantity <= 0
                            ? state.items.filter((i) => !isSameLine(i, productId, color))
                            : state.items.map((i) =>
                                isSameLine(i, productId, color) ? { ...i, quantity } : i,
                            ),
                })),
            clear: () => set({ items: [] }),
        }),
        { name: "freemarket-cart" },
    ),
);

export const selectCartCount = (state: CartState): number =>
    state.items.reduce((total, item) => total + item.quantity, 0);
````

## File: apps/shop-app/src/stores/use-wishlist-store.ts
````typescript
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface WishlistState {
    ids: string[];
    toggle: (productId: string) => void;
    clear: () => void;
}

export const useWishlistStore = create<WishlistState>()(
    persist(
        (set) => ({
            ids: [],
            toggle: (productId) =>
                set((state) => ({
                    ids: state.ids.includes(productId)
                        ? state.ids.filter((id) => id !== productId)
                        : [...state.ids, productId],
                })),
            clear: () => set({ ids: [] }),
        }),
        { name: "freemarket-wishlist" },
    ),
);
````

## File: apps/shop-app/src/types/index.ts
````typescript
import type { LucideIcon } from "lucide-react";

export type AppMode = "buyer" | "merchant";

export interface NavItem {
    label: string;
    href: string;
    icon: LucideIcon;
    exact?: boolean;
    highlight?: boolean;
}

export interface CartItem {
    productId: string;
    title: string;
    price: number;
    image: string;
    sellerName: string;
    color?: string;
    quantity: number;
}

export type ProductCondition = "new" | "like-new" | "well-used";

export type SortOption = "newest" | "price-asc" | "price-desc";

export interface Category {
    id: string;
    label: string;
    icon: LucideIcon;
}

export interface Seller {
    id: string;
    name: string;
    rating: number;
    totalSales: number;
    responseTime: string;
    verified: boolean;
}

export interface Product {
    id: string;
    title: string;
    description: string;
    price: number;
    originalPrice?: number;
    images: string[];
    category: string;
    condition: ProductCondition;
    location: string;
    stock: number;
    tags: string[];
    colors: string[];
    postedLabel: string;
    createdAt: string;
    seller: Seller;
}

export interface ProductQuery {
    category?: string;
    sort?: SortOption;
}
````

## File: apps/shop-app/.gitignore
````
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.*
.yarn/*
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/versions

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.pnpm-debug.log*

# env files (can opt-in for committing if needed)
.env*

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
````

## File: apps/shop-app/AGENTS.md
````markdown
<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
````

## File: apps/shop-app/eslint.config.mjs
````javascript
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
````

## File: apps/shop-app/postcss.config.mjs
````javascript
const config = { plugins: { "@tailwindcss/postcss": {} } };
export default config;
````

## File: apps/shop-app/README.md
````markdown
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
````

## File: apps/shop-app/tsconfig.json
````json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".next/dev/types/**/*.ts",
    "**/*.mts"
  ],
  "exclude": ["node_modules"]
}
````

## File: packages/auth-config/src/index.ts
````typescript
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
````

## File: packages/auth-config/src/types.d.ts
````typescript
// packages/auth-config/src/types.d.ts
import "next-auth";
import "next-auth/jwt";

declare module "next-auth" {
    interface User {
        accessToken?: string;
        refreshToken?: string;
        tokenType?: string;
        accessTokenExpires?: number;
    }
    interface Session {
        accessToken?: string;
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        accessToken?: string;
        refreshToken?: string;
        tokenType?: string;
        accessTokenExpires?: number;
    }
}
````

## File: packages/auth-config/package.json
````json
{
    "name": "@freemarket/auth-config",
    "version": "0.0.0",
    "private": true,
    "exports": {
        ".": "./src/index.ts"
    },
    "dependencies": {
        "next-auth": "5.0.0-beta.32"
    }
}
````

## File: packages/ui/src/alert-dialog.tsx
````typescript
"use client"

import * as React from "react"
import { AlertDialog as AlertDialogPrimitive } from "@base-ui/react/alert-dialog"
import { cn } from "@freemarket/utils"

import { Button } from "./button"

function AlertDialog({ ...props }: AlertDialogPrimitive.Root.Props) {
  return <AlertDialogPrimitive.Root data-slot="alert-dialog" {...props} />
}

function AlertDialogTrigger({ ...props }: AlertDialogPrimitive.Trigger.Props) {
  return (
    <AlertDialogPrimitive.Trigger data-slot="alert-dialog-trigger" {...props} />
  )
}

function AlertDialogPortal({ ...props }: AlertDialogPrimitive.Portal.Props) {
  return (
    <AlertDialogPrimitive.Portal data-slot="alert-dialog-portal" {...props} />
  )
}

function AlertDialogOverlay({
  className,
  ...props
}: AlertDialogPrimitive.Backdrop.Props) {
  return (
    <AlertDialogPrimitive.Backdrop
      data-slot="alert-dialog-overlay"
      className={cn(
        "fixed inset-0 isolate z-50 bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-xs data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0",
        className
      )}
      {...props}
    />
  )
}

function AlertDialogContent({
  className,
  size = "default",
  ...props
}: AlertDialogPrimitive.Popup.Props & {
  size?: "default" | "sm"
}) {
  return (
    <AlertDialogPortal>
      <AlertDialogOverlay />
      <AlertDialogPrimitive.Popup
        data-slot="alert-dialog-content"
        data-size={size}
        className={cn(
          "group/alert-dialog-content fixed top-1/2 left-1/2 z-50 grid w-full -translate-x-1/2 -translate-y-1/2 gap-4 rounded-xl bg-popover p-4 text-popover-foreground ring-1 ring-foreground/10 duration-100 outline-none data-[size=default]:max-w-xs data-[size=sm]:max-w-xs data-[size=default]:sm:max-w-sm data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
          className
        )}
        {...props}
      />
    </AlertDialogPortal>
  )
}

function AlertDialogHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-dialog-header"
      className={cn(
        "grid grid-rows-[auto_1fr] place-items-center gap-1.5 text-center has-data-[slot=alert-dialog-media]:grid-rows-[auto_auto_1fr] has-data-[slot=alert-dialog-media]:gap-x-4 sm:group-data-[size=default]/alert-dialog-content:place-items-start sm:group-data-[size=default]/alert-dialog-content:text-left sm:group-data-[size=default]/alert-dialog-content:has-data-[slot=alert-dialog-media]:grid-rows-[auto_1fr]",
        className
      )}
      {...props}
    />
  )
}

function AlertDialogFooter({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-dialog-footer"
      className={cn(
        "-mx-4 -mb-4 flex flex-col-reverse gap-2 rounded-b-xl border-t bg-muted/50 p-4 group-data-[size=sm]/alert-dialog-content:grid group-data-[size=sm]/alert-dialog-content:grid-cols-2 sm:flex-row sm:justify-end",
        className
      )}
      {...props}
    />
  )
}

function AlertDialogMedia({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-dialog-media"
      className={cn(
        "mb-2 inline-flex size-10 items-center justify-center rounded-md bg-muted sm:group-data-[size=default]/alert-dialog-content:row-span-2 *:[svg:not([class*='size-'])]:size-6",
        className
      )}
      {...props}
    />
  )
}

function AlertDialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Title>) {
  return (
    <AlertDialogPrimitive.Title
      data-slot="alert-dialog-title"
      className={cn(
        "font-heading text-base font-medium sm:group-data-[size=default]/alert-dialog-content:group-has-data-[slot=alert-dialog-media]/alert-dialog-content:col-start-2",
        className
      )}
      {...props}
    />
  )
}

function AlertDialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Description>) {
  return (
    <AlertDialogPrimitive.Description
      data-slot="alert-dialog-description"
      className={cn(
        "text-sm text-balance text-muted-foreground md:text-pretty *:[a]:underline *:[a]:underline-offset-3 *:[a]:hover:text-foreground",
        className
      )}
      {...props}
    />
  )
}

function AlertDialogAction({
  className,
  ...props
}: React.ComponentProps<typeof Button>) {
  return (
    <Button
      data-slot="alert-dialog-action"
      className={cn(className)}
      {...props}
    />
  )
}

function AlertDialogCancel({
  className,
  variant = "outline",
  size = "default",
  ...props
}: AlertDialogPrimitive.Close.Props &
  Pick<React.ComponentProps<typeof Button>, "variant" | "size">) {
  return (
    <AlertDialogPrimitive.Close
      data-slot="alert-dialog-cancel"
      className={cn(className)}
      render={<Button variant={variant} size={size} />}
      {...props}
    />
  )
}

export {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger,
}
````

## File: packages/ui/src/app-link.tsx
````typescript
// packages/ui/src/app-link.tsx
import Link from "next/link";
import type { ComponentProps } from "react";

interface AppLinkProps extends Omit<ComponentProps<"a">, "href"> {
    href: string;
    /** true khi đích nằm ở zone khác: dùng <a> để hard navigation */
    crossZone?: boolean;
}

export function AppLink({ href, crossZone = false, children, ...props }: AppLinkProps) {
    if (crossZone) return <a href={href} {...props}> {children} </a>;
    return <Link href={href} {...props}> {children} </Link>;
}
````

## File: packages/ui/src/theme.css
````css
@custom-variant dark (&:is(.dark *));

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-destructive: var(--destructive);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  --font-sans: var(--font-inter), ui-sans-serif, system-ui, sans-serif;
}

:root {
  --radius: 0.625rem;
  --background: oklch(1 0 0);
  --foreground: oklch(0.21 0.03 265);
  --primary: oklch(0.596 0.145 163.2);        /* emerald-600 */
  --primary-foreground: oklch(0.985 0 0);
  --secondary: oklch(0.968 0.007 247.9);
  --secondary-foreground: oklch(0.21 0.03 265);
  --muted: oklch(0.968 0.007 247.9);
  --muted-foreground: oklch(0.554 0.046 257.4);
  --destructive: oklch(0.577 0.245 27.3);
  --border: oklch(0.929 0.013 255.5);          /* slate-200 */
  --input: oklch(0.929 0.013 255.5);
  --ring: oklch(0.596 0.145 163.2);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.21 0.03 265);
}

@layer base {
  * { @apply border-border; }
  body { @apply bg-background text-foreground; }
}
````

## File: packages/utils/src/cn.ts
````typescript
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]): string {
    return twMerge(clsx(inputs));
}
````

## File: packages/utils/src/format.ts
````typescript
const priceFormatter = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    maximumFractionDigits: 0,
});

export function formatPrice(value: number): string {
    return priceFormatter.format(value);
}

export function formatVnd(value: number): string {
    return priceFormatter.format(value);
}

export function formatCompactNumber(value: number): string {
    return new Intl.NumberFormat("vi-VN", { notation: "compact" }).format(value);
}
````

## File: packages/utils/src/index.ts
````typescript
export { cn } from "./cn";
export * from "./format";
````

## File: packages/utils/package.json
````json
{
    "name": "@freemarket/utils",
    "version": "0.0.0",
    "private": true,
    "exports": {
        ".": "./src/index.ts",
        "./format": "./src/format.ts"
    },
    "dependencies": {
        "clsx": "^2.1.1",
        "tailwind-merge": "^3.7.0"
    }
}
````

## File: AGENTS.md
````markdown
<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
````

## File: eslint.config.mjs
````javascript
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
````

## File: README.md
````markdown
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
````

## File: apps/auth-app/src/app/globals.css
````css
@import "tailwindcss";
@import "tw-animate-css";
@import "@freemarket/ui/theme.css";
@source "../../../../packages/ui/src";
````

## File: apps/auth-app/src/app/layout.tsx
````typescript
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";
import { AuthProvider } from "@/components/providers/auth-provider";

const inter = Inter({
    subsets: ["latin", "vietnamese"],
    variable: "--font-inter",
    display: "swap",
});

export const metadata: Metadata = {
    title: {
        default: "FreeMarket - Chợ mua bán đồ mới & cũ",
        template: "%s | FreeMarket",
    },
    description:
        "FreeMarket là chợ C2C giúp bạn mua bán đồ mới và đồ cũ nhanh chóng, an toàn, minh bạch giá.",
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    themeColor: "#ffffff",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="vi" className={inter.variable}>
            <body className="min-h-dvh bg-slate-50/80 font-sans text-slate-900 antialiased">
                <AuthProvider>{children}</AuthProvider>
                <Toaster position="top-center" richColors closeButton />
            </body>
        </html>
    );
}
````

## File: apps/auth-app/src/components/auth/otp-input.tsx
````typescript
"use client";

import { useRef, type ChangeEvent, type ClipboardEvent, type KeyboardEvent } from "react";
import { cn } from "@freemarket/utils"
import { OTP_LENGTH } from "@/lib/validations/verify";

interface OtpInputProps {
    value: string;
    onChange: (value: string) => void;
    disabled?: boolean;
    invalid?: boolean;
    describedBy?: string;
}

export function OtpInput({ value, onChange, disabled, invalid, describedBy }: OtpInputProps) {
    const refs = useRef<(HTMLInputElement | null)[]>([]);
    const digits = Array.from({ length: OTP_LENGTH }, (_, index) => value[index] ?? "");

    function focusAt(index: number): void {
        refs.current[Math.min(Math.max(index, 0), OTP_LENGTH - 1)]?.focus();
    }

    function handleChange(index: number, event: ChangeEvent<HTMLInputElement>): void {
        const raw = event.target.value.replace(/\D/g, "");

        if (raw === "") {
            onChange(value.slice(0, index) + value.slice(index + 1));
            return;
        }

        const typed = raw.length > 1 && digits[index] ? raw.slice(-1) : raw;
        const next =
            typed.length > 1
                ? (value.slice(0, index) + typed).slice(0, OTP_LENGTH)
                : value.slice(0, index) + typed + value.slice(index + 1);

        onChange(next);
        focusAt(index + typed.length);
    }

    function handleKeyDown(index: number, event: KeyboardEvent<HTMLInputElement>): void {
        if (event.key === "Backspace" && !digits[index]) {
            event.preventDefault();
            onChange(value.slice(0, Math.max(index - 1, 0)) + value.slice(index));
            focusAt(index - 1);
        } else if (event.key === "ArrowLeft") {
            event.preventDefault();
            focusAt(index - 1);
        } else if (event.key === "ArrowRight") {
            event.preventDefault();
            focusAt(index + 1);
        }
    }

    function handlePaste(event: ClipboardEvent<HTMLInputElement>): void {
        event.preventDefault();
        const pasted = event.clipboardData.getData("text").replace(/\D/g, "").slice(0, OTP_LENGTH);
        if (!pasted) return;
        onChange(pasted);
        focusAt(pasted.length);
    }

    function handleFocus(index: number): void {
        if (index > value.length) focusAt(value.length);
    }

    return (
        <div role="group" aria-label="Mã OTP 6 chữ số" className="flex justify-between gap-2">
            {digits.map((digit, index) => (
                <input
                    key={index}
                    ref={(element) => {
                        refs.current[index] = element;
                    }}
                    type="text"
                    inputMode="numeric"
                    autoComplete={index === 0 ? "one-time-code" : "off"}
                    maxLength={index === 0 ? OTP_LENGTH : 2}
                    value={digit}
                    disabled={disabled}
                    aria-label={`Chữ số thứ ${index + 1}`}
                    aria-invalid={invalid}
                    aria-describedby={describedBy}
                    onChange={(event) => handleChange(index, event)}
                    onKeyDown={(event) => handleKeyDown(index, event)}
                    onPaste={handlePaste}
                    onFocus={() => handleFocus(index)}
                    className={cn(
                        "h-12 w-full min-w-0 rounded-lg border border-slate-200 bg-white text-center text-lg font-semibold text-slate-900 outline-none transition-colors duration-150 focus-visible:border-emerald-600 focus-visible:ring-2 focus-visible:ring-emerald-600/30 disabled:opacity-50",
                        invalid && "border-rose-400",
                    )}
                />
            ))}
        </div>
    );
}
````

## File: apps/auth-app/src/components/auth/password-strength.tsx
````typescript
import { getPasswordStrength } from "@/lib/validations/auth";
import { cn } from "@freemarket/utils"

interface PasswordStrengthProps {
    password: string;
}

const segmentColors: string[] = ["bg-rose-500", "bg-amber-500", "bg-yellow-400", "bg-emerald-500"];

export function PasswordStrength({ password }: PasswordStrengthProps) {
    const { score, label } = getPasswordStrength(password);
    if (!password) return null;

    return (
        <div className="space-y-1" aria-live="polite">
            <div className="grid grid-cols-4 gap-1">
                {segmentColors.map((color, index) => (
                    <span
                        key={color}
                        className={cn(
                            "h-1 rounded-full transition-colors duration-150",
                            index < score ? color : "bg-slate-200",
                        )}
                    />
                ))}
            </div>
            <p className="text-xs text-slate-500">Độ mạnh: {label}</p>
        </div>
    );
}
````

## File: apps/auth-app/src/components/auth/register-progress.tsx
````typescript
import { Check } from "lucide-react";
import { cn } from "@freemarket/utils"
import type { RegisterStepConfig } from "@/types";

interface RegisterProgressProps {
    steps: RegisterStepConfig[];
    currentStep: number;
}

export function RegisterProgress({ steps, currentStep }: RegisterProgressProps) {
    const percent = Math.round(((currentStep + 1) / steps.length) * 100);

    return (
        <div>
            <div className="mb-2 flex items-baseline justify-between text-xs">
                <span className="font-semibold text-slate-900">
                    Bước {currentStep + 1}/{steps.length}: {steps[currentStep].label}
                </span>
                <span className="text-slate-500">{percent}%</span>
            </div>

            <div
                role="progressbar"
                aria-label="Tiến trình đăng ký"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={percent}
                className="h-2 overflow-hidden rounded-full bg-slate-100"
            >
                <div
                    className="h-full rounded-full bg-emerald-600 transition-[width] duration-200"
                    style={{ width: `${percent}%` }}
                />
            </div>

            <ol
                className="mt-3 grid gap-1"
                style={{ gridTemplateColumns: `repeat(${steps.length}, minmax(0, 1fr))` }}
            >
                {steps.map((step, index) => {
                    const isDone = index < currentStep;
                    const isCurrent = index === currentStep;
                    return (
                        <li
                            key={step.id}
                            aria-current={isCurrent ? "step" : undefined}
                            className="flex flex-col items-center gap-1 text-center"
                        >
                            <span
                                className={cn(
                                    "flex size-6 items-center justify-center rounded-full border text-xs font-semibold transition-colors duration-150",
                                    isDone && "border-emerald-600 bg-emerald-600 text-white",
                                    isCurrent && "border-emerald-600 bg-white text-emerald-700",
                                    !isDone && !isCurrent && "border-slate-200 bg-white text-slate-400",
                                )}
                            >
                                {isDone ? <Check className="size-3.5" aria-hidden="true" /> : index + 1}
                            </span>
                            <span
                                className={cn(
                                    "text-[11px] font-medium",
                                    isCurrent || isDone ? "text-slate-900" : "text-slate-400",
                                )}
                            >
                                {step.label}
                            </span>
                        </li>
                    );
                })}
            </ol>
        </div>
    );
}
````

## File: apps/auth-app/src/components/providers/auth-provider.tsx
````typescript
"use client";

import type { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";

export function AuthProvider({ children }: { children: ReactNode }) {
    return <SessionProvider basePath="/api/auth">{children} </SessionProvider>
}
````

## File: apps/auth-app/src/auth.ts
````typescript
import NextAuth, { CredentialsSignin, type User } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import { loginSchema } from "@/lib/validations/auth";
import { otpSchema } from "@/lib/validations/verify";
import { LoginErrorCode } from "@/lib/auth-errors";
import { BackendFailure, postBackend } from "@/lib/backend";
import { sharedAuthConfig } from "@freemarket/auth-config";

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
    ...sharedAuthConfig,
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
````

## File: apps/merchant-app/src/app/globals.css
````css
@import "tailwindcss";
@import "tw-animate-css";
@import "@freemarket/ui/theme.css";
@source "../../../../packages/ui/src";
````

## File: apps/merchant-app/src/components/merchant/merchant-profile-header.tsx
````typescript
import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import type { MerchantProfile } from "@/types/onboard";
import { ShareStoreButton } from "@/components/merchant/share-store-button";

interface MerchantProfileHeaderProps {
  merchant: MerchantProfile;
}

function toHandle(shopName: string): string {
  const slug = shopName
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ".")
    .replace(/^\.+|\.+$/g, "");
  return `@${slug || "store"}`;
}

export function MerchantProfileHeader({ merchant }: MerchantProfileHeaderProps) {
  const handle = toHandle(merchant.shopName);

  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="relative h-36 w-full bg-slate-200 sm:h-52">
        {merchant.bannerUrl && (
          <Image
            src={merchant.bannerUrl}
            alt={`Ảnh bìa của ${merchant.shopName}`}
            fill
            priority
            unoptimized
            sizes="(min-width: 1280px) 960px, 100vw"
            className="object-cover"
          />
        )}
      </div>

      <div className="px-4 pb-5 sm:px-6">
        <div className="-mt-10 flex items-end justify-between gap-3 sm:-mt-12">
          <div className="relative flex size-20 shrink-0 items-center justify-center overflow-hidden rounded-full bg-emerald-100 text-2xl font-semibold text-emerald-700 ring-4 ring-white sm:size-24">
            {merchant.logoUrl ? (
              <Image
                src={merchant.logoUrl}
                alt={`Ảnh đại diện của ${merchant.shopName}`}
                fill
                unoptimized
                sizes="96px"
                className="object-cover"
              />
            ) : (
              <span aria-hidden="true">{merchant.shopName.charAt(0).toUpperCase()}</span>
            )}
          </div>
          <ShareStoreButton handle={handle} />
        </div>

        <h1 className="mt-3 text-xl font-semibold text-slate-900">{merchant.shopName}</h1>
        <p className="text-sm text-slate-500">{handle}</p>
        {merchant.description && (
          <p className="mt-2 max-w-prose text-sm leading-relaxed text-slate-700">{merchant.description}</p>
        )}

        <p className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500">
          {merchant.contactEmail && (
            <span className="flex items-center gap-1">
              <Mail className="size-3.5" aria-hidden="true" />
              {merchant.contactEmail}
            </span>
          )}
          {merchant.contactPhone && (
            <span className="flex items-center gap-1">
              <Phone className="size-3.5" aria-hidden="true" />
              {merchant.contactPhone}
            </span>
          )}
        </p>
      </div>
    </section>
  );
}
````

## File: apps/merchant-app/tsconfig.json
````json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": [
        "./src/*"
      ]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".next/dev/types/**/*.ts",
    "**/*.mts",
    "src/components/onboard/form-field.tsx"
  ],
  "exclude": [
    "node_modules"
  ]
}
````

## File: apps/shop-app/src/app/globals.css
````css
@import "tailwindcss";
@import "tw-animate-css";
@import "@freemarket/ui/theme.css";
@source "../../../../packages/ui/src";
````

## File: apps/shop-app/src/app/layout.tsx
````typescript
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import { AuthProvider } from "@/components/providers/auth-provider";
import { BottomNav } from "@/components/layout/bottom-nav";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "vietnamese"], variable: "--font-sans" });

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="vi" className={inter.variable}>
            <body className="min-h-screen bg-slate-50/80 text-slate-900 antialiased">
                <AuthProvider>
                    <SiteHeader />
                    <main>{children}</main>
                    <SiteFooter />
                    <BottomNav />
                </AuthProvider>
                <Toaster position="top-center" richColors />
            </body>
        </html>
    );
}
````

## File: apps/shop-app/src/components/home/category-bar.tsx
````typescript
import Link from "next/link";
import { LayoutGrid } from "lucide-react";
import { cn } from "@freemarket/utils"
import type { Category, SortOption } from "@/types";

interface CategoryBarProps {
    categories: Category[];
    activeCategory?: string;
    sort: SortOption;
}

function buildHref(category: string | undefined, sort: SortOption): string {
    const params = new URLSearchParams();
    if (category) params.set("category", category);
    if (sort !== "newest") params.set("sort", sort);
    const query = params.toString();
    return query ? `/?${query}` : "/";
}

const chipBase =
    "flex shrink-0 items-center gap-1.5 rounded-full border px-3.5 py-2 text-sm font-medium transition-colors duration-150";

export function CategoryBar({ categories, activeCategory, sort }: CategoryBarProps) {
    return (
        <nav aria-label="Danh mục sản phẩm" className="-mx-4 overflow-x-auto px-4">
            <ul className="flex gap-2 pb-1">
                <li>
                    <Link
                        href={buildHref(undefined, sort)}
                        aria-current={!activeCategory ? "page" : undefined}
                        className={cn(
                            chipBase,
                            !activeCategory
                                ? "border-emerald-600 bg-emerald-600 text-white"
                                : "border-slate-200 bg-white text-slate-700 hover:bg-slate-100",
                        )}
                    >
                        <LayoutGrid className="size-4" aria-hidden="true" />
                        Tất cả
                    </Link>
                </li>
                {categories.map(({ id, label, icon: Icon }) => {
                    const isActive = activeCategory === id;
                    return (
                        <li key={id}>
                            <Link
                                href={buildHref(id, sort)}
                                aria-current={isActive ? "page" : undefined}
                                className={cn(
                                    chipBase,
                                    isActive
                                        ? "border-emerald-600 bg-emerald-600 text-white"
                                        : "border-slate-200 bg-white text-slate-700 hover:bg-slate-100",
                                )}
                            >
                                <Icon className="size-4" aria-hidden="true" />
                                {label}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}
````

## File: apps/shop-app/src/components/layout/bottom-nav.tsx
````typescript
"use client";

import { getNavItems, getAppMode, isNavActive } from "@/lib/navigation";
import { cn } from "@freemarket/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function BottomNav() {
    const pathname = usePathname();
    const items = getNavItems(getAppMode(pathname));

    return (
        <nav
            aria-label="Điều hướng di động"
            className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white pb-[env(safe-area-inset-bottom)] md:hidden"
        >
            <ul className="mx-auto grid h-16 max-w-lg grid-cols-5 items-center">
                {items.map((item) => {
                    const isActive = isNavActive(pathname, item);
                    const Icon = item.icon;
                    return (
                        <li key={item.href} className="flex justify-center">
                            <Link
                                href={item.href}
                                aria-current={isActive ? "page" : undefined}
                                className="flex flex-col items-center gap-0.5 px-2 py-1 text-[11px] font-medium"
                            >
                                {item.highlight ? (
                                    <span className="flex size-11 -translate-y-2 items-center justify-center rounded-full bg-emerald-600 text-white transition-colors duration-150 active:bg-emerald-700">
                                        <Icon className="size-6" aria-hidden="true" />
                                        <span className="sr-only">{item.label}</span>
                                    </span>
                                ) : (
                                    <>
                                        <Icon
                                            className={cn(
                                                "size-5 transition-colors duration-150",
                                                isActive ? "text-emerald-600" : "text-slate-500",
                                            )}
                                            aria-hidden="true"
                                        />
                                        <span className={isActive ? "text-emerald-700" : "text-slate-500"}>
                                            {item.label}
                                        </span>
                                    </>
                                )}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}
````

## File: apps/shop-app/src/components/layout/mode-switcher.tsx
````typescript
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag, Store } from "lucide-react";
import { toast } from "sonner";
import { getAppMode } from "@/lib/navigation";
import { cn } from "@freemarket/utils"
import type { AppMode } from "@/types";

interface ModeOption {
    mode: AppMode;
    label: string;
    href: string;
    icon: typeof Store;
    toastMessage: string;
}

const options: ModeOption[] = [
    {
        mode: "buyer",
        label: "Mua sắm",
        href: "/",
        icon: ShoppingBag,
        toastMessage: "Đã chuyển sang chế độ Mua sắm",
    },
    {
        mode: "merchant",
        label: "Studio",
        href: "/merchant",
        icon: Store,
        toastMessage: "Đã chuyển sang Merchant Studio",
    },
];

export function ModeSwitcher() {
    const pathname = usePathname();
    const currentMode = getAppMode(pathname);

    return (
        <div
            role="tablist"
            aria-label="Chuyển chế độ tài khoản"
            className="flex items-center rounded-lg border border-slate-200 bg-slate-100 p-0.5"
        >
            {options.map(({ mode, label, href, icon: Icon, toastMessage }) => {
                const isActive = currentMode === mode;
                return (
                    <Link
                        key={mode}
                        href={href}
                        role="tab"
                        aria-selected={isActive}
                        onClick={() => {
                            if (!isActive) toast.info(toastMessage);
                        }}
                        className={cn(
                            "flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-medium transition-colors duration-150 sm:text-sm",
                            isActive
                                ? "bg-white text-slate-900 shadow-sm"
                                : "text-slate-500 hover:text-slate-900",
                        )}
                    >
                        <Icon className="size-4" aria-hidden="true" />
                        <span>{label}</span>
                    </Link>
                );
            })}
        </div>
    );
}
````

## File: apps/shop-app/src/components/product/product-card-skeleton.tsx
````typescript
import { Skeleton } from "@freemarket/ui/skeleton";

export function ProductCardSkeleton() {
    return (
        <div className="space-y-3 overflow-hidden rounded-xl border border-slate-200 bg-white pb-3">
            <Skeleton className="aspect-square w-full rounded-none" />
            <div className="space-y-2 px-3">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
                <Skeleton className="h-5 w-1/2" />
                <Skeleton className="h-3 w-3/4" />
                <Skeleton className="h-8 w-full" />
            </div>
        </div>
    );
}
````

## File: apps/shop-app/src/components/product/wishlist-button.tsx
````typescript
"use client";

import { Heart } from "lucide-react";
import { toast } from "sonner";
import { useHasMounted } from "../../hooks/use-has-mounted";
import { cn } from "@freemarket/utils"
import { useWishlistStore } from "@/stores/use-wishlist-store";

interface WishlistButtonProps {
    productId: string;
    className?: string;
}

export function WishlistButton({ productId, className }: WishlistButtonProps) {
    const hasMounted = useHasMounted();
    const isSaved = useWishlistStore((state) => state.ids.includes(productId));
    const toggle = useWishlistStore((state) => state.toggle);
    const active = hasMounted && isSaved;

    function handleClick(): void {
        toggle(productId);
        if (active) {
            toast.info("Đã bỏ khỏi danh sách yêu thích");
        } else {
            toast.success("Đã lưu vào yêu thích!");
        }
    }

    return (
        <button
            type="button"
            onClick={handleClick}
            aria-pressed={active}
            aria-label={active ? "Bỏ yêu thích" : "Lưu vào yêu thích"}
            className={cn(
                "flex size-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition-colors duration-150 hover:text-rose-600",
                active && "text-rose-600",
                className,
            )}
        >
            <Heart className={cn("size-4", active && "fill-rose-600")} aria-hidden="true" />
        </button>
    );
}
````

## File: apps/shop-app/src/lib/utils.ts
````typescript
export { cn } from "@freemarket/utils"
````

## File: apps/shop-app/package.json
````json
{
  "name": "shop-app",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev -p 3000",
    "build": "next build",
    "start": "next start -p 3000",
    "lint": "eslint"
  },
  "dependencies": {
    "@freemarket/ui": "workspace:*",
    "@freemarket/utils": "workspace:*",
    "lucide-react": "^1.52.0",
    "next": "16.3.7",
    "next-auth": "5.0.0-beta.32",
    "react": "19.2.8",
    "react-dom": "19.2.8",
    "sonner": "^2.0.8",
    "tw-animate-css": "^1.4.0",
    "zustand": "^5.0.15"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "babel-plugin-react-compiler": "1.0.0",
    "eslint": "^9",
    "eslint-config-next": "16.3.7",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}
````

## File: packages/ui/src/badge.tsx
````typescript
import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@freemarket/utils"

const badgeVariants = cva(
  "group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-4xl border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3!",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
        secondary:
          "bg-secondary text-secondary-foreground [a]:hover:bg-secondary/80",
        destructive:
          "bg-destructive/10 text-destructive focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:focus-visible:ring-destructive/40 [a]:hover:bg-destructive/20",
        outline:
          "border-border text-foreground [a]:hover:bg-muted [a]:hover:text-muted-foreground",
        ghost:
          "hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant = "default",
  render,
  ...props
}: useRender.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return useRender({
    defaultTagName: "span",
    props: mergeProps<"span">(
      {
        className: cn(badgeVariants({ variant }), className),
      },
      props
    ),
    render,
    state: {
      slot: "badge",
      variant,
    },
  })
}

export { Badge, badgeVariants }
````

## File: packages/ui/src/button.tsx
````typescript
import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@freemarket/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/80",
        outline:
          "border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        ghost:
          "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default:
          "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        icon: "size-8",
        "icon-xs":
          "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
        "icon-sm":
          "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
        "icon-lg": "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
````

## File: packages/ui/src/checkbox.tsx
````typescript
"use client"

import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox"
import { cn } from "@freemarket/utils"
import { CheckIcon } from "lucide-react"

function Checkbox({ className, ...props }: CheckboxPrimitive.Root.Props) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer relative flex size-4 shrink-0 items-center justify-center rounded-[4px] border border-input transition-colors outline-none group-has-disabled/field:opacity-50 group-has-[:focus-visible]/field-label:ring-0 group-has-[:focus-visible]/field-label:not-data-checked:border-input after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aria-invalid:aria-checked:border-primary dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground group-has-[:focus-visible]/field-label:data-checked:border-primary dark:data-checked:bg-primary",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="grid place-content-center text-current transition-none [&>svg]:size-3.5"
      >
        <CheckIcon
        />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }
````

## File: packages/ui/src/input.tsx
````typescript
import * as React from "react"
import { Input as InputPrimitive } from "@base-ui/react/input"
import { cn } from "@freemarket/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(
        "h-8 w-full min-w-0 rounded-lg border border-input bg-transparent px-2.5 py-1 text-base transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
        className
      )}
      {...props}
    />
  )
}

export { Input }
````

## File: packages/ui/src/label.tsx
````typescript
"use client"

import * as React from "react"
import { cn } from "@freemarket/utils"

function Label({ className, ...props }: React.ComponentProps<"label">) {
  return (
    <label
      data-slot="label"
      className={cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export { Label }
````

## File: packages/ui/src/sheet.tsx
````typescript
"use client"

import * as React from "react"
import { Dialog as SheetPrimitive } from "@base-ui/react/dialog"
import { cn } from "@freemarket/utils"

import { Button } from "./button"
import { XIcon } from "lucide-react"

function Sheet({ ...props }: SheetPrimitive.Root.Props) {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />
}

function SheetTrigger({ ...props }: SheetPrimitive.Trigger.Props) {
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />
}

function SheetClose({ ...props }: SheetPrimitive.Close.Props) {
  return <SheetPrimitive.Close data-slot="sheet-close" {...props} />
}

function SheetPortal({ ...props }: SheetPrimitive.Portal.Props) {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />
}

function SheetOverlay({ className, ...props }: SheetPrimitive.Backdrop.Props) {
  return (
    <SheetPrimitive.Backdrop
      data-slot="sheet-overlay"
      className={cn(
        "fixed inset-0 z-50 bg-black/10 transition-opacity duration-150 data-ending-style:opacity-0 data-starting-style:opacity-0 supports-backdrop-filter:backdrop-blur-xs",
        className
      )}
      {...props}
    />
  )
}

function SheetContent({
  className,
  children,
  side = "right",
  showCloseButton = true,
  ...props
}: SheetPrimitive.Popup.Props & {
  side?: "top" | "right" | "bottom" | "left"
  showCloseButton?: boolean
}) {
  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Popup
        data-slot="sheet-content"
        data-side={side}
        className={cn(
          "fixed z-50 flex flex-col gap-4 bg-popover bg-clip-padding text-sm text-popover-foreground shadow-lg transition duration-200 ease-in-out data-ending-style:opacity-0 data-starting-style:opacity-0 data-[side=bottom]:inset-x-0 data-[side=bottom]:bottom-0 data-[side=bottom]:h-auto data-[side=bottom]:border-t data-[side=bottom]:data-ending-style:translate-y-[2.5rem] data-[side=bottom]:data-starting-style:translate-y-[2.5rem] data-[side=left]:inset-y-0 data-[side=left]:left-0 data-[side=left]:h-full data-[side=left]:w-3/4 data-[side=left]:border-r data-[side=left]:data-ending-style:translate-x-[-2.5rem] data-[side=left]:data-starting-style:translate-x-[-2.5rem] data-[side=right]:inset-y-0 data-[side=right]:right-0 data-[side=right]:h-full data-[side=right]:w-3/4 data-[side=right]:border-l data-[side=right]:data-ending-style:translate-x-[2.5rem] data-[side=right]:data-starting-style:translate-x-[2.5rem] data-[side=top]:inset-x-0 data-[side=top]:top-0 data-[side=top]:h-auto data-[side=top]:border-b data-[side=top]:data-ending-style:translate-y-[-2.5rem] data-[side=top]:data-starting-style:translate-y-[-2.5rem] data-[side=left]:sm:max-w-sm data-[side=right]:sm:max-w-sm",
          className
        )}
        {...props}
      >
        {children}
        {showCloseButton && (
          <SheetPrimitive.Close
            data-slot="sheet-close"
            render={
              <Button
                variant="ghost"
                className="absolute top-3 right-3"
                size="icon-sm"
              />
            }
          >
            <XIcon
            />
            <span className="sr-only">Close</span>
          </SheetPrimitive.Close>
        )}
      </SheetPrimitive.Popup>
    </SheetPortal>
  )
}

function SheetHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-header"
      className={cn("flex flex-col gap-0.5 p-4", className)}
      {...props}
    />
  )
}

function SheetFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-footer"
      className={cn("mt-auto flex flex-col gap-2 p-4", className)}
      {...props}
    />
  )
}

function SheetTitle({ className, ...props }: SheetPrimitive.Title.Props) {
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      className={cn(
        "font-heading text-base font-medium text-foreground",
        className
      )}
      {...props}
    />
  )
}

function SheetDescription({
  className,
  ...props
}: SheetPrimitive.Description.Props) {
  return (
    <SheetPrimitive.Description
      data-slot="sheet-description"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
}

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}
````

## File: packages/ui/src/skeleton.tsx
````typescript
import { cn } from "@freemarket/utils"

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("animate-pulse rounded-md bg-muted", className)}
      {...props}
    />
  )
}

export { Skeleton }
````

## File: packages/ui/src/tabs.tsx
````typescript
"use client"

import { Tabs as TabsPrimitive } from "@base-ui/react/tabs"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@freemarket/utils"

function Tabs({
  className,
  orientation = "horizontal",
  ...props
}: TabsPrimitive.Root.Props) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      data-orientation={orientation}
      className={cn(
        "group/tabs flex gap-2 data-horizontal:flex-col",
        className
      )}
      {...props}
    />
  )
}

const tabsListVariants = cva(
  "group/tabs-list inline-flex w-fit items-center justify-center rounded-lg p-[3px] text-muted-foreground group-data-horizontal/tabs:h-8 group-data-vertical/tabs:h-fit group-data-vertical/tabs:flex-col data-[variant=line]:rounded-none",
  {
    variants: {
      variant: {
        default: "bg-muted",
        line: "gap-1 bg-transparent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function TabsList({
  className,
  variant = "default",
  ...props
}: TabsPrimitive.List.Props & VariantProps<typeof tabsListVariants>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      data-variant={variant}
      className={cn(tabsListVariants({ variant }), className)}
      {...props}
    />
  )
}

function TabsTrigger({ className, ...props }: TabsPrimitive.Tab.Props) {
  return (
    <TabsPrimitive.Tab
      data-slot="tabs-trigger"
      className={cn(
        "relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-1.5 py-0.5 text-sm font-medium whitespace-nowrap text-foreground/60 transition-all group-data-vertical/tabs:w-full group-data-vertical/tabs:justify-start hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 has-data-[icon=inline-end]:pr-1 has-data-[icon=inline-start]:pl-1 aria-disabled:pointer-events-none aria-disabled:opacity-50 dark:text-muted-foreground dark:hover:text-foreground group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        "group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-active:bg-transparent dark:group-data-[variant=line]/tabs-list:data-active:border-transparent dark:group-data-[variant=line]/tabs-list:data-active:bg-transparent",
        "data-active:bg-background data-active:text-foreground dark:data-active:border-input dark:data-active:bg-input/30 dark:data-active:text-foreground",
        "after:absolute after:bg-foreground after:opacity-0 after:transition-opacity group-data-horizontal/tabs:after:inset-x-0 group-data-horizontal/tabs:after:bottom-[-5px] group-data-horizontal/tabs:after:h-0.5 group-data-vertical/tabs:after:inset-y-0 group-data-vertical/tabs:after:-right-1 group-data-vertical/tabs:after:w-0.5 group-data-[variant=line]/tabs-list:data-active:after:opacity-100",
        className
      )}
      {...props}
    />
  )
}

function TabsContent({ className, ...props }: TabsPrimitive.Panel.Props) {
  return (
    <TabsPrimitive.Panel
      data-slot="tabs-content"
      className={cn("flex-1 text-sm outline-none", className)}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent, tabsListVariants }
````

## File: packages/ui/package.json
````json
{
    "name": "@freemarket/ui",
    "version": "0.0.0",
    "private": true,
    "exports": {
        "./theme.css": "./src/theme.css",
        "./*": "./src/*.tsx"
    },
    "dependencies": {
        "@base-ui/react": "^1.8.0",
        "@freemarket/utils": "workspace:*",
        "class-variance-authority": "^0.7.1",
        "lucide-react": "^1.52.0"
    },
    "peerDependencies": {
        "react": "^19",
        "react-dom": "^19",
        "next": "*"
    },
    "devDependencies": {
        "@types/react": "^19",
        "@types/react-dom": "^19",
        "react": "^19",
        "react-dom": "^19"
    }
}
````

## File: CLAUDE.md
````markdown
# FREEMARKET FRONTEND NEXT.JS GUIDELINES

## 1. Core Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript (Strict mode enabled)
- **Styling**: Tailwind CSS v4 + shadcn/ui
- **Icons**: Lucide React (`lucide-react`)
- **State Management**: Zustand (with `persist` middleware for LocalStorage)
- **Form & Validation**: React Hook Form + Zod
- **Animations**: Framer Motion / Tailwind CSS transitions
- **Notifications**: Sonner (`toast`)

## 2. Project Domain & Visual Vibe
- **Domain**: Two-sided C2C E-commerce Marketplace (Users act seamlessly as both Buyers and Merchants/Sellers).
  - **Buyer Experience**: Product feed, category filters, item details, order tracking, direct seller chat, wishlist/cart.
  - **Merchant Experience**: Quick product listing creation, active listings manager, simple order fulfillment status, sales summary.
  - **Account Mode**: Seamless UI role-switching between "Buyer Mode" (Shopping) and "Merchant Studio" (Selling/Managing).

- **Visual Aesthetic & Motion Rules**:
  - **Utilitarian & Clean**: Practical, distraction-free UI focused on content, price clarity, and fast scanning.
  - **Zero Gloss / No Flashy FX**: STRICTLY NO complex 3D effects, heavy glassmorphism, glowing gradients, or bouncy/fancy animations.
  - **Minimal Motion**: Limit animations strictly to functional UI state changes (e.g., accordion expansion, bottom-sheet slide up, tab switching) with fast durations (`duration-150` or `duration-200`).

- **Color Palette (Light & Approachable)**:
  - **Backgrounds**: Bright, clean, crisp light mode (`bg-white`, `bg-slate-50/80`), subtle slate borders (`border-slate-200`).
  - **Primary Accent**: Friendly, trustworthy high-contrast accent (e.g., Slate/Emerald/Teal or Warm Coral) for key CTAs.
  - **Condition & Status Badges**: Light pastel color-coded badges for item conditions (*New*, *Like New*, *Well Used*) and order states (*Pending*, *Shipped*, *Completed*).

- **Layout & Mobile-First UX Patterns**:
  - **Mobile-First Navigation**: Fixed bottom navigation bar (Home, Search, Sell +, Messages, Profile/Studio).
  - **Touch-Friendly Controls**: Use Bottom Sheets (`drawer`) for mobile filters/actions instead of center popups. Sticky bottom action bar for "Buy Now / Chat with Seller" on product detail pages.
  - **Trust & Micro-Signals**: Always display seller reputation badges (rating, total sales, response speed) and item location/condition clearly on product cards.

## 3. Component & Boundary Rules (RSC vs Client)
- **Server Components (Default)**: All pages (`app/**/page.tsx`), layouts, and static content displays MUST be React Server Components (RSC) by default.
- **Client Components**: Add `"use client"` strictly at the top of files that require browser interactivity (`useState`, `useEffect`, event listeners, Zustand hooks).
- **Isolate Interactivity**: Do NOT mark entire pages as `"use client"` for a single interactive element. Extract interactive components (e.g., `<AddToCartButton />`, `<CartDrawer />`) into separate client files.

## 5. Mock Data & Data Flow (No Backend APIs)
- **No Real API Requests**: Do NOT build backend API routes, Database queries, or external `fetch()` calls.
- **Centralized Mock Data**: Place all mock items in `@/lib/mock-data.ts`.
- **Rich & Realistic Data**: Include high-resolution Unsplash URLs, realistic prices, ratings, stock counts, tags, variant colors, and descriptions.
- **High Quality Images**: Use Unsplash image URLs with query params (`?auto=format&fit=crop&w=800&q=80`) and ensure standard aspect ratios (`aspect-square`, `aspect-[4/5]`).

## 6. State Management & Persistence
- **Cart & Wishlist**: Use Zustand stores with `persist` middleware to preserve items in `localStorage` across page reloads.
- **Immediate Feedback**: Trigger a toast notification (`toast.success("Added to cart!")` or `toast.info(...)`) via `sonner` on every user action (Add to Cart, Save Wishlist, Apply Coupon, Copy Link).

## 7. Edge Cases, Loading & Empty States
- **Skeleton UI**: Always provide `<Skeleton />` variants or `loading.tsx` fallbacks for product cards, details, and lists.
- **Empty States**: Design polished empty state UI with helpful CTA buttons for cases like empty cart, no search results, or empty wishlist.

## 9. Coding & Naming Conventions
- **Naming**:
  - Components & Interfaces: `PascalCase` (e.g., `ProductCard.tsx`, `ProductProps`)
  - Files & Folders: `kebab-case` (e.g., `product-card.tsx`, `use-cart.ts`)
  - Functions & Variables: `camelCase` (e.g., `calculateTotal`, `isCartOpen`)
- **Exports**: Prefer named exports (`export function ProductCard() {}`), reserving default exports ONLY for Next.js route components (`page.tsx`, `layout.tsx`, `loading.tsx`).
- **Strict TypeScript**:
  - NO `any` or implicit `unknown`. Explicitly define all props and type shapes in `@/types/`.
- **Tailwind Helper**: Always use `cn()` from `@/lib/utils` when conditionally merging dynamic class names.

## 10. AI Behavioral & Output Expectations
- **Production-Ready Code**: Output complete, copy-pasteable, runnable code. NEVER use placeholders like `// TODO: Implement later` or truncation comment tags like `// ... rest of code`.
- **Self-Correction**: Automatically check for missing imports, syntax discrepancies, mismatched RSC boundaries, or unhandled TypeScript types before finalizing code output.
````

## File: pnpm-workspace.yaml
````yaml
allowBuilds:
  sharp: false
  unrs-resolver: false

packages:
  - 'apps/*'
  - 'packages/*'
````

## File: apps/merchant-app/src/components/merchant/merchant-product-card.tsx
````typescript
"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { cn, formatVnd } from "@freemarket/utils"
import type { Product, ProductCondition } from "@/types/merchant";
import { getDefaultVariant } from "@/lib/utils";
import { Badge } from "@freemarket/ui/badge";

const conditionMap: Record<ProductCondition, { label: string; className: string }> = {
    new: { label: "Mới", className: "bg-emerald-50 text-emerald-700 border-emerald-200" },
    "like-new": { label: "Như mới", className: "bg-sky-50 text-sky-700 border-sky-200" },
    "well-used": { label: "Đã dùng nhiều", className: "bg-amber-50 text-amber-700 border-amber-200" },
};

interface MerchantProductCardProps {
    product: Product;
}

export function MerchantProductCard({ product }: MerchantProductCardProps) {
    const [selectedId, setSelectedId] = useState<string>(getDefaultVariant(product).id);
    const selected =
        product.variants.find((v) => v.id === selectedId) ?? getDefaultVariant(product);
    const condition = conditionMap[product.condition];
    const isOutOfStock = selected.stock === 0;

    return (
        <article className="flex flex-col overflow-hidden rounded-lg border border-slate-200 bg-white">
            <div className="relative aspect-square bg-slate-100">
                <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(min-width: 1024px) 220px, 50vw"
                    className="object-cover"
                />
                <Badge
                    variant="outline"
                    className={cn("absolute left-2 top-2 bg-white", condition.className)}
                >
                    {condition.label}
                </Badge>
            </div>

            <div className="flex flex-1 flex-col gap-2 p-3">
                <h3 className="line-clamp-2 text-sm font-medium text-slate-900">{product.title}</h3>

                <p className="text-base font-semibold text-emerald-700">{formatVnd(selected.price)}</p>

                <div className="flex flex-wrap gap-1.5" role="radiogroup" aria-label="Phân loại">
                    {product.variants.map((variant) => {
                        const isActive = variant.id === selected.id;
                        return (
                            <button
                                key={variant.id}
                                type="button"
                                role="radio"
                                aria-checked={isActive}
                                onClick={() => setSelectedId(variant.id)}
                                className={cn(
                                    "flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs transition-colors duration-150",
                                    isActive
                                        ? "border-emerald-600 bg-emerald-50 text-emerald-700"
                                        : "border-slate-200 text-slate-600 hover:border-slate-300",
                                    variant.stock === 0 && "text-slate-400 line-through"
                                )}
                            >
                                {variant.colorHex && (
                                    <span
                                        className="size-2.5 rounded-full border border-slate-300"
                                        style={{ backgroundColor: variant.colorHex }}
                                    />
                                )}
                                {variant.name}
                            </button>
                        );
                    })}
                </div>

                <p className="text-xs text-slate-500">
                    {selected.isDefault ? "Phân loại mặc định · " : ""}
                    {isOutOfStock ? (
                        <span className="font-medium text-rose-600">Hết hàng</span>
                    ) : (
                        <>Còn {selected.stock}</>
                    )}
                    {" · "}SKU {selected.sku}
                </p>

                <p className="mt-auto flex items-center gap-1 pt-1 text-xs text-slate-500">
                    <MapPin className="size-3" />
                    {product.location} · Đã bán {product.sold}
                </p>
            </div>
        </article>
    );
}
````

## File: apps/merchant-app/src/components/merchant/merchant-products.tsx
````typescript
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { PackageOpen } from "lucide-react";
import { Button } from "@freemarket/ui/button";
import { MerchantProductCard } from "@/components/merchant/merchant-product-card";
import { cn } from "@freemarket/utils"
import type { Product, ProductCategory } from "@/types/merchant";

interface MerchantProductsProps {
    categories: ProductCategory[];
    products: Product[];
}

const ALL = "all";

export function MerchantProducts({ categories, products }: MerchantProductsProps) {
    const [activeId, setActiveId] = useState<string>(ALL);

    const groups = useMemo(
        () =>
            categories
                .filter((c) => activeId === ALL || c.id === activeId)
                .map((category) => ({
                    category,
                    items: products.filter((p) => p.categoryId === category.id),
                }))
                .filter((g) => g.items.length > 0),
        [categories, products, activeId]
    );

    const chips: ProductCategory[] = [{ id: ALL, name: "Tất cả" }, ...categories];

    return (
        <section className="px-4 py-5 sm:px-6">
            <div className="flex items-baseline justify-between">
                <h2 className="text-lg font-semibold text-slate-900">Sản phẩm đang bán</h2>
                <span className="text-sm text-slate-500">{products.length} sản phẩm</span>
            </div>

            <div className="-mx-4 mt-3 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:px-0">
                {chips.map((chip) => (
                    <button
                        key={chip.id}
                        type="button"
                        onClick={() => setActiveId(chip.id)}
                        className={cn(
                            "shrink-0 rounded-full border px-3.5 py-1.5 text-sm transition-colors duration-150",
                            activeId === chip.id
                                ? "border-emerald-600 bg-emerald-600 text-white"
                                : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                        )}
                    >
                        {chip.name}
                    </button>
                ))}
            </div>

            {groups.length === 0 ? (
                <div className="mt-8 flex flex-col items-center gap-3 rounded-lg border border-dashed border-slate-300 bg-white px-4 py-12 text-center">
                    <PackageOpen className="size-10 text-slate-400" />
                    <p className="text-sm text-slate-600">Chưa có sản phẩm nào đang bán.</p>
                    <Button className="bg-emerald-600 hover:bg-emerald-700">
                        <Link href="/merchant/listings/new">Đăng sản phẩm đầu tiên</Link>
                    </Button>
                </div>
            ) : (
                <div className="mt-5 flex flex-col gap-8">
                    {groups.map(({ category, items }) => (
                        <div key={category.id}>
                            <h3 className="mb-3 text-base font-medium text-slate-900">
                                {category.name}
                                <span className="ml-2 text-sm font-normal text-slate-500">({items.length})</span>
                            </h3>
                            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                                {items.map((product) => (
                                    <MerchantProductCard key={product.id} product={product} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}
````

## File: apps/merchant-app/src/components/merchant/merchant-shell.tsx
````typescript
"use client";

import { useState, type ReactNode } from "react";
import { Menu } from "lucide-react";
import { Button } from "@freemarket/ui/button";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
} from "@freemarket/ui/sheet";
import { MerchantSidebar } from "@/components/merchant/merchant-sidebar";

interface MerchantShellProps {
    children: ReactNode;
}

export function MerchantShell({ children }: MerchantShellProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div className="min-h-screen bg-slate-50/80">
            {/* Mobile top bar */}
            <header className="sticky top-0 z-30 flex h-14 items-center gap-2 border-b border-slate-200 bg-white px-3 md:hidden">
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(true)}
                    aria-label="Mở menu merchant"
                >
                    <Menu className="size-5" />
                </Button>
                <span className="text-sm font-semibold text-slate-900">Merchant Studio</span>
            </header>

            {/* Mobile drawer */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetContent side="left" className="w-72 p-0 duration-200">
                    <SheetHeader className="sr-only">
                        <SheetTitle>Menu Merchant Studio</SheetTitle>
                        <SheetDescription>Điều hướng quản lý cửa hàng</SheetDescription>
                    </SheetHeader>
                    <MerchantSidebar onNavigate={() => setIsOpen(false)} />
                </SheetContent>
            </Sheet>

            <div className="mx-auto flex max-w-7xl">
                {/* Desktop sidebar */}
                <aside className="sticky top-0 hidden h-screen w-64 shrink-0 border-r border-slate-200 bg-white md:block">
                    <MerchantSidebar />
                </aside>

                <main className="min-w-0 flex-1 pb-24 md:pb-8">{children}</main>
            </div>
        </div>
    );
}
````

## File: apps/merchant-app/src/components/merchant/merchant-sidebar.tsx
````typescript
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    BarChart3,
    ClipboardList,
    LayoutDashboard,
    Package,
    Plus,
    Settings,
    ShoppingBag,
    Store,
    type LucideIcon,
} from "lucide-react";
import { Button } from "@freemarket/ui/button";
import { cn } from "@freemarket/utils"

interface NavItem {
    href: string;
    label: string;
    icon: LucideIcon;
}

const navItems: NavItem[] = [
    { href: "/", label: "Cửa hàng của tôi", icon: Store },
    { href: "/dashboard", label: "Tổng quan", icon: LayoutDashboard },
    { href: "/listings", label: "Sản phẩm đang bán", icon: Package },
    { href: "/orders", label: "Đơn hàng", icon: ClipboardList },
    { href: "/sales", label: "Doanh thu", icon: BarChart3 },
    { href: "/settings", label: "Cài đặt cửa hàng", icon: Settings },
];

interface MerchantSidebarProps {
    onNavigate?: () => void;
}

export function MerchantSidebar({ onNavigate }: MerchantSidebarProps) {
    const pathname = usePathname();

    return (
        <div className="flex h-full flex-col gap-4 p-4">
            <div className="px-2 pt-1">
                <p className="text-base font-semibold text-slate-900">Merchant Studio</p>
                <p className="text-xs text-slate-500">Quản lý cửa hàng của bạn</p>
            </div>

            <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                <Link href="/listings/new" onClick={onNavigate}>
                    <Plus className="size-4" />
                    Đăng sản phẩm
                </Link>
            </Button>

            <nav className="flex flex-1 flex-col gap-1" aria-label="Merchant">
                {navItems.map(({ href, label, icon: Icon }) => {
                    const isActive = pathname === href;
                    return (
                        <Link
                            key={href}
                            href={href}
                            onClick={onNavigate}
                            aria-current={isActive ? "page" : undefined}
                            className={cn(
                                "flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-colors duration-150",
                                isActive
                                    ? "bg-emerald-50 text-emerald-700"
                                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                            )}
                        >
                            <Icon className="size-4 shrink-0" />
                            {label}
                        </Link>
                    );
                })}
            </nav>

            <a href="/" className="flex items-center gap-3 rounded-md border border-slate-200 px-3 py-2.5 text-sm font-medium text-slate-700 transition-colors duration-150 hover:bg-slate-50">
                <ShoppingBag className="size-4" />
                Chuyển sang Buyer Mode
            </a>
        </div>
    );
}
````

## File: apps/merchant-app/src/components/merchant/share-store-button.tsx
````typescript
"use client";

import { Share2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@freemarket/ui/button";

interface ShareStoreButtonProps {
    handle: string;
}

export function ShareStoreButton({ handle }: ShareStoreButtonProps) {
    async function handleCopy(): Promise<void> {
        try {
            await navigator.clipboard.writeText(
                `${window.location.origin}/store/${handle.replace("@", "")}`
            );
            toast.success("Đã sao chép liên kết cửa hàng!");
        } catch {
            toast.info("Không thể sao chép liên kết.");
        }
    }

    return (
        <Button variant="outline" size="sm" onClick={handleCopy}>
            <Share2 className="size-4" />
            Chia sẻ
        </Button>
    );
}
````

## File: apps/merchant-app/src/lib/mock-data.ts
````typescript
import type { Merchant, Product, ProductCategory } from "@/types/merchant";
import type { DashboardStat, RecentOrder } from "@/types/dashboard";
const img = (id: string): string =>
    `https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&q=80`;

export const mockMerchant: Merchant = {
    id: "m-001",
    name: "Minh Anh Store",
    handle: "@minhanh.store",
    avatar: img("photo-1494790108377-be9c29b29330"),
    banner: img("photo-1441986300917-64674bd600d8"),
    bio: "Chuyên đồ công nghệ và phụ kiện second-hand tuyển chọn. Hàng chính hãng, mô tả trung thực, đóng gói cẩn thận.",
    location: "Quận 3, TP. Hồ Chí Minh",
    rating: 4.9,
    reviewCount: 312,
    totalSales: 1284,
    responseTime: "Phản hồi trong 10 phút",
    joinedAt: "03/2023",
    verified: true,
};

export const mockCategories: ProductCategory[] = [
    { id: "electronics", name: "Điện tử" },
    { id: "fashion", name: "Thời trang" },
    { id: "accessories", name: "Phụ kiện" },
];

export const mockProducts: Product[] = [
    {
        id: "p-001",
        title: "Tai nghe over-ear chống ồn",
        categoryId: "electronics",
        image: img("photo-1505740420928-5e560c06d30e"),
        condition: "like-new",
        location: "Quận 3, TP.HCM",
        sold: 42,
        variants: [
            { id: "p-001-v1", name: "Đen", sku: "HP-BLK", price: 1850000, stock: 5, colorHex: "#111827", isDefault: true },
            { id: "p-001-v2", name: "Bạc", sku: "HP-SLV", price: 1900000, stock: 2, colorHex: "#cbd5e1", isDefault: false },
        ],
    },
    {
        id: "p-002",
        title: "Máy ảnh film compact",
        categoryId: "electronics",
        image: img("photo-1526170375885-4d8ecf77b99f"),
        condition: "well-used",
        location: "Quận 3, TP.HCM",
        sold: 9,
        variants: [
            { id: "p-002-v1", name: "Mặc định", sku: "CAM-STD", price: 2400000, stock: 1, isDefault: true },
        ],
    },
    {
        id: "p-003",
        title: "Giày sneaker chạy bộ",
        categoryId: "fashion",
        image: img("photo-1542291026-7eec264c27ff"),
        condition: "new",
        location: "Quận 1, TP.HCM",
        sold: 77,
        variants: [
            { id: "p-003-v1", name: "Đỏ / 40", sku: "SN-RED-40", price: 1250000, stock: 3, colorHex: "#dc2626", isDefault: true },
            { id: "p-003-v2", name: "Đỏ / 41", sku: "SN-RED-41", price: 1250000, stock: 0, colorHex: "#dc2626", isDefault: false },
            { id: "p-003-v3", name: "Đỏ / 42", sku: "SN-RED-42", price: 1290000, stock: 4, colorHex: "#dc2626", isDefault: false },
        ],
    },
    {
        id: "p-004",
        title: "Giày thể thao đế êm",
        categoryId: "fashion",
        image: img("photo-1491553895911-0055eca6402d"),
        condition: "like-new",
        location: "Quận 3, TP.HCM",
        sold: 23,
        variants: [
            { id: "p-004-v1", name: "Xám / 41", sku: "SP-GRY-41", price: 780000, stock: 2, colorHex: "#94a3b8", isDefault: true },
            { id: "p-004-v2", name: "Xám / 43", sku: "SP-GRY-43", price: 780000, stock: 1, colorHex: "#94a3b8", isDefault: false },
        ],
    },
    {
        id: "p-005",
        title: "Đồng hồ đeo tay dây da",
        categoryId: "accessories",
        image: img("photo-1523275335684-37898b6baf30"),
        condition: "new",
        location: "Quận 3, TP.HCM",
        sold: 31,
        variants: [
            { id: "p-005-v1", name: "Dây nâu", sku: "WT-BRN", price: 990000, stock: 6, colorHex: "#78350f", isDefault: true },
            { id: "p-005-v2", name: "Dây đen", sku: "WT-BLK", price: 990000, stock: 8, colorHex: "#111827", isDefault: false },
        ],
    },
    {
        id: "p-006",
        title: "Kính mát gọng nhựa",
        categoryId: "accessories",
        image: img("photo-1572635196237-14b3f281503f"),
        condition: "well-used",
        location: "Quận 3, TP.HCM",
        sold: 15,
        variants: [
            { id: "p-006-v1", name: "Mặc định", sku: "SG-STD", price: 320000, stock: 4, isDefault: true },
        ],
    },
];

export const mockDashboardStats: DashboardStat[] = [
    { id: "revenue", label: "Doanh thu 30 ngày", value: "42.350.000 ₫", hint: "Tăng 12% so với kỳ trước" },
    { id: "orders", label: "Đơn cần xử lý", value: "7", hint: "3 đơn chờ đóng gói" },
    { id: "listings", label: "Sản phẩm đang bán", value: "6", hint: "1 phân loại đã hết hàng" },
    { id: "rating", label: "Đánh giá trung bình", value: "4,9", hint: "312 đánh giá" },
];

export const mockRecentOrders: RecentOrder[] = [
    { id: "o-1", code: "FM2481", buyerName: "Trần Quốc Bảo", productTitle: "Tai nghe over-ear chống ồn", total: 1850000, status: "pending", createdLabel: "15 phút trước" },
    { id: "o-2", code: "FM2480", buyerName: "Lê Thu Hà", productTitle: "Giày sneaker chạy bộ (Đỏ / 42)", total: 1290000, status: "pending", createdLabel: "1 giờ trước" },
    { id: "o-3", code: "FM2476", buyerName: "Phạm Gia Huy", productTitle: "Đồng hồ đeo tay dây da (Dây nâu)", total: 990000, status: "shipped", createdLabel: "Hôm qua" },
    { id: "o-4", code: "FM2471", buyerName: "Đỗ Mai Anh", productTitle: "Kính mát gọng nhựa", total: 320000, status: "completed", createdLabel: "2 ngày trước" },
];
````

## File: apps/merchant-app/next.config.ts
````typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/merchant",
  transpilePackages: ["@freemarket/ui", "@freemarket/utils", "@freemarket/auth-config"],
  images: { remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }] },
};

export default nextConfig;
````

## File: apps/merchant-app/package.json
````json
{
  "name": "merchant-app",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev -p 3002",
    "build": "next build",
    "start": "next start -p 3002",
    "lint": "eslint"
  },
  "dependencies": {
    "@freemarket/auth-config": "workspace:*",
    "@freemarket/ui": "workspace:*",
    "@freemarket/utils": "workspace:*",
    "@hookform/resolvers": "^7.0.1",
    "lucide-react": "^1.52.0",
    "next": "16.3.7",
    "next-auth": "5.0.0-beta.32",
    "react": "19.2.8",
    "react-dom": "19.2.8",
    "react-hook-form": "^7.91.0",
    "sonner": "^2.0.8",
    "tw-animate-css": "^1.4.0",
    "zod": "^4.6.7",
    "zustand": "^5.0.15"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "babel-plugin-react-compiler": "1.0.0",
    "eslint": "^9",
    "eslint-config-next": "16.3.7",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}
````

## File: apps/shop-app/src/components/home/sort-tabs.tsx
````typescript
import Link from "next/link";
import { cn } from "@freemarket/utils"
import type { SortOption } from "@/types";

interface SortTabsProps {
    activeSort: SortOption;
    category?: string;
}

const sortOptions: { value: SortOption; label: string }[] = [
    { value: "newest", label: "Mới nhất" },
    { value: "price-asc", label: "Giá thấp" },
    { value: "price-desc", label: "Giá cao" },
];

function buildHref(category: string | undefined, sort: SortOption): string {
    const params = new URLSearchParams();
    if (category) params.set("category", category);
    if (sort !== "newest") params.set("sort", sort);
    const query = params.toString();
    return query ? `/?${query}` : "/";
}

export function SortTabs({ activeSort, category }: SortTabsProps) {
    return (
        <div
            role="group"
            aria-label="Sắp xếp sản phẩm"
            className="flex items-center rounded-lg border border-slate-200 bg-slate-100 p-0.5"
        >
            {sortOptions.map(({ value, label }) => {
                const isActive = activeSort === value;
                return (
                    <Link
                        key={value}
                        href={buildHref(category, value)}
                        aria-current={isActive ? "true" : undefined}
                        className={cn(
                            "rounded-md px-2.5 py-1.5 text-xs font-medium transition-colors duration-150 sm:text-sm",
                            isActive ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-900",
                        )}
                    >
                        {label}
                    </Link>
                );
            })}
        </div>
    );
}
````

## File: apps/shop-app/src/components/layout/desktop-nav.tsx
````typescript
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getAppMode, getNavItems, isNavActive } from "@/lib/navigation";
import { cn } from "@freemarket/utils";

export function DesktopNav() {
    const pathname = usePathname();
    const items = getNavItems(getAppMode(pathname));

    return (
        <nav aria-label="Điều hướng chính" className="hidden items-center gap-1 md:flex">
            {items.map((item) => {
                const isActive = isNavActive(pathname, item);
                const Icon = item.icon;
                return (
                    <Link
                        key={item.href}
                        href={item.href}
                        aria-current={isActive ? "page" : undefined}
                        className={cn(
                            "flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-150",
                            item.highlight
                                ? "bg-emerald-600 text-white hover:bg-emerald-700"
                                : isActive
                                    ? "bg-slate-100 text-slate-900"
                                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900",
                        )}
                    >
                        <Icon className="size-4" aria-hidden="true" />
                        {item.label}
                    </Link>
                );
            })}
        </nav>
    );
}
````

## File: apps/shop-app/src/components/layout/site-header.tsx
````typescript
import Link from "next/link";
import { Search, Store } from "lucide-react";
import { Input } from "@freemarket/ui/input";
import { CartLink } from "@/components/layout/cart-link";
import { DesktopNav } from "@/components/layout/desktop-nav";
import { ModeSwitcher } from "@/components/layout/mode-switcher";

function SearchForm({ className }: { className?: string }) {
    return (
        <form action="/search" role="search" className={className}>
            <div className="relative">
                <Search
                    className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400"
                    aria-hidden="true"
                />
                <Input
                    type="search"
                    name="q"
                    placeholder="Tìm sản phẩm, danh mục, người bán..."
                    aria-label="Tìm kiếm sản phẩm"
                    className="h-10 border-slate-200 bg-slate-50 pl-9"
                />
            </div>
        </form>
    );
}

export function SiteHeader() {
    return (
        <header className="sticky top-0 z-30 border-b border-slate-200 bg-white">
            <div className="mx-auto flex h-14 w-full max-w-6xl items-center gap-3 px-4">
                <Link href="/" className="flex shrink-0 items-center gap-2" aria-label="FreeMarket - Trang chủ">
                    <span className="flex size-8 items-center justify-center rounded-lg bg-emerald-600 text-white">
                        <Store className="size-4" aria-hidden="true" />
                    </span>
                    <span className="hidden text-lg font-bold tracking-tight text-slate-900 sm:inline">
                        FreeMarket
                    </span>
                </Link>

                <SearchForm className="hidden max-w-md flex-1 md:block" />

                <div className="ml-auto flex items-center gap-2">
                    <DesktopNav />
                    <ModeSwitcher />
                    <CartLink />
                </div>
            </div>

            <div className="border-t border-slate-100 px-4 py-2 md:hidden">
                <SearchForm />
            </div>
        </header>
    );
}
````

## File: apps/shop-app/src/components/product/add-to-cart-button.tsx
````typescript
"use client";

import { ShoppingCart } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@freemarket/ui/button";
import { useCartStore } from "../../stores/use-cart-store";
import type { Product } from "@/types";

interface AddToCartButtonProps {
    product: Product;
    className?: string;
}

export function AddToCartButton({ product, className }: AddToCartButtonProps) {
    const addItem = useCartStore((state) => state.addItem);

    function handleClick(): void {
        addItem({
            productId: product.id,
            title: product.title,
            price: product.price,
            image: product.images[0],
            sellerName: product.seller.name,
            color: product.colors[0],
        });
        toast.success("Đã thêm vào giỏ hàng!");
    }

    return (
        <Button
            type="button"
            size="sm"
            onClick={handleClick}
            className={`w-full bg-emerald-600 text-white transition-colors duration-150 hover:bg-emerald-700 ${className ?? ""}`}
        >
            <ShoppingCart className="size-4" aria-hidden="true" />
            Thêm vào giỏ
        </Button>
    );
}
````

## File: apps/shop-app/src/components/product/condition-badge.tsx
````typescript
import type { ProductCondition } from "@/types";
import { cn } from "@freemarket/utils";

const conditionConfig: Record<ProductCondition, { label: string; className: string }> = {
    new: { label: "Mới", className: "bg-emerald-50 text-emerald-700 ring-emerald-200" },
    "like-new": { label: "Như mới", className: "bg-sky-50 text-sky-700 ring-sky-200" },
    "well-used": { label: "Đã dùng nhiều", className: "bg-amber-50 text-amber-700 ring-amber-200" },
};

interface ConditionBadgeProps {
    condition: ProductCondition;
    className?: string;
}

export function ConditionBadge({ condition, className }: ConditionBadgeProps) {
    const config = conditionConfig[condition];
    return (
        <span
            className={cn(
                "inline-flex items-center rounded-md px-1.5 py-0.5 text-[11px] font-medium ring-1 ring-inset",
                config.className,
                className,
            )}
        >
            {config.label}
        </span>
    );
}
````

## File: apps/shop-app/src/components/product/product-card.tsx
````typescript
import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { AddToCartButton } from "./add-to-cart-button";
import { ConditionBadge } from "./condition-badge";
import { SellerBadge } from "./seller-badge";
import { WishlistButton } from "./wishlist-button";
import { formatPrice } from "@freemarket/utils";
import type { Product } from "@/types";

interface ProductCardProps {
    product: Product;
    priority?: boolean;
}

export function ProductCard({ product, priority = false }: ProductCardProps) {
    const discount =
        product.originalPrice && product.originalPrice > product.price
            ? Math.round((1 - product.price / product.originalPrice) * 100)
            : 0;

    return (
        <article className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white">
            <div className="relative">
                <Link href={`/product/${product.id}`} className="block" aria-label={product.title}>
                    <div className="relative aspect-square w-full bg-slate-100">
                        <Image
                            src={product.images[0]}
                            alt={product.title}
                            fill
                            priority={priority}
                            sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                            className="object-cover"
                        />
                    </div>
                </Link>
                <ConditionBadge condition={product.condition} className="absolute left-2 top-2 bg-white" />
                <WishlistButton productId={product.id} className="absolute right-2 top-2" />
                {discount > 0 && (
                    <span className="absolute bottom-2 left-2 rounded-md bg-rose-600 px-1.5 py-0.5 text-[11px] font-semibold text-white">
                        -{discount}%
                    </span>
                )}
            </div>

            <div className="flex flex-1 flex-col gap-2 p-3">
                <Link
                    href={`/product/${product.id}`}
                    className="line-clamp-2 min-h-10 text-sm font-medium leading-5 text-slate-900 hover:underline"
                >
                    {product.title}
                </Link>

                <div>
                    <p className="text-base font-bold text-slate-900">{formatPrice(product.price)}</p>
                    {discount > 0 && product.originalPrice && (
                        <p className="text-xs text-slate-400 line-through">{formatPrice(product.originalPrice)}</p>
                    )}
                </div>

                <div className="flex items-center gap-1 text-xs text-slate-500">
                    <MapPin className="size-3 shrink-0" aria-hidden="true" />
                    <span className="truncate">{product.location}</span>
                    <span aria-hidden="true">·</span>
                    <span className="shrink-0">{product.postedLabel}</span>
                </div>

                <div className="border-t border-slate-100 pt-2">
                    <SellerBadge seller={product.seller} />
                </div>

                <div className="mt-auto pt-1">
                    <AddToCartButton product={product} />
                </div>
            </div>
        </article>
    );
}
````

## File: apps/shop-app/src/components/product/seller-badge.tsx
````typescript
import { BadgeCheck, Clock, Star } from "lucide-react";
import { formatCompactNumber } from "@freemarket/utils";
import type { Seller } from "@/types";

interface SellerBadgeProps {
    seller: Seller;
}

export function SellerBadge({ seller }: SellerBadgeProps) {
    return (
        <div className="space-y-0.5 text-xs text-slate-500">
            <div className="flex items-center gap-1">
                <span className="truncate font-medium text-slate-700">{seller.name}</span>
                {seller.verified && (
                    <BadgeCheck className="size-3.5 shrink-0 text-emerald-600" aria-label="Người bán đã xác minh" />
                )}
            </div>
            <div className="flex items-center gap-1.5">
                <span className="flex items-center gap-0.5">
                    <Star className="size-3 fill-amber-400 text-amber-400" aria-hidden="true" />
                    {seller.rating.toFixed(1)}
                </span>
                <span aria-hidden="true">·</span>
                <span>Đã bán {formatCompactNumber(seller.totalSales)}</span>
            </div>
            <div className="flex items-center gap-1">
                <Clock className="size-3" aria-hidden="true" />
                <span className="truncate">{seller.responseTime}</span>
            </div>
        </div>
    );
}
````

## File: apps/shop-app/src/components/shared/empty-state.tsx
````typescript
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { Button } from "@freemarket/ui/button";

interface EmptyStateProps {
    icon: LucideIcon;
    title: string;
    description: string;
    actionLabel: string;
    actionHref: string;
}

export function EmptyState({ icon: Icon, title, description, actionLabel, actionHref }: EmptyStateProps) {
    return (
        <div className="flex flex-col items-center rounded-xl border border-dashed border-slate-300 bg-white px-6 py-14 text-center">
            <span className="flex size-12 items-center justify-center rounded-full bg-slate-100 text-slate-500">
                <Icon className="size-6" aria-hidden="true" />
            </span>
            <h2 className="mt-4 text-base font-semibold text-slate-900">{title}</h2>
            <p className="mt-1 max-w-sm text-sm text-slate-500">{description}</p>
            {/* <Button asChild className="mt-5 bg-emerald-600 text-white hover:bg-emerald-700">
                <Link href={actionHref}>{actionLabel}</Link>
            </Button> */}
        </div>
    );
}
````

## File: apps/shop-app/next.config.ts
````typescript
import type { NextConfig } from "next";

const AUTH_ZONE_URL = process.env.AUTH_ZONE_URL ?? "http://localhost:3001";
const MERCHANT_ZONE_URL = process.env.MERCHANT_ZONE_URL ?? "http://localhost:3002";

const nextConfig: NextConfig = {
  transpilePackages: ["@freemarket/ui", "@freemarket/utils", "@freemarket/auth-config"],
  images: {
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
  async rewrites() {
    return [
      { source: "/merchant", destination: `${MERCHANT_ZONE_URL}/merchant` },
      { source: "/merchant/:path+", destination: `${MERCHANT_ZONE_URL}/merchant/:path+` },
      { source: "/login", destination: `${AUTH_ZONE_URL}/login` },
      { source: "/register", destination: `${AUTH_ZONE_URL}/register` },
      { source: "/verify", destination: `${AUTH_ZONE_URL}/verify` },
      { source: "/api/auth/:path+", destination: `${AUTH_ZONE_URL}/api/auth/:path+` },
      { source: "/auth-static/:path+", destination: `${AUTH_ZONE_URL}/auth-static/:path+` },
    ];
  },
};

export default nextConfig;
````

## File: .gitignore
````
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.*
.yarn/*
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/versions

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.pnpm-debug.log*

# env files (can opt-in for committing if needed)
.env

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts

# repomix
.repomixignore
proj-context.md
repomix.config.json
````

## File: tsconfig.json
````json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": [
        "./src/*"
      ],
      "@freemarket/ui/*": [
        "./packages/ui/src/*"
      ],
      "@freemarket/utils": [
        "./packages/utils/src/index.ts"
      ],
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".next/dev/types/**/*.ts",
    "**/*.mts",
    "apps/merchant-app/src/components/onboard/form-fieldstsx"
  ],
  "exclude": [
    "node_modules"
  ]
}
````

## File: apps/auth-app/src/components/auth/form-field.tsx
````typescript
import { Label } from "@freemarket/ui/label";
import type { ReactNode } from "react";

interface FormFieldProps {
    id: string;
    label: string;
    error?: string;
    hint?: string;
    children: ReactNode;
}

export function FormField({ id, label, error, hint, children }: FormFieldProps) {
    return (
        <div className="space-y-1.5">
            <Label htmlFor={id}>{label}</Label>
            {children}
            {error ? (
                <p id={`${id}-error`} className="text-xs text-rose-600">
                    {error}
                </p>
            ) : (
                hint && <p className="text-xs text-slate-500">{hint}</p>
            )}
        </div>
    );
}
````

## File: apps/auth-app/src/components/auth/login-form.tsx
````typescript
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { Controller, useForm } from "react-hook-form";
import { AlertCircle, Eye, EyeOff, Loader2, LogIn } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@freemarket/ui/button";
import { Checkbox } from "@freemarket/ui/checkbox";
import { Input } from "@freemarket/ui/input";
import { Label } from "@freemarket/ui/label";
import { getLoginErrorMessage } from "@/lib/auth-errors";
import { cn } from "@freemarket/utils"
import { loginSchema } from "@/lib/validations/auth";
import { useLoginPreferencesStore } from "@/stores/use-login-preferences-store";
import type { LoginFormValues } from "@/types";
import { requestVerifyProcessAction } from "@/actions/verify-actions";

interface LoginFormProps {
    redirectTo: string;
}

export function LoginForm({ redirectTo }: LoginFormProps) {
    const router = useRouter();
    const setRememberedEmail = useLoginPreferencesStore((state) => state.setRememberedEmail);
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const {
        register,
        control,
        handleSubmit,
        setValue,
        setError,
        formState: { errors, isSubmitting },
    } = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema),
        defaultValues: { emailOrPhone: "", password: "", rememberMe: false },
    });

    useEffect(() => {
        const rememberedEmail = useLoginPreferencesStore.getState().rememberedEmail;
        if (rememberedEmail) {
            setValue("emailOrPhone", rememberedEmail);
            setValue("rememberMe", true);
        }
    }, [setValue]);

    function showError(message: string): void {
        setError("root", { message });
        toast.error(message);
    }

    async function redirectToVerify(email: string): Promise<void> {
        toast.info("Tài khoản chưa được xác minh. Đang chuyển đến trang xác minh...");
        const result = await requestVerifyProcessAction(email);
        if (!result.ok) {
            showError(result.message);
            return;
        }
        router.push(`/verify?key=${encodeURIComponent(result.data.key)}`);
    }

    async function onSubmit(values: LoginFormValues): Promise<void> {
        const emailOrPhone = values.emailOrPhone.trim();

        const result = await signIn("credentials", {
            emailOrPhone,
            password: values.password,
            redirect: false,
        });

        if (!result || result.error) {
            if (result?.code === "account_inactive") {
                await redirectToVerify(emailOrPhone);
                return;
            }
            showError(getLoginErrorMessage(result?.code));
            return;
        }

        setRememberedEmail(values.rememberMe ? emailOrPhone : "");
        toast.success("Đăng nhập thành công!");
        router.replace(redirectTo);
        router.refresh();
    }

    return (
        <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
            <div className="mb-5 space-y-1">
                <h1 className="text-xl font-bold text-slate-900">Đăng nhập</h1>
                <p className="text-sm text-slate-500">Mua bán dễ dàng, giao dịch an tâm.</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
                {errors.root?.message && (
                    <div
                        role="alert"
                        className="flex items-start gap-2 rounded-lg border border-rose-200 bg-rose-50 px-3 py-2.5 text-sm text-rose-700"
                    >
                        <AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                        <span>{errors.root.message}</span>
                    </div>
                )}

                <div className="space-y-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        type="email"
                        autoComplete="email"
                        inputMode="email"
                        placeholder="ten@email.com"
                        aria-invalid={Boolean(errors.emailOrPhone)}
                        aria-describedby={errors.emailOrPhone ? "email-error" : undefined}
                        className={cn("h-11", errors.emailOrPhone && "border-rose-400")}
                        {...register("emailOrPhone")}
                    />
                    {errors.emailOrPhone && (
                        <p id="email-error" className="text-xs text-rose-600">
                            {errors.emailOrPhone.message}
                        </p>
                    )}
                </div>

                <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                        <Label htmlFor="password">Mật khẩu</Label>
                        <Link
                            href="/forgot-password"
                            className="text-xs font-medium text-emerald-700 hover:underline"
                        >
                            Quên mật khẩu?
                        </Link>
                    </div>
                    <div className="relative">
                        <Input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            autoComplete="current-password"
                            placeholder="Nhập mật khẩu"
                            aria-invalid={Boolean(errors.password)}
                            aria-describedby={errors.password ? "password-error" : undefined}
                            className={cn("h-11 pr-11", errors.password && "border-rose-400")}
                            {...register("password")}
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword((prev) => !prev)}
                            aria-label={showPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
                            aria-pressed={showPassword}
                            className="absolute right-1 top-1/2 flex size-9 -translate-y-1/2 items-center justify-center rounded-md text-slate-400 transition-colors duration-150 hover:text-slate-700"
                        >
                            {showPassword ? (
                                <EyeOff className="size-4" aria-hidden="true" />
                            ) : (
                                <Eye className="size-4" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                    {errors.password && (
                        <p id="password-error" className="text-xs text-rose-600">
                            {errors.password.message}
                        </p>
                    )}
                </div>

                <Controller
                    control={control}
                    name="rememberMe"
                    render={({ field }) => (
                        <div className="flex items-center gap-2">
                            <Checkbox
                                id="rememberMe"
                                checked={field.value}
                                onCheckedChange={(checked) => field.onChange(checked === true)}
                            />
                            <Label htmlFor="rememberMe" className="cursor-pointer text-sm font-normal text-slate-600">
                                Ghi nhớ email của tôi
                            </Label>
                        </div>
                    )}
                />

                <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="h-11 w-full bg-emerald-600 text-white transition-colors duration-150 hover:bg-emerald-700"
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 className="size-4 animate-spin" aria-hidden="true" />
                            Đang đăng nhập...
                        </>
                    ) : (
                        <>
                            <LogIn className="size-4" aria-hidden="true" />
                            Đăng nhập
                        </>
                    )}
                </Button>
            </form>

            <p className="mt-5 text-center text-sm text-slate-500">
                Chưa có tài khoản?{" "}
                <Link href="/register" className="font-semibold text-emerald-700 hover:underline">
                    Đăng ký ngay
                </Link>
            </p>
        </div>
    );
}
````

## File: apps/auth-app/src/components/auth/register-form.tsx
````typescript
"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { ArrowLeft, ArrowRight, Eye, EyeOff, Loader2, UserPlus } from "lucide-react";
import { toast } from "sonner";
import { FormField } from "@/components/auth/form-field";
import { PasswordStrength } from "@/components/auth/password-strength";
import { RegisterProgress } from "@/components/auth/register-progress";
import { Button } from "@freemarket/ui/button";
import { Checkbox } from "@freemarket/ui/checkbox";
import { Input } from "@freemarket/ui/input";
import { intentOptions, registerSteps, vietnamCities } from "@/lib/constants";
// import { registerAccount } from "@/lib/mock-auth";
import { cn } from "@freemarket/utils"
import { registerSchema, registerStepFields } from "@/lib/validations/auth";
import { useAccountsStore } from "@/stores/use-accounts-store";
import type { RegisterFormValues } from "@/types";

const LAST_STEP = registerSteps.length - 1;

const selectClassName =
    "h-11 w-full rounded-md border border-slate-200 bg-white px-3 text-sm text-slate-900 outline-none transition-colors duration-150 focus-visible:border-emerald-600 focus-visible:ring-2 focus-visible:ring-emerald-600/30";

export function RegisterForm() {
    const router = useRouter();
    const registeredAccounts = useAccountsStore((state) => state.accounts);
    const addAccount = useAccountsStore((state) => state.addAccount);

    const [step, setStep] = useState<number>(0);
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const {
        register,
        control,
        handleSubmit,
        trigger,
        setError,
        getValues,
        watch,
        formState: { errors, isSubmitting },
    } = useForm<RegisterFormValues>({
        resolver: zodResolver(registerSchema),
        mode: "onTouched",
        defaultValues: {
            fullName: "",
            email: "",
            password: "",
            confirmPassword: "",
            phone: "",
            city: "",
            intent: "buy",
            acceptTerms: false,
        },
    });

    const passwordValue = watch("password");
    const summary = watch();

    async function handleNext(): Promise<void> {
        const isValid = await trigger(registerStepFields[step]);
        if (!isValid) return;

        if (step === 0 && getValues("password") !== getValues("confirmPassword")) {
            setError("confirmPassword", { message: "Mật khẩu xác nhận không khớp" });
            return;
        }

        setStep((current) => Math.min(current + 1, LAST_STEP));
    }

    function handleBack(): void {
        setStep((current) => Math.max(current - 1, 0));
    }

    function handleFormSubmit(event: FormEvent<HTMLFormElement>): void {
        event.preventDefault();
        if (step < LAST_STEP) {
            void handleNext();
            return;
        }
        void handleSubmit(onSubmit)(event);
    }

    async function onSubmit(values: RegisterFormValues): Promise<void> {
        // const result = await registerAccount(values, registeredAccounts);

        // if (!result.ok) {
        //     setStep(0);
        //     setError("email", { message: result.message });
        //     toast.error(result.message);
        //     return;
        // }

        // addAccount(result.account);
        toast.success("Đăng ký thành công! Vui lòng đăng nhập.");
        router.replace("/login");
    }

    const currentIntentLabel =
        intentOptions.find((option) => option.value === summary.intent)?.label ?? "";

    return (
        <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
            <div className="mb-5 space-y-1">
                <h1 className="text-xl font-bold text-slate-900">Tạo tài khoản</h1>
                <p className="text-sm text-slate-500">{registerSteps[step].description}</p>
            </div>

            <div className="mb-6">
                <RegisterProgress steps={registerSteps} currentStep={step} />
            </div>

            <form onSubmit={handleFormSubmit} noValidate className="space-y-4">
                {step === 0 && (
                    <div className="space-y-4">
                        <FormField id="fullName" label="Họ và tên" error={errors.fullName?.message}>
                            <Input
                                id="fullName"
                                autoComplete="name"
                                placeholder="Nguyễn Văn A"
                                aria-invalid={Boolean(errors.fullName)}
                                aria-describedby={errors.fullName ? "fullName-error" : undefined}
                                className={cn("h-11", errors.fullName && "border-rose-400")}
                                {...register("fullName")}
                            />
                        </FormField>

                        <FormField id="email" label="Email" error={errors.email?.message}>
                            <Input
                                id="email"
                                type="email"
                                autoComplete="email"
                                inputMode="email"
                                placeholder="ten@email.com"
                                aria-invalid={Boolean(errors.email)}
                                aria-describedby={errors.email ? "email-error" : undefined}
                                className={cn("h-11", errors.email && "border-rose-400")}
                                {...register("email")}
                            />
                        </FormField>

                        <FormField
                            id="password"
                            label="Mật khẩu"
                            error={errors.password?.message}
                            hint="Tối thiểu 8 ký tự, gồm chữ và số."
                        >
                            <div className="relative">
                                <Input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    autoComplete="new-password"
                                    placeholder="Tạo mật khẩu"
                                    aria-invalid={Boolean(errors.password)}
                                    aria-describedby={errors.password ? "password-error" : undefined}
                                    className={cn("h-11 pr-11", errors.password && "border-rose-400")}
                                    {...register("password")}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword((prev) => !prev)}
                                    aria-label={showPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
                                    aria-pressed={showPassword}
                                    className="absolute right-1 top-1/2 flex size-9 -translate-y-1/2 items-center justify-center rounded-md text-slate-400 transition-colors duration-150 hover:text-slate-700"
                                >
                                    {showPassword ? (
                                        <EyeOff className="size-4" aria-hidden="true" />
                                    ) : (
                                        <Eye className="size-4" aria-hidden="true" />
                                    )}
                                </button>
                            </div>
                            <PasswordStrength password={passwordValue} />
                        </FormField>

                        <FormField
                            id="confirmPassword"
                            label="Nhập lại mật khẩu"
                            error={errors.confirmPassword?.message}
                        >
                            <Input
                                id="confirmPassword"
                                type={showPassword ? "text" : "password"}
                                autoComplete="new-password"
                                placeholder="Nhập lại mật khẩu"
                                aria-invalid={Boolean(errors.confirmPassword)}
                                aria-describedby={errors.confirmPassword ? "confirmPassword-error" : undefined}
                                className={cn("h-11", errors.confirmPassword && "border-rose-400")}
                                {...register("confirmPassword")}
                            />
                        </FormField>
                    </div>
                )}

                {step === 1 && (
                    <div className="space-y-4">
                        <FormField
                            id="phone"
                            label="Số điện thoại"
                            error={errors.phone?.message}
                            hint="Dùng để người mua và người bán liên hệ khi giao dịch."
                        >
                            <Input
                                id="phone"
                                type="tel"
                                autoComplete="tel"
                                inputMode="tel"
                                placeholder="0901234567"
                                aria-invalid={Boolean(errors.phone)}
                                aria-describedby={errors.phone ? "phone-error" : undefined}
                                className={cn("h-11", errors.phone && "border-rose-400")}
                                {...register("phone")}
                            />
                        </FormField>

                        <FormField id="city" label="Tỉnh/Thành phố" error={errors.city?.message}>
                            <select
                                id="city"
                                aria-invalid={Boolean(errors.city)}
                                aria-describedby={errors.city ? "city-error" : undefined}
                                className={cn(selectClassName, errors.city && "border-rose-400")}
                                {...register("city")}
                            >
                                <option value="">Chọn tỉnh/thành</option>
                                {vietnamCities.map((city) => (
                                    <option key={city} value={city}>
                                        {city}
                                    </option>
                                ))}
                            </select>
                        </FormField>

                        <fieldset className="space-y-2">
                            <legend className="mb-1.5 text-sm font-medium text-slate-900">
                                Bạn muốn làm gì trên FreeMarket?
                            </legend>
                            {intentOptions.map(({ value, label, description, icon: Icon }) => (
                                <label
                                    key={value}
                                    className="group flex cursor-pointer items-center gap-3 rounded-lg border border-slate-200 bg-white p-3 transition-colors duration-150 hover:bg-slate-50 has-[:checked]:border-emerald-600 has-[:checked]:bg-emerald-50/60 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-emerald-600/40"
                                >
                                    <input type="radio" value={value} className="sr-only" {...register("intent")} />
                                    <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-600 group-has-[:checked]:bg-emerald-100 group-has-[:checked]:text-emerald-700">
                                        <Icon className="size-4" aria-hidden="true" />
                                    </span>
                                    <span className="min-w-0 flex-1">
                                        <span className="block text-sm font-medium text-slate-900">{label}</span>
                                        <span className="block text-xs text-slate-500">{description}</span>
                                    </span>
                                    <span
                                        aria-hidden="true"
                                        className="size-4 shrink-0 rounded-full border border-slate-300 bg-white group-has-[:checked]:border-[5px] group-has-[:checked]:border-emerald-600"
                                    />
                                </label>
                            ))}
                        </fieldset>
                    </div>
                )}

                {step === 2 && (
                    <div className="space-y-4">
                        <dl className="divide-y divide-slate-100 rounded-lg border border-slate-200 bg-slate-50/60 text-sm">
                            {[
                                { label: "Họ và tên", value: summary.fullName },
                                { label: "Email", value: summary.email },
                                { label: "Số điện thoại", value: summary.phone },
                                { label: "Tỉnh/Thành phố", value: summary.city },
                                { label: "Mục đích", value: currentIntentLabel },
                            ].map((row) => (
                                <div key={row.label} className="flex items-start justify-between gap-4 px-3 py-2.5">
                                    <dt className="shrink-0 text-slate-500">{row.label}</dt>
                                    <dd className="break-all text-right font-medium text-slate-900">{row.value}</dd>
                                </div>
                            ))}
                        </dl>

                        <Controller
                            control={control}
                            name="acceptTerms"
                            render={({ field }) => (
                                <div className="space-y-1.5">
                                    <div className="flex items-start gap-2">
                                        <Checkbox
                                            id="acceptTerms"
                                            checked={field.value}
                                            onCheckedChange={(checked) => field.onChange(checked === true)}
                                            aria-invalid={Boolean(errors.acceptTerms)}
                                            aria-describedby={errors.acceptTerms ? "acceptTerms-error" : undefined}
                                            className="mt-0.5"
                                        />
                                        <label
                                            htmlFor="acceptTerms"
                                            className="cursor-pointer text-sm leading-5 text-slate-600"
                                        >
                                            Tôi đồng ý với{" "}
                                            <Link href="/terms" className="font-medium text-emerald-700 hover:underline">
                                                Điều khoản sử dụng
                                            </Link>{" "}
                                            và{" "}
                                            <Link href="/privacy" className="font-medium text-emerald-700 hover:underline">
                                                Chính sách bảo mật
                                            </Link>
                                            .
                                        </label>
                                    </div>
                                    {errors.acceptTerms && (
                                        <p id="acceptTerms-error" className="text-xs text-rose-600">
                                            {errors.acceptTerms.message}
                                        </p>
                                    )}
                                </div>
                            )}
                        />
                    </div>
                )}

                <div className="flex items-center gap-2 pt-2">
                    {step > 0 && (
                        <Button
                            type="button"
                            variant="outline"
                            onClick={handleBack}
                            disabled={isSubmitting}
                            className="h-11 border-slate-300 bg-white"
                        >
                            <ArrowLeft className="size-4" aria-hidden="true" />
                            Quay lại
                        </Button>
                    )}

                    {step < LAST_STEP ? (
                        <Button
                            key="next"
                            type="button"
                            onClick={() => void handleNext()}
                            className="h-11 flex-1 bg-emerald-600 text-white transition-colors duration-150 hover:bg-emerald-700"
                        >
                            Tiếp tục
                            <ArrowRight className="size-4" aria-hidden="true" />
                        </Button>
                    ) : (
                        <Button
                            key="submit"
                            type="submit"
                            disabled={isSubmitting}
                            className="h-11 flex-1 bg-emerald-600 text-white transition-colors duration-150 hover:bg-emerald-700"
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="size-4 animate-spin" aria-hidden="true" />
                                    Đang tạo tài khoản...
                                </>
                            ) : (
                                <>
                                    <UserPlus className="size-4" aria-hidden="true" />
                                    Hoàn tất đăng ký
                                </>
                            )}
                        </Button>
                    )}
                </div>
            </form>

            <p className="mt-5 text-center text-sm text-slate-500">
                Đã có tài khoản?{" "}
                <Link href="/login" className="font-semibold text-emerald-700 hover:underline">
                    Đăng nhập
                </Link>
            </p>
        </div>
    );
}
````

## File: apps/auth-app/src/components/auth/verify-account-form.tsx
````typescript
"use client";

import { useRef, useState, type ChangeEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { AlertCircle, Clock, Loader2, Mail, ShieldCheck } from "lucide-react";
import { toast } from "sonner";
import { requestVerifyEmailAction } from "@/actions/verify-actions";
import { Button } from "@freemarket/ui/button";
import { Input } from "@freemarket/ui/input";
import { useCountdown } from "@/hooks/use-countdown";
import { getLoginErrorMessage } from "@/lib/auth-errors";
import { cn } from "@freemarket/utils"
import { OTP_LENGTH, otpSchema } from "@/lib/validations/verify";
import type { VerifyAccountUser } from "@/types";
import { formatCountdown, maskEmail } from "@/lib/format";

const OTP_TTL_SECONDS = 5 * 60;
const RESEND_COOLDOWN_SECONDS = 60;

type BlockReason = "expired" | "locked" | null;

interface VerifyAccountFormProps {
    user: VerifyAccountUser;
    verifyKey: string;
    redirectTo: string;
}

export function VerifyAccountForm({ user, verifyKey, redirectTo }: VerifyAccountFormProps) {
    const router = useRouter();
    const inputRef = useRef<HTMLInputElement>(null);

    const [otp, setOtp] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [blockReason, setBlockReason] = useState<BlockReason>(null);
    const [isVerifying, setIsVerifying] = useState<boolean>(false);
    const [isSending, setIsSending] = useState<boolean>(false);
    const [isDone, setIsDone] = useState<boolean>(false);

    const ttl = useCountdown(OTP_TTL_SECONDS);
    const cooldown = useCountdown(0);

    const isExpired = blockReason === "expired" || ttl.secondsLeft === 0;
    const isLocked = blockReason === "locked";
    const isBlocked = isExpired || isLocked;
    const maskedEmail = maskEmail(user.email);

    function handleFailure(code: string | null | undefined): void {
        const message = getLoginErrorMessage(code);

        if (code === "invalid_token") {
            setBlockReason("expired");
            toast.error(message);
            return;
        }
        if (code === "mfa_locked") {
            setBlockReason("locked");
            toast.error(message);
            return;
        }

        // incorrect_otp và các lỗi tạm thời: cho nhập lại
        setOtp("");
        setErrorMessage(message);
        toast.error(message);
        inputRef.current?.focus();
    }

    async function submitOtp(code: string): Promise<void> {
        if (isVerifying || isBlocked || isDone) return;

        setIsVerifying(true);
        setErrorMessage(null);
        try {
            const result = await signIn("verify-otp", {
                key: verifyKey,
                otp: code,
                redirect: false,
            });

            if (result && !result.error) {
                setIsDone(true);
                toast.success("Xác minh thành công!");
                router.replace(redirectTo);
                router.refresh();
                return;
            }
            handleFailure(result?.code);
        } catch {
            handleFailure("network_error");
        } finally {
            setIsVerifying(false);
        }
    }

    function handleChange(event: ChangeEvent<HTMLInputElement>): void {
        const digits = event.target.value.replace(/\D/g, "").slice(0, OTP_LENGTH);
        setOtp(digits);
        setErrorMessage(null);
        if (otpSchema.safeParse(digits).success) void submitOtp(digits);
    }

    async function handleResend(): Promise<void> {
        setIsSending(true);
        try {
            const result = await requestVerifyEmailAction(verifyKey);
            if (!result.ok) {
                if (result.code === "invalid_token") setBlockReason("expired");
                toast.error(result.message);
                return;
            }
            cooldown.start(RESEND_COOLDOWN_SECONDS);
            setOtp("");
            setErrorMessage(null);
            toast.success(`Đã gửi mã xác minh đến ${maskedEmail}`);
            inputRef.current?.focus();
        } finally {
            setIsSending(false);
        }
    }

    return (
        <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
            <div className="mb-5 space-y-3">
                <span className="flex size-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
                    <ShieldCheck className="size-6" aria-hidden="true" />
                </span>
                <div className="space-y-1">
                    <h1 className="text-xl font-bold text-slate-900">Xác minh tài khoản</h1>
                    <p className="text-sm text-slate-500">
                        {user.fullName ? `Xin chào ${user.fullName}. ` : ""}
                        Nhập mã gồm 6 chữ số đã gửi đến{" "}
                        <span className="font-medium text-slate-900">{maskedEmail}</span>.
                    </p>
                </div>
            </div>

            {isBlocked && (
                <div
                    role="alert"
                    className="mb-4 flex items-start gap-2 rounded-lg border border-rose-200 bg-rose-50 px-3 py-2.5 text-sm text-rose-700"
                >
                    <AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                    <span>
                        {isLocked
                            ? getLoginErrorMessage("mfa_locked")
                            : "Đã hết thời gian xác minh. Vui lòng đăng nhập lại để nhận mã mới."}
                    </span>
                </div>
            )}

            <div className="space-y-2">
                <div className="flex items-center justify-between">
                    <label htmlFor="otp" className="text-sm font-medium text-slate-900">
                        Mã OTP
                    </label>
                    <span
                        role="timer"
                        className={cn(
                            "flex items-center gap-1 text-xs tabular-nums",
                            isExpired ? "text-rose-600" : "text-slate-500",
                        )}
                    >
                        <Clock className="size-3.5" aria-hidden="true" />
                        {isExpired ? "Đã hết hạn" : `Hết hạn sau ${formatCountdown(ttl.secondsLeft)}`}
                    </span>
                </div>

                <Input
                    id="otp"
                    ref={inputRef}
                    type="text"
                    inputMode="numeric"
                    pattern="\d*"
                    autoComplete="one-time-code"
                    maxLength={OTP_LENGTH}
                    placeholder="••••••"
                    value={otp}
                    onChange={handleChange}
                    readOnly={isVerifying}
                    disabled={isBlocked || isDone}
                    aria-invalid={Boolean(errorMessage)}
                    aria-describedby={errorMessage ? "otp-error" : undefined}
                    className={cn(
                        "h-12 text-center text-xl font-semibold tracking-[0.5em] tabular-nums",
                        errorMessage && "border-rose-400",
                    )}
                />

                {errorMessage && (
                    <p id="otp-error" role="alert" className="text-xs text-rose-600">
                        {errorMessage}
                    </p>
                )}

                {(isVerifying || isDone) && (
                    <p className="flex items-center gap-1.5 text-xs text-slate-500" aria-live="polite">
                        <Loader2 className="size-3.5 animate-spin" aria-hidden="true" />
                        {isDone ? "Đang đăng nhập..." : "Đang xác minh..."}
                    </p>
                )}
            </div>

            <Button
                type="button"
                variant="outline"
                onClick={() => void handleResend()}
                disabled={isSending || isVerifying || isBlocked || isDone || cooldown.secondsLeft > 0}
                className="mt-5 h-11 w-full border-slate-300 bg-white"
            >
                {isSending ? (
                    <>
                        <Loader2 className="size-4 animate-spin" aria-hidden="true" />
                        Đang gửi...
                    </>
                ) : (
                    <>
                        <Mail className="size-4" aria-hidden="true" />
                        {cooldown.secondsLeft > 0
                            ? `Gửi lại email sau ${cooldown.secondsLeft}s`
                            : "Gửi lại email"}
                    </>
                )}
            </Button>

            {isBlocked ? (
                <Link
                    href="/login"
                    className="mt-3 inline-flex h-11 w-full items-center justify-center rounded-lg bg-emerald-600 px-4 text-sm font-medium text-white transition-colors duration-150 hover:bg-emerald-700"
                >
                    Quay lại đăng nhập
                </Link>
            ) : (
                <p className="mt-5 text-center text-sm text-slate-500">
                    <Link href="/login" className="font-semibold text-emerald-700 hover:underline">
                        Quay lại đăng nhập
                    </Link>
                </p>
            )}
        </div>
    );
}
````

## File: apps/auth-app/next.config.ts
````typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  assetPrefix: "/auth-static",
  transpilePackages: ["@freemarket/ui", "@freemarket/utils", "@freemarket/auth-config"],
  async rewrites() {
    // Để truy cập trực tiếp localhost:3001 vẫn tải được asset
    return {
      beforeFiles: [{ source: "/auth-static/_next/:path+", destination: "/_next/:path+" }],
    };
  },
};

export default nextConfig;
````

## File: apps/auth-app/package.json
````json
{
  "name": "auth-app",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev -p 3001",
    "build": "next build",
    "start": "next start -p 3001",
    "lint": "eslint"
  },
  "dependencies": {
    "@freemarket/auth-config": "workspace:*",
    "@freemarket/ui": "workspace:*",
    "@freemarket/utils": "workspace:*",
    "@hookform/resolvers": "^6.0.0",
    "lucide-react": "^1.52.0",
    "next": "16.3.7",
    "next-auth": "5.0.0-beta.32",
    "react": "19.2.8",
    "react-dom": "19.2.8",
    "react-hook-form": "^7.90.0",
    "sonner": "^2.0.8",
    "tw-animate-css": "^1.4.0",
    "zod": "^4.6.7",
    "zustand": "^5.0.15"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "babel-plugin-react-compiler": "1.0.0",
    "eslint": "^9",
    "eslint-config-next": "16.3.7",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}
````

## File: apps/merchant-app/src/app/layout.tsx
````typescript
import type { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { redirect } from "next/navigation";
import { Toaster } from "sonner";
import "./globals.css";
import { AuthProvider } from "@/components/providers/auth-provider";
import { auth } from "@/auth";

const inter = Inter({
    subsets: ["latin", "vietnamese"],
    variable: "--font-inter",
    display: "swap",
});

export const metadata: Metadata = {
    title: {
        default: "FreeMarket - Chợ mua bán đồ mới & cũ",
        template: "%s | FreeMarket",
    },
    description:
        "FreeMarket là chợ C2C giúp bạn mua bán đồ mới và đồ cũ nhanh chóng, an toàn, minh bạch giá.",
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    themeColor: "#ffffff",
};

export default async function RootLayout({ children }: { children: ReactNode }) {
    const session = await auth();

    if (!session) {
        redirect("/login?redirect=/merchant");
    }

    return (
        <html lang="vi" className={inter.variable}>
            <body className="min-h-dvh bg-slate-50/80 font-sans text-slate-900 antialiased">
                <AuthProvider>{children}</AuthProvider>
                <Toaster position="top-center" richColors closeButton />
            </body>
        </html>
    );
}
````

## File: package.json
````json
{
  "name": "freemarket",
  "private": true,
  "packageManager": "pnpm@12.8.1",
  "scripts": {
    "dev": "pnpm --parallel --filter \"./apps/*\" dev",
    "build": "pnpm --filter \"./apps/*\" build",
    "lint": "pnpm -r lint"
  }
}
````
