"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";

// Strictly updated to reflect VSL Intra status and exact winning streak
const ADVOCACY_DATA = [
  {
    year: "2025",
    role: "Speaker",
    title: "Verdictus Moot Court",
    forum: "Navrachna University",
    type: "National Moot",
    description: "Argued complex legal aspects surrounding the Medical Termination of Pregnancy (MTP) Act. Navigated high-pressure bench questioning on statutory interpretation and fundamental constitutional rights.",
    tags: ["MTP Act", "Constitutional Law", "Oral Arguments"],
  },
  {
    year: "2025",
    role: "Speaker",
    title: "Public Health Law Moot",
    forum: "NLU Odisha",
    type: "National Moot",
    description: "Participated in the 4th National Competition, addressing nuanced issues related to the termination of pregnancy, public health policy, and judicial precedents.",
    tags: ["Public Health", "Policy", "Statutory Interpretation"],
  },
  {
    year: "2023",
    role: "Speaker",
    title: "KIIT National Moot Court",
    forum: "KIIT University",
    type: "National Moot",
    description: "Presented rigorous arguments during the 9th Edition. Deconstructed complex issues pertaining to mergers, acquisitions, and advanced company law frameworks.",
    tags: ["Company Law", "Mergers", "Corporate Frameworks"],
  },
  {
    year: "2023",
    role: "Winner",
    title: "Parliamentary Debate",
    forum: "VIT-AP School of Law (VSL)",
    type: "Intra-Law School",
    description: "Secured first place in the parliamentary debate competition, showcasing exceptional extemporaneous speaking, critical thinking, and rebuttal skills under strict time limits.",
    tags: ["Debate", "Public Speaking", "Rebuttals"],
  },
  {
    year: "2023",
    role: "Winner",
    title: "Classroom Rights Competition",
    forum: "VIT-AP School of Law (VSL)",
    type: "Intra-Law School",
    description: "Emerged victorious by presenting compelling, well-researched arguments on fundamental rights within educational institutions and student advocacy.",
    tags: ["Fundamental Rights", "Student Advocacy", "Constitutional Law"],
  },
  {
    year: "2023",
    role: "Winner",
    title: "Intra-School Debate",
    forum: "VIT-AP School of Law (VSL)",
    type: "Intra-Law School",
    description: "Demonstrated strong persuasive abilities, logical structuring, and analytical reasoning to win the intra-school debate championship.",
    tags: ["Debate", "Analytical Reasoning", "Persuasion"],
  },
  {
    year: "2022",
    role: "Counsel",
    title: "Intra Mock Trial",
    forum: "VIT-AP School of Law (VSL)",
    type: "Intra-Law School",
    description: "Acted as counsel in a simulated trial environment. Handled direct examinations, intense cross-examinations of witnesses, and delivered opening and closing statements.",
    tags: ["Mock Trial", "Cross-Examination", "Criminal Law"],
  },
  {
    year: "2021",
    role: "Speaker",
    title: "Intra Moot Court",
    forum: "VIT-AP School of Law (VSL)",
    type: "Intra-Law School",
    description: "Participated in foundational moot court competition, developing core legal research methodologies, memorial drafting, and preliminary courtroom presentation skills.",
    tags: ["Legal Research", "Drafting", "Advocacy"],
  },
];

export default function Advocacy() {
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
      const scrollAmount = isMobile ? window.innerWidth * 0.85 : 420;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const scrollPrev = () => {
    setIsAutoPlaying(false);
    if (scrollRef.current) {
      const scrollAmount = isMobile ? window.innerWidth * 0.85 : 420;
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
          const scrollAmount = isMobile ? window.innerWidth * 0.85 : 420;
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
      <div className="absolute top-0 right-0 w-[400px] lg:w-[800px] h-[400px] lg:h-[800px] bg-[#D2042D]/5 rounded-full blur-[120px] pointer-events-none z-0 -translate-y-1/4 translate-x-1/4" />

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
              <p className="text-[9px] lg:text-[10px] text-zinc-400 uppercase tracking-[0.3em] font-bold">Moots & Debates</p>
            </motion.div>

            <motion.h2 variants={fadeUp} className="text-[10vw] sm:text-5xl lg:text-[4.5rem] font-black leading-[0.95] tracking-tight uppercase">
              <span className="text-white block lg:inline">Courtroom</span>
              <span className="text-transparent [-webkit-text-stroke:1px_#D2042D] lg:[-webkit-text-stroke:1.5px_#D2042D] block lg:inline lg:ml-4">Advocacy</span>
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
            {ADVOCACY_DATA.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9, x: 50 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`relative snap-center shrink-0 w-[85vw] sm:w-[320px] lg:w-[420px] h-[300px] lg:h-[350px] rounded-3xl p-6 lg:p-8 shadow-xl flex flex-col justify-between group overflow-hidden border transition-colors duration-500 ${item.role === "Winner"
                    ? "bg-gradient-to-br from-[#0c0c0e] to-[#1a0508] border-[#D2042D]/40"
                    : "bg-[#0c0c0e]/80 backdrop-blur-xl border-zinc-800/80"
                  }`}
              >
                {/* Red Glow for Winning Cards */}
                {item.role === "Winner" && (
                  <div className="absolute top-0 right-0 w-40 h-40 bg-[#D2042D]/15 rounded-full blur-[50px] pointer-events-none" />
                )}

                {/* Ambient Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#D2042D]/0 via-[#D2042D]/0 to-[#D2042D]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Card Top: Role & Year */}
                <div className="flex justify-between items-start relative z-10">
                  <span className={`text-[9px] lg:text-[10px] font-black px-3 py-1.5 rounded-sm uppercase tracking-widest ${item.role === "Winner"
                      ? "bg-[#D2042D] text-white"
                      : "bg-[#D2042D]/10 border border-[#D2042D]/20 text-[#D2042D]"
                    }`}>
                    {item.role}
                  </span>

                  {/* Subtle index number watermark */}
                  <span className="text-zinc-800 font-black text-3xl select-none">
                    0{i + 1}
                  </span>
                </div>

                {/* Card Middle: Title */}
                <div className="relative z-10 flex-1 flex flex-col justify-center my-2 lg:my-4">
                  <h3 className="text-xl lg:text-2xl font-black text-white leading-snug tracking-tight group-hover:text-zinc-200 transition-colors mb-2">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] lg:text-xs font-bold text-zinc-500 uppercase tracking-widest truncate max-w-[65%]">
                      {item.forum}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-zinc-700 shrink-0" />
                    <span className="text-[10px] lg:text-xs font-bold text-zinc-600 uppercase tracking-widest shrink-0">
                      {item.year}
                    </span>
                  </div>
                </div>

                {/* Card Bottom: Description & Tags */}
                <div className="relative z-10 border-t border-zinc-800/50 pt-4 flex flex-col gap-4 lg:gap-5">
                  <p className="text-[11px] lg:text-[13px] text-zinc-400 leading-relaxed font-medium line-clamp-3">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, idx) => (
                      <span key={idx} className="border border-zinc-700/50 bg-[#09090b]/50 px-2.5 py-1.5 rounded-md text-[8px] lg:text-[9px] font-bold text-zinc-500 uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
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