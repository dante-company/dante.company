import { supportedLocales } from ".";
import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({
    locales: supportedLocales,
    localePrefix: "always",
  });
