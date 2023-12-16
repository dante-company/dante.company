import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  localeDetection: true,
  localePrefix: "always",
  locales: ["en", "ko"],
  defaultLocale: "en",
});

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
