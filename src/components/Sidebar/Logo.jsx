import React from "react";

const Logo = () => {
  return (
    <div className="px-6 pt-4">
      <a
        className="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-none focus:opacity-80"
        href="/dashboard"
        aria-label="Logo"
      >
        <img src="/Logo.svg" alt="Logo" width={175} />
      </a>
    </div>
  );
};

export default Logo;
