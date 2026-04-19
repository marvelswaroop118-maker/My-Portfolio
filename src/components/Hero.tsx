"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-white text-black overflow-hidden">

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Red accent blob */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#D2042D]/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative w-full max-w-6xl mx-auto px-6 md:px-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

        {/* ── MOBILE IMAGE ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="lg:hidden relative w-32 h-40 shrink-0"
        >
          <div className="absolute inset-0 translate-x-2 translate-y-2 border border-zinc-200 rounded-xl -z-10" />
          <div className="w-full h-full rounded-xl overflow-hidden border border-zinc-200 shadow-md">
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
          <div className="flex items-center gap-2 border border-zinc-200 bg-zinc-50 px-3 py-1.5 rounded-full mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D2042D] animate-pulse" />
            <p className="text-[10px] text-zinc-500 uppercase tracking-[0.15em] font-medium">
              B.B.A. LL.B. (Hons.) Candidate
            </p>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight mb-5">
            Swaroop<br />
            <span className="text-[#D2042D]">Choudary</span>
          </h1>

          {/* Bio */}
          <p className="text-zinc-600 text-sm md:text-base leading-relaxed max-w-md mb-3">
            Final-year law student with experience across litigation, corporate advisory,
            intellectual property, and technology law.
          </p>
          <p className="text-zinc-400 text-xs md:text-sm leading-relaxed max-w-sm mb-8 hidden md:block">
            Litigation-trained and research-driven — focused on corporate and regulatory
            practice in emerging legal domains.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <a
              href="/Swaroop Cv.pdf"
              download
              className="px-6 py-3 bg-[#D2042D] text-white text-[11px] font-bold uppercase tracking-[0.15em] rounded-lg text-center hover:bg-[#b00324] transition-colors duration-200"
            >
              Download CV
            </a>
            <a
              href="#experience"
              className="px-6 py-3 border border-zinc-200 text-zinc-700 text-[11px] font-bold uppercase tracking-[0.15em] rounded-lg text-center hover:border-zinc-400 transition-colors duration-200"
            >
              View Experience
            </a>
          </div>

          {/* Stats row */}
          <div className="flex items-center gap-6 mt-8 pt-6 border-t border-zinc-100 w-full justify-center lg:justify-start">
            {[
              { value: "10+", label: "Internships" },
              { value: "7+", label: "Publications" },
              { value: "11+", label: "Conferences" },
            ].map((s) => (
              <div key={s.label} className="text-center lg:text-left">
                <p className="text-xl font-black text-[#D2042D] leading-none">{s.value}</p>
                <p className="text-[9px] text-zinc-400 uppercase tracking-widest mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── DESKTOP IMAGE ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="hidden lg:block relative w-[300px] xl:w-[360px] shrink-0 group"
        >
          <div className="absolute inset-0 translate-x-4 translate-y-4 border border-zinc-200 rounded-2xl -z-10" />
          <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden border border-zinc-200 shadow-xl">
            <Image
              src="/Swaroop.png"
              alt="Swaroop Choudary"
              fill
              priority
              className="object-cover object-top grayscale-[20%] group-hover:grayscale-0 transition duration-700"
            />
          </div>
          {/* Floating tag */}
          <div className="absolute -bottom-4 -left-4 bg-[#D2042D] text-white px-4 py-2 rounded-xl shadow-lg">
            <p className="text-[10px] font-bold uppercase tracking-widest">VIT-AP University</p>
            <p className="text-[9px] text-white/70">Final Year · 2026</p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
