import React from "react";

function FormInput(props) {
  const {
    type,
    onChange,
    placeholder,
    name,
    className,
    onKeyPress,
    value,
    onClick,
  } = props;
  return (
    <input
      name={name}
      value={value}
      className={className}
      type={type}
      onChange={onChange}
      onKeyPress={onKeyPress}
      placeholder={placeholder}
      onClick={onClick}
    />
  );
}

export default FormInput;
