import React, {memo} from "react";
import "./RightChat.styles.scss";

import FriendRequests from "./FriendRequests/FriendRequests";
import RightChatFriends from "./RightChatFriends/RightChatFriends";

// Redux Imports

function RightChatComponent() {
  return (
    <div className="ChatContainer">
      <FriendRequests />
      <div className="Contacts_Container_Header">
        <div style={{ fontWeight: "500" }}>Contacts</div>
        <div style={{ fontWeight: "900" }}>...</div>
      </div>
      <RightChatFriends />
    </div>
  );
}

export default memo(RightChatComponent);
