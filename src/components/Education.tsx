"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const EDUCATION_DATA = [
  {
    year: "2021 – 2026",
    degree: "BBA, LL.B. (Hons.)",
    institution: "VIT-AP University",
    category: "Undergraduate Degree",
    details: "CGPA: 8.19/10. Recipient of the Academic Excellence Award for outstanding academic performance.",
    logo: "/Education/VIT.png",
    initials: "VIT",
  },
  {
    year: "2025",
    degree: "Diploma in Tech Law & Fintech",
    institution: "LawSikho",
    category: "Professional Certification",
    details: "Completed with an A Grade. Focused on technology contracts, fintech regulations, and compliance frameworks.",
    logo: "/Education/LAWSEIKHO.png",
    initials: "LS",
  },
  {
    year: "2019 – 2021",
    degree: "Class XII (Intermediate)",
    institution: "Sri Viswashanti Educational Institution",
    category: "APBIE Board",
    details: "Secured 84% with strong academic performance across core subjects.",
    logo: "/Education/BIEAP.png",
    initials: "SVEI",
  },
  {
    year: "2018 – 2019",
    degree: "Class X (SSC)",
    institution: "Sri Chaitanya Techno School",
    category: "BSEAP Board",
    details: "Achieved 9.3 GPA, demonstrating consistent academic excellence and discipline.",
    logo: "/Education/BSEAP.png",
    initials: "SCTS",
  },
];

const GRID_POSITIONING = [
  "md:col-start-1 md:row-start-1",
  "md:col-start-2 md:row-start-1",
  "md:col-start-2 md:row-start-2",
  "md:col-start-1 md:row-start-2",
];

function EducationTile({ item, index }: { item: typeof EDUCATION_DATA[number]; index: number }) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
      className={`relative z-10 w-full h-full group ${GRID_POSITIONING[index]}`}
    >
      <div className="h-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-4 sm:p-5 rounded-2xl flex flex-col group-hover:border-[#D2042D]/40 dark:group-hover:border-red-900/60 group-hover:shadow-xl transition-all duration-500 group-hover:-translate-y-1">

        <div className="flex justify-between items-start mb-3 sm:mb-4">
          {/* LOCKED TO WHITE: Removed dark mode background classes here */}
          <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 bg-white border border-zinc-200 rounded-xl flex items-center justify-center p-2 shadow-sm group-hover:border-[#D2042D]/30 transition-colors duration-300">
            {!imgFailed ? (
              <img
                src={item.logo}
                alt={item.institution}
                className="w-full h-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                onError={() => setImgFailed(true)}
              />
            ) : (
              <span className="text-[8px] sm:text-[10px] font-black text-zinc-400 group-hover:text-[#D2042D] transition-colors duration-300">
                {item.initials}
              </span>
            )}
          </div>

          <div className="flex flex-col items-end gap-1.5">
            <span className="bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700 text-[8px] sm:text-[9px] font-bold px-2 py-1 rounded uppercase tracking-widest">
              {item.year}
            </span>
            <span className="text-[#D2042D] dark:text-red-500 text-[7px] sm:text-[8px] font-black uppercase tracking-[0.2em]">
              {item.category}
            </span>
          </div>
        </div>

        <div className="flex-1 min-h-0 flex flex-col">
          <h3 className="text-sm sm:text-base font-black text-zinc-900 dark:text-zinc-50 leading-snug tracking-tight mb-1 transition-colors duration-300">
            {item.degree}
          </h3>
          <p className="text-[11px] sm:text-[13px] font-bold text-zinc-500 dark:text-zinc-400 mb-3 sm:mb-4">
            {item.institution}
          </p>

          <div className="mt-auto pt-3 border-t border-zinc-100 dark:border-zinc-800/50">
            <p className="text-[9px] sm:text-[11px] leading-relaxed text-zinc-500 dark:text-zinc-400 font-medium line-clamp-3 sm:line-clamp-none">
              {item.details}
            </p>
          </div>
        </div>

      </div>
    </motion.div>
  );
}

export default function Education() {
  return (
    <div className="w-full h-[100svh] flex flex-col bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300 overflow-hidden">
      <div className="w-full h-full max-w-6xl mx-auto flex flex-col px-6 md:px-10 py-6 md:py-10">

        <div className="mb-6 md:mb-8 shrink-0">
          <div className="flex justify-between items-end">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-zinc-900 dark:text-white transition-colors duration-300">
                Academic <span className="text-[#D2042D]">Foundation</span>
              </h2>
              <div className="flex items-center gap-3 mt-2 sm:mt-3">
                <div className="h-0.5 w-6 sm:w-8 bg-[#D2042D] rounded-full" />
                <p className="text-zinc-500 dark:text-zinc-400 text-[9px] sm:text-[11px] uppercase tracking-[0.25em] font-bold transition-colors duration-300">
                  Degrees & Certifications
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 min-h-0 relative w-full flex items-center justify-center pb-2 md:pb-6">

          <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">

            <div className="md:hidden absolute top-[12.5%] bottom-[12.5%] left-1/2 w-[2px] bg-zinc-200 dark:bg-zinc-800 -translate-x-1/2 shadow-[0_0_10px_rgba(210,4,45,0.1)]" />

            <div className="hidden md:block absolute inset-0">
              <div className="absolute top-[25%] left-[25%] right-[25%] h-[2px] bg-zinc-200 dark:bg-zinc-800" />
              <div className="absolute top-[25%] bottom-[25%] right-[25%] w-[2px] bg-zinc-200 dark:bg-zinc-800" />
              <div className="absolute bottom-[25%] left-[25%] right-[25%] h-[2px] bg-zinc-200 dark:bg-zinc-800" />

              <div className="absolute top-[25%] left-[25%] w-3 h-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-zinc-300 dark:bg-zinc-700" />
              <div className="absolute top-[25%] right-[25%] w-3 h-3 translate-x-1/2 -translate-y-1/2 rounded-full bg-zinc-300 dark:bg-zinc-700" />
              <div className="absolute bottom-[25%] right-[25%] w-3 h-3 translate-x-1/2 translate-y-1/2 rounded-full bg-zinc-300 dark:bg-zinc-700" />
              <div className="absolute bottom-[25%] left-[25%] w-3 h-3 -translate-x-1/2 translate-y-1/2 rounded-full bg-zinc-300 dark:bg-zinc-700" />
            </div>
          </div>

          <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 grid-rows-4 md:grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
            {EDUCATION_DATA.map((item, i) => (
              <EducationTile key={i} item={item} index={i} />
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}