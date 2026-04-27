// import { useEffect, useState } from "react";
// import { Moon } from "react-feather";
// import { FiMenu, FiX } from "react-icons/fi";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')

//   useEffect(() => {
//     if (theme === 'dark') {
//       document.documentElement.classList.add('dark')
//     } else {
//       document.documentElement.classList.remove('dark')
//     }
//     localStorage.setItem('theme', theme)
//   }, [theme])

//   const links = [
//     { name: "Home", href: "#home" },
//     { name: "About", href: "#about" },
//     { name: "Skills", href: "#skills" },
//     { name: "Experience", href: "#experience" },
//     { name: "Projects", href: "#projects" },
//     { name: "Contact", href: "#contact" },
//   ];

//   return (
//     <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-md">
//       <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">

//         {/* Logo */}
//         <div className="text-2xl font-extrabold text-indigo-600 tracking-wide">
//           Abubucker
//         </div>

//         {/* Desktop Links */}
//         <ul className="hidden md:flex space-x-8 text-sm font-medium">
//           {links.map((link) => (
//             <li key={link.name}>
//               <a
//                 href={link.href}
//                 className="relative text-gray-700 hover:text-indigo-600 transition">
//                 {link.name}
//                 <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
//               </a>
//             </li>
//           ))}
//         </ul>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden text-2xl text-gray-700"
//           onClick={() => setIsOpen(!isOpen)}>
//           {isOpen ? <FiX /> : <FiMenu />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-white/95 shadow-lg px-6 py-4 space-y-4 text-center">
//           {links.map((link) => (
//             <a
//               key={link.name}
//               href={link.href}
//               className="block text-gray-700 font-medium hover:text-indigo-600 transition"
//               onClick={() => setIsOpen(false)}>
//               {link.name}
//             </a>
//           ))}
//           <button
//             onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
//             className="ml-4 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-slate-700">
//             {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
//           </button>
//         </div>
//       )}
//     </nav>
//   );
// }

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-md shadow-md z-50 border-b border-gray-200 transition-all duration-300">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-3 px-6 md:px-10">

        {/* Logo */}
        <div className="text-2xl md:text-3xl font-extrabold text-indigo-600 tracking-wide hover:scale-105 transition-transform">
          Abubucker
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-sm font-semibold">
          {links.map((link) => (
            <li key={link.name} className="group relative">
              <a
                href={link.href}
                className="text-gray-700 hover:text-indigo-600 transition-all duration-300">
                {link.name}
                <span className="absolute left-0 bottom-[-5px] w-0 h-[2px] bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button (Hire Me / Resume) */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="bg-indigo-600 text-white px-5 py-2 rounded-full font-medium hover:bg-indigo-700 transition shadow-md hover:shadow-lg">
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 w-full md:hidden bg-white/95 shadow-lg transition-all duration-500 ease-in-out ${isOpen
          ? "opacity-100 translate-y-0 visible"
          : "opacity-0 -translate-y-5 invisible"
          }`}>
        <div className="px-6 py-4 space-y-4 text-center">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-gray-700 font-medium hover:text-indigo-600 transition"
              onClick={() => setIsOpen(false)}>
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-block bg-indigo-600 text-white px-5 py-2 rounded-full font-medium hover:bg-indigo-700 transition shadow-md hover:shadow-lg"
            onClick={() => setIsOpen(false)}>
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
}
