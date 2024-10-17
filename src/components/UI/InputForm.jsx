import React from "react";
import PropTypes from "prop-types";

const InputForm = ({
  label,
  htmlFor,
  type,
  id,
  name,
  style,
  value,
  onChange,
  onBlur,
  children,
}) => {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="block text-sm md:text-lg lg:text-sm mb-2 font-semibold text-gray-500"
      >
        {label}
      </label>
      <div className="relative flex items-center">
        <input
          type={type}
          id={id}
          name={name}
          className={style}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          required
        />
        {children}
      </div>
    </div>
  );
};

InputForm.propTypes = {
  label: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  children: PropTypes.node,
};

export default InputForm;
