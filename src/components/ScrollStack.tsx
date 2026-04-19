"use client";

import { useLayoutEffect, useRef, useCallback, useEffect } from "react";
import Lenis from "lenis";
import "./ScrollStack.css";

/* ── Global instance counter — prevents multiple stacks fighting over body overflow ── */
let activeScrollStackCount = 0;

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
    const touchStartYRef = useRef(0);
    const touchStartXRef = useRef(0);

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
    }, [onStackComplete]);

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
    ]);

    /* ─────────── GLOBAL SCROLL CAPTURE ─────────── */

    useEffect(() => {
        const scroller = scrollerRef.current;
        if (!scroller || useWindowScroll) return;

        // Increment before locking — only the first instance sets the lock
        activeScrollStackCount += 1;
        document.body.style.overflow = "hidden";
        document.documentElement.style.overflow = "hidden";

        const handleWheel = (e: WheelEvent) => {
            const scrollingDown = e.deltaY > 0;
            const scrollingUp = e.deltaY < 0;

            // Allow page to scroll DOWN only when stack is fully complete
            if (isStackCompleteRef.current && scrollingDown) return;

            // Allow page to scroll UP only when stack is at the very top
            if (scroller.scrollTop <= 0 && scrollingUp) return;

            // Everything else: capture and feed into the scroller
            e.preventDefault();
            scroller.scrollTop += e.deltaY;
        };

        const handleTouchStart = (e: TouchEvent) => {
            touchStartYRef.current = e.touches[0].clientY;
            touchStartXRef.current = e.touches[0].clientX;
        };

        const handleTouchMove = (e: TouchEvent) => {
            const deltaY = touchStartYRef.current - e.touches[0].clientY;
            const deltaX = Math.abs(touchStartXRef.current - e.touches[0].clientX);

            if (deltaX > Math.abs(deltaY) * 1.5) return; // horizontal swipe — ignore

            const scrollingDown = deltaY > 0;
            const scrollingUp = deltaY < 0;

            // Allow page to scroll DOWN only when stack is fully complete
            if (isStackCompleteRef.current && scrollingDown) return;

            // Allow page to scroll UP only when stack is at the very top
            if (scroller.scrollTop <= 0 && scrollingUp) return;

            e.preventDefault();
            scroller.scrollTop += deltaY;
            touchStartYRef.current = e.touches[0].clientY;
        };

        window.addEventListener("wheel", handleWheel, { passive: false });
        window.addEventListener("touchstart", handleTouchStart, { passive: true });
        window.addEventListener("touchmove", handleTouchMove, { passive: false });

        return () => {
            window.removeEventListener("wheel", handleWheel);
            window.removeEventListener("touchstart", handleTouchStart);
            window.removeEventListener("touchmove", handleTouchMove);

            activeScrollStackCount -= 1;
            // Only restore when the LAST mounted stack unmounts
            if (activeScrollStackCount <= 0) {
                activeScrollStackCount = 0;
                document.body.style.overflow = "";
                document.documentElement.style.overflow = "";
            }
        };
    }, [useWindowScroll]);

    /* ─────────── LENIS ─────────── */

    const setupLenis = useCallback(() => {
        const scroller = scrollerRef.current!;

        const lenis = new Lenis({
            wrapper: scroller,
            content: scroller.querySelector(".scroll-stack-inner") as HTMLElement,
            duration: 1.2,
            smoothWheel: true,
        });

        lenis.on("scroll", updateTransforms);

        const raf = (time: number) => {
            lenis.raf(time);
            animationFrameRef.current = requestAnimationFrame(raf);
        };

        animationFrameRef.current = requestAnimationFrame(raf);
        lenisRef.current = lenis;
    }, [updateTransforms]);

    /* ─────────── INIT ─────────── */

    useLayoutEffect(() => {
        const scroller = scrollerRef.current;
        if (!scroller) return;

        const cards = Array.from(
            scroller.querySelectorAll<HTMLElement>(".scroll-stack-card")
        );
        cardsRef.current = cards;

        cards.forEach((card, i) => {
            if (i < cards.length - 1) {
                card.style.marginBottom = `${itemDistance}px`;
            }
            card.style.willChange = "transform";
            card.style.transformOrigin = "top center";
        });

        setupLenis();
        updateTransforms();

        return () => {
            if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
            if (lenisRef.current) lenisRef.current.destroy();
        };
    }, [itemDistance, setupLenis, updateTransforms]);

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
