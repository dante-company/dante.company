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
import {
  Locale,
  fallbackLocale,
  processLocale,
  supportedLocales,
} from "@locales";
import { NextPage } from "next";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const MainPage: NextPage = () => {
  const pathname = usePathname();
  const navigator = useRouter();

  useEffect(() => {
    const [_, ...routes] = pathname.split("/");
    const isSupportedLocale = supportedLocales.includes(routes[0] as Locale);
    if (isSupportedLocale) {
      const locale = processLocale(routes[0] as Locale);
      const path = routes.slice(1).join("/");
      navigator.replace(`/${locale}/${path}`);
    } else {
      const locale = processLocale(window.navigator.language) ?? fallbackLocale;
      const path = routes.join("/");
      navigator.replace(`/${locale}/${path}`);
    }
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
    </div>
  );
};

export default MainPage;
