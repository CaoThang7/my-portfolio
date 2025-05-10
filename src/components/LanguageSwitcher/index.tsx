"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { useState, useEffect, useRef } from "react";
import { languages } from "@/constants/index";
import { setCookie } from "nookies";

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [shouldUseIcons, setShouldUseIcons] = useState<boolean>(false);

  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const currentLang = languages.find((lang) => lang.code === locale);

  useEffect(() => {
    setIsMounted(true);
    const isWindowsPlatform = () => {
      const userAgent = window.navigator.userAgent.toLowerCase();
      return (
        userAgent.indexOf("windows") !== -1 ||
        userAgent.indexOf("win64") !== -1 ||
        userAgent.indexOf("win32") !== -1
      );
    };
    setShouldUseIcons(isWindowsPlatform());
  }, []);

  const handleLanguageChange = async (newLocale: string) => {
    try {
      setCookie(null, "NEXT_LOCALE", newLocale, { path: "/" });
      const targetPath = pathname === "/" ? "/" : pathname;
      await router.replace(targetPath, { locale: newLocale });

      if (locale !== newLocale) {
        window.location.href = `/${newLocale}${targetPath === "/" ? "" : targetPath}`;
      }

      setIsOpen(false);
    } catch (error) {
      console.error("Error changing language:", error);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const RenderFlag = ({ lang }: { lang: (typeof languages)[0] }) => {
    if (!isMounted) return <span className="w-5 h-5 inline-block"></span>;

    if (shouldUseIcons && lang.FlagIcon) {
      const FlagComponent = lang.FlagIcon;
      return <FlagComponent className="w-5 h-4" />;
    }

    return <span className="text-lg">{lang.flag}</span>;
  };

  return (
    <div className="relative w-full md:w-auto" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center cursor-pointer gap-2 text-base text-[var(--text-primary)] font-sans font-medium w-full"
      >
        <span className="flex items-center gap-2">
          {currentLang && <RenderFlag lang={currentLang} />}
          <span>{currentLang?.name}</span>
        </span>
        <i
          className={`fas fa-chevron-down text-xs transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute left-0 right-0 md:left-auto md:right-0 mt-1 py-2 w-full md:w-36 bg-[var(--bg-primary)] shadow-[var(--shadow-dropdown-language)]">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`w-full cursor-pointer text-left px-4 py-2 text-sm hover:bg-[var(--hover-lang)] hover:bg-opacity-10 transition-all duration-300 flex items-center gap-2 ${
                locale === lang.code
                  ? "font-bold text-[var(--color-active)]"
                  : "text-[var(--text-primary)]"
              }`}
            >
              <RenderFlag lang={lang} />
              <span>{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
