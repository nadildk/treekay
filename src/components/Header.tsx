"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

// components
import NavMobile from "./NavMobile";
import Nav from "./Nav";

const Header = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setActive(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed z-50 w-full transition-all duration-300 ${
        active ? "bg-[#0c0c0cec] py-6" : "bg-transparent py-8"
      }`}
    >
      <div className="container mx-auto flex flex-col xl:flex-row items-center xl:justify-between gap-4">
        {/* logo */}
        <div className="flex justify-center xl:justify-start">
          <Link href="/" className="block">
            <Image
              src="/logo.png"
              alt="Logo"
              width={80}
              height={80}
              priority
              className="object-contain"
            />
          </Link>
        </div>

        {/* nav */}
        <Nav containerStyles="hidden xl:flex items-center gap-x-32"/>

        {/* nav mobile */}
        <NavMobile />

        {/* menu btn */}
        <div>menu btn</div>

        {/* socials */}
        <div>social icons</div>
      </div>
    </header>
  );
};

export default Header;
