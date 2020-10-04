import React from "react";
import "./ContactImages.styles.scss";
import config from "../../../../config/config.json";
import Default from "../../../../Assets/images/default.png";

// Chstom Hook Import
import useCheckProfilePic from "../../../../hooks/useCheckProfilePic";

function ContactImagesAndName({ id, name }) {
  let [isProfilePic] = useCheckProfilePic(id);
  return (
    <div className="Contact_Image_Name_Container">
      <div className="Contact_Image_Container">
        <img
          src={
            !isProfilePic ? Default : `${config.serverURL}/users/${id}/avatar`
          }
          alt="User_Message"
          className="Contact_Image"
        />
      </div>
        <div className="Contact_Name">{name}</div>
    </div>
  );
}

export default ContactImagesAndName;
