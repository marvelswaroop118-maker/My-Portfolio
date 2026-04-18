"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import ScrollStack, { ScrollStackItem } from "./ScrollStack";
import "./ScrollStack.css";

/* ---------------- DATA ---------------- */

const EDUCATION_DATA = [
    {
        year: "2021 – 2026",
        degree: "BBA, LL.B. (Hons.)",
        institution: "VIT-AP University",
        category: "Undergraduate Degree",
        details:
            "CGPA: ~8.4/10. Recipient of the Academic Excellence Award for outstanding academic performance.",
        logo: "/Education/VIT.png",
        initials: "VIT",
    },
    {
        year: "2025",
        degree: "Diploma in Technology Law & Fintech Regulations",
        institution: "LawSikho",
        category: "Professional Certification",
        details:
            "Completed with an A Grade. Focused on technology contracts, fintech regulations, and compliance frameworks.",
        logo: "/Education/LAWSEIKHO.png",
        initials: "LS",
    },
    {
        year: "2019 – 2021",
        degree: "Class XII (Intermediate)",
        institution: "Sri Viswashanti Educational Institution",
        category: "APBIE Board",
        details:
            "Secured 86% with strong academic performance across core subjects.",
        logo: "/Education/BIEAP.png",
        initials: "BIEAP",
    },
    {
        year: "2018 – 2019",
        degree: "Class X (SSC)",
        institution: "Sri Chaitanya Techno School",
        category: "BSEAP Board",
        details:
            "Achieved 9.3 GPA, demonstrating consistent academic excellence.",
        logo: "/Education/BSEAP.png",
        initials: "BSEAP",
    },
];

/* ---------------- CARD ---------------- */

function EducationCard({ item, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: index * 0.05 }}
            className="group bg-white border border-zinc-200 p-5 rounded-xl flex gap-4 items-start 
      transition-all duration-300 hover:border-[#D2042D]/40 hover:shadow-sm"
        >
            {/* LOGO */}
            <div className="w-12 h-12 shrink-0 bg-white border border-zinc-200 rounded-lg flex items-center justify-center p-2 shadow-inner">
                <img
                    src={item.logo}
                    alt={item.institution}
                    className="w-full h-full object-contain grayscale opacity-70 
          transition duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                    onError={(e) => {
                        const target = e.currentTarget;
                        target.style.display = "none";
                        const parent = target.parentElement;
                        if (parent) {
                            parent.innerHTML = `<span style="color:#000;font-weight:800;font-size:10px">${item.initials}</span>`;
                        }
                    }}
                />
            </div>

            {/* CONTENT */}
            <div className="flex-1">
                <span className="text-[#D2042D] text-[10px] font-bold uppercase tracking-widest block mb-1">
                    {item.category}
                </span>

                <h3 className="text-sm md:text-base font-bold leading-tight">
                    {item.degree}
                </h3>

                <p className="text-zinc-600 text-xs mt-1">
                    {item.institution}
                </p>

                <p className="text-[10px] text-zinc-400 uppercase mt-1">
                    {item.year}
                </p>

                <p className="text-xs text-zinc-600 mt-2 leading-relaxed">
                    {item.details}
                </p>
            </div>
        </motion.div>
    );
}

/* ---------------- MAIN ---------------- */

export default function Education() {
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
                        Academic <span className="text-[#D2042D]">Foundation</span>
                    </h2>

                    <p className="text-zinc-500 text-xs uppercase tracking-widest mt-1">
                        Degrees & Certifications
                    </p>
                </div>

                {/* CONTENT */}
                <div className="flex-1 min-h-0">

                    {isTouch ? (
                        /* 📱 STACK */
                        <ScrollStack itemScale={0.04} itemStackDistance={18}>
                            {EDUCATION_DATA.map((item, i) => (
                                <ScrollStackItem key={i}>
                                    <EducationCard item={item} index={i} />
                                </ScrollStackItem>
                            ))}
                        </ScrollStack>
                    ) : (
                        /* 🖥 GRID */
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 h-full overflow-y-auto pr-2">
                            {EDUCATION_DATA.map((item, i) => (
                                <EducationCard key={i} item={item} index={i} />
                            ))}
                        </div>
                    )}

                </div>

                {/* FOOTER */}
                <div className="mt-4 border-t border-zinc-200 pt-3">
                    <p className="text-zinc-500 text-[10px] uppercase tracking-widest">
                        Academic Excellence • Legal Education • Professional Certifications
                    </p>
                </div>

            </div>
        </div>
    );
}