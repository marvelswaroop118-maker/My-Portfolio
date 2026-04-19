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
    <main className="h-[100dvh] w-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth bg-white text-black relative">

      {/* Subtle global background blobs */}
      <div className="fixed inset-0 pointer-events-none -z-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-[30vw] h-[30vw] bg-[#D2042D]/4 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-[#D2042D]/3 rounded-full blur-[120px]" />
      </div>

      <section id="home" className="snap-start h-[100dvh]"><Hero /></section>
      <section id="summary" className="snap-start h-[100dvh]"><Summary /></section>
      <section id="experience" className="snap-start h-[100dvh]"><Experience /></section>
      <section id="publications" className="snap-start h-[100dvh]"><Publications /></section>
      <section id="conferences" className="snap-start h-[100dvh]"><Conferences /></section>
      <section id="credentials" className="snap-start h-[100dvh]"><Credentials /></section>
      <section id="education" className="snap-start h-[100dvh]"><Education /></section>
      <section id="contact" className="snap-start h-[100dvh]"><Contact /></section>

      <Dock />
    </main>
  );
}
