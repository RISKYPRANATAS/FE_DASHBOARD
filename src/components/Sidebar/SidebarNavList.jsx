import React from "react";
import SidebarNavItem from "./SidebarNavItem";

const SidebarNavList = () => {
  return (
    <div className="h-full overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300">
      <nav
        className="hs-accordion-group p-3 w-full flex flex-col flex-wrap"
        data-hs-accordion-always-open
      >
        <SidebarNavItem />
      </nav>
    </div>
  );
};

export default SidebarNavList;
