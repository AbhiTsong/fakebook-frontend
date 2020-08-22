import React from "react";
import "./Button.Styles.scss";

function ButtonComponent(props) {
  const { children, buttonClick, color, buttonWidth, buttonType } = props;
  return (
    <button
      type={buttonType}
      className="ButtonStyle"
      style={{ backgroundColor: { color }, width: { buttonWidth } }}
      onClick={buttonClick}
    >
      {children}
    </button>
  );
}

export default ButtonComponent;
