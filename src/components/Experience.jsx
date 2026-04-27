import React from "react";

export default function Experience() {
  return (
    // <section id="experience" className="py-16 bg-gray-50">
    //   <div className="max-w-4xl mx-auto px-4">
    //     <h2 className="text-3xl font-bold mb-6">Experience</h2>
    //     <div className="bg-white p-6 rounded-lg shadow">
    //       <h3 className="font-semibold text-xl">Delta ITech Solutions — Software Engineer</h3>
    //       <p className="text-sm text-gray-600">Mar 2020 — Present | Bangalore</p>
    //       <ul className="mt-4 list-disc list-inside text-gray-700">
    //         <li>Developed responsive, user-centric interfaces using React.js and Tailwind CSS.</li>
    //         <li>Built reusable and modular components to support scalable healthcare applications.</li>
    //         <li>Integrated RESTful APIs and GraphQL for dynamic data handling and real-time updates.</li>
    //         <li>Managed application state using Redux Toolkit and Context API.</li>
    //         <li>Implemented responsive design and accessibility standards (WCAG).</li>
    //         <li>Conducted UI testing with Jest, Cypress, and React Testing Library.</li>
    //         <li>Collaborated with backend teams for seamless integration and improved API performance.</li>
    //         <li>Actively contributed in Agile/Scrum (sprint planning, code reviews, daily stand-ups).</li>
    //         <li>Assisted in automating business processes and API integrations to streamline operations.</li>
    //       </ul>
    //     </div>
    //   </div>
    // </section>

    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800">
          Experience 💼
        </h2>

        {/* Timeline Wrapper */}
        <div className="relative border-l-4 border-indigo-500">
          {/* Job Block */}
          <div className="mb-12 ml-8">
            <div className="absolute w-6 h-6 bg-indigo-500 rounded-full -left-3.5 border-4 border-white"></div>

            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
              {/* Role + Company */}
              <h3 className="text-xl font-semibold text-gray-900">
                Delta ITech Solutions —{" "}
                <span className="text-indigo-600">Software Engineer</span>
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                JAN 2022 — Present | Bangalore
              </p>

              {/* Responsibilities */}
              <ul className="mt-4 space-y-2 text-gray-700 text-sm">
                <li className="flex gap-2">
                  <span className="text-indigo-500">⚡</span>
                  Developed responsive, user-centric interfaces using React.js
                  and Tailwind CSS.
                </li>
                <li className="flex gap-2">
                  <span className="text-indigo-500">⚡</span>
                  Built reusable and modular components to support scalable
                  healthcare applications.
                </li>
                <li className="flex gap-2">
                  <span className="text-indigo-500">⚡</span>
                  Integrated RESTful APIs and GraphQL for dynamic data handling
                  and real-time updates.
                </li>
                <li className="flex gap-2">
                  <span className="text-indigo-500">⚡</span>
                  Managed application state using Redux Toolkit and Context API.
                </li>
                <li className="flex gap-2">
                  <span className="text-indigo-500">⚡</span>
                  Implemented responsive design and accessibility standards
                  (WCAG).
                </li>
                <li className="flex gap-2">
                  <span className="text-indigo-500">⚡</span>
                  Conducted UI testing with Jest, Cypress, and React Testing
                  Library.
                </li>
                <li className="flex gap-2">
                  <span className="text-indigo-500">⚡</span>
                  Collaborated with backend teams for seamless integration and
                  improved API performance.
                </li>
                <li className="flex gap-2">
                  <span className="text-indigo-500">⚡</span>
                  Actively contributed in Agile/Scrum (sprint planning, code
                  reviews, daily stand-ups).
                </li>
                <li className="flex gap-2">
                  <span className="text-indigo-500">⚡</span>
                  Assisted in automating business processes and API integrations
                  to streamline operations.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
