"use client";

import { useState } from "react";
import { NavMenu } from "../navigation/NavMenu";
import { ContactUsBanner } from "./ContactUsBanner";
import { MobileNav } from "../mobile/navMobile/MobileNav";

export const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const onToggle = () => setMobileMenuOpen(!isMobileMenuOpen);
  return (
    <header className="flex flex-col text-2xl w-full border-b border-gray-200">
      <ContactUsBanner />
      <div className="flex justify-between items-center w-[90%] p-4 mx-auto">
        <div className="flex flex-col">
          <h2 className="font-extrabold text-4xl">Professional</h2>
          <span className="text-md">Comercial Services</span>
        </div>
        <NavMenu />
        <MobileNav isOpen={isMobileMenuOpen} onToggle={onToggle} />
      </div>
    </header>
  );
};
