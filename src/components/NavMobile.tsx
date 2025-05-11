import { useNavContext } from "@/context/NavContext";
import React from "react";
import { RiCloseLine } from "react-icons/ri";
import Nav from "./Nav";

const NavMobile = () => {
  const { isOpen, setIsOpen } = useNavContext();

  return (
    <nav
      className={`${
        isOpen ? "right-0" : "-right-full"
      } xl:hidden fixed bg-zinc-900 w-full top-0 z-20 bottom-0 transition-all duration-500`}
    >
      <div
        onClick={() => setIsOpen(false)}
        className="absolute right-4 top-5 cursor-pointer"
      >
        <RiCloseLine className="text-5xl" />
      </div>
      <Nav
        containerStyles="flex flex-col text-[30px] uppercase font-bold h-full items-center justify-center gap-y-8"
        onLinkClick={() => setIsOpen(false)}
      />
    </nav>
  );
};

export default NavMobile;
