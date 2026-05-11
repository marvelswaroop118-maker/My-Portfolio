"use client";

import { motion, Variants } from "framer-motion";
import { useState, useEffect, useRef } from "react";

// --- REFINED DATASET (CRIMINAL & FAMILY FOCUS) ---
const EXPERTISE_DATA = {
  practiceAreas: [
    "Criminal Law & Defense",
    "Family & Matrimonial Law",
    "Corporate & Commercial Litigation",
    "Constitutional Law & Writs",
    "Dispute Resolution & Arbitration",
  ],
  coreSkills: [
    "Trial Advocacy & Cross-Examination",
    "Legal Research & Precedent Analysis",
    "Bail Petitions & Criminal Pleadings",
    "Matrimonial Dispute Strategy",
    "Evidence Analysis & Fact-Finding",
    "Drafting & Brief Preparation",
  ],
  specialisation: [
    "Criminal Litigation",
    "Matrimonial Disputes",
    "Trial Advocacy",
  ],
  tools: [
    "SCC Online",
    "LexisNexis",
    "Manupatra",
    "MS Office Suite",
  ]
};

// 🚨 FIX: Moved variants OUTSIDE the component and typed securely to prevent Vercel errors & re-render lag
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any } }
};

export default function Expertise() {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Safely check device and mount status to prevent SSR hydration mismatch
  useEffect(() => {
    setMounted(true);
    const checkDevice = () => setIsMobile(window.innerWidth < 1024);
    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  // Native, bulletproof scroll tracking (replaces buggy useScroll hook)
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollLeft, scrollWidth, clientWidth } = e.currentTarget;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll <= 0) return;
    setScrollProgress(scrollLeft / maxScroll);
  };

  return (
    // STRICT LOCK: 100svh, hidden overflow, flex column
    <div className="relative w-full h-[100svh] bg-[#09090b] overflow-hidden flex flex-col font-sans">

      {/* ── AMBIENT BACKGROUND ── */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)`, backgroundSize: "40px 40px" }} />
      {/* 🚨 FIX: Added transform-gpu to offload heavy blurring to the Graphics Card for frictionless scrolling */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] lg:w-[600px] h-[300px] lg:h-[600px] bg-[#D2042D]/5 rounded-full blur-[100px] pointer-events-none z-0 transform-gpu" />

      {/* ── MAIN LAYOUT WRAPPER ── */}
      <div className="relative z-10 w-full max-w-[90rem] mx-auto flex flex-col h-full pt-[12svh] lg:pt-[14svh] pb-[3svh] lg:pb-[5svh]">

        {/* ── HEADER ── */}
        <motion.div
          variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }}
          className="w-full flex flex-col items-center lg:items-start text-center lg:text-left mb-4 lg:mb-8 shrink-0 px-5 md:px-12"
        >
          <motion.div variants={fadeUp} className="mb-2 lg:mb-3 flex items-center justify-center lg:justify-start gap-2 lg:gap-3 w-full">
            <span className="w-6 lg:w-8 h-[2px] bg-[#D2042D]"></span>
            <p className="text-[9px] lg:text-[10px] text-zinc-400 uppercase tracking-[0.3em] font-bold">The Legal Arsenal</p>
          </motion.div>

          <motion.h2 variants={fadeUp} className="text-[10vw] sm:text-5xl lg:text-[4rem] font-black leading-[0.95] tracking-tight uppercase">
            <span className="text-white block lg:inline">Core</span>
            <span className="text-transparent [-webkit-text-stroke:1px_#D2042D] lg:[-webkit-text-stroke:1.5px_#D2042D] block lg:inline lg:ml-4">Competencies</span>
          </motion.h2>

          <motion.p variants={fadeUp} className="text-zinc-300 text-[10.5px] sm:text-xs lg:text-[13px] leading-relaxed max-w-[95%] sm:max-w-2xl mx-auto lg:mx-0 mt-4 font-medium">
            Recent B.B.A. LL.B. (Hons.) graduate. Forged through rigorous courtroom exposure, meticulous precedent analysis, and hands-on experience in high-stakes criminal litigation and complex family disputes.
          </motion.p>
        </motion.div>

        {/* ── MOBILE SWIPE INDICATOR (Safely mounted) ── */}
        {mounted && isMobile && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="px-5 md:px-12 mb-3 shrink-0 flex items-center justify-center lg:justify-start">
            <div className="text-[#D2042D] text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2">
              Swipe to explore
              <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}>→</motion.span>
            </div>
          </motion.div>
        )}

        {/* ── THE HYBRID GRID / CAROUSEL ── */}
        <motion.div
          variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }}
          className="flex-1 min-h-0 w-full relative"
        >
          {/* Edge fade for desktop */}
          <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#09090b] to-transparent z-20 pointer-events-none" />

          {/* Container switches between flex-row (mobile) and CSS grid (desktop) */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex lg:grid flex-row lg:grid-cols-3 lg:grid-rows-2 gap-4 lg:gap-4 overflow-x-auto lg:overflow-hidden snap-x snap-mandatory scrollbar-hide w-full h-full items-stretch px-5 md:px-12 pb-2 lg:pb-0"
          >

            {/* 1. PRACTICE AREAS */}
            <motion.div variants={fadeUp} className="shrink-0 snap-center w-[85vw] sm:w-[320px] lg:w-auto h-full lg:col-span-2 bg-[#0c0c0e]/80 backdrop-blur-xl border border-zinc-800/80 p-5 lg:p-6 rounded-3xl lg:rounded-[2rem] flex flex-col group hover:border-zinc-700 transition-colors duration-300 transform-gpu">
              <div className="flex items-center gap-2 mb-4 border-b border-zinc-800/50 pb-3 shrink-0">
                <div className="w-1.5 h-1.5 rounded-full bg-zinc-600 group-hover:bg-[#D2042D] transition-colors duration-500" />
                <h3 className="text-[11px] lg:text-sm font-black uppercase tracking-[0.2em] text-white">Practice Areas</h3>
              </div>
              <div className="flex flex-wrap gap-2 overflow-y-auto lg:overflow-visible scrollbar-hide">
                {EXPERTISE_DATA.practiceAreas.map((item, i) => (
                  <span key={i} className="text-[10px] lg:text-[10px] font-bold px-3 py-1.5 rounded-lg border border-zinc-800 bg-[#09090b]/50 text-zinc-300 uppercase tracking-widest hover:bg-zinc-800 hover:text-white transition-colors cursor-default">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* 2. SPECIALISATION (Highlighted Premium Card) */}
            <motion.div variants={fadeUp} className="shrink-0 snap-center w-[85vw] sm:w-[320px] lg:w-auto h-full lg:col-span-1 bg-[#0c0c0e]/90 backdrop-blur-xl border border-[#D2042D]/30 p-5 lg:p-6 rounded-3xl lg:rounded-[2rem] flex flex-col relative overflow-hidden group hover:border-[#D2042D]/60 shadow-[0_0_20px_rgba(210,4,45,0.03)] transition-all duration-300 transform-gpu">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#D2042D]/10 rounded-full blur-[40px] pointer-events-none group-hover:bg-[#D2042D]/20 transition-colors duration-500 transform-gpu" />

              <div className="relative z-10 flex items-center gap-2 mb-4 border-b border-[#D2042D]/20 pb-3 shrink-0">
                <div className="w-1.5 h-1.5 rounded-full bg-[#D2042D] shadow-[0_0_8px_rgba(210,4,45,0.8)]" />
                <h3 className="text-[11px] lg:text-sm font-black uppercase tracking-[0.2em] text-white">Specialisation</h3>
              </div>
              <div className="relative z-10 flex flex-col gap-2.5 overflow-y-auto lg:overflow-visible scrollbar-hide">
                {EXPERTISE_DATA.specialisation.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-[#D2042D]/5 border border-[#D2042D]/20 px-3 py-3 lg:py-2.5 rounded-xl group-hover:bg-[#D2042D]/10 transition-colors duration-300">
                    <svg className="w-4 h-4 lg:w-3.5 lg:h-3.5 text-[#D2042D] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path></svg>
                    <span className="text-[10px] lg:text-[11px] font-black text-white uppercase tracking-wider">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* 3. CORE LEGAL SKILLS (Tall Card) */}
            <motion.div variants={fadeUp} className="shrink-0 snap-center w-[85vw] sm:w-[320px] lg:w-auto h-full lg:col-span-2 bg-[#0c0c0e]/80 backdrop-blur-xl border border-zinc-800/80 p-5 lg:p-6 rounded-3xl lg:rounded-[2rem] flex flex-col group hover:border-zinc-700 transition-colors duration-300 transform-gpu">
              <div className="flex items-center gap-2 mb-4 border-b border-zinc-800/50 pb-3 shrink-0">
                <div className="w-1.5 h-1.5 rounded-full bg-zinc-600 group-hover:bg-[#D2042D] transition-colors duration-500" />
                <h3 className="text-[11px] lg:text-sm font-black uppercase tracking-[0.2em] text-white">Core Legal Skills</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 lg:gap-4 overflow-y-auto lg:overflow-visible scrollbar-hide">
                {EXPERTISE_DATA.coreSkills.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 lg:w-1.5 lg:h-1.5 rounded-full bg-zinc-700 mt-1.5 shrink-0 group-hover:bg-[#D2042D] transition-colors" />
                    <span className="text-[11px] lg:text-[13px] font-medium text-zinc-400 leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* 4. TOOLS & RESEARCH (Compact Card) */}
            <motion.div variants={fadeUp} className="shrink-0 snap-center w-[85vw] sm:w-[320px] lg:w-auto h-full lg:col-span-1 bg-[#0c0c0e]/40 backdrop-blur-xl border border-zinc-800/50 border-dashed p-5 lg:p-6 rounded-3xl lg:rounded-[2rem] flex flex-col group hover:border-zinc-700 hover:bg-[#0c0c0e]/80 transition-colors duration-300 transform-gpu">
              <div className="flex items-center gap-2 mb-4 border-b border-zinc-800/50 pb-3 shrink-0">
                <div className="w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover:text-white transition-colors duration-500" />
                <h3 className="text-[11px] lg:text-sm font-black uppercase tracking-[0.2em] text-zinc-500 group-hover:text-white transition-colors">Digital Tools</h3>
              </div>
              <div className="flex flex-wrap gap-2 overflow-y-auto lg:overflow-visible scrollbar-hide">
                {EXPERTISE_DATA.tools.map((item, i) => (
                  <span key={i} className="text-[9px] lg:text-[10px] font-bold px-3 py-1.5 rounded-lg border border-zinc-800/50 text-zinc-500 uppercase tracking-widest group-hover:text-zinc-400 transition-colors cursor-default">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Empty Spacer to allow final scroll peek on mobile */}
            <div className="shrink-0 w-2 lg:hidden" />
          </div>
        </motion.div>

        {/* ── MOBILE SCROLL PROGRESS BAR (Safely mounted) ── */}
        {mounted && isMobile && (
          <div className="w-full px-5 md:px-12 mt-2 shrink-0">
            <div className="w-full max-w-[200px] mx-auto h-[2px] bg-zinc-800/50 rounded-full overflow-hidden">
              <motion.div
                animate={{ scaleX: Math.max(scrollProgress, 0.05) }}
                transition={{ ease: "linear", duration: 0.1 }}
                style={{ transformOrigin: "0%" }}
                className="h-full bg-[#D2042D] w-full"
              />
            </div>
          </div>
        )}

      </div>
    </div>
  );
}