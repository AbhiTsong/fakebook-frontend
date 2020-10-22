import React, { memo, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import config from "../../../config/config.json";
import Default from "../../../Assets/images/default.png";

// Styled Import
import { UserImage } from "./UserProfile.styles";

// Redux Import
import { signInSelector } from "../../../Redux/Auth/SignIn/SignIn.Selector";
import { userSelector } from "../../../Redux/User/UserSelector";
import { clearCreatedPath } from "../../../Redux/User/getCoverPath";

function UserProfilePic(props) {
  let userPic = useSelector(userSelector);
  let userState = useSelector(signInSelector);
  let dispatch = useDispatch();


  console.log("userState ====== >>>>>",userPic)

  useEffect(() => {
    if (!userPic.loading && userPic.created) {
      dispatch(clearCreatedPath());
      window.location.reload();
    }
  }, [dispatch, userPic.created, userPic.loading]);

  return (
    <UserImage
      src={
        userState.user.hasAvatar || userState.newAvatar
          ? `${config.serverURL}/users/${userState.user._id}/avatar`
          : Default
      }
      alt="User Pic"
    />
  );
}

export default withRouter(memo(UserProfilePic));
