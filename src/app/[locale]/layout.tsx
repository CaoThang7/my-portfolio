import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AOSInit from "@/components/AOS/AOSInit";
import Progress from "@/components/ScrollProgress/Progress";
import DarkModeSwitcher from "@/components/Theme/DarkModeSwitcher";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { inter } from "@/fonts/font";
import "@/app/globals.css";
import "aos/dist/aos.css";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <NextIntlClientProvider>
          <DarkModeSwitcher />
          <Progress />
          <Header />
          <main className="max-w-screen-xl min-h-screen mx-auto px-[15px] overflow-hidden">
            <AOSInit />
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
