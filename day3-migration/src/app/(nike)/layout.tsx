import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer";

// Load custom fonts with proper variable naming and weight management
const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});

const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

// Metadata for the project
export const metadata: Metadata = {
  title: "Nike E-Commerce",
  description: "Explore and shop Nike's latest collections with ease.",
  keywords: "Nike, E-commerce, Sportswear, Shoes, Apparel, Fitness",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-[#111] bg-white font-sans`}
      >
        <Header />
        <main className="min-h-screen px-4 md:px-12 pt-4 pb-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
