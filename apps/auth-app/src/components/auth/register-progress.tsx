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