import { DEFAULT_AVATAR } from "@/lib/constants";
import { mockAccounts } from "@/lib/mock-data";
import type { LoginResult, MockAccount, RegisterFormValues, RegisterResult } from "@/types";

const NETWORK_DELAY_MS = 700;

function wait(ms: number): Promise<void> {
    return new Promise<void>((resolve) => setTimeout(resolve, ms));
}

export async function authenticate(
    email: string,
    password: string,
    registeredAccounts: MockAccount[] = [],
): Promise<LoginResult> {
    await wait(NETWORK_DELAY_MS);

    const normalizedEmail = email.trim().toLowerCase();
    const account = [...mockAccounts, ...registeredAccounts].find(
        (item) => item.email.toLowerCase() === normalizedEmail,
    );

    if (!account || account.password !== password) {
        return { ok: false, message: "Email hoặc mật khẩu không đúng" };
    }

    return {
        ok: true,
        user: {
            id: account.id,
            name: account.name,
            email: account.email,
            avatar: account.avatar,
        },
    };
}

export async function registerAccount(
    values: RegisterFormValues,
    registeredAccounts: MockAccount[],
): Promise<RegisterResult> {
    await wait(NETWORK_DELAY_MS + 300);

    const normalizedEmail = values.email.trim().toLowerCase();
    const isTaken = [...mockAccounts, ...registeredAccounts].some(
        (item) => item.email.toLowerCase() === normalizedEmail,
    );

    if (isTaken) {
        return { ok: false, message: "Email này đã được đăng ký" };
    }

    return {
        ok: true,
        account: {
            id: `u${Date.now()}`,
            name: values.fullName.trim(),
            email: normalizedEmail,
            password: values.password,
            avatar: DEFAULT_AVATAR,
        },
    };
}