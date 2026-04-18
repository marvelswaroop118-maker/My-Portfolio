"use client";

import { motion } from "framer-motion";

const CONFERENCE_DATA = [
    {
        title: "AI Governance in India",
        venue: "Amity University, Noida",
        type: "International",
        brief: "AI Regulation",
    },
    {
        title: "Role of India in AI Regulation",
        venue: "NMIMS Mumbai",
        type: "International",
        brief: "Policy Control",
    },
    {
        title: "AI Regulatory Landscape",
        venue: "AMU",
        type: "International",
        brief: "Regulatory Mapping",
    },
    {
        title: "Child Abuse, Religion & Caste",
        venue: "NMIMS Indore",
        type: "International",
        brief: "Social Justice",
    },
    {
        title: "GI & IPR Development",
        venue: "Dr. RKB Law College",
        type: "International",
        brief: "IP Development",
    },
    {
        title: "ADR Effectiveness",
        venue: "Kerala Law Academy",
        type: "International",
        brief: "Dispute Efficiency",
    },
    {
        title: "Privacy & Data Protection",
        venue: "MNLU Nagpur",
        type: "International",
        brief: "Data Protection",
    },
    {
        title: "Trade Secrets vs Rights",
        venue: "CUSAT",
        type: "International",
        brief: "Corporate Rights",
    },
    {
        title: "Climate Change & Justice",
        venue: "NMIMS Bangalore",
        type: "International",
        brief: "Environmental Justice",
    },
    {
        title: "CSR in AI Era",
        venue: "NMIMS",
        type: "National",
        brief: "Ethical Governance",
    },
    {
        title: "Indian Federalism",
        venue: "Govt Law College",
        type: "National",
        brief: "Constitutional Balance",
    },
];

/* ---------------- COMPONENT ---------------- */

export default function Conferences() {
    return (
        <section className="bg-white text-black px-4 md:px-12 py-24" id="conferences">
            <div className="max-w-6xl mx-auto">

                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mb-12"
                >
                    <h2 className="text-4xl font-bold mb-2">
                        Conferences &{" "}
                        <span className="text-[#D2042D]">
                            Presentations
                        </span>
                    </h2>

                    <p className="text-zinc-500 text-sm uppercase tracking-widest">
                        National & International Platforms
                    </p>
                </motion.div>

                {/* GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

                    {CONFERENCE_DATA.map((conf, i) => (
                        <div
                            key={i}
                            className="group [perspective:1000px]"
                        >
                            <div className="relative h-40 w-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                                {/* FRONT */}
                                <div className="absolute inset-0 bg-white border border-zinc-200 rounded-xl p-5 
                [backface-visibility:hidden] flex flex-col justify-between">

                                    <span className="text-[10px] text-[#D2042D] font-bold uppercase">
                                        {conf.type}
                                    </span>

                                    <h3 className="text-sm font-bold leading-snug">
                                        {conf.title}
                                    </h3>

                                    <p className="text-xs text-zinc-500">
                                        {conf.venue}
                                    </p>

                                </div>

                                {/* BACK */}
                                <div className="absolute inset-0 bg-[#D2042D] text-white rounded-xl p-5 
                [transform:rotateY(180deg)] [backface-visibility:hidden] 
                flex flex-col items-center justify-center text-center">

                                    <p className="text-xs uppercase tracking-widest mb-2">
                                        Focus
                                    </p>

                                    <h4 className="text-lg font-bold">
                                        {conf.brief}
                                    </h4>

                                </div>

                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}