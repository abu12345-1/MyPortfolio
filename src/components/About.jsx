import React from "react";

export default function About() {
  return (
    // <section id="about" className="py-16 bg-gray-50">
    //   <div className="max-w-4xl mx-auto px-4">
    //     <h2 className="text-3xl font-bold mb-4">About Me</h2>
    //     <p className="text-gray-700 leading-relaxed">
    //       Experienced Frontend Developer with 5+ years of delivering scalable and high-performance web applications using modern JavaScript frameworks and tooling.
    //       Proficient in React.js and Redux (Toolkit, Thunk, Saga), with in-depth knowledge of component-driven development and React Hooks.
    //     </p>
    //     <p className="mt-4 text-gray-700 leading-relaxed">
    //       Specialized in building responsive and accessible UIs using Tailwind CSS, Material UI, SASS/SCSS, and Bootstrap.
    //       Skilled at front-end performance tuning with lazy loading, code splitting, and memoization.
    //     </p>

    //   </div>
    // </section>

    <section
      id="about"
      className="py-20 bg-gray-50 dark:bg-slate-900 dark:text-gray-100"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800">
          About Me 👨‍💻
        </h2>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Profile Image */}
          <div className="flex justify-center">
            <img
              src="/port-img.jpeg" // replace with your photo
              alt="Abubucker"
              className="w-64 h-64 object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* About Content */}
          <div>
            <p className="text-gray-700 leading-relaxed text-lg">
              I’m an{" "}
              <span className="font-semibold text-indigo-600">
                Experienced Frontend Developer
              </span>
              with <span className="font-semibold">4+ years</span> of delivering
              scalable and high-performance web applications using modern
              JavaScript frameworks and tooling.
            </p>

            <p className="mt-4 text-gray-700 leading-relaxed text-lg">
              Proficient in{" "}
              <span className="font-semibold text-indigo-600">React.js</span>{" "}
              and
              <span className="font-semibold text-indigo-600"> Redux</span>,
              with in-depth knowledge of component-driven development and React
              Hooks.
            </p>

            <p className="mt-4 text-gray-700 leading-relaxed text-lg">
              Specialized in building responsive and accessible UIs using
              <span className="font-semibold text-indigo-600">
                {" "}
                Tailwind CSS, Material UI, SASS/SCSS
              </span>
              , and{" "}
              <span className="font-semibold text-indigo-600">Bootstrap</span>.
              Skilled at front-end performance tuning with
              <span className="font-semibold">
                {" "}
                lazy loading, code splitting, and memoization
              </span>
              .
            </p>

            {/* Button */}
            {/* <div className="mt-6">
              <a
                href="#projects"
                className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition">
                View My Work 🚀
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
