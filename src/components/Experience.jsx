// import { motion } from "framer-motion";
// import { fadeUp, stagger, revealViewport } from "./motion";

// const responsibilities = [
//   "Developed responsive, user-centric interfaces using React.js and Tailwind CSS.",
//   "Built reusable and modular components to support scalable healthcare applications.",
//   "Integrated RESTful APIs and GraphQL for dynamic data handling and real-time updates.",
//   "Managed application state using Redux Toolkit and Context API.",
//   "Implemented responsive design and accessibility standards (WCAG).",
//   "Conducted UI testing with Jest, Cypress, and React Testing Library.",
//   "Collaborated with backend teams for seamless integration and improved API performance.",
//   "Actively contributed in Agile/Scrum (sprint planning, code reviews, daily stand-ups).",
//   "Assisted in automating business processes and API integrations to streamline operations.",
// ];

// export default function Experience() {
//   return (
//     <section
//       id="experience"
//       className="py-24 bg-white dark:bg-[#0D1117] transition-colors duration-300"
//     >
//       <div className="max-w-5xl mx-auto px-6">
//         <motion.p
//           initial="hidden"
//           whileInView="show"
//           viewport={revealViewport}
//           variants={fadeUp}
//           className="font-mono text-sm text-[#10B981] text-center mb-2"
//         >
//           // experience
//         </motion.p>
//         <motion.h2
//           initial="hidden"
//           whileInView="show"
//           viewport={revealViewport}
//           variants={fadeUp}
//           className="text-4xl font-extrabold text-center mb-14 text-[#1A1D23] dark:text-white"
//         >
//           Experience
//         </motion.h2>

//         <div className="relative pl-8">
//           {/* Track (static) + fill (animates in on scroll, like a progress line) */}
//           <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#E4E7EB] dark:bg-[#232935] rounded-full" />
//           <motion.div
//             initial={{ scaleY: 0 }}
//             whileInView={{ scaleY: 1 }}
//             viewport={revealViewport}
//             transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
//             style={{ transformOrigin: "top" }}
//             className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#10B981] rounded-full"
//           />

//           <motion.div
//             initial="hidden"
//             whileInView="show"
//             viewport={revealViewport}
//             variants={stagger(0.15)}
//             className="relative -ml-8"
//           >
//             <div className="ml-8">
//               <motion.div variants={fadeUp} className="relative">
//                 <motion.span
//                   animate={{
//                     boxShadow: [
//                       "0 0 0 0 rgba(16,185,129,0.4)",
//                       "0 0 0 8px rgba(16,185,129,0)",
//                     ],
//                   }}
//                   transition={{
//                     duration: 2,
//                     repeat: Infinity,
//                     ease: "easeOut",
//                   }}
//                   className="absolute w-4 h-4 bg-[#10B981] rounded-full -left-[38px] top-1.5 border-4 border-white dark:border-[#0D1117]"
//                 />

//                 <div className="bg-[#F6F7F5] dark:bg-[#121722] p-6 rounded-2xl border border-[#E4E7EB] dark:border-[#232935] shadow-sm hover:shadow-lg transition-shadow duration-300">
//                   <h3 className="text-xl font-semibold text-[#1A1D23] dark:text-white">
//                     EliteCode Technological Solutions Pvt Ltd —{" "}
//                     <span className="text-[#10B981]">Frontend Developer</span>
//                   </h3>
//                   <p className="text-sm font-mono text-[#66707F] dark:text-[#94A0AF] mt-1">
//                     Jan 2022 — Present · Chennai
//                   </p>

//                   <motion.ul
//                     variants={stagger(0.06)}
//                     className="mt-4 space-y-2 text-[#1A1D23]/85 dark:text-[#E7E9EC]/85 text-sm"
//                   >
//                     {responsibilities.map((item, i) => (
//                       <motion.li
//                         key={i}
//                         variants={fadeUp}
//                         className="flex gap-2"
//                       >
//                         <span className="text-[#10B981] font-mono">›</span>
//                         {item}
//                       </motion.li>
//                     ))}
//                   </motion.ul>
//                 </div>
//               </motion.div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { motion } from "framer-motion";
import { fadeUp, stagger, revealViewport } from "./motion";

const responsibilities = [
  "Designed and implemented RESTful APIs and modular microservices using Spring Boot, applying clean code, OOP and separation-of-concerns principles.",
  "Implemented backend business logic using Spring MVC, Spring Data JPA and Hibernate — including validation, exception handling, logging and persistence.",
  "Built reusable, responsive React.js components with JavaScript, HTML5, CSS3 and Redux; integrated workflows with backend REST APIs.",
  "Implemented authentication, authorization and role-based access control (RBAC) using Spring Security for secure API and application access.",
  "Worked with MySQL/PostgreSQL and MongoDB for storage, retrieval, CRUD, indexing and query optimization.",
  "Created unit and integration tests with JUnit and Mockito; used Postman for API development, validation, troubleshooting and regression checks.",
  "Investigated production defects, performed root-cause analysis and delivered fixes within agreed timelines.",
  "Used Git/GitHub/GitLab for source control; participated in code reviews, sprint planning, stand-ups and Agile ceremonies.",
  "Collaborated with frontend, backend, QA, business analysis and DevOps teams across the full SDLC.",
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 bg-white dark:bg-[#0D1117] transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto px-6">
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={revealViewport}
          variants={fadeUp}
          className="font-mono text-sm text-[#10B981] text-center mb-2"
        >
          // experience
        </motion.p>
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={revealViewport}
          variants={fadeUp}
          className="text-4xl font-extrabold text-center mb-14 text-[#1A1D23] dark:text-white"
        >
          Experience
        </motion.h2>

        <div className="relative pl-8">
          <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#E4E7EB] dark:bg-[#232935] rounded-full" />
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={revealViewport}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "top" }}
            className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#10B981] rounded-full"
          />

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={revealViewport}
            variants={stagger(0.15)}
            className="relative -ml-8"
          >
            <div className="ml-8">
              <motion.div variants={fadeUp} className="relative">
                <motion.span
                  animate={{
                    boxShadow: [
                      "0 0 0 0 rgba(16,185,129,0.4)",
                      "0 0 0 8px rgba(16,185,129,0)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                  className="absolute w-4 h-4 bg-[#10B981] rounded-full -left-[38px] top-1.5 border-4 border-white dark:border-[#0D1117]"
                />

                <div className="bg-[#F6F7F5] dark:bg-[#121722] p-6 rounded-2xl border border-[#E4E7EB] dark:border-[#232935] shadow-sm hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-semibold text-[#1A1D23] dark:text-white">
                    Elitecode Technological Solutions Pvt Ltd —{" "}
                    <span className="text-[#10B981]">
                      Java Full Stack Developer
                    </span>
                  </h3>
                  <p className="text-sm font-mono text-[#66707F] dark:text-[#94A0AF] mt-1">
                    Jan 2022 — Present · Chennai
                  </p>

                  <motion.ul
                    variants={stagger(0.05)}
                    className="mt-4 space-y-2 text-[#1A1D23]/85 dark:text-[#E7E9EC]/85 text-sm"
                  >
                    {responsibilities.map((item, i) => (
                      <motion.li
                        key={i}
                        variants={fadeUp}
                        className="flex gap-2"
                      >
                        <span className="text-[#10B981] font-mono">›</span>
                        {item}
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
