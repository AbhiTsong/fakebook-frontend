import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import "./UserProfile.styles.scss";
import { useSelector } from "react-redux";
import config from "../../../config/config.json";
import Default from "../../../Assets/images/default.png";
import axios from "../../../axios";

// Redux Import
import { currentUser } from "../../../Redux/Auth/SignIn/SignIn.Selector";
import { userSelector } from "../../../Redux/User/UserSelector";

// Custom Hook
import useCheckProfilePic from "../../../hooks/useCheckProfilePic";

function UserProfilePic(props) {
  let userPic = useSelector(userSelector);
  let id = useSelector(currentUser);
  const [isProfilePic] = useCheckProfilePic(id.user._id);

  if (!userPic.loading && userPic.created) {
    props.history.go(0);
  }

  return (
    <img
      className="Profile_Pic"
      src={
        !isProfilePic
          ? Default
          : `${config.serverURL}/users/${id.user._id}/avatar`
      }
      alt="User Pic"
    />
  );
}

export default withRouter(UserProfilePic);
