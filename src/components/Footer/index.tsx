"use client";

import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations();

  return (
    <footer className="w-full bg-[var(--bg-primary)] border-t-[0.5px] border-[#e5e5e5]">
      <div className="mx-auto text-center text-base font-sans font-medium bg-[var(--bg-card)] p-4 ">
        {`Copyright © 2025 ${t("name.full")}. All rights reserved`}
      </div>
    </footer>
  );
};

export default Footer;
