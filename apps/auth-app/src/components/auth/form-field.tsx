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