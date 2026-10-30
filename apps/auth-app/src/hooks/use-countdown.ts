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