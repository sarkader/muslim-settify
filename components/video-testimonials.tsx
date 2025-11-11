"use client";

import { Zap, Coins } from "lucide-react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

type BaseTestimonial = {
  id: number;
  name: string;
  headline: string;
  subheading: string;
  timeline: string[];
  result: string;
  highlight: boolean;
  closing?: string;
};

type YoutubeTestimonial = BaseTestimonial & {
  videoType: "youtube";
  videoId: string;
};

type LoomTestimonial = BaseTestimonial & {
  videoType: "loom";
  videoId: string;
};

type MP4Testimonial = BaseTestimonial & {
  videoType: "mp4";
  videoFile: string;
};

type VideoTestimonial = YoutubeTestimonial | LoomTestimonial | MP4Testimonial;

const videoTestimonials: VideoTestimonial[] = [
  {
    id: 1,
    name: "Aqib",
    headline: "Here Is Aqib Who Made $60k So Far From Setting And Closing",
    subheading: "Forget about $10k… Aqib's done $60k(not totally cash collected) in earnings last time I checked",
    videoType: "youtube" as const,
    videoId: "tE-AMxW_p7I",
    timeline: [
      "Feb 15 → Aqib got kicked out of his job recently",
      "Feb 18 → Aqib met Jamil & purchased his coaching",
      "April 15 → Aqib has made 4 figures in earnings",
      "June 30 → Aqib has made around $30k (not fully collected)",
      "September → Closed multiple deals for Buildfast",
    ],
    result: "$60k+ Total Earnings",
    highlight: false,
  },
  {
    id: 8,
    name: "Muntasir",
    headline: "Muntasir's Story",
    subheading: "Imagine learning a craft one day, then two days later, you make $700.",
    videoType: "loom" as const,
    videoId: "9351ea53e9d84356ba84aa2994a900bf",
    timeline: [
      "Start of May → Muntasir has been in a programming course for months...",
      "May 10 → Around this point, he booked a call with me and watched our free training on appointment setting",
      "May 12 → We had our call, and he expressed his desire to make money fast, and liked appointment setting/DM work due to it being easy and fast cash",
      "May 14 → He collects a $700 payment from a coach via stripe",
    ],
    result: "$700 in just 3 days total",
    highlight: true,
  },
  {
    id: 2,
    name: "Melih",
    headline: "Melih's Story",
    subheading: "",
    videoType: "youtube" as const,
    videoId: "OT-JjZCzfq8",
    timeline: [
      "May → Sold belongings to get into paid community",
      "May 31 → Landed his first role, which is a big role for a muslim influencer with around 300k followers on instagram",
      "End of July → Landed a huge role for another Muslim influencer working overseas, this role had $2-3k on target earnings monthly",
      "August 11 → Made $1000 in the last 10 days then dropped out of University and now on track to earn more than his parents this month",
      "October → Traveled while working freely to Turkey and met Jamil during an overseas trip",
    ],
    result: "Earning thousands monthly + traveling freely",
    highlight: false,
  },
  {
    id: 3,
    name: "Mohamad Hussein",
    headline: "Mohamad Hussein's Story",
    subheading: "",
    videoType: "youtube" as const,
    videoId: "FAbzaf_OO28",
    timeline: [
      "April 29 → Joined our paid community to gain financial freedom",
      "April 30 → Finished all the material in like 12 hours and landed his first role after 1 day",
      "May 22 → Landing at $1000 in just around 3 weeks",
      "August 1 → Made almost $3.5k in total",
      "October → OTE is around $7k-$8k and became a COO",
    ],
    result: "COO earning $7-8k/month",
    highlight: false,
  },
  {
    id: 4,
    name: "Aeman Teter",
    headline: "Aeman Teter's Story",
    subheading: "",
    videoType: "youtube" as const,
    videoId: "KSwLMwW7S0E",
    timeline: [
      "June 14 → Joined the paid community Had worked with some couple offers before joining the program",
      "July 14 → Landed a role with an agency who makes $350k per month. The OTE is $5k-$8k per month. The top setter on that offer makes $10-$12k",
      "August 3 → $11k deals got closed from Aeman's sets and he made around $550 in one day",
      "August 22 → Relocated overseas while keeping a remote schedule",
      "September → Collected his first paycheck from his new offer",
    ],
    result: "$5k-$8k OTE working remotely",
    highlight: false,
  },
  {
    id: 5,
    name: "Hosaam",
    headline: "Hosaam's Story",
    subheading: "",
    videoType: "youtube" as const,
    videoId: "0yU5bezEcxc",
    timeline: [
      "Mid August → After being unemployed for the first time in six years, joined the program around August 19",
      "Around a month later → Landed his first appointment-setting job",
      "Shortly after → Received three job offers while onboarding",
      "About 37 days in → Earned roughly $2.3k USD while balancing full-time work",
      "Now → Working two appointment-setting roles",
    ],
    result: "Two setting roles • ~$2.3k earned in about 37 days",
    highlight: false,
  },
  {
    id: 6,
    name: "Muhammad Afdhal",
    headline: "Muhammad Afdhal's Story",
    subheading: "",
    videoType: "loom" as const,
    videoId: "e26817a50f144028ae2b78754dc2bc30",
    timeline: [
      "April 20 → Joined our paid community",
      "April 26 → Got into his first role",
      "May 31 → Made approx $1.8k working in his role",
      "June 28 → Generated around $3k in total as an appointment setter",
      "August 10 → Traveled to Qatar, Tokyo, and India while working remotely",
      "October 29 → Made around $7-$8k",
    ],
    result: "$4k+ Total Earned",
    highlight: false,
  },
  {
    id: 7,
    name: "Abid ur Rahman",
    headline: "Abid ur Rahman's Story",
    subheading: "",
    videoType: "loom" as const,
    videoId: "fb861b6aa49b4e57a63db9ccf7a9c679",
    timeline: [
      "May 25 → Joined our paid community",
      "May 31 → Landed his first role, which is a big role for a muslim influencer",
      "July → Made $1000+ and also got promoted on his current role",
      "July 14 → Landed a role with an agency owner with 76k followers on Instagram and 1.8k members on skool and now gets a 4 figure base salary + commision",
    ],
    result: "4-figure base salary + commission",
    highlight: false,
  },
  {
    id: 9,
    name: "Shehab",
    headline: "Shehab's Story",
    subheading: "March 30 → never worked in high ticket sales. Lives in Bangladesh.",
    videoType: "loom" as const,
    videoId: "11c0981d645c478ebc2323cb01c8f308",
    timeline: [
      "March 31st → Decided to invest in my paid programme, after knowing about my stuff for a while",
      "April 15 → Around this point, he was placed in a role(I help paid community members get skool appointment setting roles)",
      "May 2 → Until this point, he made $1400 approx in earnings from the role",
      "May 3 → Around this point, he started working for Ustadh Abdul Aziz al Haggan's academy(he has 300k on insta) as an appointment setter & closer",
      "June 15 → Made around $2.1k on his role",
    ],
    closing: "He's in bangladesh, and had 0 high ticket sales experience. If he can do it, why can't you?",
    result: "$2.1k+ from Bangladesh",
    highlight: false,
  },
];

export function VideoTestimonials() {
  return (
    <section id="video-testimonials" className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#F7FAFC]">
      <div className="max-w-[1400px] mx-auto">
        {/* SECTION HEADER */}
        <div className="text-center mb-8 md:mb-12">
          <motion.h2
            initial={{ opacity: 1, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-3xl sm:text-4xl font-bold text-[#1A202C] mb-4"
          >
            Hear From Our Students Themselves
          </motion.h2>
        </div>

        {/* VIDEO GRID - 3 columns desktop, 2 tablet, 1 mobile */}
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {videoTestimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
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
              className={cn(
                "bg-white rounded-2xl p-4 md:p-6 shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 flex flex-col",
                testimonial.highlight ? "border-2 border-[#00D4AA]" : ""
              )}
            >
              {/* EARNINGS BADGE - ELEGANT SHIMMER */}
              <div className="mb-3 md:mb-4 h-10 md:h-14 flex items-center justify-center relative -mx-1 md:mx-0">
                <div
                  className="inline-flex items-center gap-1.5 md:gap-2.5 px-2.5 md:px-5 py-1.5 md:py-2 rounded-full font-semibold text-xs md:text-base border-2 relative overflow-hidden group bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-400 text-blue-900 w-[calc(100%-0.5rem)] md:w-auto max-w-full"
                >
                  {/* Shimmer animation */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-blue-200/30 to-transparent"></div>
                  
                  {/* Animated coin */}
                  <motion.div
                    animate={{ 
                      rotate: [0, 15, -15, 0],
                      y: [0, -4, 0]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                    className="flex-shrink-0"
                  >
                    <Coins className="w-3.5 h-3.5 md:w-5 md:h-5 text-blue-600" />
                  </motion.div>
                  
                  <span className="relative z-10 font-bold text-center flex-1 min-w-0">{testimonial.result}</span>
                </div>
              </div>

              {/* VIDEO */}
              {testimonial.videoType === "youtube" && testimonial.videoId ? (
                <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-md mb-3 md:mb-4">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${testimonial.videoId}`}
                    title={testimonial.headline}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : testimonial.videoType === "loom" && testimonial.videoId ? (
                <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-md mb-3 md:mb-4">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.loom.com/embed/${testimonial.videoId}`}
                    title={testimonial.headline}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : testimonial.videoType === "mp4" && testimonial.videoFile ? (
                <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-md mb-4 bg-black">
                  <video 
                    className="w-full h-full object-cover rounded-xl"
                    controls
                    preload="metadata"
                  >
                    <source src={`/videos/${testimonial.videoFile}`} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ) : (
                <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-md mb-4 bg-gradient-to-br from-[#0066FF] to-[#0052CC] flex items-center justify-center">
                  <p className="text-white text-sm font-medium">Video Coming Soon</p>
                </div>
              )}

              {/* TEXT CONTENT BELOW VIDEO */}
              <div className="flex-1 flex flex-col">
                {/* HEADER */}
                <div className="mb-3">
                  {testimonial.highlight && (
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00D4AA]/10 text-[#00D4AA] font-bold text-xs mb-2">
                      <Zap className="w-3 h-3" />
                      <span>FASTEST RESULT</span>
                    </div>
                  )}
                  <h3 className="text-lg font-bold text-[#1A202C] mb-1">
                    {testimonial.headline}
                  </h3>
                  {testimonial.subheading && (
                    <p className="text-sm text-[#718096] mb-2">{testimonial.subheading}</p>
                  )}
                </div>

                {/* TIMELINE */}
                <div className="space-y-2 mb-4 flex-1">
                  {testimonial.timeline.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-2 text-sm text-[#718096]"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF] flex-shrink-0 mt-2"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* CLOSING LINE (for Shehab) */}
                {testimonial.closing && (
                  <p className="text-sm font-medium text-[#1A202C] mb-4 italic">
                    {testimonial.closing}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
