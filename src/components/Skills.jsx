import React from "react";

export default function Skills() {
  const skillCategories = {
    Frontend: [
      "React.js",
      "Next.js",
      "Redux",
      "JavaScript (ES6+)",
      "React Hooks",
      "Context API",
    ],
    "UI & Styling": ["Tailwind CSS", "Bootstrap", "Material UI", "SASS/SCSS"],
    Performance: [
      "Lazy Loading",
      "Code Splitting",
      "Memoization",
      "Virtual DOM",
    ],
    "API & Data": [
      "RESTful APIs",
      "Data Fetching",
      "Chrome DevTools",
      "Lighthouse",
    ],
  };

  return (
    // <section id="skills" className="py-16">
    //   <div className="max-w-4xl mx-auto px-4">
    //     <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
    //     <div className="grid md:grid-cols-2 gap-6">
    //       {Object.entries(skillCategories).map(([cat, skills]) => (
    //         <div key={cat} className="bg-white p-6 rounded-lg shadow">
    //           <h3 className="font-semibold text-xl mb-3">{cat}</h3>
    //           <ul className="list-disc list-inside text-sm text-gray-700">
    //             {skills.map(s => <li key={s}>{s}</li>)}
    //           </ul>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </section>

    <section
      id="skills"
      className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800">
          Skills 🚀
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skillCategories).map(([cat, skills]) => (
            <div
              key={cat}
              className="group bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Category Title */}
              <h3 className="font-semibold text-xl mb-4 text-indigo-600 flex items-center gap-2">
                <span className="text-indigo-500 group-hover:scale-125 transform transition duration-300">
                  ✨
                </span>
                {cat}
              </h3>

              {/* Skill List */}
              <ul className="space-y-2 text-gray-700 text-sm">
                {skills.map((s, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 hover:text-indigo-600 transition"
                  >
                    <span className="w-2 h-2 bg-indigo-400 rounded-full"></span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
