import localFont from "next/font/local";
import "./globals.css";
import "./font/ClashDisplay_Complete/Fonts/WEB/css/clash-display.css";
import GlobalProvider from "./Provider";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
import { Suspense } from "react";
import FacebookPixel from "./components/FacebookPixel";
import Head from "next/head";

export const classDisplayVariable = localFont({
  src: "./font/ClashDisplay-Variable.woff",
  variable: "--font-classDisplay",
  weight: "900",
});

const classDisplayRegular = localFont({
  src: "./font/ClashDisplay-Regular.woff",
  variable: "--font-classDisplayRegular",
  weight: "400",
});

export const metadata = {
  title: "Dream Blue Fashion",
  description: "Fashion product for sale",
  icon: "/dbf.png",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1415563882769732');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style="display:none"
            src="https://www.facebook.com/tr?id=1415563882769732&ev=PageView&noscript=1"
          />
        </noscript>
      </Head>
      <body
        className={`${classDisplayVariable.variable} ${classDisplayRegular.variable}`}
      >
        <GlobalProvider>
          <Navbar />
          {children}
          <Toaster position="top-center" reverseOrder={false} />
        </GlobalProvider>
      </body>
    </html>
  );
}
