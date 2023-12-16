import { getMessages } from "locales/index";
import { Metadata } from "next";
import { createTranslator } from "next-intl";

interface Props {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export async function generateMetadata({ params: { locale = "en" } }: Props) {
  const messages = await getMessages(locale);
  const t = createTranslator({ locale, messages });
  return {
    title: "Games",
    description: "Games",
    openGraph: {
      title: "Games",
      description: "Games",
    },
  } as Metadata;
}

export default async function GamesLayout({
  children,
  params: { locale },
}: Props) {
  const messages = await getMessages(locale);

  return <>{children}</>;
}
