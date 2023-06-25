"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { FC } from "react";
import BackgroundParticles from "./BackgroundParticles";
import BackgroundPolygon from "./BackgroundPolygon";
import DanteLogo from "./DanteLogo";
import { Locale, processLocale } from "@locales";

const HeroSection: FC = () => {
  const locale = useLocale();
  const router = useRouter();

  const handleLanguageChange = (targetLocale: Locale) => {
    const processedLocale = processLocale(targetLocale);
    if (locale !== processedLocale) {
      router.push(`/${processedLocale}`);
    }
  };

  return (
    <section className="relative min-h-[80svh] flex items-center justify-center overflow-hidden">
      <BackgroundPolygon />
      <BackgroundParticles />
      <DanteLogo />

      <div className="absolute top-4 right-4 md:top-6 md:right-6 flex items-center">
        <label htmlFor="language" className="sr-only">
          Language
        </label>
        <select
          id="language"
          name="language"
          className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-600 dark:text-gray-300 sm:text-sm outline-none appearance-none"
          defaultValue={locale}
          onChange={(e) => handleLanguageChange(e.target.value as Locale)}
        >
          <option value="en">English</option>
          <option value="ko">한국어</option>
        </select>
      </div>
    </section>
  );
};

export default HeroSection;
