"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const CREDENTIALS_TABS = [
  {
    id: "accolades",
    label: "Accolades & Ranks",
    items: [
      { category: "Accolade", title: "All India Rank 6", issuer: "NTSE (LawSikho)", date: "2024", role: "Rank Holder", detail: "Secured 6th rank nationally in the National Talent Search Examination on Law, Science, and Technology." },
      { category: "Accolade", title: "All India Rank 24", issuer: "National Law Olympiad", date: "May 2023", role: "Rank Holder", detail: "Achieved 24th rank nationwide in competitive examination testing rigorous legal aptitude." },
      { category: "Accolade", title: "Best Essay Award", issuer: "Gujarat National Law Univ.", date: "2023", role: "Winner", detail: "Awarded Best Essay in the 6th GNLU Essay Competition on Law and Economics." },
      { category: "Accolade", title: "Academic Excellence", issuer: "VIT-AP University", date: "2021-2022", role: "Recipient", detail: "Awarded for outstanding academic performance in the B.B.A. LL.B. (Hons.) program." },
      { category: "Accolade", title: "Tech Law & Fintech Diploma", issuer: "LawSikho", date: "2025", role: "A Grade", detail: "Completed intensive diploma covering Technology Law, Fintech Regulations, and Tech Contracts." },
    ]
  },
  {
    id: "moots",
    label: "Moot Courts",
    items: [
      { category: "Advocacy", title: "Verdictus Moot Court", issuer: "Navrachna University", date: "2025", role: "Speaker", detail: "Argued complex legal aspects surrounding termination of pregnancy under the MTP Act." },
      { category: "Advocacy", title: "Public Health Law Moot", issuer: "NLU Odisha", date: "2025", role: "Speaker", detail: "4th National Competition: Addressed issues related to termination of pregnancy and statutory interpretation." },
      { category: "Advocacy", title: "KIIT National Moot Court", issuer: "KIIT University", date: "2023", role: "Speaker", detail: "9th Edition: Presented rigorous arguments on complex issues pertaining to mergers and company law." },
    ]
  },
  {
    id: "leadership",
    label: "Leadership",
    items: [
      { category: "Leadership", title: "National Conference Organizer", issuer: "VIT-AP University", date: "2024", role: "Organizer", detail: "Managed technical operations and digital execution for 'International Law in Times of Crisis'." },
      { category: "Leadership", title: "Intra Moot Court Organizer", issuer: "VIT-AP University", date: "2024", role: "Organizer", detail: "Led planning, drafted propositions, coordinated evaluations, and served as chief student liaison." },
      { category: "Leadership", title: "Moot Court Mentor", issuer: "VSL Intra Moot", date: "2024", role: "Mentor", detail: "Prepared bench memorials, conducted mock trials, and guided junior batches in research and drafting." },
    ]
  },
  {
    id: "personal",
    label: "Personal Excellence",
    items: [
      { category: "Personal", title: "Hindi Language Proficiency", issuer: "Dakshina Bharat Hindi Prachar Sabha", date: "2018", role: "Certified", detail: "Completed advanced Hindi examinations including Praveen and higher fluency levels." },
      { category: "Personal", title: "Black Belt in Karate", issuer: "Shotokan Karate", date: "2018", role: "Black Belt", detail: "Achieved black belt certification reflecting years of high discipline and advanced martial arts training." },
      { category: "Personal", title: "State-Level Kickboxing", issuer: "State Championship", date: "2018", role: "Medalist", detail: "Recognized at the state level for highly competitive performance and athletic excellence." },
      { category: "Personal", title: "Typewriting Certification", issuer: "Grade 1 Examination", date: "2023", role: "Certified", detail: "Passed Lower Grade 1 typewriting exam, demonstrating professional typing speed and accuracy." }
    ]
  }
];

function CredentialCard({ item, index }: { item: any; index: number }) {
  const [flipped, setFlipped] = useState(false);
  const isRedBadge = item.category === "Accolade" || item.category === "Advocacy";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: (index % 8) * 0.05 }}
      className="h-full w-full cursor-pointer group relative z-10 hover:z-20"
      style={{ perspective: "1000px" }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped((v) => !v)}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        className="relative w-full h-full shadow-sm group-hover:shadow-xl transition-shadow duration-300 rounded-2xl group-hover:-translate-y-1 pointer-events-none sm:pointer-events-auto"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* FRONT */}
        <div
          className="absolute inset-0 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-4 sm:p-5 flex flex-col transition-colors duration-500 group-hover:border-[#D2042D]/40 dark:group-hover:border-red-900/60"
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
        >
          <div className="flex justify-between items-start mb-3 sm:mb-4">
            <span className={`text-[8px] sm:text-[9px] font-black px-2 py-1 rounded border uppercase tracking-widest transition-colors duration-300 line-clamp-1 ${isRedBadge
                ? "bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-900/50 text-[#D2042D] dark:text-red-500"
                : "bg-zinc-50 dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400"
              }`}>
              {item.category}
            </span>
            <span className="text-[8px] sm:text-[9px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 border border-zinc-100 dark:border-zinc-800 px-2 py-1 rounded">
              {item.role}
            </span>
          </div>

          <h3 className="text-[12px] sm:text-base font-bold text-zinc-900 dark:text-zinc-50 line-clamp-3 tracking-tight leading-snug transition-colors duration-300">
            {item.title}
          </h3>

          <div className="mt-auto pt-3 border-t border-zinc-100 dark:border-zinc-800 transition-colors duration-300">
            <p className="text-[10px] sm:text-[11px] font-medium text-zinc-500 dark:text-zinc-400 leading-snug line-clamp-1 truncate">
              {item.issuer}
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
              {item.date}
            </span>
          </div>

          <div className="flex-1 flex items-center justify-center mt-3">
            <h4 className="text-white text-[11px] sm:text-[13px] font-medium line-clamp-4 leading-relaxed tracking-wide">
              {item.detail}
            </h4>
          </div>

          <div className="mt-3 pt-3 border-t border-white/20">
            <p className="text-white/80 text-[9px] sm:text-[10px] uppercase tracking-widest font-bold truncate">
              {item.issuer}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// Split Navigation Card (Dynamically renders Next, Prev, or Both)
function NavigationCard({ prevTabLabel, nextTabLabel, onPrevClick, onNextClick, index }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: (index % 8) * 0.05 }}
      // flex-col with gap-3 automatically splits height perfectly if both exist
      className="h-full w-full relative z-10 flex flex-col gap-3 sm:gap-4"
    >
      {/* TOP HALF: NEXT */}
      {nextTabLabel && (
        <div
          onClick={onNextClick}
          className="flex-1 w-full cursor-pointer group flex flex-col items-center justify-center text-center shadow-sm border border-zinc-800 hover:border-[#D2042D]/50 transition-all duration-300 bg-gradient-to-br from-zinc-900 to-black dark:from-zinc-800 dark:to-zinc-950 rounded-2xl hover:-translate-y-1"
        >
          <div className="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-1.5">
            <span className="text-zinc-400 text-[8px] sm:text-[9px] uppercase tracking-[0.2em] font-bold">Explore Next</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#D2042D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
          <h3 className="text-white text-[10px] sm:text-xs font-bold tracking-wide">
            {nextTabLabel}
          </h3>
        </div>
      )}

      {/* BOTTOM HALF: PREV */}
      {prevTabLabel && (
        <div
          onClick={onPrevClick}
          className="flex-1 w-full cursor-pointer group flex flex-col items-center justify-center text-center shadow-sm border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-500 transition-all duration-300 bg-zinc-100 dark:bg-zinc-900/50 rounded-2xl hover:-translate-y-1"
        >
          <div className="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-1.5">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-500 group-hover:-translate-x-1 transition-transform">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            <span className="text-zinc-500 text-[8px] sm:text-[9px] uppercase tracking-[0.2em] font-bold">Go Back</span>
          </div>
          <h3 className="text-zinc-800 dark:text-zinc-200 text-[10px] sm:text-xs font-bold tracking-wide">
            {prevTabLabel}
          </h3>
        </div>
      )}
    </motion.div>
  );
}

export default function Credentials() {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeTabIndex, setActiveTabIndex] = useState(0);
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

  const handleTabChange = (index: number) => {
    setActiveTabIndex(index);
    setActivePage(0);
    if (scrollRef.current) scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
  };

  if (!mounted) return <div className="w-full h-screen bg-zinc-50 dark:bg-zinc-950" />;

  const currentTab = CREDENTIALS_TABS[activeTabIndex];
  const nextTab = CREDENTIALS_TABS[activeTabIndex + 1];
  const prevTab = CREDENTIALS_TABS[activeTabIndex - 1];

  // Append the Unified Navigation Card
  const displayItems = [...currentTab.items];
  if (prevTab || nextTab) {
    displayItems.push({
      isNavigationCard: true,
      prevTabLabel: prevTab?.label,
      nextTabLabel: nextTab?.label
    });
  }

  const chunkSize = isMobile ? 4 : 8;
  const pages = [];
  for (let i = 0; i < displayItems.length; i += chunkSize) {
    pages.push(displayItems.slice(i, i + chunkSize));
  }

  return (
    <div className="w-full h-[100svh] flex flex-col bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300 overflow-hidden">
      <div className="w-full h-full max-w-7xl mx-auto flex flex-col px-6 md:px-10 py-6 md:py-10">

        {/* HEADER & TABS */}
        <div className="mb-5 sm:mb-8 shrink-0">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-4 sm:mb-6">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-zinc-900 dark:text-white transition-colors duration-300">
                Credentials & <span className="text-[#D2042D]">Recognition</span>
              </h2>
              <p className="text-zinc-500 dark:text-zinc-400 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] mt-2 font-bold transition-colors duration-300">
                Documented Achievements & History
              </p>
            </div>

            {pages.length > 1 && (
              <motion.span
                onClick={() => scrollToPage(activePage + 1 < pages.length ? activePage + 1 : 0)}
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                className="text-[#D2042D] text-[9px] font-black uppercase tracking-[0.2em] self-start sm:self-auto cursor-pointer"
              >
                Swipe →
              </motion.span>
            )}
          </div>

          {/* UPGRADED NAVBAR (Pill Design) */}
          <div className="flex gap-2 sm:gap-3 overflow-x-auto scrollbar-hide pb-2 touch-pan-x">
            {CREDENTIALS_TABS.map((tab, idx) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(idx)}
                className={`shrink-0 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-[0.15em] transition-all duration-300 border ${activeTabIndex === idx
                    ? "bg-[#D2042D] text-white border-[#D2042D] shadow-md shadow-red-900/20"
                    : "bg-transparent text-zinc-500 dark:text-zinc-400 border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900"
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* CAROUSEL CONTAINER */}
        <div className="flex-1 min-h-0 relative w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTab.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 flex flex-col"
            >
              <div
                ref={scrollRef}
                onScroll={handleScroll}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                className={`flex-1 min-h-0 flex w-full overflow-x-auto scrollbar-hide pb-2 overscroll-x-contain touch-pan-x cursor-grab active:cursor-grabbing ${isDragging ? 'snap-none' : 'snap-x snap-mandatory'}`}
              >
                {pages.map((pageItems, pageIndex) => (
                  <div
                    key={pageIndex}
                    className="min-w-full w-full h-full snap-center shrink-0"
                  >
                    <div className="w-full h-full grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4 sm:gap-6">
                      {pageItems.map((item, index) => {
                        const globalIndex = index + (pageIndex * chunkSize);

                        if (item.isNavigationCard) {
                          return (
                            <NavigationCard
                              key={`nav-${globalIndex}`}
                              prevTabLabel={item.prevTabLabel}
                              nextTabLabel={item.nextTabLabel}
                              onPrevClick={() => handleTabChange(activeTabIndex - 1)}
                              onNextClick={() => handleTabChange(activeTabIndex + 1)}
                              index={globalIndex}
                            />
                          );
                        }

                        return <CredentialCard key={globalIndex} item={item} index={globalIndex} />;
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* PAGINATION DOTS */}
        {pages.length > 1 && (
          <div className="shrink-0 flex justify-center items-center gap-2 pt-4 sm:pt-5 z-10 relative">
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