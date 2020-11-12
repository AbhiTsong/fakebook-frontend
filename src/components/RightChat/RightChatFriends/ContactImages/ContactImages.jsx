import React from "react";
import { useSelector } from "react-redux";
import Default from "../../../../Assets/images/default.png";

// Styled Import
import {
  ContactImgAndNameContr,
  ContactImageCntr,
  ContactImg,
  ContactName,
} from "./ContactImages.Styles";
import { themeSelector } from "../../../../Redux/theme/theme.selector";

function ContactImagesAndName({ id, name, avatar }) {
  let { light } = useSelector(themeSelector);
  return (
    <ContactImgAndNameContr light={light}>
      <ContactImageCntr>
        <ContactImg
          src={avatar ? `${process.env.REACT_APP_BACK_END}/users/${id}/avatar` : Default}
          alt="User_Message"
          className="Contact_Image"
        />
      </ContactImageCntr>
      <ContactName>{name}</ContactName>
    </ContactImgAndNameContr>
  );
}

export default ContactImagesAndName;
