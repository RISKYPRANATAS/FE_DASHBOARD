import React from "react";
import PropTypes from "prop-types";

const LogoSection = ({ src, alt }) => {
  return (
    <img
      src={src}
      alt={alt}
      className="object-cover object-center p-10 md:p-20 md:w-full md:scale-75 lg:p-14"
    />
  );
};

LogoSection.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

export default LogoSection;
