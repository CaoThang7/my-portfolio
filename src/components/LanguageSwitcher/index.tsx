"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { useState, useEffect, useRef } from "react";
import { languages } from "@/constants/index";
import { setCookie } from 'nookies';

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const currentLang = languages.find((lang) => lang.code === locale);

  const handleLanguageChange = async (newLocale: string) => {
    try {
      setCookie(null, 'NEXT_LOCALE', newLocale, { path: '/' });
      const targetPath = pathname === '/' ? '/' : pathname;
      await router.replace(targetPath, { locale: newLocale });
      
      if (locale !== newLocale) {
        window.location.href = `/${newLocale}${targetPath === '/' ? '' : targetPath}`;
      }
      
      setIsOpen(false);
    } catch (error) {
      console.error('Error changing language:', error);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-full md:w-auto" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center cursor-pointer gap-2 text-base text-[--text-primary] font-sans font-medium w-full"
      >
        <span className="flex items-center gap-2">
          <span className="text-lg">{currentLang?.flag}</span>
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
              <span className="text-lg">{lang.flag}</span>
              <span>{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
