import React, { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Default from "../../../Assets/images/default.png";

// Styled Import
import { UserImage } from "./UserProfile.styles";

// Redux Import
import { signInSelector } from "../../../Redux/Auth/SignIn/SignIn.Selector";
import { userSelector } from "../../../Redux/User/UserSelector";
import { clearCreatedPath } from "../../../Redux/User/getCoverPath";
import { themeSelector } from "../../../Redux/theme/theme.selector";

function UserProfilePic(props) {
  let userPic = useSelector(userSelector);
  let userState = useSelector(signInSelector);
  let { light } = useSelector(themeSelector);
  let dispatch = useDispatch();

  useEffect(() => {
    if (!userPic.loading && userPic.created) {
      dispatch(clearCreatedPath());
      window.location.reload();
    }
  }, [dispatch, userPic.created, userPic.loading]);

  let random = JSON.parse(window.sessionStorage.getItem("randomPic"));

  return (
    <UserImage
      light={light}
      border={props.border}
      src={
        random
          ? random
          : userState.user.hasAvatar || userState.newAvatar
          ? `${process.env.REACT_APP_BACK_END}/users/${userState.user._id}/avatar`
          : Default
      }
      alt="User Pic"
    />
  );
}

export default memo(UserProfilePic);
