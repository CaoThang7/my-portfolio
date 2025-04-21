"use client";

import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations();

  return (
    <footer className="w-full bg-[var(--bg-primary)] py-4 mt-8">
      <div className="max-w-screen-xl mx-auto px-4 text-center text-base font-sans font-medium">
        {`Copyright © 2025 ${t("name.full")}. All rights reserved`}
      </div>
    </footer>
  );
};

export default Footer;
