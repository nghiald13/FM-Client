import { getPasswordStrength } from "@/lib/validations/auth";
import { cn } from "../../../../../packages/utils/utils";

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