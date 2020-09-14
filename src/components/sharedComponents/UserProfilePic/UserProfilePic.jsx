import React, { useEffect } from "react";
import "./UserProfile.styles.scss";
import { withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import config from "../../../config/config.json";

// Redux Import
import { currentUser } from "../../../Redux/Auth/SignIn/SignIn.Selector";
import { userSelector } from "../../../Redux/User/UserSelector";

function UserProfilePic(props) {
  let userPic = useSelector(userSelector);
  let id = useSelector(currentUser);

  // useEffect(() => {
    if (!userPic.loading && userPic.created) {
      props.history.go(0);
    }
  // }, [props.history, userPic.created, userPic.loading]);

  return (
    <img
      className="Profile_Pic"
      src={`${config.serverURL}/users/${id.user._id}/avatar`}
      alt="User Pic"
    />
  );
}

export default withRouter(UserProfilePic);
