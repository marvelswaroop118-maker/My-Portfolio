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

/* ---------------- COMPONENT ---------------- */

export default function Expertise() {
  return (
    <section className="px-4 md:px-12 lg:px-24 py-24 bg-white text-black">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <motion.div className="mb-12">
          <h2 className="text-4xl font-bold mb-2">
            Core <span className="text-[#D2042D]">Expertise</span>
          </h2>
          <p className="text-zinc-500 text-sm max-w-md">
            Developed through litigation exposure, corporate work, and focused research in emerging areas of law.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-6">

          <Card title="Practice Areas" items={PRACTICE_AREAS} />

          <Card title="Core Legal Skills" items={CORE_SKILLS} strong />

          <Card title="Tools & Research" items={TOOLS} subtle />

          <Card title="Specialisation" items={SPECIALISATION} highlight />

        </div>
      </div>
    </section>
  );
}

/* ---------------- CARD ---------------- */

function Card({ title, items, highlight, strong, subtle }) {
  return (
    <div className="bg-white border border-zinc-200 p-6 rounded-xl 
    transition-all duration-300 hover:border-[#D2042D]/40 hover:shadow-sm">

      <h3 className="text-sm font-semibold mb-5 uppercase tracking-widest text-zinc-500">
        {title}
      </h3>

      <div className="flex flex-wrap gap-2">
        {items.map((item, i) => (
          <span
            key={i}
            className={`
              text-[11px] px-3 py-1.5 rounded-md border transition

              ${highlight && "bg-[#D2042D] text-white border-[#D2042D]"}
              ${strong && "bg-zinc-100 text-black border-zinc-300 font-medium"}
              ${subtle && "bg-transparent text-zinc-500 border-zinc-200"}
              ${!highlight && !strong && !subtle && "bg-white text-black border-zinc-200"}
            `}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}