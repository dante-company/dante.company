"use client";

import {
  Footer,
  HeroSection,
  MembersSection,
  StatsSection,
  TimelineSection,
  WelcomeSection,
} from "@components/templates";
import FAQSection from "@components/templates/FAQSection";
import { Locale, processLocale, supportedLocales } from "@locales";
import { NextPage } from "next";
import { useLocalizedRouter } from "next-intl";
import { useEffect } from "react";

const MainPage: NextPage = () => {
  const navigator = useLocalizedRouter();

  useEffect(() => {
    const locale = processLocale(window?.navigator?.language);
    if (supportedLocales.includes(locale as Locale))
      navigator.replace(`/${locale}`);
  }, []);

  return (
    <div className="flex flex-col items-stretch sr-only">
      <HeroSection />
      <WelcomeSection />
      {/* <SkillsSection /> */}
      <StatsSection />
      <MembersSection />
      <TimelineSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default MainPage;
