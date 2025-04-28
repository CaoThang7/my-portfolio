"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/UI/avatar";

const About = () => {
  const t = useTranslations("");

  return (
    <section id="about" className="w-full max-w-6xl mx-auto py-12">
      <div className="grid grid-cols-1 md:grid-cols-[4fr_2fr] gap-10 items-center">
        {/* Left Content */}
        <div className="text-center md:text-left order-2 md:order-1">
          <h1
            className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 font-sans leading-tight"
            data-aos="fade-down"
          >
            <span
              className="inline-block"
              style={{
                animation: "wave 2.5s ease-in-out infinite",
                transformOrigin: "70% 70%",
              }}
            >
              👋
            </span>{" "}
            {t("about.title")}
          </h1>
          <p
            className="text-base font-sans font-medium text-justify md:text-left"
            data-aos="fade-down"
          >
            {t("about.description")}
          </p>
        </div>

        {/* Avatar */}
        <div
          className="flex justify-center md:justify-end order-1 md:order-2"
          data-aos="fade-up"
        >
          <Avatar className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[250px] md:h-[250px] lg:w-[280px] lg:h-[280px] border-1 border-gray-300">
            <AvatarImage
              src="/images/avatar/avatar.jpg"
              alt="Profile picture"
              className="object-cover rounded-full"
            />
            <AvatarFallback>LCT</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </section>
  );
};

export default About;
