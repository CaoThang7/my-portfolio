"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { navItems } from "@/constants/index";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Header = () => {
  const [activeItem, setActiveItem] = useState<string>("");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const t = useTranslations("");

  const handleClickNav = (item: string) => {
    setActiveItem(item);
    setIsMenuOpen(false);
  
    if (item.toLowerCase() === "about") {
      // Nếu là About thì scroll lên top
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Các section khác scroll như bình thường
      const element = document.getElementById(item.toLowerCase());
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };  

  return (
    <header
      className="sticky top-0 z-50 w-full border-b-[0.5px] shadow-sm transition-colors duration-300 mx-auto px-[15px]"
      style={{
        backgroundColor: "var(--bg-primary)",
        borderColor: "#e5e5e5",
      }}
    >
      <div className="max-w-6xl mx-auto py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-sm overflow-hidden bg-[var(--bg-primary)] cursor-pointer">
              <Image
                src="/images/logo/logo.jpg"
                alt="Logo"
                width={32}
                height={32}
                className="object-cover"
                quality={75}
                priority
              />
            </div>
            <h1 className="text-2xl font-bold text-[var(--text-primary)] font-sans cursor-pointer">
              {t("name.first")} {t("name.last")}
            </h1>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-base font-medium font-sans">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => handleClickNav(item)}
              className={`relative cursor-pointer transition-all duration-300 
                ${activeItem === item ? "font-bold text-[var(--color-active)]" : "hover:text-[var(--hover-nav)] after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-[var(--hover-nav)] after:transition-all after:duration-300"}
              `}
            >
              {t("navigation." + item.toLowerCase())}
            </button>
          ))}
        </nav>

        {/* Desktop Language Switcher */}
        <div className="hidden md:block">
          <LanguageSwitcher />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-[var(--text-primary)] p-0 relative z-[51]"
        >
          <div className="w-5 h-4 relative flex flex-col justify-center gap-[5px]">
            <span
              className={`absolute w-5 h-[2px] bg-current transform transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-0" : "-translate-y-2"
              }`}
            />
            <span
              className={`absolute w-5 h-[2px] bg-current transition-opacity duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute w-5 h-[2px] bg-current transform transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 translate-y-0" : "translate-y-2"
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-[var(--bg-primary)] z-50 transition-all duration-300 ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-[-100%] pointer-events-none"
        }`}
      >
        <div className="h-full flex flex-col pt-14 px-4">
          <nav className="flex flex-col font-medium font-sans">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleClickNav(item)}
                className={`flex items-center justify-between py-4 text-base border-b-[0.2px] border-gray-400 dark:border-gray-400 transition-all duration-300 ${
                  activeItem === item
                    ? "font-bold text-[var(--color-active)]"
                    : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  {/* Icons for each menu item */}
                  {item.toLowerCase() === "about" && (
                    <i className="fas fa-user w-6 text-[var(--text-primary)]" />
                  )}
                  {item.toLowerCase() === "skills" && (
                    <i className="fas fa-code w-6 text-[var(--text-primary)]" />
                  )}
                  {item.toLowerCase() === "projects" && (
                    <i className="fas fa-project-diagram w-6 text-[var(--text-primary)]" />
                  )}
                  {item.toLowerCase() === "contact" && (
                    <i className="fas fa-envelope w-6 text-[var(--text-primary)]" />
                  )}
                  <span>{t("navigation." + item.toLowerCase())}</span>
                </div>
                <i className="fas fa-chevron-right text-[var(--text-primary)]" />
              </button>
            ))}
          </nav>
          <div className="mt-0 pt-4 border-gray-200 dark:border-gray-700">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
