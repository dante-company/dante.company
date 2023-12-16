import { fallbackLocale } from "locales";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

interface Props {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export async function generateMetadata({
  params: { locale = fallbackLocale },
}: Props) {
  const t = await getTranslations({ locale, namespace: "common" });

  return {
    title: "Games",
    description: "Games",
    openGraph: {
      title: "Games",
      description: "Games",
    },
  } as Metadata;
}

export default async function GamesLayout({ children }: Props) {
  return <>{children}</>;
}
