"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Husky from "@/components/Husky";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Husky Interaction States
  const [huskyState, setHuskyState] = useState({ isWagging: false, isHappy: false, isError: false, isClosedEye: false });

  const handleFocus = (field: string) => {
    if (field === 'email') {
      setHuskyState({ isWagging: false, isHappy: false, isError: false, isClosedEye: true });
    } else {
      setHuskyState({ isWagging: true, isHappy: false, isError: false, isClosedEye: false });
    }
  };

  const handleBlur = () => {
    setHuskyState({ isWagging: false, isHappy: false, isError: false, isClosedEye: false });
  };

  const handleHuskyClick = () => {
    setHuskyState({ ...huskyState, isHappy: true, isWagging: true });
    setTimeout(() => setHuskyState({ isWagging: false, isHappy: false, isError: false, isClosedEye: false }), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setHuskyState({ isWagging: true, isHappy: false, isError: false, isClosedEye: false });

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });
      if (!res.ok) throw new Error("Failed to send");

      setIsSuccess(true);
      setHuskyState({ isWagging: true, isHappy: true, isError: false, isClosedEye: false });
      setFormState({ name: "", email: "", message: "" });
      setTimeout(() => setIsSuccess(false), 4000);
    } catch {
      setHuskyState({ isWagging: false, isHappy: false, isError: true, isClosedEye: false });
      setTimeout(() => setHuskyState({ isWagging: false, isHappy: false, isError: false, isClosedEye: false }), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="relative w-full h-[100svh] bg-[#09090b] overflow-hidden flex items-center justify-center font-sans">

      {/* ── AMBIENT BACKGROUND ── */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)`, backgroundSize: "40px 40px" }} />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[300px] lg:w-[500px] h-[300px] lg:h-[500px] bg-[#D2042D]/10 rounded-full blur-[100px] lg:blur-[120px] pointer-events-none z-0" />

      {/* ── MAIN LAYOUT (Strict 100svh Constraints) ── */}
      <div className="relative z-10 w-full max-w-[90rem] mx-auto px-5 md:px-12 flex flex-col lg:flex-row gap-5 lg:gap-20 h-full justify-center pt-[12svh] pb-[4svh] lg:py-0">

        {/* LEFT COLUMN: Typography & Husky */}
        <motion.div
          variants={staggerContainer} initial="hidden" animate="show"
          className="flex-none lg:flex-1 flex flex-col justify-center w-full max-w-xl mx-auto lg:mx-0"
        >
          <motion.div variants={fadeUp} className="mb-2 lg:mb-4 flex items-center gap-2 lg:gap-3 w-full">
            <span className="w-6 lg:w-8 h-[2px] bg-[#D2042D]"></span>
            <p className="text-[9px] lg:text-[10px] text-zinc-400 uppercase tracking-[0.3em] font-bold">Contact</p>
          </motion.div>

          {/* Premium Editorial Headline (VW scaling on mobile prevents wrapping issues) */}
          <motion.h2 variants={fadeUp} className="text-[11vw] sm:text-6xl lg:text-[5rem] font-black leading-[0.9] tracking-tight uppercase mb-4 lg:mb-6">
            <span className="text-white block mb-1 lg:mb-2">Let's Build</span>
            <span className="text-transparent [-webkit-text-stroke:1px_#D2042D] lg:[-webkit-text-stroke:1.5px_#D2042D] block">Together</span>
          </motion.h2>

          {/* Sleek Social Links (Tightened for mobile) */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-3 lg:gap-6 mb-4 lg:mb-8">
            <SocialLink href="mailto:swaroopchoudary118@gmail.com" label="Email" icon={<MailIcon />} />
            <SocialLink href="tel:+917780566636" label="Phone" icon={<PhoneIcon />} />
            <SocialLink href="https://linkedin.com/in/jasti-swaroop-choudary-00b3612a7/" label="LinkedIn" icon={<LinkedinIcon />} />
          </motion.div>

          {/* Husky Container (Hidden on small mobile to save space, visible on SM+) */}
          <motion.div variants={fadeUp} className="hidden sm:block relative w-full h-[160px] xl:h-[220px] bg-[#0c0c0e]/80 backdrop-blur-md border border-zinc-800/60 rounded-3xl lg:rounded-[2rem] overflow-hidden group cursor-pointer shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-[#D2042D]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Dashboard-style Interact Badge */}
            <div className="absolute top-4 right-5 z-30 flex items-center gap-2 pointer-events-none">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D2042D] animate-pulse" />
              <p className="text-[8px] xl:text-[9px] font-bold tracking-[0.2em] uppercase text-zinc-500 group-hover:text-zinc-300 transition-colors">
                Interact Mode
              </p>
            </div>

            <Husky {...huskyState} onInteract={handleHuskyClick} />
          </motion.div>

          {/* Sleek Signature Footer (Desktop Only to ensure strict mobile fit) */}
          <motion.div variants={fadeUp} className="mt-8 hidden lg:flex items-center gap-5 opacity-90">
            <svg className="w-14 h-auto text-white drop-shadow-md" viewBox="0 0 1024 672" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill="currentColor" d="M159.606796,473.791565 C170.728668,454.018402 185.974594,438.122925 202.336441,423.388916 C263.158051,368.618134 332.281616,327.186127 408.137329,296.832123 C443.347992,282.742432 479.593323,272.291443 517.309875,267.424652 C520.357483,267.031433 522.482788,265.821930 523.992371,263.011230 C526.351013,258.619781 529.023621,254.422302 530.741028,249.680298 C531.823303,246.692001 534.011658,244.308563 537.554688,245.134720 C541.220642,245.989517 543.636292,248.521622 544.210083,252.402756 C544.470520,254.164719 543.966614,256.116425 542.252808,256.618866 C537.975708,257.872803 538.013367,261.677551 536.543152,264.861877 C539.028870,267.304810 542.390076,266.403564 545.049988,267.605652 C546.630371,268.319855 548.210388,268.897156 548.420837,270.847290 C548.633789,272.820984 547.259460,273.969086 545.736389,274.677826 C543.181030,275.866943 540.508484,276.804321 537.966187,277.815460 C533.799377,273.381439 531.251343,273.534210 527.733582,278.417175 C509.468292,303.771362 487.039886,325.065094 462.829285,344.551025 C416.325134,381.980072 365.765320,413.181488 313.169098,441.181702 C276.526093,460.689056 239.231689,478.780487 199.698044,491.833618 C191.143631,494.658081 182.445374,496.838898 173.488922,497.965118 C170.277939,498.368927 167.160004,497.969818 164.076355,497.249390 C157.933060,495.814087 154.861618,491.272217 155.852570,485.007294 C156.453583,481.207642 157.754715,477.595978 159.606796,473.791565 M410.229706,369.702667 C448.461487,342.961395 485.259735,314.625153 514.678772,276.845825 C509.399963,275.624451 505.359528,277.003906 501.382751,277.697418 C456.250214,285.568054 413.783813,301.476807 372.580566,321.016418 C333.488953,339.554657 296.642365,361.897003 261.861908,387.611084 C233.936264,408.257233 207.432785,430.512512 185.299026,457.505310 C179.914658,464.071716 174.783264,470.879822 171.428818,478.788483 C169.106033,484.264923 170.684082,486.370117 176.638123,485.408112 C181.883316,484.560577 187.158142,483.590424 192.235779,482.062592 C220.707870,473.495575 247.799515,461.470612 274.476959,448.510498 C321.445435,425.692841 366.538239,399.611450 410.229706,369.702667 z" />
              <path fill="currentColor" d="M609.979370,319.319122 C612.800476,313.777344 615.448425,308.583923 618.086304,303.385376 C618.528992,302.512939 618.928467,301.618530 619.661865,300.072540 C612.971619,303.658844 606.918396,306.967896 600.805359,310.162384 C594.748840,313.327301 588.521790,316.117981 582.074951,318.416504 C578.178589,319.805634 574.140442,320.947388 574.295410,326.536072 C574.354065,328.651123 572.554749,330.493103 570.902161,331.910980 C553.161621,347.132141 532.245667,353.364655 509.226624,353.419922 C505.787354,353.428162 502.394135,352.366028 501.055634,348.764954 C499.616241,344.892395 502.034973,342.065735 504.559082,339.534668 C509.888000,334.190948 522.446045,327.766937 527.819458,327.747955 C525.353210,331.083771 521.637634,332.485931 518.932190,335.045746 C516.222168,337.609863 512.506592,339.345428 511.475433,343.392670 C512.777100,345.223145 514.587036,344.738342 516.125427,344.511597 C530.611633,342.376556 544.268188,337.765778 556.926819,330.370575 C559.316528,328.974487 562.774048,327.515839 562.365234,324.462555 C561.914001,321.092407 557.950623,321.409210 555.351013,320.976562 C548.633362,319.858429 541.836365,319.225677 535.086731,318.286682 C532.461853,317.921570 529.644958,317.603729 527.783447,315.469604 C525.516602,312.870880 526.321655,310.127563 528.310242,307.781219 C530.577087,305.106567 533.200928,302.766876 536.248413,300.978333 C548.371155,293.863617 561.097046,288.147125 574.714417,284.529816 C575.991882,284.190491 577.318176,283.927734 578.633301,283.862610 C580.432617,283.773560 581.879700,284.559387 582.688293,286.237610 C583.489685,287.900909 582.558044,289.142548 581.494812,290.237915 C578.822693,292.990753 575.662476,294.937592 572.432922,296.218658 C570.818726,294.936432 571.929077,293.919556 571.666016,293.010132 C569.355591,291.605225 544.033508,305.057587 539.804077,310.151276 C546.087036,310.989563 552.122681,311.742523 558.139526,312.624298 C560.438721,312.961212 563.062866,313.018890 564.901245,314.198029 C570.379028,317.711639 575.061462,315.966980 580.221741,313.367188 C595.543884,305.647736 611.206970,298.564423 624.538025,287.448120 C626.679199,285.662659 629.174377,284.311737 631.800110,286.198730 C634.265442,287.970367 633.619629,290.790039 632.874146,293.117188 C631.067627,298.756989 628.942017,304.294556 626.588989,310.867706 C638.650757,303.446045 649.863281,296.633453 661.626587,290.817902 C665.351562,288.976349 669.117371,287.125397 673.040039,285.797119 C679.070801,283.755066 682.141479,286.704712 680.721130,292.842896 C679.859497,296.566681 678.765503,300.243164 678.050720,303.993256 C676.408081,312.611115 680.263672,316.638184 688.996155,315.515686 C695.115479,314.729156 701.172119,313.488373 707.014893,311.546997 C743.694153,299.359894 776.721558,280.856415 805.078552,254.382828 C807.261475,252.344925 809.039612,249.867249 811.260620,247.878357 C812.987427,246.332016 815.213196,244.822357 817.521790,246.706512 C819.816589,248.579391 818.814331,250.887100 817.637878,253.032135 C809.938171,267.070984 803.165283,281.522064 797.669800,296.584961 C786.281677,327.799072 778.236755,359.836212 773.255615,392.679779 C771.980225,401.089417 771.475708,409.551819 770.561218,417.983826 C770.254517,420.812195 770.459595,422.951416 773.875122,422.586761 C774.511597,424.740173 773.698975,426.290009 773.103699,427.802887 C771.616821,431.581543 769.408142,434.714539 764.736206,434.266510 C760.432861,433.853882 759.270935,430.471588 758.417786,426.929474 C756.531738,419.098877 758.033325,411.256378 759.008545,403.582184 C763.854431,365.451050 773.214966,328.423492 787.421936,292.665192 C788.528442,289.880219 789.722412,287.129883 790.884338,284.367065 C791.965820,281.795502 793.058899,279.228760 794.584900,275.625824 C779.198364,287.115021 764.358093,297.470917 748.107361,305.577972 C729.730408,314.745728 710.988159,322.917755 690.401733,325.784729 C688.595398,326.036316 686.756592,326.183136 684.934265,326.170593 C670.218262,326.069183 663.252319,317.240204 666.571655,302.963074 C666.906189,301.524109 667.210388,300.078064 667.579346,298.405518 C665.060608,297.654541 663.279053,299.077972 661.470093,300.034790 C647.898132,307.213745 635.284180,315.927917 622.540649,324.433472 C621.156738,325.357147 619.782959,326.313507 618.320312,327.097961 C615.680786,328.513733 612.856506,329.137848 610.379639,326.993774 C607.942932,324.884399 608.555969,322.227112 609.979370,319.319122 z" />
              <path fill="currentColor" d="M400.684692,203.604736 C447.820679,185.547684 495.913086,172.330750 545.122742,163.158127 C576.071411,157.389359 607.261047,153.531387 638.702148,151.585159 C658.492676,150.360107 678.260437,149.153351 698.073242,150.724945 C705.712585,151.330917 713.329712,152.217468 720.971069,153.824738 C603.255310,153.179901 490.409546,175.185379 382.846588,223.475067 C383.095673,221.440598 384.996765,219.747467 386.475494,217.927277 C388.773987,215.097992 391.253693,212.560730 392.286957,208.786575 C393.308167,205.056473 397.093658,204.578644 400.684692,203.604736 z" />
              <path fill="currentColor" d="M517.220215,259.876465 C515.033020,257.935486 516.687927,257.045563 517.979797,256.460052 C520.414978,255.356277 522.762939,253.479004 526.169495,254.709045 C524.292419,258.547089 520.844849,259.115631 517.220215,259.876465 z" />
            </svg>
            <div className="w-[1px] h-6 bg-zinc-700/50" />
            <p className="text-xl sm:text-2xl font-serif italic text-zinc-300/80 tracking-wide font-light">
              Swaroop Choudary
            </p>
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN: Minimalist Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 flex flex-col justify-center w-full max-w-xl mx-auto lg:mx-0 h-full lg:h-auto min-h-0"
        >
          <div className="w-full bg-[#0c0c0e]/90 backdrop-blur-2xl border border-zinc-800/80 p-5 sm:p-8 lg:p-12 rounded-3xl lg:rounded-[2rem] shadow-2xl relative overflow-hidden flex flex-col">

            {/* Form Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#D2042D]/5 rounded-full blur-[80px] pointer-events-none" />

            <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white mb-4 lg:mb-8 uppercase tracking-widest flex items-center gap-3">
              Send a Message
              <span className="h-[1px] flex-1 bg-gradient-to-r from-zinc-800 to-transparent" />
            </h3>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:gap-4 lg:gap-8 relative z-10 overflow-y-auto scrollbar-hide pb-2">
              <div className="relative">
                <input
                  type="text" required placeholder="Your Name"
                  value={formState.name} onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  onFocus={() => handleFocus('name')} onBlur={handleBlur}
                  className="w-full bg-transparent border-b border-zinc-800 py-2.5 sm:py-3 text-xs sm:text-sm font-medium text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#D2042D] transition-colors"
                />
              </div>

              <div className="relative">
                <input
                  type="email" required placeholder="Your Email"
                  value={formState.email} onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  onFocus={() => handleFocus('email')} onBlur={handleBlur}
                  className="w-full bg-transparent border-b border-zinc-800 py-2.5 sm:py-3 text-xs sm:text-sm font-medium text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#D2042D] transition-colors"
                />
              </div>

              <div className="relative">
                <textarea
                  rows={2} required placeholder="Tell me about an opportunity..."
                  value={formState.message} onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  onFocus={() => handleFocus('message')} onBlur={handleBlur}
                  className="w-full bg-transparent border-b border-zinc-800 py-2.5 sm:py-3 text-xs sm:text-sm font-medium text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#D2042D] transition-colors resize-none sm:min-h-[80px]"
                />
              </div>

              <button
                type="submit" disabled={isSubmitting || isSuccess}
                className={`w-full py-3.5 sm:py-4 lg:py-5 mt-2 lg:mt-4 flex justify-center items-center gap-3 text-white text-[10px] sm:text-[11px] font-black uppercase tracking-[0.2em] rounded-xl transition-all duration-300 overflow-hidden relative group ${isSuccess ? "bg-green-600" : "bg-[#D2042D] hover:bg-white hover:text-[#09090b]"
                  } disabled:opacity-70 disabled:cursor-not-allowed`}
              >
                <span className="relative z-10">{isSubmitting ? "Sending..." : isSuccess ? "Message Sent ✓" : "Send Message"}</span>
                {!isSubmitting && !isSuccess && (
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 relative z-10 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                )}
              </button>
            </form>

          </div>
        </motion.div>

      </div>
    </div>
  );
}

// ─── HELPER COMPONENTS ───
function SocialLink({ href, label, icon }: { href: string; label: string; icon: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 sm:gap-3 group">
      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#0c0c0e] border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:bg-[#D2042D] group-hover:text-white group-hover:border-[#D2042D] transition-all duration-300">
        {icon}
      </div>
      <span className="text-[9px] sm:text-[10px] uppercase tracking-widest font-bold text-zinc-500 group-hover:text-white transition-colors">
        {label}
      </span>
    </a>
  );
}

// ─── SVG ICONS ───
const MailIcon = () => <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 7L12 13L2 7" /></svg>;
const PhoneIcon = () => <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none"><path d="M22 16.92V20a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3.09a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l.86-.86a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>;
const LinkedinIcon = () => <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>;