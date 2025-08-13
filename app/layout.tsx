import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";

const getInter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Auristro",
  description: "Modern Ecommerce platform made by Nextjs ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${getInter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
