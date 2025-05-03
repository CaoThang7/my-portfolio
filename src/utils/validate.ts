import { z } from "zod";

export const getContactSchema = (t: (key: string) => string) =>
  z.object({
    name: z.string().min(1, { message: t("errors.nameRequired") }),
    email: z
      .string()
      .min(1, { message: t("errors.emailRequired") })
      .email({ message: t("errors.invalidEmail") }),
    subject: z.string().min(1, { message: t("errors.subjectRequired") }),
    message: z.string().min(1, { message: t("errors.messageRequired") }),
  });

export type ContactSchema = z.infer<ReturnType<typeof getContactSchema>>;
