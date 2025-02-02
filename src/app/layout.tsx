import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Treekay Player",
  description: "A web player for the new Treekay beat tape",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Main page content */}
        {children}

        {/* Floating iPhone-sized player icon */}
        <div className="fixed bottom-8 right-8 w-20 h-20 bg-black rounded-full shadow-lg flex items-center justify-center cursor-pointer">
          <div className="text-white text-xl font-bold">🎶</div> {/* Add a play icon or something else here */}
        </div>
      </body>
    </html>
  );
}
