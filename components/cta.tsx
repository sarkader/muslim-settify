"use client";

import { Check } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import {
  fadeIn,
  zoomIn,
  reduced,
} from "@/components/ui/motion-presets";
import { AnimatedButton } from "@/components/ui/animated-button";

const benefits = [
  "Complete training program",
  "Email templates & scripts",
  "Client acquisition strategies",
  "Community access & support",
  "Lifetime access to materials",
  "30-day money-back guarantee",
];

export function CTA() {
  const prefersReduced = useReducedMotion();
  const Heading = prefersReduced ? reduced : zoomIn;
  const Paragraph = prefersReduced ? reduced : fadeIn;
  const Card = prefersReduced ? reduced : zoomIn;
  const Footer = prefersReduced ? reduced : fadeIn;

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0066FF] to-[#0052CC]">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          variants={Heading}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="text-4xl sm:text-5xl font-bold text-white mb-6"
        >
          Ready to Start Your Journey?
        </motion.h2>
        <motion.p
          variants={Paragraph}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
        >
          Join 100+ students already building disciplined remote careers.
          Start today and progress at a pace that matches your effort. Results vary.
        </motion.p>

        <motion.div
          variants={Card}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="bg-white rounded-2xl p-6 md:p-8 lg:p-12 mb-8 shadow-2xl"
        >
          <div className="mb-6 md:mb-8">
            <div className="text-3xl md:text-5xl font-bold text-[#1A202C] mb-2">Get Started Today</div>
            <div className="text-lg md:text-2xl text-[#718096]">One-time investment • Lifetime access</div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-left">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[#00D4AA] flex items-center justify-center flex-shrink-0">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <span className="text-[#718096]">{benefit}</span>
              </div>
            ))}
          </div>

          <AnimatedButton
            href="https://form.typeform.com/to/ztBUiWgs?typeform-source=becomeasetter.info"
            className="w-full sm:w-auto text-sm md:text-lg px-6 py-3 md:px-12 md:py-6"
          >
            Apply Now
          </AnimatedButton>
        </motion.div>

        <motion.p
          variants={Footer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="text-white/80 text-sm"
        >
          ✓ 30-day money-back guarantee • ✓ Secure payment • ✓ Instant access
        </motion.p>
      </div>
    </section>
  );
}

