import React from "react";
import { LuPanelRightClose } from "react-icons/lu";

const SidebarMobile = () => {
  return (
    <button
      type="button"
      className="size-8 flex justify-center items-center gap-x-2 border border-gray-200 text-gray-800 hover:text-gray-500 rounded-lg focus:outline-none focus:text-gray-500 disabled:opacity-50 disabled:pointer-events-none"
      aria-haspopup="dialog"
      aria-expanded="false"
      aria-controls="hs-application-sidebar"
      aria-label="Toggle navigation"
      data-hs-overlay="#hs-application-sidebar"
    >
      <span className="sr-only">Toggle Navigation</span>
      <LuPanelRightClose size={16} />
    </button>
  );
};

export default SidebarMobile;
