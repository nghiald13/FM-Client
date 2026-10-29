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