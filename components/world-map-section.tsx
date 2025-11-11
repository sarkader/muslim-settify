"use client";

import { motion, useReducedMotion } from "framer-motion";

import { WorldMap } from "@/components/ui/world-map";
import { fadeIn, rise, reduced } from "@/components/ui/motion-presets";

export function WorldMapSection() {
  const prefersReduced = useReducedMotion();
  const H = prefersReduced ? reduced : rise;
  const P = prefersReduced ? reduced : fadeIn;

  return (
    <section
      id="world-map"
      className="bg-white dark:bg-black py-20 md:py-28 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          variants={H}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A202C] dark:text-white"
        >
          Join students across the world
        </motion.h2>
        <motion.p
          variants={P}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-4 text-base sm:text-lg md:text-xl text-[#718096] dark:text-neutral-400 max-w-3xl mx-auto"
        >
          Building real skills toward financial independence — supporting long-term goals
          such as hijrah and family stability. No promises or guarantees; results vary.
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto mt-10">
        <WorldMap
          lineColor="#0066FF"
          dots={[
            // Original demo routes (keep these)
            { start: { lat: 64.2008, lng: -149.4937 }, end: { lat: 34.0522, lng: -118.2437 } }, // Alaska → LA
            { start: { lat: 64.2008, lng: -149.4937 }, end: { lat: -15.7975, lng: -47.8919 } }, // Alaska → Brazil
            { start: { lat: -15.7975, lng: -47.8919 }, end: { lat: 38.7223, lng: -9.1393 } }, // Brazil → Lisbon
            { start: { lat: 51.5074, lng: -0.1278 }, end: { lat: 28.6139, lng: 77.209 } }, // London → New Delhi
            { start: { lat: 28.6139, lng: 77.209 }, end: { lat: 43.1332, lng: 131.9113 } }, // New Delhi → Vladivostok
            { start: { lat: 28.6139, lng: 77.209 }, end: { lat: -1.2921, lng: 36.8219 } }, // New Delhi → Nairobi

            // Muslim-country routes (added)
            { start: { lat: 25.2048, lng: 55.2708 }, end: { lat: 24.7136, lng: 46.6753 } }, // Dubai → Riyadh
            { start: { lat: -6.2088, lng: 106.8456 }, end: { lat: 3.139, lng: 101.6869 } }, // Jakarta → Kuala Lumpur
            { start: { lat: 41.0082, lng: 28.9784 }, end: { lat: 33.5731, lng: -7.5898 } }, // Istanbul → Casablanca
            { start: { lat: 30.0444, lng: 31.2357 }, end: { lat: 24.7136, lng: 46.6753 } }, // Cairo → Riyadh
            { start: { lat: 51.5074, lng: -0.1278 }, end: { lat: 25.2048, lng: 55.2708 } }, // London → Dubai
            { start: { lat: 24.8607, lng: 67.0011 }, end: { lat: 21.4858, lng: 39.1925 } }, // Karachi → Jeddah

            // Additional coverage in North America & South Asia
            { start: { lat: 43.6532, lng: -79.3832 }, end: { lat: 29.7604, lng: -95.3698 } }, // Toronto → Houston
            { start: { lat: 49.2827, lng: -123.1207 }, end: { lat: 34.0522, lng: -118.2437 } }, // Vancouver → LA
            { start: { lat: 24.8607, lng: 67.0011 }, end: { lat: 23.8103, lng: 90.4125 } }, // Karachi → Dhaka
            { start: { lat: 31.5497, lng: 74.3436 }, end: { lat: 23.8103, lng: 90.4125 } }, // Lahore → Dhaka
            { start: { lat: 23.8103, lng: 90.4125 }, end: { lat: 24.7136, lng: 46.6753 } }, // Dhaka → Riyadh

            // East Asia connections
            { start: { lat: 35.6762, lng: 139.6503 }, end: { lat: 37.5665, lng: 126.978 } }, // Tokyo → Seoul
            { start: { lat: 31.2304, lng: 121.4737 }, end: { lat: 35.6762, lng: 139.6503 } }, // Shanghai → Tokyo
          ]}
        />
      </div>
    </section>
  );
}

