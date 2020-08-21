import React from "react";
import "./FormInput.Styles.scss";

function FormInput(props) {
  const { type, onChange, placeholder, name } = props;
  return (
    <input
      name={name}
      className="formInput"
      type={type}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}

export default FormInput;
