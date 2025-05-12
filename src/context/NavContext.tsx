"use client";
import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

type NavContextType = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export const NavContext = createContext<NavContextType | undefined>(undefined);

export const useNavContext = () => {
  const context = useContext(NavContext);
  if (!context) {
    throw new Error("useNavContext must be used within a NavContextProvider");
  }
  return context;
};

export const NavContextProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </NavContext.Provider>
  );
};
