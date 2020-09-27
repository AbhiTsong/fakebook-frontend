import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

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
      <button onClick={handleFriendRequest} className="Add_Friend_Button">
        <div className="Add_Friend_Image_Container">
          <img src={AddFriend} alt="Add Friend" className="Add_Image" />
        </div>
        Add Friend
      </button>
    </div>
  );
}

export default FriendSuggestButton;
