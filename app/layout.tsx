import type { Metadata } from "next";
import { Providers } from "@/lib/providers";
import Navbar from "@/components/navbar";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Alpha Sherpa Capital",
  description: "Created by Shaan Dussoye",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body>
        <Providers>
        <Navbar/>
        {children}
        </Providers>
      </body>
      </html>
  );
}