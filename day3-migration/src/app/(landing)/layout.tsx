import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import Header2 from "@/components/header/header2";
import Footer from "@/components/footer";

// Load custom fonts
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

// Metadata for the application
export const metadata: Metadata = {
  title: "Nike E-Commerce",
  description: "Discover the latest Nike products and shop with ease.",
  keywords: ["Nike", "E-commerce", "Shopping", "Sportswear", "Shoes"],
  viewport: "width=device-width, initial-scale=1.0",
};

// Root layout component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-[#111]`}
      >
        <Header2 />
        <main className="min-h-screen px-4 md:px-12 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}