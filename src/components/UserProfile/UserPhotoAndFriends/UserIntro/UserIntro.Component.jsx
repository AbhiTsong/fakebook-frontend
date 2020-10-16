import React from "react";
import "./UserIntro.styles.scss";
import RSS from "../../../../Assets/images/RSS-Notifier-icon.png";


function UserIntro() {
  return (
    <div className="Intro_Container">
      <h3 className="Header">Intro</h3>
      <div className="RSS_Inro_Header">
        <div className="Rss_Feed_Container">
          <img src={RSS} alt="Rss Feed"  className="RSS_Image"/>
        </div>
        <h5 className="Header">Followed By 38 people</h5>
      </div>
      <div className="Button_Container">
        <button className="Button">Edit Details</button>
        <button className="Button">Edit Featured</button>
      </div>
    </div>
  );
}

export default UserIntro;
