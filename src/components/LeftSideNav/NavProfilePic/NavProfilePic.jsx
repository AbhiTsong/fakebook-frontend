import React from "react";
import { Link } from "react-router-dom";
import config from "../../../config/config.json";
import { useSelector } from "react-redux";

// Redux Import
import { signInSelector } from "../../../Redux/Auth/SignIn/SignIn.Selector";

// Default Pic Import
import Default from "../../../Assets/images/default.png";

// Styled Imports
import {
  LeftProfiePicContainer,
  LeftPofileContent,
  LeftProfilePic,
  LeftProfileName,
} from "./NavProfilePic.Styles";

function NavProfilePic() {
  const user = useSelector(signInSelector);

  return (
    <LeftProfiePicContainer>
      <LeftPofileContent>
        <Link to="/profile">
          <LeftProfilePic
            src={
              user.user.hasAvatar || user.newAvatar
                ? `${config.serverURL}/users/${user.user._id}/avatar`
                : Default
            }
          />
        </Link>
      </LeftPofileContent>
      <Link to="/profile">
        <LeftProfileName>{`${user.user.firstName} ${user.user.lastName}`}</LeftProfileName>
      </Link>
    </LeftProfiePicContainer>
  );
}

export default NavProfilePic;
