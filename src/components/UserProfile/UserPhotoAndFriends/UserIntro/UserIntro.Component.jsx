import React from "react";
import "./UserIntro.styles.scss";

// Shared Components
// import ButtonComponent from "../../../sharedComponents/Button.Component/Button.Component";

function UserIntro() {
  return (
    <div className="Intro_Container">
      <h3 className="Header">Intro</h3>
      <h5 className="Header">ccc Followed By 38 people</h5>
      <div className="Button_Container">
        <button className="Button">Edit Details</button>
        <button className="Button">Edit Featured</button>
      </div>
    </div>
  );
}

export default UserIntro;
