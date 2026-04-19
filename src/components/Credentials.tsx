"use client";

import { motion } from "framer-motion";

const ACCOLADES = [
  { title: "Diploma in Technology Law & Fintech", issuer: "LawSikho", year: "2025" },
  { title: "All India Rank 6", issuer: "National Talent Search Examination (LawSikho)", year: "2024", highlight: true },
  { title: "All India Rank 24", issuer: "National Law Olympiad", year: "2023", highlight: true },
  { title: "Best Essay Award", issuer: "Gujarat National Law University", year: "2023" },
];

const MOOTS = [
  { role: "Speaker", event: "Verdictus Moot Court Competition", desc: "Medical Termination of Pregnancy Act" },
  { role: "Speaker", event: "NLU Odisha Moot Court Competition", desc: "Public Health Law" },
  { role: "Speaker", event: "KIIT Moot Court Competition", desc: "Company Law" },
];

const LEADERSHIP = [
  { role: "Organizer", event: "National Conference, VIT-AP", desc: "End-to-end coordination and execution" },
  { role: "Organizer", event: "Intra Moot Court Competition", desc: "Planning, logistics, and evaluation" },
  { role: "Mentor", event: "Moot Court Training", desc: "Guided students in research and advocacy" },
];

const ACHIEVEMENTS = [
  { title: "Hindi Language Proficiency Certifications", desc: "Completed advanced Hindi examinations including Praveen and higher levels." },
  { title: "Black Belt in Shotokan Karate", desc: "Achieved black belt certification reflecting discipline and advanced martial arts training." },
  { title: "State-Level Medalist in Kickboxing", desc: "Recognised at the state level for competitive performance." },
  { title: "Typewriting Certification (Lower Grade)", desc: "Certified in lower-grade typewriting demonstrating speed and accuracy." },
];

const CARDS = [
  { title: "Accolades", items: ACCOLADES },
  { title: "Moot Courts", items: MOOTS },
  { title: "Leadership", items: LEADERSHIP },
  { title: "Personal Achievements", items: ACHIEVEMENTS },
];

function ListCard({ title, items, index }: { title: string; items: any[]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.35, delay: index * 0.06 }}
      className="bg-white border border-zinc-200 p-5 rounded-2xl hover:border-[#D2042D]/30 hover:shadow-sm transition-all duration-300"
    >
      <h3 className="text-[9px] font-bold uppercase tracking-[0.15em] text-zinc-400 mb-4">
        {title}
      </h3>
      <div className="space-y-4">
        {items.map((item, i) => (
          <div key={i} className="border-l-2 border-zinc-100 pl-3">
            {"role" in item && (
              <span className="text-[9px] text-[#D2042D] uppercase font-bold tracking-widest block">
                {item.role}
              </span>
            )}
            <h4 className={`text-xs font-bold mt-0.5 leading-snug ${item.highlight ? "text-[#D2042D]" : "text-black"}`}>
              {item.title || item.event}
            </h4>
            <p className="text-[10px] text-zinc-500 mt-0.5 leading-snug">
              {item.issuer ? `${item.issuer} · ${item.year}` : item.desc}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function Credentials() {
  return (
    <div className="w-full h-screen flex flex-col bg-white text-black overflow-hidden">
      <div className="w-full max-w-7xl mx-auto flex flex-col h-full px-5 md:px-8 py-8 md:py-10">

        {/* HEADER */}
        <div className="mb-5 shrink-0">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">
            Credentials & <span className="text-[#D2042D]">Recognition</span>
          </h2>
          <p className="text-zinc-400 text-[10px] uppercase tracking-[0.15em] mt-1.5">
            Achievements, Advocacy & Leadership
          </p>
        </div>

        {/* GRID */}
        <div className="flex-1 min-h-0 overflow-y-auto pb-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CARDS.map((card, i) => (
              <ListCard key={i} title={card.title} items={card.items} index={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
