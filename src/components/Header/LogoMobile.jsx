import React from "react";

const LogoMobile = () => {
  return (
    <div className="me-5 lg:me-0 lg:hidden">
      <a
        className="flex-none rounded-md text-xl inline-block font-semibold focus:outline-none focus:opacity-80"
        href="/dashboard"
        aria-label="Logo"
      >
        <img src="/Logo.svg" alt="Logo" />
      </a>
    </div>
  );
};

export default LogoMobile;
