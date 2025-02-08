import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import {inter, poppins} from "./ui/font";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import {ClerkProvider} from "@clerk/nextjs"
import { CartProvider } from "./context/CartContext";
import CartIcon from "@/components/cart-icon";

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
  title: "Nike-Ecommerce",
  description: "Nike Ecommerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.className} ${inter.className} antialiased`}
        cz-shortcut-listen="true"
      >
        <CartProvider>
        <Navbar/>
        <hr className="bg-black"/>  
        <CartIcon/>
        {children }
        <Toaster/>
        <Footer/>
        </CartProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
