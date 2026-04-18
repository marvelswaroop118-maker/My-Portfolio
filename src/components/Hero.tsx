"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="h-full w-full flex items-center justify-center overflow-hidden bg-white text-black">

      <div className="w-full max-w-7xl h-[90vh] flex flex-col justify-center px-5 md:px-10">

        {/* ================= MOBILE ================= */}
        <div className="flex flex-col items-center text-center lg:hidden">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative w-40 h-48 mb-6"
          >
            <div className="absolute inset-0 translate-x-2 translate-y-2 border border-zinc-200 rounded-lg -z-10" />
            <div className="relative w-full h-full rounded-lg overflow-hidden border border-zinc-200 shadow-sm">
              <Image
                src="/Swaroop.png"
                alt="Swaroop Choudary"
                fill
                priority
                className="object-cover object-top"
              />
            </div>
          </motion.div>

          {/* TAG */}
          <div className="flex items-center gap-2 border border-zinc-200 px-3 py-1 rounded-md mb-4">
            <span className="w-2 h-2 rounded-full bg-[#D2042D]" />
            <p className="text-[10px] text-zinc-500 uppercase tracking-widest">
              B.B.A. LL.B. (Hons.) Candidate
            </p>
          </div>

          {/* NAME */}
          <h1 className="text-4xl font-bold leading-tight mb-3">
            Swaroop{" "}
            <span className="text-[#D2042D]">Choudary</span>
          </h1>

          {/* DESCRIPTION */}
          <p className="text-zinc-600 text-sm leading-relaxed mb-6 max-w-xs">
            Final-year law student with experience across litigation,
            corporate advisory, intellectual property, and technology law.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col gap-3 w-full max-w-xs">
            <a
              href="/Swaroop Cv.pdf"
              download
              className="w-full px-5 py-3 bg-[#D2042D] text-white text-xs font-bold uppercase tracking-widest rounded-md text-center"
            >
              Download CV
            </a>

            <a
              href="#experience"
              className="w-full px-5 py-3 border border-zinc-300 text-zinc-700 text-xs font-bold uppercase tracking-widest rounded-md text-center"
            >
              View Experience
            </a>
          </div>
        </div>

        {/* ================= DESKTOP ================= */}
        <div className="hidden lg:grid grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 border border-zinc-200 px-3 py-1.5 rounded-md w-fit mb-6">
              <span className="w-2 h-2 rounded-full bg-[#D2042D]" />
              <p className="text-[11px] text-zinc-500 uppercase tracking-widest">
                B.B.A. LL.B. (Hons.) Candidate
              </p>
            </div>

            <h1 className="text-6xl font-bold leading-tight mb-4">
              Swaroop <br />
              <span className="text-[#D2042D]">Choudary</span>
            </h1>

            <div className="max-w-lg space-y-4 mb-8">
              <p className="text-zinc-700 text-lg font-medium leading-relaxed">
                Final-year law student with experience across litigation,
                corporate advisory, intellectual property, and technology law.
              </p>

              <p className="text-zinc-500 text-base leading-relaxed">
                Litigation-trained and research-driven, with a focus on corporate
                and regulatory practice in emerging legal domains.
              </p>
            </div>

            <div className="flex gap-4">
              <a
                href="/Swaroop Cv.pdf"
                download
                className="px-7 py-3 bg-[#D2042D] text-white text-xs font-bold uppercase tracking-widest rounded-md"
              >
                Download CV
              </a>

              <a
                href="#experience"
                className="px-7 py-3 border border-zinc-300 text-zinc-700 text-xs font-bold uppercase tracking-widest rounded-md"
              >
                View Experience
              </a>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-full max-w-[380px] mx-auto lg:ml-auto aspect-[4/5] group"
          >
            <div className="absolute inset-0 translate-x-3 translate-y-3 border border-zinc-200 rounded-md -z-10" />

            <div className="relative w-full h-full rounded-md overflow-hidden border border-zinc-200 shadow-sm">
              <Image
                src="/Swaroop.png"
                alt="Swaroop Choudary"
                fill
                priority
                className="object-cover object-top grayscale-[15%] group-hover:grayscale-0 transition duration-700"
              />
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}