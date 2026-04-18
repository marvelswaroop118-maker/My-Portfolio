"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import ScrollStack, { ScrollStackItem } from "./ScrollStack";
import "./ScrollStack.css";

/* ---------------- DATA ---------------- */

const CONFERENCE_DATA = [
    { title: "AI Governance in India", venue: "Amity University, Noida", type: "International", brief: "AI Regulation" },
    { title: "Role of India in AI Regulation", venue: "NMIMS Mumbai", type: "International", brief: "Policy Control" },
    { title: "AI Regulatory Landscape", venue: "AMU", type: "International", brief: "Regulatory Mapping" },
    { title: "Child Abuse, Religion & Caste", venue: "NMIMS Indore", type: "International", brief: "Social Justice" },
    { title: "GI & IPR Development", venue: "Dr. RKB Law College", type: "International", brief: "IP Development" },
    { title: "ADR Effectiveness", venue: "Kerala Law Academy", type: "International", brief: "Dispute Efficiency" },
    { title: "Privacy & Data Protection", venue: "MNLU Nagpur", type: "International", brief: "Data Protection" },
    { title: "Trade Secrets vs Rights", venue: "CUSAT", type: "International", brief: "Corporate Rights" },
    { title: "Climate Change & Justice", venue: "NMIMS Bangalore", type: "International", brief: "Environmental Justice" },
    { title: "CSR in AI Era", venue: "NMIMS", type: "National", brief: "Ethical Governance" },
    { title: "Indian Federalism", venue: "Govt Law College", type: "National", brief: "Constitutional Balance" },
];

/* ---------------- CARD ---------------- */

function ConferenceCard({ conf, index }) {
    const [flipped, setFlipped] = useState(false);
    const [isTouch, setIsTouch] = useState(false);

    useEffect(() => {
        setIsTouch("ontouchstart" in window || navigator.maxTouchPoints > 0);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: index * 0.04 }}
            className="h-40 cursor-pointer"
            style={{ perspective: "1000px" }}
            onMouseEnter={() => !isTouch && setFlipped(true)}
            onMouseLeave={() => !isTouch && setFlipped(false)}
            onClick={() => isTouch && setFlipped(!flipped)}
        >
            <motion.div
                animate={{ rotateY: flipped ? 180 : 0 }}
                transition={{ duration: 0.45 }}
                className="relative w-full h-full"
                style={{ transformStyle: "preserve-3d" }}
            >

                {/* FRONT */}
                <div
                    className="absolute inset-0 bg-white border border-zinc-200 rounded-xl p-4 flex flex-col justify-between shadow-sm"
                    style={{ backfaceVisibility: "hidden" }}
                >
                    <span className="text-[9px] text-[#D2042D] font-bold uppercase tracking-widest">
                        {conf.type}
                    </span>

                    <h3 className="text-xs font-bold leading-snug text-black">
                        {conf.title}
                    </h3>

                    <p className="text-[10px] text-zinc-500">
                        {conf.venue}
                    </p>

                    <p className="text-[9px] text-zinc-400 uppercase tracking-widest mt-1">
                        {isTouch ? "Tap to flip" : "Hover to explore"}
                    </p>
                </div>

                {/* BACK */}
                <div
                    className="absolute inset-0 bg-[#D2042D] text-white rounded-xl p-4 flex flex-col items-center justify-center text-center"
                    style={{
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                    }}
                >
                    <p className="text-[9px] uppercase tracking-widest text-white/70">
                        Focus Area
                    </p>

                    <h4 className="text-sm font-bold mt-1">
                        {conf.brief}
                    </h4>

                    <p className="text-white/60 text-[10px] mt-1">
                        {conf.venue}
                    </p>
                </div>

            </motion.div>
        </motion.div>
    );
}

/* ---------------- MAIN ---------------- */

export default function Conferences() {
    const [isTouch, setIsTouch] = useState(false);

    useEffect(() => {
        setIsTouch("ontouchstart" in window || navigator.maxTouchPoints > 0);
    }, []);

    return (
        <div className="h-full w-full flex items-center justify-center overflow-hidden bg-white text-black">

            <div className="w-full max-w-7xl h-[90vh] flex flex-col px-4 md:px-8">

                {/* HEADER */}
                <div className="mb-4">
                    <h2 className="text-3xl md:text-5xl font-bold">
                        Conferences &{" "}
                        <span className="text-[#D2042D]">Presentations</span>
                    </h2>

                    <p className="text-zinc-500 text-xs uppercase tracking-widest mt-1">
                        National & International Platforms
                    </p>
                </div>

                {/* CONTENT */}
                <div className="flex-1 min-h-0">

                    {isTouch ? (
                        /* 📱 MOBILE STACK */
                        <ScrollStack itemScale={0.04} itemStackDistance={16}>
                            {CONFERENCE_DATA.map((conf, i) => (
                                <ScrollStackItem key={i}>
                                    <ConferenceCard conf={conf} index={i} />
                                </ScrollStackItem>
                            ))}
                        </ScrollStack>
                    ) : (
                        /* 🖥 RESPONSIVE GRID */
                        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 h-full overflow-y-auto pr-2">
                            {CONFERENCE_DATA.map((conf, i) => (
                                <ConferenceCard key={i} conf={conf} index={i} />
                            ))}
                        </div>
                    )}

                </div>

            </div>
        </div>
    );
}