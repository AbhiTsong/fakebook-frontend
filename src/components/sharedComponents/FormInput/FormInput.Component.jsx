import React from "react";
import "./FormInput.Styles.scss";

function FormInput(props) {
  const { type, onChange, placeholder, name, className } = props;
  return (
    <input
      name={name}
      className={className}
      type={type}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}

export default FormInput;
