/**
 * Motion Configuration
 * Reusable Framer Motion variants for consistent animations across the app
 */

import { Variants } from "framer-motion";

// Easing curves
export const EASING = {
  smooth: [0.25, 0.1, 0.25, 1] as const,
  spring: { type: "spring" as const, damping: 18, stiffness: 100 },
  springLight: { type: "spring" as const, damping: 20, stiffness: 120 },
  springBouncy: { type: "spring" as const, damping: 15, stiffness: 80 },
};

// Fade in from bottom
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { ...EASING.spring, duration: 0.6 },
  },
};

// Fade in from bottom (larger distance)
export const fadeInUpLarge: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { ...EASING.spring, duration: 0.7 },
  },
};

// Fade in from left
export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  show: {
    opacity: 1,
    x: 0,
    transition: { ...EASING.spring, duration: 0.6 },
  },
};

// Fade in from right
export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  show: {
    opacity: 1,
    x: 0,
    transition: { ...EASING.spring, duration: 0.6 },
  },
};

// Simple fade in
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.5, ease: EASING.smooth },
  },
};

// Scale in
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { ...EASING.spring, duration: 0.5 },
  },
};

// Stagger container for child animations
export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// Stagger container with faster stagger
export const staggerContainerFast: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.1,
    },
  },
};

// Stagger container with slower stagger
export const staggerContainerSlow: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

// Viewport settings for scroll animations
export const viewport = {
  once: true,
  amount: 0.2,
};

export const viewportLarge = {
  once: true,
  amount: 0.3,
};

export const viewportSmall = {
  once: true,
  amount: 0.1,
};

// Hover animations
export const hoverScale = {
  scale: 1.03,
  transition: { ...EASING.springLight, duration: 0.3 },
};

export const hoverScaleLarge = {
  scale: 1.05,
  transition: { ...EASING.springLight, duration: 0.3 },
};

export const hoverLift = {
  y: -4,
  transition: { ...EASING.springLight, duration: 0.3 },
};

// Tap animations
export const tapScale = {
  scale: 0.98,
};

// Button hover with glow
export const buttonHover = {
  scale: 1.02,
  boxShadow: "0 0 30px rgba(59, 130, 246, 0.4)",
  transition: { ...EASING.springLight, duration: 0.3 },
};

// Card variants
export const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { ...EASING.spring, duration: 0.6 },
  },
};

// Navbar animation
export const navbarVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { ...EASING.spring, duration: 0.6, delay: 0.1 },
  },
};

// Image reveal
export const imageReveal: Variants = {
  hidden: { opacity: 0, scale: 1.1 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: EASING.smooth },
  },
};

// Slide in from bottom (for modals/drawers)
export const slideInBottom: Variants = {
  hidden: { y: "100%", opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { ...EASING.spring, duration: 0.5 },
  },
  exit: {
    y: "100%",
    opacity: 0,
    transition: { duration: 0.3, ease: EASING.smooth },
  },
};

// Reduced motion check
export const shouldReduceMotion = () => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

// Helper to get variants with reduced motion support
export const getVariants = (variants: Variants): Variants => {
  if (shouldReduceMotion()) {
    return {
      hidden: { opacity: 0 },
      show: { opacity: 1, transition: { duration: 0.2 } },
    };
  }
  return variants;
};
