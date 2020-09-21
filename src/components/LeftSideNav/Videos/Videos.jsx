import React from "react";
import "./Videos.styles.scss";

//Icon Img Imports
import Video from "../../../Assets/images/youtube.png";

function Videos() {
  return (
    <div className="Videos_Container">
      <div className="Videos_Content">
        <img src={Video} alt="Video Icon" className="Video_Icon" />
      </div>
      <div className="Video_Text_Container">
        <h5 className="Video_text"> Videos</h5>
      </div>
    </div>
  );
}

export default Videos;
