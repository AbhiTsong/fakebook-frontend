import React from "react";
import "./FriendRequests..styles.scss";

import FriendReqs from "../../../Assets/images/bell.png";

import FriendRequestCount from "../../sharedComponents/FriendRequestCount/FriendRequestCount";

function FriendRequests() {
  return (
    <>
      <div className="Friend_Request_Container">
        <div className="Friend_Request_Logo">
          <img className="Request_Logo" src={FriendReqs} alt="Request Count" />
        </div>
        <div className="Count_Text_Container">
          <h5 className="Count_Text ">Friends</h5>
        </div>
      </div>
      <h6 className="Request_Count">
        <span className="Dot"></span> <FriendRequestCount/> Request
      </h6>
    </>
  );
}

export default FriendRequests;
