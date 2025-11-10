"use client";

import { TrendingUp, Zap } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Aqib R.",
    location: "United Kingdom",
    initials: "AR",
    color: "from-[#0066FF] to-[#0052CC]",
    quote: "Got kicked out of my job in February. By June I had made $30k. Now I've done $60k total in earnings from setting and closing.",
    result: "$60k+ Total",
    highlight: false,
  },
  {
    id: 2,
    name: "Melih K.",
    location: "Turkey/UAE",
    initials: "MK",
    color: "from-[#00D4AA] to-[#00B894]",
    quote: "Sold my belongings to join. Landed first role with 300k follower influencer. Now earning thousands monthly while traveling freely.",
    result: "$2k-$3k monthly + Freedom",
    highlight: false,
  },
  {
    id: 3,
    name: "Mohamad H.",
    location: "Middle East",
    initials: "MH",
    color: "from-[#0066FF] to-[#0052CC]",
    quote: "Finished all materials in 12 hours. Landed first role after 1 day. Made $1000 in 3 weeks. Now I'm a COO earning $5k-$6k monthly.",
    result: "COO • $5k-$6k/mo",
    highlight: false,
  },
  {
    id: 4,
    name: "Aeman T.",
    location: "Madinah",
    initials: "AT",
    color: "from-[#00D4AA] to-[#00B894]",
    quote: "Landed $5k-$8k OTE role with agency making $350k/month. Made $550 in one day. Now living in Madinah alhamdulillah.",
    result: "Made Hijrah + $5k-$8k OTE",
    highlight: false,
  },
  {
    id: 5,
    name: "Khalid A.",
    location: "Remote",
    initials: "KA",
    color: "from-[#0066FF] to-[#0052CC]",
    quote: "Had no stable income when I joined. Set a $25k deal for Buildfst. Now executive assistant with base salary.",
    result: "Base Salary + Commission",
    highlight: false,
  },
  {
    id: 6,
    name: "Muhammad Afdhal",
    location: "Southeast Asia",
    initials: "MA",
    color: "from-[#00D4AA] to-[#00B894]",
    quote: "Got first role 6 days after joining. Made $4k total. Now making good money while doing the things I like.",
    result: "$4k+ earned",
    highlight: false,
  },
  {
    id: 7,
    name: "Abid ur Rahman",
    location: "Middle East",
    initials: "AR",
    color: "from-[#0066FF] to-[#0052CC]",
    quote: "Landed role with big influencer 6 days after joining. Now earning 4-figure base salary plus commission.",
    result: "4-figure base + commission",
    highlight: false,
  },
  {
    id: 8,
    name: "Muntasir",
    location: "Remote",
    initials: "MU",
    color: "from-[#00D4AA] to-[#00B894]",
    quote: "Watched the training one day. Two days later, collected $700 payment via Stripe. Fastest result in the program.",
    result: "$700 in 3 days",
    highlight: true,
  },
  {
    id: 9,
    name: "Shehab",
    location: "Bangladesh",
    initials: "SH",
    color: "from-[#0066FF] to-[#0052CC]",
    quote: "Never worked in high ticket sales before. Lives in Bangladesh. Made $2.1k working remotely. If I can do it, why can't you?",
    result: "$2.1k from Bangladesh",
    highlight: false,
  },
];

export function SocialProof() {
  const half = Math.ceil(testimonials.length / 2);
  const topRow = testimonials.slice(0, half);
  const bottomRow = testimonials.slice(half);
  const marqueeRows = [
    {
      items: [...topRow, ...topRow],
      direction: "left",
    },
    {
      items: [...bottomRow, ...bottomRow],
      direction: "right",
    },
  ];

  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-[1200px] mx-auto">
        {/* SECTION HEADER */}
        <div className="text-center mb-8 md:mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-[#E6FFFA] text-[#00D4AA] text-sm font-semibold uppercase tracking-wide"
          >
            Join 150+ successful students
          </motion.span>
          <motion.h2
            initial={{ opacity: 1, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-3xl sm:text-4xl font-bold text-[#1A202C] mb-4"
          >
            Real Students, Real Results
          </motion.h2>
          <motion.p
            initial={{ opacity: 1, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="text-lg text-[#718096]"
          >
            Students inside are consistently hitting $10k+ months
          </motion.p>
        </div>

        <div className="space-y-6">
          {marqueeRows.map((row, rowIndex) => (
            <div key={rowIndex} className="relative overflow-hidden">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-20 bg-gradient-to-r from-white via-white/90 to-transparent z-20"
              />
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-20 bg-gradient-to-l from-white via-white/90 to-transparent z-20"
              />

              <motion.div
                className="flex gap-3 md:gap-4 lg:gap-6"
                animate={
                  row.direction === "left"
                    ? { x: ["0%", "-50%"] }
                    : { x: ["-50%", "0%"] }
                }
                transition={{ duration: 14, ease: "linear", repeat: Infinity }}
              >
                {row.items.map((testimonial, index) => (
                  <div
                    key={`${testimonial.id}-${rowIndex}-${index}`}
                    className={`bg-white min-w-[240px] sm:min-w-[280px] lg:min-w-[320px] p-3 md:p-4 lg:p-5 border border-[#E2E8F0] rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col ${
                      testimonial.highlight ? "border-2 border-[#00D4AA]" : ""
                    }`}
                  >
                    {/* Profile */}
                    <div className="flex items-start gap-2 md:gap-3 lg:gap-4 mb-2 md:mb-3 lg:mb-4">
                      <div
                        className={`w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white font-bold text-xs md:text-sm lg:text-lg flex-shrink-0`}
                      >
                        {testimonial.initials}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1 md:gap-2 mb-0.5 md:mb-1 flex-wrap">
                          <div className="font-bold text-xs md:text-sm lg:text-base text-[#1A202C] truncate">
                            {testimonial.name}
                          </div>
                          {testimonial.highlight && (
                            <div className="inline-flex items-center gap-0.5 md:gap-1 px-1.5 md:px-2 py-0.5 rounded-full bg-[#00D4AA]/10 text-[#00D4AA] font-bold text-[10px] md:text-xs">
                              <Zap className="w-2 h-2 md:w-3 md:h-3" />
                              <span>FASTEST</span>
                            </div>
                          )}
                        </div>
                        <div className="text-[10px] md:text-xs lg:text-sm text-[#718096] truncate">
                          {testimonial.location}
                        </div>
                      </div>
                    </div>

                    {/* Quote */}
                    <p className="text-xs md:text-sm lg:text-base text-[#2D3748] leading-tight md:leading-relaxed mb-2 md:mb-3 lg:mb-4 flex-1">
                      "{testimonial.quote}"
                    </p>

                    {/* Result Badge */}
                    <div
                      className={`inline-flex items-center gap-1 md:gap-2 px-2 md:px-3 py-1 md:py-1.5 rounded-full font-semibold text-[10px] md:text-xs lg:text-sm mt-auto ${
                        testimonial.highlight
                          ? "bg-[#00D4AA] text-white"
                          : "bg-[#E6FFFA] text-[#00D4AA]"
                      }`}
                    >
                      <TrendingUp className="h-2.5 w-2.5 md:h-3 md:w-3 lg:h-3.5 lg:w-3.5" />
                      <span className="truncate">💰 {testimonial.result}</span>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
