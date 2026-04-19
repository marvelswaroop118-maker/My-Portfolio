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
    <main className="h-screen w-screen overflow-y-scroll snap-y md:snap-mandatory snap-proximity scroll-smooth bg-[#050505] text-white relative">

      {/* GLOBAL BACKGROUND */}
      <div className="fixed inset-0 pointer-events-none -z-50 overflow-hidden">
        <div
          className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-[#8B0000]/5 rounded-full blur-[120px] animate-pulse"
          style={{ animationDuration: "8s" }}
        />
        <div
          className="absolute bottom-[-10%] right-[-5%] w-[50vw] h-[50vw] bg-[#D2042D]/5 rounded-full blur-[150px] animate-pulse"
          style={{ animationDuration: "12s" }}
        />
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      {/* SLIDES — each section has an id matching the Dock hrefs */}

      <section id="home" className="snap-start h-screen flex items-center justify-center">
        <Hero />
      </section>

      <section id="summary" className="snap-start h-screen flex items-center justify-center">
        <Summary />
      </section>

      <section id="experience" className="snap-start h-screen flex items-center justify-center">
        <Experience />
      </section>

      <section id="publications" className="snap-start h-screen flex items-center justify-center">
        <Publications />
      </section>

      <section id="conferences" className="snap-start h-screen flex items-center justify-center">
        <Conferences />
      </section>

      <section id="credentials" className="snap-start h-screen flex items-center justify-center">
        <Credentials />
      </section>

      <section id="education" className="snap-start h-screen flex items-center justify-center">
        <Education />
      </section>

      <section id="contact" className="snap-start h-screen flex items-center justify-center">
        <Contact />
      </section>

      {/* Floating Dock stays global */}
      <Dock />

    </main>
  );
}
