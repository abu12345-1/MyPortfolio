import { motion } from "framer-motion";
import { fadeUp, fadeIn, stagger, revealViewport } from "./motion";

export default function About() {
  return (
    <section
      id="about"
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
          // about me
        </motion.p>
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={revealViewport}
          variants={fadeUp}
          className="text-4xl font-extrabold text-center mb-14 text-[#1A1D23] dark:text-white"
        >
          About
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile image with a bracket frame, like a highlighted code block */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={revealViewport}
            variants={fadeIn}
            className="flex justify-center"
          >
            <div className="relative w-64 h-64">
              <span className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-[#10B981] rounded-tl-lg" />
              <span className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-[#10B981] rounded-br-lg" />
              <motion.img
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                src="/port-img.jpeg"
                alt="Abubucker"
                className="w-64 h-64 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </motion.div>

          {/* About content, staggered line by line */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={revealViewport}
            variants={stagger(0.15)}
          >
            <motion.p
              variants={fadeUp}
              className="text-[#1A1D23]/80 dark:text-[#E7E9EC]/80 leading-relaxed text-lg"
            >
              I'm an{" "}
              <span className="font-semibold text-[#10B981]">
                experienced Frontend Developer
              </span>{" "}
              with{" "}
              <span className="font-semibold text-[#1A1D23] dark:text-white">
                4.6 years
              </span>{" "}
              of delivering scalable and high-performance web applications using
              modern JavaScript frameworks and tooling.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-4 text-[#1A1D23]/80 dark:text-[#E7E9EC]/80 leading-relaxed text-lg"
            >
              Proficient in{" "}
              <span className="font-semibold text-[#10B981]">React.js</span> and{" "}
              <span className="font-semibold text-[#10B981]">Redux</span>, with
              in-depth knowledge of component-driven development and React
              Hooks.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-4 text-[#1A1D23]/80 dark:text-[#E7E9EC]/80 leading-relaxed text-lg"
            >
              Specialized in building responsive and accessible UIs using{" "}
              <span className="font-semibold text-[#10B981]">
                Tailwind CSS, Material UI, SASS/SCSS
              </span>{" "}
              and{" "}
              <span className="font-semibold text-[#10B981]">Bootstrap</span>.
              Skilled at front-end performance tuning with{" "}
              <span className="font-semibold text-[#1A1D23] dark:text-white">
                lazy loading, code splitting, and memoization
              </span>
              .
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
