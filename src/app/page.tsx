"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import Summary from "@/components/Summary";
import Experience from "@/components/Experience";
import Publications from "@/components/Publications";
import Conferences from "@/components/Conferences";
import Credentials from "@/components/Credentials";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Dock from "@/components/Dock";
import Preloader from "@/components/Preloader"; // 🚨 1. IMPORT THE PRELOADER

export default function Home() {
  // 🚨 2. STATE TO LOCK SCROLLING
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* 🚨 3. MOUNT THE PRELOADER */}
      {/* It will automatically unmount itself when the animation finishes */}
      <Preloader onComplete={() => setIsLoading(false)} />

      {/* ── THE MASTER APP CONTAINER ── */}
      {/* Notice the dynamic class at the end: we hide the scrollbar if isLoading is true */}
      <main
        className={`h-[100svh] w-screen snap-y snap-mandatory scroll-smooth bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-white relative transition-colors duration-500 
        ${isLoading ? 'overflow-hidden' : 'overflow-y-scroll'}`}
      >

        {/* ── SUBTLE GLOBAL BACKGROUND BLOBS ── */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-[30vw] h-[30vw] bg-[#D2042D]/5 dark:bg-[#D2042D]/10 rounded-full blur-[100px] transition-colors duration-500" />
          <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-[#D2042D]/5 dark:bg-[#D2042D]/10 rounded-full blur-[120px] transition-colors duration-500" />
        </div>

        {/* ── NAVIGATION DOCK ── */}
        <Dock />

        {/* ── CONTENT SECTIONS ── */}
        <div className="relative z-10 w-full h-full">
          <section id="home" className="snap-start h-[100svh]">
            <Hero />
          </section>

          <section id="summary" className="snap-start h-[100svh]">
            <Summary />
          </section>

          <section id="experience" className="snap-start h-[100svh]">
            <Experience />
          </section>

          <section id="publications" className="snap-start h-[100svh]">
            <Publications />
          </section>

          <section id="conferences" className="snap-start h-[100svh]">
            <Conferences />
          </section>

          <section id="credentials" className="snap-start h-[100svh]">
            <Credentials />
          </section>

          <section id="education" className="snap-start h-[100svh]">
            <Education />
          </section>

          <section id="contact" className="snap-start h-[100svh]">
            <Contact />
          </section>
        </div>

      </main>
    </>
  );
}