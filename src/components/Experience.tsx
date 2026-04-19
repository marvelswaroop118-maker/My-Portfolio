"use client";

import { motion } from "framer-motion";

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

function Logo({ src, alt, initials }: { src: string; alt: string; initials: string }) {
  return (
    <div className="w-10 h-10 bg-white border border-zinc-200 rounded-xl flex items-center justify-center p-1.5 shadow-sm shrink-0">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition duration-300"
        onError={(e) => {
          const img = e.currentTarget;
          img.style.display = "none";
          const span = document.createElement("span");
          span.style.cssText = "font-weight:800;font-size:9px;color:#000;text-align:center;line-height:1";
          span.innerText = initials;
          img.parentElement?.appendChild(span);
        }}
      />
    </div>
  );
}

function FeaturedCard({ item, index }: { item: typeof FEATURED[number]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      className="group bg-white border border-zinc-200 p-5 rounded-2xl hover:border-[#D2042D]/40 hover:shadow-md transition-all duration-300"
    >
      <div className="flex items-start gap-3 mb-3">
        <Logo src={item.logo} alt={item.firm} initials={item.initials} />
        <div className="flex-1 min-w-0">
          <span className="text-[9px] text-[#D2042D] uppercase font-bold tracking-widest block">{item.tag}</span>
          <h3 className="text-sm font-bold leading-tight mt-0.5 truncate">{item.firm}</h3>
          <p className="text-[10px] text-zinc-400 mt-0.5">{item.role} · {item.duration}</p>
        </div>
      </div>
      <p className="text-xs text-zinc-600 leading-relaxed">{item.desc}</p>
    </motion.div>
  );
}

function MiniCard({ item, index }: { item: typeof ALL[number]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.3, delay: index * 0.03 }}
      className="group flex gap-3 items-start bg-white border border-zinc-200 p-4 rounded-xl hover:border-[#D2042D]/30 hover:shadow-sm transition-all duration-300"
    >
      <Logo src={item.logo} alt={item.firm} initials={item.initials} />
      <div className="min-w-0">
        <h4 className="text-xs font-bold text-black leading-tight">{item.firm}</h4>
        <p className="text-[10px] text-zinc-500 mt-1 leading-relaxed">{item.desc}</p>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <div className="w-full h-screen flex flex-col bg-white text-black overflow-hidden">
      <div className="w-full max-w-6xl mx-auto flex flex-col h-full px-5 md:px-8 py-8 md:py-10">

        {/* HEADER */}
        <div className="mb-5 shrink-0">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">
            Professional <span className="text-[#D2042D]">Experience</span>
          </h2>
          <p className="text-zinc-500 text-xs md:text-sm mt-1.5">
            Practical exposure across litigation, corporate advisory, and regulatory frameworks.
          </p>
        </div>

        {/* SCROLLABLE CONTENT */}
        <div className="flex-1 min-h-0 overflow-y-auto pb-6">
          <div className="space-y-8">

            {/* Featured */}
            <div>
              <p className="text-[10px] text-zinc-400 uppercase tracking-[0.15em] font-semibold mb-3">
                Featured Experience
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {FEATURED.map((item, i) => (
                  <FeaturedCard key={i} item={item} index={i} />
                ))}
              </div>
            </div>

            {/* Additional */}
            <div>
              <p className="text-[10px] text-zinc-400 uppercase tracking-[0.15em] font-semibold mb-3">
                Additional Internships
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-3">
                {ALL.map((item, i) => (
                  <MiniCard key={i} item={item} index={i} />
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
