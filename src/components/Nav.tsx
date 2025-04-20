import Link from "next/link";
import React from "react";

const links = [
  { path: "home", name: "Home" },
  { path: "projects", name: "Projects" },
  { path: "contact", name: "Contact" },
];

type NavProps = {
  containerStyles?: string;
  linkStyles?: string;
};

const Nav = ({ containerStyles = "", linkStyles = "" }: NavProps) => {
  return (
    <nav className={`hidden xl:flex gap-4 ${containerStyles}`}>
      {links.map((link, index) => (
        <Link key={index} href={link.path} className={linkStyles}>
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
