import React from "react";
import "./FormInput.Styles.scss";

function FormInput(props) {
  const { type, onChange, placeholder, name, className, onKeyPress, value } = props;
  return (
    <input
      name={name}
      value={value}
      className={className}
      type={type}
      onChange={onChange}
      onKeyPress={onKeyPress}
      placeholder={placeholder}
    />
  );
}

export default FormInput;
