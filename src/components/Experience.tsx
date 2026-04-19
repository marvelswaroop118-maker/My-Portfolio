"use client";

import ScrollStack, { ScrollStackItem } from "./ScrollStack";
import "./ScrollStack.css";

/* ─────────────────────────── DATA ─────────────────────────── */

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

/* ─────────────────────────── LOGO ─────────────────────────── */

function Logo({ src, alt, initials }: { src: string; alt: string; initials: string }) {
    return (
        <div className="w-11 h-11 bg-white border border-zinc-200 rounded-lg flex items-center justify-center p-2 shadow-inner shrink-0">
            <img
                src={src}
                alt={alt}
                className="w-full h-full object-contain grayscale opacity-70"
                onError={(e) => {
                    const img = e.currentTarget;
                    img.style.display = "none";
                    const span = document.createElement("span");
                    span.className = "text-black font-bold text-xs";
                    span.innerText = initials;
                    img.parentElement?.appendChild(span);
                }}
            />
        </div>
    );
}

/* ─────────────────────────── CARDS ─────────────────────────── */

function FeaturedCard({ item }: { item: typeof FEATURED[number] }) {
    return (
        <div className="bg-white border border-zinc-200 p-5 rounded-xl shadow-sm w-full">
            <Logo src={item.logo} alt={item.firm} initials={item.initials} />
            <span className="text-[10px] text-[#D2042D] uppercase font-semibold mt-3 block">
                {item.tag}
            </span>
            <h3 className="text-sm font-bold mt-1">{item.firm}</h3>
            <p className="text-[10px] text-zinc-500 mb-2">
                {item.role} • {item.duration}
            </p>
            <p className="text-xs text-zinc-600 leading-relaxed">{item.desc}</p>
        </div>
    );
}

function MiniCard({ item }: { item: typeof ALL[number] }) {
    return (
        <div className="flex gap-3 items-start bg-white border border-zinc-200 p-4 rounded-lg w-full">
            <Logo src={item.logo} alt={item.firm} initials={item.initials} />
            <div>
                <h4 className="text-xs font-semibold">{item.firm}</h4>
                <p className="text-[10px] text-zinc-600 mt-1 leading-relaxed">{item.desc}</p>
            </div>
        </div>
    );
}

/* ────────────────── SECTION HEADING CARD (mobile) ────────────────── */

function SectionHeadingCard({
    label,
    title,
    accent,
    subtitle,
}: {
    label?: string;
    title: string;
    accent: string;
    subtitle?: string;
}) {
    return (
        <div className="bg-white w-full py-3 px-1">
            {label && (
                <p className="text-[10px] text-zinc-400 uppercase tracking-widest mb-1">
                    {label}
                </p>
            )}
            <h2 className="text-2xl font-bold leading-tight">
                {title}{" "}
                <span className="text-[#D2042D]">{accent}</span>
            </h2>
            {subtitle && (
                <p className="text-zinc-500 text-xs mt-1 max-w-xs">{subtitle}</p>
            )}
        </div>
    );
}

/* ─────────────────────────── MAIN ─────────────────────────── */

export default function Experience() {
    return (
        // 1. Swapped to min-h-[100dvh] to prevent the mobile viewport from clipping
        <div className="relative w-full min-h-[100dvh] flex flex-col justify-center bg-white text-black overflow-hidden py-12 lg:py-0">

            {/* ── DESKTOP VIEW ── */}
            <div className="hidden md:flex w-full max-w-6xl mx-auto flex-col h-[90vh] px-8">

                {/* Page header */}
                <div className="mb-4 flex-shrink-0">
                    <h2 className="text-3xl md:text-5xl font-bold">
                        Professional <span className="text-[#D2042D]">Experience</span>
                    </h2>
                    <p className="text-zinc-500 text-sm max-w-md mt-2">
                        Practical exposure across litigation, corporate advisory, and regulatory frameworks.
                    </p>
                </div>

                <div className="flex-1 flex flex-col gap-4 min-h-0 overflow-y-auto pr-2 pb-8">
                    {/* Featured section */}
                    <div>
                        <h3 className="text-[11px] uppercase tracking-widest text-zinc-500 mb-3">
                            Featured Experience
                        </h3>
                        <div className="grid md:grid-cols-3 gap-4">
                            {FEATURED.map((item, i) => (
                                <FeaturedCard key={i} item={item} />
                            ))}
                        </div>
                    </div>

                    {/* Additional section */}
                    <div>
                        <h3 className="text-[11px] uppercase tracking-widest text-zinc-500 mb-3">
                            Additional Internships
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            {ALL.map((item, i) => (
                                <MiniCard key={i} item={item} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* ── MOBILE VIEW (100% Edge-to-Edge Touch Trap) ── */}
            <div className="md:hidden absolute inset-0 w-full h-full">
                <ScrollStack
                    itemDistance={80}
                    itemScale={0.03}
                    itemStackDistance={14}
                    stackPosition="18%"
                    scaleEndPosition="8%"
                    baseScale={0.88}
                    // 2. Padding moved inside the scroll area to create a massive touch target
                    className="w-full h-full px-5 pt-8 pb-10"
                >
                    {/* ── [0] Page header ── */}
                    <ScrollStackItem itemClassName="experience-heading-card">
                        <div className="bg-white w-full pt-2 pb-3 px-1">
                            <h2 className="text-2xl font-bold leading-tight">
                                Professional{" "}
                                <span className="text-[#D2042D]">Experience</span>
                            </h2>
                            <p className="text-zinc-500 text-xs mt-1 max-w-xs">
                                Practical exposure across litigation, corporate advisory, and regulatory frameworks.
                            </p>
                        </div>
                    </ScrollStackItem>

                    {/* ── [1] Featured heading ── */}
                    <ScrollStackItem itemClassName="experience-heading-card">
                        <SectionHeadingCard
                            label="Section 01"
                            title="Featured"
                            accent="Experience"
                        />
                    </ScrollStackItem>

                    {/* ── [2-4] Featured cards ── */}
                    {FEATURED.map((item, i) => (
                        <ScrollStackItem key={`featured-${i}`}>
                            <FeaturedCard item={item} />
                        </ScrollStackItem>
                    ))}

                    {/* ── [5] Additional heading ── */}
                    <ScrollStackItem itemClassName="experience-heading-card">
                        <SectionHeadingCard
                            label="Section 02"
                            title="Additional"
                            accent="Internships"
                            subtitle="10 internships across litigation, IP, and corporate law."
                        />
                    </ScrollStackItem>

                    {/* ── [6-15] Mini cards ── */}
                    {ALL.map((item, i) => (
                        <ScrollStackItem key={`all-${i}`}>
                            <MiniCard item={item} />
                        </ScrollStackItem>
                    ))}
                </ScrollStack>
            </div>
        </div>
    );
}