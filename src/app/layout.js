import localFont from "next/font/local";
import "./globals.css";
import "./font/ClashDisplay_Complete/Fonts/WEB/css/clash-display.css";
import GlobalProvider from "./Provider";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
import { Suspense } from "react";

import Head from "next/head";
import MetaPixel from "./components/MetaPixel";

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
      <Head />
      <body
        className={`${classDisplayVariable.variable} ${classDisplayRegular.variable} w-full `}
      >
        <MetaPixel />
        <GlobalProvider>
          <Navbar />
          {children}
          <Toaster position="top-center" reverseOrder={false} />
        </GlobalProvider>
      </body>
    </html>
  );
}
