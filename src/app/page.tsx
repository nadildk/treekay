import React from "react";
import "./globals.css";
import Hero from "@/components/Hero";
import Player from "@/components/Player";

export default function Home() {
  return (
    <main>
      <Hero/>
      <Player/>
      <div className="h-[4000px]"></div>
    </main>
  );
}
