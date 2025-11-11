"use client";

import { motion } from "framer-motion";
import { Briefcase, Users, MessageCircle, TrendingUp, MapPin, Lock, Sparkles } from "lucide-react";

const benefits = [
  {
    icon: Briefcase,
    title: "Hundreds of Roles Available",
    description: "Exclusive access to vetted appointment setting roles from values-aligned businesses actively hiring our students.",
    stat: "New roles shared daily",
  },
  {
    icon: Users,
    title: "Community of 150+ Students",
    description: "Connect with peers striving for excellence, accountability, and adab while learning together.",
    stat: "24/7 peer support",
  },
  {
    icon: TrendingUp,
    title: "Guided Mentorship",
    description: "Get your questions answered quickly, join weekly live calls, and receive feedback that keeps you progressing.",
    stat: "Weekly live coaching",
  },
  {
    icon: MapPin,
    title: "Remote-Friendly Workflow",
    description: "Serve clients globally while staying rooted in your principles and responsibilities at home.",
    stat: "Designed for flexible schedules",
  },
];

export function ExclusiveCommunity() {
  return (
    <section className="py-12 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#F7FAFC]">
      <div className="max-w-7xl mx-auto">
        {/* SECTION HEADER */}
        <div className="text-center mb-6 md:mb-16">
          <motion.div
            initial={{ opacity: 1, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <Lock className="w-6 h-6 text-[#0066FF]" />
            <span className="text-sm font-semibold text-[#0066FF] uppercase tracking-wider">
              Exclusive Access
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 1, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#1A202C] mb-4"
          >
            Join an Exclusive Community That Actually Works
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 1, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-[#718096] max-w-3xl mx-auto leading-relaxed"
          >
            This isn't a course you buy and forget. When you join Muslim Settify, you're joining a tight-knit community of 150+ students building dependable skills with accountability and job opportunities each week.
          </motion.p>
        </div>

        {/* MAIN BENEFITS GRID */}
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
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-12 lg:mb-16"
        >
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                variants={{
                  hidden: { opacity: 1, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.6,
                      ease: "easeOut",
                    },
                  },
                }}
                className="relative bg-white rounded-xl md:rounded-2xl p-3 md:p-6 lg:p-8 border border-[#E2E8F0] shadow-[0_4px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 rounded-lg md:rounded-xl bg-[#0066FF]/10 flex items-center justify-center mb-2 md:mb-4 lg:mb-6">
                  <Icon className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 text-[#0066FF]" />
                </div>

                {/* Content */}
                <h3 className="text-base md:text-xl lg:text-2xl font-bold text-[#1A202C] mb-2 md:mb-3">
                  {benefit.title}
                </h3>
                <p className="text-xs md:text-sm lg:text-base text-[#718096] leading-relaxed mb-3 md:mb-4">
                  {benefit.description}
                </p>

                {/* Stat Badge */}
                <div className="inline-flex items-center gap-1.5 md:gap-2 bg-[#F7FAFC] border border-[#E2E8F0] px-3 md:px-4 py-1.5 md:py-2 rounded-full">
                  <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-[#0066FF]" />
                  <span className="text-xs md:text-sm font-semibold text-[#1A202C]">
                    {benefit.stat}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* COMMUNITY TESTIMONIAL */}
        <motion.div
          initial={{ opacity: 1, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="bg-[#F7FAFC] border border-[#E2E8F0] rounded-2xl p-6 md:p-8 lg:p-10">
            <div className="flex items-start gap-3 md:gap-4 mb-4 md:mb-6">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#0066FF] to-[#00D4AA] flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                AT
              </div>
              <div>
                <div className="font-bold text-lg text-[#1A202C] mb-1">Aeman Teter</div>
                <div className="text-sm text-[#718096]">Remote Setter & Coach</div>
              </div>
            </div>
            
            <p className="text-lg text-[#1A202C] leading-relaxed mb-6 italic">
              "I landed a $5k-$8k OTE role, booked consistent meetings each week, and stayed disciplined by checking in with the community. The guidance kept me focused on what matters."
            </p>

            <div className="flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#00D4AA]/20 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-[#00D4AA]" />
                </div>
                <span className="font-semibold text-[#1A202C]">Working from home</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#0066FF]/20 flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-[#0066FF]" />
                </div>
                <span className="font-semibold text-[#1A202C]">$5k-$8k OTE</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

