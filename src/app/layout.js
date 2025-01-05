import localFont from "next/font/local";
import "./globals.css";
import "./font/ClashDisplay_Complete/Fonts/WEB/css/clash-display.css";
import GlobalProvider from "./Provider";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
import dbConnect from "./lib/db";

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
  description: "Generated by create next app",
  icon: "/dbf.png",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
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
