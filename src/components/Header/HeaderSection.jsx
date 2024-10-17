import React from "react";
import NavList from "./NavList";

const HeaderSection = () => {
  return (
    <header className="sticky top-0 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-[48] w-full bg-white border-b text-sm py-2.5 lg:ps-[260px]">
      <NavList />
    </header>
  );
};

export default HeaderSection;
