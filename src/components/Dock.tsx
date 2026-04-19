"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

/* ---------------- ICONS ---------------- */

const Icons = {
  Home: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  ),
  Summary: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M9 21V9" />
    </svg>
  ),
  Work: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect width="20" height="14" x="2" y="7" rx="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  ),
  Book: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M2 3h6a4 4 0 0 1 4 4v14" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14" />
    </svg>
  ),
  Mic: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" x2="12" y1="19" y2="22" />
    </svg>
  ),
  Award: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <circle cx="12" cy="8" r="7" />
      <polyline points="8 14 7 22 12 19 17 22 16 14" />
    </svg>
  ),
  Education: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  ),
  Mail: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-10 6-10-6" />
    </svg>
  ),
};

/* ---------------- NAV ITEMS — ordered to match page sections ---------------- */

const ITEMS = [
  { icon: Icons.Home, href: "#home", label: "Home", desc: "Introduction" },
  { icon: Icons.Summary, href: "#summary", label: "Summary", desc: "At a Glance" },
  { icon: Icons.Work, href: "#experience", label: "Experience", desc: "Work & Internships" },
  { icon: Icons.Book, href: "#publications", label: "Publications", desc: "Research & Articles" },
  { icon: Icons.Mic, href: "#conferences", label: "Conferences", desc: "Talks & Presentations" },
  { icon: Icons.Award, href: "#credentials", label: "Credentials", desc: "Awards & Moots" },
  { icon: Icons.Education, href: "#education", label: "Education", desc: "Degrees & Certifications" },
  { icon: Icons.Mail, href: "#contact", label: "Contact", desc: "Get in Touch" },
];

/* ================= DESKTOP DOCK ================= */

function DesktopDock() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="hidden md:flex fixed right-6 top-1/2 -translate-y-1/2 z-50 flex-col gap-2">
      {ITEMS.map((item, i) => (
        <div
          key={i}
          className="relative flex items-center"
          onMouseEnter={() => setHoveredIndex(i)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {/* TOOLTIP — slides in from the right side, appears to the left */}
          <AnimatePresence>
            {hoveredIndex === i && (
              <motion.div
                initial={{ opacity: 0, x: 6, scale: 0.96 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 6, scale: 0.96 }}
                transition={{ duration: 0.14 }}
                className="absolute right-[54px] flex items-center gap-0 pointer-events-none"
              >
                <div className="bg-[#111111] border border-zinc-700/80 rounded-lg px-3 py-2 shadow-2xl whitespace-nowrap">
                  <p className="text-white text-[11px] font-bold leading-tight">
                    {item.label}
                  </p>
                  <p className="text-zinc-400 text-[10px] mt-0.5 leading-tight">
                    {item.desc}
                  </p>
                </div>
                {/* Arrow pointing right toward the icon */}
                <div
                  className="w-0 h-0 flex-shrink-0"
                  style={{
                    borderTop: "5px solid transparent",
                    borderBottom: "5px solid transparent",
                    borderLeft: "5px solid #3f3f46",
                  }}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* ICON BUTTON */}
          <Link href={item.href}>
            <motion.div
              animate={
                hoveredIndex === i
                  ? { scale: 1.12, x: -2 }
                  : { scale: 1, x: 0 }
              }
              transition={{ duration: 0.15 }}
              className={`w-11 h-11 flex items-center justify-center rounded-lg border shadow-sm cursor-pointer transition-colors duration-150
                ${hoveredIndex === i
                  ? "bg-[#D2042D] border-[#D2042D]"
                  : "bg-white border-zinc-200 hover:border-zinc-300"
                }`}
            >
              <item.icon
                className={`w-5 h-5 transition-colors duration-150 ${hoveredIndex === i ? "text-white" : "text-zinc-600"
                  }`}
              />
            </motion.div>
          </Link>
        </div>
      ))}
    </div>
  );
}

/* ================= MOBILE DOCK ================= */

function MobileDock() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full z-50">

      {/* BACKDROP */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* BOTTOM SHEET */}
      <motion.div
        initial={false}
        animate={{ y: open ? 0 : "100%" }}
        transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
        className="absolute bottom-0 left-0 w-full bg-white border-t border-zinc-100 rounded-t-2xl shadow-2xl px-5 pt-3 pb-10"
      >
        {/* Drag handle */}
        <div className="w-10 h-1 bg-zinc-200 rounded-full mx-auto mb-4" />

        <p className="text-[10px] text-zinc-400 uppercase tracking-[0.15em] mb-4 text-center font-medium">
          Navigate to
        </p>

        <div className="grid grid-cols-4 gap-y-5 gap-x-3">
          {ITEMS.map((item, i) => (
            <Link key={i} href={item.href} onClick={() => setOpen(false)}>
              <motion.div
                whileTap={{ scale: 0.93 }}
                className="flex flex-col items-center gap-1.5"
              >
                <div className="w-14 h-14 rounded-xl border border-zinc-200 bg-zinc-50 flex items-center justify-center active:bg-[#D2042D] active:border-[#D2042D] transition-colors group">
                  <item.icon className="w-6 h-6 text-zinc-600 group-active:text-white transition-colors" />
                </div>
                <p className="text-[11px] font-semibold text-zinc-800 text-center leading-tight">
                  {item.label}
                </p>
                <p className="text-[9px] text-zinc-400 text-center leading-tight">
                  {item.desc}
                </p>
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.div>

      {/* FAB TOGGLE */}
      <motion.button
        onClick={() => setOpen((v) => !v)}
        whileTap={{ scale: 0.92 }}
        className="fixed bottom-5 right-5 w-14 h-14 rounded-full bg-[#D2042D] text-white shadow-xl shadow-[#D2042D]/30 flex items-center justify-center z-50"
        aria-label="Toggle navigation"
      >
        <motion.svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="w-6 h-6"
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.22 }}
        >
          {open ? (
            <>
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </>
          ) : (
            <>
              <line x1="4" y1="7" x2="20" y2="7" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="17" x2="20" y2="17" />
            </>
          )}
        </motion.svg>
      </motion.button>

    </div>
  );
}

/* ================= EXPORT ================= */

export default function Dock() {
  return (
    <>
      <DesktopDock />
      <MobileDock />
    </>
  );
}
