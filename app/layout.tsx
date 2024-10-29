import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";
import { Background } from "@/components/UI/background";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative text-white bg-black `}
      >
        <div className="relative z-[2]">
          {children}
        </div>

        <Background/>
      </body>
    </html>
  );
}