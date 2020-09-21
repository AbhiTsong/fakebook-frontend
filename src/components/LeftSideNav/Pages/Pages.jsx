import React from "react";
import "./Pages.styles.scss";

import Page from "../../../Assets/images/video.png";

function Pages() {
  return (
    <div className="Pages_Container">
      <div className="Page_Content">
        <img src={Page} alt="Page Icon" className="Page_Icon" />
      </div>
      <div className="Pages_Text_Container">
        <h5 className="Pages_Text">Pages</h5>
      </div>
    </div>
  );
}

export default Pages;
