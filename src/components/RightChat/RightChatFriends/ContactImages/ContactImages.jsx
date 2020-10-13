import React from "react";
import "./ContactImages.styles.scss";
import config from "../../../../config/config.json";
import Default from "../../../../Assets/images/default.png";

function ContactImagesAndName({ id, name, avatar }) {
  return (
    <div className="Contact_Image_Name_Container">
      <div className="Contact_Image_Container">
        <img
          src={avatar ? `${config.serverURL}/users/${id}/avatar` : Default}
          alt="User_Message"
          className="Contact_Image"
        />
      </div>
      <div className="Contact_Name">{name}</div>
    </div>
  );
}

export default ContactImagesAndName;
