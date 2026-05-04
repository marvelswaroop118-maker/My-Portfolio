"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const FLIP_CARDS = [
  {
    id: "education",
    targetId: "education",
    frontLabel: "Academic",
    frontTitle: "Foundation",
    frontStat: "7.99",
    frontStatLabel: "CGPA",
    backTitle: "Education & Certs",
    backItems: [
      { title: "BBA LL.B (Hons.)", sub: "VIT-AP University", note: "2021–2026" },
      { title: "Diploma in Tech Law", sub: "LawSikho", note: "A Grade" },
      { title: "NTSE Law", sub: "National Talent Search", note: "6th Rank" },
    ],
  },
  {
    id: "experience",
    targetId: "experience",
    frontLabel: "Experience",
    frontTitle: "Legal Exposure",
    frontStat: "13",
    frontStatLabel: "Internships",
    backTitle: "Key Work",
    backItems: [
      { title: "MLS & Co.", sub: "39 Weeks", note: "Litigation & Corp." },
      { title: "Ragini Singh", sub: "26 Weeks", note: "SEBI & SCRA" },
      { title: "Fox & Mandal", sub: "4 Weeks", note: "Contracts" },
    ],
  },
  {
    id: "research",
    targetId: "publications",
    frontLabel: "Research",
    frontTitle: "Publications",
    frontStat: "22",
    frontStatLabel: "Papers & Presentations",
    backTitle: "Focus Areas",
    backItems: [
      { title: "AI Governance", sub: "Int. Conferences", note: "Primary" },
      { title: "Corporate & AI", sub: "NMIMS & DSNLU", note: "Published" },
      { title: "Privacy Law", sub: "Digital Age", note: "Core" },
    ],
  },
  {
    id: "moots",
    targetId: "credentials",
    frontLabel: "Advocacy",
    frontTitle: "Moot Courts",
    frontStat: "3",
    frontStatLabel: "Major Appearances",
    backTitle: "Competitions",
    backItems: [
      { title: "Verdictus Moot", sub: "Navrachna Univ.", note: "MTP Act" },
      { title: "NLU Odisha", sub: "Public Health Law", note: "Speaker" },
      { title: "KIIT National", sub: "9th Edition", note: "Company Law" },
    ],
  },
  {
    id: "leadership",
    targetId: "credentials",
    frontLabel: "Leadership",
    frontTitle: "Responsibility",
    frontStat: "3+",
    frontStatLabel: "Major Roles",
    backTitle: "Positions",
    backItems: [
      { title: "National Conference", sub: "VIT-AP 2024", note: "Organizer" },
      { title: "Intra Moot Court", sub: "VIT-AP 2024", note: "Organizer" },
      { title: "VSL Moot Mentor", sub: "Bench Memorials", note: "Mentor" },
    ],
  },
  {
    id: "focus",
    targetId: "conferences",
    frontLabel: "Focus",
    frontTitle: "Specialisation",
    frontStat: "5+",
    frontStatLabel: "Core Domains",
    backTitle: "Expertise",
    backItems: [
      { title: "Technology Law", sub: "AI & Fintech", note: "Primary" },
      { title: "Corporate Law", sub: "Mergers & Contracts", note: "Core" },
      { title: "Litigation", sub: "Civil & Criminal", note: "Practical" },
    ],
  },
];

function SummaryCard({ card, index }: { card: typeof FLIP_CARDS[number]; index: number }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: (index % 6) * 0.05 }}
      className="h-full w-full cursor-pointer group relative z-10 hover:z-20"
      style={{ perspective: "1500px" }}
      onHoverStart={() => setFlipped(true)}
      onHoverEnd={() => setFlipped(false)}
      onTap={() => setFlipped(!flipped)}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        // Lightning-fast 0.25s duration for an instant, non-sticky flip
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className="relative w-full h-full shadow-sm group-hover:shadow-xl transition-all duration-300 rounded-2xl md:group-hover:-translate-y-1"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* FRONT */}
        <div
          className="absolute inset-0 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-4 sm:p-5 flex flex-col justify-between transition-colors duration-300 md:group-hover:border-[#D2042D]/40 dark:md:group-hover:border-red-900/60"
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
        >
          <div className="pointer-events-none">
            <span className="text-[9px] sm:text-[10px] text-zinc-400 dark:text-zinc-500 uppercase tracking-[0.2em] font-bold">
              {card.frontLabel}
            </span>
            <h3 className="text-base sm:text-lg font-black mt-1 text-zinc-900 dark:text-white tracking-tight">
              {card.frontTitle}
            </h3>
          </div>
          <div className="pointer-events-none">
            <p className="text-4xl sm:text-5xl font-black text-[#D2042D] leading-none tracking-tighter">
              {card.frontStat}
            </p>
            <p className="text-[9px] sm:text-[10px] text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mt-1.5 font-medium">
              {card.frontStatLabel}
            </p>
          </div>
        </div>

        {/* BACK */}
        <div
          className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#D2042D] to-[#990011] p-4 sm:p-5 flex flex-col shadow-inner"
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <h4 className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-white/70 font-bold mb-3 border-b border-white/20 pb-2">
            {card.backTitle}
          </h4>

          <ul className="flex flex-col gap-2 sm:gap-2.5 flex-1 justify-center min-h-0 overflow-hidden">
            {card.backItems.map((item, i) => (
              <li key={i} className="border-l-[3px] border-white/40 pl-2.5">
                <p className="text-[11px] sm:text-[13px] font-bold text-white leading-tight tracking-wide line-clamp-1">
                  {item.title}
                </p>
                <div className="flex items-center justify-between mt-0.5">
                  <p className="text-[9px] sm:text-[11px] text-white/80 font-medium line-clamp-1">{item.sub}</p>
                  <span className="text-[7px] sm:text-[8px] bg-white/20 px-1.5 py-0.5 rounded text-white uppercase tracking-widest shrink-0 ml-1">
                    {item.note}
                  </span>
                </div>
              </li>
            ))}
          </ul>

          {/* THE NAVIGATE BUTTON */}
          <div className="mt-3 pt-3 border-t border-white/20 shrink-0">
            <button
              onClick={(e) => {
                e.stopPropagation();
                const element = document.getElementById(card.targetId);
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="w-full flex items-center justify-center gap-2 bg-white/10 hover:bg-white/25 active:scale-95 text-white text-[9px] sm:text-[10px] uppercase tracking-[0.2em] font-bold py-2 sm:py-2.5 rounded-xl transition-all duration-300"
            >
              Navigate
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>

        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Summary() {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activePage, setActivePage] = useState(0);

  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    if (scrollRef.current) {
      setStartX(e.pageX - scrollRef.current.offsetLeft);
      setScrollLeft(scrollRef.current.scrollLeft);
    }
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const scrollPos = e.currentTarget.scrollLeft;
    const width = e.currentTarget.clientWidth;
    setActivePage(Math.round(scrollPos / width));
  };

  const scrollToPage = (pageIndex: number) => {
    if (scrollRef.current) {
      const clientWidth = scrollRef.current.clientWidth;
      scrollRef.current.scrollTo({ left: clientWidth * pageIndex, behavior: "smooth" });
    }
  };

  if (!mounted) return <div className="w-full h-screen bg-zinc-50 dark:bg-zinc-950" />;

  const chunkSize = isMobile ? 2 : 6;
  const pages = [];
  for (let i = 0; i < FLIP_CARDS.length; i += chunkSize) {
    pages.push(FLIP_CARDS.slice(i, i + chunkSize));
  }

  return (
    <div className="w-full h-[100svh] flex flex-col bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300 overflow-hidden">
      <div className="w-full h-full max-w-7xl mx-auto flex flex-col px-6 md:px-10 py-6 md:py-8">

        <div className="mb-5 md:mb-8 shrink-0">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-3">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-zinc-900 dark:text-white">
                At a <span className="text-[#D2042D]">Glance</span>
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 text-[11px] sm:text-sm leading-relaxed max-w-2xl mt-2 sm:mt-3 font-medium">
                Final-year BBA LL.B (Hons.) student with extensive experience across litigation,
                corporate law, intellectual property, and AI governance.
              </p>
            </div>

            {isMobile && pages.length > 1 && (
              <motion.div
                onClick={() => scrollToPage(activePage + 1 < pages.length ? activePage + 1 : 0)}
                animate={{ x: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                className="flex items-center gap-2 cursor-pointer bg-[#D2042D]/10 dark:bg-[#D2042D]/20 px-4 py-2 rounded-full self-start"
              >
                <span className="text-[#D2042D] text-[10px] font-black uppercase tracking-[0.2em]">
                  Swipe
                </span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#D2042D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </motion.div>
            )}
          </div>
        </div>

        <div
          ref={scrollRef}
          onScroll={handleScroll}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className={`flex-1 min-h-0 flex w-full overflow-x-auto scrollbar-hide pb-2 overscroll-x-contain touch-pan-x ${isDragging ? 'snap-none cursor-grabbing' : 'snap-x snap-mandatory cursor-grab'}`}
        >
          {pages.map((pageItems, pageIndex) => (
            <div key={pageIndex} className="min-w-full w-full h-full snap-center shrink-0">
              <div className="w-full h-full grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-4 sm:gap-6">
                {pageItems.map((card, index) => (
                  <SummaryCard key={card.id} card={card} index={index + (pageIndex * chunkSize)} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {pages.length > 1 && (
          <div className="shrink-0 flex justify-center gap-2.5 mt-5">
            {pages.map((_, i) => (
              <div
                key={i}
                className={`transition-all duration-500 rounded-full ${activePage === i ? "w-8 h-1.5 bg-[#D2042D]" : "w-1.5 h-1.5 bg-zinc-300 dark:bg-zinc-800"}`}
              />
            ))}
          </div>
        )}

      </div>
    </div>
  );
}