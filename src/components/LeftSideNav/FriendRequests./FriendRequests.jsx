import React from "react";
import { useDispatch } from "react-redux";

import FriendReqs from "../../../Assets/images/bell.png";

import FriendRequestCount from "../../sharedComponents/FriendRequestCount/FriendRequestCount";
// import { notificationAction } from "../../../Redux/Notification/Notification.action";
// import { messageAction } from "../../../Redux/Message/Message.Action";
// import { settingsAction } from "../../../Redux/ShowSettings/ShowSettings.actions";
import { ShowModal } from "../../../Redux/Modal/ModalAction";

import {
  FriendReqContr,
  FriendReqLogoCtr,
  FriendReqLogo,
  RequestCountContr,
  ReqText,
  ReqCount,
  ReqCountDot,
} from "./FriendRequest.Styles";

function FriendRequests() {
  const dispatch = useDispatch();
  function handleNotification() {
    dispatch(ShowModal("FRIEND_REQUESTS"));
  }
  return (
    <div onClick={handleNotification}>
      <FriendReqContr>
        <FriendReqLogoCtr>
          <FriendReqLogo src={FriendReqs} />
        </FriendReqLogoCtr>
        <RequestCountContr>
          <ReqText>Friends</ReqText>
        </RequestCountContr>
      </FriendReqContr>
      <ReqCount>
        <ReqCountDot></ReqCountDot> <FriendRequestCount /> Request
      </ReqCount>
    </div>
  );
}

export default FriendRequests;
