import React from "react";
import PropTypes from "prop-types";

const ButtonSection = ({ title }) => {
  return (
    <button
      type="submit"
      className="w-full py-3 px-4 md:py-5 lg:py-3 md:mt-5 font-bold inline-flex justify-center items-center gap-x-2 text-sm md:text-lg lg:text-base rounded-lg border border-transparent bg-primary text-white hover:bg-primary/75 focus:outline-none focus:bg-primary disabled:opacity-50 disabled:pointer-events-none"
    >
      {title}
    </button>
  );
};

ButtonSection.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ButtonSection;
