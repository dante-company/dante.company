import { Metadata } from "next";
import "./globals.css";
import { Noto_Sans } from "next/font/google";
import classNames from "classnames";

const font = Noto_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  preload: true,
});

export const metadata: Metadata = {
  title: {
    template: "%s | Dante Company",
    default: "Dante Company",
  },
  description:
    "단테컴퍼니는 1인 개발사로 국내 및 해외 기업들에게 소프트웨어 개발을 제공하며 동시에 자유의지로 만들고 싶은 것들을 개발하고 있습니다.",
  viewport: "width=device-width, initial-scale=1.0",
  themeColor: [
    {
      color: "#ffffff",
      media: "(prefers-color-scheme: light)",
    },
    {
      color: "#000000",
      media: "(prefers-color-scheme: dark)",
    },
  ],
  alternates: {
    canonical: "https://dante.company",
  },
  openGraph: {
    title: "단테컴퍼니",
    description:
      "단테컴퍼니는 1인 개발사로 국내 및 해외 기업들에게 소프트웨어 개발을 제공하며 동시에 자유의지로 만들고 싶은 것들을 개발하고 있습니다.",
    url: "https://dante.company",
    siteName: "단테컴퍼니",
    type: "website",
    locale: "ko_KR",
    images: [
      {
        url: "https://dante.company/og/dante-company.png",
        alt: "단테컴퍼니 로고",
        width: 1200,
        height: 1200,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={classNames("overflow-x-hidden", font.className)}>
        {children}
      </body>
    </html>
  );
}
