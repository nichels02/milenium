import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useScrollContext } from "./ScrollContext";

function ScrollToTop() {
    const { pathname, key } = useLocation();
    const { scrollMode, targetHash, setTargetHash } = useScrollContext();

    const previousPathnameRef = useRef<string | null>(null);
    const attemptsRef = useRef(0);
    const maxAttempts = 10;
    const delayMs = 100;

    useEffect(() => {
        const isNewPage = previousPathnameRef.current !== pathname;
        previousPathnameRef.current = pathname;

        if (targetHash) {
            const scrollToElement = (element: HTMLElement) => {
                const elementRect = element.getBoundingClientRect();
                let scrollPosition: number;

                if (scrollMode === "center") {
                    const elementHalfHeight = elementRect.height / 2;
                    const viewportHalfHeight = window.innerHeight / 2;
                    scrollPosition = window.scrollY + elementRect.top - viewportHalfHeight + elementHalfHeight;
                } else if (scrollMode === "top") {
                    scrollPosition = window.scrollY + elementRect.top;
                } else if (scrollMode === "bottom") {
                    scrollPosition = window.scrollY + elementRect.bottom;
                } else if (typeof scrollMode === "object" && scrollMode.offset !== undefined) {
                    scrollPosition = window.scrollY + elementRect.top - scrollMode.offset;
                } else {
                    scrollPosition = window.scrollY + elementRect.top;
                }

                window.scrollTo({ top: scrollPosition, behavior: "smooth" });
            };

            const tryScroll = () => {
                const element = document.getElementById(targetHash);
                if (element) {
                    scrollToElement(element);
                    setTargetHash(null);
                    attemptsRef.current = 0;
                } else {
                    attemptsRef.current++;
                    if (attemptsRef.current < maxAttempts) {
                        setTimeout(tryScroll, delayMs);
                    } else {
                        setTargetHash(null);
                        attemptsRef.current = 0;
                    }
                }
            };

            tryScroll();
        } else if (isNewPage) {
            // Solo hacemos scroll al top si realmente cambiamos de página
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [pathname, key, targetHash, scrollMode, setTargetHash]);

    return null;
}

export default ScrollToTop;

/*


type ScrollMode = "center" | "top" | { offset: number };

function ScrollToTop({ defaultTargetId = null, scrollConfig = null, scrollMode = "center" }: {
    defaultTargetId?: string | null;
    scrollConfig?: Record<string, string> | null;
    scrollMode?: ScrollMode;
}) {
    const { pathname, hash, key } = useLocation();

    useEffect(() => {
        const scrollToElement = (element: HTMLElement) => {
            const elementRect = element.getBoundingClientRect();
            let scrollPosition: number;

            if (scrollMode === "center") {
                const elementHalfHeight = elementRect.height / 2;
                const viewportHalfHeight = window.innerHeight / 2;
                scrollPosition = window.scrollY + elementRect.top - viewportHalfHeight + elementHalfHeight;
            } else if (scrollMode === "top") {
                scrollPosition = window.scrollY + elementRect.top;
            } else if (typeof scrollMode === "object" && scrollMode.offset !== undefined) {
                scrollPosition = window.scrollY + elementRect.top - scrollMode.offset;
            } else {
                scrollPosition = window.scrollY + elementRect.top; // Fallback
            }

            window.scrollTo({ top: scrollPosition, behavior: "smooth" });
        };

        const scrollToTarget = (id: string) => {
            const element = document.getElementById(id);
            if (element) {
                setTimeout(() => scrollToElement(element), 0);
                return true;
            }
            return false;
        };

        if (hash && scrollToTarget(hash.substring(1))) return;
        if (scrollConfig && scrollConfig[pathname] && scrollToTarget(scrollConfig[pathname])) return;
        if (defaultTargetId && scrollToTarget(defaultTargetId)) return;

        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [pathname, hash, key, defaultTargetId, scrollConfig, scrollMode]);

    return null;
}



* */