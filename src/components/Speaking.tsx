"use client";

import { motion, useScroll, useSpring, Variants } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const SPEAKING_DATA = [
  {
    title: "AI Governance & Regulatory Influence",
    fullTitle: "AI Governance in India: Government Oversight and Regulatory Influence",
    venue: "Amity University, Noida",
    date: "Feb 2024",
    type: "International",
    role: "Presenter",
    brief: "AI Regulation"
  },
  {
    title: "Role of India in AI Regulation",
    fullTitle: "Role of India in Regulating the Developments in AI",
    venue: "NMIMS University, Mumbai",
    date: "Feb 2024",
    type: "International",
    role: "Speaker",
    brief: "Policy Control"
  },
  {
    title: "AI Regulatory Landscape",
    fullTitle: "Governance and Artificial Intelligence: Navigating India's Regulatory Landscape",
    venue: "Aligarh Muslim Law University",
    date: "Jan 2024",
    type: "International",
    role: "Presenter",
    brief: "Regulatory Mapping"
  },
  {
    title: "Child Abuse, Religion & Caste",
    fullTitle: "Breaking the Silence: Exploring the Nexus of Child Abuse, Religion, and Caste",
    venue: "NMIMS University, Indore",
    date: "Jan 2024",
    type: "International",
    role: "Presenter",
    brief: "Social Justice"
  },
  {
    title: "GI & IPR Development",
    fullTitle: "Geographical Indications and Intellectual Property Rights: A Catalyst for Regional Development",
    venue: "Dr. RKB Law College, Dibrugarh",
    date: "Mar 2024",
    type: "International",
    role: "Speaker",
    brief: "IP Development"
  },
  {
    title: "ADR Effectiveness",
    fullTitle: "The Effectiveness of Alternative Dispute Resolution Over Traditional Court Proceedings",
    venue: "Kerala Law Academy",
    date: "Dec 2023",
    type: "International",
    role: "Presenter",
    brief: "Dispute Efficiency"
  },
  {
    title: "Privacy & Data Protection",
    fullTitle: "Protecting Privacy in the Digital Age: Navigating Data Regulations in India",
    venue: "MNLU Nagpur & NLU Bangalore",
    date: "Nov 2023",
    type: "International",
    role: "Presenter",
    brief: "Data Protection"
  },
  {
    title: "Trade Secrets vs Employee Rights",
    fullTitle: "Trade Secrets and Employee Mobility: Balancing Business Interests and Employee Rights",
    venue: "CUSAT",
    date: "Nov 2023",
    type: "International",
    role: "Speaker",
    brief: "Corporate Rights"
  },
  {
    title: "Climate Change & Justice",
    fullTitle: "Planet in Peril: Climate Change, Health, and Environmental Justice through Global Legal Perspectives",
    venue: "NMIMS Bangalore",
    date: "Jul 2023",
    type: "International",
    role: "Presenter",
    brief: "Environmental Justice"
  },
  {
    title: "CSR in the Age of AI",
    fullTitle: "Redefining Corporate Social Responsibility In The Age Of Artificial Intelligence",
    venue: "NMIMS National Conference",
    date: "Dec 2024",
    type: "National",
    role: "Presenter",
    brief: "Ethical Governance"
  },
  {
    title: "Emerging Trends in Federalism",
    fullTitle: "Emerging Trends in Indian Federalism",
    venue: "Govt Law College, Thiruvananthapuram",
    date: "Dec 2023",
    type: "National",
    role: "Speaker",
    brief: "Constitutional Balance"
  },
];

// 🚨 FIX: Explicitly typed as Variants with "as any" on easing to bypass Vercel's strict compiler errors.
// Moved outside the component to prevent memory reallocation on re-renders.
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any } }
};

export default function Speaking() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const { scrollXProgress } = useScroll({ container: scrollRef });
  const scaleX = useSpring(scrollXProgress, { stiffness: 100, damping: 20, restDelta: 0.001 });

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const scrollNext = () => {
    setIsAutoPlaying(false);
    if (scrollRef.current) {
      const scrollAmount = isMobile ? window.innerWidth * 0.85 : 500;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const scrollPrev = () => {
    setIsAutoPlaying(false);
    if (scrollRef.current) {
      const scrollAmount = isMobile ? window.innerWidth * 0.85 : 500;
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          const scrollAmount = isMobile ? window.innerWidth * 0.85 : 500;
          scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
      }
    }, 3500);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isMobile]);

  return (
    <div className="relative w-full h-[100svh] bg-[#09090b] overflow-hidden flex flex-col font-sans">

      {/* ── AMBIENT BACKGROUND ── */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)`, backgroundSize: "40px 40px" }} />
      {/* 🚨 FIX: Added transform-gpu to offload static blur to graphics card */}
      <div className="absolute top-0 right-0 w-[400px] lg:w-[800px] h-[400px] lg:h-[800px] bg-[#D2042D]/5 rounded-full blur-[120px] pointer-events-none z-0 -translate-y-1/2 translate-x-1/4 transform-gpu" />

      {/* ── MAIN LAYOUT WRAPPER ── */}
      <div className="relative z-10 w-full max-w-[90rem] mx-auto flex flex-col h-full pt-[15svh] lg:pt-[14svh] pb-[4svh] lg:pb-[8svh] justify-between">

        {/* ── HEADER & NAVIGATION ── */}
        <motion.div
          variants={staggerContainer} initial="hidden" animate="show"
          className="w-full flex flex-col lg:flex-row items-center lg:items-end justify-between mb-6 lg:mb-10 px-5 md:px-12 shrink-0 gap-4"
        >
          <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
            <motion.div variants={fadeUp} className="mb-2 lg:mb-4 flex items-center justify-center lg:justify-start gap-2 lg:gap-3 w-full">
              <span className="w-6 lg:w-8 h-[2px] bg-[#D2042D]"></span>
              <p className="text-[9px] lg:text-[10px] text-zinc-400 uppercase tracking-[0.3em] font-bold">Summits & Delegations</p>
            </motion.div>

            <motion.h2 variants={fadeUp} className="text-[10vw] sm:text-5xl lg:text-[4.5rem] font-black leading-[0.95] tracking-tight uppercase">
              <span className="text-white block lg:inline">Speaking</span>
              <span className="text-transparent [-webkit-text-stroke:1px_#D2042D] lg:[-webkit-text-stroke:1.5px_#D2042D] block lg:inline lg:ml-4">Engagements</span>
            </motion.h2>

            {isMobile && (
              <motion.div variants={fadeUp} className="mt-3 text-[#D2042D] text-[9px] font-black uppercase tracking-[0.2em] flex items-center gap-2">
                Swipe to explore
                <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}>→</motion.span>
              </motion.div>
            )}
          </div>

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

        {/* ── HORIZONTAL CAROUSEL (THE TICKET GALLERY) ── */}
        <div
          className="flex-1 min-h-0 w-full relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
          onTouchStart={() => setIsAutoPlaying(false)}
        >
          <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#09090b] to-transparent z-20 pointer-events-none" />
          <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#09090b] to-transparent z-20 pointer-events-none" />

          <div
            ref={scrollRef}
            className="w-full h-full flex overflow-x-auto snap-x snap-mandatory scrollbar-hide overscroll-x-contain items-center px-5 md:px-12 gap-5 lg:gap-8 pb-4"
          >
            {SPEAKING_DATA.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9, x: 50 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                // 🚨 FIX: Added "as any" to the easing array
                transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] as any }}
                // The VIP Pass / Ticket Shape
                className="relative snap-center shrink-0 w-[85vw] sm:w-[400px] lg:w-[480px] h-[280px] lg:h-[320px] bg-[#0c0c0e]/80 backdrop-blur-xl border border-zinc-800/80 rounded-3xl shadow-xl flex group overflow-hidden transform-gpu"
              >
                {/* ── TICKET STUB (LEFT) ── */}
                <div className="w-14 lg:w-16 border-r-2 border-dashed border-zinc-800/80 flex flex-col items-center justify-between py-6 relative bg-[#09090b]/50 shrink-0">
                  {/* Physical Ticket Cutouts */}
                  <div className="absolute -top-3 -right-3 w-6 h-6 bg-[#09090b] rounded-full border-b border-l border-zinc-800/80" />
                  <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-[#09090b] rounded-full border-t border-l border-zinc-800/80" />

                  <span className="text-zinc-600 text-[10px] lg:text-[11px] font-black tracking-[0.3em] uppercase rotate-180 opacity-70" style={{ writingMode: 'vertical-rl' }}>
                    {item.type}
                  </span>
                  <span className="text-[#D2042D] text-xs lg:text-sm font-black tracking-widest rotate-180 mt-4" style={{ writingMode: 'vertical-rl' }}>
                    {item.date}
                  </span>
                </div>

                {/* ── TICKET BODY (RIGHT) ── */}
                <div className="flex-1 p-5 lg:p-8 flex flex-col justify-between relative min-w-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#D2042D]/0 via-[#D2042D]/0 to-[#D2042D]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className="relative z-10 flex flex-col">
                    <span className="inline-block px-2.5 py-1 bg-[#D2042D] text-white text-[8px] lg:text-[9px] font-black uppercase tracking-widest rounded-sm mb-3 w-fit">
                      {item.role}
                    </span>
                    <h3 className="text-lg lg:text-2xl font-black text-white leading-snug tracking-tight mb-2 group-hover:text-zinc-200 transition-colors line-clamp-3">
                      {item.title}
                    </h3>
                    <p className="text-[9px] lg:text-[10px] font-bold text-zinc-500 uppercase tracking-widest truncate">
                      @ {item.venue}
                    </p>
                  </div>

                  <div className="relative z-10 border-t border-zinc-800/50 pt-3 mt-3">
                    <p className="text-[10px] lg:text-xs text-zinc-400 font-medium leading-relaxed italic line-clamp-3 lg:line-clamp-4">
                      "{item.fullTitle}"
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

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