"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="min-h-screen w-full flex items-center justify-center px-6 md:px-12 lg:px-24 bg-white text-black"
      id="home"
    >
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center pt-20 lg:pt-0">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col"
        >
          {/* TAG */}
          <div className="flex items-center gap-2 border border-zinc-200 px-3 py-1.5 rounded-md w-fit mb-6">
            <span className="w-2 h-2 rounded-full bg-[#D2042D]" />
            <p className="text-[11px] text-zinc-500 tracking-widest uppercase">
              B.B.A. LL.B. (Hons.) Candidate
            </p>
          </div>

          {/* NAME */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-4">
            Swaroop <br />
            <span className="text-[#D2042D]">
              Choudary.
            </span>
          </h1>

          {/* SUBTEXT */}
          <div className="max-w-lg space-y-4 mb-8">
            <p className="text-zinc-700 text-lg leading-relaxed font-medium">
              Final-year law student with experience across litigation,
              corporate advisory, intellectual property, and technology law.
            </p>

            <p className="text-zinc-500 text-base leading-relaxed">
              Litigation-trained and research-driven, with a focus on corporate
              and regulatory practice in emerging legal domains.
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-wrap gap-4">
            <a
              href="/Swaroop.cv"
              className="px-7 py-3 bg-[#D2042D] text-white text-xs font-bold uppercase tracking-widest rounded-md hover:bg-[#FF3131] transition"
            >
              Download CV
            </a>

            <a
              href="#experience"
              className="px-7 py-3 border border-zinc-300 text-zinc-700 text-xs font-bold uppercase tracking-widest rounded-md hover:border-[#D2042D] hover:text-[#D2042D] transition"
            >
              View Experience
            </a>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full max-w-[360px] mx-auto lg:ml-auto aspect-[4/5] group"
        >
          {/* SUBTLE OFFSET FRAME */}
          <div className="absolute inset-0 translate-x-3 translate-y-3 border border-zinc-200 rounded-md -z-10 transition group-hover:translate-x-2 group-hover:translate-y-2" />

          {/* IMAGE */}
          <div className="relative w-full h-full rounded-md overflow-hidden border border-zinc-200 bg-white shadow-sm">
            <Image
              src="/Swaroop.png"
              alt="Swaroop Choudary"
              fill
              priority
              className="object-cover object-top grayscale-[20%] group-hover:grayscale-0 transition duration-700"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}