import React from "react";
import "./FormInput.Styles.scss";

function FormInput(props) {
  const { type, onChange, placeholder, name, className, onKeyPress } = props;
  return (
    <input
      name={name}
      className={className}
      type={type}
      onChange={onChange}
      onKeyPress={onKeyPress}
      placeholder={placeholder}
    />
  );
}

export default FormInput;
