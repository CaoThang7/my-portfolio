"use client";

import * as React from "react";
import { useTranslations } from "next-intl";
import Autoplay from "embla-carousel-autoplay";
import { cards } from "@/constants/CarouselCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/UI/carousel";

const Skills = () => {
  const t = useTranslations("");

  return (
    <section
      id="skills"
      className="w-full max-w-6xl mx-auto py-12 scroll-mt-12"
    >
      <h1 className="text-2xl font-bold text-[var(--text-primary)] font-sans mb-8">
        {t("navigation.skills")}
      </h1>
      <Carousel
        className="w-full"
        opts={{
          align: "start",
          loop: true,
          slidesToScroll: 1,
          inViewThreshold: 0.5,
        }}
        plugins={[Autoplay({ delay: 125000, stopOnInteraction: false })]}
      >
        <div className="flex w-full items-center">
          <CarouselPrevious className="relative left-0 z-10 hidden lg:flex" />
          <CarouselContent>
            {cards.map((card, idx) => (
              <CarouselItem
                key={idx}
                className="flex justify-center py-2 basis-full lg:basis-1/3 sm:basis-1/2"
              >
                <div className="bg-[var(--bg-card)] ring-1 ring-[var(--border-card)] rounded-[2px] pt-2 pb-4 mx-2 w-full flex flex-col items-center">
                  <h2 className="text-lg font-semibold mb-2 font-sans">
                    {card.key ? t(`skills.${card.key}`) : card.title}
                  </h2>
                  <div className="w-full border-b border-[var(--border-card)] mb-4" />
                  <div className="flex flex-wrap gap-y-4 w-full px-4">
                    {card.items.map((item, i) => (
                      <div
                        key={i}
                        className="flex flex-col items-center"
                        style={{
                          width: `${100 / Math.min(3, card.items.length)}%`,
                        }}
                      >
                        {item.icon}
                        <span className="mt-2 text-sm sm:text-base font-medium font-sans">
                          {item.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext className="relative right-0 z-10 hidden lg:flex" />
        </div>
      </Carousel>
    </section>
  );
};

export default Skills;
