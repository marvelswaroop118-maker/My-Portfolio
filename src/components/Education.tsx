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

function EducationCard({ item, index }: { item: typeof EDUCATION_DATA[number]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.35, delay: index * 0.06 }}
      className="group bg-white border border-zinc-200 p-5 rounded-2xl flex gap-4 items-start hover:border-[#D2042D]/40 hover:shadow-md transition-all duration-300"
    >
      {/* LOGO */}
      <div className="w-12 h-12 shrink-0 bg-white border border-zinc-200 rounded-xl flex items-center justify-center p-2 shadow-sm">
        <img
          src={item.logo}
          alt={item.institution}
          className="w-full h-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition duration-300"
          onError={(e) => {
            const target = e.currentTarget;
            target.style.display = "none";
            const parent = target.parentElement;
            if (parent) {
              parent.innerHTML = `<span style="color:#000;font-weight:800;font-size:9px;text-align:center">${item.initials}</span>`;
            }
          }}
        />
      </div>

      {/* CONTENT */}
      <div className="flex-1 min-w-0">
        <span className="text-[9px] text-[#D2042D] font-bold uppercase tracking-widest block mb-1">
          {item.category}
        </span>
        <h3 className="text-sm font-bold leading-snug text-black">{item.degree}</h3>
        <p className="text-zinc-500 text-xs mt-0.5">{item.institution}</p>
        <p className="text-[9px] text-zinc-400 uppercase tracking-widest mt-1">{item.year}</p>
        <p className="text-xs text-zinc-500 mt-2 leading-relaxed">{item.details}</p>
      </div>
    </motion.div>
  );
}

export default function Education() {
  return (
    <div className="w-full h-screen flex flex-col bg-white text-black overflow-hidden">
      <div className="w-full max-w-7xl mx-auto flex flex-col h-full px-5 md:px-8 py-8 md:py-10">

        {/* HEADER */}
        <div className="mb-5 shrink-0">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">
            Academic <span className="text-[#D2042D]">Foundation</span>
          </h2>
          <p className="text-zinc-400 text-[10px] uppercase tracking-[0.15em] mt-1.5">
            Degrees & Certifications
          </p>
        </div>

        {/* CARDS */}
        <div className="flex-1 min-h-0 overflow-y-auto pb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {EDUCATION_DATA.map((item, i) => (
              <EducationCard key={i} item={item} index={i} />
            ))}
          </div>
        </div>

        {/* FOOTER */}
        <div className="mt-4 pt-3 border-t border-zinc-100 shrink-0">
          <p className="text-zinc-400 text-[9px] uppercase tracking-widest">
            Academic Excellence · Legal Education · Professional Certifications
          </p>
        </div>
      </div>
    </div>
  );
}
