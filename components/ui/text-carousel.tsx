"use client";

import { useEffect, useState } from "react";
import { motion, type MotionProps } from "framer-motion";
import { Quote, Star } from "lucide-react";

import { cn } from "@/lib/utils";

type TextCarouselItem = {
  name: string;
  role: string;
  location: string;
  income: string;
  image: string;
  text: string;
};

type TextCarouselProps = {
  items: Array<TextCarouselItem>;
  duration?: number;
  className?: string;
  cardClassName?: string;
};

export function TextCarousel({
  items,
  duration = 30,
  className,
  cardClassName,
}: TextCarouselProps) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);

    handleChange();

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", handleChange);
    } else if (typeof mediaQuery.addListener === "function") {
      mediaQuery.addListener(handleChange);
    }

    return () => {
      if (typeof mediaQuery.removeEventListener === "function") {
        mediaQuery.removeEventListener("change", handleChange);
      } else if (typeof mediaQuery.removeListener === "function") {
        mediaQuery.removeListener(handleChange);
      }
    };
  }, []);

  const loop = [...items, ...items];
  const renderedItems = prefersReducedMotion ? items : loop;

  const animationProps: MotionProps | undefined = prefersReducedMotion
    ? undefined
    : {
        animate: { x: ["0%", "-50%"] },
        transition: {
          duration,
          ease: "linear",
          repeat: Infinity,
        },
      };

  const cardMinWidthClasses =
    cardClassName ?? "min-w-[260px] sm:min-w-[320px] lg:min-w-[360px]";

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div className="pointer-events-none absolute left-0 top-0 h-full w-16 sm:w-24 bg-gradient-to-r from-white via-white/90 to-transparent z-20" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-16 sm:w-24 bg-gradient-to-l from-white via-white/90 to-transparent z-20" />

      <motion.div
        className="flex gap-4 sm:gap-6"
        {...(animationProps ?? {})}
      >
        {renderedItems.map((testimonial, index) => (
          <div
            key={`${testimonial.name}-${index}`}
            className={cn(
              "bg-[#F7FAFC] p-6 sm:p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300",
              cardMinWidthClasses,
            )}
          >
            <Quote className="h-6 w-6 sm:h-8 sm:w-8 text-[#0066FF]/30 mb-4" />
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
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
        ))}
      </motion.div>
    </div>
  );
}

