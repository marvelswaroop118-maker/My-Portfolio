"use client";

import { motion } from "framer-motion";

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
  return (
    // 1. Swapped h-full to min-h-[100dvh] and removed overflow-hidden to let the page breathe naturally
    <div className="relative w-full min-h-[100dvh] flex items-center justify-center bg-white text-black py-16 lg:py-0">

      {/* 2. Swapped to min-h-[90vh] so the container can expand to fit content on mobile */}
      <div className="w-full max-w-6xl min-h-[90vh] flex flex-col justify-center px-5 md:px-8">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-6 md:mb-8"
        >
          <h2 className="text-3xl md:text-5xl font-bold">
            Core <span className="text-[#D2042D]">Expertise</span>
          </h2>

          <p className="text-zinc-500 text-sm md:text-base max-w-md mt-3 leading-relaxed">
            Developed through litigation exposure, corporate work, and focused
            research in emerging areas of law.
          </p>
        </motion.div>

        {/* CONTENT */}
        {/* 3. Removed the nested 'overflow-y-auto' so native mobile scrolling takes over */}
        <div className="w-full">

          <div className="grid md:grid-cols-2 gap-4 md:gap-6 w-full">

            <Card title="Practice Areas" items={PRACTICE_AREAS} />

            <Card title="Core Legal Skills" items={CORE_SKILLS} strong />

            <Card title="Tools & Research" items={TOOLS} subtle />

            <Card title="Specialisation" items={SPECIALISATION} highlight />

          </div>

        </div>

      </div>
    </div>
  );
}

/* ---------------- CARD ---------------- */

// Added strict types here to prevent Vercel build failures!
interface CardProps {
  title: string;
  items: string[];
  highlight?: boolean;
  strong?: boolean;
  subtle?: boolean;
}

function Card({ title, items, highlight, strong, subtle }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="bg-white border border-zinc-200 p-5 md:p-6 rounded-xl 
      transition-all duration-300 hover:border-[#D2042D]/40 hover:shadow-sm"
    >
      <h3 className="text-[11px] font-semibold mb-4 uppercase tracking-widest text-zinc-500">
        {title}
      </h3>

      <div className="flex flex-wrap gap-2">
        {items.map((item, i) => (
          <span
            key={i}
            className={`
              text-[10px] md:text-[11px] px-3 py-1.5 rounded-md border transition

              ${highlight ? "bg-[#D2042D] text-white border-[#D2042D]" : ""}
              ${strong ? "bg-zinc-100 text-black border-zinc-300 font-medium" : ""}
              ${subtle ? "bg-transparent text-zinc-500 border-zinc-200" : ""}
              ${!highlight && !strong && !subtle ? "bg-white text-black border-zinc-200" : ""}
            `}
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
}