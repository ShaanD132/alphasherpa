import type { Metadata } from "next";
import { Providers } from "@/lib/providers";
import Navbar from "@/components/navbar";

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
      <body>
        <Providers>
        <Navbar/>
        {children}
        </Providers>
      </body>
      </html>
  );
}