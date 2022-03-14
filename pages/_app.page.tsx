import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
import { Reset } from 'styled-reset';
import { BackgroundParticles, Footer } from '../components';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../styles/globals.css';
import 'tailwindcss/tailwind.css';

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Noto Sans KR', sans-serif;
  }
`;

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const callback: IntersectionObserverCallback = (entries) => {
        entries.forEach((entry) => {
          if (
            entry.isIntersecting &&
            !entry.target.classList.contains('motion-safe:animate-fadeIn')
          ) {
            entry.target.classList.add('motion-safe:animate-fadeIn');
          }
        });
      };

      const targets = document.querySelectorAll('.aos-fadeIn');
      const observer = new IntersectionObserver(callback);
      targets.forEach(function (target) {
        observer.observe(target);
      });
    }
  });

  return (
    <>
      <Reset />
      <GlobalStyle />
      <DefaultSeo
        title="단테컴퍼니 | Dante Company"
        description="단테컴퍼니는 1인 개발사로 고객사와 직접적으로 소통하고 합리적인 비용으로 개발합니다."
        canonical="https://dante.company"
        openGraph={{
          url: 'https://dante.company',
          title: '단테컴퍼니 | Dante Company',
          description:
            '단테컴퍼니는 1인 개발사로 고객사와 직접적으로 소통하고 합리적인 비용으로 개발합니다.',
          images: [
            {
              url: 'https://dante.company/dante-company.png',
              alt: '단테컴퍼니 로고',
              width: 1200,
              height: 1200,
            },
          ],
          site_name: '단테컴퍼니',
        }}
      />
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="theme-color" content="#FFFFFF" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="font-sans">
        <Component {...pageProps} />
        <Footer />
        <BackgroundParticles />
      </div>
    </>
  );
};

export default MyApp;
