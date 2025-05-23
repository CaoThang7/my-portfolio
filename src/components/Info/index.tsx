"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { socialLinks } from "@/constants/socialLinks";

const Information = () => {
  const t = useTranslations("");

  return (
    <section id="info" className="max-w-2xl mx-auto">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2" data-aos="zoom-in">
        {socialLinks.map((link) => (
          <Link
            key={link.label}
            href={link.disabled ? "#" : link.href}
            onClick={link.disabled ? (e) => e.preventDefault() : undefined}
            target={link.openInNewTab ? "_blank" : undefined}
            rel={link.openInNewTab ? "noopener noreferrer" : undefined}
            className={`flex items-center justify-center gap-2 px-2 py-1.5 rounded-[2px] transition-opacity ${
              link.disabled
                ? "bg-neutral-800 cursor-not-allowed"
                : "bg-neutral-800 hover:opacity-80"
            } text-white`}
          >
            {link.icon}
            <span className="text-base font-medium font-sans">
              {link.label === "cv" ? t("info.cv") : link.label}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Information;
