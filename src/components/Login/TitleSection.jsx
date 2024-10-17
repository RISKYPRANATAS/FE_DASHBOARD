import React from "react";
import PropTypes from "prop-types";

const TitleSection = ({ Title, SubTitle }) => {
  return (
    <div className="text-justify hyphens-auto md:text-start md:hyphens-none">
      <h1 className="block text-sm md:text-lg md:w-full lg:text-base font-bold text-black">
        {Title}
      </h1>
      <p className="mt-2 md:mt-5 text-sm md:text-xl lg:text-base font-medium text-gray-500">
        {SubTitle}
      </p>
    </div>
  );
};

TitleSection.propTypes = {
  Title: PropTypes.string.isRequired,
  SubTitle: PropTypes.string.isRequired,
};

export default TitleSection;
