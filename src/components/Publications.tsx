"use client";

import { motion } from "framer-motion";

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

export default function Publications() {
    return (
        <section className="px-4 md:px-12 lg:px-24 py-24 bg-white text-black" id="publications">
            <div className="max-w-7xl mx-auto">

                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight">
                        Legal{" "}
                        <span className="text-[#D2042D]">
                            Scholarship
                        </span>
                    </h2>

                    <p className="text-zinc-500 text-sm font-mono uppercase tracking-widest">
                        Published Research & Articles
                    </p>
                </motion.div>

                {/* GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                    {PUBLICATIONS_DATA.map((article, index) => (
                        <motion.a
                            key={index}
                            href={article.link !== "#" ? article.link : undefined}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            className="group relative bg-white border border-zinc-200 rounded-xl flex flex-col 
              hover:border-[#D2042D]/50 transition-all shadow-sm overflow-hidden"
                        >

                            {/* Top Accent */}
                            <div className={`h-1 w-full bg-gradient-to-r ${article.color}`} />

                            {/* CONTENT */}
                            <div className="p-5 flex flex-col h-full">

                                {/* Category */}
                                <span className="text-[10px] font-bold px-2.5 py-1 rounded bg-zinc-100 text-[#D2042D] border border-zinc-200 uppercase tracking-widest w-fit mb-3">
                                    {article.category}
                                </span>

                                {/* Title */}
                                <h3 className="text-sm md:text-base font-bold text-black mb-2 leading-snug">
                                    {article.title}
                                </h3>

                                {/* Venue */}
                                <p className="text-zinc-600 text-xs mb-4 flex-1">
                                    {article.venue}
                                </p>
                            </div>

                            {/* HOVER OVERLAY */}
                            {article.link !== "#" && (
                                <div className="absolute inset-0 bg-white/95 flex items-center justify-center 
                opacity-0 group-hover:opacity-100 transition duration-300">
                                    <span className="text-[#D2042D] text-xs font-bold uppercase tracking-widest">
                                        View Now →
                                    </span>
                                </div>
                            )}

                        </motion.a>
                    ))}

                </div>

            </div>
        </section>
    );
}