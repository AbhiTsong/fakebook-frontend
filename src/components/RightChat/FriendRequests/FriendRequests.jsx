import React from "react";
import { useSelector } from "react-redux";
import UserRequestImage from "../UserRequestImage/UserRequestImage";
import { currentUser } from "../../../Redux/Auth/SignIn/SignIn.Selector";

function FriendRequests() {
  const requests = useSelector(currentUser);

  if (requests.user.friendRequests === undefined) {
    return null;
  }

  console.log("requests.user.friendRequests", requests.user.friendRequests);

  return (
    <div>
      <h5>Friend Requests</h5>
      <UserRequestImage userImg={requests.user.friendRequests} />
    </div>
  );
}

export default FriendRequests;
