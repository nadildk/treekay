import React from "react";
import "./globals.css";
import Hero from "@/components/Hero";
import Player from "@/components/Player";
import AlbumSwiper from "@/components/AlbumSwiper";

export default function Home() {
  return (
    <main>
      <Hero/>
      <Player/>
      <AlbumSwiper />
      <div className="h-[500px]"></div>
    </main>
  );
}
