import React from "react";
import "./Story.Styles.scss";
import Logo from "../../../Assets/images/IMG-20190106-WA0001.jpg";

function StoryComponent() {
  return (
    <div className="StoryContainer">
      {[...Array(6).keys()].map((image, idx) => (
        <div className="Story_Image_Container">
          <img key={idx} src={Logo} alt="Monkey" className="Story_Images" />
        </div>
      ))}
    </div>
  );
}

export default StoryComponent;
