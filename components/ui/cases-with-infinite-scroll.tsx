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
  { name: "Noor Studios", image: "/ico/1b.jpg" },
  { name: "Atlas Ventures", image: "/ico/1b.jpg" },
  { name: "Saffron & Co.", image: "/ico/1b.jpg" },
  { name: "Blue Crescent", image: "/ico/1b.jpg" },
  { name: "Evergreen Labs", image: "/ico/1b.jpg" },
  { name: "Horizon Media", image: "/ico/1b.jpg" },
  { name: "Marhaba Digital", image: "/ico/1b.jpg" },
  { name: "Unity Agency", image: "/ico/1b.jpg" },
  { name: "Summit Partners", image: "/ico/1b.jpg" },
  { name: "Falcon Group", image: "/ico/1b.jpg" },
  { name: "Founders Collective", image: "/ico/1b.jpg" },
  { name: "Cedar Labs", image: "/ico/1b.jpg" },
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

