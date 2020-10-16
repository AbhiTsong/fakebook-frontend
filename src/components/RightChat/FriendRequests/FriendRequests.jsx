import React from "react";
import "./FriendRequests.styles.scss"
import { useSelector } from "react-redux";
import UserRequestImage from "../UserRequestImage/UserRequestImage";
import { signInSelector } from "../../../Redux/Auth/SignIn/SignIn.Selector";

function FriendRequests() {
  const userState = useSelector(signInSelector);

  if (userState.length === 0) {
    return "";
  } else {
    return (
      <div className="FriendRequest_Container">
        <h5>Friend Requests</h5>
        <UserRequestImage
          userImg={
            userState.user.friendRequests.length > 0
              ? userState.user.friendRequests
              : ""
          }
        />
      </div>
    );
  }
}

export default FriendRequests;
