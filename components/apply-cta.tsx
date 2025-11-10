"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const TYPEFORM_URL = "https://form.typeform.com/to/ztBUiWgs?typeform-source=becomeasetter.info";

export function ApplyCTA() {
  return (
    <section className="py-12 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#F7FAFC]">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 1, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl sm:text-4xl font-bold text-[#1A202C] mb-4"
        >
          Ready to Start Your Journey?
        </motion.h2>
        <motion.p
          initial={{ opacity: 1, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="text-lg text-[#718096] mb-8"
        >
          Apply now for a free strategy call to see if you're a good fit
        </motion.p>

        <motion.div
          initial={{ opacity: 1, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <a
            href={TYPEFORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 md:gap-3 bg-[#0066FF] hover:bg-[#0052CC] text-white font-bold text-sm md:text-lg px-6 md:px-[60px] py-3 md:py-5 rounded-xl shadow-[0_6px_20px_rgba(0,102,255,0.35)] hover:shadow-[0_8px_24px_rgba(0,102,255,0.4)] hover:-translate-y-1 transition-all duration-200 group"
          >
            Apply Now - Free Strategy Call
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <p className="text-sm text-[#718096] mt-6">
            No credit card required • Free consultation
          </p>
        </motion.div>
      </div>
    </section>
  );
}


