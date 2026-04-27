import React from "react";

export default function Education() {
  return (
    // <section id="education" className="py-16 bg-gray-50">
    //   <div className="max-w-4xl mx-auto px-4">
    //     <h2 className="text-3xl font-bold mb-4">Education</h2>
    //     <div className="bg-white p-6 rounded-lg shadow">
    //       <h3 className="font-semibold text-xl">Bachelor of Science — Physics</h3>
    //       <p className="text-sm text-gray-600">The New College (2015 - 2018)</p>
    //     </div>
    //   </div>
    // </section>

    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800">
          Education 🎓
        </h2>

        {/* Timeline */}
        <div className="relative border-l-4 border-indigo-500">
          {/* Degree */}
          <div className="mb-10 ml-8">
            {/* Timeline Dot */}
            <div className="absolute w-6 h-6 bg-indigo-500 rounded-full -left-3.5 border-4 border-white"></div>

            {/* Card */}
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-semibold text-gray-900">
                Bachelor of Science —{" "}
                <span className="text-indigo-600">Physics</span>
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                The New College (2015 - 2018)
              </p>
            </div>
          </div>

          {/* Example - Add MCA */}
          <div className="ml-8">
            <div className="absolute w-6 h-6 bg-indigo-500 rounded-full -left-3.5 border-4 border-white"></div>
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-semibold text-gray-900">
                Master of Computer Applications —{" "}
                <span className="text-indigo-600">MCA</span>
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                University of Madras (2022 - 2024)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
