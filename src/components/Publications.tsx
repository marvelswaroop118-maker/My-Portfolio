"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

/* ---------------- DATA ---------------- */

const PUBLICATIONS_DATA = [
    {
        title: "The Economic Impact of Criminal Law: Analyzing the Costs & Benefits of Criminal Justice Systems",
        venue: "International Journal of Law Management & Humanities (IJLMH)",
        category: "Criminal Law",
        color: "from-[#D2042D] to-red-500",
        link: "https://doij.org/10.10000/IJLMH.115981"
    },
    {
        title: "Planet in Peril: Climate Change, Health & Environmental Justice",
        venue: "Indian Journal of Law and Legal Research (IJLLR)",
        category: "Environmental Law",
        color: "from-[#D2042D] to-red-400",
        link: "https://www.ijllr.com/post/planet-in-peril-unveiling-the-nexus-of-climate-change-health-and-environmental-justice-through-gl"
    },
    {
        title: "Domestic Violence in India: Reality vs Statistics",
        venue: "White Black Legal International Law Journal",
        category: "Social Justice",
        color: "from-[#D2042D] to-red-600",
        link: "https://www.whiteblacklegal.co.in/details/domestic-violence-in-india--the-difference-between-statistic-and-the-real-picture-by-j-swaroop-choudary"
    },
    {
        title: "John Austin's Theory of Sovereignty in Modern Legal Systems",
        venue: "Indian Journal for Research in Law and Management",
        category: "Jurisprudence",
        color: "from-[#D2042D] to-red-700",
        link: "https://doi-ds.org/doilink/02.2024-45416615/IJRLM/VOL.1,ISSUE.4,JANUARY-2024/A02"
    },
    {
        title: "The Rise of AI in Corporate Law",
        venue: "DSNLU Journal of Science, Technology and Law",
        category: "Technology Law",
        color: "from-[#D2042D] to-red-500",
        link: "#"
    },
    {
        title: "Strengthening Electoral Integrity in India",
        venue: "Indian Journal of Legal Research and Review",
        category: "Constitutional Law",
        color: "from-[#D2042D] to-red-500",
        link: "#"
    },
    {
        title: "Faith, Fear & Fortitude: Terrorism, Religion & National Security",
        venue: "IIP Series",
        category: "National Security",
        color: "from-[#D2042D] to-red-800",
        link: "#"
    }
];

/* ---------------- CARD ---------------- */

function PublicationCard({ article, index }) {
    const [flipped, setFlipped] = useState(false);
    const [isTouch, setIsTouch] = useState(false);

    useEffect(() => {
        setIsTouch("ontouchstart" in window || navigator.maxTouchPoints > 0);
    }, []);

    const hasLink = article.link !== "#";

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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }} // Triggers animation as you scroll
            transition={{ duration: 0.35, delay: index * 0.04 }}
            className="h-48 cursor-pointer shrink-0" // shrink-0 is important for flex lists!
            style={{ perspective: "1200px" }}
            onMouseEnter={() => !isTouch && setFlipped(true)}
            onMouseLeave={() => !isTouch && setFlipped(false)}
            onClick={handleClick}
        >
            <motion.div
                animate={{ rotateY: flipped ? 180 : 0 }}
                transition={{ duration: 0.45 }}
                className="relative w-full h-full"
                style={{ transformStyle: "preserve-3d" }}
            >

                {/* FRONT */}
                <div
                    className="absolute inset-0 bg-white border border-zinc-200 rounded-xl flex flex-col p-4 shadow-sm"
                    style={{ backfaceVisibility: "hidden" }}
                >
                    <div className={`h-1 w-full bg-gradient-to-r ${article.color} mb-3`} />

                    <span className="text-[9px] font-bold px-2 py-1 rounded bg-zinc-100 text-[#D2042D] uppercase tracking-widest w-fit mb-2">
                        {article.category}
                    </span>

                    <h3 className="text-xs font-bold text-black line-clamp-3 mb-2">
                        {article.title}
                    </h3>

                    <p className="text-[10px] text-zinc-500 mt-auto">
                        {article.venue}
                    </p>

                    <p className="text-[9px] text-zinc-400 mt-2 uppercase tracking-widest">
                        {isTouch ? "Tap to flip" : "Hover to explore"}
                    </p>
                </div>

                {/* BACK */}
                <div
                    className="absolute inset-0 bg-[#D2042D] rounded-xl flex flex-col items-center justify-center text-center p-4"
                    style={{
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                    }}
                >
                    <span className="text-white/70 text-[9px] uppercase tracking-widest">
                        {article.category}
                    </span>

                    <h4 className="text-white text-xs font-bold mt-2 line-clamp-3">
                        {article.title}
                    </h4>

                    {hasLink ? (
                        <span className="text-white text-[10px] font-bold uppercase tracking-widest border border-white/40 px-3 py-1.5 mt-3 rounded-sm">
                            Read Now →
                        </span>
                    ) : (
                        <span className="text-white/60 text-[10px] uppercase mt-3">
                            Coming Soon
                        </span>
                    )}
                </div>

            </motion.div>
        </motion.div>
    );
}

/* ---------------- MAIN ---------------- */

export default function Publications() {
    return (
        <div className="relative w-full min-h-[100dvh] flex flex-col justify-center bg-white text-black py-16 lg:py-0">

            <div className="w-full max-w-7xl mx-auto flex flex-col h-[85vh] lg:h-[90vh]">

                {/* HEADER */}
                <div className="mb-6 px-5 md:px-8 shrink-0">
                    <h2 className="text-3xl md:text-5xl font-bold">
                        Legal <span className="text-[#D2042D]">Scholarship</span>
                    </h2>
                    <p className="text-zinc-500 text-xs uppercase tracking-widest mt-1">
                        Published Research & Articles
                    </p>
                </div>

                {/* CONTENT AREA */}
                <div className="flex-1 w-full relative overflow-hidden">

                    {/* DESKTOP GRID */}
                    <div className="hidden md:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 h-full overflow-y-auto px-8 pb-8">
                        {PUBLICATIONS_DATA.map((article, index) => (
                            <PublicationCard key={index} article={article} index={index} />
                        ))}
                    </div>

                    {/* MOBILE NATIVE SCROLL LIST (No more ScrollStack!) */}
                    <div className="md:hidden flex flex-col gap-4 w-full h-full overflow-y-auto px-5 pb-10">
                        {PUBLICATIONS_DATA.map((article, index) => (
                            <PublicationCard key={index} article={article} index={index} />
                        ))}
                    </div>

                </div>

            </div>
        </div>
    );
}