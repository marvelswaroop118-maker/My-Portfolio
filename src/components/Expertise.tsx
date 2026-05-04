"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

/* ---------------- DATA ---------------- */

const PRACTICE_AREAS = [
  "Corporate & Commercial Law",
  "Technology Law & AI Regulation",
  "Intellectual Property Rights",
  "Data Protection & Privacy",
  "Dispute Resolution & Litigation",
];

const CORE_SKILLS = [
  "Contract Drafting & Review",
  "Legal Research & Case Law Analysis",
  "Litigation Drafting & Pleadings",
  "Regulatory & Compliance Analysis",
  "Due Diligence & Risk Assessment",
  "Legal Writing & Policy Research",
];

const TOOLS = [
  "SCC Online",
  "LexisNexis",
  "Manupatra",
  "Microsoft Office",
];

const SPECIALISATION = [
  "AI Governance",
  "Fintech Regulation",
  "Data Protection Law",
];

/* ---------------- MAIN ---------------- */

export default function Expertise() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="w-full h-screen bg-zinc-50 dark:bg-zinc-950" />;

  return (
    <div className="w-full h-[100svh] flex flex-col bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300 overflow-hidden">
      <div className="w-full h-full max-w-7xl mx-auto flex flex-col px-6 md:px-10 py-10 md:py-14">

        {/* ── HEADER ── */}
        <div className="mb-8 md:mb-12 shrink-0">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-zinc-900 dark:text-white transition-colors duration-300">
            Core <span className="text-[#D2042D]">Expertise</span>
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-[11px] sm:text-sm leading-relaxed max-w-xl mt-3 font-medium transition-colors duration-300">
            Developed through litigation exposure, corporate work, and focused
            research in emerging areas of law.
          </p>
        </div>

        {/* ── CONTENT GRID ── */}
        <div className="flex-1 min-h-0 w-full overflow-y-auto scrollbar-hide pb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 h-full max-h-[600px] content-start">

            <Card title="Practice Areas" items={PRACTICE_AREAS} index={0} />

            <Card title="Core Legal Skills" items={CORE_SKILLS} strong index={1} />

            <Card title="Tools & Research" items={TOOLS} subtle index={2} />

            <Card title="Specialisation" items={SPECIALISATION} highlight index={3} />

          </div>
        </div>

      </div>
    </div>
  );
}

/* ---------------- CARD COMPONENT ---------------- */

interface CardProps {
  title: string;
  items: string[];
  highlight?: boolean;
  strong?: boolean;
  subtle?: boolean;
  index: number;
}

function Card({ title, items, highlight, strong, subtle, index }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-5 md:p-6 rounded-2xl flex flex-col transition-all duration-300 hover:border-[#D2042D]/40 dark:hover:border-red-900/60 hover:shadow-xl md:hover:-translate-y-1"
    >
      <div className="flex items-center gap-3 mb-5 border-b border-zinc-100 dark:border-zinc-800/50 pb-3">
        <div className={`w-1.5 h-1.5 rounded-full ${highlight ? 'bg-[#D2042D]' : 'bg-zinc-300 dark:bg-zinc-700 group-hover:bg-[#D2042D] transition-colors'}`} />
        <h3 className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] text-zinc-800 dark:text-zinc-200 transition-colors">
          {title}
        </h3>
      </div>

      <div className="flex flex-wrap gap-2.5">
        {items.map((item, i) => (
          <span
            key={i}
            className={`
              text-[9px] md:text-[10px] font-bold px-3 py-1.5 rounded-lg border uppercase tracking-wider transition-all duration-300

              ${highlight
                ? "bg-[#D2042D] text-white border-[#D2042D] shadow-sm shadow-[#D2042D]/20"
                : ""}
              ${strong
                ? "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white border-zinc-200 dark:border-zinc-700"
                : ""}
              ${subtle
                ? "bg-transparent text-zinc-500 dark:text-zinc-400 border-zinc-200 dark:border-zinc-800 border-dashed"
                : ""}
              ${!highlight && !strong && !subtle
                ? "bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border-zinc-200 dark:border-zinc-800"
                : ""}
            `}
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
}