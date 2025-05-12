import type { Metadata } from "next";
import "./globals.css";
import { Alex_Brush, Montserrat } from "next/font/google";
import React, { ReactNode } from "react";

// components
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// context provider
import { NavContextProvider } from "@/context/NavContext";

interface RootLayoutProps {
  children: ReactNode;
}
const alexBrush = Alex_Brush({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-alexBrush",
});

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "treekay producer page",
  description: "a modern music producer website for viewing treekay's latest projects",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${alexBrush.variable} ${montserrat.variable} overflow-x-hidden relative`}
      >
        <NavContextProvider>
          <Header />
          {children}
          <Footer />
        </NavContextProvider>
      </body>
    </html>
  );
}
