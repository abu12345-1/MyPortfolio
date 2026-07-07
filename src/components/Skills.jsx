// import { motion } from "framer-motion";
// import { fadeUp, stagger, revealViewport } from "./motion";

// // Skill names only — no version numbers. A version tag next to "React.js"
// // implies a specific claimed version, which isn't something to fabricate.
// const skillCategories = {
//   frontend: {
//     label: "dependencies",
//     skills: [
//       "react.js",
//       "next.js",
//       "redux",
//       "javascript",
//       "react-hooks",
//       "context-api",
//     ],
//   },
//   "ui & styling": {
//     label: "devDependencies",
//     skills: ["tailwindcss", "bootstrap", "material-ui", "sass"],
//   },
//   performance: {
//     label: "scripts",
//     skills: ["lazy-loading", "code-splitting", "memoization", "virtual-dom"],
//   },
//   "api & data": {
//     label: "peerDependencies",
//     skills: ["rest-apis", "data-fetching", "chrome-devtools", "lighthouse"],
//   },
// };

// export default function Skills() {
//   return (
//     <section
//       id="skills"
//       className="py-24 bg-[#F6F7F5] dark:bg-[#0B0E14] transition-colors duration-300"
//     >
//       <div className="max-w-5xl mx-auto px-6">
//         <motion.p
//           initial="hidden"
//           whileInView="show"
//           viewport={revealViewport}
//           variants={fadeUp}
//           className="font-mono text-sm text-[#10B981] text-center mb-2"
//         >
//           // skills
//         </motion.p>
//         <motion.h2
//           initial="hidden"
//           whileInView="show"
//           viewport={revealViewport}
//           variants={fadeUp}
//           className="text-4xl font-extrabold text-center mb-14 text-[#1A1D23] dark:text-white"
//         >
//           Skills
//         </motion.h2>

//         <motion.div
//           initial="hidden"
//           whileInView="show"
//           viewport={revealViewport}
//           variants={stagger(0.12)}
//           className="grid md:grid-cols-2 gap-6"
//         >
//           {Object.entries(skillCategories).map(([cat, { label, skills }]) => (
//             <motion.div
//               key={cat}
//               variants={fadeUp}
//               whileHover={{ y: -4 }}
//               transition={{ duration: 0.3 }}
//               className="bg-white dark:bg-[#121722] rounded-xl border border-[#E4E7EB] dark:border-[#232935] shadow-sm hover:shadow-lg overflow-hidden"
//             >
//               <div className="flex items-center gap-2 px-5 py-3 border-b border-[#E4E7EB] dark:border-[#232935]">
//                 <span className="w-2 h-2 rounded-full bg-[#10B981]" />
//                 <span className="font-mono text-xs text-[#66707F] dark:text-[#94A0AF]">
//                   {label}
//                 </span>
//                 <span className="font-mono text-xs text-[#1A1D23]/50 dark:text-white/40 ml-auto">
//                   "{cat}"
//                 </span>
//               </div>
//               <ul className="p-5 space-y-2.5 font-mono text-[13px]">
//                 {skills.map((name) => (
//                   <li
//                     key={name}
//                     className="flex items-center text-[#1A1D23] dark:text-[#E7E9EC] group"
//                   >
//                     <span className="text-[#F59E0B] mr-2">-</span>
//                     <span className="group-hover:text-[#10B981] transition-colors">
//                       "{name}"
//                     </span>
//                   </li>
//                 ))}
//               </ul>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }

import { motion } from "framer-motion";
import { fadeUp, stagger, revealViewport } from "./motion";

// Skill names only — no version numbers. A version tag next to "React.js"
// implies a specific claimed version, which isn't something to fabricate.
const skillCategories = {
  frontend: {
    label: "dependencies",
    skills: [
      "react.js",
      "next.js",
      "redux",
      "javascript",
      "react-hooks",
      "context-api",
    ],
  },
  "ui & styling": {
    label: "devDependencies",
    skills: [
      "tailwindcss",
      "bootstrap",
      "material-ui",
      "CSS3",
      "Responsive Design",
    ],
  },
  performance: {
    label: "scripts",
    skills: ["lazy-loading", "code-splitting", "memoization", "virtual-dom"],
  },
  "api & data": {
    label: "peerDependencies",
    skills: ["rest-apis", "data-fetching", "chrome-devtools", "lighthouse"],
  },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 bg-[#F6F7F5] dark:bg-[#0B0E14] transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto px-6">
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={revealViewport}
          variants={fadeUp}
          className="font-mono text-sm text-[#10B981] text-center mb-2"
        >
          // skills
        </motion.p>
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={revealViewport}
          variants={fadeUp}
          className="text-4xl font-extrabold text-center mb-14 text-[#1A1D23] dark:text-white"
        >
          Skills
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={revealViewport}
          variants={stagger(0.12)}
          className="grid md:grid-cols-2 gap-6"
        >
          {Object.entries(skillCategories).map(([cat, { label, skills }]) => (
            <motion.div
              key={cat}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-[#121722] rounded-xl border border-[#E4E7EB] dark:border-[#232935] shadow-sm hover:shadow-lg overflow-hidden"
            >
              <div className="flex items-center gap-2 px-5 py-3 border-b border-[#E4E7EB] dark:border-[#232935]">
                <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                <span className="font-mono text-xs text-[#66707F] dark:text-[#94A0AF]">
                  {label}
                </span>
                <span className="font-mono text-xs text-[#1A1D23]/50 dark:text-white/40 ml-auto">
                  "{cat}"
                </span>
              </div>
              <ul className="p-5 space-y-2.5 font-mono text-[13px]">
                {skills.map((name) => (
                  <li
                    key={name}
                    className="flex items-center text-[#1A1D23] dark:text-[#E7E9EC] group"
                  >
                    <span className="text-[#F59E0B] mr-2">-</span>
                    <span className="group-hover:text-[#10B981] transition-colors">
                      "{name}"
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
