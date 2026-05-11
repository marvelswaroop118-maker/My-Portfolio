"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const EDUCATION_DATA = [
  {
    year: "2021 – 2026",
    degree: "BBA, LL.B. (Hons.)",
    institution: "VIT-AP University",
    category: "Undergraduate Degree",
    details: "CGPA: 8.19/10. Recipient of the Academic Excellence Award for outstanding academic performance. Comprehensive focus on corporate law, intellectual property, and legal research methodologies.",
    logo: "/Education/VIT.png",
    initials: "Degree",
  },
  {
    year: "2025",
    degree: "Diploma in Tech Law",
    institution: "LawSikho",
    category: "Professional Certification",
    details: "Completed with an A Grade. Intensive curriculum focused on technology contracts, fintech regulations, data privacy, and modern compliance frameworks.",
    logo: "/Education/LAWSEIKHO.png",
    initials: "Diploma",
  },
  {
    year: "2019 – 2021",
    degree: "Class XII (Intermediate)",
    institution: "Sri Viswashanti Educational",
    category: "APBIE Board",
    details: "Secured 84% with strong academic performance across core subjects, establishing a rigorous analytical foundation for higher legal education.",
    logo: "/Education/BIEAP.png",
    initials: "12th",
  },
  {
    year: "2018 – 2019",
    degree: "Class X (SSC)",
    institution: "Sri Chaitanya Techno School",
    category: "BSEAP Board",
    details: "Achieved 9.3 GPA, demonstrating consistent academic excellence, discipline, and leadership in foundational studies.",
    logo: "/Education/BSEAP.png",
    initials: "10th",
  },
];

export default function Education() {
  const [active, setActive] = useState(0);
  const [imgFailed, setImgFailed] = useState<Record<number, boolean>>({});
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-scroll logic
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % EDUCATION_DATA.length);
    }, 4000); // Switches every 4 seconds
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <div className="relative w-full h-[100svh] bg-[#09090b] overflow-hidden flex flex-col font-sans">

      {/* ── AMBIENT BACKGROUND ── */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)`, backgroundSize: "40px 40px" }} />
      <div className="absolute bottom-0 left-0 w-[300px] lg:w-[600px] h-[300px] lg:h-[600px] bg-[#D2042D]/5 rounded-full blur-[100px] pointer-events-none z-0 translate-y-1/2 -translate-x-1/4" />

      {/* ── MAIN LAYOUT WRAPPER ── */}
      <div className="relative z-10 w-full max-w-[90rem] mx-auto px-5 md:px-12 flex flex-col h-full pt-[15svh] lg:pt-[14svh] pb-[4svh] lg:pb-[8svh] justify-between">

        {/* ── HEADER ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          className="w-full flex flex-col items-center lg:items-start text-center lg:text-left mb-6 lg:mb-10 shrink-0"
        >
          <div className="mb-2 lg:mb-4 flex items-center justify-center lg:justify-start gap-2 lg:gap-3 w-full">
            <span className="w-6 lg:w-8 h-[2px] bg-[#D2042D]"></span>
            <p className="text-[9px] lg:text-[10px] text-zinc-400 uppercase tracking-[0.3em] font-bold">Academics</p>
          </div>
          {/* FIXED MOBILE OVERFLOW: Switched to block spans to guarantee stacking, safely scaled text size */}
          <h2 className="text-[9.5vw] sm:text-5xl lg:text-[4.5rem] font-black leading-[0.95] tracking-tight uppercase">
            <span className="text-white block mb-1 lg:mb-2 lg:inline">Academic</span>
            <span className="text-transparent [-webkit-text-stroke:1px_#D2042D] lg:[-webkit-text-stroke:1.5px_#D2042D] block lg:inline lg:ml-4">Foundation</span>
          </h2>
        </motion.div>

        {/* ── CONTENT SPLIT (Timeline + Display Box) ── */}
        <div
          className="flex flex-col lg:flex-row gap-6 lg:gap-16 flex-1 min-h-0 w-full items-center lg:items-stretch"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
          onTouchStart={() => setIsAutoPlaying(false)} // Pauses auto-scroll if user taps on mobile
        >

          {/* 1. TIMELINE NAVIGATION */}
          <div className="w-full lg:w-1/3 flex lg:flex-col justify-between lg:justify-start lg:gap-10 relative shrink-0">
            {/* Desktop Vertical Line connecting nodes */}
            <div className="hidden lg:block absolute left-[11px] top-4 bottom-4 w-[2px] bg-zinc-800/50 -z-10" />
            {/* Mobile Horizontal Line connecting nodes */}
            <div className="lg:hidden absolute top-[11px] left-6 right-6 h-[2px] bg-zinc-800/50 -z-10" />

            {EDUCATION_DATA.map((item, i) => {
              const isActive = active === i;
              return (
                <button
                  key={i}
                  onClick={() => {
                    setActive(i);
                    setIsAutoPlaying(false);
                  }}
                  className={`relative flex lg:flex-row flex-col items-center lg:items-start gap-2 lg:gap-6 group text-left ${isActive ? 'opacity-100' : 'opacity-40 hover:opacity-70'} transition-opacity duration-300`}
                >
                  {/* Timeline Node */}
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 transition-all duration-500 bg-[#09090b] ${isActive ? 'border-[#D2042D] scale-125 shadow-[0_0_15px_rgba(210,4,45,0.4)]' : 'border-zinc-700 group-hover:border-zinc-500'}`}>
                    {isActive && <motion.div layoutId="activeDot" className="w-2 h-2 rounded-full bg-[#D2042D]" />}
                  </div>

                  {/* Timeline Text */}
                  <div className="flex flex-col items-center lg:items-start mt-2 lg:mt-0">
                    <span className="text-[10px] lg:text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1 hidden sm:block">
                      {item.year}
                    </span>
                    <span className={`text-[9px] sm:text-xs lg:text-sm font-black uppercase tracking-wider text-center lg:text-left transition-colors duration-300 ${isActive ? 'text-white' : 'text-zinc-500'}`}>
                      {item.initials}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* 2. CINEMATIC DISPLAY BOX */}
          <div className="flex-1 w-full max-w-2xl relative h-full flex items-center justify-center">
            <div className="absolute inset-0 bg-[#D2042D]/5 blur-[80px] rounded-full pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="w-full bg-[#0c0c0e]/80 backdrop-blur-xl border border-zinc-800/80 p-6 sm:p-8 lg:p-12 rounded-3xl lg:rounded-[2rem] shadow-2xl relative overflow-hidden flex flex-col justify-between min-h-[250px] lg:min-h-[350px]"
              >
                {/* Watermark Background Number */}
                <span className="absolute -bottom-10 -right-4 text-[12rem] lg:text-[16rem] font-black text-white/[0.02] select-none pointer-events-none leading-none">
                  0{active + 1}
                </span>

                {/* Top Row: Logo & Badges */}
                <div className="flex justify-between items-start mb-6 lg:mb-10 relative z-10">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 shrink-0 bg-white/95 rounded-2xl flex items-center justify-center p-2.5 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                    {!imgFailed[active] ? (
                      <img
                        src={EDUCATION_DATA[active].logo}
                        alt={EDUCATION_DATA[active].institution}
                        className="w-full h-full object-contain"
                        onError={() => setImgFailed(prev => ({ ...prev, [active]: true }))}
                      />
                    ) : (
                      <span className="text-[10px] sm:text-xs font-black text-[#09090b]">
                        {EDUCATION_DATA[active].initials}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col items-end gap-2 text-right">
                    <span className="bg-[#D2042D]/10 border border-[#D2042D]/20 text-[#D2042D] text-[9px] sm:text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest">
                      {EDUCATION_DATA[active].year}
                    </span>
                    <span className="text-zinc-500 text-[8px] sm:text-[9px] font-bold uppercase tracking-[0.2em]">
                      {EDUCATION_DATA[active].category}
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="relative z-10 flex-1 flex flex-col justify-end">
                  <h3 className="text-lg sm:text-2xl lg:text-3xl font-black text-white leading-snug tracking-tight mb-2">
                    {EDUCATION_DATA[active].degree}
                  </h3>
                  <p className="text-[12px] sm:text-sm lg:text-base font-bold text-zinc-400 mb-4 lg:mb-6">
                    {EDUCATION_DATA[active].institution}
                  </p>

                  <div className="w-12 h-[1px] bg-zinc-800 mb-4 lg:mb-6" />

                  <p className="text-[11px] sm:text-xs lg:text-sm leading-relaxed text-zinc-300 font-medium">
                    {EDUCATION_DATA[active].details}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </div>
  );
}