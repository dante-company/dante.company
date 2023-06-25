"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { FC } from "react";
import BackgroundParticles from "./BackgroundParticles";
import BackgroundPolygon from "./BackgroundPolygon";
import DanteLogo from "./DanteLogo";

const HeroSection: FC = () => {
  const locale = useLocale();
  const router = useRouter();

  return (
    <section className="relative min-h-[80svh] flex items-center justify-center overflow-hidden">
      <BackgroundPolygon />
      <BackgroundParticles />
      <DanteLogo />

      <div className="absolute top-6 right-6 flex items-center">
        <label htmlFor="language" className="sr-only">
          Language
        </label>
        <select
          id="language"
          name="language"
          className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 sm:text-sm outline-none"
          defaultValue={locale}
          onChange={(e) => {
            router.replace(`/${e.target.value}`);
          }}
        >
          <option value="en">English</option>
          <option value="ko">한국어</option>
        </select>
      </div>
    </section>
  );
};

export default HeroSection;
