import { useNavContext } from "@/context/NavContext";
import React from "react";

const MenuBtn = () => {
  const { setIsOpen } = useNavContext();

  return (
    <div
      onClick={() => setIsOpen(true)}
      className="group flex flex-col gap-y-2 cursor-pointer xl:hidden items-end"
    >
      <div className="w-7 h-[2px] bg-white transition-all"></div>
      <div className="w-4 group-hover:w-7 h-[2px] bg-white transition-all"></div>
      <div className="w-7 h-[2px] bg-white transition-all"></div>
    </div>
  );
};

export default MenuBtn;
