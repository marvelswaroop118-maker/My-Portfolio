"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

// Strictly using your actual achievements from the flip cards & education data
const PILLARS = [
  {
    id: "experience",
    title: "Litigation & Corporate",
    subtitle: "Extensive exposure across 13+ internships.",
    details: "Over 69 weeks of practical legal exposure at top tier firms including MLS & Co. and Fox & Mandal. Drafted commercial contracts, navigated SEBI & SCRA regulations, and assisted in high-stakes litigation.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
    ),
    stat: "13",
    statLabel: "Internships",
  },
  {
    id: "publications",
    title: "Research & Scholarship",
    subtitle: "22+ Papers and Conference Presentations.",
    details: "Published extensively on AI Governance, Privacy, and Corporate Law. Showcased research at international conferences and premier institutions like NMIMS and DSNLU, focusing on modern tech governance.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>
    ),
    stat: "22+",
    statLabel: "Papers & Talks",
  },
  {
    id: "education",
    title: "Tech Law & Academics",
    subtitle: "BBA LL.B (Hons.) & Tech Law Diploma.",
    details: "Secured 6th Rank in NTSE Law. Combining an 8.19 CGPA in core legal studies with an A-Grade Diploma in Tech Law from LawSikho to bridge the gap between code and compliance.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2" /><rect x="9" y="9" width="6" height="6" /><line x1="9" y1="1" x2="9" y2="4" /><line x1="15" y1="1" x2="15" y2="4" /><line x1="9" y1="20" x2="9" y2="23" /><line x1="15" y1="20" x2="15" y2="23" /><line x1="20" y1="9" x2="23" y2="9" /><line x1="20" y1="14" x2="23" y2="14" /><line x1="1" y1="9" x2="4" y2="9" /><line x1="1" y1="14" x2="4" y2="14" /></svg>
    ),
    stat: "6th",
    statLabel: "NTSE Law Rank",
  },
  {
    id: "credentials",
    title: "Advocacy & Leadership",
    subtitle: "Moot Court Speaker & National Organizer.",
    details: "Represented at NLU Odisha and KIIT National Moot Courts. Demonstrated leadership by organizing the VIT-AP National Conference 2024 and mentoring junior advocates.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7" /><polyline points="8 14 7 22 12 19 17 22 16 14" /></svg>
    ),
    stat: "3+",
    statLabel: "Major Moots",
  },
];

export default function Summary() {
  const [active, setActive] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-scroll logic for the Accordion
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % PILLARS.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const navigateToSection = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full h-[100svh] bg-[#09090b] overflow-hidden flex flex-col font-sans">

      {/* ── AMBIENT BACKGROUND ── */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)`, backgroundSize: "40px 40px" }} />
      <div className="absolute top-1/2 left-0 w-[300px] lg:w-[800px] h-[300px] lg:h-[800px] bg-[#D2042D]/5 rounded-full blur-[100px] pointer-events-none z-0 -translate-y-1/2 -translate-x-1/4" />

      {/* ── MAIN LAYOUT WRAPPER ── */}
      {/* Optimized padding for strict 100svh fit */}
      <div className="relative z-10 w-full max-w-[90rem] mx-auto flex flex-col lg:flex-row h-full pt-[12svh] lg:pt-[14svh] pb-[3svh] lg:pb-[8svh] px-5 md:px-12 gap-4 lg:gap-20">

        {/* ── LEFT COLUMN: THE MANIFESTO ── */}
        <motion.div
          variants={staggerContainer} initial="hidden" animate="show"
          className="flex-none lg:flex-1 flex flex-col justify-center w-full lg:max-w-xl"
        >
          <motion.div variants={fadeUp} className="mb-2 lg:mb-4 flex items-center justify-center lg:justify-start gap-2 lg:gap-3 w-full">
            <span className="w-6 lg:w-8 h-[2px] bg-[#D2042D]"></span>
            <p className="text-[9px] lg:text-[10px] text-zinc-400 uppercase tracking-[0.3em] font-bold">At a Glance</p>
          </motion.div>

          <motion.h2 variants={fadeUp} className="text-[11vw] sm:text-5xl lg:text-[5rem] text-center lg:text-left font-black leading-[0.9] tracking-tight uppercase mb-2 lg:mb-8">
            <span className="text-white block mb-1 lg:mb-2">Modern</span>
            <span className="text-transparent [-webkit-text-stroke:1px_#D2042D] lg:[-webkit-text-stroke:1.5px_#D2042D] block">Advocacy</span>
          </motion.h2>

          {/* HIDDEN ON MOBILE: This frees up massive vertical space so the accordion fits flawlessly */}
          <motion.p variants={fadeUp} className="hidden md:block text-zinc-400 text-sm lg:text-base leading-relaxed text-left font-medium max-w-lg mx-auto lg:mx-0 mb-6 lg:mb-10">
            A litigation-trained, research-driven legal professional bridging the gap between traditional corporate practice and the specialized frontiers of AI governance, technology law, and regulatory compliance.
          </motion.p>

          <motion.div variants={fadeUp} className="hidden lg:flex items-center gap-6">
            <div className="w-14 h-14 rounded-full bg-[#0c0c0e] border border-zinc-800 flex items-center justify-center">
              <span className="text-white font-serif italic text-2xl">SC</span>
            </div>
            <div>
              <p className="text-white font-bold tracking-wider uppercase text-sm">Swaroop Choudary</p>
              <p className="text-zinc-500 text-[10px] uppercase tracking-[0.2em] font-bold mt-1">BBA LL.B (Hons.)</p>
            </div>
          </motion.div>
        </motion.div>

        {/* ── RIGHT COLUMN: THE HIGH-PERFORMANCE ACCORDION ── */}
        <div
          className="flex-1 w-full h-full flex flex-col justify-center gap-2 lg:gap-4 min-h-0"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
          onTouchStart={() => setIsAutoPlaying(false)}
        >
          {PILLARS.map((pillar, index) => {
            const isActive = active === index;

            return (
              <div
                key={pillar.id}
                onClick={() => {
                  setActive(index);
                  setIsAutoPlaying(false);
                }}
                className={`w-full overflow-hidden rounded-2xl lg:rounded-[2rem] cursor-pointer border transition-colors duration-300 ${isActive
                    ? "bg-[#0c0c0e] border-zinc-700 shadow-xl"
                    : "bg-[#09090b] border-zinc-800/60 hover:bg-[#0c0c0e]"
                  }`}
              >
                {/* Tighter padding on mobile */}
                <div className="p-3.5 sm:p-5 lg:p-6 flex flex-col">

                  {/* HEADER (Always Visible) */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 lg:gap-5">
                      {/* Smaller icons on mobile */}
                      <div className={`w-8 h-8 lg:w-12 lg:h-12 rounded-full flex items-center justify-center transition-colors duration-300 shrink-0 ${isActive ? "bg-[#D2042D] text-white shadow-[0_0_15px_rgba(210,4,45,0.3)]" : "bg-zinc-900 text-zinc-500"}`}>
                        <div className="w-4 h-4 lg:w-6 lg:h-6">
                          {pillar.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className={`text-[13px] sm:text-base lg:text-xl font-black uppercase tracking-wider transition-colors duration-300 ${isActive ? "text-white" : "text-zinc-400"}`}>
                          {pillar.title}
                        </h3>
                        {/* Subtitle hidden on mobile to ensure zero overlap */}
                        <p className={`hidden md:block text-[10px] lg:text-xs font-bold text-zinc-500 mt-1 line-clamp-1`}>
                          {pillar.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className={`transform transition-transform duration-300 shrink-0 ml-2 ${isActive ? "rotate-90 text-[#D2042D]" : "text-zinc-600"}`}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7" /></svg>
                    </div>
                  </div>

                  {/* EXPANDED CONTENT (Hardware Accelerated Height Animation) */}
                  <motion.div
                    initial={false}
                    animate={{ height: isActive ? "auto" : 0, opacity: isActive ? 1 : 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pt-3 lg:pt-6 mt-2 lg:mt-4 border-t border-zinc-800/80 flex flex-col sm:flex-row gap-3 lg:gap-8 items-start sm:items-center justify-between pb-1">

                      <p className="text-[10px] sm:text-xs lg:text-sm text-zinc-300 leading-snug lg:leading-relaxed font-medium flex-1 line-clamp-3 sm:line-clamp-none">
                        {pillar.details}
                      </p>

                      <div className="flex items-center gap-4 lg:gap-6 w-full sm:w-auto justify-between sm:justify-end shrink-0">
                        {/* The Quick Stat */}
                        <div className="text-left sm:text-right">
                          <p className="text-xl lg:text-3xl font-black text-[#D2042D] leading-none">
                            {pillar.stat}
                          </p>
                          <p className="text-[8px] lg:text-[9px] font-bold text-zinc-500 uppercase tracking-widest mt-1">
                            {pillar.statLabel}
                          </p>
                        </div>

                        {/* The Action Button */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            navigateToSection(pillar.id);
                          }}
                          className="px-3 py-2 lg:px-6 lg:py-3 bg-zinc-900 border border-zinc-700 hover:border-[#D2042D] hover:bg-[#D2042D] text-white text-[8px] lg:text-[10px] font-black uppercase tracking-[0.2em] rounded-xl transition-all duration-300"
                        >
                          Explore
                        </button>
                      </div>

                    </div>
                  </motion.div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}