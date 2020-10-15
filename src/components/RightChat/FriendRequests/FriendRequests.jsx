import React from "react";
import { useSelector } from "react-redux";
import UserRequestImage from "../UserRequestImage/UserRequestImage";
import { signInSelector } from "../../../Redux/Auth/SignIn/SignIn.Selector";

function FriendRequests() {
  const userState = useSelector(signInSelector);

  console.log("this is the state", userState);

  // if (userState.length === 0 && userState.friendRequests.length === 0) {
  if (userState.length === 0) {
    return "";
  } else {
    return (
      <div>
        <h5>Friend Requests</h5>
        {/* <UserRequestImage
          userImg={
            userState.friendRequests.length > 0 ? userState.friendRequests : ""
          }
        /> */}
      </div>
    );
  }
}

export default FriendRequests;
