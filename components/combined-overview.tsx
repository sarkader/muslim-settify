"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Briefcase,
  Users,
  GraduationCap,
  Layers,
  Globe,
  Clock,
} from "lucide-react";

import {
  fadeIn,
  zoomIn,
  stagger,
  reduced,
} from "@/components/ui/motion-presets";

const overviewItems = [
  {
    title: "Hundreds of Roles Available",
    description: "Access vetted roles from values-aligned businesses hiring setters.",
    icon: Briefcase,
  },
  {
    title: "Community of 100+ Students",
    description: "Progress with accountability, adab, and peer support.",
    icon: Users,
  },
  {
    title: "Guided Mentorship",
    description: "Weekly coaching, feedback, and live sessions to keep you on track.",
    icon: GraduationCap,
  },
  {
    title: "Proven Step-by-Step System",
    description: "Templates and repeatable processes—no fluff, just what works.",
    icon: Layers,
  },
  {
    title: "Remote-Friendly Workflow",
    description: "Serve clients globally while honoring your principles and responsibilities at home.",
    icon: Globe,
  },
  {
    title: "Flexible Schedule",
    description: "Choose hours that fit your life; results vary and depend on effort.",
    icon: Clock,
  },
];

export function CombinedOverview() {
  const prefersReducedMotion = useReducedMotion();
  const headerVariants = prefersReducedMotion ? reduced : fadeIn;
  const containerVariants = prefersReducedMotion ? reduced : stagger();
  const cardVariants = prefersReducedMotion ? reduced : zoomIn;

  return (
    <section
      id="combined-overview"
      className="bg-white py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            variants={prefersReducedMotion ? reduced : zoomIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A202C] mb-4"
          >
            Community + Training That Actually Works
          </motion.h2>
          <motion.p
            variants={headerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="text-base sm:text-lg md:text-xl text-[#718096] max-w-3xl mx-auto"
          >
            Join 100+ students building dependable appointment-setting skills with mentorship, a step-by-step curriculum, and real opportunities.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8"
        >
          {overviewItems.map((item) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                variants={cardVariants}
                className="bg-[#F7FAFC] rounded-xl border border-gray-100 p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-[#0066FF]/10 flex items-center justify-center mb-4">
                  <Icon
                    aria-hidden="true"
                    className="w-5 h-5 md:w-6 md:h-6 text-[#0066FF]"
                  />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-[#1A202C] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-[#718096] leading-relaxed">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </motion.div>

        <p className="text-center text-xs md:text-sm text-[#A0AEC0] mt-8">
          Results vary. No guarantees.
        </p>
      </div>
    </section>
  );
}

