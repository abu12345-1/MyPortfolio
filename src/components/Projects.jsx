// const projects = [
//   {
//     title: "StyleVault – Myntra Studio",
//     desc: "Developed a scalable fashion e-commerce platform with modular React architecture, optimized performance, real-time content updates using ISR, secure JWT-based RBAC authentication, and reusable UI components for consistency.",
//     tags: [
//       "React.js",
//       "Next.js",
//       "TypeScript",
//       "Redux Toolkit",
//       "RTK Query",
//       "Tailwind",
//       "JWT",
//       "AWS S3",
//     ],
//   },
//   {
//     title: "ClaimIQ – Snapsheet Insurance Portal",
//     desc: "Built a real-time insurance claims platform with dynamic multi-step forms, WebSocket-based updates, secure OAuth SSO authentication, workflow management using Redux Saga, and strong accessibility compliance.",
//     tags: [
//       "React.js",
//       "Next.js",
//       "Redux Saga",
//       "Material UI",
//       "SCSS",
//       "REST APIs",
//       "OAuth",
//       "WebSockets",
//       "Jest",
//     ],
//   },
//   {
//     title: "PetPulse – Petbarn Commerce Platform",
//     desc: "Created a high-performance pet e-commerce platform with SSR/SSG, improved LCP performance, cross-device cart sync, and engaging loyalty UI experiences.",
//     tags: [
//       "React.js",
//       "Next.js",
//       "Redux Toolkit",
//       "Tailwind",
//       "Material UI",
//       "REST APIs",
//       "JWT",
//       "AWS Amplify",
//     ],
//   },
//   {
//     title: "AdminFlow – Zoho Creator Custom Portal",
//     desc: "Developed a workflow automation platform with drag-and-drop form builder, visual workflow management, secure OAuth integration, optimized deployment size, and strong performance with high test coverage.",
//     tags: [
//       "React.js",
//       "Next.js",
//       "TypeScript",
//       "Redux Toolkit",
//       "Bootstrap",
//       "REST APIs",
//       "OAuth",
//       "React Flow",
//     ],
//   },
// ];

// export default function Projects() {
//   return (
//     <section
//       id="projects"
//       className="py-20 bg-gradient-to-r from-indigo-50 to-blue-50"
//     >
//       <div className="max-w-6xl mx-auto px-6">
//         <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800">
//           Projects 📂
//         </h2>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((p) => (
//             <div
//               key={p.title}
//               className="group bg-white rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
//             >
//               {p.image && (
//                 <div className="h-40 w-full overflow-hidden">
//                   <img
//                     src={p.image}
//                     alt={p.title}
//                     className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
//                   />
//                 </div>
//               )}

//               <div className="p-6">
//                 <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition">
//                   {p.title}
//                 </h3>

//                 <p className="text-sm text-gray-600 mb-4">{p.desc}</p>

//                 {p.tags && (
//                   <div className="flex flex-wrap gap-2 mb-4">
//                     {p.tags.map((tag, i) => (
//                       <span
//                         key={i}
//                         className="px-3 py-1 bg-indigo-100 text-indigo-600 text-xs rounded-full"
//                       >
//                         {tag}
//                       </span>
//                     ))}
//                   </div>
//                 )}

//                 <div className="flex gap-3">
//                   {p.demo && (
//                     <a
//                       href={p.demo}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="px-4 py-2 text-sm font-medium bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
//                     >
//                       Live Demo
//                     </a>
//                   )}
//                   {p.github && (
//                     <a
//                       href={p.github}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="px-4 py-2 text-sm font-medium border border-gray-300 rounded-lg hover:border-indigo-600 hover:text-indigo-600 transition"
//                     >
//                       GitHub
//                     </a>
//                   )}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import { motion } from "framer-motion";
import { fadeUp, stagger, revealViewport } from "./motion";

const projects = [
  {
    title: "StyleVault",
    subtitle: "Myntra Studio",
    desc: "Developed a scalable fashion e-commerce platform with modular React architecture, optimized performance, real-time content updates using ISR, secure JWT-based RBAC authentication, and reusable UI components for consistency.",
    tags: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "RTK Query",
      "Tailwind",
      "JWT",
      "AWS S3",
    ],
  },
  {
    title: "ClaimIQ",
    subtitle: "Snapsheet Insurance Portal",
    desc: "Built a real-time insurance claims platform with dynamic multi-step forms, WebSocket-based updates, secure OAuth SSO authentication, workflow management using Redux Saga, and strong accessibility compliance.",
    tags: [
      "React.js",
      "Next.js",
      "Redux Saga",
      "Material UI",
      "SCSS",
      "REST APIs",
      "OAuth",
      "WebSockets",
      "Jest",
    ],
  },
  {
    title: "PetPulse",
    subtitle: "Petbarn Commerce Platform",
    desc: "Created a high-performance pet e-commerce platform with SSR/SSG, improved LCP performance, cross-device cart sync, and engaging loyalty UI experiences.",
    tags: [
      "React.js",
      "Next.js",
      "Redux Toolkit",
      "Tailwind",
      "Material UI",
      "REST APIs",
      "JWT",
      "AWS Amplify",
    ],
  },
  {
    title: "AdminFlow",
    subtitle: "Zoho Creator Custom Portal",
    desc: "Developed a workflow automation platform with drag-and-drop form builder, visual workflow management, secure OAuth integration, optimized deployment size, and strong performance with high test coverage.",
    tags: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "Bootstrap",
      "REST APIs",
      "OAuth",
      "React Flow",
    ],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 bg-white dark:bg-[#0D1117] transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={revealViewport}
          variants={fadeUp}
          className="font-mono text-sm text-[#10B981] text-center mb-2"
        >
          // projects
        </motion.p>
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={revealViewport}
          variants={fadeUp}
          className="text-4xl font-extrabold text-center mb-14 text-[#1A1D23] dark:text-white"
        >
          Projects
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={revealViewport}
          variants={stagger(0.12)}
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {projects.map((p) => (
            <motion.div
              key={p.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl overflow-hidden border border-[#E4E7EB] dark:border-[#232935] shadow-sm hover:shadow-xl bg-white dark:bg-[#121722]"
            >
              {/* IDE-window chrome header, referencing the file-based nature of the actual project */}
              <div className="flex items-center gap-1.5 bg-[#F6F7F5] dark:bg-[#0B0E14] px-4 py-2.5 border-b border-[#E4E7EB] dark:border-[#232935]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                <span className="ml-3 font-mono text-xs text-[#66707F] dark:text-[#94A0AF]">
                  {p.title.toLowerCase().replace(/\s+/g, "-")}.tsx
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-[#1A1D23] dark:text-white">
                  {p.title}{" "}
                  <span className="text-sm font-normal text-[#66707F] dark:text-[#94A0AF]">
                    — {p.subtitle}
                  </span>
                </h3>
                <p className="text-sm text-[#1A1D23]/70 dark:text-[#E7E9EC]/70 mt-3 mb-4 leading-relaxed">
                  {p.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((tag, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ y: -2 }}
                      className="px-3 py-1 bg-[#10B981]/10 text-[#10B981] dark:bg-[#10B981]/15 text-xs font-mono rounded-full"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
