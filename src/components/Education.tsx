"use client";

import { motion } from "framer-motion";

const EDUCATION_DATA = [
    {
        year: "2021 – 2026",
        degree: "BBA, LL.B. (Hons.)",
        institution: "VIT-AP University",
        category: "Undergraduate Degree",
        details: "CGPA: ~8.4/10. Recipient of the Academic Excellence Award for outstanding academic performance.",
        logo: "/Education/VIT.png",
        initials: "VIT",
    },
    {
        year: "2025",
        degree: "Diploma in Technology Law & Fintech Regulations",
        institution: "LawSikho",
        category: "Professional Certification",
        details: "Completed with an A Grade. Focused on technology contracts, fintech regulations, and compliance frameworks.",
        logo: "/Education/LAWSEIKHO.png",
        initials: "LS",
    },
    {
        year: "2019 – 2021",
        degree: "Class XII (Intermediate)",
        institution: "Sri Viswashanti Educational Institution",
        category: "APBIE Board",
        details: "Secured 86% with strong academic performance across core subjects.",
        logo: "/Education/BIEAP.png",
        initials: "BIEAP",
    },
    {
        year: "2018 – 2019",
        degree: "Class X (SSC)",
        institution: "Sri Chaitanya Techno School",
        category: "BSEAP Board",
        details: "Achieved 9.3 GPA, demonstrating consistent academic excellence.",
        logo: "/Education/BSEAP.png",
        initials: "BSEAP",
    },
];

export default function Education() {
    return (
        <section
            className="min-h-screen w-full flex flex-col justify-center px-4 md:px-12 lg:px-24 bg-white py-24 text-black"
            id="education"
        >
            <div className="max-w-7xl mx-auto w-full">

                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight">
                        Academic{" "}
                        <span className="text-[#D2042D]">
                            Foundation
                        </span>
                    </h2>

                    <p className="text-zinc-500 text-sm uppercase tracking-widest font-mono">
                        Degrees & Certifications
                    </p>
                </motion.div>

                {/* GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                    {EDUCATION_DATA.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.08 }}
                            className="group bg-white border border-zinc-200 p-6 rounded-xl flex gap-5 items-start 
                            transition-all duration-300 hover:border-[#D2042D]/40 hover:shadow-md"
                        >

                            {/* LOGO */}
                            <div className="w-14 h-14 shrink-0 bg-white border border-zinc-200 rounded-lg overflow-hidden flex items-center justify-center p-2 shadow-inner">
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
                                            parent.innerHTML = `<span style="color:#000;font-weight:800;font-size:10px;letter-spacing:0.05em">${item.initials}</span>`;
                                        }
                                    }}
                                />
                            </div>

                            {/* CONTENT */}
                            <div className="flex-1">
                                <span className="text-[#D2042D] text-[10px] font-bold tracking-widest uppercase mb-1 block">
                                    {item.category}
                                </span>

                                <h3 className="text-lg md:text-xl font-bold leading-tight mb-1">
                                    {item.degree}
                                </h3>

                                <h4 className="text-zinc-600 font-medium text-sm mb-2">
                                    {item.institution}
                                </h4>

                                <p className="text-[11px] font-mono text-zinc-400 uppercase tracking-widest mb-3">
                                    {item.year}
                                </p>

                                <p className="text-zinc-600 text-sm leading-relaxed">
                                    {item.details}
                                </p>
                            </div>

                        </motion.div>
                    ))}
                </div>

                {/* FOOTER */}
                <div className="mt-16 border-t border-zinc-200 pt-6">
                    <p className="text-zinc-500 text-[10px] uppercase tracking-widest font-mono">
                        Academic Excellence • Legal Education • Professional Certifications
                    </p>
                </div>

            </div>
        </section>
    );
}