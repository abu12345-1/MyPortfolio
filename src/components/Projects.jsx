// import React from 'react'

// const projects = [
//   {
//     title: "Wayfair",
//     desc: "Frontend work focusing on modular components, performance, and accessibility."
//   },
//   {
//     title: "BillingParadise",
//     desc: "Designed responsive UI, integrated APIs, and implemented secure auth flows."
//   },
//   {
//     title: "Chewy",
//     desc: "Developed reusable components, real-time updates, and deployment pipelines."
//   }
// ]

// export default function Projects() {
//   return (
//     // <section id="projects" className="py-16">
//     //   <div className="max-w-4xl mx-auto px-4">
//     //     <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
//     //     <div className="grid md:grid-cols-3 gap-6">
//     //       {projects.map(p => (
//     //         <div key={p.title} className="bg-white p-5 rounded-lg shadow">
//     //           <h3 className="font-semibold text-lg mb-2">{p.title}</h3>
//     //           <p className="text-sm text-gray-700">{p.desc}</p>
//     //         </div>
//     //       ))}
//     //     </div>
//     //   </div>
//     // </section>

//     <section id="projects" className="py-20 bg-gradient-to-r from-indigo-50 to-blue-50">
//       <div className="max-w-6xl mx-auto px-6">
//         {/* Title */}
//         <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800">
//           Projects 📂
//         </h2>

//         {/* Project Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((p) => (
//             <div
//               key={p.title}
//               className="group bg-white rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden">
//               {/* Thumbnail (optional, if p.image exists) */}
//               {p.image && (
//                 <div className="h-40 w-full overflow-hidden">
//                   <img
//                     src={p.image}
//                     alt={p.title}
//                     className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
//                 </div>
//               )}

//               {/* Content */}
//               <div className="p-6">
//                 <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition">
//                   {p.title}
//                 </h3>
//                 <p className="text-sm text-gray-600 mb-4">{p.desc}</p>

//                 {/* Tags (optional if p.tags exists) */}
//                 {p.tags && (
//                   <div className="flex flex-wrap gap-2 mb-4">
//                     {p.tags.map((tag, i) => (
//                       <span
//                         key={i}
//                         className="px-3 py-1 bg-indigo-100 text-indigo-600 text-xs rounded-full">
//                         {tag}
//                       </span>
//                     ))}
//                   </div>
//                 )}

//                 {/* Action Buttons */}
//                 <div className="flex gap-3">
//                   {p.demo && (
//                     <a
//                       href={p.demo}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="px-4 py-2 text-sm font-medium bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
//                       Live Demo
//                     </a>
//                   )}
//                   {p.github && (
//                     <a
//                       href={p.github}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="px-4 py-2 text-sm font-medium border border-gray-300 rounded-lg hover:border-indigo-600 hover:text-indigo-600 transition">
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

//   )
// }

import React from "react";

// const projects = [
//   {
//     title: "Wayfair – E-Commerce Frontend",
//     desc: "Developed a large-scale e-commerce UI with modular React components, advanced performance optimization, real-time updates, secure auth, and global CI/CD deployments.",
//     tags: ["React.js", "Redux Toolkit", "Tailwind", "GraphQL", "WebSockets", "JWT"]
//   },
//   {
//     title: "BillingParadise – Healthcare Billing Platform",
//     desc: "Built secure, compliant billing UIs with reusable components, real-time claim updates, MFA/RBAC authentication, optimized workflows, and scalable AWS deployments.",
//     tags: ["React.js", "Redux Toolkit", "MUI", "GraphQL", "RBAC", "MFA", "AWS"]
//   },
//   {
//     title: "Chewy – Pet E-Commerce Platform",
//     desc: "Created responsive product & cart experiences, integrated REST/GraphQL APIs, improved rendering performance, and implemented CI/CD + secure login flows.",
//     tags: ["React.js", "Redux Toolkit", "SCSS", "GraphQL", "OAuth", "Jenkins"]
//   },
//   {
//     title: "SaaS Analytics Dashboard",
//     desc: "Developed a high-performance analytics dashboard with charts, drill-downs, export features, role-based access, real-time API data, and optimized rendering.",
//     tags: ["React.js", "Recharts", "Redux Thunk", "Charts", "RBAC", "Lighthouse"]
//   },
//   {
//     title: "Real Estate Booking Portal",
//     desc: "Built a real-estate platform with property listings, advanced filters, booking workflows, maps, scheduling systems, real-time updates, and AWS deployments.",
//     tags: ["React.js", "Redux Toolkit", "React Hook Form", "SSR/ISR", "AWS Amplify"]
//   }

// ]

const projects = [
  {
    title: "StyleVault – Myntra Studio",
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
    title: "ClaimIQ – Snapsheet Insurance Portal",
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
    title: "PetPulse – Petbarn Commerce Platform",
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
    title: "AdminFlow – Zoho Creator Custom Portal",
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
      className="py-20 bg-gradient-to-r from-indigo-50 to-blue-50"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800">
          Projects 📂
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p) => (
            <div
              key={p.title}
              className="group bg-white rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
            >
              {p.image && (
                <div className="h-40 w-full overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>
              )}

              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition">
                  {p.title}
                </h3>

                <p className="text-sm text-gray-600 mb-4">{p.desc}</p>

                {p.tags && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-indigo-100 text-indigo-600 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex gap-3">
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-sm font-medium bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                    >
                      Live Demo
                    </a>
                  )}
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-sm font-medium border border-gray-300 rounded-lg hover:border-indigo-600 hover:text-indigo-600 transition"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
