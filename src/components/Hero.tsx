"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative w-full min-h-[100svh] flex items-center justify-center bg-zinc-50 dark:bg-zinc-950 transition-colors duration-500 overflow-hidden z-0">

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02] pointer-events-none -z-10"
        style={{
          backgroundImage: `linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Red accent blob */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#D2042D]/10 dark:bg-[#D2042D]/15 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* ── MAIN CONTENT WRAPPER ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-16 py-20 lg:py-0">

        {/* ── MOBILE IMAGE ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="lg:hidden relative w-36 h-44 shrink-0 mt-8"
        >
          <div className="absolute inset-0 translate-x-2 translate-y-2 border border-zinc-200 dark:border-zinc-800 rounded-xl -z-10 transition-colors duration-500" />
          <div className="w-full h-full rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-md bg-zinc-100 dark:bg-zinc-900">
            <Image src="/Swaroop.png" alt="Swaroop Choudary" fill priority className="object-cover object-top" />
          </div>
        </motion.div>

        {/* ── TEXT CONTENT ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex-1 flex flex-col items-center text-center lg:items-start lg:text-left"
        >
          {/* Badge */}
          <div className="flex items-center gap-2 border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md px-3.5 py-1.5 rounded-full mb-6 transition-colors duration-500 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D2042D] animate-pulse shadow-[0_0_8px_#D2042D]" />
            <p className="text-[9px] sm:text-[10px] text-zinc-600 dark:text-zinc-300 uppercase tracking-[0.2em] font-bold">
              B.B.A. LL.B. (Hons.) Candidate
            </p>
          </div>

          {/* Name */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] font-black leading-[0.95] tracking-tight mb-6 text-zinc-900 dark:text-white transition-colors duration-500 drop-shadow-sm">
            Swaroop<br />
            <span className="text-[#D2042D]">Choudary</span>
          </h1>

          {/* Bio */}
          <p className="text-zinc-600 dark:text-zinc-300 text-sm sm:text-base leading-relaxed max-w-lg mb-3 font-medium transition-colors duration-500 drop-shadow-sm">
            Final-year law student with experience across litigation, corporate advisory,
            intellectual property, and AI governance.
          </p>
          <p className="text-zinc-500 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed max-w-md mb-8 hidden md:block transition-colors duration-500 drop-shadow-sm">
            Litigation-trained and research-driven — focused on corporate and regulatory
            practice in emerging legal domains.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto relative z-20">
            <a
              href="/Swaroop Cv.pdf"
              download
              className="px-8 py-3.5 bg-[#D2042D] text-white text-[10px] sm:text-[11px] font-black uppercase tracking-[0.2em] rounded-xl text-center hover:bg-[#990011] hover:shadow-lg hover:shadow-red-900/20 hover:-translate-y-0.5 transition-all duration-300"
            >
              Download CV
            </a>
            <a
              href="#experience"
              className="px-8 py-3.5 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white text-[10px] sm:text-[11px] font-black uppercase tracking-[0.2em] rounded-xl text-center hover:border-zinc-400 dark:hover:border-zinc-600 hover:-translate-y-0.5 transition-all duration-300 shadow-sm"
            >
              View Experience
            </a>
          </div>

          {/* Stats row */}
          <div className="flex items-center gap-8 sm:gap-10 mt-10 pt-8 border-t border-zinc-200 dark:border-zinc-800/60 w-full justify-center lg:justify-start transition-colors duration-500">
            {[
              { value: "13", label: "Internships" },
              { value: "07", label: "Publications" },
              { value: "11", label: "Conferences" },
            ].map((s) => (
              <div key={s.label} className="text-center lg:text-left group cursor-default">
                <p className="text-2xl sm:text-3xl font-black text-[#D2042D] leading-none group-hover:scale-110 transition-transform duration-300 origin-left">{s.value}</p>
                <p className="text-[9px] sm:text-[10px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mt-1.5 transition-colors duration-500">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── DESKTOP IMAGE ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="hidden lg:block relative w-[320px] xl:w-[400px] shrink-0 group z-20"
        >
          <div className="absolute inset-0 translate-x-5 translate-y-5 border border-zinc-200 dark:border-zinc-800 rounded-2xl -z-10 transition-colors duration-500" />
          <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-xl bg-zinc-100 dark:bg-zinc-900 transition-colors duration-500">
            <Image
              src="/Swaroop.png"
              alt="Swaroop Choudary"
              fill
              priority
              className="object-cover object-top grayscale-[20%] group-hover:grayscale-0 transition duration-700"
            />
          </div>
          {/* Floating tag */}
          <div className="absolute -bottom-6 -left-6 bg-[#D2042D] text-white px-5 py-3 rounded-2xl shadow-xl shadow-red-900/20 group-hover:-translate-y-2 transition-transform duration-500">
            <p className="text-[10px] font-black uppercase tracking-[0.2em]">VIT-AP University</p>
            <p className="text-[9px] text-white/80 font-medium tracking-widest mt-0.5">Final Year · 2026</p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}