"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const FLIP_CARDS = [
  {
    id: "education",
    frontLabel: "Academic",
    frontTitle: "Foundation",
    frontStat: "8.4",
    frontStatLabel: "CGPA",
    backTitle: "Education",
    backItems: [
      { title: "BBA LL.B (Hons.)", sub: "VIT-AP University", note: "2021–2026" },
      { title: "Diploma in Tech Law", sub: "LawSikho", note: "A Grade" },
    ],
  },
  {
    id: "experience",
    frontLabel: "Experience",
    frontTitle: "Legal Exposure",
    frontStat: "10+",
    frontStatLabel: "Internships",
    backTitle: "Key Work",
    backItems: [
      { title: "MLS & Co", sub: "High Court Work", note: "Litigation" },
      { title: "Fox & Mandal", sub: "Corporate Work", note: "Contracts" },
    ],
  },
  {
    id: "research",
    frontLabel: "Research",
    frontTitle: "Publications",
    frontStat: "7+",
    frontStatLabel: "Papers",
    backTitle: "Focus Areas",
    backItems: [
      { title: "AI Regulation", sub: "Corporate & Policy", note: "Emerging Tech" },
      { title: "Criminal Law", sub: "Economic Impact", note: "Published" },
    ],
  },
  {
    id: "moots",
    frontLabel: "Advocacy",
    frontTitle: "Moot Courts",
    frontStat: "5+",
    frontStatLabel: "Appearances",
    backTitle: "Experience",
    backItems: [
      { title: "Verdictus Moot", sub: "MTP Act", note: "Speaker" },
      { title: "KIIT Moot", sub: "Company Law", note: "Speaker" },
    ],
  },
  {
    id: "skills",
    frontLabel: "Skills",
    frontTitle: "Core Strength",
    frontStat: "6+",
    frontStatLabel: "Key Areas",
    backTitle: "Capabilities",
    backItems: [
      { title: "Contract Drafting", sub: "Corporate Work", note: "Practical" },
      { title: "Legal Research", sub: "Case Analysis", note: "Strong" },
    ],
  },
  {
    id: "focus",
    frontLabel: "Focus",
    frontTitle: "Specialisation",
    frontStat: "3",
    frontStatLabel: "Domains",
    backTitle: "Areas",
    backItems: [
      { title: "AI Governance", sub: "Tech Law", note: "Primary" },
      { title: "Data Protection", sub: "Privacy Law", note: "Core" },
    ],
  },
];

function FlipCard({ card, index }: { card: typeof FLIP_CARDS[number]; index: number }) {
  const [flipped, setFlipped] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      className="h-52 cursor-pointer"
      style={{ perspective: "1200px" }}
      onMouseEnter={() => !isTouch && setFlipped(true)}
      onMouseLeave={() => !isTouch && setFlipped(false)}
      onClick={() => isTouch && setFlipped((v) => !v)}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.42, ease: "easeInOut" }}
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* FRONT */}
        <div
          className="absolute inset-0 rounded-2xl bg-white border border-zinc-200 p-5 flex flex-col justify-between shadow-sm"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div>
            <span className="text-[9px] text-zinc-400 uppercase tracking-[0.15em] font-semibold">
              {card.frontLabel}
            </span>
            <h3 className="text-base font-bold mt-1.5 text-black">{card.frontTitle}</h3>
          </div>
          <div>
            <p className="text-4xl font-black text-[#D2042D] leading-none">{card.frontStat}</p>
            <p className="text-[9px] text-zinc-400 uppercase tracking-widest mt-1">{card.frontStatLabel}</p>
            <p className="text-[9px] text-zinc-300 mt-3 uppercase tracking-widest">
              {isTouch ? "Tap to flip" : "Hover to explore"}
            </p>
          </div>
        </div>

        {/* BACK */}
        <div
          className="absolute inset-0 rounded-2xl bg-[#D2042D] p-5 flex flex-col"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <h4 className="text-[9px] uppercase tracking-[0.15em] text-white/60 font-semibold mb-3">
            {card.backTitle}
          </h4>
          <ul className="flex flex-col gap-3">
            {card.backItems.map((item, i) => (
              <li key={i} className="border-l-2 border-white/30 pl-3">
                <p className="text-sm font-bold text-white leading-tight">{item.title}</p>
                <p className="text-[10px] text-white/70 mt-0.5">{item.sub}</p>
                <p className="text-[9px] text-white/50 uppercase tracking-widest">{item.note}</p>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Summary() {
  return (
    <div className="w-full h-screen flex flex-col bg-white text-black overflow-hidden">
      <div className="w-full max-w-6xl mx-auto flex flex-col h-full px-5 md:px-8 py-8 md:py-10">

        {/* HEADER */}
        <div className="mb-4 shrink-0">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">
            At a <span className="text-[#D2042D]">Glance</span>
          </h2>
          <p className="text-zinc-500 text-xs uppercase tracking-[0.15em] mt-1.5">
            {typeof window !== "undefined" && ("ontouchstart" in window) ? "Tap" : "Hover"} each card to explore
          </p>
        </div>

        <p className="text-zinc-500 text-sm leading-relaxed max-w-xl mb-5 shrink-0">
          Final-year BBA LL.B (Hons.) student with experience across litigation,
          corporate law, intellectual property, and technology law.
        </p>

        {/* GRID — same on mobile & desktop, just column count changes */}
        <div className="flex-1 min-h-0 overflow-y-auto pb-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {FLIP_CARDS.map((card, i) => (
              <FlipCard key={card.id} card={card} index={i} />
            ))}
          </div>
        </div>

        {/* FOOTER */}
        <div className="mt-4 pt-3 border-t border-zinc-100 shrink-0">
          <p className="text-zinc-400 text-[9px] uppercase tracking-widest">
            Swaroop Choudary · Corporate · Litigation · IPR · Technology Law
          </p>
        </div>
      </div>
    </div>
  );
}
