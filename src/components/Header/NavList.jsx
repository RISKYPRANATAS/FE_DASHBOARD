import React from "react";
import NavItem from "./NavItem";
import LogoMobile from "./LogoMobile";

const NavList = () => {
  return (
    <nav className="px-4 sm:px-6 flex basis-full items-center w-full mx-auto">
      <LogoMobile />
      <NavItem />
    </nav>
  );
};

export default NavList;
