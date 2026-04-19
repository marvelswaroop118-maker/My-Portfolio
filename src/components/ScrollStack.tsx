"use client";

import { useLayoutEffect, useRef, useCallback } from "react";
import Lenis from "lenis";
import "./ScrollStack.css";

/* ─────────────────────────── ITEM ─────────────────────────── */

export const ScrollStackItem = ({ children, itemClassName = "" }: {
    children: React.ReactNode;
    itemClassName?: string;
}) => (
    <div className={`scroll-stack-card ${itemClassName}`.trim()}>
        {children}
    </div>
);

/* ─────────────────────────── MAIN ─────────────────────────── */

const ScrollStack = ({
    children,
    className = "",
    itemDistance = 100,
    itemScale = 0.03,
    itemStackDistance = 30,
    stackPosition = "20%",
    scaleEndPosition = "10%",
    baseScale = 0.85,
    rotationAmount = 0,
    blurAmount = 0,
    useWindowScroll = false,
    onStackComplete,
}: {
    children: React.ReactNode;
    className?: string;
    itemDistance?: number;
    itemScale?: number;
    itemStackDistance?: number;
    stackPosition?: string | number;
    scaleEndPosition?: string | number;
    baseScale?: number;
    rotationAmount?: number;
    blurAmount?: number;
    useWindowScroll?: boolean;
    onStackComplete?: () => void;
}) => {
    const scrollerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLElement[]>([]);
    const animationFrameRef = useRef<number | null>(null);
    const lenisRef = useRef<any>(null);
    const isStackCompleteRef = useRef(false);

    /* ─────────── HELPERS ─────────── */

    const parsePercentage = (value: string | number, containerHeight: number) => {
        if (typeof value === "string" && value.includes("%")) {
            return (parseFloat(value) / 100) * containerHeight;
        }
        return parseFloat(value as string);
    };

    const calculateProgress = (scrollTop: number, start: number, end: number) => {
        if (scrollTop < start) return 0;
        if (scrollTop > end) return 1;
        return (scrollTop - start) / (end - start);
    };

    const getScrollData = () => {
        if (useWindowScroll) {
            return { scrollTop: window.scrollY, containerHeight: window.innerHeight };
        }
        const scroller = scrollerRef.current!;
        return { scrollTop: scroller.scrollTop, containerHeight: scroller.clientHeight };
    };

    const getOffset = (el: HTMLElement) => {
        if (useWindowScroll) {
            return el.getBoundingClientRect().top + window.scrollY;
        }
        return el.offsetTop;
    };

    /* ─────────── STACK COMPLETE CHECK ─────────── */

    const checkStackComplete = useCallback(() => {
        const scroller = scrollerRef.current;
        if (!scroller) return false;

        const { scrollTop, containerHeight } = getScrollData();
        const inner = scroller.querySelector(".scroll-stack-inner");
        const totalScrollable = (inner?.scrollHeight ?? 0) - containerHeight;

        // Check if we've reached the bottom of the stack
        const complete = scrollTop >= totalScrollable - 2;

        if (complete !== isStackCompleteRef.current) {
            isStackCompleteRef.current = complete;
            if (complete) onStackComplete?.();
        }

        return complete;
    }, [onStackComplete, useWindowScroll]);

    /* ─────────── TRANSFORMS ─────────── */

    const updateTransforms = useCallback(() => {
        if (!cardsRef.current.length) return;

        const { scrollTop, containerHeight } = getScrollData();
        const stackPos = parsePercentage(stackPosition, containerHeight);
        const scaleEnd = parsePercentage(scaleEndPosition, containerHeight);

        cardsRef.current.forEach((card, i) => {
            if (!card) return;

            const top = getOffset(card);
            const start = top - stackPos - itemStackDistance * i;
            const end = top - scaleEnd;
            const progress = calculateProgress(scrollTop, start, end);
            const targetScale = baseScale + i * itemScale;
            const scale = 1 - progress * (1 - targetScale);
            const translateY =
                scrollTop >= start
                    ? scrollTop - top + stackPos + itemStackDistance * i
                    : 0;

            card.style.transform = `translate3d(0, ${translateY}px, 0) scale(${scale})`;

            // Blur support
            if (blurAmount > 0 && progress > 0) {
                card.style.filter = `blur(${(progress * blurAmount).toFixed(2)}px)`;
            } else {
                card.style.filter = "";
            }
        });

        checkStackComplete();
    }, [
        itemScale,
        itemStackDistance,
        stackPosition,
        scaleEndPosition,
        baseScale,
        blurAmount,
        checkStackComplete,
        useWindowScroll
    ]);

    /* ─────────── LENIS SCROLL INITIALIZATION ─────────── */

    const setupLenis = useCallback(() => {
        const scroller = scrollerRef.current!;

        // Let Lenis handle desktop wheel smoothing, but it will automatically
        // yield to native momentum scrolling on iOS and Android devices.
        const lenis = new Lenis({
            wrapper: useWindowScroll ? window : scroller,
            content: useWindowScroll ? document.documentElement : scroller.querySelector(".scroll-stack-inner") as HTMLElement,
            duration: 1.2,
            smoothWheel: true,
            syncTouch: false, // CRITICAL: Ensures native touch momentum is not hijacked
        });

        lenis.on("scroll", updateTransforms);

        const raf = (time: number) => {
            lenis.raf(time);
            animationFrameRef.current = requestAnimationFrame(raf);
        };

        animationFrameRef.current = requestAnimationFrame(raf);
        lenisRef.current = lenis;

        // Fallback for native scrolling events (ensures transforms run even if Lenis pauses)
        const scrollTarget = useWindowScroll ? window : scroller;
        scrollTarget.addEventListener("scroll", updateTransforms, { passive: true });

        return () => {
            scrollTarget.removeEventListener("scroll", updateTransforms);
        };
    }, [updateTransforms, useWindowScroll]);

    /* ─────────── INIT ─────────── */

    useLayoutEffect(() => {
        const scroller = scrollerRef.current;
        if (!scroller && !useWindowScroll) return;

        const container = useWindowScroll ? document : scroller;
        const cards = Array.from(
            container!.querySelectorAll<HTMLElement>(".scroll-stack-card")
        );
        cardsRef.current = cards;

        cards.forEach((card, i) => {
            if (i < cards.length - 1) {
                card.style.marginBottom = `${itemDistance}px`;
            }
            card.style.willChange = "transform";
            card.style.transformOrigin = "top center";
        });

        const cleanupNativeScroll = setupLenis();
        updateTransforms();

        return () => {
            if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
            if (lenisRef.current) lenisRef.current.destroy();
            cleanupNativeScroll();
        };
    }, [itemDistance, setupLenis, updateTransforms, useWindowScroll]);

    /* ─────────── RENDER ─────────── */

    return (
        <div className={`scroll-stack-scroller ${className}`} ref={scrollerRef}>
            <div className="scroll-stack-inner">
                {children}
                <div className="scroll-stack-end" />
            </div>
        </div>
    );
};

export default ScrollStack;