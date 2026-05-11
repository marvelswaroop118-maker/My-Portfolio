"use client";

import { motion, AnimatePresence, useScroll, useSpring, Variants } from "framer-motion";
import { useState, useEffect, useRef } from "react";

// The Complete 13 Internship Dataset
const EXPERIENCE_DATA = [
  {
    id: "mls",
    year: "2025-26",
    firm: "MLS & Co Law Firm",
    role: "Legal Intern / Associate Capacity",
    duration: "Jul 2025 – Apr 2026",
    tenure: "39 Weeks",
    tag: "Litigation",
    logo: "/Experience/Mls.png",
    initials: "MLS",
    desc: "Handled High Court matters across civil, criminal, corporate, and IP law. Drafted writ petitions, notices, and agreements.",
    inDepth: [
      "Drafted complex writ petitions, legal notices, and commercial agreements for High Court proceedings.",
      "Assisted senior counsel in formulating case strategies and conducting rigorous pre-hearing research.",
      "Navigated multifaceted matters across civil, criminal, corporate, and Intellectual Property jurisdictions.",
    ]
  },
  {
    id: "ragini",
    year: "2025",
    firm: "Ragini Singh & Associates",
    role: "Legal Intern",
    duration: "May – Nov 2025",
    tenure: "26 Weeks",
    tag: "Regulatory",
    logo: "/Experience/Ragini Singh.png",
    initials: "RSA",
    desc: "Researched SEBI and SCRA frameworks with focus on compliance and regulatory interpretation.",
    inDepth: [
      "Analyzed complex SEBI and SCRA regulatory frameworks for corporate compliance.",
      "Assisted in drafting regulatory filings and interpreting statutory shifts in financial law.",
      "Conducted deep-dive research into capital markets and securities regulations."
    ]
  },
  {
    id: "unnam",
    year: "2024",
    firm: "Adv. Muralidhar Unnam",
    role: "Legal Intern",
    duration: "Feb – Apr 2024",
    tenure: "8 Weeks",
    tag: "Litigation",
    logo: "/Experience/Unnam.png",
    initials: "UNN",
    desc: "Conducted High Court-level research, prepared case briefs, and contributed to client consultations.",
    inDepth: [
      "Conducted detailed precedent research for ongoing High Court litigation.",
      "Prepared comprehensive case briefs and assisted in the filing of critical motions.",
      "Participated actively in client consultations, taking notes and formulating strategic approaches."
    ]
  },
  {
    id: "aretha",
    year: "2023",
    firm: "Aretha Legal",
    role: "Legal Intern",
    duration: "May – Jul 2023",
    tenure: "8 Weeks",
    tag: "Corporate",
    logo: "/Experience/Aretha.png",
    initials: "ARE",
    desc: "Worked on contracts and research across corporate and labour law.",
    inDepth: [
      "Drafted and vetted employment contracts, NDAs, and corporate service agreements.",
      "Researched intersections of corporate governance and modern labour laws.",
      "Assisted in due diligence processes for corporate clients."
    ]
  },
  {
    id: "ylm",
    year: "2022-23",
    firm: "YLM Associates",
    role: "Legal Intern",
    duration: "Jul – Aug 2022, 2023",
    tenure: "8 Weeks",
    tag: "Litigation",
    logo: "/Experience/YLM.png",
    initials: "YLM",
    desc: "Drafted petitions and assisted in hearings and procedural work.",
    inDepth: [
      "Assisted in drafting civil and criminal petitions for local courts.",
      "Conducted case law research to support trial preparation and strategy.",
      "Managed procedural documentation and case filing logistics."
    ]
  },
  {
    id: "fox",
    year: "2024-25",
    firm: "Fox & Mandal",
    role: "Legal Intern",
    duration: "Dec 2024 – Jan 2025",
    tenure: "4 Weeks",
    tag: "Corporate",
    logo: "/Experience/Fox.png",
    initials: "F&M",
    desc: "Drafted commercial agreements and conducted statutory research, contributing to legal opinions.",
    inDepth: [
      "Specialized in corporate compliance and commercial agreement drafting.",
      "Conducted extensive statutory research to support the preparation of high-stakes legal opinions.",
      "Collaborated with corporate teams to structure and review litigation strategies."
    ]
  },
  {
    id: "rvk",
    year: "2025",
    firm: "RVK Law Associates",
    role: "Legal Intern",
    duration: "Jun 2025",
    tenure: "4 Weeks",
    tag: "Litigation",
    logo: "/Experience/RVK.png",
    initials: "RVK",
    desc: "Drafted pleadings and conducted case law research with courtroom exposure.",
    inDepth: [
      "Gained firsthand courtroom exposure by shadowing senior litigators.",
      "Drafted primary pleadings and conducted exhaustive case law research.",
    ]
  },
  {
    id: "macaulay",
    year: "2024",
    firm: "Macaulay Law Chamber",
    role: "Legal Intern",
    duration: "Jul 2024",
    tenure: "4 Weeks",
    tag: "Litigation",
    logo: "/Experience/Macaulay.png",
    initials: "MLC",
    desc: "Drafted pleadings, affidavits, and legal notices.",
    inDepth: [
      "Focused on the meticulous drafting of affidavits and official legal notices.",
      "Assisted in the preparation of document bundles and annexures for civil litigation.",
    ]
  },
  {
    id: "regalwhiz",
    year: "2024",
    firm: "Regal-Whiz Solutions",
    role: "Legal Intern",
    duration: "Jun 2024",
    tenure: "4 Weeks",
    tag: "IPR",
    logo: "/Experience/Regalwhiz.png",
    initials: "RWS",
    desc: "Handled intellectual property advisory and trademark strategy.",
    inDepth: [
      "Researched and drafted trademark opposition and application strategies.",
      "Advised on Intellectual Property Rights (IPR) portfolios for corporate clients.",
      "Conducted patent and trademark searches using global IP databases."
    ]
  },
  {
    id: "unnam_firm",
    year: "2023-24",
    firm: "Unnam Law Firm",
    role: "Legal Intern",
    duration: "Dec 2023 – Jan 2024",
    tenure: "4 Weeks",
    tag: "Litigation",
    logo: "/Experience/Unnam.png",
    initials: "ULF",
    desc: "Supported litigation strategy and assisted in precedent analysis.",
    inDepth: [
      "Drafted foundational pleadings and researched key civil law precedents.",
      "Assisted senior advocates in daily high-court filings and documentation.",
      "Observed courtroom proceedings to understand practical litigation strategy."
    ]
  },
  {
    id: "juris",
    year: "2023",
    firm: "Juris Center",
    role: "Legal Intern",
    duration: "Jul – Aug 2023",
    tenure: "4 Weeks",
    tag: "Tech Law",
    logo: "/Experience/Juris Centre.png",
    initials: "JUR",
    desc: "Authored research on AI governance and regulatory frameworks.",
    inDepth: [
      "Focused heavily on the emerging landscape of Artificial Intelligence and Tech Law.",
      "Authored extensive research memorandums on data privacy and digital governance.",
      "Analyzed international regulatory approaches to technological compliance."
    ]
  },
  {
    id: "suo",
    year: "2023",
    firm: "Suo Associates LLP",
    role: "Legal Intern",
    duration: "Jun – Jul 2023",
    tenure: "4 Weeks",
    tag: "Litigation",
    logo: "/Experience/Suo.png",
    initials: "SUO",
    desc: "Conducted judgment analysis and assisted in case documentation.",
    inDepth: [
      "Analyzed recent Supreme Court and High Court judgments for strategic application.",
      "Assisted in the preparation of detailed case briefs and legal summaries.",
      "Collaborated with the litigation team on drafting written arguments."
    ]
  },
  {
    id: "mv",
    year: "2022",
    firm: "M.V. Foundation",
    role: "Legal Intern",
    duration: "Jun – Jul 2022",
    tenure: "4 Weeks",
    tag: "Social Impact",
    logo: "/Experience/MV.png",
    initials: "MVF",
    desc: "Worked on social impact research and stakeholder reporting.",
    inDepth: [
      "Conducted legal research on child rights and social justice frameworks.",
      "Drafted reports and policy recommendations for stakeholder distribution.",
      "Assisted in field research and documentation for ongoing NGO initiatives."
    ]
  },
];

// Precision Metrics
const TIME_METRICS = [
  { value: "17.4M+", label: "Sec" },
  { value: "290K+", label: "Min" },
  { value: "4,840+", label: "Hrs" },
  { value: "121", label: "Wks" },
  { value: "2.3", label: "Yrs" },
];

// 🚨 FIX: Explicitly typed as Variants and moved OUTSIDE the component to prevent Vercel errors & re-render glitches
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any } }
};

export default function Experience() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  // Interaction & Error States
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [imgFailed, setImgFailed] = useState<Record<string, boolean>>({});

  // Modal States
  const [activeModalData, setActiveModalData] = useState<typeof EXPERIENCE_DATA[0] | null>(null);

  const { scrollXProgress } = useScroll({ container: scrollRef });
  const scaleX = useSpring(scrollXProgress, { stiffness: 100, damping: 20, restDelta: 0.001 });

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 1024);
      setIsTouch("ontouchstart" in window || navigator.maxTouchPoints > 0);
    };
    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  // Body scroll lock
  useEffect(() => {
    if (activeModalData) {
      document.body.style.overflow = "hidden";
      setIsAutoPlaying(false);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [activeModalData]);

  // Intelligent Auto-scroll Engine
  useEffect(() => {
    if (!isAutoPlaying || activeModalData) return;
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollRef.current.scrollBy({ left: isMobile ? window.innerWidth * 0.85 : 440, behavior: "smooth" });
        }
      }
    }, 3500);
    return () => clearInterval(interval);
  }, [isAutoPlaying, isMobile, activeModalData]);

  // Instantly hands over control to user
  const handleUserInteraction = () => setIsAutoPlaying(false);

  const scrollNext = () => {
    handleUserInteraction();
    scrollRef.current?.scrollBy({ left: isMobile ? window.innerWidth * 0.85 : 440, behavior: "smooth" });
  };

  const scrollPrev = () => {
    handleUserInteraction();
    scrollRef.current?.scrollBy({ left: -(isMobile ? window.innerWidth * 0.85 : 440), behavior: "smooth" });
  };

  // Instant open modal
  const handleCardInteraction = (index: number) => {
    handleUserInteraction();
    setActiveModalData(EXPERIENCE_DATA[index]);
  };

  return (
    <div className="relative w-full h-[100svh] bg-[#09090b] overflow-hidden flex flex-col font-sans">

      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)`, backgroundSize: "40px 40px" }} />
      <div className="absolute bottom-0 left-0 w-[400px] lg:w-[800px] h-[400px] lg:h-[800px] bg-[#D2042D]/5 rounded-full blur-[120px] pointer-events-none z-0 translate-y-1/4 -translate-x-1/4" />

      {/* ── MAIN LAYOUT WRAPPER ── */}
      <div className="relative z-10 w-full max-w-[90rem] mx-auto flex flex-col h-full pt-[12svh] lg:pt-[14svh] pb-[3svh] lg:pb-[6svh]">

        {/* ── HEADER AREA ── */}
        <div className="px-5 md:px-12 shrink-0">
          <motion.div variants={staggerContainer} initial="hidden" animate="show" className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 w-full">

            {/* Title & Metrics */}
            <div className="flex flex-col items-start w-full lg:w-auto">
              <motion.div variants={fadeUp} className="flex items-center gap-2 lg:gap-3 mb-2 lg:mb-4">
                <span className="w-6 lg:w-8 h-[2px] bg-[#D2042D]" />
                <p className="text-[9px] lg:text-[10px] text-zinc-400 uppercase tracking-[0.3em] font-bold">13 Internships Completed</p>
              </motion.div>

              <motion.h2 variants={fadeUp} className="text-[10vw] sm:text-5xl lg:text-[4.5rem] font-black leading-[0.95] tracking-tight uppercase mb-4 lg:mb-6">
                <span className="text-white block lg:inline">Professional</span>
                <span className="text-transparent [-webkit-text-stroke:1px_#D2042D] lg:[-webkit-text-stroke:1.5px_#D2042D] block lg:inline lg:ml-4">Experience</span>
              </motion.h2>

              {/* UNIFIED TIME-IN-SERVICE DASHBOARD (NO SCROLLING) */}
              <motion.div variants={fadeUp} className="w-full flex justify-between items-center bg-[#0c0c0e]/80 border border-zinc-800/80 rounded-xl p-2 sm:p-3 backdrop-blur-md">
                {TIME_METRICS.map((metric, i) => (
                  <div key={i} className="flex flex-col items-center flex-1 border-r border-zinc-800/50 last:border-0">
                    <span className="text-[#D2042D] font-black text-[10px] sm:text-sm">{metric.value}</span>
                    <span className="text-zinc-500 font-bold text-[7px] sm:text-[9px] uppercase tracking-widest mt-0.5">{metric.label}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Desktop Navigation Buttons */}
            <motion.div variants={fadeUp} className="hidden lg:flex items-center gap-3">
              <button onClick={scrollPrev} className="w-12 h-12 rounded-full border border-zinc-800 bg-[#0c0c0e] flex items-center justify-center text-zinc-400 hover:text-white hover:bg-[#D2042D] hover:border-[#D2042D] transition-all duration-300 shadow-md group">
                <svg className="w-5 h-5 group-active:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"></path></svg>
              </button>
              <button onClick={scrollNext} className="w-12 h-12 rounded-full border border-zinc-800 bg-[#0c0c0e] flex items-center justify-center text-zinc-400 hover:text-white hover:bg-[#D2042D] hover:border-[#D2042D] transition-all duration-300 shadow-md group">
                <svg className="w-5 h-5 group-active:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path></svg>
              </button>
            </motion.div>

          </motion.div>
        </div>

        {/* ── MOBILE ACTION BAR ── */}
        {isMobile && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="px-5 mt-4 flex items-center justify-between shrink-0">
            <div className="flex flex-col items-start gap-1">
              <div className="text-[#D2042D] text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2">
                Swipe Gallery
                <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}>→</motion.span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={scrollPrev} className="w-9 h-9 rounded-full border border-zinc-800 bg-[#0c0c0e] flex items-center justify-center text-zinc-400 active:bg-[#D2042D] transition-colors"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" /></svg></button>
              <button onClick={scrollNext} className="w-9 h-9 rounded-full border border-zinc-800 bg-[#0c0c0e] flex items-center justify-center text-zinc-400 active:bg-[#D2042D] transition-colors"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg></button>
            </div>
          </motion.div>
        )}

        {/* ── HORIZONTAL CAROUSEL ── */}
        <div className="flex-1 min-h-0 w-full relative mt-4" onMouseEnter={handleUserInteraction}>
          <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#09090b] to-transparent z-20 pointer-events-none" />
          <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#09090b] to-transparent z-20 pointer-events-none" />

          <div
            ref={scrollRef}
            onPointerDown={handleUserInteraction}
            onWheel={handleUserInteraction}
            onTouchStart={handleUserInteraction}
            className="w-full h-full flex overflow-x-auto snap-x snap-mandatory scrollbar-hide items-center px-5 md:px-12 gap-4 lg:gap-8 pb-4"
          >
            {EXPERIENCE_DATA.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9, x: 50 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.5, delay: (i % 5) * 0.05, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => handleCardInteraction(i)}
                className="relative snap-center shrink-0 w-[85vw] sm:w-[320px] lg:w-[400px] h-full max-h-[340px] lg:max-h-[380px] bg-[#0c0c0e]/80 backdrop-blur-xl border border-zinc-800/80 rounded-[2rem] p-5 lg:p-8 flex flex-col justify-between group overflow-hidden cursor-pointer hover:border-zinc-700"
              >
                {!isTouch && <div className="absolute inset-0 bg-gradient-to-br from-[#D2042D]/0 via-[#D2042D]/0 to-[#D2042D]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />}

                {/* Card Top: YEAR & TAG */}
                <div className="relative z-10 flex justify-between items-center mb-4 lg:mb-6">
                  <span className="text-zinc-400 text-[11px] lg:text-[13px] font-black tracking-[0.2em] uppercase">
                    {item.year}
                  </span>
                  <span className="bg-[#D2042D]/10 border border-[#D2042D]/20 text-[#D2042D] text-[9px] lg:text-[10px] font-black px-3 py-1.5 rounded-md uppercase tracking-widest shrink-0">
                    {item.tag}
                  </span>
                </div>

                {/* Logo & Firm Setup */}
                <div className="relative z-10 flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 lg:w-16 lg:h-16 bg-white border border-zinc-200 rounded-2xl flex items-center justify-center p-2 shadow-sm shrink-0">
                    {!imgFailed[item.id] ? (
                      <img
                        src={item.logo}
                        alt={item.firm}
                        className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                        onError={() => setImgFailed(prev => ({ ...prev, [item.id]: true }))}
                      />
                    ) : (
                      <span className="text-[12px] lg:text-[16px] font-black text-zinc-900 tracking-tighter">
                        {item.initials}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-xl lg:text-2xl font-black text-white leading-snug tracking-tight group-hover:text-[#D2042D] transition-colors line-clamp-2">
                      {item.firm}
                    </h3>
                  </div>
                </div>

                {/* Role Details */}
                <div className="relative z-10 flex flex-col mb-1">
                  <p className="text-[10px] lg:text-xs font-bold text-zinc-400 uppercase tracking-widest line-clamp-1">
                    {item.role} • {item.tenure}
                  </p>
                </div>

                {/* Description & Tap Prompt */}
                <div className="relative z-10 border-t border-zinc-800/50 pt-3 lg:pt-4 mt-2">
                  <p className="text-[11px] lg:text-sm text-zinc-500 leading-relaxed font-medium line-clamp-2 lg:line-clamp-3">
                    {item.desc}
                  </p>

                  <div className="mt-3 lg:mt-4 flex items-center gap-2 text-[#D2042D] text-[9px] font-black uppercase tracking-[0.2em]">
                    <span>Tap to view dossier</span>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </div>
                </div>
              </motion.div>
            ))}
            <div className="shrink-0 w-4 lg:w-12" />
          </div>
        </div>

        {/* ── SCROLL PROGRESS BAR ── */}
        <div className="px-5 md:px-12 mt-2 lg:mt-4 shrink-0">
          <div className="w-full max-w-[200px] mx-auto h-[2px] bg-zinc-800/50 rounded-full overflow-hidden">
            <motion.div style={{ scaleX, transformOrigin: "0%" }} className="h-full bg-[#D2042D] w-full" />
          </div>
        </div>

      </div>

      {/* ── THE DOSSIER MODAL (Glassmorphism Overlay) ── */}
      <AnimatePresence>
        {activeModalData && (
          <div className="fixed inset-0 z-[120] flex items-end lg:items-center justify-center p-0 lg:p-10">
            {/* Dark Backdrop */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setActiveModalData(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
            />

            {/* Modal Drawer/Box */}
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-2xl bg-[#0c0c0e] rounded-t-[2rem] lg:rounded-[2rem] border-t lg:border border-zinc-800 shadow-2xl overflow-hidden flex flex-col max-h-[85vh] lg:max-h-[90vh]"
            >
              <div className="p-5 md:p-8 bg-[#09090b] border-b border-zinc-800 flex justify-between items-start shrink-0">
                <div className="flex items-center gap-4 md:gap-6">
                  {/* Modal Logo Fallback */}
                  <div className="w-14 h-14 md:w-20 md:h-20 bg-white rounded-2xl flex items-center justify-center p-3 shrink-0 shadow-inner">
                    {!imgFailed[activeModalData.id] ? (
                      <img
                        src={activeModalData.logo}
                        alt={activeModalData.firm}
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <span className="text-[16px] md:text-[20px] font-black text-zinc-900 tracking-tighter">
                        {activeModalData.initials}
                      </span>
                    )}
                  </div>
                  <div>
                    <span className="bg-[#D2042D] text-white text-[8px] md:text-[9px] font-black px-2 py-1 rounded-sm uppercase tracking-widest mb-1.5 inline-block">
                      {activeModalData.tag}
                    </span>
                    <h2 className="text-lg sm:text-xl md:text-3xl font-black text-white leading-tight tracking-tight">
                      {activeModalData.firm}
                    </h2>
                    <p className="text-[9px] md:text-xs font-bold text-zinc-400 uppercase tracking-widest mt-1 line-clamp-1">
                      {activeModalData.role}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setActiveModalData(null)}
                  className="w-8 h-8 md:w-10 md:h-10 shrink-0 bg-zinc-900 border border-zinc-800 rounded-full flex items-center justify-center text-zinc-400 hover:text-white hover:bg-[#D2042D] hover:border-[#D2042D] transition-colors ml-2"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
              </div>

              <div className="p-5 md:p-8 overflow-y-auto scrollbar-hide">
                <div className="flex flex-wrap gap-3 md:gap-4 mb-6 md:mb-8">
                  <div className="flex-1 min-w-[120px] bg-zinc-900/50 border border-zinc-800/50 p-3 md:p-4 rounded-xl">
                    <p className="text-[8px] md:text-[9px] text-zinc-500 uppercase tracking-widest font-bold mb-1">Duration</p>
                    <p className="text-xs md:text-base text-zinc-200 font-bold truncate">{activeModalData.duration}</p>
                  </div>
                  <div className="flex-1 min-w-[120px] bg-zinc-900/50 border border-zinc-800/50 p-3 md:p-4 rounded-xl">
                    <p className="text-[8px] md:text-[9px] text-zinc-500 uppercase tracking-widest font-bold mb-1">Total Tenure</p>
                    <p className="text-xs md:text-base text-[#D2042D] font-black">{activeModalData.tenure}</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-[10px] md:text-xs font-black text-white uppercase tracking-[0.2em] mb-4 flex items-center gap-3">
                    <span className="w-4 h-[2px] bg-[#D2042D]"></span>
                    Key Deliverables & Exposure
                  </h3>
                  <ul className="flex flex-col gap-3 md:gap-4 pb-4">
                    {activeModalData.inDepth.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#D2042D] mt-1.5 md:mt-2 shrink-0" />
                        <p className="text-[11px] md:text-sm text-zinc-300 font-medium leading-relaxed">
                          {point}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}