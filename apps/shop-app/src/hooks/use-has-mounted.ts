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