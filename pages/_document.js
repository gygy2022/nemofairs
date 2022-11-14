import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script';

import { GA_TRACKING_ID } from '../lib/gtag'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet" />


          <Script
            src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=076c4fb1753e5c6d5dfd7d42babccc06&libraries=services,clusterer&autoload=false`}
            strategy="beforeInteractive"
          />

          {/* Global Site Tag (gtag.js) - Google Analytics */}


          {/* <meta
            httpEquiv="Content-Security-Policy"
            content="upgrade-insecure-requests"
          /> */}



          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />


        </Head>
        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}