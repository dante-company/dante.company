import "./globals.css";
import { Noto_Sans } from "next/font/google";

const font = Noto_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  preload: true,
  subsets: ["latin"],
});

export const metadata = {
  title: "단테컴퍼니 | Dante Company",
  description:
    "단테컴퍼니는 1인 개발사로 국내 및 해외 기업들에게 소프트웨어 개발을 제공하며 동시에 자유의지로 만들고 싶은 것들을 개발하고 있습니다.",

  // images: [
  //   {
  //     url: "https://dante.company/dante-company.png",
  //     alt: "단테컴퍼니 로고",
  //     width: 1200,
  //     height: 1200,
  //   },
  // ],
  // site_name: "단테컴퍼니",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="theme-color" content="#FFFFFF" />
      </head>
      <body className={font.className}>{children}</body>
    </html>
  );
}
