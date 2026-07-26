import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">

      {/* <body className="bg-black"> */}
      <body className="bg-white text-gray-900">

        <Navbar />

        {children}

        <Footer />
        <Script
  src="https://checkout.razorpay.com/v1/checkout.js"
  strategy="beforeInteractive"
/>

      </body>

    </html>
  );
}