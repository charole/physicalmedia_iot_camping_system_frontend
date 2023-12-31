import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";

const noto_sans = Noto_Sans({
  display: "swap",
  style: ["normal", "italic"],
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  description: "Generated by create next app",
  title: "Create Next App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={noto_sans.className}>
      <body>{children}</body>
    </html>
  );
}
