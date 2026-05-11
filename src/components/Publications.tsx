"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const PUBLICATIONS_DATA = [
  {
    title: "The Economic Impact of Criminal Law: Analyzing the Costs & Benefits of Criminal Justice Systems",
    venue: "International Journal of Law Management & Humanities (IJLMH)",
    category: "Criminal Law",
    link: "https://doij.org/10.10000/IJLMH.115981",
  },
  {
    title: "Planet in Peril: Climate Change, Health & Environmental Justice",
    venue: "Indian Journal of Law and Legal Research (IJLLR)",
    category: "Environmental Law",
    link: "https://www.ijllr.com/post/planet-in-peril-unveiling-the-nexus-of-climate-change-health-and-environmental-justice-through-gl",
  },
  {
    title: "Domestic Violence in India: Reality vs Statistics",
    venue: "White Black Legal International Law Journal",
    category: "Social Justice",
    link: "https://www.whiteblacklegal.co.in/details/domestic-violence-in-india--the-difference-between-statistic-and-the-real-picture-by-j-swaroop-choudary",
  },
  {
    title: "John Austin's Theory of Sovereignty in Modern Legal Systems",
    venue: "Indian Journal for Research in Law and Management",
    category: "Jurisprudence",
    link: "https://ijrlm.com/journal/the-influence-of-john-austins-theory-of-sovereignty-on-modern-legal-systems/?asl_highlight=swaroop+choudary&p_asid=1", // UPDATED URL
  },
  {
    title: "The Rise of AI in Corporate Law",
    venue: "DSNLU Journal of Science, Technology and Law",
    category: "Technology Law",
    link: "https://dsnlu.ac.in/storage/2024/11/DJSTL_Vol-3_-issue-_2-1-2.pdf",
  },
  {
    title: "Strengthening Electoral Integrity in India",
    venue: "Indian Journal of Legal Research and Review",
    category: "Constitutional Law",
    link: "https://doi.org/10.5281/zenodo.16261926",
  },
  {
    title: "Faith, Fear & Fortitude: Terrorism, Religion & National Security",
    venue: "IIP Series",
    category: "National Security",
    link: "https://www.doi.org/10.58532/V3BBSO22P1CH15",
  },
];

export default function Publications() {
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

  // Smooth Scroll Functions for Buttons
  const scrollNext = () => {
    setIsAutoPlaying(false); // Pause auto-play on manual interaction
    if (scrollRef.current) {
      const scrollAmount = isMobile ? window.innerWidth * 0.85 : 480; // Approximate card width + gap
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const scrollPrev = () => {
    setIsAutoPlaying(false);
    if (scrollRef.current) {
      const scrollAmount = isMobile ? window.innerWidth * 0.85 : 480;
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  // Auto-scroll Engine
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

        // If we reach the end of the scroll container, rewind smoothly to the start
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          const scrollAmount = isMobile ? window.innerWidth * 0.85 : 480;
          scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
      }
    }, 3500); // Scrolls every 3.5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, isMobile]);

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="relative w-full h-[100svh] bg-[#09090b] overflow-hidden flex flex-col font-sans">

      {/* ── AMBIENT BACKGROUND ── */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)`, backgroundSize: "40px 40px" }} />
      <div className="absolute top-0 right-0 w-[400px] lg:w-[800px] h-[400px] lg:h-[800px] bg-[#D2042D]/5 rounded-full blur-[120px] pointer-events-none z-0 -translate-y-1/2 translate-x-1/4" />

      {/* ── MAIN LAYOUT WRAPPER ── */}
      <div className="relative z-10 w-full max-w-[90rem] mx-auto flex flex-col h-full pt-[15svh] lg:pt-[14svh] pb-[4svh] lg:pb-[8svh] justify-between">

        {/* ── HEADER ── */}
        <motion.div
          variants={staggerContainer} initial="hidden" animate="show"
          className="w-full flex flex-col lg:flex-row items-center lg:items-end justify-between mb-6 lg:mb-10 px-5 md:px-12 shrink-0 gap-4"
        >
          {/* Title Area */}
          <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
            <motion.div variants={fadeUp} className="mb-2 lg:mb-4 flex items-center justify-center lg:justify-start gap-2 lg:gap-3 w-full">
              <span className="w-6 lg:w-8 h-[2px] bg-[#D2042D]"></span>
              <p className="text-[9px] lg:text-[10px] text-zinc-400 uppercase tracking-[0.3em] font-bold">Research & Articles</p>
            </motion.div>

            <motion.h2 variants={fadeUp} className="text-[10vw] sm:text-5xl lg:text-[4.5rem] font-black leading-[0.95] tracking-tight uppercase">
              <span className="text-white block lg:inline">Legal</span>
              <span className="text-transparent [-webkit-text-stroke:1px_#D2042D] lg:[-webkit-text-stroke:1.5px_#D2042D] block lg:inline lg:ml-4">Scholarship</span>
            </motion.h2>
          </div>

          {/* Interactive Navigation Buttons */}
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

          {/* Left/Right Edge Gradient Fades for desktop immersion */}
          <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#09090b] to-transparent z-20 pointer-events-none" />
          <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#09090b] to-transparent z-20 pointer-events-none" />

          <div
            ref={scrollRef}
            className="w-full h-full flex overflow-x-auto snap-x snap-mandatory scrollbar-hide overscroll-x-contain items-center px-5 md:px-12 gap-5 lg:gap-8 pb-4"
          >
            {PUBLICATIONS_DATA.map((article, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9, x: 50 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative snap-center shrink-0 w-[85vw] sm:w-[350px] lg:w-[450px] h-[300px] lg:h-[350px] bg-[#0c0c0e]/80 backdrop-blur-xl border border-zinc-800/80 rounded-3xl p-6 lg:p-8 shadow-xl flex flex-col justify-between group overflow-hidden"
              >
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#D2042D]/0 via-[#D2042D]/0 to-[#D2042D]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Card Top: Category */}
                <div className="flex justify-between items-start relative z-10">
                  <span className="bg-[#D2042D]/10 border border-[#D2042D]/20 text-[#D2042D] text-[9px] lg:text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest">
                    {article.category}
                  </span>
                  {/* Subtle index number watermark */}
                  <span className="text-zinc-800 font-black text-3xl select-none">
                    0{i + 1}
                  </span>
                </div>

                {/* Card Middle: Title */}
                <div className="relative z-10 flex-1 flex flex-col justify-center my-4">
                  <h3 className="text-lg lg:text-2xl font-black text-white leading-snug tracking-tight line-clamp-4 group-hover:text-zinc-200 transition-colors">
                    {article.title}
                  </h3>
                </div>

                {/* Card Bottom: Venue & Link */}
                <div className="relative z-10 border-t border-zinc-800/50 pt-4 flex flex-col gap-4">
                  <p className="text-[10px] lg:text-xs font-bold text-zinc-500 leading-relaxed uppercase tracking-wider line-clamp-1">
                    {article.venue}
                  </p>

                  <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between w-full text-white text-[10px] lg:text-[11px] font-black uppercase tracking-[0.2em] py-3 px-4 rounded-xl border border-zinc-700 group-hover:bg-[#D2042D] group-hover:border-[#D2042D] transition-all duration-300"
                  >
                    Read Paper
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M7 17l9.2-9.2M17 17V7H7"></path></svg>
                  </a>
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