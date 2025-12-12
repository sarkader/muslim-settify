"use client";

import { motion } from "framer-motion";
import { BookOpen, Video, Briefcase, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: BookOpen,
    title: "Complete Training",
    description: "Access our comprehensive video training modules covering everything from lead generation to closing deals.",
  },
  {
    number: "02",
    icon: Video,
    title: "Practice & Apply",
    description: "Use our proven scripts, email templates, and follow-up systems with real-world exercises.",
  },
  {
    number: "03",
    icon: Briefcase,
    title: "Get Your First Client",
    description: "Launch your appointment setting business with our client acquisition strategies and support.",
  },
  {
    number: "04",
    title: "Scale Your Income",
    icon: TrendingUp,
    description: "Grow from your first client to a full roster, earning $5k-$15k monthly with our scaling framework.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F7FAFC]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl sm:text-5xl font-bold text-[#1A202C] mb-4"
          >
            How It Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="text-xl text-[#718096] max-w-2xl mx-auto"
          >
            A simple 4-step path from beginner to earning $5k-$15k monthly
          </motion.p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 1 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                variants={{
                  hidden: { opacity: 1, y: 0 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.6,
                      ease: "easeOut",
                    },
                  },
                }}
                className="relative"
              >
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 h-full">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 rounded-lg bg-[#0066FF]/10 flex items-center justify-center">
                      <Icon className="h-7 w-7 text-[#0066FF]" />
                    </div>
                    <span className="text-5xl font-bold text-[#0066FF]/10">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#1A202C] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[#718096] leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-[#0066FF]/20 transform -translate-y-1/2" />
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

