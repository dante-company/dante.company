import EnglishMessages from "./en";
import KoreanMessages from "./ko";

export { EnglishMessages, KoreanMessages };
export const messages = { ko: KoreanMessages, en: EnglishMessages };

export type Locale = "ko" | "en";

export const fallbackLocale: Locale = "en";
export const supportedLocales: Locale[] = ["ko", "en"];
