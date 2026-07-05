// import React from 'react'
// import Navbar from './components/Navbar'
// import Hero from './components/Hero'
// import About from './components/About'
// import Skills from './components/Skills'
// import Experience from './components/Experience'
// import Projects from './components/Projects'
// import Education from './components/Education'
// import Contact from './components/Contact'
// import Footer from './components/Footer'

// export default function App() {
//   return (
//     <div className="min-h-screen">
//       <Navbar />
//       <main className="pt-20">
//         <Hero />
//         <About />
//         <Skills />
//         <Experience />
//         <Projects />
//         <Education />
//         <Contact />
//       </main>
//       <Footer />
//     </div>
//   )
// }

import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";

export default function App() {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Navbar />
      <main className="pt-20">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
