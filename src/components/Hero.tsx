"use client";

import { useEffect, useState } from "react";
import { motion, animate } from "framer-motion";
import Image from "next/image";

// --- BULLETPROOF ANIMATED COUNTER ---
const AnimatedCounter = ({ value, padZero = false }: { value: number, padZero?: boolean }) => {
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    const controls = animate(0, value, {
      duration: 2,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.4,
      onUpdate: (latest) => {
        const val = Math.round(latest);
        setDisplayValue(padZero && val < 10 ? `0${val}` : val.toString());
      }
    });
    return controls.stop;
  }, [value, padZero]);

  return <span>{displayValue}</span>;
};

export default function Hero() {
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    // Strict 100svh, absolute hidden overflow locks it to a single slide
    <div className="relative w-full h-[100svh] bg-[#09090b] overflow-hidden font-sans">

      {/* ── 1. AMBIENT BACKGROUND (Z-0) ── */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
        style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)`, backgroundSize: "40px 40px" }}
      />
      {/* Static glow to prevent lag */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#D2042D]/10 rounded-full blur-[100px] pointer-events-none z-0" />

      {/* ── 2. THE CINEMATIC WATERMARK (Z-10) ── */}
      {/* Locked to absolute center, sitting beautifully behind the portrait */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none z-10 opacity-40 lg:opacity-50 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center w-full"
        >
          {/* Infinite Breathing Animation */}
          <motion.div
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center w-full pb-20 lg:pb-0" // pb-20 bumps it up slightly on mobile
          >
            <h1 className="text-[18vw] lg:text-[14vw] font-black leading-[0.8] tracking-tighter text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.15)] lg:[-webkit-text-stroke:2px_rgba(255,255,255,0.15)] whitespace-nowrap">
              SWAROOP
            </h1>
            <h1 className="text-[18vw] lg:text-[14vw] font-black leading-[0.8] tracking-tighter text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.15)] lg:[-webkit-text-stroke:2px_rgba(255,255,255,0.15)] whitespace-nowrap ml-8 lg:ml-32 mt-1 lg:mt-0">
              CHOUDARY
            </h1>
          </motion.div>
        </motion.div>
      </div>

      {/* ── 3. PORTRAIT IMAGE (Z-20) ── */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[95%] sm:w-[75%] md:w-[500px] lg:w-[650px] h-[60vh] lg:h-[85vh] z-20 pointer-events-none flex items-end justify-center"
      >
        {/* Core backlight for the portrait */}
        <div className="absolute top-[30%] w-[50%] h-[50%] bg-[#D2042D]/20 rounded-full blur-[80px] lg:blur-[120px] -z-10" />

        <Image
          src="/Swaroop_Hero.PNG"
          alt="Swaroop Choudary"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 650px"
          className="object-contain object-bottom block drop-shadow-2xl contrast-[1.05]"
        />

        {/* Cinematic bottom fade so the image melts into the floor seamlessly */}
        <div className="absolute bottom-0 left-0 right-0 h-24 lg:h-32 bg-gradient-to-t from-[#09090b] to-transparent z-10" />
      </motion.div>

      {/* ── 4. FOREGROUND CONTENT WRAPPER (Z-30) ── */}
      <div className="absolute inset-0 z-30 w-full max-w-[90rem] mx-auto pointer-events-none flex flex-col justify-between lg:block">

        {/* TOP SECTION (Left Column) */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="relative lg:absolute top-0 lg:top-1/2 lg:-translate-y-1/2 left-0 w-full px-5 lg:px-12 pt-[12svh] sm:pt-[15svh] lg:pt-0 lg:max-w-[380px] xl:max-w-[450px] flex flex-col items-center lg:items-start text-center lg:text-left pointer-events-auto"
        >
          <motion.div variants={fadeUp} className="mb-3 lg:mb-6 flex items-center justify-center lg:justify-start gap-2 lg:gap-3 w-full">
            <span className="w-6 lg:w-8 h-[2px] bg-[#D2042D]"></span>
            <p className="text-[10px] lg:text-xs text-zinc-400 uppercase tracking-[0.3em] font-bold">
              B.B.A. LL.B. (Hons.)
            </p>
          </motion.div>

          <motion.h2 variants={fadeUp} className="text-[9.5vw] sm:text-5xl lg:text-5xl xl:text-6xl font-black leading-[1.05] tracking-tight mb-4 lg:mb-6 text-white uppercase drop-shadow-md">
            Strategic Legal <br className="hidden lg:block" />
            <span className="text-zinc-400">Counsel For</span><br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D2042D] to-[#ff4d6d]">Modern Frontiers</span>
          </motion.h2>

          <motion.p variants={fadeUp} className="hidden lg:block text-zinc-400 text-xs xl:text-sm leading-relaxed mb-8 font-medium max-w-sm">
            Litigation-trained and research-driven legal professional. Bridging traditional corporate practice with specialized expertise in AI governance and regulatory compliance.
          </motion.p>

          <motion.div variants={fadeUp} className="hidden lg:flex flex-row gap-4 w-full">
            <a href="/Swaroop Cv.pdf" download className="px-8 py-4 bg-[#D2042D] text-white text-[10px] xl:text-[11px] font-black uppercase tracking-[0.2em] rounded-xl hover:bg-white hover:text-[#09090b] transition-all duration-300 shadow-lg">
              Download CV
            </a>
            <a href="#contact" className="px-8 py-4 bg-[#09090b]/80 backdrop-blur-md border border-zinc-700 text-white text-[10px] xl:text-[11px] font-black uppercase tracking-[0.2em] rounded-xl hover:border-[#D2042D] hover:text-[#D2042D] transition-all duration-300">
              Contact Me
            </a>
          </motion.div>
        </motion.div>

        {/* BOTTOM SECTION (Right Column) */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="relative lg:absolute bottom-[3svh] lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2 left-0 lg:left-auto lg:right-12 w-full lg:w-auto lg:max-w-[300px] xl:max-w-[350px] flex flex-col justify-end lg:justify-center gap-4 lg:gap-6 pointer-events-auto px-5 lg:px-0"
        >
          {/* MOBILE BUTTONS */}
          <motion.div variants={fadeUp} className="flex lg:hidden w-full gap-3 relative z-40">
            <a href="#contact" className="flex-1 py-3.5 bg-[#0c0c0e]/80 backdrop-blur-xl border border-zinc-800 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-xl text-center active:scale-95 transition-transform shadow-lg">
              Contact
            </a>
            <a href="/Swaroop Cv.pdf" download className="flex-1 py-3.5 bg-[#D2042D] text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-xl text-center active:scale-95 transition-transform shadow-lg">
              Get CV
            </a>
          </motion.div>

          {/* ANIMATED STATS */}
          <div className="flex flex-row lg:flex-col justify-between lg:justify-start gap-2 lg:gap-4 w-full relative z-40 bg-[#09090b]/40 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none border border-zinc-800/50 lg:border-0 rounded-2xl p-4 lg:p-0">
            {[
              { value: 13, label: "Internships", desc: "Litigation & Corporate", pad: false },
              { value: 7, label: "Publications", desc: "AI, Security & Law", pad: true },
              { value: 11, label: "Conferences", desc: "Seminars & Moots", pad: false },
            ].map((stat, i) => (
              <motion.div variants={fadeUp} key={i} className="flex-1 text-center lg:text-right group lg:border-b lg:border-zinc-800/60 lg:pb-4 lg:last:border-0">
                <p className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-[#D2042D] leading-none mb-1 drop-shadow-md flex justify-center lg:justify-end items-center">
                  <AnimatedCounter value={stat.value} padZero={stat.pad} />
                  <span>+</span>
                </p>
                <p className="text-[8px] sm:text-[9px] lg:text-[10px] xl:text-xs font-bold text-white uppercase tracking-widest">{stat.label}</p>
                <p className="hidden lg:block text-[10px] xl:text-[11px] text-zinc-500 uppercase tracking-widest mt-1">{stat.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* PRAGMATIC ADVOCACY HIGHLIGHT BOX (Desktop Only) */}
          <motion.div variants={fadeUp} className="hidden lg:block p-5 xl:p-6 bg-[#0c0c0e]/80 backdrop-blur-xl border border-zinc-800 rounded-2xl text-right shadow-2xl relative z-50">
            <div className="w-5 h-5 xl:w-6 xl:h-6 mb-2 xl:mb-3 text-[#D2042D] float-right ml-4">
              <svg fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </div>
            <div className="clear-both"></div>
            <h4 className="text-xs xl:text-sm font-bold text-white mb-1.5 uppercase tracking-wider">Pragmatic Advocacy</h4>
            <p className="text-[10px] xl:text-[11px] text-zinc-400 leading-relaxed font-medium">
              Prioritizing real-world legal strategy and courtroom experience over purely theoretical frameworks to deliver actionable solutions.
            </p>
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
}