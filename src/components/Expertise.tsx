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
    <div className="h-full w-full flex items-center justify-center overflow-hidden bg-white text-black">

      {/* CONTAINER */}
      <div className="w-full max-w-6xl h-[90vh] flex flex-col px-4 md:px-8">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-4"
        >
          <h2 className="text-3xl md:text-5xl font-bold">
            Core <span className="text-[#D2042D]">Expertise</span>
          </h2>

          <p className="text-zinc-500 text-xs md:text-sm max-w-md mt-2">
            Developed through litigation exposure, corporate work, and focused
            research in emerging areas of law.
          </p>
        </motion.div>

        {/* CONTENT */}
        <div className="flex-1 overflow-hidden">

          <div className="grid md:grid-cols-2 gap-4 md:gap-6 h-full overflow-y-auto pr-2">

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

function Card({ title, items, highlight, strong, subtle }) {
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

              ${highlight && "bg-[#D2042D] text-white border-[#D2042D]"}
              ${strong && "bg-zinc-100 text-black border-zinc-300 font-medium"}
              ${subtle && "bg-transparent text-zinc-500 border-zinc-200"}
              ${!highlight && !strong && !subtle &&
              "bg-white text-black border-zinc-200"
              }
            `}
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
}