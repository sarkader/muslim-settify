"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  "Complete training program",
  "Email templates & scripts",
  "Client acquisition strategies",
  "Community access & support",
  "Lifetime access to materials",
  "30-day money-back guarantee",
];

export function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0066FF] to-[#0052CC]">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl sm:text-5xl font-bold text-white mb-6"
        >
          Ready to Start Your Journey?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
        >
          Join 500+ Muslims who are already building successful remote careers.
          Start today and transform your income in the next 90 days.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
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

          <a
            href="https://form.typeform.com/to/ztBUiWgs?typeform-source=becomeasetter.info"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-[#0066FF] hover:bg-[#0052CC] text-white text-sm md:text-lg px-6 md:px-12 py-3 md:py-6 rounded-lg group w-full sm:w-auto"
            >
              Apply Now
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          className="text-white/80 text-sm"
        >
          ✓ 30-day money-back guarantee • ✓ Secure payment • ✓ Instant access
        </motion.p>
      </div>
    </section>
  );
}

