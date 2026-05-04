"use client";

import { motion } from "framer-motion";
import { useState, useRef } from "react";

const CONFERENCE_DATA = [
  {
    title: "AI Governance & Regulatory Influence",
    fullTitle: "AI Governance in India: Government Oversight and Regulatory Influence",
    venue: "Amity University, Noida",
    date: "February 2024",
    type: "International",
    role: "Presenter",
    brief: "AI Regulation"
  },
  {
    title: "Role of India in AI Regulation",
    fullTitle: "Role of India in Regulating the Developments in AI",
    venue: "NMIMS University, Mumbai",
    date: "February 2024",
    type: "International",
    role: "Speaker",
    brief: "Policy Control"
  },
  {
    title: "AI Regulatory Landscape",
    fullTitle: "Governance and Artificial Intelligence: Navigating India's Regulatory Landscape",
    venue: "Aligarh Muslim Law University",
    date: "January 2024",
    type: "International",
    role: "Presenter",
    brief: "Regulatory Mapping"
  },
  {
    title: "Child Abuse, Religion & Caste",
    fullTitle: "Breaking the Silence: Exploring the Nexus of Child Abuse, Religion, and Caste",
    venue: "NMIMS University, Indore",
    date: "January 2024",
    type: "International",
    role: "Presenter",
    brief: "Social Justice"
  },
  {
    title: "GI & IPR Development",
    fullTitle: "Geographical Indications and Intellectual Property Rights: A Catalyst for Regional Development",
    venue: "Dr. RKB Law College, Dibrugarh",
    date: "March 2024",
    type: "International",
    role: "Speaker",
    brief: "IP Development"
  },
  {
    title: "ADR Effectiveness",
    fullTitle: "The Effectiveness of Alternative Dispute Resolution Over Traditional Court Proceedings",
    venue: "Kerala Law Academy",
    date: "December 2023",
    type: "International",
    role: "Presenter",
    brief: "Dispute Efficiency"
  },
  {
    title: "Privacy & Data Protection",
    fullTitle: "Protecting Privacy in the Digital Age: Navigating Data Regulations in India",
    venue: "MNLU Nagpur & NLU Bangalore",
    date: "November 2023",
    type: "International",
    role: "Presenter",
    brief: "Data Protection"
  },
  {
    title: "Trade Secrets vs Employee Rights",
    fullTitle: "Trade Secrets and Employee Mobility: Balancing Business Interests and Employee Rights",
    venue: "CUSAT",
    date: "November 2023",
    type: "International",
    role: "Speaker",
    brief: "Corporate Rights"
  },
  {
    title: "Climate Change & Justice",
    fullTitle: "Planet in Peril: Climate Change, Health, and Environmental Justice through Global Legal Perspectives",
    venue: "NMIMS Bangalore",
    date: "July 2023",
    type: "International",
    role: "Presenter",
    brief: "Environmental Justice"
  },
  {
    title: "CSR in the Age of AI",
    fullTitle: "Redefining Corporate Social Responsibility In The Age Of Artificial Intelligence",
    venue: "NMIMS National Conference",
    date: "December 2024",
    type: "National",
    role: "Presenter",
    brief: "Ethical Governance"
  },
  {
    title: "Emerging Trends in Federalism",
    fullTitle: "Emerging Trends in Indian Federalism",
    venue: "Govt Law College, Thiruvananthapuram",
    date: "December 2023",
    type: "National",
    role: "Speaker",
    brief: "Constitutional Balance"
  },
];

function ConferenceCard({ conf, index }: { conf: typeof CONFERENCE_DATA[number]; index: number }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: (index % 8) * 0.05 }}
      // Z-index management ensures hovered cards stay cleanly above others
      className="h-full w-full cursor-pointer group relative z-10 hover:z-20"
      style={{ perspective: "1000px" }}
      // Relying purely on native mouse events (kills the sticky/click bug)
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped((v) => !v)}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        // Snappy, clean easeInOut kills the "hanging/sticky" feeling
        transition={{ duration: 0.5, ease: "easeInOut" }}
        // Removed the physical upward lift (-translate-y) to stop header clipping
        className="relative w-full h-full shadow-sm group-hover:shadow-xl transition-shadow duration-300 rounded-2xl"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* FRONT */}
        <div
          className="absolute inset-0 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-4 sm:p-5 flex flex-col transition-colors duration-500 group-hover:border-[#D2042D]/40 dark:group-hover:border-red-900/60"
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
        >
          <div className="flex justify-between items-start mb-3 sm:mb-4">
            <span className={`text-[8px] sm:text-[9px] font-black px-2 py-1 rounded border uppercase tracking-widest transition-colors duration-300 line-clamp-1 ${conf.type === "International"
                ? "bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-900/50 text-[#D2042D] dark:text-red-500"
                : "bg-zinc-50 dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400"
              }`}>
              {conf.type}
            </span>
            <span className="text-[8px] sm:text-[9px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 border border-zinc-100 dark:border-zinc-800 px-2 py-1 rounded">
              {conf.role}
            </span>
          </div>

          <h3 className="text-[12px] sm:text-base font-bold text-zinc-900 dark:text-zinc-50 line-clamp-3 tracking-tight leading-snug transition-colors duration-300">
            {conf.title}
          </h3>

          <div className="mt-auto pt-3 border-t border-zinc-100 dark:border-zinc-800 transition-colors duration-300">
            <p className="text-[10px] sm:text-[11px] font-medium text-zinc-500 dark:text-zinc-400 leading-snug line-clamp-1 truncate">
              {conf.venue}
            </p>
          </div>
        </div>

        {/* BACK */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#D2042D] to-[#990011] rounded-2xl p-4 sm:p-5 flex flex-col justify-between text-center shadow-inner"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)"
          }}
        >
          <div className="flex justify-center w-full">
            <span className="inline-block text-white/90 bg-black/20 text-[9px] sm:text-[10px] uppercase tracking-[0.15em] font-bold px-3.5 py-1.5 rounded-full backdrop-blur-sm border border-white/10 shadow-sm">
              {conf.date}
            </span>
          </div>

          <div className="flex-1 flex items-center justify-center mt-3">
            <h4 className="text-white text-[11px] sm:text-sm font-bold line-clamp-4 leading-relaxed tracking-wide italic">
              "{conf.fullTitle}"
            </h4>
          </div>

          <div className="mt-3 pt-3 border-t border-white/20">
            <p className="text-white/80 text-[9px] sm:text-[10px] uppercase tracking-[0.2em] font-bold">
              Focus: {conf.brief}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Conferences() {
  const [activePage, setActivePage] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const scrollLeft = e.currentTarget.scrollLeft;
    const clientWidth = e.currentTarget.clientWidth;
    const currentPage = Math.round(scrollLeft / clientWidth);
    setActivePage(currentPage);
  };

  const scrollToPage = (pageIndex: number) => {
    if (scrollRef.current) {
      const clientWidth = scrollRef.current.clientWidth;
      scrollRef.current.scrollTo({ left: clientWidth * pageIndex, behavior: "smooth" });
    }
  };

  // We enforce an 8-item chunk size for the desktop snap layout. 
  // Mobile browsers gracefully wrap grid items internally, so this remains fully responsive.
  const chunkSize = 8;
  const pages = [];
  for (let i = 0; i < CONFERENCE_DATA.length; i += chunkSize) {
    pages.push(CONFERENCE_DATA.slice(i, i + chunkSize));
  }

  return (
    <div className="w-full h-[100svh] flex flex-col bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300 overflow-hidden">
      <div className="w-full h-full max-w-7xl mx-auto flex flex-col px-6 md:px-10 py-6 md:py-10">

        {/* HEADER */}
        <div className="mb-5 sm:mb-8 shrink-0">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-zinc-900 dark:text-white transition-colors duration-300">
            Conferences & <span className="text-[#D2042D]">Presentations</span>
          </h2>
          <div className="flex justify-between items-end mt-2 sm:mt-3">
            <div className="flex flex-col gap-1">
              <p className="text-zinc-800 dark:text-zinc-200 text-[11px] sm:text-xs font-bold uppercase tracking-[0.15em]">
                VIT-AP University Delegation
              </p>
              <p className="text-zinc-500 dark:text-zinc-400 text-[9px] sm:text-[10px] uppercase tracking-[0.2em] font-bold transition-colors duration-300">
                {CONFERENCE_DATA.length} Academic Appearances
              </p>
            </div>

            {/* Added a subtle desktop-safe 'More' indicator instead of just 'Swipe' */}
            {pages.length > 1 && (
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                className="text-[#D2042D] text-[9px] font-black uppercase tracking-[0.2em] mb-0.5 md:hidden"
              >
                Swipe →
              </motion.span>
            )}
          </div>
        </div>

        {/* CAROUSEL CONTAINER */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex-1 min-h-0 flex w-full overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-2 overscroll-x-contain touch-pan-x"
        >
          {pages.map((pageItems, pageIndex) => (
            <div
              key={pageIndex}
              className="min-w-full w-full h-full snap-center shrink-0"
            >
              <div className="w-full h-full grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4 sm:gap-6">
                {pageItems.map((conf, index) => (
                  <ConferenceCard key={index} conf={conf} index={index + (pageIndex * chunkSize)} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* PAGINATION DOTS */}
        {pages.length > 1 && (
          <div className="shrink-0 flex justify-center items-center gap-2 pt-4 sm:pt-5">
            {pages.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToPage(i)}
                className={`transition-all duration-300 rounded-full ${activePage === i
                    ? "w-8 h-1.5 bg-[#D2042D]"
                    : "w-2 h-1.5 bg-zinc-300 dark:bg-zinc-800"
                  }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        )}

      </div>
    </div>
  );
}