import { useEffect, useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";
import { FiChevronDown } from "react-icons/fi";

// Lines "typed" into the terminal — grounded in the real resume content
// (testing, CI, performance) rather than decorative filler.
const LOG_LINES = [
  { text: "$ npm run build", type: "cmd" },
  { text: "✓ Compiled successfully", type: "pass" },
  { text: "✓ Performance Optimized", type: "pass" },
  { text: "✓ Lighthouse: Performance 96", type: "pass" },
  { text: "$ whoami", type: "cmd" },
  { text: "Abubucker — Frontend Developer", type: "out" },
];

const STACK = [
  { label: "React.js", Icon: SiReact, color: "#61DAFB" },
  { label: "Next.js", Icon: SiNextdotjs, color: "#000000" },
  { label: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { label: "Tailwind CSS", Icon: SiTailwindcss, color: "#38BDF8" },
];

function useTypedLog(lines, speed = 28, lineDelay = 380) {
  const [rendered, setRendered] = useState([""]);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) {
      setRendered(lines.map((l) => l.text));
      return;
    }
    let cancelled = false;
    let lineIndex = 0;
    let charIndex = 0;
    const out = [""];

    const tick = () => {
      if (cancelled || lineIndex >= lines.length) return;
      const full = lines[lineIndex].text;
      charIndex++;
      out[lineIndex] = full.slice(0, charIndex);
      setRendered([...out]);

      if (charIndex >= full.length) {
        lineIndex++;
        charIndex = 0;
        out.push("");
        setTimeout(tick, lineDelay);
      } else {
        setTimeout(tick, speed);
      }
    };

    const start = setTimeout(tick, 500);
    return () => {
      cancelled = true;
      clearTimeout(start);
    };
  }, [lines, speed, lineDelay, reduceMotion]);

  return rendered;
}

export default function Hero() {
  const typed = useTypedLog(LOG_LINES);
  const doneTyping =
    typed.length >= LOG_LINES.length &&
    typed[LOG_LINES.length - 1] === LOG_LINES[LOG_LINES.length - 1].text;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden
                 bg-[#F6F7F5] dark:bg-[#0B0E14] transition-colors duration-300"
    >
      {/* Ambient background: drifting gradient shapes + a couple of faint
          floating code glyphs, tying into the "developer's workspace" motif
          without competing with the terminal, which stays the one loud thing. */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full bg-[#10B981]/15 blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 right-0 w-[380px] h-[380px] rounded-full bg-[#F59E0B]/10 blur-3xl"
        />
        <div
          className="absolute inset-0 opacity-[0.35] dark:opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(#1A1D23 0.5px, transparent 0.5px)",
            backgroundSize: "22px 22px",
          }}
        />
        <motion.span
          aria-hidden
          animate={{ y: [0, -14, 0], rotate: [0, 4, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="hidden md:block absolute top-[18%] right-[8%] font-mono text-6xl text-[#1A1D23]/[0.05] dark:text-white/[0.05] select-none"
        >
          {"{ }"}
        </motion.span>
        <motion.span
          aria-hidden
          animate={{ y: [0, 12, 0], rotate: [0, -3, 0] }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="hidden md:block absolute bottom-[14%] left-[6%] font-mono text-5xl text-[#1A1D23]/[0.05] dark:text-white/[0.05] select-none"
        >
          {"</>"}
        </motion.span>
      </div>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center w-full">
        {/* Left: intro copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Availability badge */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full bg-[#10B981]/10 border border-[#10B981]/25"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]" />
            </span>
            <span className="font-mono text-xs text-[#10B981]">
              open to new roles
            </span>
          </motion.div>

          <p className="font-mono text-sm text-[#10B981] mb-3">
            // hello world
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-[#1A1D23] dark:text-white">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-[#10B981] to-[#059669] dark:from-[#34D399] dark:to-[#10B981] bg-clip-text text-transparent">
              Abubucker
            </span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-[#66707F] dark:text-[#94A0AF]">
            Frontend Developer building fast, accessible interfaces with{" "}
            <span className="text-[#1A1D23] dark:text-white font-semibold">
              React.js
            </span>
            ,{" "}
            <span className="text-[#1A1D23] dark:text-white font-semibold">
              Next.js
            </span>{" "}
            &{" "}
            <span className="text-[#1A1D23] dark:text-white font-semibold">
              TypeScript
            </span>
            .
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <motion.a
              href="/Abubucker_Frontend_Developer_Resume.pdf"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.96 }}
              className="bg-[#10B981] text-white px-6 py-3 rounded-lg font-medium shadow-md shadow-emerald-900/10 hover:shadow-lg transition-shadow"
            >
              Download Resume
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.96 }}
              className="border border-[#1A1D23]/20 dark:border-white/20 text-[#1A1D23] dark:text-white px-6 py-3 rounded-lg font-medium hover:bg-[#1A1D23]/5 dark:hover:bg-white/10 transition-colors"
            >
              Contact Me
            </motion.a>
          </div>

          {/* Tech stack badge row */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: {
                transition: { staggerChildren: 0.08, delayChildren: 0.5 },
              },
            }}
            className="mt-8 flex flex-wrap gap-2.5"
          >
            {STACK.map(({ label, Icon, color }) => (
              <motion.span
                key={label}
                variants={{
                  hidden: { opacity: 0, y: 8 },
                  show: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -2 }}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white dark:bg-[#121722] border border-[#E4E7EB] dark:border-[#232935] text-xs font-mono text-[#1A1D23] dark:text-[#E7E9EC] shadow-sm"
              >
                <Icon size={13} style={{ color }} />
                {label}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: terminal build-log — the signature element */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <motion.div
            animate={
              doneTyping
                ? {
                    boxShadow:
                      "0 0 0 1px rgba(16,185,129,0.35), 0 20px 60px -15px rgba(16,185,129,0.35)",
                  }
                : {
                    boxShadow:
                      "0 0 0 1px rgba(35,41,53,0.1), 0 20px 60px -15px rgba(0,0,0,0.25)",
                  }
            }
            transition={{ duration: 0.6 }}
            className="rounded-xl overflow-hidden"
          >
            <div className="flex items-center gap-1.5 bg-[#1A1D23] px-4 py-3">
              <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
              <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
              <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
              <span className="ml-3 font-mono text-xs text-[#94A0AF]">
                build.log
              </span>
              <AnimatePresence>
                {doneTyping && (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 380, damping: 22 }}
                    className="ml-auto font-mono text-[10px] font-semibold text-[#0B0E14] bg-[#34D399] px-2 py-0.5 rounded-full"
                  >
                    PASS
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
            <div className="bg-[#0B0E14] px-5 py-6 font-mono text-[13px] md:text-sm min-h-[220px]">
              {typed.map((text, i) => {
                const meta = LOG_LINES[i];
                if (!meta) return null;
                const color =
                  meta.type === "pass"
                    ? "text-[#34D399]"
                    : meta.type === "cmd"
                      ? "text-[#E7E9EC]"
                      : "text-[#94A0AF]";
                const isLastActiveLine = i === typed.length - 1 && !doneTyping;
                return (
                  <div key={i} className={`${color} leading-6 min-h-[1.5rem]`}>
                    {text}
                    {isLastActiveLine && (
                      <span className="inline-block w-2 h-4 ml-0.5 bg-[#34D399] align-middle animate-pulse" />
                    )}
                  </div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll-down cue */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="hidden md:flex flex-col items-center gap-1 absolute bottom-8 left-1/2 -translate-x-1/2 text-[#66707F] dark:text-[#94A0AF]"
        aria-label="Scroll to About section"
      >
        <span className="font-mono text-[11px]">scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <FiChevronDown size={16} />
        </motion.span>
      </motion.a>
    </section>
  );
}
