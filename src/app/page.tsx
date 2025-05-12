import React from "react";
import "./globals.css";
import Hero from "@/components/Hero";
import Player from "@/components/Player";
import AlbumSwiper from "@/components/AlbumSwiper";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Player />
      <AlbumSwiper />
      <Contact />
      <div className="h-32" />
    </main>
  );
}
