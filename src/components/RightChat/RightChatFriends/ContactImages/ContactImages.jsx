import React from "react";
import config from "../../../../config/config.json";
import Default from "../../../../Assets/images/default.png";

// Styled Import
import {
  ContactImgAndNameContr,
  ContactImageCntr,
  ContactImg,
  ContactName,
} from "./ContactImages.Styles";

function ContactImagesAndName({ id, name, avatar }) {
  return (
    <ContactImgAndNameContr>
      <ContactImageCntr>
        <ContactImg
          src={avatar ? `${config.serverURL}/users/${id}/avatar` : Default}
          alt="User_Message"
          className="Contact_Image"
        />
      </ContactImageCntr>
      <ContactName>{name}</ContactName>
    </ContactImgAndNameContr>
  );
}

export default ContactImagesAndName;
