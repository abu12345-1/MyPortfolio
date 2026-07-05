// import React from "react";

// export default function Contact() {
//   return (
//     <section
//       id="contact"
//       className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50"
//     >
//       <div className="max-w-4xl mx-auto px-6">
//         {/* Title */}
//         <h2 className="text-4xl font-extrabold mb-10 text-center text-gray-800">
//           Contact 📬
//         </h2>

//         {/* Card */}
//         <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-2xl transition-all duration-300">
//           {/* Email */}
//           <div className="mb-4">
//             <p className="flex items-center justify-center gap-2 text-gray-700">
//               <span className="text-indigo-600 text-lg">📧</span>
//               <strong>Email:</strong>
//               <a
//                 href="mailto:abubucker970@gmail.com"
//                 className="text-indigo-600 hover:underline"
//               >
//                 abubucker970@gmail.com
//               </a>
//             </p>
//           </div>

//           {/* Phone */}
//           <div className="mb-6">
//             <p className="flex items-center justify-center gap-2 text-gray-700">
//               <span className="text-green-600 text-lg">📞</span>
//               <strong>Phone:</strong>
//               <a
//                 href="tel:75502 52619"
//                 className="text-indigo-600 hover:underline"
//               >
//                 75502 52619
//               </a>
//             </p>
//           </div>

//           {/* Social Links */}
//           <div className="flex justify-center gap-6 mt-6">
//             {/* <a
//               href="https://github.com/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition">
//               <span>🐙</span> GitHub
//             </a> */}
//             <a
//               href="https://www.linkedin.com/in/abubucker-j"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
//             >
//               <span>💼</span> LinkedIn
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { motion } from "framer-motion";
import { FiMail, FiPhone, FiLinkedin } from "react-icons/fi";
import { fadeUp, stagger, revealViewport } from "./motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-[#F6F7F5] dark:bg-[#0B0E14] transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto px-6">
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={revealViewport}
          variants={fadeUp}
          className="font-mono text-sm text-[#10B981] text-center mb-2"
        >
          // contact
        </motion.p>
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={revealViewport}
          variants={fadeUp}
          className="text-4xl font-extrabold text-center mb-10 text-[#1A1D23] dark:text-white"
        >
          Let's talk
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={revealViewport}
          variants={stagger(0.12)}
          className="bg-white dark:bg-[#121722] p-8 rounded-2xl shadow-lg border border-[#E4E7EB] dark:border-[#232935] text-center hover:shadow-2xl transition-shadow duration-300"
        >
          <motion.div variants={fadeUp} className="mb-4">
            <p className="flex items-center justify-center gap-2 text-[#1A1D23] dark:text-[#E7E9EC]">
              <FiMail className="text-[#10B981]" size={18} />
              <strong>Email:</strong>
              <a
                href="mailto:abubucker970@gmail.com"
                className="text-[#10B981] hover:underline"
              >
                abubucker970@gmail.com
              </a>
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="mb-6">
            <p className="flex items-center justify-center gap-2 text-[#1A1D23] dark:text-[#E7E9EC]">
              <FiPhone className="text-[#10B981]" size={18} />
              <strong>Phone:</strong>
              <a
                href="tel:+917550252619"
                className="text-[#10B981] hover:underline"
              >
                +91 75502 52619
              </a>
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex justify-center gap-6 mt-6"
          >
            <motion.a
              href="https://www.linkedin.com/in/abubucker-j"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center gap-2 px-4 py-2 bg-[#0A66C2] text-white rounded-full hover:shadow-md transition"
            >
              <FiLinkedin size={16} /> LinkedIn
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
