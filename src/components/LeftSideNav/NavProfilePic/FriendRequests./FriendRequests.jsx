import React from "react";
import { useDispatch } from "react-redux";
import "./FriendRequests..styles.scss";

import FriendReqs from "../../../Assets/images/bell.png";

import FriendRequestCount from "../../sharedComponents/FriendRequestCount/FriendRequestCount";
// import { notificationAction } from "../../../Redux/Notification/Notification.action";
// import { messageAction } from "../../../Redux/Message/Message.Action";
// import { settingsAction } from "../../../Redux/ShowSettings/ShowSettings.actions";
import { ShowModal } from "../../../Redux/Modal/ModalAction";

function FriendRequests() {
  const dispatch = useDispatch();
  function handleNotification() {
    dispatch(ShowModal("FRIEND_REQUESTS"));
  }
  return (
    <>
      <div onClick={handleNotification} className="Friend_Request_Container">
        <div className="Friend_Request_Logo">
          <img className="Request_Logo" src={FriendReqs} alt="Request Count" />
        </div>
        <div className="Count_Text_Container">
          <h5 className="Count_Text ">Friends</h5>
        </div>
      </div>
      <h6 className="Request_Count">
        <span className="Dot"></span> <FriendRequestCount /> Request
      </h6>
    </>
  );
}

export default FriendRequests;
