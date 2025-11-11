"use client";

import {
  CheckCircle,
  Users,
  FileText,
  Video,
  MessageCircle,
  Award,
  Zap,
  Calendar,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

const modules = [
  {
    week: "Week 1",
    title: "Introduction to High-Ticket Appointment Setting",
    description:
      "Learn the fundamentals of the appointment setting industry, compensation structures, and how successful setters earn $10k+ monthly.",
  },
  {
    week: "Week 1-2",
    title: "Qualifying Prospects & Discovery Calls",
    description:
      "Master the art of asking powerful questions, identifying decision-makers, and conducting discovery calls that uncover pain points.",
  },
  {
    week: "Week 2-3",
    title: "The Islamic Framework for Ethical Sales",
    description:
      "Understand Islamic business ethics and how to conduct your work with integrity while following clear principles.",
  },
  {
    week: "Week 3-4",
    title: "Objection Handling Mastery",
    description:
      "Learn proven frameworks for handling objections around price, timing, and skepticism. Turn resistance into opportunity.",
  },
  {
    week: "Week 5-6",
    title: "Client Acquisition & Job Placement",
    description:
      "Step-by-step process for landing your first clients. Resume building, outreach templates, interview prep, and our exclusive job board.",
  },
  {
    week: "Week 6-7",
    title: "Advanced Closing Techniques",
    description:
      "High-level closing frameworks, follow-up cadences, CRM management, and scaling your appointment volume.",
  },
  {
    week: "Week 7-8",
    title: "Scaling to $10k+ Monthly",
    description:
      "Strategies for working with multiple clients, time management, and positioning yourself as a premium setter.",
  },
  {
    week: "Week 8",
    title: "Long-Term Career Development",
    description:
      "Building lasting client relationships, negotiating rate increases, and creating sustainable income growth.",
  },
];

const included = [
  {
    icon: Video,
    title: "8 Weeks of Live Training",
    description: "Weekly live sessions with Q&A and hands-on practice",
  },
  {
    icon: Users,
    title: "Weekly Group Coaching",
    description: "Get feedback, ask questions, and learn from others",
  },
  {
    icon: MessageCircle,
    title: "Private Community Access",
    description: "24/7 support via exclusive Telegram group",
  },
  {
    icon: FileText,
    title: "Done-For-You Scripts & Templates",
    description: "Proven scripts for outreach, calls, and follow-ups",
  },
  {
    icon: Zap,
    title: "1-on-1 Mentorship Sessions",
    description: "Personal guidance tailored to your situation",
  },
  {
    icon: Award,
    title: "Job Placement Assistance",
    description: "Resume review, interview prep, and access to our job board",
  },
  {
    icon: CheckCircle,
    title: "Certificate of Completion",
    description: "Credential to showcase your training",
  },
  {
    icon: Calendar,
    title: "Lifetime Access to Materials",
    description: "All recordings, resources, and future updates",
  },
];

export function Curriculum() {
  return (
    <section id="curriculum" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-[1100px] mx-auto">
        {/* SECTION HEADER */}
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-3xl sm:text-4xl font-bold text-[#1A202C] mb-4"
          >
            Complete 8-Week Training System
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="text-lg text-[#718096]"
          >
            Everything you need to land clients and start earning
          </motion.p>
        </div>

        {/* PART 1: CURRICULUM MODULES */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="mb-16"
        >
          <motion.h3
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.6,
                  ease: "easeOut",
                },
              },
            }}
            className="text-2xl font-semibold text-[#1A202C] mb-6"
          >
            Curriculum Modules
          </motion.h3>
          <div className="space-y-4">
            {modules.map((module, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.6,
                      ease: "easeOut",
                    },
                  },
                }}
                className="bg-white border-l-4 border-[#0066FF] rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-2">
                  <div className="flex-shrink-0">
                    <span className="text-xs font-bold text-[#0066FF] uppercase tracking-wide">
                      {module.week}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg sm:text-xl font-bold text-[#1A202C] mb-2">
                      {module.title}
                    </h4>
                    <p className="text-base text-[#718096] leading-relaxed">
                      {module.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* PART 2: WHAT'S INCLUDED */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
          className="mt-12"
        >
          <motion.h3
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.6,
                  ease: "easeOut",
                },
              },
            }}
            className="text-2xl font-semibold text-[#1A202C] mb-6"
          >
            Everything Included in the Program
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {included.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.6,
                        ease: "easeOut",
                      },
                    },
                  }}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-[#F7FAFC] transition-colors duration-200"
                >
                  <div className="flex-shrink-0 w-6 h-6 mt-0.5">
                    <Icon className="w-6 h-6 text-[#0066FF]" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-[#1A202C] mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm sm:text-base text-[#718096]">
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 max-w-[700px] mx-auto"
        >
          <div className="bg-[#EBF8FF] border-2 border-[#0066FF] rounded-xl p-6 sm:p-8 text-center">
            <div className="flex justify-center mb-4">
              <Sparkles className="w-8 h-8 text-[#0066FF]" />
            </div>
            <p className="text-lg font-semibold text-[#1A202C]">
              Many students report landing their first client within 4-8 weeks of completing the program. Results vary.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

