"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Ahmad Hassan",
    role: "Appointment Setter",
    location: "London, UK",
    income: "$12,500/month",
    image: "AH",
    text: "Alhamdulillah, within 3 months of joining Muslim Settify, I landed my first client. Now I'm earning $12k monthly working flexible hours. This program changed my life.",
  },
  {
    name: "Fatima Ali",
    role: "Remote Scheduler",
    location: "Dubai, UAE",
    income: "$9,800/month",
    image: "FA",
    text: "As a mother of three, flexibility was crucial. Muslim Settify taught me how to build a real business from home. I'm so grateful for this opportunity.",
  },
  {
    name: "Omar Malik",
    role: "Appointment Coordinator",
    location: "Toronto, Canada",
    income: "$15,200/month",
    image: "OM",
    text: "Best investment I've made. The community support is incredible, and the training is comprehensive. I went from zero to $15k monthly in 6 months.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl sm:text-5xl font-bold text-[#1A202C] mb-4"
          >
            Success Stories
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="text-xl text-[#718096] max-w-2xl mx-auto"
          >
            Real results from Muslims around the world
          </motion.p>
        </div>

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
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.name}
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
              className="bg-[#F7FAFC] p-8 rounded-xl border border-gray-100"
            >
              <Quote className="h-8 w-8 text-[#0066FF]/30 mb-4" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[#00D4AA] text-[#00D4AA]" />
                ))}
              </div>
              <p className="text-[#718096] mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#0066FF]/10 flex items-center justify-center text-[#0066FF] font-semibold">
                  {testimonial.image}
                </div>
                <div>
                  <div className="font-semibold text-[#1A202C]">{testimonial.name}</div>
                  <div className="text-sm text-[#718096]">{testimonial.role}</div>
                  <div className="text-sm font-medium text-[#00D4AA]">{testimonial.income}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

