// import { FaLinkedin } from "react-icons/fa";

// export default function Footer() {
//   return (
//     <footer className="py-8 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white mt-12">
//       <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
//         {/* Left Text */}
//         <p className="text-sm md:text-base">
//           © {new Date().getFullYear()} Abubucker. Built with React & Tailwind.
//         </p>

//         {/* Social Icons */}
//         <div className="flex gap-4 mt-2 md:mt-0">
//           {/* <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
//         <FaGithub size={20} />
//       </a> */}
//           <a
//             href="https://www.linkedin.com/in/abubucker-j"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:text-blue-500 transition"
//           >
//             <FaLinkedin size={20} />
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// }

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
