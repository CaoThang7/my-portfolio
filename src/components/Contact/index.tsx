"use client";

import React from "react";
import Link from "next/link";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { FormData } from "@/types/contact";
import { FaThreads } from "react-icons/fa6";
import { useTranslations } from "next-intl";
import { Input } from "@/components/UI/input";
import { Button } from "@/components/UI/button";
import { Textarea } from "@/components/UI/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { getContactSchema, ContactSchema } from "@/utils/validate";
import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";

const Contact = () => {
  const t = useTranslations("contact");
  const schema = getContactSchema(t);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactSchema>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed to send");

      toast.success(t("messageSent"));
      reset();
    } catch (error) {
      console.log(error);
      toast.error("Failed to send message");
    }
  };

  return (
    <section
      id="contact"
      className="bg-[var(--bg-card)] scroll-mt-12 px-[15px]"
    >
      <div className="w-full max-w-6xl mx-auto py-12">
        {/* Content 2 columns */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left section */}
          <div className="space-y-6">
            {/* Title */}
            <h1
              className="text-3xl font-bold font-sans text-[var(--text-primary)]"
              data-aos="fade-down"
            >
              {t("title")}
            </h1>
            <p
              className="text-[var(--text-primary)] font-sans text-base font-medium"
              data-aos="fade-up"
            >
              {t("description")}
            </p>
            <div
              className="flex items-center gap-6 pt-2 text-[var(--text-primary)]"
              data-aos="zoom-in"
            >
              <Link
                href="https://www.linkedin.com/in/cao-th%E1%BA%AFng-l%C3%BD-51153621b/"
                target="_blank"
              >
                <FaLinkedinIn className="w-6 h-6 cursor-pointer hover:opacity-70 hover:scale-110 transition-transform duration-200" />
              </Link>
              <Link
                href="https://www.instagram.com/_beny0120/#"
                target="_blank"
              >
                <FaInstagram className="w-6 h-6 cursor-pointer hover:opacity-70 hover:scale-110 transition-transform duration-200" />
              </Link>
              <Link
                href="https://www.threads.com/@_beny0120?xmt=AQGzhBpLx0jpKYc54WbFq3lYKRZxCdEVhURcA-WPR3iZrBw"
                target="_blank"
              >
                <FaThreads className="w-6 h-6 cursor-pointer hover:opacity-70 hover:scale-110 transition-transform duration-200" />
              </Link>
              <Link href="https://github.com/CaoThang7" target="_blank">
                <FaGithub className="w-6 h-6 cursor-pointer hover:opacity-70 hover:scale-110 transition-transform duration-200" />
              </Link>
            </div>
          </div>

          {/* Right section - Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 self-start pt-3"
            data-aos="fade-up"
          >
            <div className="space-y-1">
              <Input
                placeholder={t("name")}
                className="!focus-visible:ring-0 !focus-visible:ring-transparent !ring-0 !shadow-none rounded-[2px] text-[var(--text-primary)]"
                {...register("name")}
              />
              {errors.name && (
                <p className="text-red-500 text-sm font-sans font-medium">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div className="space-y-1">
              <Input
                placeholder={t("email")}
                className="!focus-visible:ring-0 !focus-visible:ring-transparent !ring-0 !shadow-none rounded-[2px] text-[var(--text-primary)]"
                type="email"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-red-500 text-sm font-sans font-medium">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="space-y-1">
              <Input
                placeholder={t("subject")}
                className="!focus-visible:ring-0 !focus-visible:ring-transparent !ring-0 !shadow-none rounded-[2px] text-[var(--text-primary)]"
                {...register("subject")}
              />
              {errors.subject && (
                <p className="text-red-500 text-sm font-sans font-medium">
                  {errors.subject.message}
                </p>
              )}
            </div>

            <div className="space-y-1">
              <Textarea
                placeholder={t("message")}
                className="!focus-visible:ring-0 !focus-visible:ring-transparent !ring-0 !shadow-none rounded-[2px] text-[var(--text-primary)]"
                rows={6}
                {...register("message")}
              />
              {errors.message && (
                <p className="text-red-500 text-sm font-sans font-medium">
                  {errors.message.message}
                </p>
              )}
            </div>
            <Button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 rounded-[2px] text-white font-sans text-base font-bold cursor-pointer"
              disabled={isSubmitting}
            >
              {isSubmitting ? t("sending") : t("send")}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
