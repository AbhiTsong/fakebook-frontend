import React, { memo } from "react";
import "./RightChat.styles.scss";

import FriendRequests from "./FriendRequests/FriendRequests";
import RightChatFriends from "./RightChatFriends/RightChatFriends";

// Redux Imports
import { useSelector } from "react-redux";
import { signInSelector } from "../../Redux/Auth/SignIn/SignIn.Selector";

// Redux Imports

function RightChatComponent() {
  const userState = useSelector(signInSelector);

  const {
    user: { friendRequests },
  } = userState;

  return (
    <div className="ChatContainer">
      {friendRequests.length > 0 ? <FriendRequests /> : ""}
      <div className="Contacts_Container_Header">
        <div style={{ fontWeight: "500" }}>Contacts</div>
        <div style={{ fontWeight: "900" }}>...</div>
      </div>
      <RightChatFriends />
    </div>
  );
}

export default memo(RightChatComponent);
