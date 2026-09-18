import { motion } from "framer-motion";
import { FiLinkedin } from "react-icons/fi";
import { fadeIn, revealViewport } from "./motion";

export default function Footer() {
  return (
    <motion.footer
      initial="hidden"
      whileInView="show"
      viewport={revealViewport}
      variants={fadeIn}
      className="py-8 bg-[#1A1D23] dark:bg-black text-white"
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm md:text-base font-mono text-white/70">
          © {new Date().getFullYear()} abubucker — built with React & Tailwind
        </p>

        <div className="flex gap-4 mt-2 md:mt-0">
          <motion.a
            href="https://www.linkedin.com/in/abubucker-j"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3, color: "#0A66C2" }}
            className="text-white/80 transition"
          >
            <FiLinkedin size={20} />
          </motion.a>
        </div>
      </div>
    </motion.footer>
  );
}
