import React from "react";
import { useSelector } from "react-redux";

// import { friendsSelector } from "../../../Redux/Friends/friends.selector";

import { currentUser } from "../../../Redux/Auth/SignIn/SignIn.Selector";

function FriendRequestCount() {
  const requestCount = useSelector(currentUser);

  if (!requestCount.user.friendRequests) {
    return null;
  }

  if (requestCount.user.friendRequests.length > 0) {
    return requestCount.user.friendRequests.length;
  } else {
    return null;
  }
}

export default FriendRequestCount;
