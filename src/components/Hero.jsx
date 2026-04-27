import React from "react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center 
    bg-gradient-to-r from-blue-600 to-indigo-600 text-white
    dark:from-slate-800 dark:to-gray-900"
      style={{ backgroundImage: "url('/SDE.webp')" }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/SDE.webp')" }}
      ></div>
      {/* Dim Overlay */}
      <div className="absolute inset-0 bg-black/30"></div> {/* 50% black dim */}
      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
          Hi, I'm Abubucker 👋
        </h1>
        <p className="text-lg md:text-2xl">
          Frontend Developer • React.js • Redux
        </p>
        <div className="mt-6 flex items-center justify-center gap-4">
          <a
            href="/Abubucker_Frontend_Developer_Resume.pdf"
            className="bg-white text-blue-600 px-5 py-2 rounded shadow"
          >
            Download Resume
          </a>
          <a
            href="#contact"
            className="border border-white px-5 py-2 rounded hover:bg-white/20"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
