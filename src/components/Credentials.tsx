"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import ScrollStack, { ScrollStackItem } from "./ScrollStack";
import "./ScrollStack.css";

/* ---------------- DATA ---------------- */

const ACCOLADES = [
    {
        title: "Diploma in Technology Law & Fintech",
        issuer: "LawSikho",
        year: "2025",
    },
    {
        title: "All India Rank 6",
        issuer: "National Talent Search Examination (LawSikho)",
        year: "2024",
        highlight: true,
    },
    {
        title: "All India Rank 24",
        issuer: "National Law Olympiad",
        year: "2023",
        highlight: true,
    },
    {
        title: "Best Essay Award",
        issuer: "Gujarat National Law University",
        year: "2023",
    },
];

const MOOTS = [
    {
        role: "Speaker",
        event: "Verdictus Moot Court Competition",
        desc: "Medical Termination of Pregnancy Act",
    },
    {
        role: "Speaker",
        event: "NLU Odisha Moot Court Competition",
        desc: "Public Health Law",
    },
    {
        role: "Speaker",
        event: "KIIT Moot Court Competition",
        desc: "Company Law",
    },
];

const LEADERSHIP = [
    {
        role: "Organizer",
        event: "National Conference, VIT-AP",
        desc: "End-to-end coordination and execution",
    },
    {
        role: "Organizer",
        event: "Intra Moot Court Competition",
        desc: "Planning, logistics, and evaluation",
    },
    {
        role: "Mentor",
        event: "Moot Court Training",
        desc: "Guided students in research and advocacy",
    },
];

const ACHIEVEMENTS = [
    {
        title: "Hindi Language Proficiency Certifications",
        desc: "Successfully completed advanced Hindi examinations, including Praveen and higher levels.",
    },
    {
        title: "Black Belt in Shotokan Karate",
        desc: "Achieved black belt certification, reflecting discipline and advanced martial arts training.",
    },
    {
        title: "State-Level Medalist in Kickboxing",
        desc: "Recognized at the state level for competitive performance in kickboxing.",
    },
    {
        title: "Typewriting Certification (Lower Grade)",
        desc: "Certified in lower-grade typewriting, demonstrating speed and accuracy.",
    },
];

/* ---------------- MAIN ---------------- */

export default function Credentials() {
    const [isTouch, setIsTouch] = useState(false);

    useEffect(() => {
        setIsTouch("ontouchstart" in window || navigator.maxTouchPoints > 0);
    }, []);

    const cards = [
        { title: "Accolades", items: ACCOLADES },
        { title: "Moot Courts", items: MOOTS },
        { title: "Leadership", items: LEADERSHIP },
        { title: "Personal Achievements", items: ACHIEVEMENTS },
    ];

    return (
        <div className="h-full w-full flex items-center justify-center overflow-hidden bg-white text-black">
            <div className="w-full max-w-7xl h-[90vh] flex flex-col px-4 md:px-8">

                {/* HEADER */}
                <div className="mb-4">
                    <h2 className="text-3xl md:text-5xl font-bold">
                        Credentials & <span className="text-[#D2042D]">Recognition</span>
                    </h2>
                    <p className="text-zinc-500 text-xs uppercase tracking-widest mt-1">
                        Achievements, Advocacy & Leadership
                    </p>
                </div>

                {/* CONTENT */}
                <div className="flex-1 min-h-0">
                    {isTouch ? (
                        <ScrollStack itemScale={0.04} itemStackDistance={18}>
                            {cards.map((card, i) => (
                                <ScrollStackItem key={i}>
                                    <ListCard {...card} />
                                </ScrollStackItem>
                            ))}
                        </ScrollStack>
                    ) : (
                        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 h-full overflow-y-auto pr-2">
                            {cards.map((card, i) => (
                                <ListCard key={i} {...card} />
                            ))}
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
}

/* ---------------- CARD ---------------- */

function ListCard({ title, items }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="bg-white border border-zinc-200 p-5 rounded-xl 
      hover:border-[#D2042D]/40 transition-all duration-300"
        >
            <h3 className="text-[11px] font-bold mb-4 uppercase tracking-widest text-zinc-500">
                {title}
            </h3>

            <div className="space-y-4">
                {items.map((item, i) => (
                    <div key={i}>

                        {/* ROLE */}
                        {"role" in item && (
                            <span className="text-[10px] text-[#D2042D] uppercase font-semibold">
                                {item.role}
                            </span>
                        )}

                        {/* TITLE */}
                        <h4
                            className={`text-sm font-semibold mt-1 ${item.highlight ? "text-[#D2042D]" : "text-black"
                                }`}
                        >
                            {item.title || item.event}
                        </h4>

                        {/* META */}
                        <p className="text-[11px] text-zinc-500 mt-1">
                            {item.issuer
                                ? `${item.issuer} • ${item.year}`
                                : item.desc}
                        </p>

                    </div>
                ))}
            </div>
        </motion.div>
    );
}