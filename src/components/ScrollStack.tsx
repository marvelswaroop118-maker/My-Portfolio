"use client";

import { useLayoutEffect, useRef, useCallback } from "react";
import Lenis from "lenis";
import "./ScrollStack.css";

/* -------------------- ITEM -------------------- */

export const ScrollStackItem = ({ children, itemClassName = "" }) => (
    <div className={`scroll-stack-card ${itemClassName}`.trim()}>
        {children}
    </div>
);

/* -------------------- MAIN -------------------- */

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
}) => {
    const scrollerRef = useRef(null);
    const cardsRef = useRef([]);
    const animationFrameRef = useRef(null);
    const lenisRef = useRef(null);
    const lastTransformsRef = useRef(new Map());

    /* -------------------- HELPERS -------------------- */

    const parsePercentage = (value, containerHeight) => {
        if (typeof value === "string" && value.includes("%")) {
            return (parseFloat(value) / 100) * containerHeight;
        }
        return parseFloat(value);
    };

    const calculateProgress = (scrollTop, start, end) => {
        if (scrollTop < start) return 0;
        if (scrollTop > end) return 1;
        return (scrollTop - start) / (end - start);
    };

    const getScrollData = () => {
        if (useWindowScroll) {
            return {
                scrollTop: window.scrollY,
                containerHeight: window.innerHeight,
            };
        } else {
            const scroller = scrollerRef.current;
            return {
                scrollTop: scroller.scrollTop,
                containerHeight: scroller.clientHeight,
            };
        }
    };

    const getOffset = (el) => {
        if (useWindowScroll) {
            const rect = el.getBoundingClientRect();
            return rect.top + window.scrollY;
        }
        return el.offsetTop;
    };

    /* -------------------- TRANSFORMS -------------------- */

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
                scrollTop >= start ? scrollTop - top + stackPos + itemStackDistance * i : 0;

            const transform = `translate3d(0, ${translateY}px, 0) scale(${scale})`;

            card.style.transform = transform;
        });
    }, [
        itemScale,
        itemStackDistance,
        stackPosition,
        scaleEndPosition,
        baseScale,
    ]);

    /* -------------------- LENIS -------------------- */

    const setupLenis = useCallback(() => {
        const scroller = scrollerRef.current;

        const lenis = new Lenis({
            wrapper: scroller,
            content: scroller.querySelector(".scroll-stack-inner"),
            duration: 1.2,
            smoothWheel: true,
        });

        lenis.on("scroll", updateTransforms);

        const raf = (time) => {
            lenis.raf(time);
            animationFrameRef.current = requestAnimationFrame(raf);
        };

        animationFrameRef.current = requestAnimationFrame(raf);
        lenisRef.current = lenis;
    }, [updateTransforms]);

    /* -------------------- INIT -------------------- */

    useLayoutEffect(() => {
        const scroller = scrollerRef.current;
        if (!scroller) return;

        const cards = Array.from(
            scroller.querySelectorAll(".scroll-stack-card")
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
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
            if (lenisRef.current) {
                lenisRef.current.destroy();
            }
        };
    }, [itemDistance, setupLenis, updateTransforms]);

    /* -------------------- RENDER -------------------- */

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