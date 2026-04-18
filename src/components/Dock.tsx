"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

/* ---------------- ICONS ---------------- */

const Icons = {
  Home: (p) => <svg viewBox="0 0 24 24" {...p}><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>,
  Education: (p) => <svg viewBox="0 0 24 24" {...p}><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg>,
  Work: (p) => <svg viewBox="0 0 24 24" {...p}><rect width="20" height="14" x="2" y="7" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>,
  Book: (p) => <svg viewBox="0 0 24 24" {...p}><path d="M2 3h6a4 4 0 0 1 4 4v14" /><path d="M22 3h-6a4 4 0 0 0-4 4v14" /></svg>,
  Mic: (p) => <svg viewBox="0 0 24 24" {...p}><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /></svg>,
  Award: (p) => <svg viewBox="0 0 24 24" {...p}><circle cx="12" cy="8" r="7" /><polyline points="8 14 7 22 12 19 17 22 16 14" /></svg>,
  Mail: (p) => <svg viewBox="0 0 24 24" {...p}><rect width="20" height="16" x="2" y="4" /><path d="m22 7-10 6-10-6" /></svg>,
};

/* ---------------- NAV ITEMS ---------------- */

const ITEMS = [
  { icon: Icons.Home, href: "#home" },
  { icon: Icons.Education, href: "#education" },
  { icon: Icons.Work, href: "#experience" },
  { icon: Icons.Book, href: "#publications" },
  { icon: Icons.Mic, href: "#conferences" },
  { icon: Icons.Award, href: "#skills" },
  { icon: Icons.Mail, href: "#contact" },
];

/* ================= DESKTOP ================= */

function DesktopDock() {
  return (
    <div className="hidden md:flex fixed right-6 top-1/2 -translate-y-1/2 z-50 flex-col gap-3">

      {ITEMS.map((item, i) => (
        <Link key={i} href={item.href}>
          <div className="w-11 h-11 flex items-center justify-center rounded-lg 
          border border-zinc-200 bg-white shadow-sm 
          hover:bg-[#D2042D] hover:border-[#D2042D] group transition">

            <item.icon className="w-5 h-5 text-zinc-600 group-hover:text-white transition" />

          </div>
        </Link>
      ))}

    </div>
  );
}

/* ================= MOBILE ================= */

function MobileDock() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full z-50">

      {/* BACKDROP */}
      {open && (
        <div
          className="fixed inset-0 bg-black/30"
          onClick={() => setOpen(false)}
        />
      )}

      {/* MENU */}
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: open ? 0 : "100%" }}
        transition={{ duration: 0.3 }}
        className="bg-white border-t border-zinc-200 rounded-t-2xl p-6 shadow-2xl"
      >
        <div className="grid grid-cols-4 gap-4">

          {ITEMS.map((item, i) => (
            <Link key={i} href={item.href} onClick={() => setOpen(false)}>
              <div className="flex flex-col items-center gap-2">

                <div className="w-12 h-12 rounded-lg border border-zinc-200 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-zinc-700" />
                </div>

              </div>
            </Link>
          ))}

        </div>
      </motion.div>

      {/* TOGGLE BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="absolute bottom-4 right-4 w-14 h-14 rounded-full bg-[#D2042D] text-white shadow-lg flex items-center justify-center"
      >
        ☰
      </button>

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