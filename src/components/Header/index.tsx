"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { navItems } from "@/constants/index";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Header = () => {
  const [activeItem, setActiveItem] = useState<string>("");
  const t = useTranslations("");

  const handleClickNav = (item: string) => {
    setActiveItem(item);
    const element = document.getElementById(item.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className="sticky top-0 z-50 w-full border-b-[0.5px] shadow-sm transition-colors duration-300"
      style={{
        backgroundColor: "var(--background)",
        borderColor: "#e5e5e5",
      }}
    >
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-sm overflow-hidden bg-white dark:bg-[--background] cursor-pointer">
              <Image
                src="/images/logo/logo.webp"
                alt="Logo"
                width={32}
                height={32}
                className="invert dark:invert-0 object-cover"
                quality={75}
                priority
              />
            </div>
            <h1 className="text-xl font-bold text-[--foreground] font-sans cursor-pointer">
              {t("name.first")} {t("name.last")}
            </h1>
          </div>
        </Link>

        {/* Navbar */}
        <nav className="flex space-x-6 text-base font-medium font-sans">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => handleClickNav(item)}
              className={`relative cursor-pointer text-[--foreground] transition-all duration-300 
                ${activeItem === item ? "font-bold text-[var(--active-color)]" : "hover:text-[var(--hovernav)] after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-[var(--hovernav)] after:transition-all after:duration-300"}
              `}
            >
              {t("navigation." + item.toLowerCase())}
            </button>
          ))}
        </nav>

        {/* Language */}
        <LanguageSwitcher />
      </div>
    </header>
  );
};

export default Header;
