"use client";

import { motion } from "framer-motion";

/* -------------------- DATA -------------------- */

const FEATURED = [
    {
        firm: "MLS & Co Law Firm",
        role: "Legal Intern / Associate Capacity",
        duration: "Jul 2025 – Apr 2026",
        tag: "Litigation",
        logo: "/Experience/Mls.png",
        initials: "MLS",
        desc: "Handled High Court matters across civil, criminal, corporate, and IP law. Drafted writ petitions, notices, and agreements while assisting in case strategy and pre-hearing research.",
    },
    {
        firm: "Fox & Mandal",
        role: "Legal Intern",
        duration: "Dec 2024 – Jan 2025",
        tag: "Corporate",
        logo: "/Experience/Fox.png",
        initials: "F&M",
        desc: "Drafted commercial agreements and conducted statutory research, contributing to legal opinions and structured litigation strategy.",
    },
    {
        firm: "Adv. Muralidhar Unnam",
        role: "Legal Intern",
        duration: "Feb – Apr 2024",
        tag: "Litigation",
        logo: "/Experience/Unnam.png",
        initials: "UNN",
        desc: "Conducted High Court-level research, prepared case briefs, assisted in filings, and contributed to client consultations and strategy discussions.",
    },
];

const ALL = [
    { firm: "Ragini Singh & Associates", logo: "/Experience/Ragini Singh.png", initials: "RSA", desc: "Researched SEBI and SCRA frameworks with focus on compliance and regulatory interpretation." },
    { firm: "RVK Law Associates", logo: "/Experience/RVK.png", initials: "RVK", desc: "Drafted pleadings and conducted case law research with courtroom exposure." },
    { firm: "Unnam Law Firm", logo: "/Experience/Unnam.png", initials: "ULF", desc: "Supported litigation strategy and assisted in precedent analysis." },
    { firm: "YLM Associates", logo: "/Experience/YLM.png", initials: "YLM", desc: "Drafted petitions and assisted in hearings and procedural work." },
    { firm: "Macaulay Law Chamber", logo: "/Experience/Macaulay.png", initials: "MLC", desc: "Drafted pleadings, affidavits, and legal notices." },
    { firm: "Aretha Legal", logo: "/Experience/Aretha.png", initials: "ARE", desc: "Worked on contracts and research across corporate and labour law." },
    { firm: "Regal-Whiz Solutions", logo: "/Experience/Regalwhiz.png", initials: "RWS", desc: "Handled intellectual property advisory and trademark strategy." },
    { firm: "Juris Center", logo: "/Experience/Juris Centre.png", initials: "JUR", desc: "Authored research on AI governance and regulatory frameworks." },
    { firm: "Suo Associates LLP", logo: "/Experience/Suo.png", initials: "SUO", desc: "Conducted judgment analysis and assisted in case documentation." },
    { firm: "M.V. Foundation", logo: "/Experience/MV.png", initials: "MVF", desc: "Worked on social impact research and stakeholder reporting." },
];

/* -------------------- LOGO -------------------- */

function Logo({ src, alt, initials }) {
    return (
        <div className="w-12 h-12 bg-white border border-zinc-200 rounded-lg flex items-center justify-center p-2 shadow-inner shrink-0">
            <img
                src={src}
                alt={alt}
                className="w-full h-full object-contain grayscale opacity-70 transition duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                onError={(e) => {
                    const img = e.currentTarget;
                    img.style.display = "none";
                    const parent = img.parentElement;
                    if (parent) {
                        const span = document.createElement("span");
                        span.className = "text-black font-bold text-xs";
                        span.innerText = initials;
                        parent.appendChild(span);
                    }
                }}
            />
        </div>
    );
}

/* -------------------- COMPONENT -------------------- */

export default function Experience() {
    return (
        <section className="px-4 md:px-12 lg:px-24 py-24 bg-white text-black" id="experience">
            <div className="max-w-6xl mx-auto">

                {/* HEADER */}
                <motion.div className="mb-12">
                    <h2 className="text-4xl font-bold mb-2">
                        Professional <span className="text-[#D2042D]">Experience</span>
                    </h2>
                    <p className="text-zinc-500 text-sm max-w-md">
                        Practical exposure across litigation, corporate advisory, and regulatory frameworks.
                    </p>
                </motion.div>

                {/* FEATURED */}
                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    {FEATURED.map((item, i) => (
                        <div
                            key={i}
                            className="group bg-white border border-zinc-200 p-7 rounded-xl 
                            transition-all duration-300 hover:border-[#D2042D]/50 hover:shadow-md hover:-translate-y-1"
                        >
                            <Logo src={item.logo} alt={item.firm} initials={item.initials} />

                            <span className="text-[10px] text-[#D2042D] uppercase font-semibold mt-4 block">
                                {item.tag}
                            </span>

                            <h3 className="text-lg font-bold mt-1">
                                {item.firm}
                            </h3>

                            <p className="text-xs text-zinc-500 mb-3">
                                {item.role} • {item.duration}
                            </p>

                            <p className="text-sm text-zinc-600 leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* ALL */}
                <div className="grid md:grid-cols-2 gap-5">
                    {ALL.map((item, i) => (
                        <div
                            key={i}
                            className="group flex gap-4 items-start bg-white border border-zinc-200 p-5 rounded-lg 
                            transition-all duration-300 hover:border-[#D2042D]/40 hover:shadow-sm hover:-translate-y-[2px]"
                        >
                            <Logo src={item.logo} alt={item.firm} initials={item.initials} />

                            <div>
                                <h4 className="text-sm font-semibold">
                                    {item.firm}
                                </h4>

                                <p className="text-xs text-zinc-600 mt-1 leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}