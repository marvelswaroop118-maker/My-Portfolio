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
      if (!res.ok) throw new Error("Failed to send");
      setIsSuccess(true);
      setFormState({ name: "", email: "", message: "" });
      setTimeout(() => setIsSuccess(false), 3000);
    } catch {
      alert("Something went wrong. Please check your connection or try contacting directly via email.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full h-[100svh] flex flex-col bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300 overflow-hidden">
      <div className="w-full h-full max-w-7xl mx-auto flex flex-col px-6 md:px-10 py-8 md:py-12">

        {/* HEADER */}
        <div className="mb-8 md:mb-10 shrink-0">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-zinc-900 dark:text-white transition-colors duration-300">
            Let's <span className="text-[#D2042D]">Work Together</span>
          </h2>
          <div className="flex items-center gap-3 mt-3">
            <div className="h-0.5 w-8 bg-[#D2042D] rounded-full" />
            <p className="text-zinc-500 dark:text-zinc-400 text-[10px] sm:text-[11px] uppercase tracking-[0.25em] font-bold transition-colors duration-300">
              Litigation · Corporate · Regulatory Practice
            </p>
          </div>
        </div>

        {/* CONTENT */}
        <div className="flex-1 min-h-0 overflow-y-auto scrollbar-hide pb-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 h-full">

            {/* LEFT: Info & Links */}
            <div className="flex flex-col justify-between">
              <div>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed max-w-md mb-8 font-medium transition-colors duration-300">
                  I am actively open to roles across litigation, corporate, and regulatory practice.
                  If you are looking for dedicated legal counsel with strong research, drafting, and courtroom exposure — I would love to connect.
                </p>

                <div className="flex flex-col gap-4">
                  <ContactCard
                    href="mailto:swaroopchoudary118@gmail.com"
                    icon={<MailIcon />}
                    label="swaroopchoudary118@gmail.com"
                    subtitle="Email me directly"
                  />
                  <ContactCard
                    href="tel:+917780566636"
                    icon={<PhoneIcon />}
                    label="+91 7780566636"
                    subtitle="Call or WhatsApp"
                  />
                  <ContactCard
                    href="https://www.linkedin.com/in/jasti-swaroop-choudary-00b3612a7/"
                    icon={<LinkedinIcon />}
                    label="Jasti Swaroop Choudary"
                    subtitle="Connect on LinkedIn"
                    external
                  />
                </div>

                <div className="mt-10">
                  <a
                    href="/Swaroop Cv.pdf"
                    download
                    className="inline-flex items-center gap-3 px-8 py-3.5 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] rounded-full hover:bg-[#D2042D] dark:hover:bg-[#D2042D] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1"
                  >
                    Download Full CV
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 p-6 sm:p-8 rounded-3xl shadow-sm lg:max-w-md w-full transition-colors duration-300"
            >
              <h3 className="text-xl font-black text-zinc-900 dark:text-white mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <FormInput
                  placeholder="Your Name"
                  value={formState.name}
                  onChange={(v) => setFormState({ ...formState, name: v })}
                />
                <FormInput
                  placeholder="Your Email Address"
                  type="email"
                  value={formState.email}
                  onChange={(v) => setFormState({ ...formState, email: v })}
                />
                <FormTextarea
                  placeholder="Tell me about your requirements, a case, or an opportunity..."
                  value={formState.message}
                  onChange={(v) => setFormState({ ...formState, message: v })}
                />
                <button
                  type="submit"
                  disabled={isSubmitting || isSuccess}
                  className={`w-full py-4 mt-2 text-white text-[11px] sm:text-xs font-black uppercase tracking-[0.2em] rounded-xl transition-all duration-300 shadow-md ${isSuccess
                      ? "bg-green-600 hover:bg-green-700"
                      : "bg-[#D2042D] hover:bg-[#990011] hover:shadow-lg hover:shadow-red-900/20 hover:-translate-y-0.5"
                    } disabled:opacity-70 disabled:hover:transform-none disabled:cursor-not-allowed`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                        <circle cx="12" cy="12" r="10" strokeOpacity="0.25" />
                        <path d="M12 2a10 10 0 0 1 10 10" strokeOpacity="0.75" />
                      </svg>
                      Sending...
                    </span>
                  ) : isSuccess ? (
                    "Message Sent ✓"
                  ) : (
                    "Send Message"
                  )}
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

function ContactCard({ href, icon, label, subtitle, external = false }: { href: string; icon: React.ReactNode; label: string; subtitle: string; external?: boolean }) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group flex items-center gap-4 p-3 sm:p-4 rounded-2xl border border-transparent hover:bg-white dark:hover:bg-zinc-900 hover:border-zinc-200 dark:hover:border-zinc-800 hover:shadow-sm transition-all duration-300"
    >
      <div className="w-12 h-12 rounded-full bg-zinc-200/50 dark:bg-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-400 group-hover:bg-[#D2042D] group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <div>
        <p className="text-[10px] text-zinc-400 dark:text-zinc-500 uppercase tracking-widest font-bold mb-0.5">
          {subtitle}
        </p>
        <p className="text-sm sm:text-base font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-[#D2042D] transition-colors duration-300 line-clamp-1">
          {label}
        </p>
      </div>
    </a>
  );
}

function FormInput({ placeholder, value, onChange, type = "text" }: { placeholder: string; value: string; onChange: (v: string) => void; type?: string }) {
  return (
    <div className="relative group">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-zinc-100 dark:bg-zinc-950/50 border border-zinc-200 dark:border-zinc-800 p-4 rounded-xl focus:outline-none focus:border-[#D2042D] focus:ring-1 focus:ring-[#D2042D] transition-all duration-300 text-sm font-medium text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600"
        required
      />
    </div>
  );
}

function FormTextarea({ placeholder, value, onChange }: { placeholder: string; value: string; onChange: (v: string) => void }) {
  return (
    <div className="relative group">
      <textarea
        rows={4}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-zinc-100 dark:bg-zinc-950/50 border border-zinc-200 dark:border-zinc-800 p-4 rounded-xl focus:outline-none focus:border-[#D2042D] focus:ring-1 focus:ring-[#D2042D] transition-all duration-300 resize-none text-sm font-medium text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600"
        required
      />
    </div>
  );
}

/* ── ICONS ── */
const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" className="shrink-0">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M22 7L12 13L2 7" />
  </svg>
);
const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" className="shrink-0">
    <path d="M22 16.92V20a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3.09a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l.86-.86a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);
const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" className="shrink-0">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);