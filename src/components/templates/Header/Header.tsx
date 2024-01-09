"use client";

import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import { useLocale } from "next-intl";
import { FC, useCallback } from "react";
import { Locale } from "../../../locales";
import { Link, usePathname, useRouter } from "../../../locales/navigation";

const Header: FC = () => {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const handleLanguageChange = useCallback(
    (targetLocale: Locale) => {
      router.replace(pathname, { locale: targetLocale });
    },
    [pathname, router]
  );

  return (
    <div className="fixed inset-x-0 top-0 z-header flex items-center justify-between px-4 pt-2 text-black dark:text-white md:px-6 md:pt-4">
      <div className="flex gap-6">
        <Link href="/" className="hidden font-bold tracking-tighter md:block">
          DANTE COMPANY
        </Link>
        <ul className="flex gap-4">
          <li className="relative">
            {pathname === "/" && (
              <div className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-twilight dark:bg-blossom" />
            )}
            <Link href="/">Home</Link>
          </li>
          <li className="relative">
            {pathname === "/games" && (
              <div className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-twilight dark:bg-blossom" />
            )}
            <Link href="/games">Games</Link>
          </li>
          <li className="relative">
            <Link href="https://blog.dante.company">
              Blog
              <ArrowTopRightOnSquareIcon className="ml-1 inline-block h-4 w-4" />
            </Link>
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
