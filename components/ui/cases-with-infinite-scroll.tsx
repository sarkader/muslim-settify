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
  {
    name: "Noor Studios",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=160&q=80",
  },
  {
    name: "Atlas Ventures",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=160&q=80",
  },
  {
    name: "Saffron & Co.",
    image:
      "https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?auto=format&fit=crop&w=160&q=80",
  },
  {
    name: "Blue Crescent",
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=160&q=80",
  },
  {
    name: "Evergreen Labs",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=160&q=80",
  },
  {
    name: "Horizon Media",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=160&q=80",
  },
  {
    name: "Marhaba Digital",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=160&q=80",
  },
  {
    name: "Unity Agency",
    image:
      "https://images.unsplash.com/photo-1485217988980-11786ced9454?auto=format&fit=crop&w=160&q=80",
  },
  {
    name: "Summit Partners",
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=160&q=80",
  },
  {
    name: "Falcon Group",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=160&q=80",
  },
  {
    name: "Founders Collective",
    image:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=160&q=80",
  },
  {
    name: "Cedar Labs",
    image:
      "https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=160&q=80",
  },
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

