"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

/* -------------------- DATA -------------------- */

const FLIP_CARDS = [
    {
        id: "education",
        frontLabel: "Academic",
        frontTitle: "Foundation",
        frontStat: "8.4",
        frontStatLabel: "CGPA",
        backTitle: "Education",
        backItems: [
            { title: "BBA LL.B (Hons.)", sub: "VIT-AP University", note: "2021–2026" },
            { title: "Diploma in Tech Law", sub: "LawSikho", note: "A Grade" },
        ],
    },
    {
        id: "experience",
        frontLabel: "Experience",
        frontTitle: "Legal Exposure",
        frontStat: "10+",
        frontStatLabel: "Internships",
        backTitle: "Key Work",
        backItems: [
            { title: "MLS & Co", sub: "High Court Work", note: "Litigation" },
            { title: "Fox & Mandal", sub: "Corporate Work", note: "Contracts" },
        ],
    },
    {
        id: "research",
        frontLabel: "Research",
        frontTitle: "Publications",
        frontStat: "7+",
        frontStatLabel: "Papers",
        backTitle: "Focus Areas",
        backItems: [
            { title: "AI Regulation", sub: "Corporate & Policy", note: "Emerging Tech" },
            { title: "Criminal Law", sub: "Economic Impact", note: "Published" },
        ],
    },
    {
        id: "moots",
        frontLabel: "Advocacy",
        frontTitle: "Moot Courts",
        frontStat: "5+",
        frontStatLabel: "Appearances",
        backTitle: "Experience",
        backItems: [
            { title: "Verdictus Moot", sub: "MTP Act", note: "Speaker" },
            { title: "KIIT Moot", sub: "Company Law", note: "Speaker" },
        ],
    },
    {
        id: "skills",
        frontLabel: "Skills",
        frontTitle: "Core Strength",
        frontStat: "6+",
        frontStatLabel: "Key Areas",
        backTitle: "Capabilities",
        backItems: [
            { title: "Contract Drafting", sub: "Corporate Work", note: "Practical" },
            { title: "Legal Research", sub: "Case Analysis", note: "Strong" },
        ],
    },
    {
        id: "focus",
        frontLabel: "Focus",
        frontTitle: "Specialisation",
        frontStat: "3",
        frontStatLabel: "Domains",
        backTitle: "Areas",
        backItems: [
            { title: "AI Governance", sub: "Tech Law", note: "Primary" },
            { title: "Data Protection", sub: "Privacy Law", note: "Core" },
        ],
    },
];

/* -------------------- CARD -------------------- */

function FlipCard({ card, index }) {
    const [flipped, setFlipped] = useState(false);
    const [isTouch, setIsTouch] = useState(false);

    useEffect(() => {
        setIsTouch("ontouchstart" in window || navigator.maxTouchPoints > 0);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }} // Smoother animation trigger on mobile scroll
            transition={{ duration: 0.35, delay: index * 0.04 }}
            className="h-60 cursor-pointer shrink-0" // IMPORTANT: Prevents squishing in mobile lists
            style={{ perspective: "1200px" }}
            onMouseEnter={() => !isTouch && setFlipped(true)}
            onMouseLeave={() => !isTouch && setFlipped(false)}
            onClick={() => isTouch && setFlipped(!flipped)}
        >
            <motion.div
                animate={{ rotateY: flipped ? 180 : 0 }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
                className="relative w-full h-full"
                style={{ transformStyle: "preserve-3d" }}
            >
                {/* FRONT */}
                <div
                    className="absolute inset-0 rounded-xl bg-white border border-zinc-200 p-5 flex flex-col justify-between shadow-sm"
                    style={{ backfaceVisibility: "hidden" }}
                >
                    <div>
                        <span className="text-[10px] text-zinc-500 uppercase tracking-widest">
                            {card.frontLabel}
                        </span>
                        <h3 className="text-lg font-bold mt-2">{card.frontTitle}</h3>
                    </div>

                    <div>
                        <div className="text-3xl font-bold text-[#D2042D]">
                            {card.frontStat}
                        </div>
                        <p className="text-[10px] text-zinc-500 uppercase tracking-widest">
                            {card.frontStatLabel}
                        </p>
                    </div>
                </div>

                {/* BACK */}
                <div
                    className="absolute inset-0 rounded-xl bg-white border border-[#D2042D]/30 p-5 flex flex-col"
                    style={{
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                    }}
                >
                    <h4 className="text-[10px] uppercase tracking-widest text-[#D2042D] mb-3">
                        {card.backTitle}
                    </h4>

                    <ul className="flex flex-col gap-2">
                        {card.backItems.map((item, i) => (
                            <li key={i} className="border-l-2 border-zinc-200 pl-2">
                                <p className="text-xs font-semibold">{item.title}</p>
                                <p className="text-[10px] text-zinc-500">{item.sub}</p>
                                <p className="text-[9px] text-zinc-400 uppercase">
                                    {item.note}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </motion.div>
        </motion.div>
    );
}

/* -------------------- MAIN -------------------- */

export default function Summary() {
    return (
        <div className="relative w-full min-h-[100dvh] flex flex-col justify-center bg-white text-black py-16 lg:py-0">

            <div className="w-full max-w-6xl mx-auto flex flex-col h-[85vh] lg:h-[90vh]">

                {/* HEADER */}
                <div className="mb-3 px-5 md:px-8 shrink-0">
                    <h2 className="text-3xl md:text-5xl font-bold">
                        At a <span className="text-[#D2042D]">Glance</span>
                    </h2>
                    <p className="text-zinc-500 text-[10px] uppercase tracking-widest mt-1">
                        Tap or hover each card
                    </p>
                </div>

                {/* INTRO */}
                <p className="text-zinc-600 text-sm md:text-base max-w-xl mb-4 px-5 md:px-8 shrink-0">
                    Final-year BBA LL.B (Hons.) student with experience across litigation,
                    corporate law, intellectual property, and technology law.
                </p>

                {/* CONTENT AREA */}
                <div className="flex-1 w-full relative overflow-hidden">

                    {/* DESKTOP GRID */}
                    <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-5 h-full overflow-y-auto px-8 pb-8">
                        {FLIP_CARDS.map((card, index) => (
                            <FlipCard key={card.id} card={card} index={index} />
                        ))}
                    </div>

                    {/* MOBILE NATIVE SCROLL LIST (No more ScrollStack!) */}
                    <div className="md:hidden flex flex-col gap-5 w-full h-full overflow-y-auto px-5 pb-10 pt-2">
                        {FLIP_CARDS.map((card, index) => (
                            <FlipCard key={card.id} card={card} index={index} />
                        ))}
                    </div>

                </div>

                {/* FOOTER */}
                <div className="mt-4 border-t border-zinc-200 pt-3 px-5 md:px-8 shrink-0">
                    <p className="text-zinc-500 text-[9px] uppercase tracking-widest">
                        Swaroop Choudary · Corporate · Litigation · IPR · Technology Law
                    </p>
                </div>

            </div>
        </div>
    );
}