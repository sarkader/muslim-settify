"use client";

import type { Variants } from "framer-motion";

export const fadeIn: Variants = {
  // Keep content visible on first paint; avoid "hidden until hydration".
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const rise: Variants = {
  // Avoid blur/opacity gating that can look "stuck" on slower devices.
  hidden: { opacity: 1, y: 0 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export const zoomIn: Variants = {
  hidden: { opacity: 1, scale: 1 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const slideFromLeft: Variants = {
  hidden: { opacity: 1, x: 0 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const slideFromRight: Variants = {
  hidden: { opacity: 1, x: 0 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const stagger = (delay = 0, interval = 0.08) => ({
  hidden: {},
  show: {
    transition: {
      delay,
      staggerChildren: interval,
    },
  },
});

export const reduced: Variants = {
  hidden: { opacity: 1, y: 0, x: 0, scale: 1 },
  show: { opacity: 1 },
};

