import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Noto_Sans } from "next/font/google";
import { fallbackLocale } from "../locales/index";
import "./globals.css";
import Providers from "./providers";
import Scripts from "./scripts";

const font = Noto_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  preload: true,
});

interface Props {
  children: React.ReactNode;
}

export async function generateMetadata({
  params: { locale = fallbackLocale },
}) {
  const t = await getTranslations({ locale, namespace: "common" });

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
    alternates: {
      canonical: "https://dante.company",
      languages: {
        ko: "/ko",
        en: "/en",
      },
    },
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
  } as Metadata;
}

export default async function LocaleLayout(props: Props) {
  const { children } = props;
  const locale = fallbackLocale;

  return (
    <html lang={locale}>
      <head>
        <Scripts />
      </head>
      <Providers>
        <body className={font.className}>{children}</body>
      </Providers>
    </html>
  );
}
