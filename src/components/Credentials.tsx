"use client";

import { motion } from "framer-motion";

/* ---------------- DATA ---------------- */

const ACCOLADES = [
    {
        title: "Diploma in Technology Law & Fintech",
        issuer: "LawSikho",
        year: "2025",
        highlight: false,
    },
    {
        title: "All India Rank 6",
        issuer: "NTSE (LawSikho)",
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
        issuer: "GNLU",
        year: "2023",
        highlight: false,
    },
];

const MOOTS = [
    {
        role: "Speaker",
        event: "Verdictus Moot Court",
        desc: "MTP Act",
    },
    {
        role: "Speaker",
        event: "NLU Odisha Moot",
        desc: "Public Health Law",
    },
    {
        role: "Speaker",
        event: "KIIT Moot",
        desc: "Company Law",
    },
];

const LEADERSHIP = [
    {
        role: "Organizer",
        event: "National Conference, VIT-AP",
        desc: "Execution & Coordination",
    },
    {
        role: "Organizer",
        event: "Intra Moot Competition",
        desc: "Planning & Evaluation",
    },
    {
        role: "Mentor",
        event: "Moot Training",
        desc: "Student Guidance",
    },
];

/* ---------------- COMPONENT ---------------- */

export default function Credentials() {
    return (
        <section className="px-4 md:px-12 lg:px-24 bg-white py-24 text-black">

            <motion.div className="max-w-6xl mx-auto mb-12">
                <h2 className="text-4xl font-bold mb-3">
                    Credentials
                </h2>
                <p className="text-zinc-500 text-sm">
                    Recognition, advocacy experience, and leadership roles.
                </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

                <ListCard title="Accolades" items={ACCOLADES} type="accolade" />
                <ListCard title="Moot Courts" items={MOOTS} />
                <ListCard title="Leadership" items={LEADERSHIP} />

            </div>
        </section>
    );
}

/* ---------------- CARD ---------------- */

function ListCard({ title, items, type }) {
    return (
        <div className="bg-white border border-zinc-200 p-6 rounded-xl 
        hover:border-[#D2042D]/40 transition-all duration-300">

            <h3 className="text-sm font-bold mb-5 uppercase tracking-widest text-zinc-500">
                {title}
            </h3>

            <div className="space-y-5">
                {items.map((item, i) => (
                    <div key={i} className="group">

                        {/* ROLE */}
                        {"role" in item && (
                            <span className="text-[10px] text-[#D2042D] uppercase font-semibold">
                                {item.role}
                            </span>
                        )}

                        {/* TITLE */}
                        <h4 className={`text-sm font-semibold mt-1 
                            ${item.highlight ? "text-[#D2042D]" : "text-black"}
                        `}>
                            {item.title || item.event}
                        </h4>

                        {/* META */}
                        <p className="text-xs text-zinc-500 mt-1">
                            {item.issuer
                                ? `${item.issuer} • ${item.year}`
                                : item.desc}
                        </p>

                    </div>
                ))}
            </div>
        </div>
    );
}