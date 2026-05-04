"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const EXPERIENCE_DATA = [
  // FEATURED
  {
    firm: "MLS & Co Law Firm",
    role: "Legal Intern / Associate Capacity",
    duration: "Jul 2025 – Apr 2026",
    tag: "Litigation",
    logo: "/Experience/Mls.png",
    initials: "MLS",
    desc: "Handled High Court matters across civil, criminal, corporate, and IP law. Drafted writ petitions, notices, and agreements while assisting in case strategy and pre-hearing research.",
  },
  {
    firm: "Fox & Mandal",
    role: "Legal Intern",
    duration: "Dec 2024 – Jan 2025",
    tag: "Corporate",
    logo: "/Experience/Fox.png",
    initials: "F&M",
    desc: "Drafted commercial agreements and conducted statutory research, contributing to legal opinions and structured litigation strategy.",
  },
  {
    firm: "Adv. Muralidhar Unnam",
    role: "Legal Intern",
    duration: "Feb – Apr 2024",
    tag: "Litigation",
    logo: "/Experience/Unnam.png",
    initials: "UNN",
    desc: "Conducted High Court-level research, prepared case briefs, assisted in filings, and contributed to client consultations and strategy discussions.",
  },
  // ADDITIONAL
  {
    firm: "Ragini Singh & Associates",
    role: "Legal Intern",
    duration: "May – Nov 2025",
    tag: "Regulatory",
    logo: "/Experience/Ragini Singh.png",
    initials: "RSA",
    desc: "Researched SEBI and SCRA frameworks with focus on compliance and regulatory interpretation."
  },
  {
    firm: "RVK Law Associates",
    role: "Legal Intern",
    duration: "Jun 2025",
    tag: "Litigation",
    logo: "/Experience/RVK.png",
    initials: "RVK",
    desc: "Drafted pleadings and conducted case law research with courtroom exposure."
  },
  {
    firm: "Unnam Law Firm",
    role: "Legal Intern",
    duration: "Dec 2023 – Jan 2024",
    tag: "Litigation",
    logo: "/Experience/Unnam.png",
    initials: "ULF",
    desc: "Supported litigation strategy and assisted in precedent analysis."
  },
  {
    firm: "YLM Associates",
    role: "Legal Intern",
    duration: "Jul – Aug 2022, 2023",
    tag: "Litigation",
    logo: "/Experience/YLM.png",
    initials: "YLM",
    desc: "Drafted petitions and assisted in hearings and procedural work."
  },
  {
    firm: "Macaulay Law Chamber",
    role: "Legal Intern",
    duration: "Jul 2024",
    tag: "Litigation",
    logo: "/Experience/Macaulay.png",
    initials: "MLC",
    desc: "Drafted pleadings, affidavits, and legal notices."
  },
  {
    firm: "Aretha Legal",
    role: "Legal Intern",
    duration: "May – Jul 2023",
    tag: "Corporate",
    logo: "/Experience/Aretha.png",
    initials: "ARE",
    desc: "Worked on contracts and research across corporate and labour law."
  },
  {
    firm: "Regal-Whiz Solutions",
    role: "Legal Intern",
    duration: "Jun 2024",
    tag: "IPR",
    logo: "/Experience/Regalwhiz.png",
    initials: "RWS",
    desc: "Handled intellectual property advisory and trademark strategy."
  },
  {
    firm: "Juris Center",
    role: "Legal Intern",
    duration: "Jul – Aug 2023",
    tag: "Tech Law",
    logo: "/Experience/Juris Centre.png",
    initials: "JUR",
    desc: "Authored research on AI governance and regulatory frameworks."
  },
  {
    firm: "Suo Associates LLP",
    role: "Legal Intern",
    duration: "Jun – Jul 2023",
    tag: "Litigation",
    logo: "/Experience/Suo.png",
    initials: "SUO",
    desc: "Conducted judgment analysis and assisted in case documentation."
  },
  {
    firm: "M.V. Foundation",
    role: "Legal Intern",
    duration: "Jun – Jul 2022",
    tag: "Social Impact",
    logo: "/Experience/MV.png",
    initials: "MVF",
    desc: "Worked on social impact research and stakeholder reporting."
  },
];

function ExperienceCard({ item, index }: { item: typeof EXPERIENCE_DATA[number]; index: number }) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: (index % 6) * 0.05 }}
      className="h-full w-full group relative z-10 hover:z-20"
    >
      <div className="h-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-4 sm:p-5 rounded-2xl flex flex-col group-hover:border-[#D2042D]/40 dark:group-hover:border-red-900/60 group-hover:shadow-xl transition-all duration-500 md:group-hover:-translate-y-1">

        <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 bg-white border border-zinc-200 rounded-xl flex items-center justify-center p-1.5 shadow-sm group-hover:border-[#D2042D]/30 transition-colors duration-300">
            {!imgFailed ? (
              <img
                src={item.logo}
                alt={item.firm}
                className="w-full h-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                onError={() => setImgFailed(true)}
              />
            ) : (
              <span className="text-[8px] sm:text-[10px] font-black text-zinc-400 group-hover:text-[#D2042D] transition-colors duration-300">
                {item.initials}
              </span>
            )}
          </div>

          <div className="flex-1 min-w-0 pt-0.5">
            <div className="flex justify-between items-start gap-2">
              <span className="text-[8px] sm:text-[9px] text-[#D2042D] dark:text-red-500 uppercase font-black tracking-[0.2em] block line-clamp-1">
                {item.tag}
              </span>
              <span className="text-[7.5px] sm:text-[8px] bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-500 dark:text-zinc-400 px-1.5 py-0.5 rounded uppercase tracking-widest shrink-0 hidden xs:block">
                {item.duration}
              </span>
            </div>
            <h3 className="text-[13px] sm:text-[15px] font-bold leading-snug text-zinc-900 dark:text-zinc-50 mt-1 line-clamp-1 tracking-tight">
              {item.firm}
            </h3>
            <p className="text-[9px] sm:text-[10px] font-bold text-zinc-500 dark:text-zinc-400 mt-0.5 uppercase tracking-widest line-clamp-1">
              {item.role}
            </p>
          </div>
        </div>

        <div className="flex-1 min-h-0 pt-2 border-t border-zinc-100 dark:border-zinc-800/50">
          <p className="text-[10px] sm:text-[11.5px] text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium line-clamp-3">
            {item.desc}
          </p>
        </div>

      </div>
    </motion.div>
  );
}

export default function Experience() {
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

  const chunkSize = isMobile ? 3 : 6;
  const pages = [];
  for (let i = 0; i < EXPERIENCE_DATA.length; i += chunkSize) {
    pages.push(EXPERIENCE_DATA.slice(i, i + chunkSize));
  }

  return (
    <div className="w-full h-[100svh] flex flex-col bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300 overflow-hidden">
      <div className="w-full h-full max-w-7xl mx-auto flex flex-col px-6 md:px-10 py-6 md:py-10">

        {/* HEADER */}
        <div className="mb-5 md:mb-8 shrink-0">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-3">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-zinc-900 dark:text-white transition-colors duration-300">
                Professional <span className="text-[#D2042D]">Experience</span>
              </h2>
              <div className="flex items-center gap-3 mt-2 sm:mt-3">
                <div className="h-0.5 w-6 sm:w-8 bg-[#D2042D] rounded-full" />
                <p className="text-zinc-500 dark:text-zinc-400 text-[9px] sm:text-[11px] uppercase tracking-[0.25em] font-bold transition-colors duration-300">
                  {EXPERIENCE_DATA.length} Internships & Roles
                </p>
              </div>
            </div>

            {/* Bouncing Swipe Indicator */}
            {pages.length > 1 && (
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

        {/* CAROUSEL CONTAINER - Fixed the scrollbar completely here */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className={`flex-1 min-h-0 flex w-full overflow-x-auto pb-2 overscroll-x-contain touch-pan-x [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] ${isDragging ? 'snap-none cursor-grabbing' : 'snap-x snap-mandatory cursor-grab'}`}
        >
          {pages.map((pageItems, pageIndex) => (
            <div key={pageIndex} className="min-w-full w-full h-full snap-center shrink-0">
              {/* Dynamic Grid Layout */}
              <div className="w-full h-full grid grid-cols-1 md:grid-cols-3 grid-rows-3 md:grid-rows-2 gap-4 sm:gap-6">
                {pageItems.map((item, index) => (
                  <ExperienceCard key={index} item={item} index={index + (pageIndex * chunkSize)} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* PAGINATION DOTS */}
        {pages.length > 1 && (
          <div className="shrink-0 flex justify-center items-center gap-2.5 pt-4 md:pt-6 z-10 relative">
            {pages.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToPage(i)}
                className={`transition-all duration-500 rounded-full ${activePage === i
                    ? "w-10 h-1.5 bg-[#D2042D]"
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