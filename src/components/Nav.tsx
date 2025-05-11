import Link from "next/link";
import React from "react";

const links = [
  { path: "", name: "Home" },
  { path: "projects", name: "Projects" },
  { path: "contact", name: "Contact" },
];

type NavProps = {
  containerStyles?: string;
  linkStyles?: string;
  onLinkClick?: () => void;
};

const Nav = ({ containerStyles = "", linkStyles = "", onLinkClick }: NavProps) => {
  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => (
        <Link
          key={index}
          href={`/${link.path}`}
          className={`cursor-pointer border-b-2 border-transparent hover:border-white/70 hover:text-white/80 transition-all duration-200 ${linkStyles}`}
          onClick={onLinkClick} 
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
