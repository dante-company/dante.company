"use client";

import {
  Locale,
  fallbackLocale,
  processLocale,
  supportedLocales,
} from "@locales";
import { useLocale } from "next-intl";
import Link from "next-intl/link";
import { usePathname, useRouter } from "next/navigation";
import { FC, useEffect, useMemo } from "react";

const Header: FC = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const localizedPathname = useMemo(() => {
    const [_, ...routes] = pathname.split("/");
    const isSupportedLocale = supportedLocales.includes(routes[0] as Locale);
    if (isSupportedLocale) {
      return "/" + routes.slice(1).join("/");
    } else {
      return pathname;
    }
  }, [pathname]);

  useEffect(() => {
    const [_, ...routes] = pathname.split("/");
    const isSupportedLocale = supportedLocales.includes(routes[0] as Locale);
    if (isSupportedLocale) {
      const locale = processLocale(routes[0] as Locale);
      const path = routes.slice(1).join("/");
      const target = `/${locale}/${path}`;
      if (!target.startsWith(pathname)) router.replace(target);
    } else {
      const locale = processLocale(window.navigator.language) ?? fallbackLocale;
      const path = routes.length > 0 ? "/" + routes.join("/") : "";
      const target = `/${locale}/${path}`;
      if (!target.startsWith(pathname)) router.replace(target);
    }
  }, [pathname, router]);

  const handleLanguageChange = (targetLocale: Locale) => {
    const processedLocale = processLocale(targetLocale);
    const [_, locale, ...rest] = pathname.split("/");
    if (locale !== processedLocale) {
      router.replace(`/${processedLocale}/${rest.join("/")}`);
    }
  };

  return (
    <div className="fixed inset-x-0 top-0 z-header flex items-center justify-between px-4 pt-2 md:px-6 md:pt-4">
      <div className="flex gap-6">
        <Link href="/" className="hidden font-bold tracking-tighter md:block">
          DANTE COMPANY
        </Link>
        <ul className="flex gap-4">
          <li className="relative">
            {localizedPathname === "/" && (
              <div className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-twilight dark:bg-blossom" />
            )}
            <Link href="/">Home</Link>
          </li>
          <li className="relative">
            {localizedPathname === "/games" && (
              <div className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-twilight dark:bg-blossom" />
            )}
            <Link href="/games">Games</Link>
          </li>
        </ul>
      </div>
      <div>
        <label htmlFor="language" className="sr-only">
          Language
        </label>
        <select
          id="language"
          name="language"
          className="h-full appearance-none rounded-md border-0 bg-transparent p-2 text-right text-gray-500 outline-none dark:text-gray-400 sm:text-sm"
          defaultValue={locale}
          onChange={(e) => handleLanguageChange(e.target.value as Locale)}
        >
          <option value="en">English</option>
          <option value="ko">🇰🇷 한국어</option>
        </select>
      </div>
    </div>
  );
};

export default Header;
