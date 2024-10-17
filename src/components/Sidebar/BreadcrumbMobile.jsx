import React from "react";
import { useLocation } from "react-router-dom";
import { LuChevronRight } from "react-icons/lu";

const BreadcrumbMobile = () => {
  const location = useLocation();

  const path = location.pathname.split("/").filter(Boolean);

  const capitalize = (str) =>
    str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

  const formattedPath = path.map(capitalize);

  return (
    <ol className="ms-3 flex items-center whitespace-nowrap">
      {path.length >= 1 && (
        <li className="flex items-center text-sm text-gray-800 dark:text-gold">
          <a href="/dashboard">{formattedPath[0]}</a>
          {path.length > 1 && (
            <>
              <LuChevronRight
                size={16}
                className="text-gray-400 mx-3 overflow-visible"
              />
              <span className="text-sm font-semibold text-gray-800 truncate dark:text-gold">
                {formattedPath[1]}
              </span>
            </>
          )}
        </li>
      )}
    </ol>
  );
};

export default BreadcrumbMobile;
