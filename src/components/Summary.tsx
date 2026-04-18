"use client";

import { motion } from "framer-motion";
import { useState } from "react";

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
            {
                title: "BBA LL.B (Hons.)",
                sub: "VIT-AP University",
                note: "2021–2026",
            },
            {
                title: "Diploma in Tech Law",
                sub: "LawSikho",
                note: "A Grade",
            },
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
            {
                title: "MLS & Co",
                sub: "High Court Work",
                note: "Litigation",
            },
            {
                title: "Fox & Mandal",
                sub: "Corporate Work",
                note: "Contracts",
            },
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
            {
                title: "AI Regulation",
                sub: "Corporate & Policy",
                note: "Emerging Tech",
            },
            {
                title: "Criminal Law",
                sub: "Economic Impact",
                note: "Published",
            },
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
            {
                title: "Verdictus Moot",
                sub: "MTP Act",
                note: "Speaker",
            },
            {
                title: "KIIT Moot",
                sub: "Company Law",
                note: "Speaker",
            },
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
            {
                title: "Contract Drafting",
                sub: "Corporate Work",
                note: "Practical",
            },
            {
                title: "Legal Research",
                sub: "Case Analysis",
                note: "Strong",
            },
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
            {
                title: "AI Governance",
                sub: "Tech Law",
                note: "Primary",
            },
            {
                title: "Data Protection",
                sub: "Privacy Law",
                note: "Core",
            },
        ],
    },
];

/* -------------------- CARD -------------------- */

function FlipCard({ card, index }) {
    const [flipped, setFlipped] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="h-64 cursor-pointer"
            style={{ perspective: "1200px" }}
            onClick={() => setFlipped(!flipped)}
        >
            <motion.div
                animate={{ rotateY: flipped ? 180 : 0 }}
                transition={{ duration: 0.5 }}
                className="relative w-full h-full"
                style={{ transformStyle: "preserve-3d" }}
            >

                {/* FRONT */}
                <div
                    className="absolute inset-0 rounded-xl bg-white border border-zinc-200 p-6 flex flex-col justify-between 
          hover:shadow-md transition-all"
                    style={{ backfaceVisibility: "hidden" }}
                >
                    <div>
                        <span className="text-[10px] text-zinc-500 uppercase tracking-widest">
                            {card.frontLabel}
                        </span>

                        <h3 className="text-xl font-bold mt-2">
                            {card.frontTitle}
                        </h3>
                    </div>

                    <div>
                        <div className="text-4xl font-bold text-[#D2042D] mb-1">
                            {card.frontStat}
                        </div>

                        <p className="text-zinc-500 text-xs uppercase tracking-widest">
                            {card.frontStatLabel}
                        </p>
                    </div>
                </div>

                {/* BACK */}
                <div
                    className="absolute inset-0 rounded-xl bg-white border border-[#D2042D]/30 p-6 flex flex-col"
                    style={{
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                    }}
                >
                    <h4 className="text-[11px] uppercase tracking-widest text-[#D2042D] mb-4">
                        {card.backTitle}
                    </h4>

                    <ul className="flex flex-col gap-3">
                        {card.backItems.map((item, i) => (
                            <li key={i} className="border-l-2 border-zinc-200 pl-3">
                                <p className="text-sm font-semibold">{item.title}</p>
                                <p className="text-xs text-zinc-500">{item.sub}</p>
                                <p className="text-[10px] text-zinc-400 uppercase">
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
        <section className="px-4 md:px-12 lg:px-24 py-28 bg-white text-black">
            <div className="max-w-7xl mx-auto">

                {/* HEADER */}
                <motion.div className="mb-6">
                    <h2 className="text-4xl md:text-5xl font-bold mb-2">
                        At a <span className="text-[#D2042D]">Glance</span>
                    </h2>

                    <p className="text-zinc-500 text-sm uppercase tracking-widest">
                        Tap each card to explore
                    </p>
                </motion.div>

                {/* INTRO */}
                <motion.p className="text-zinc-600 max-w-2xl mb-14 leading-relaxed">
                    Final-year BBA LL.B (Hons.) student with experience across litigation,
                    corporate law, intellectual property, and technology law.
                </motion.p>

                {/* GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {FLIP_CARDS.map((card, index) => (
                        <FlipCard key={card.id} card={card} index={index} />
                    ))}
                </div>

                {/* FOOTER */}
                <div className="mt-16 border-t border-zinc-200 pt-6">
                    <p className="text-zinc-500 text-[10px] uppercase tracking-widest">
                        Swaroop Choudary · Corporate · Litigation · IPR · Technology Law
                    </p>
                </div>

            </div>
        </section>
    );
}