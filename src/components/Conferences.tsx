"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const CONFERENCE_DATA = [
  { title: "AI Governance in India", venue: "Amity University, Noida", type: "International", brief: "AI Regulation" },
  { title: "Role of India in AI Regulation", venue: "NMIMS Mumbai", type: "International", brief: "Policy Control" },
  { title: "AI Regulatory Landscape", venue: "AMU", type: "International", brief: "Regulatory Mapping" },
  { title: "Child Abuse, Religion & Caste", venue: "NMIMS Indore", type: "International", brief: "Social Justice" },
  { title: "GI & IPR Development", venue: "Dr. RKB Law College", type: "International", brief: "IP Development" },
  { title: "ADR Effectiveness", venue: "Kerala Law Academy", type: "International", brief: "Dispute Efficiency" },
  { title: "Privacy & Data Protection", venue: "MNLU Nagpur", type: "International", brief: "Data Protection" },
  { title: "Trade Secrets vs Rights", venue: "CUSAT", type: "International", brief: "Corporate Rights" },
  { title: "Climate Change & Justice", venue: "NMIMS Bangalore", type: "International", brief: "Environmental Justice" },
  { title: "CSR in AI Era", venue: "NMIMS", type: "National", brief: "Ethical Governance" },
  { title: "Indian Federalism", venue: "Govt Law College", type: "National", brief: "Constitutional Balance" },
];

function ConferenceCard({ conf, index }: { conf: typeof CONFERENCE_DATA[number]; index: number }) {
  const [flipped, setFlipped] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.3, delay: index * 0.035 }}
      className="h-36 cursor-pointer"
      style={{ perspective: "1000px" }}
      onMouseEnter={() => !isTouch && setFlipped(true)}
      onMouseLeave={() => !isTouch && setFlipped(false)}
      onClick={() => isTouch && setFlipped((v) => !v)}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.4 }}
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* FRONT */}
        <div
          className="absolute inset-0 bg-white border border-zinc-200 rounded-xl p-3.5 flex flex-col justify-between shadow-sm"
          style={{ backfaceVisibility: "hidden" }}
        >
          <span className={`text-[8px] font-bold uppercase tracking-widest ${conf.type === "International" ? "text-[#D2042D]" : "text-zinc-500"}`}>
            {conf.type}
          </span>
          <h3 className="text-[11px] font-bold leading-snug text-black line-clamp-2">
            {conf.title}
          </h3>
          <div>
            <p className="text-[9px] text-zinc-400 leading-tight">{conf.venue}</p>
            <p className="text-[8px] text-zinc-300 uppercase tracking-widest mt-1">
              {isTouch ? "Tap to flip" : "Hover"}
            </p>
          </div>
        </div>

        {/* BACK */}
        <div
          className="absolute inset-0 bg-[#D2042D] text-white rounded-xl p-3.5 flex flex-col items-center justify-center text-center"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <p className="text-[8px] uppercase tracking-widest text-white/60 font-semibold">Focus Area</p>
          <h4 className="text-sm font-black mt-1">{conf.brief}</h4>
          <p className="text-white/50 text-[9px] mt-1 leading-tight">{conf.venue}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Conferences() {
  return (
    <div className="w-full h-screen flex flex-col bg-white text-black overflow-hidden">
      <div className="w-full max-w-7xl mx-auto flex flex-col h-full px-5 md:px-8 py-8 md:py-10">

        {/* HEADER */}
        <div className="mb-5 shrink-0">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">
            Conferences &{" "}
            <span className="text-[#D2042D]">Presentations</span>
          </h2>
          <p className="text-zinc-400 text-[10px] uppercase tracking-[0.15em] mt-1.5">
            National & International Platforms · {CONFERENCE_DATA.length} appearances
          </p>
        </div>

        {/* GRID — 2 cols mobile, 3 tablet, 4 desktop */}
        <div className="flex-1 min-h-0 overflow-y-auto pb-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {CONFERENCE_DATA.map((conf, i) => (
              <ConferenceCard key={i} conf={conf} index={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
