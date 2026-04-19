"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
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
    <div className="w-full h-screen flex flex-col bg-white text-black overflow-hidden">
      <div className="w-full max-w-6xl mx-auto flex flex-col h-full px-5 md:px-8 py-8 md:py-10">

        {/* HEADER */}
        <div className="mb-5 shrink-0">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">
            Let's <span className="text-[#D2042D]">Work Together</span>
          </h2>
          <p className="text-zinc-400 text-[10px] uppercase tracking-[0.15em] mt-1.5">
            Open to roles in litigation, corporate, and regulatory practice
          </p>
        </div>

        {/* CONTENT */}
        <div className="flex-1 min-h-0 overflow-y-auto pb-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">

            {/* LEFT */}
            <div className="flex flex-col justify-between">
              <div>
                <p className="text-zinc-600 text-sm leading-relaxed max-w-md mb-6">
                  I'm open to roles in litigation, corporate, and regulatory practice.
                  If you're looking for someone with strong research, drafting, and courtroom
                  exposure — feel free to reach out.
                </p>

                <div className="flex flex-col gap-4">
                  <ContactLink
                    href="mailto:swaroopchoudary118@gmail.com"
                    icon={<MailIcon />}
                    label="swaroopchoudary118@gmail.com"
                  />
                  <ContactLink
                    href="tel:+917780566636"
                    icon={<PhoneIcon />}
                    label="+91 7780566636"
                  />
                  <ContactLink
                    href="https://www.linkedin.com/in/swaroop-choudary"
                    icon={<LinkedinIcon />}
                    label="linkedin.com/in/swaroop-choudary"
                    external
                  />
                </div>

                <a
                  href="/Swaroop Cv.pdf"
                  download
                  className="inline-block mt-6 px-6 py-3 bg-[#D2042D] text-white text-[10px] font-bold uppercase tracking-[0.15em] rounded-xl hover:bg-[#b00324] transition-colors duration-200"
                >
                  Download CV
                </a>
                <p className="text-[10px] text-zinc-400 mt-3">Typically responds within 24 hours.</p>
              </div>
            </div>

            {/* RIGHT — FORM */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-zinc-50 border border-zinc-200 p-6 rounded-2xl"
            >
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <FormInput
                  placeholder="Your Name"
                  value={formState.name}
                  onChange={(v) => setFormState({ ...formState, name: v })}
                />
                <FormInput
                  placeholder="Your Email"
                  type="email"
                  value={formState.email}
                  onChange={(v) => setFormState({ ...formState, email: v })}
                />
                <FormTextarea
                  placeholder="Tell me about your requirement..."
                  value={formState.message}
                  onChange={(v) => setFormState({ ...formState, message: v })}
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#D2042D] py-3 text-white text-[11px] font-bold uppercase tracking-[0.15em] rounded-xl hover:bg-[#b00324] disabled:opacity-60 transition-colors duration-200"
                >
                  {isSubmitting ? "Sending..." : isSuccess ? "Sent ✓" : "Send Message"}
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
}

/* ── SUB-COMPONENTS ── */

function ContactLink({ href, icon, label, external = false }: { href: string; icon: React.ReactNode; label: string; external?: boolean }) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="flex items-center gap-3 text-zinc-600 hover:text-[#D2042D] transition-colors text-sm"
    >
      {icon}
      {label}
    </a>
  );
}

function FormInput({ placeholder, value, onChange, type = "text" }: { placeholder: string; value: string; onChange: (v: string) => void; type?: string }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full bg-white border border-zinc-200 p-3 rounded-xl focus:outline-none focus:border-[#D2042D] transition-colors text-sm placeholder:text-zinc-400"
      required
    />
  );
}

function FormTextarea({ placeholder, value, onChange }: { placeholder: string; value: string; onChange: (v: string) => void }) {
  return (
    <textarea
      rows={4}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full bg-white border border-zinc-200 p-3 rounded-xl focus:outline-none focus:border-[#D2042D] transition-colors resize-none text-sm placeholder:text-zinc-400"
      required
    />
  );
}

/* ── ICONS ── */
const MailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" className="shrink-0">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M22 7L12 13L2 7" />
  </svg>
);
const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" className="shrink-0">
    <path d="M22 16.92V20a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3.09a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l.86-.86a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);
const LinkedinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" className="shrink-0">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
