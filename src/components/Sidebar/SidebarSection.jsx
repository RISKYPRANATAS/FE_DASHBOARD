import React from "react";
import Logo from "./Logo";
import SidebarNavList from "./SidebarNavList";

const SidebarSection = () => {
  return (
    <div
      id="hs-application-sidebar"
      className="hs-overlay  [--auto-close:lg] hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform w-[260px] h-full hidden fixed inset-y-0 start-0 z-[60] bg-white border-e border-gray-200 lg:block lg:translate-x-0 lg:end-auto lg:bottom-0"
      tabIndex="-1"
      aria-label="Sidebar"
    >
      <div className="relative flex flex-col h-full max-h-full">
        <Logo />

        <SidebarNavList />
      </div>
    </div>
  );
};

export default SidebarSection;
