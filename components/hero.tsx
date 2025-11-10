"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Check, DollarSign, Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import CountUp to avoid SSR issues
const CountUp = dynamic(() => import("react-countup"), { ssr: false });

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <style jsx global>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 4s ease infinite;
        }
      `}</style>
      <section className="min-h-[85vh] md:min-h-[90vh] flex items-center py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto w-full">
          {/* CENTERED HEADLINE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6 md:mb-8"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#1A202C] leading-[1.2] mb-4 md:mb-6 max-w-4xl mx-auto">
              Learn Appointment Setting & Earn{" "}
              <span className="bg-gradient-to-r from-[#0066FF] via-purple-600 to-[#00D4AA] bg-clip-text text-transparent font-extrabold animate-gradient">
                $3k-$15k Per Month
              </span>
              {" "}Remotely
            </h1>
            <p className="text-lg sm:text-xl text-[#718096] leading-relaxed max-w-3xl mx-auto">
              Join 200+ Muslims building halal income from anywhere—perfect for hijrah to Madinah, UAE, or other Islamic countries. Watch this 3-minute video to understand how it works.
            </p>
          </motion.div>

          {/* HUGE VIDEO - MAIN FOCAL POINT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 md:mb-12"
          >
            <div className="relative">
              {/* Video badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                <div className="bg-[#0066FF] text-white text-xs font-bold uppercase px-4 py-1.5 rounded-full shadow-lg">
                  ▶ WATCH THIS FIRST
                </div>
              </div>

              {/* Video container */}
              <div className="relative w-full max-w-6xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)] border border-[#E2E8F0]">
                <iframe
                  src="https://www.loom.com/embed/b62017a7639543548f22b1b3e5f7392e"
                  frameBorder="0"
                  allowFullScreen
                  className="w-full h-full"
                  title="What is Appointment Setting"
                ></iframe>
              </div>

              {/* Video caption */}
              <p className="text-center text-sm text-[#718096] mt-4">
                What is Appointment Setting & How You Earn Money (3 min)
              </p>
            </div>
          </motion.div>

          {/* JOB BOARD HIGHLIGHT BADGE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center mb-6 md:mb-8"
          >
            <div className="inline-flex items-center gap-3 bg-white border border-[#0066FF] rounded-full px-6 py-3 shadow-sm">
              <Briefcase className="w-5 h-5 text-[#0066FF]" />
              <span className="text-[#1A202C] font-semibold text-base">
                Up to 20 new jobs posted daily
              </span>
            </div>
          </motion.div>

          {/* EARNINGS STATS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-2xl mx-auto mb-6 md:mb-10"
          >
            <div className="bg-white border border-[#E2E8F0] rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 text-center shadow-sm">
              <p className="text-xs md:text-sm uppercase tracking-wide text-[#718096] font-semibold mb-2 md:mb-3">
                Our Students' Earnings This Month
              </p>
              <div className="flex items-center justify-center gap-2 md:gap-3 mb-1 md:mb-2">
                <DollarSign className="w-5 h-5 md:w-8 md:h-8 text-[#0066FF]" />
                <div className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#0066FF]">
                  {isVisible && typeof window !== "undefined" ? (
                    <CountUp
                      start={0}
                      end={127450}
                      duration={2.5}
                      separator=","
                      prefix="$"
                    />
                  ) : (
                    "$127,450"
                  )}
                </div>
              </div>
              <p className="text-sm md:text-base text-[#1A202C] font-medium mb-0.5 md:mb-1">
                Generated by 200+ active students
              </p>
              <p className="text-xs text-[#718096] italic mt-1 md:mt-2">
                Updated monthly based on student reports
              </p>
            </div>
          </motion.div>

          {/* CTA BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
          >
            <a
              href="https://form.typeform.com/to/ztBUiWgs?typeform-source=becomeasetter.info"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-[#0066FF] hover:bg-[#0052CC] text-white font-bold text-sm md:text-lg px-6 md:px-12 py-3 md:py-6 rounded-xl shadow-[0_6px_20px_rgba(0,102,255,0.3)] hover:shadow-[0_8px_25px_rgba(0,102,255,0.4)] hover:-translate-y-1 transition-all duration-200 group w-full sm:w-auto"
              >
                Apply for Free Strategy Call
                <ArrowRight className="ml-2 md:ml-3 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-[#E2E8F0] hover:border-[#0066FF] hover:text-[#0066FF] text-[#1A202C] font-bold text-sm md:text-lg px-6 md:px-12 py-3 md:py-6 rounded-xl bg-white transition-all duration-200 w-full sm:w-auto"
              onClick={() => {
                const element = document.querySelector("#features");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
            >
              Learn More ↓
            </Button>
          </motion.div>

          {/* TRUST BADGES */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap gap-6 justify-center text-sm text-[#718096]"
          >
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-[#00D4AA] flex-shrink-0" />
              <span>Up to 20 jobs posted daily</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-[#00D4AA] flex-shrink-0" />
              <span>Active private community 24/7</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-[#00D4AA] flex-shrink-0" />
              <span>100% halal income guaranteed</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-[#00D4AA] flex-shrink-0" />
              <span>No experience required</span>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
