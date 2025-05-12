"use client";

import Socials from "./Socials";
import Nav from "./Nav";

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-zinc-900 section">
      <div className="container mx-auto flex flex-col items-center gap-y-8">
        {/* nav */}
        <div>
          <Nav
            containerStyles="flex flex-col xl:flex-row justify-center items-center
          gap-y-4 xl:gap-x-8 text-sm uppercase font-semibold"
            linkStyles="hover:text-white/80 transition-all"
          />
        </div>
        {/* socials */}
        <div>
          <Socials
            containerStyles="flex text-[24px] gap-x-8"
            iconStyles="hover:text-white/80 transition-all justify-center"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
