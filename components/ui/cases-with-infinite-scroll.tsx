"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

type Logo = {
  name: string;
  image: string;
};

const logos: Logo[] = [
  { name: "Z Circle", image: "/icon/trial.png" },
  { name: "B38 36", image: "/icon/b38.36.png" },
  { name: "B37 59", image: "/icon/b37.59.png" },
  { name: "B37 49", image: "/icon/b37.49.png" },
  { name: "B38 26", image: "/icon/b38.26.png" },
  { name: "B37 16", image: "/icon/b37.16.png" },
  { name: "B37 30", image: "/icon/b37.30.png" },
  { name: "B37 24", image: "/icon/b37.24.png" },
  { name: "B36 58", image: "/icon/b36.58.png" },
  { name: "B37 08", image: "/icon/b37.08.png" },
  { name: "B37 40", image: "/icon/b37.40.png" },
  { name: "B38 06", image: "/icon/b38.06.png" },
  { name: "B38 13", image: "/icon/b38.13.png" },
  { name: "Case Study 12", image: "/log/12.jpg" },
  { name: "Case Study 13", image: "/log/13.png" },
];

const CYCLE_DELAY = 2000;

export function Case() {
  const [api, setApi] = useState<CarouselApi>();
  const slides = useMemo(() => logos.concat(logos.slice(0, 6)), []);

  useEffect(() => {
    if (!api) {
      return;
    }

    const handleCycle = () => {
      if (!api) {
        return;
      }

      const nextIndex =
        api.selectedScrollSnap() + 1 === api.scrollSnapList().length
          ? 0
          : api.selectedScrollSnap() + 1;

      api.scrollTo(nextIndex);
    };

    const timer = setInterval(handleCycle, CYCLE_DELAY);
    return () => clearInterval(timer);
  }, [api]);

  return (
    <section className="bg-white py-16 md:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:gap-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-left text-[#1A202C]">
            Students have gotten roles at…
          </h2>
          <Carousel
            setApi={setApi}
            className="w-full"
            opts={{ align: "start", loop: true }}
          >
            <CarouselContent className="items-center">
              {slides.map((logo, index) => (
                <CarouselItem
                  key={`${logo.name}-${index}`}
                  className="basis-1/3 sm:basis-1/4 lg:basis-1/6"
                >
                  <div className="flex aspect-square items-center justify-center rounded-xl border border-[#E2E8F0] bg-[#F7FAFC] p-4">
                    <Image
                      src={logo.image}
                      alt={logo.name}
                      width={96}
                      height={96}
                      className="h-16 w-16 object-contain"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}

