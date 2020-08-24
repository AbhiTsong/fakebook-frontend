import React from "react";
import "./Story.Styles.scss";
import Logo from "../../../Assets/images/IMG-20190106-WA0001.jpg";

function StoryComponent() {
  return (
    <div className="StoryContainer">
      {[...Array(5).keys()].map((image, idx) => (
        <img key={idx} src={Logo} alt="Monkey" />
      ))}
    </div>
  );
}

export default StoryComponent;
