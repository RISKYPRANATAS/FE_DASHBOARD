import React from "react";
import PropTypes from "prop-types";

const CardLogin = ({ children }) => {
  return (
    <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm w-full md:max-w-lg lg:max-w-md m-5">
      {children}
    </div>
  );
};

CardLogin.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CardLogin;
