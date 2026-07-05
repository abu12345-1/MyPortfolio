// import React from "react";

// export default function Education() {
//   return (
//     <section id="education" className="py-20 bg-gray-50">
//       <div className="max-w-5xl mx-auto px-6">
//         {/* Title */}
//         <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800">
//           Education 🎓
//         </h2>

//         {/* Timeline */}
//         <div className="relative border-l-4 border-indigo-500">
//           {/* Degree */}
//           <div className="mb-10 ml-8">
//             {/* Timeline Dot */}
//             <div className="absolute w-6 h-6 bg-indigo-500 rounded-full -left-3.5 border-4 border-white"></div>

//             {/* Card */}
//             <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
//               <h3 className="text-xl font-semibold text-gray-900">
//                 Bachelor of Science —{" "}
//                 <span className="text-indigo-600">Physics</span>
//               </h3>
//               <p className="text-sm text-gray-500 mt-1">
//                 The New College (2015 - 2018)
//               </p>
//             </div>
//           </div>

//           {/* Example - Add MCA */}
//           <div className="ml-8">
//             <div className="absolute w-6 h-6 bg-indigo-500 rounded-full -left-3.5 border-4 border-white"></div>
//             <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
//               <h3 className="text-xl font-semibold text-gray-900">
//                 Master of Computer Applications —{" "}
//                 <span className="text-indigo-600">MCA</span>
//               </h3>
//               <p className="text-sm text-gray-500 mt-1">
//                 University of Madras (2022 - 2024)
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { motion } from "framer-motion";
import { fadeUp, stagger, revealViewport } from "./motion";

const items = [
  {
    degree: "Master of Computer Applications",
    highlight: "MCA",
    school: "University of Madras",
    period: "2022 – 2024",
  },
  {
    degree: "Bachelor of Science",
    highlight: "Physics",
    school: "The New College",
    period: "2015 – 2018",
  },
];

export default function Education() {
  return (
    <section
      id="education"
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
          // education
        </motion.p>
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={revealViewport}
          variants={fadeUp}
          className="text-4xl font-extrabold text-center mb-14 text-[#1A1D23] dark:text-white"
        >
          Education
        </motion.h2>

        <div className="relative pl-8">
          <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#E4E7EB] dark:bg-[#232935] rounded-full" />
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={revealViewport}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "top" }}
            className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#10B981] rounded-full"
          />

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={revealViewport}
            variants={stagger(0.15)}
            className="space-y-8"
          >
            {items.map((item) => (
              <motion.div
                key={item.degree}
                variants={fadeUp}
                className="relative ml-8"
              >
                <span className="absolute w-4 h-4 bg-[#10B981] rounded-full -left-[38px] top-1.5 border-4 border-[#F6F7F5] dark:border-[#0B0E14]" />
                <motion.div
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.25 }}
                  className="bg-white dark:bg-[#121722] p-6 rounded-2xl border border-[#E4E7EB] dark:border-[#232935] shadow-sm hover:shadow-lg"
                >
                  <h3 className="text-xl font-semibold text-[#1A1D23] dark:text-white">
                    {item.degree} —{" "}
                    <span className="text-[#10B981]">{item.highlight}</span>
                  </h3>
                  <p className="text-sm font-mono text-[#66707F] dark:text-[#94A0AF] mt-1">
                    {item.school} · {item.period}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
