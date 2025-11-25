import React, { createContext, useContext, useState } from "react";

type ScrollMode = "center" | "top" | "bottom" | { offset: number };


interface ScrollContextType {
    scrollMode: ScrollMode;
    targetHash: string | null;
    setScrollMode: (mode: ScrollMode) => void;
    setTargetHash: (hash: string | null) => void;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export function ScrollProvider({ children }: { children: React.ReactNode }) {
    const [scrollMode, setScrollMode] = useState<ScrollMode>("center");
    const [targetHash, setTargetHash] = useState<string | null>(null);

    return (
        <ScrollContext.Provider
            value={{ scrollMode, targetHash, setScrollMode, setTargetHash }}
        >
            {children}
        </ScrollContext.Provider>
    );
}

export function useScrollContext() {
    const context = useContext(ScrollContext);
    if (!context) {
        throw new Error("useScrollContext must be used within a ScrollProvider");
    }
    return context;
}
