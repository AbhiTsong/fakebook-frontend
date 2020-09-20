import React from "react";
import "./FriendRequests..styles.scss"

import FriendReqs from "../../../Assets/images/bell.png";

function FriendRequests() {
  return (
    <div className="Friend_Request_Container">
      <div className="Friend_Request_Logo">
        <img className="Request_Logo" src={FriendReqs} alt="Request Count" />
      </div>
      <div className="Count_Text">Friends</div>
    </div>
  );
}

export default FriendRequests;
