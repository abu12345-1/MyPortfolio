import React from "react";

export default function Contact() {
  return (
    // <section id="contact" className="py-16">
    //   <div className="max-w-4xl mx-auto px-4">
    //     <h2 className="text-3xl font-bold mb-4 text-center">Contact</h2>
    //     <div className="bg-white p-6 rounded-lg shadow text-center">
    //       <p className="text-gray-700"><strong>Email:</strong> abubucker705@gmail.com</p>
    //       <p className="text-gray-700"><strong>Phone:</strong> 63829 17208</p>
    //       <div className="mt-4">
    //         {/* <a href="https://github.com/" className="mr-3 underline" target="_blank">GitHub</a> */}
    //         <a href="https://www.linkedin.com/in/abubucker-j" className="underline" target="_blank">LinkedIn</a>
    //       </div>
    //     </div>
    //   </div>
    // </section>

    <section
      id="contact"
      className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50"
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-4xl font-extrabold mb-10 text-center text-gray-800">
          Contact 📬
        </h2>

        {/* Card */}
        <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-2xl transition-all duration-300">
          {/* Email */}
          <div className="mb-4">
            <p className="flex items-center justify-center gap-2 text-gray-700">
              <span className="text-indigo-600 text-lg">📧</span>
              <strong>Email:</strong>
              <a
                href="mailto:abubucker970@gmail.com"
                className="text-indigo-600 hover:underline"
              >
                abubucker970@gmail.com
              </a>
            </p>
          </div>

          {/* Phone */}
          <div className="mb-6">
            <p className="flex items-center justify-center gap-2 text-gray-700">
              <span className="text-green-600 text-lg">📞</span>
              <strong>Phone:</strong>
              <a
                href="tel:75502 52619"
                className="text-indigo-600 hover:underline"
              >
                75502 52619
              </a>
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mt-6">
            {/* <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition">
              <span>🐙</span> GitHub
            </a> */}
            <a
              href="https://www.linkedin.com/in/abubucker-j"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
            >
              <span>💼</span> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
