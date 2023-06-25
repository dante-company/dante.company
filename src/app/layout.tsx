import { fallbackLocale, getMessages } from "@locales/index";
import { NextIntlClientProvider, createTranslator } from "next-intl";
import { Noto_Sans } from "next/font/google";
import "./globals.css";

const font = Noto_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  preload: true,
});

interface Props {
  children: React.ReactNode;
}

export async function generateMetadata() {
  const locale = fallbackLocale;
  const messages = await getMessages(locale);
  const t = createTranslator({ locale, messages });

  return {
    title: {
      template: `%s | ${t("metadata.title")}`,
      default: t("metadata.title"),
    },
    description: t("metadata.description"),
    viewport: "width=device-width, initial-scale=1.0",
    themeColor: [
      { color: "#ffffff", media: "(prefers-color-scheme: light)" },
      { color: "#000000", media: "(prefers-color-scheme: dark)" },
    ],
    alternates: { canonical: "https://dante.company" },
    openGraph: {
      title: t("metadata.title"),
      description: t("metadata.description"),
      url: "https://dante.company",
      siteName: t("metadata.title"),
      type: "website",
      locale: "ko_KR",
      images: [
        {
          url: "https://dante.company/og/dante-company.png",
          alt: "Logo",
          width: 1200,
          height: 1200,
        },
      ],
    },
  };
}

export default async function LocaleLayout({ children }: Props) {
  const locale = fallbackLocale;
  const messages = await getMessages(locale);

  return (
    <html lang={locale}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <body className={font.className}>{children}</body>
      </NextIntlClientProvider>
    </html>
  );
}
