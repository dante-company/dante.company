import type { AppProps } from 'next/app';
import Head from 'next/head';
import { createGlobalStyle } from 'styled-components';
import { Reset } from 'styled-reset';
import 'tailwindcss/tailwind.css';
import { BackgroundParticles, Footer } from '../components';
import { Metadata } from '../constants/seo';
import '../styles/globals.css';

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Noto Sans KR', sans-serif;
  }
`;

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <Head>
        <Metadata />
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
