import Hero from "@/components/Hero";
import Summary from "@/components/Summary";
import Experience from "@/components/Experience";
import Publications from "@/components/Publications";
import Conferences from "@/components/Conferences";
import Credentials from "@/components/Credentials";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Dock from "@/components/Dock";

export default function Home() {
  return (
    // Replaced '100dvh' with '100svh' for buttery smooth mobile scrolling without URL bar jitter
    // Added fully dynamic Dark Mode tailwind classes to sync with your ThemeProvider
    <main className="h-[100svh] w-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-white relative transition-colors duration-500">

      {/* ── SUBTLE GLOBAL BACKGROUND BLOBS ── */}
      {/* Upgraded with Dark Mode opacities and smooth transition colors */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[30vw] h-[30vw] bg-[#D2042D]/5 dark:bg-[#D2042D]/10 rounded-full blur-[100px] transition-colors duration-500" />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-[#D2042D]/5 dark:bg-[#D2042D]/10 rounded-full blur-[120px] transition-colors duration-500" />
      </div>

      {/* ── NAVIGATION DOCK ── */}
      <Dock />

      {/* ── CONTENT SECTIONS ── */}
      {/* Wrapped in relative z-10 to ensure content floats perfectly above the background blobs */}
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
  );
}