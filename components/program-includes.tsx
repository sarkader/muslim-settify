"use client";

import { motion } from "framer-motion";
import { CheckCircle, FileText, Video, MessageCircle, Award, Zap, Calendar, Briefcase, Users } from "lucide-react";

export function ProgramIncludes() {
  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* WHAT'S INCLUDED */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 1 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
        >
          <motion.h3
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
            className="text-3xl sm:text-4xl font-bold text-[#1A202C] mb-8 md:mb-12 text-center"
          >
            Everything Included in the Program
          </motion.h3>

          {/* TOP FEATURES - PROMINENT */}
          <div className="max-w-5xl mx-auto mb-8 md:mb-12 space-y-4 md:space-y-6">
            {/* FEATURE 1: EXCLUSIVE JOB BOARD */}
            <motion.div
              initial={{ opacity: 1, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white border border-[#E2E8F0] rounded-xl p-4 md:p-6 lg:p-8 shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
            >
              <div className="flex items-start gap-3 md:gap-6">
                <div className="w-10 h-10 md:w-16 md:h-16 rounded-lg bg-[#0066FF]/10 flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-5 h-5 md:w-8 md:h-8 text-[#0066FF]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-2xl font-bold text-[#1A202C] mb-1 md:mb-2">
                    Exclusive Job Board - Up to 20 Jobs Posted Daily
                  </h3>
                  <p className="text-sm md:text-lg text-[#718096] leading-relaxed mb-3 md:mb-4">
                    Get first access to high-ticket appointment setting opportunities posted daily. Roles with Muslim influencers, coaches, and businesses actively hiring setters. Our job board alone is worth the investment.
                  </p>
                  <div className="inline-block bg-[#F7FAFC] border border-[#E2E8F0] text-[#718096] px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold">
                    87% of students land a role within 60 days
                  </div>
                </div>
              </div>
            </motion.div>

            {/* FEATURE 2: PRIVATE COMMUNITY */}
            <motion.div
              initial={{ opacity: 1, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white border border-[#E2E8F0] rounded-xl p-4 md:p-6 lg:p-8 shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
            >
              <div className="flex items-start gap-3 md:gap-6">
                <div className="w-10 h-10 md:w-16 md:h-16 rounded-lg bg-[#00D4AA]/10 flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 md:w-8 md:h-8 text-[#00D4AA]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-2xl font-bold text-[#1A202C] mb-1 md:mb-2">
                    Active Community of 200+ Students
                  </h3>
                  <p className="text-sm md:text-lg text-[#718096] leading-relaxed mb-3 md:mb-4">
                    Join our thriving community where students support each other 24/7. Share wins, get feedback, ask questions, and network with other Muslim appointment setters worldwide. Weekly live group calls and Q&A sessions included.
                  </p>
                  <div className="inline-block bg-[#F7FAFC] border border-[#E2E8F0] text-[#718096] px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold">
                    24/7 peer support & weekly live coaching
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* OTHER INCLUSIONS */}
          <motion.h4
            variants={{
              hidden: { opacity: 1, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.6,
                  ease: "easeOut",
                },
              },
            }}
            className="text-lg md:text-xl font-semibold text-[#1A202C] mb-4 md:mb-6 text-center"
          >
            Also Included:
          </motion.h4>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-4 lg:gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: FileText,
                title: "Complete training materials (self-paced)",
                description: "All resources available immediately - learn at your own speed",
              },
              {
                icon: Video,
                title: "Live Q&A and coaching sessions",
                description: "Regular sessions to answer questions and provide guidance",
              },
              {
                icon: FileText,
                title: "Done-for-you scripts and templates",
                description: "Proven scripts for outreach, calls, and follow-ups",
              },
              {
                icon: Zap,
                title: "1-on-1 mentorship",
                description: "Personal guidance tailored to your situation",
              },
              {
                icon: Award,
                title: "Resume review and interview prep",
                description: "Get help landing your first role with personalized feedback",
              },
              {
                icon: CheckCircle,
                title: "Certificate of completion",
                description: "Credential to showcase your training",
              },
              {
                icon: Calendar,
                title: "Lifetime access to all materials and updates",
                description: "All recordings, resources, and future updates",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
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
                  className="flex items-start gap-3 md:gap-4 p-3 md:p-4 lg:p-5 rounded-lg bg-white border border-[#E2E8F0] hover:bg-[#F7FAFC] hover:border-[#0066FF]/20 transition-all duration-200 shadow-sm hover:shadow-md"
                >
                  <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-lg bg-[#0066FF]/10 flex items-center justify-center mt-0.5">
                    <Icon className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-[#0066FF]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm md:text-base lg:text-lg font-bold text-[#1A202C] mb-1 md:mb-1.5">
                      {item.title}
                    </h4>
                    <p className="text-xs md:text-sm lg:text-base text-[#718096] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* CALL-OUT BOX */}
        <motion.div
          initial={{ opacity: 1, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          className="mt-8 md:mt-16 max-w-[700px] mx-auto"
        >
          <div className="bg-[#EBF8FF] border-2 border-[#0066FF] rounded-xl p-4 md:p-6 lg:p-8 text-center">
            <p className="text-base md:text-lg font-semibold text-[#1A202C] mb-1 md:mb-2">
              Some students finish in days, others take weeks
            </p>
            <p className="text-sm md:text-base text-[#718096]">
              One student completed all materials in 24 hours and earned $700 just 2 days later. The speed depends on your dedication and commitment.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
