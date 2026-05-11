"use client";

import { motion, AnimatePresence, useScroll, useSpring, Variants } from "framer-motion";
import { useState, useEffect, useRef } from "react";

// --- PERFECTED LEADERSHIP DATASET ---
const LEADERSHIP_DATA = [
    {
        id: "intl-conf",
        year: "2024",
        role: "Technical Operations",
        title: "INTERNATIONAL CONFERENCE ON COMPARATIVE LAW",
        forum: "VIT-AP University",
        type: "International Event",
        tag: "Operations",
        desc: "A Story of Convergences, Divergences and Exploitation of Liminal Spaces. Managed structural operations, technical execution, and presenter coordination.",
        inDepth: [
            "Spearheaded the technical infrastructure and digital execution for a massive international academic conference.",
            "Managed real-time technical coordination, presenter PPTs, and digital transitions between esteemed guest speakers and international delegates.",
            "Ensured seamless execution of panel discussions, technical troubleshooting, and operational workflows."
        ]
    },
    {
        id: "isil-conf",
        year: "2024",
        role: "Technical Operations",
        title: "INTERNATIONAL LAW IN TIMES OF CRISIS",
        forum: "Jointly Organised with ISIL",
        type: "National Conference",
        tag: "Execution",
        desc: "National Conference jointly organised with the Indian Society of International Law. Handled core technical management and presenter operations.",
        inDepth: [
            "Managed the complete technical workflow, including presenter slide decks and digital broadcasting for the conference.",
            "Spearheaded collaborative logistics between the university and the Indian Society of International Law (ISIL).",
            "Ensured seamless technical execution of critical discussions revolving around global geopolitical crises."
        ]
    },
    {
        id: "cci-moot",
        year: "2024",
        role: "Organizing Committee / Stage In-Charge",
        title: "VSL-CCI 1ST NATIONAL MOOT COURT",
        forum: "VIT-AP School of Law & CCI",
        type: "National Competition",
        tag: "Management",
        desc: "Organized the inaugural National Moot in collaboration with the Competition Commission of India (CCI), serving directly as the Stage In-Charge.",
        inDepth: [
            "Served on the core Organizing Committee and acted as the primary Stage In-Charge for the national-level event.",
            "Managed real-time courtroom setups, judicial seating protocols, and seamless stage transitions for participating national teams.",
            "Spearheaded collaboration logistics and structural planning between VSL and the Competition Commission of India."
        ]
    },
    {
        id: "intra-moot",
        year: "2023 & 2024",
        role: "Organizing Committee",
        title: "VSL INTRA MOOT COURT",
        forum: "VIT-AP School of Law",
        type: "Flagship Competition",
        tag: "Execution",
        desc: "Served on the Organizing Committee for consecutive years. Drafted propositions, managed logistics, and coordinated judicial evaluations.",
        inDepth: [
            "Served on the Organizing Committee for consecutive editions (2023 & 2024), scaling the event's reach and institutional prestige.",
            "Drafted complex moot propositions challenging students on contemporary corporate and constitutional frameworks.",
            "Coordinated evaluation matrices, onboarding of expert judicial benches, and real-time event management."
        ]
    },
    {
        id: "mentor-vsl",
        year: "2025",
        role: "Senior Mentor",
        title: "VSL ADVOCACY MENTORSHIP",
        forum: "VIT-AP School of Law",
        type: "Academic Mentorship",
        tag: "Mentorship",
        desc: "Guided junior batches in legal research, memorial drafting, and courtroom etiquette, successfully coaching a team to the Semi-Finals.",
        inDepth: [
            "Mentored and guided a dedicated team of junior law students, successfully coaching them to the Semi-Finals of the competition.",
            "Trained participants in the nuances of rigorous legal research, strategic memorial drafting, and courtroom argumentation.",
            "Authored comprehensive bench memorials and conducted extensive mock trials to elevate the overall advocacy standards."
        ]
    }
];

// Impact Metrics Dashboard
const IMPACT_METRICS = [
    { value: "05", label: "Core Initiatives" },
    { value: "Intl/Nat", label: "Scale Events" },
    { value: "300+", label: "Participants" },
    { value: "2023-25", label: "Active Years" },
];

// 🚨 FIX: Explicitly typed as Variants and moved OUTSIDE the component to prevent Vercel errors & re-render glitches
const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
};

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any } }
};

export default function Leadership() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = useState(false);
    const [isTouch, setIsTouch] = useState(false);

    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [primedCardIndex, setPrimedCardIndex] = useState<number | null>(null);
    const [activeModalData, setActiveModalData] = useState<typeof LEADERSHIP_DATA[0] | null>(null);

    const { scrollXProgress } = useScroll({ container: scrollRef });
    const scaleX = useSpring(scrollXProgress, { stiffness: 100, damping: 20, restDelta: 0.001 });

    useEffect(() => {
        const checkDevice = () => {
            setIsMobile(window.innerWidth < 1024);
            setIsTouch("ontouchstart" in window || navigator.maxTouchPoints > 0);
        };
        checkDevice();
        window.addEventListener("resize", checkDevice);
        return () => window.removeEventListener("resize", checkDevice);
    }, []);

    useEffect(() => {
        if (activeModalData) {
            document.body.style.overflow = "hidden";
            setIsAutoPlaying(false);
        } else {
            document.body.style.overflow = "unset";
        }
        return () => { document.body.style.overflow = "unset"; };
    }, [activeModalData]);

    // Intelligent Auto-scroll Engine
    useEffect(() => {
        if (!isAutoPlaying || activeModalData) return;
        const interval = setInterval(() => {
            if (scrollRef.current) {
                const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
                if (scrollLeft + clientWidth >= scrollWidth - 10) {
                    scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
                } else {
                    scrollRef.current.scrollBy({ left: isMobile ? window.innerWidth * 0.85 : 500, behavior: "smooth" });
                }
            }
        }, 3800);
        return () => clearInterval(interval);
    }, [isAutoPlaying, isMobile, activeModalData]);

    const handleUserInteraction = () => setIsAutoPlaying(false);

    const scrollNext = () => {
        handleUserInteraction();
        scrollRef.current?.scrollBy({ left: isMobile ? window.innerWidth * 0.85 : 500, behavior: "smooth" });
    };

    const scrollPrev = () => {
        handleUserInteraction();
        scrollRef.current?.scrollBy({ left: -(isMobile ? window.innerWidth * 0.85 : 500), behavior: "smooth" });
    };

    const handleCardInteraction = (index: number) => {
        handleUserInteraction();
        if (isTouch) {
            if (primedCardIndex === index) {
                setActiveModalData(LEADERSHIP_DATA[index]);
                setPrimedCardIndex(null);
            } else {
                setPrimedCardIndex(index);
                setTimeout(() => setPrimedCardIndex((curr) => curr === index ? null : curr), 3000);
            }
        } else {
            setActiveModalData(LEADERSHIP_DATA[index]);
        }
    };

    return (
        <div className="relative w-full h-[100svh] bg-[#09090b] overflow-hidden flex flex-col font-sans">

            <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)`, backgroundSize: "40px 40px" }} />
            {/* 🚨 FIX: Added transform-gpu to offload static blur to graphics card */}
            <div className="absolute top-0 right-0 w-[400px] lg:w-[800px] h-[400px] lg:h-[800px] bg-[#D2042D]/5 rounded-full blur-[120px] pointer-events-none z-0 -translate-y-1/4 translate-x-1/4 transform-gpu" />

            {/* ── MAIN LAYOUT WRAPPER ── */}
            <div className="relative z-10 w-full max-w-[90rem] mx-auto flex flex-col h-full pt-[12svh] lg:pt-[14svh] pb-[3svh] lg:pb-[6svh]">

                {/* ── HEADER AREA ── */}
                <div className="px-5 md:px-12 shrink-0">
                    <motion.div variants={staggerContainer} initial="hidden" animate="show" className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 w-full">

                        <div className="flex flex-col items-start w-full lg:w-auto">
                            <motion.div variants={fadeUp} className="flex items-center gap-2 lg:gap-3 mb-2 lg:mb-4">
                                <span className="w-6 lg:w-8 h-[2px] bg-[#D2042D]" />
                                <p className="text-[9px] lg:text-[10px] text-zinc-400 uppercase tracking-[0.3em] font-bold">Initiatives & Mentorship</p>
                            </motion.div>

                            <motion.h2 variants={fadeUp} className="text-[10vw] sm:text-5xl lg:text-[4.5rem] font-black leading-[0.95] tracking-tight uppercase mb-4 lg:mb-6">
                                <span className="text-white block lg:inline">Organizational</span>
                                <span className="text-transparent [-webkit-text-stroke:1px_#D2042D] lg:[-webkit-text-stroke:1.5px_#D2042D] block lg:inline lg:ml-4">Leadership</span>
                            </motion.h2>

                            {/* IMPACT METRICS DASHBOARD */}
                            <motion.div variants={fadeUp} className="w-full flex overflow-x-auto lg:flex-wrap scrollbar-hide gap-2 pb-1 lg:pb-0 max-w-2xl">
                                <div className="w-full flex justify-between items-center bg-[#0c0c0e]/80 border border-zinc-800/80 rounded-xl p-2 sm:p-3 backdrop-blur-md">
                                    {IMPACT_METRICS.map((metric, i) => (
                                        <div key={i} className="flex flex-col items-center flex-1 border-r border-zinc-800/50 last:border-0 px-1 sm:px-2">
                                            <span className="text-[#D2042D] font-black text-[10px] sm:text-sm">{metric.value}</span>
                                            <span className="text-zinc-500 font-bold text-[7px] sm:text-[9px] uppercase tracking-widest mt-0.5 text-center leading-tight sm:leading-normal">{metric.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* Desktop Navigation Buttons */}
                        <motion.div variants={fadeUp} className="hidden lg:flex items-center gap-3">
                            <button onClick={scrollPrev} className="w-12 h-12 rounded-full border border-zinc-800 bg-[#0c0c0e] flex items-center justify-center text-zinc-400 hover:text-white hover:bg-[#D2042D] hover:border-[#D2042D] transition-all duration-300 shadow-md group">
                                <svg className="w-5 h-5 group-active:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"></path></svg>
                            </button>
                            <button onClick={scrollNext} className="w-12 h-12 rounded-full border border-zinc-800 bg-[#0c0c0e] flex items-center justify-center text-zinc-400 hover:text-white hover:bg-[#D2042D] hover:border-[#D2042D] transition-all duration-300 shadow-md group">
                                <svg className="w-5 h-5 group-active:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path></svg>
                            </button>
                        </motion.div>

                    </motion.div>
                </div>

                {/* ── MOBILE ACTION BAR ── */}
                {isMobile && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="px-5 mt-4 flex items-center justify-between shrink-0">
                        <div className="flex flex-col items-start gap-1">
                            <div className="text-[#D2042D] text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2">
                                Swipe Gallery
                                <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}>→</motion.span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <button onClick={scrollPrev} className="w-9 h-9 rounded-full border border-zinc-800 bg-[#0c0c0e] flex items-center justify-center text-zinc-400 active:bg-[#D2042D] transition-colors"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" /></svg></button>
                            <button onClick={scrollNext} className="w-9 h-9 rounded-full border border-zinc-800 bg-[#0c0c0e] flex items-center justify-center text-zinc-400 active:bg-[#D2042D] transition-colors"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg></button>
                        </div>
                    </motion.div>
                )}

                {/* ── HORIZONTAL CAROUSEL ── */}
                <div className="flex-1 min-h-0 w-full relative mt-4" onMouseEnter={handleUserInteraction}>
                    <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#09090b] to-transparent z-20 pointer-events-none" />
                    <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#09090b] to-transparent z-20 pointer-events-none" />

                    <div
                        ref={scrollRef}
                        onPointerDown={handleUserInteraction}
                        onWheel={handleUserInteraction}
                        onTouchStart={handleUserInteraction}
                        className="w-full h-full flex overflow-x-auto snap-x snap-mandatory scrollbar-hide items-center px-5 md:px-12 gap-4 lg:gap-8 pb-4"
                    >
                        {LEADERSHIP_DATA.map((item, i) => {
                            const isPrimed = primedCardIndex === i;

                            return (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, scale: 0.9, x: 50 }}
                                    animate={{ opacity: 1, scale: 1, x: 0 }}
                                    // 🚨 FIX: Added "as any" to easing curve array for TypeScript compiler
                                    transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as any }}
                                    onClick={() => handleCardInteraction(i)}
                                    className="relative snap-center shrink-0 w-[85vw] sm:w-[350px] lg:w-[480px] h-full max-h-[340px] lg:max-h-[380px] bg-[#0c0c0e]/80 backdrop-blur-xl border border-zinc-800/80 rounded-[2rem] p-5 lg:p-8 flex flex-col justify-between group overflow-hidden cursor-pointer hover:border-zinc-700 transform-gpu"
                                >
                                    {!isTouch && <div className="absolute inset-0 bg-gradient-to-br from-[#D2042D]/0 via-[#D2042D]/0 to-[#D2042D]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />}

                                    {/* Security Overlay */}
                                    <AnimatePresence>
                                        {isPrimed && (
                                            <motion.div
                                                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                                className="absolute inset-0 bg-[#D2042D]/90 backdrop-blur-md z-30 flex flex-col items-center justify-center p-6 text-center"
                                            >
                                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 shadow-lg">
                                                    <svg className="w-6 h-6 text-[#D2042D]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                                                </div>
                                                <h4 className="text-white font-black text-lg uppercase tracking-widest mb-1">Open Dossier</h4>
                                                <p className="text-white/80 text-[10px] font-bold uppercase tracking-[0.2em]">Tap again to view details</p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    {/* Card Header */}
                                    <div className="relative z-10 flex justify-between items-center mb-4 lg:mb-6">
                                        <span className="text-zinc-400 text-[11px] lg:text-[13px] font-black tracking-[0.2em] uppercase">
                                            {item.year}
                                        </span>
                                        <span className="bg-[#D2042D]/10 border border-[#D2042D]/20 text-[#D2042D] text-[9px] lg:text-[10px] font-black px-3 py-1.5 rounded-md uppercase tracking-widest shrink-0">
                                            {item.tag}
                                        </span>
                                    </div>

                                    {/* Role & Title */}
                                    <div className="relative z-10 flex-1 flex flex-col justify-center">
                                        <h3 className="text-lg lg:text-2xl xl:text-3xl font-black text-white leading-snug tracking-tight group-hover:text-[#D2042D] transition-colors mb-2 line-clamp-2">
                                            {item.title}
                                        </h3>
                                        <p className="text-[10px] lg:text-xs font-bold text-zinc-400 uppercase tracking-widest line-clamp-1">
                                            {item.role} • {item.forum}
                                        </p>
                                    </div>

                                    {/* Description & Tap Prompt */}
                                    <div className="relative z-10 border-t border-zinc-800/50 pt-3 lg:pt-4 mt-2">
                                        <p className="text-[11px] lg:text-sm text-zinc-500 leading-relaxed font-medium line-clamp-2 lg:line-clamp-3">
                                            {item.desc}
                                        </p>

                                        <div className="mt-3 lg:mt-4 flex items-center gap-2 text-[#D2042D] text-[9px] font-black uppercase tracking-[0.2em]">
                                            {!isTouch && <span>Click to expand</span>}
                                            {!isTouch && <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>}
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                        <div className="shrink-0 w-4 lg:w-12" />
                    </div>
                </div>

                {/* ── SCROLL PROGRESS BAR ── */}
                <div className="px-5 md:px-12 mt-2 lg:mt-4 shrink-0">
                    <div className="w-full max-w-[200px] mx-auto h-[2px] bg-zinc-800/50 rounded-full overflow-hidden">
                        <motion.div style={{ scaleX, transformOrigin: "0%" }} className="h-full bg-[#D2042D] w-full" />
                    </div>
                </div>

            </div>

            {/* ── THE DOSSIER MODAL ── */}
            <AnimatePresence>
                {activeModalData && (
                    <div className="fixed inset-0 z-[120] flex items-end lg:items-center justify-center p-0 lg:p-10">
                        <motion.div
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            onClick={() => setActiveModalData(null)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
                        />

                        <motion.div
                            initial={{ y: "100%", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: "100%", opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative w-full max-w-2xl bg-[#0c0c0e] rounded-t-[2rem] lg:rounded-[2rem] border-t lg:border border-zinc-800 shadow-2xl overflow-hidden flex flex-col max-h-[85vh] lg:max-h-[90vh]"
                        >
                            <div className="p-5 md:p-8 bg-[#09090b] border-b border-zinc-800 flex justify-between items-start shrink-0">
                                <div className="flex items-center gap-4 md:gap-6">

                                    <div className="w-14 h-14 md:w-20 md:h-20 bg-white rounded-2xl flex items-center justify-center p-2 md:p-3 shrink-0 shadow-inner overflow-hidden">
                                        <img
                                            src="/Education/VIT.png"
                                            alt="VIT-AP"
                                            className="w-full h-full object-contain"
                                        />
                                    </div>

                                    <div>
                                        <span className="bg-[#D2042D] text-white text-[8px] md:text-[9px] font-black px-2 py-1 rounded-sm uppercase tracking-widest mb-1.5 inline-block">
                                            {activeModalData.tag}
                                        </span>
                                        <h2 className="text-lg sm:text-xl md:text-2xl font-black text-white leading-tight tracking-tight pr-2">
                                            {activeModalData.title}
                                        </h2>
                                        <p className="text-[9px] md:text-xs font-bold text-zinc-400 uppercase tracking-widest mt-1 line-clamp-1">
                                            {activeModalData.role}
                                        </p>
                                    </div>
                                </div>

                                <button
                                    onClick={() => setActiveModalData(null)}
                                    className="w-8 h-8 md:w-10 md:h-10 shrink-0 bg-zinc-900 border border-zinc-800 rounded-full flex items-center justify-center text-zinc-400 hover:text-white hover:bg-[#D2042D] hover:border-[#D2042D] transition-colors ml-2"
                                >
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                </button>
                            </div>

                            <div className="p-5 md:p-8 overflow-y-auto scrollbar-hide">
                                <div className="flex flex-wrap gap-3 md:gap-4 mb-6 md:mb-8">
                                    <div className="flex-1 min-w-[120px] bg-zinc-900/50 border border-zinc-800/50 p-3 md:p-4 rounded-xl">
                                        <p className="text-[8px] md:text-[9px] text-zinc-500 uppercase tracking-widest font-bold mb-1">Forum / Organizer</p>
                                        <p className="text-xs md:text-sm text-zinc-200 font-bold truncate">{activeModalData.forum}</p>
                                    </div>
                                    <div className="flex-1 min-w-[120px] bg-zinc-900/50 border border-zinc-800/50 p-3 md:p-4 rounded-xl">
                                        <p className="text-[8px] md:text-[9px] text-zinc-500 uppercase tracking-widest font-bold mb-1">Scale / Type</p>
                                        <p className="text-xs md:text-sm text-[#D2042D] font-black">{activeModalData.type}</p>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-[10px] md:text-xs font-black text-white uppercase tracking-[0.2em] mb-4 flex items-center gap-3">
                                        <span className="w-4 h-[2px] bg-[#D2042D]"></span>
                                        Key Deliverables & Execution
                                    </h3>
                                    <ul className="flex flex-col gap-3 md:gap-4 pb-4">
                                        {activeModalData.inDepth.map((point, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#D2042D] mt-1.5 md:mt-2 shrink-0" />
                                                <p className="text-[11px] md:text-sm text-zinc-300 font-medium leading-relaxed">
                                                    {point}
                                                </p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

        </div>
    );
}