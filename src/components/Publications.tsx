"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

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
    link: "",
  },
  {
    title: "Strengthening Electoral Integrity in India",
    venue: "Indian Journal of Legal Research and Review",
    category: "Constitutional Law",
    link: "",
  },
  {
    title: "Faith, Fear & Fortitude: Terrorism, Religion & National Security",
    venue: "IIP Series",
    category: "National Security",
    link: "",
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
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      className="h-52 cursor-pointer"
      style={{ perspective: "1200px" }}
      onMouseEnter={() => !isTouch && setFlipped(true)}
      onMouseLeave={() => !isTouch && setFlipped(false)}
      onClick={handleClick}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.42 }}
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* FRONT */}
        <div
          className="absolute inset-0 bg-white border border-zinc-200 rounded-2xl p-4 flex flex-col shadow-sm"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="h-0.5 w-8 bg-[#D2042D] mb-3 rounded-full" />
          <span className="text-[9px] font-bold px-2 py-1 rounded-md bg-zinc-50 border border-zinc-200 text-[#D2042D] uppercase tracking-widest w-fit mb-2">
            {article.category}
          </span>
          <h3 className="text-xs font-bold text-black line-clamp-3 flex-1">
            {article.title}
          </h3>
          <div className="mt-auto">
            <p className="text-[9px] text-zinc-400 leading-snug">{article.venue}</p>
            <p className="text-[9px] text-zinc-300 uppercase tracking-widest mt-1.5">
              {isTouch ? "Tap to flip" : "Hover to explore"}
            </p>
          </div>
        </div>

        {/* BACK */}
        <div
          className="absolute inset-0 bg-[#D2042D] rounded-2xl p-4 flex flex-col items-center justify-center text-center"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <span className="text-white/60 text-[9px] uppercase tracking-widest font-semibold">
            {article.category}
          </span>
          <h4 className="text-white text-xs font-bold mt-2 line-clamp-4 leading-snug">
            {article.title}
          </h4>
          {hasLink ? (
            <a
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-[10px] font-bold uppercase tracking-widest border border-white/40 px-4 py-1.5 mt-4 rounded-full hover:bg-white/10 transition"
              onClick={(e) => e.stopPropagation()}
            >
              Read Now →
            </a>
          ) : (
            <span className="text-white/50 text-[9px] uppercase tracking-widest mt-4 border border-white/20 px-4 py-1.5 rounded-full">
              Coming Soon
            </span>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Publications() {
  return (
    <div className="w-full h-screen flex flex-col bg-white text-black overflow-hidden">
      <div className="w-full max-w-7xl mx-auto flex flex-col h-full px-5 md:px-8 py-8 md:py-10">

        {/* HEADER */}
        <div className="mb-5 shrink-0">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">
            Legal <span className="text-[#D2042D]">Scholarship</span>
          </h2>
          <p className="text-zinc-400 text-[10px] uppercase tracking-[0.15em] mt-1.5">
            Published Research & Articles
          </p>
        </div>

        {/* GRID — 2 cols on mobile, 4 on desktop */}
        <div className="flex-1 min-h-0 overflow-y-auto pb-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {PUBLICATIONS_DATA.map((article, i) => (
              <PublicationCard key={i} article={article} index={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
