"use client";

import { motion, useReducedMotion } from "framer-motion";
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
    name: "Muntasir Rahman",
    role: "Remote Setter",
    location: "Singapore",
    income: "$700 in 3 days",
    image: "MR",
    text: "After joining I followed the outreach scripts step-by-step. Within 48 hours I booked paid calls and collected $700 while still exploring long-term roles.",
  },
  {
    name: "Fatima Ali",
    role: "Remote Scheduler",
    location: "Dubai, Gulf Region",
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
  const prefersReduced = useReducedMotion();
  const row1Count =
    testimonials.length >= 3
      ? 3
      : Math.ceil(testimonials.length / 2);
  const row1 = testimonials.slice(0, row1Count);
  const row2 = testimonials.slice(row1Count);

  const loopRow1 = prefersReduced ? row1 : [...row1, ...row1];
  const loopRow2 = prefersReduced ? row2 : [...row2, ...row2];

  return (
    <section
      id="testimonials"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1A202C] mb-4">
            See What Students Are Building
          </h2>
          <p className="text-xl text-[#718096] max-w-2xl mx-auto">
            Real results from students around the world
          </p>
        </div>

        <div className="relative mb-6 overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 h-full w-16 sm:w-24 bg-gradient-to-r from-white via-white/90 to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-16 sm:w-24 bg-gradient-to-l from-white via-white/90 to-transparent z-10" />

          {prefersReduced ? (
            <div className="flex gap-4 sm:gap-6">
              {loopRow1.map((testimonial, index) => (
                <TestimonialCard
                  key={`row1-static-${index}`}
                  testimonial={testimonial}
                />
              ))}
            </div>
          ) : (
            <motion.div
              className="flex gap-4 sm:gap-6"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 40, ease: "linear", repeat: Infinity }}
            >
              {loopRow1.map((testimonial, index) => (
                <TestimonialCard
                  key={`row1-${index}`}
                  testimonial={testimonial}
                />
              ))}
            </motion.div>
          )}
        </div>

        {row2.length > 0 && (
          <div className="relative overflow-hidden">
            <div className="pointer-events-none absolute left-0 top-0 h-full w-16 sm:w-24 bg-gradient-to-r from-white via-white/90 to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-16 sm:w-24 bg-gradient-to-l from-white via-white/90 to-transparent z-10" />

            {prefersReduced ? (
              <div className="flex gap-4 sm:gap-6">
                {loopRow2.map((testimonial, index) => (
                  <TestimonialCard
                    key={`row2-static-${index}`}
                    testimonial={testimonial}
                  />
                ))}
              </div>
            ) : (
              <motion.div
                className="flex gap-4 sm:gap-6"
                animate={{ x: ["-50%", "0%"] }}
                transition={{ duration: 40, ease: "linear", repeat: Infinity }}
              >
                {loopRow2.map((testimonial, index) => (
                  <TestimonialCard
                    key={`row2-${index}`}
                    testimonial={testimonial}
                  />
                ))}
              </motion.div>
            )}
          </div>
        )}

        <p className="text-center text-sm text-[#718096] mt-8">
          Results vary. No guarantees.
        </p>
      </div>
    </section>
  );
}

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[number];
}) {
  return (
    <div className="bg-[#F7FAFC] min-w-[260px] sm:min-w-[320px] lg:min-w-[360px] p-6 sm:p-8 rounded-xl border border-gray-100 shadow-sm flex-shrink-0">
      <Quote className="h-6 w-6 sm:h-8 sm:w-8 text-[#0066FF]/30 mb-4" />
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-[#00D4AA] text-[#00D4AA]"
          />
        ))}
      </div>
      <p className="text-sm sm:text-base text-[#718096] mb-6 leading-relaxed italic">
        "{testimonial.text}"
      </p>
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#0066FF]/10 flex items-center justify-center text-[#0066FF] font-semibold">
          {testimonial.image}
        </div>
        <div>
          <div className="font-semibold text-[#1A202C]">
            {testimonial.name}
          </div>
          <div className="text-xs sm:text-sm text-[#718096]">
            {testimonial.role}
          </div>
          <div className="text-xs sm:text-sm font-medium text-[#00D4AA]">
            {testimonial.income}
          </div>
        </div>
      </div>
    </div>
  );
}

