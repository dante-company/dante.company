import { fallbackLocale, supportedLocales } from "locales";
import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ locale }) => {
  const targetLocale = supportedLocales.includes(locale as any)
    ? locale
    : fallbackLocale;
  return {
    messages: (await import(`./${targetLocale}`)).default,
  };
});
