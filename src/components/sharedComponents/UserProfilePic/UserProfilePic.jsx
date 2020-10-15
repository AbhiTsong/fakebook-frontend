import React from "react";
import { withRouter } from "react-router-dom";
import "./UserProfile.styles.scss";
import { useDispatch, useSelector } from "react-redux";
import config from "../../../config/config.json";
import Default from "../../../Assets/images/default.png";

// Redux Import
import { signInSelector } from "../../../Redux/Auth/SignIn/SignIn.Selector";
import { userSelector } from "../../../Redux/User/UserSelector";
import { clearCreatedPath } from "../../../Redux/User/getCoverPath";

function UserProfilePic(props) {
  let userPic = useSelector(userSelector);
  let userState = useSelector(signInSelector);
  let dispatch = useDispatch();

  if (!userPic.loading && userPic.created) {
    dispatch(clearCreatedPath());
    props.history.go(0);
  }

  return (
    <img
      className="Profile_Pic"
      src={
        userState.user.hasAvatar || userState.newAvatar
          ? `${config.serverURL}/users/${userState.user._id}/avatar`
          : Default
      }
      alt="User Pic"
    />
  );
}

export default withRouter(UserProfilePic);
