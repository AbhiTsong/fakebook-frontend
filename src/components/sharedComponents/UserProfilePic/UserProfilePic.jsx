import React, { useState } from "react";
import "./UserProfile.styles.scss";
import { withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import config from "../../../config/config.json";
import Default from "../../../Assets/images/default.png";
import axios from "../../../axios";

// Redux Import
import { currentUser } from "../../../Redux/Auth/SignIn/SignIn.Selector";
import { userSelector } from "../../../Redux/User/UserSelector";

function UserProfilePic(props) {
  let [isProfile, setIsProfile] = useState();
  let userPic = useSelector(userSelector);
  let id = useSelector(currentUser);

  if (!userPic.loading && userPic.created) {
    props.history.go(0);
  }

  // IIFE  for checking if the user has uploaded the profile pic
  (async function () {
    try {
      let data = await axios.get(`/users/${id.user._id}/avatar`);
      if (data) {
        setIsProfile(true);
      }
    } catch (error) {
      if (error.response) {
        setIsProfile(false);
      }
    }
  })();

  return (
    <img
      className="Profile_Pic"
      src={
        !isProfile ? Default : `${config.serverURL}/users/${id.user._id}/avatar`
      }
      alt="User Pic"
    />
  );
}

export default withRouter(UserProfilePic);
