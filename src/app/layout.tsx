import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollButtons from "@/components/ScrollButtons";

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
  themeColor: "#04132D",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://kuldeeptravels.com"),
  title: {
    default: "Kuldeep Travels | Best Taxi & Tour Service in Lucknow",
    template: "%s | Kuldeep Travels",
  },
  description:
    "Book safe, reliable, and affordable taxi services in Lucknow. Airport transfers, outstation cabs, local rentals, and custom holiday tour packages.",
  keywords: [
    "taxi service in Lucknow",
    "cab booking Lucknow",
    "airport taxi Lucknow",
    "outstation cabs Lucknow",
    "Kuldeep Travels",
  ],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fontSans.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://wa.me" />
      </head>
      <body className="bg-white text-gray-900 font-sans antialiased">
        <Navbar />
        {children}
        <Footer />
        <ScrollButtons />
      </body>
    </html>
  );
}
