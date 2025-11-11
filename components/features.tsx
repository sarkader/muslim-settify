"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Calendar,
  DollarSign,
  Clock,
  Globe,
  Users,
  Shield,
} from "lucide-react";

import {
  fadeIn,
  slideFromLeft,
  slideFromRight,
  stagger,
  reduced,
} from "@/components/ui/motion-presets";

const features = [
  {
    icon: DollarSign,
    title: "High Earning Potential",
    description: "Follow the roadmap students use to reach $3,000-$15,000 monthly while working from home.",
  },
  {
    icon: Clock,
    title: "Flexible Schedule",
    description: "Set your own hours and work around your life. No 9-to-5 required.",
  },
  {
    icon: Globe,
    title: "Work Remotely",
    description: "Serve clients worldwide from anywhere. All you need is internet connection.",
  },
  {
    icon: Calendar,
    title: "Proven System",
    description: "Step-by-step training program with templates, scripts, and strategies that work.",
  },
  {
    icon: Users,
    title: "Community Support",
    description: "Join a vibrant community of Muslim professionals supporting each other's success.",
  },
  {
    icon: Shield,
    title: "Values-First Standards",
    description: "Operate with professional integrity grounded in clear Islamic guidance.",
  },
];

export function Features() {
  const prefersReduced = useReducedMotion();
  const containerVariants = prefersReduced ? reduced : stagger();

  return (
    <section id="features" className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-16">
          <motion.h2
            variants={prefersReduced ? reduced : slideFromLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="text-4xl sm:text-5xl font-bold text-[#1A202C] mb-4"
          >
            Complete Training Program
          </motion.h2>
          <motion.p
            variants={prefersReduced ? reduced : fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="text-xl text-[#718096] max-w-2xl mx-auto"
          >
            Everything you need to start earning - go at your own pace
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const cardVariants = prefersReduced
              ? reduced
              : index % 2 === 0
                ? slideFromLeft
                : slideFromRight;
            return (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                className="p-4 md:p-6 lg:p-8 rounded-xl bg-[#F7FAFC] hover:bg-[#00D4AA]/5 transition-colors border border-transparent hover:border-[#00D4AA]/20 flex flex-col"
              >
                  <div className="w-8 h-8 md:w-12 md:h-12 rounded-lg bg-[#0066FF]/10 flex items-center justify-center mb-2 md:mb-4 flex-shrink-0">
                  <Icon className="h-4 w-4 md:h-6 md:w-6 text-[#0066FF]" />
                </div>
                <h3 className="text-sm md:text-lg lg:text-xl font-semibold text-[#1A202C] mb-1.5 md:mb-2 lg:mb-3">
                  {feature.title}
                </h3>
                <p className="text-xs md:text-sm lg:text-base text-[#718096] leading-relaxed flex-1">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}

