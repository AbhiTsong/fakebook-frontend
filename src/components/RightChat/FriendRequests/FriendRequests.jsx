import React from "react";
import { useSelector } from "react-redux";
import UserRequestImage from "../UserRequestImage/UserRequestImage";
import { signInSelector } from "../../../Redux/Auth/SignIn/SignIn.Selector";

// Styled Import
import {
  FriendRequestContainer,
  FriendRequestTitle,
} from "./FriendRequests.styles";

function FriendRequests() {
  const userState = useSelector(signInSelector);

  if (userState.length === 0) {
    return "";
  } else {
    return (
      <FriendRequestContainer>
        <FriendRequestTitle>Friend Requests</FriendRequestTitle>
        <UserRequestImage
          userImg={
            userState.user.friendRequests.length > 0
              ? userState.user.friendRequests
              : ""
          }
        />
      </FriendRequestContainer>
    );
  }
}

export default FriendRequests;
