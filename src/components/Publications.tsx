"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const PUBLICATIONS_DATA = [
  {
    title: "The Economic Impact of Criminal Law: Analyzing the Costs & Benefits of Criminal Justice Systems",
    venue: "International Journal of Law Management & Humanities (IJLMH)",
    category: "Criminal Law",
    link: "https://doij.org/10.10000/IJLMH.115981",
  },
  {
    title: "Planet in Peril: Climate Change, Health & Environmental Justice",
    venue: "Indian Journal of Law and Legal Research (IJLLR)",
    category: "Environmental Law",
    link: "https://www.ijllr.com/post/planet-in-peril-unveiling-the-nexus-of-climate-change-health-and-environmental-justice-through-gl",
  },
  {
    title: "Domestic Violence in India: Reality vs Statistics",
    venue: "White Black Legal International Law Journal",
    category: "Social Justice",
    link: "https://www.whiteblacklegal.co.in/details/domestic-violence-in-india--the-difference-between-statistic-and-the-real-picture-by-j-swaroop-choudary",
  },
  {
    title: "John Austin's Theory of Sovereignty in Modern Legal Systems",
    venue: "Indian Journal for Research in Law and Management",
    category: "Jurisprudence",
    link: "https://doi-ds.org/doilink/02.2024-45416615/IJRLM/VOL.1,ISSUE.4,JANUARY-2024/A02",
  },
  {
    title: "The Rise of AI in Corporate Law",
    venue: "DSNLU Journal of Science, Technology and Law",
    category: "Technology Law",
    link: "https://dsnlu.ac.in/storage/2024/11/DJSTL_Vol-3_-issue-_2-1-2.pdf",
  },
  {
    title: "Strengthening Electoral Integrity in India",
    venue: "Indian Journal of Legal Research and Review",
    category: "Constitutional Law",
    link: "https://doi.org/10.5281/zenodo.16261926",
  },
  {
    title: "Faith, Fear & Fortitude: Terrorism, Religion & National Security",
    venue: "IIP Series",
    category: "National Security",
    link: "https://www.doi.org/10.58532/V3BBSO22P1CH15",
  },
];

function PublicationCard({ article, index }: { article: typeof PUBLICATIONS_DATA[number]; index: number }) {
  const [flipped, setFlipped] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  const hasLink = !!article.link;

  const handleClick = () => {
    if (isTouch) {
      if (!flipped) {
        setFlipped(true);
      } else if (hasLink) {
        window.open(article.link, "_blank");
      } else {
        setFlipped(false);
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="h-full w-full cursor-pointer"
      style={{ perspective: "1000px" }}
      onMouseEnter={() => !isTouch && setFlipped(true)}
      onMouseLeave={() => !isTouch && setFlipped(false)}
      onClick={handleClick}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 130, damping: 15 }}
        className="relative w-full h-full shadow-sm hover:shadow-lg transition-shadow duration-300 rounded-2xl"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* FRONT */}
        <div
          // Adjusted padding (p-3.5) for mobile to give text more room
          className="absolute inset-0 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-3.5 sm:p-5 flex flex-col transition-colors duration-300"
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
        >
          <div className="flex justify-between items-start mb-2 sm:mb-3">
            <span className="text-[7.5px] sm:text-[9px] font-black px-1.5 sm:px-2 py-1 rounded bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-[#D2042D] uppercase tracking-widest transition-colors duration-300 line-clamp-1">
              {article.category}
            </span>
            <div className="h-1 w-4 sm:w-6 bg-[#D2042D] rounded-full shrink-0 ml-1.5" />
          </div>

          <h3 className="text-[11px] sm:text-[15px] font-bold text-zinc-900 dark:text-zinc-50 line-clamp-3 sm:line-clamp-2 tracking-tight leading-snug transition-colors duration-300">
            {article.title}
          </h3>

          <div className="mt-auto pt-2 sm:pt-3 border-t border-zinc-100 dark:border-zinc-800 transition-colors duration-300">
            <p className="text-[9px] sm:text-[10px] font-medium text-zinc-500 dark:text-zinc-400 leading-snug line-clamp-1 sm:line-clamp-2">
              {article.venue}
            </p>
          </div>
        </div>

        {/* BACK */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#D2042D] to-[#990011] rounded-2xl p-3.5 sm:p-5 flex flex-col items-center justify-center text-center shadow-inner"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)"
          }}
        >
          <h4 className="text-white text-[11px] sm:text-sm font-bold line-clamp-4 leading-snug tracking-wide mb-3 sm:mb-4">
            {article.title}
          </h4>

          <div>
            {hasLink ? (
              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-widest border border-white/40 bg-white/5 px-4 py-2 rounded-full hover:bg-white/20 transition-colors duration-200"
                onClick={(e) => e.stopPropagation()}
              >
                Read
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17l9.2-9.2M17 17V7H7" />
                </svg>
              </a>
            ) : (
              <span className="inline-block text-white/50 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest border border-white/20 bg-black/10 px-4 py-2 rounded-full">
                Coming Soon
              </span>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Publications() {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activePage, setActivePage] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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

  if (!mounted) return <div className="w-full h-screen bg-zinc-50 dark:bg-zinc-950" />;

  const chunkSize = isMobile ? 4 : 8;
  const pages = [];
  for (let i = 0; i < PUBLICATIONS_DATA.length; i += chunkSize) {
    pages.push(PUBLICATIONS_DATA.slice(i, i + chunkSize));
  }

  return (
    <div className="w-full h-[100svh] flex flex-col bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300 overflow-hidden">
      <div className="w-full h-full max-w-7xl mx-auto flex flex-col px-6 md:px-10 py-6 md:py-10">

        {/* HEADER */}
        <div className="mb-4 sm:mb-6 shrink-0">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-zinc-900 dark:text-white transition-colors duration-300">
            Legal <span className="text-[#D2042D]">Scholarship</span>
          </h2>
          <div className="flex justify-between items-center mt-1 sm:mt-2">
            <p className="text-zinc-500 dark:text-zinc-400 text-[9px] sm:text-[10px] uppercase tracking-[0.2em] font-bold transition-colors duration-300">
              Published Research & Articles
            </p>
            {/* Added Bouncing Animation to the Swipe Indicator */}
            {isMobile && pages.length > 1 && (
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                className="text-[#D2042D] text-[9px] font-black uppercase tracking-[0.2em]"
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
          // Added overscroll-x-contain for better physical bounce at the edges on mobile
          className="flex-1 min-h-0 flex w-full overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-2 overscroll-x-contain touch-pan-x"
        >
          {pages.map((pageItems, pageIndex) => (
            <div
              key={pageIndex}
              className="min-w-full w-full h-full snap-center shrink-0"
            >
              <div className="w-full h-full grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-3 sm:gap-5">
                {pageItems.map((article, index) => (
                  <PublicationCard key={index} article={article} index={index} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* PAGINATION DOTS */}
        {pages.length > 1 && (
          <div className="shrink-0 flex justify-center items-center gap-2 pt-3 sm:pt-4">
            {pages.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToPage(i)}
                className={`transition-all duration-300 rounded-full ${activePage === i
                    ? "w-6 h-1.5 bg-[#D2042D]"
                    : "w-1.5 h-1.5 bg-zinc-300 dark:bg-zinc-800"
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