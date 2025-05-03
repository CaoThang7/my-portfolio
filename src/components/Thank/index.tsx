import React from "react";
import { useTranslations } from "next-intl";

const Thank = () => {
  const t = useTranslations("thank");

  return (
    <section
      id="thank"
      data-aos="fade-down"
      className="w-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center px-4 pb-12"
    >
      <strong className="text-[#689af8] text-xl font-bold font-sans tracking-[1px]">
        {t("title")}
      </strong>
      <h3 className="text-3xl font-bold text-[var(--text-primary)] font-sans tracking-[1px] mt-0">
        {t("logan")}
      </h3>
      <p className="text-base font-medium font-sans text-[var(--text-primary)] max-w-[650px] tracking-[1px] mt-2">
        {t("description")}
      </p>
    </section>
  );
};

export default Thank;
