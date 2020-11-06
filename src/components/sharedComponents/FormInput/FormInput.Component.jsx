import React from "react";
import { useSelector } from "react-redux";
import { themeSelector } from "../../../Redux/theme/theme.selector";

function FormInput(props) {
  let { light } = useSelector(themeSelector);
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
      light={light}
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
