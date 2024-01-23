import Script from "next/script";

const Scripts = () => {
  return (
    <>
      {/* Google Analytics */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-CG890MCS5N"
      />
      <Script
        strategy="lazyOnload"
        id="gtag"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
    
            gtag('config', 'G-CG890MCS5N');
          `,
        }}
      />

      {/* Google Adsense */}
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6700025991079512"
        crossOrigin="anonymous"
      />
      <Script
        id="adsense"
        dangerouslySetInnerHTML={{
          __html: `(adsbygoogle = window.adsbygoogle || []).push({});`,
        }}
      />

      {/* Naver Search Advisor */}
      <meta
        name="naver-site-verification"
        content="a583ae65eeea2a23cfd4b5180450d7c87cb86b0c"
      />
    </>
  );
};

export default Scripts;
