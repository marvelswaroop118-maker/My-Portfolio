"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import Summary from "@/components/Summary";
import Expertise from "@/components/Expertise";
import Experience from "@/components/Experience";
import Publications from "@/components/Publications";
import Speaking from "@/components/Speaking";
import Leadership from "@/components/Leadership";
import Advocacy from "@/components/Advocacy";
import Accolades from "@/components/Accolades";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Preloader from "@/components/Preloader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <Preloader onComplete={() => setIsLoading(false)} />
      <Navbar />

      <main
        className={`h-[100svh] w-screen snap-y snap-mandatory scroll-smooth bg-[#09090b] text-white relative 
        ${isLoading ? 'overflow-hidden' : 'overflow-y-scroll'}`}
      >
        <div className="relative z-10 w-full h-full">
          {/* snap-always ensures you can't skip these sections with a single scroll wheel flick */}
          <section id="home" className="snap-start snap-always h-[100svh]">
            <Hero />
          </section>

          <section id="summary" className="snap-start snap-always h-[100svh]">
            <Summary />
          </section>

          <section id="expertise" className="snap-start snap-always h-[100svh]">
            <Expertise />
          </section>

          <section id="experience" className="snap-start snap-always h-[100svh]">
            <Experience />
          </section>

          <section id="publications" className="snap-start snap-always h-[100svh]">
            <Publications />
          </section>

          <section id="speaking" className="snap-start snap-always h-[100svh]">
            <Speaking />
          </section>

          <section id="leadership" className="snap-start snap-always h-[100svh]">
            <Leadership />
          </section>

          <section id="advocacy" className="snap-start snap-always h-[100svh]">
            <Advocacy />
          </section>

          <section id="accolades" className="snap-start snap-always h-[100svh]">
            <Accolades />
          </section>

          <section id="education" className="snap-start snap-always h-[100svh]">
            <Education />
          </section>

          <section id="contact" className="snap-start snap-always h-[100svh]">
            <Contact />
          </section>
        </div>
      </main>
    </>
  );
}