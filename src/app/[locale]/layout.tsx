import { generateMetadata } from "../layout";
import { Footer, Header } from "../../components/templates";
import { supportedLocales } from "../../locales/index";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";

interface Props {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export { generateMetadata };

export default async function LocaleLayout({
  children,
  params: { locale },
}: Props) {
  if (!supportedLocales.includes(locale as any)) notFound();
  const message = await getMessages({ locale });

  return (
    <NextIntlClientProvider locale={locale} messages={message}>
      <Header />
      {children}
      <Footer />
    </NextIntlClientProvider>
  );
}
