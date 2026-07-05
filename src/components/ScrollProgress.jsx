import { motion, useScroll, useSpring } from "framer-motion";

// Thin progress bar pinned to the very top of the viewport, filling as the
// visitor scrolls through the page. Small, useful, unobtrusive.
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[60] bg-[#10B981] dark:bg-[#34D399]"
    />
  );
}
