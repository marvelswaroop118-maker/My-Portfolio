"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";

// Chronologically sorted unified timeline
const AWARDS_DATA = [
    {
        category: "Academic",
        badge: "DIPLOMA",
        title: "Tech Law & Fintech",
        issuer: "LawSikho",
        year: "2025",
        detail: "Completed intensive diploma covering Technology Law, Fintech Regulations, and Tech Contracts with an A Grade.",
        highlight: false,
    },
    {
        category: "Academic",
        badge: "RANK 06",
        title: "All India Rank 6",
        issuer: "NTSE (LawSikho)",
        year: "2024",
        detail: "Secured 6th rank nationally in the National Talent Search Examination on Law, Science, and Technology.",
        highlight: true,
    },
    {
        category: "Academic",
        badge: "RANK 24",
        title: "All India Rank 24",
        issuer: "National Law Olympiad",
        year: "2023",
        detail: "Achieved 24th rank nationwide in a highly competitive examination testing rigorous legal aptitude.",
        highlight: false,
    },
    {
        category: "Academic",
        badge: "WINNER",
        title: "Best Essay Award",
        issuer: "Gujarat National Law Univ.",
        year: "2023",
        detail: "Awarded Best Essay in the 6th GNLU Essay Competition on Law and Economics.",
        highlight: true,
    },
    {
        category: "Personal",
        badge: "CERTIFIED",
        title: "Typewriting Grade 1",
        issuer: "State Examination",
        year: "2023",
        detail: "Passed Lower Grade 1 typewriting exam, demonstrating professional typing speed and accuracy.",
        highlight: false,
    },
    {
        category: "Academic",
        badge: "AWARD",
        title: "Academic Excellence",
        issuer: "VIT-AP University",
        year: "2021-22",
        detail: "Awarded for outstanding academic performance and exceptional consistency in the B.B.A. LL.B. (Hons.) program.",
        highlight: true, // Highlighted as requested
    },
    {
        category: "Personal",
        badge: "BLACK BELT",
        title: "Shotokan Karate",
        issuer: "Martial Arts Academy",
        year: "2018",
        detail: "Achieved black belt certification reflecting years of high discipline, focus, and advanced training.",
        highlight: false,
    },
    {
        category: "Personal",
        badge: "MEDALIST",
        title: "State-Level Kickboxing",
        issuer: "State Championship",
        year: "2018",
        detail: "Recognized at the state level for highly competitive performance and athletic excellence.",
        highlight: false,
    },
    {
        category: "Personal",
        badge: "CERTIFIED",
        title: "Hindi Proficiency",
        issuer: "Dakshina Bharat Sabha",
        year: "2018",
        detail: "Completed advanced Hindi examinations including Praveen and higher fluency levels.",
        highlight: false,
    },
];

export default function Accolades() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = useState(false);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // Hook to track the horizontal scroll progress of the carousel
    const { scrollXProgress } = useScroll({ container: scrollRef });
    const scaleX = useSpring(scrollXProgress, { stiffness: 100, damping: 20, restDelta: 0.001 });

    // Responsive Check
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // Smooth Scroll Functions for Animated Buttons
    const scrollNext = () => {
        setIsAutoPlaying(false);
        if (scrollRef.current) {
            const scrollAmount = isMobile ? window.innerWidth * 0.85 : 440;
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    const scrollPrev = () => {
        setIsAutoPlaying(false);
        if (scrollRef.current) {
            const scrollAmount = isMobile ? window.innerWidth * 0.85 : 440;
            scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        }
    };

    // Intelligent Auto-scroll Engine
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            if (scrollRef.current) {
                const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

                // Rewind smoothly to the start if at the end
                if (scrollLeft + clientWidth >= scrollWidth - 10) {
                    scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
                } else {
                    const scrollAmount = isMobile ? window.innerWidth * 0.85 : 440;
                    scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
                }
            }
        }, 3500); // Scrolls every 3.5 seconds

        return () => clearInterval(interval);
    }, [isAutoPlaying, isMobile]);

    const staggerContainer = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
    };

    const fadeUp = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
    };

    return (
        <div className="relative w-full h-[100svh] bg-[#09090b] overflow-hidden flex flex-col font-sans">

            {/* ── AMBIENT BACKGROUND ── */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)`, backgroundSize: "40px 40px" }} />
            <div className="absolute bottom-0 right-0 w-[400px] lg:w-[800px] h-[400px] lg:h-[800px] bg-[#D2042D]/5 rounded-full blur-[120px] pointer-events-none z-0 translate-y-1/4 translate-x-1/4" />

            {/* ── MAIN LAYOUT WRAPPER ── */}
            <div className="relative z-10 w-full max-w-[90rem] mx-auto flex flex-col h-full pt-[15svh] lg:pt-[14svh] pb-[4svh] lg:pb-[8svh] justify-between">

                {/* ── HEADER & NAVIGATION ── */}
                <motion.div
                    variants={staggerContainer} initial="hidden" animate="show"
                    className="w-full flex flex-col lg:flex-row items-center lg:items-end justify-between mb-6 lg:mb-10 px-5 md:px-12 shrink-0 gap-4"
                >
                    {/* Title Area */}
                    <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
                        <motion.div variants={fadeUp} className="mb-2 lg:mb-4 flex items-center justify-center lg:justify-start gap-2 lg:gap-3 w-full">
                            <span className="w-6 lg:w-8 h-[2px] bg-[#D2042D]"></span>
                            <p className="text-[9px] lg:text-[10px] text-zinc-400 uppercase tracking-[0.3em] font-bold">Awards & Ranks</p>
                        </motion.div>

                        <motion.h2 variants={fadeUp} className="text-[10vw] sm:text-5xl lg:text-[4.5rem] font-black leading-[0.95] tracking-tight uppercase">
                            <span className="text-white block lg:inline">Trophy</span>
                            <span className="text-transparent [-webkit-text-stroke:1px_#D2042D] lg:[-webkit-text-stroke:1.5px_#D2042D] block lg:inline lg:ml-4">Cabinet</span>
                        </motion.h2>

                        {/* Bouncing Swipe Indicator for Mobile */}
                        {isMobile && (
                            <motion.div variants={fadeUp} className="mt-3 text-[#D2042D] text-[9px] font-black uppercase tracking-[0.2em] flex items-center gap-2">
                                Swipe to explore
                                <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}>→</motion.span>
                            </motion.div>
                        )}
                    </div>

                    {/* Animated Navigation Buttons */}
                    <motion.div variants={fadeUp} className="flex items-center gap-3">
                        <button
                            onClick={scrollPrev}
                            className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-zinc-800 bg-[#0c0c0e] flex items-center justify-center text-zinc-400 hover:text-white hover:bg-[#D2042D] hover:border-[#D2042D] transition-all duration-300 shadow-md group"
                        >
                            <svg className="w-5 h-5 group-active:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"></path></svg>
                        </button>
                        <button
                            onClick={scrollNext}
                            className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-zinc-800 bg-[#0c0c0e] flex items-center justify-center text-zinc-400 hover:text-white hover:bg-[#D2042D] hover:border-[#D2042D] transition-all duration-300 shadow-md group"
                        >
                            <svg className="w-5 h-5 group-active:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path></svg>
                        </button>
                    </motion.div>
                </motion.div>

                {/* ── HORIZONTAL CAROUSEL ── */}
                <div
                    className="flex-1 min-h-0 w-full relative"
                    onMouseEnter={() => setIsAutoPlaying(false)}
                    onMouseLeave={() => setIsAutoPlaying(true)}
                    onTouchStart={() => setIsAutoPlaying(false)}
                >

                    {/* Left/Right Edge Fades for desktop immersion */}
                    <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#09090b] to-transparent z-20 pointer-events-none" />
                    <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#09090b] to-transparent z-20 pointer-events-none" />

                    <div
                        ref={scrollRef}
                        className="w-full h-full flex overflow-x-auto snap-x snap-mandatory scrollbar-hide overscroll-x-contain items-center px-5 md:px-12 gap-5 lg:gap-8 pb-4"
                    >
                        {AWARDS_DATA.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9, x: 50 }}
                                animate={{ opacity: 1, scale: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                                className={`relative snap-center shrink-0 w-[85vw] sm:w-[320px] lg:w-[400px] h-[300px] lg:h-[350px] rounded-3xl p-6 lg:p-8 shadow-xl flex flex-col justify-between group overflow-hidden border transition-colors duration-500 ${item.highlight
                                        ? "bg-gradient-to-br from-[#0c0c0e] to-[#1a0508] border-[#D2042D]/40"
                                        : "bg-[#0c0c0e]/80 backdrop-blur-xl border-zinc-800/80 hover:bg-[#0c0c0e]"
                                    }`}
                            >
                                {/* Red Glow for Highlighted Cards */}
                                {item.highlight && (
                                    <div className="absolute top-0 right-0 w-40 h-40 bg-[#D2042D]/20 rounded-full blur-[50px] pointer-events-none" />
                                )}

                                {/* Ambient Hover Glow */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#D2042D]/0 via-[#D2042D]/0 to-[#D2042D]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                {/* Card Top: Badges & Year */}
                                <div className="flex justify-between items-start relative z-10">
                                    <div className="flex flex-col gap-2 items-start">
                                        <span className={`text-[8px] lg:text-[9px] font-black px-2 py-1 rounded-sm uppercase tracking-[0.2em] border ${item.category === "Academic"
                                                ? "bg-[#D2042D]/10 border-[#D2042D]/20 text-[#D2042D]"
                                                : "bg-zinc-800/50 border-zinc-700/50 text-zinc-400"
                                            }`}>
                                            {item.category}
                                        </span>
                                        <span className={`text-[10px] lg:text-[11px] font-black px-3 py-1.5 rounded-sm uppercase tracking-widest ${item.highlight
                                                ? "bg-[#D2042D] text-white"
                                                : "bg-white text-black"
                                            }`}>
                                            {item.badge}
                                        </span>
                                    </div>

                                    {/* Subtle index number / Year watermark */}
                                    <span className="text-zinc-700 font-black text-2xl lg:text-3xl select-none">
                                        {item.year}
                                    </span>
                                </div>

                                {/* Card Middle: Title */}
                                <div className="relative z-10 flex-1 flex flex-col justify-center my-4">
                                    <h3 className="text-xl lg:text-3xl font-black text-white leading-snug tracking-tight group-hover:text-zinc-200 transition-colors">
                                        {item.title}
                                    </h3>
                                </div>

                                {/* Card Bottom: Issuer & Detail */}
                                <div className="relative z-10 border-t border-zinc-800/50 pt-4 flex flex-col gap-3">
                                    <p className="text-[10px] lg:text-xs font-bold text-zinc-400 uppercase tracking-widest">
                                        {item.issuer}
                                    </p>
                                    <p className="text-[11px] lg:text-sm text-zinc-500 leading-relaxed font-medium line-clamp-3">
                                        {item.detail}
                                    </p>
                                </div>
                            </motion.div>
                        ))}

                        {/* Empty spacer block to ensure the last card can scroll fully into the center on mobile */}
                        <div className="shrink-0 w-4 lg:w-12" />
                    </div>
                </div>

                {/* ── SCROLL PROGRESS BAR ── */}
                <div className="w-full px-5 md:px-12 mt-2 lg:mt-4 shrink-0">
                    <div className="w-full max-w-[200px] mx-auto h-[2px] bg-zinc-800/50 rounded-full overflow-hidden">
                        <motion.div
                            style={{ scaleX, transformOrigin: "0%" }}
                            className="h-full bg-[#D2042D] w-full"
                        />
                    </div>
                </div>

            </div>
        </div>
    );
}