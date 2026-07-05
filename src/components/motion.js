// Shared Framer Motion variants + design tokens for the portfolio.
// Keeping these centralized means every section animates with the same
// rhythm instead of each component inventing its own timing.

export const EASE = [0.22, 1, 0.36, 1];

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.7, ease: EASE } },
};

export const stagger = (staggerChildren = 0.12, delayChildren = 0) => ({
  hidden: {},
  show: {
    transition: { staggerChildren, delayChildren },
  },
});

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: EASE } },
};

// Standard viewport settings for scroll-triggered reveals — fires once,
// slightly before the element is fully in view.
export const revealViewport = { once: true, margin: "-80px" };

// Color tokens (referenced in comments; applied via Tailwind arbitrary values
// since no tailwind.config.js was provided). "Build console" palette:
// a nod to the CI/testing-heavy resume this site is built for.
export const tokens = {
  bgLight: "#F6F7F5",
  bgDark: "#0B0E14",
  surfaceLight: "#FFFFFF",
  surfaceDark: "#121722",
  borderLight: "#E4E7EB",
  borderDark: "#232935",
  textLight: "#1A1D23",
  textDark: "#E7E9EC",
  mutedLight: "#66707F",
  mutedDark: "#94A0AF",
  accent: "#10B981", // "pass" green — build success
  accentSoft: "#D1FAE5",
  accent2: "#F59E0B", // amber — highlight / active state
};
