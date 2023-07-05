import { Header } from "@components/templates";
import { getMessages, supportedLocales } from "@locales/index";
import { Metadata } from "next";
import { NextIntlClientProvider, createTranslator } from "next-intl";
import { Noto_Sans } from "next/font/google";

const font = Noto_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  preload: true,
});

interface Props {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export function generateStaticParams() {
  return supportedLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale = "en" } }: Props) {
  const messages = await getMessages(locale);
  const t = createTranslator({ locale, messages });

  return {
    title: {
      template: `%s | ${t("metadata.title")}`,
      default: t("metadata.title"),
    },
    description: t("metadata.description"),
    openGraph: {
      title: t("metadata.title"),
      description: t("metadata.description"),
      url: "https://dante.company",
      siteName: t("metadata.title"),
      type: "website",
      locale: locale === "ko" ? "ko_KR" : locale === "en" ? "en_US" : "en_US",
      images: [
        {
          url: "https://dante.company/og/dante-company.png",
          alt: "Logo",
          width: 1200,
          height: 1200,
        },
      ],
    },
    scripts: [
      {
        // Google Adsense
        src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3034636508464066",
        async: true,
        crossorigin: "anonymous",
      },
    ],
  } as Metadata;
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: Props) {
  const messages = await getMessages(locale);

  return (
    <html lang={locale}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <body className={font.className}>
          <Header />
          {children}
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
