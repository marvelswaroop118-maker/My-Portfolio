import Hero from "@/components/Hero";
import Summary from "@/components/Summary";
import Expertise from "@/components/Expertise";
import Experience from "@/components/Experience";
import Publications from "@/components/Publications";
import Conferences from "@/components/Conferences";
import Credentials from "@/components/Credentials";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Dock from "@/components/Dock";

export default function Home() {
  return (
    <main className="w-full bg-[#050505] text-white relative overflow-x-hidden">

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

      {/* FLOW = HOOK → PROOF → DEPTH */}

      <Hero />

      {/* Short identity (very important) */}
      <Summary />

      {/* WHAT YOU CAN DO (hook recruiters) */}
      <Expertise />

      {/* REAL WORK */}
      <Experience />

      {/* INTELLECTUAL DEPTH */}
      <Publications />
      <Conferences />

      {/* PROOF / VALIDATION */}
      <Credentials />

      {/* BACKGROUND */}
      <Education />

      {/* CTA */}
      <Contact />

      {/* FLOATING DOCK */}
      <Dock />

    </main>
  );
}