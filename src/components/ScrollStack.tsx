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
    const cardsTopsRef = useRef<number[]>([]); // Cache tops to prevent layout thrashing
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

        const complete = scrollTop >= totalScrollable - 2;

        if (complete !== isStackCompleteRef.current) {
            isStackCompleteRef.current = complete;
            if (complete) onStackComplete?.();
        }

        return complete;
    }, [onStackComplete, useWindowScroll]);

    /* ─────────── TRANSFORMS ─────────── */

    const updateTransforms = useCallback(() => {
        if (!cardsRef.current.length || !cardsTopsRef.current.length) return;

        const { scrollTop, containerHeight } = getScrollData();
        const stackPos = parsePercentage(stackPosition, containerHeight);
        const scaleEnd = parsePercentage(scaleEndPosition, containerHeight);

        cardsRef.current.forEach((card, i) => {
            if (!card) return;

            // Use cached tops for massive performance boost & to fix Safari sticky bugs
            const top = cardsTopsRef.current[i];
            const start = top - stackPos - itemStackDistance * i;
            const end = top - scaleEnd;
            const progress = calculateProgress(scrollTop, start, end);
            const targetScale = baseScale + i * itemScale;

            // Clamp progress so math doesn't break boundaries
            const clampedProgress = Math.max(0, Math.min(1, progress));
            const scale = 1 - clampedProgress * (1 - targetScale);

            // FIX: Only apply scale! Let CSS `position: sticky` handle the Y-axis pinning.
            card.style.transform = `scale(${scale})`;

            // Blur support
            if (blurAmount > 0 && clampedProgress > 0) {
                card.style.filter = `blur(${(clampedProgress * blurAmount).toFixed(2)}px)`;
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

        const lenis = new Lenis({
            wrapper: useWindowScroll ? window : scroller,
            content: useWindowScroll ? document.documentElement : scroller.querySelector(".scroll-stack-inner") as HTMLElement,
            duration: 1.2,
            smoothWheel: true,
            syncTouch: false, // Let mobile natively scroll
        });

        lenis.on("scroll", updateTransforms);

        const raf = (time: number) => {
            lenis.raf(time);
            animationFrameRef.current = requestAnimationFrame(raf);
        };

        animationFrameRef.current = requestAnimationFrame(raf);
        lenisRef.current = lenis;

        // NOTE: We removed the duplicate native scroll event listener here 
        // because it was double-firing and causing severe frame tearing.

        return () => {
            if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
            if (lenisRef.current) lenisRef.current.destroy();
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

        // 1. Reset all to static briefly to calculate accurate document offsets
        cards.forEach(card => (card.style.position = "static"));
        cardsTopsRef.current = cards.map(card => getOffset(card));

        // 2. Apply native sticky behavior
        cards.forEach((card, i) => {
            if (i < cards.length - 1) {
                card.style.marginBottom = `${itemDistance}px`;
            }

            // Lock to browser GPU for zero-jitter pinning
            card.style.position = "sticky";

            const posValue = typeof stackPosition === "number" ? `${stackPosition}px` : stackPosition;
            card.style.top = `calc(${posValue} + ${itemStackDistance * i}px)`;

            card.style.willChange = "transform, filter";
            card.style.transformOrigin = "top center";
        });

        const cleanupLenis = setupLenis();
        updateTransforms();

        return () => {
            cleanupLenis();
        };
    }, [itemDistance, setupLenis, updateTransforms, useWindowScroll, stackPosition, itemStackDistance]);

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