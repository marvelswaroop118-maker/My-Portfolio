"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error);

      setIsSuccess(true);
      setFormState({ name: "", email: "", message: "" });

      setTimeout(() => setIsSuccess(false), 3000);
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="h-full w-full flex items-center justify-center overflow-hidden bg-white text-black">

      <div className="w-full max-w-7xl h-[90vh] flex flex-col px-4 md:px-8">

        {/* HEADER */}
        <div className="mb-4">
          <h2 className="text-3xl md:text-5xl font-bold">
            Let’s <span className="text-[#D2042D]">Work Together</span>
          </h2>
        </div>

        {/* CONTENT */}
        <div className="flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-2 gap-6 overflow-hidden">

          {/* LEFT */}
          <div className="flex flex-col justify-between pr-2">

            <div>
              <p className="text-zinc-600 mb-6 max-w-md text-sm leading-relaxed">
                I’m open to roles in litigation, corporate, and regulatory practice.
                If you're looking for someone with strong research, drafting, and courtroom exposure — feel free to reach out.
              </p>

              {/* CONTACT DETAILS */}
              <div className="flex flex-col gap-4">

                <a
                  href="mailto:swaroopchoudary118@gmail.com"
                  className="flex items-center gap-3 text-zinc-700 hover:text-[#D2042D] transition text-sm"
                >
                  <MailIcon />
                  swaroopchoudary118@gmail.com
                </a>

                <a
                  href="tel:+917780566636"
                  className="flex items-center gap-3 text-zinc-700 hover:text-[#D2042D] transition text-sm"
                >
                  <PhoneIcon />
                  +91 7780566636
                </a>

                <a
                  href="https://www.linkedin.com/in/swaroop-choudary"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-zinc-700 hover:text-[#D2042D] transition text-sm"
                >
                  <LinkedinIcon />
                  linkedin.com/in/swaroop-choudary
                </a>
              </div>

              {/* CTA */}
              <a
                href="/Swaroop Cv.pdf"
                download
                className="inline-block mt-6 px-5 py-2.5 bg-[#D2042D] text-white text-[11px] font-bold uppercase tracking-widest hover:bg-[#FF3131] transition"
              >
                Download CV
              </a>

              <p className="text-xs text-zinc-500 mt-3">
                Typically responds within 24 hours.
              </p>
            </div>

          </div>

          {/* RIGHT (FORM) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white border border-zinc-200 p-6 rounded-xl shadow-sm overflow-y-auto"
          >
            <form onSubmit={handleSubmit} className="space-y-4">

              <Input
                placeholder="Your Name"
                value={formState.name}
                onChange={(value) =>
                  setFormState({ ...formState, name: value })
                }
              />

              <Input
                placeholder="Your Email"
                type="email"
                value={formState.email}
                onChange={(value) =>
                  setFormState({ ...formState, email: value })
                }
              />

              <Textarea
                placeholder="Tell me about your requirement..."
                value={formState.message}
                onChange={(value) =>
                  setFormState({ ...formState, message: value })
                }
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#D2042D] py-3 text-white text-xs font-bold uppercase tracking-widest hover:bg-[#FF3131] disabled:opacity-60 transition"
              >
                {isSubmitting
                  ? "Sending..."
                  : isSuccess
                    ? "Sent ✓"
                    : "Send Message"}
              </button>

            </form>
          </motion.div>

        </div>

      </div>
    </div>
  );
}

/* ---------------- INPUTS ---------------- */

function Input({ placeholder, value, onChange, type = "text" }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full border border-zinc-200 p-3 rounded-md focus:outline-none focus:border-[#D2042D] transition text-sm"
      required
    />
  );
}

function Textarea({ placeholder, value, onChange }) {
  return (
    <textarea
      rows={4}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full border border-zinc-200 p-3 rounded-md focus:outline-none focus:border-[#D2042D] transition resize-none text-sm"
      required
    />
  );
}

/* ---------------- ICONS ---------------- */

const MailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M22 7L12 13L2 7" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none">
    <path d="M22 16.92V20a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3.09a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l.86-.86a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);