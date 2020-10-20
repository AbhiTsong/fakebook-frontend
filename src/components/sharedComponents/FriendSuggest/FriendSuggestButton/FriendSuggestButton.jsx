import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Styled Imports
import {
  AddFriendBtn,
  AddFriendImgCtr,
  AddFriendIcon,
} from "./FriendSuggestBtn.styles";

import AddFriend from "../../../../Assets/images/addFriend.png";
import { sendFriendRequestAction } from "../../../../Redux/Friends/addFriend.Action";
import { friendsSelector } from "../../../../Redux/Friends/friends.selector";

function FriendSuggestButton({ id }) {
  const dispatch = useDispatch();
  const friendState = useSelector(friendsSelector);
  function handleFriendRequest(e) {
    e.preventDefault();
    dispatch(sendFriendRequestAction(id));
  }

  // console.log("friendsSelector --- >>>", friendState);
  if (friendState.loading) {
    return "Loading";
  }

  return (
    <div>
      <AddFriendBtn onClick={handleFriendRequest}>
        <AddFriendImgCtr>
          <AddFriendIcon src={AddFriend} />
        </AddFriendImgCtr>
        Add Friend
      </AddFriendBtn>
    </div>
  );
}

export default FriendSuggestButton;
