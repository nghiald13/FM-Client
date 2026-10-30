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