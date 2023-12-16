import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ locale }) => {
  const supportedLocales = ["en", "ko"];
  if (!supportedLocales.includes(locale)) {
    throw new Error(`Unsupported locale: ${locale}`);
  }
  const targetLocale = locale === "ko" ? "ko" : "en";
  return {
    messages: (await import(`./${targetLocale}`)).default,
  };
});
