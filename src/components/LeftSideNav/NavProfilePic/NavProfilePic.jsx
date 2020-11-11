import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

// Shared Compoent
import UserProfilePic from "../../sharedComponents/UserProfilePic/UserProfilePic";

// Redux Import
import { signInSelector } from "../../../Redux/Auth/SignIn/SignIn.Selector";

// Styled Imports
import {
  LeftProfiePicContainer,
  LeftPofileContent,
  LeftProfileName,
} from "./NavProfilePic.Styles";
import { themeSelector } from "../../../Redux/theme/theme.selector";

function NavProfilePic() {
  const { light } = useSelector(themeSelector);
  const user = useSelector(signInSelector);

  return (
    <LeftProfiePicContainer light={light}>
      <LeftPofileContent>
        <Link to="/profile">
          <UserProfilePic />
        </Link>
      </LeftPofileContent>
      <Link to="/profile">
        <LeftProfileName
          light={light}
        >{`${user.user.firstName} ${user.user.lastName}`}</LeftProfileName>
      </Link>
    </LeftProfiePicContainer>
  );
}

export default NavProfilePic;
