import React from "react";

function RadioButtonComponent({ value, id, onChange, name }) {
  return (
    <input type="radio" value={value} id={id} onChange={onChange} name={name} />
  );
}

export default RadioButtonComponent;
