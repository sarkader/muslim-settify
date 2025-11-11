"use client";

import { WorldMap } from "@/components/ui/world-map";
import { motion } from "framer-motion";

export function WorldMapDemo() {
  const highlightWords = "Across the World".split(" ");

  return (
    <div className="bg-white dark:bg-black w-full py-40">
      <div className="mx-auto max-w-7xl text-center">
        <p className="text-xl font-bold text-black dark:text-white md:text-4xl">
          Join Students{" "}
          <span className="text-neutral-400">
            {highlightWords.map((word, idx) => (
              <motion.span
                key={idx}
                className="inline-block mr-1 last:mr-0"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
              >
                {word}
              </motion.span>
            ))}
          </span>
        </p>
        <p className="mx-auto max-w-2xl py-4 text-sm text-neutral-500 md:text-lg">
          Collaborate with diligent seekers of knowledge who uphold the Sunnah.
          Master remote skills that let you provide for your household, support
          your teachers, and pursue hijrah without compromising your creed or
          conduct.
        </p>
      </div>

      <WorldMap
        dots={[
          {
            start: {
              lat: 64.2008,
              lng: -149.4937,
            }, // Alaska (Fairbanks)
            end: {
              lat: 34.0522,
              lng: -118.2437,
            }, // Los Angeles
          },
          {
            start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
            end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
          },
          {
            start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
            end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
          },
          {
            start: { lat: 51.5074, lng: -0.1278 }, // London
            end: { lat: 28.6139, lng: 77.209 }, // New Delhi
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
          },
        ]}
      />
    </div>
  );
}

