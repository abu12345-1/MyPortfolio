import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle";

const links = [
  { name: "Home", file: "Hero.jsx", href: "#home" },
  { name: "About", file: "About.jsx", href: "#about" },
  { name: "Skills", file: "Skills.jsx", href: "#skills" },
  { name: "Experience", file: "Experience.jsx", href: "#experience" },
  { name: "Projects", file: "Projects.jsx", href: "#projects" },
  { name: "Contact", file: "Contact.jsx", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const [scrolled, setScrolled] = useState(false);

  // Track which section is in view so the "open tab" indicator follows
  // scroll position, the way an editor highlights the active file tab.
  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector(l.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((s) => observer.observe(s));
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 border-b transition-colors duration-300
        ${
          scrolled
            ? "bg-white/85 dark:bg-[#0B0E14]/85 backdrop-blur-md border-[#E4E7EB] dark:border-[#232935] shadow-sm"
            : "bg-white/60 dark:bg-[#0B0E14]/60 backdrop-blur-sm border-transparent"
        }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between py-5 px-6 md:px-10">
        {/* Logo styled like a workspace name */}
        <a href="#home" className="flex items-center gap-2 group">
          <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] group-hover:animate-pulse" />
          <span className="text-lg md:text-xl font-bold tracking-tight text-[#1A1D23] dark:text-[#E7E9EC] font-mono">
            abubucker<span className="text-[#10B981]">/</span>portfolio
          </span>
        </a>

        {/* Desktop "editor tabs" */}
        <ul className="hidden md:flex items-stretch gap-1 text-sm font-medium">
          {links.map((link) => {
            const isActive = active === link.href;
            return (
              <li key={link.name} className="relative">
                <a
                  href={link.href}
                  className={`relative flex flex-col items-start px-3 py-2 rounded-t-md font-mono text-[13px] transition-colors
                    ${
                      isActive
                        ? "text-[#1A1D23] dark:text-white"
                        : "text-[#66707F] dark:text-[#94A0AF] hover:text-[#1A1D23] dark:hover:text-white"
                    }`}
                >
                  <span className="flex items-center gap-1.5">
                    {link.name}
                    <span
                      className={`w-1.5 h-1.5 rounded-full transition-colors ${
                        isActive ? "bg-[#10B981]" : "bg-transparent"
                      }`}
                    />
                  </span>
                  {isActive && (
                    <motion.span
                      layoutId="active-tab-underline"
                      className="absolute left-2 right-2 -bottom-[1px] h-[2px] bg-[#10B981] rounded-full"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <motion.a
            href="#contact"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.96 }}
            className="bg-[#10B981] text-white px-5 py-2 rounded-full font-medium shadow-sm hover:shadow-md transition-shadow"
          >
            Hire Me
          </motion.a>
        </div>

        {/* Mobile: theme toggle stays visible next to the menu button */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            className="text-2xl text-[#1A1D23] dark:text-[#E7E9EC]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden bg-white/95 dark:bg-[#0B0E14]/95 shadow-lg"
          >
            <div className="px-6 py-4 space-y-1 text-center font-mono">
              {links.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="block py-2 text-[#1A1D23] dark:text-[#E7E9EC] font-medium hover:text-[#10B981] transition"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
              <a
                href="#contact"
                className="inline-block mt-2 bg-[#10B981] text-white px-5 py-2 rounded-full font-medium shadow-md"
                onClick={() => setIsOpen(false)}
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
