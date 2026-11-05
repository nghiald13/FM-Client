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