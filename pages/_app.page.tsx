import type { AppProps } from 'next/app';
import Head from 'next/head';
import { createGlobalStyle } from 'styled-components';
import { Reset } from 'styled-reset';
import 'tailwindcss/tailwind.css';
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
        <title>Dante Company</title>
        <meta name="description" content="Get software what you want." />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
