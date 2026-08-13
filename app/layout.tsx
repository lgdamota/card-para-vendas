import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { sellerData } from "@/data/sellerData";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(sellerData.pageUrl),
  title: `${sellerData.name} | ${sellerData.role}`,
  description: sellerData.seoDescription,
  applicationName: `${sellerData.name} — Cartão digital`,
  authors: [{ name: sellerData.dealerName }],
  alternates: { canonical: "/" },
  openGraph: {
    title: `${sellerData.name} | ${sellerData.role}`,
    description: sellerData.seoDescription,
    url: "/",
    siteName: sellerData.dealerName,
    locale: "pt_BR",
    type: "profile",
    images: [
      {
        url: sellerData.motorcycleImage,
        width: 1200,
        height: 900,
        alt: sellerData.slogan,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${sellerData.name} | ${sellerData.role}`,
    description: sellerData.seoDescription,
    images: [sellerData.motorcycleImage],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
