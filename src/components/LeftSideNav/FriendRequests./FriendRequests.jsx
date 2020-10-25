import React from "react";
import { useDispatch } from "react-redux";

import FriendReqs from "../../../Assets/images/bell.png";

import FriendRequestCount from "../../sharedComponents/FriendRequestCount/FriendRequestCount";
// import { notificationAction } from "../../../Redux/Notification/Notification.action";
// import { messageAction } from "../../../Redux/Message/Message.Action";
// import { settingsAction } from "../../../Redux/ShowSettings/ShowSettings.actions";
import { ShowModal } from "../../../Redux/Modal/ModalAction";

// custom hook import

import { useCalcInnerWidth } from "../../../hooks/useCalcInnerWidth";

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
  const width = useCalcInnerWidth(window.innerWidth);
  function handleNotification() {
    dispatch(ShowModal("FRIEND_REQUESTS"));
  }
  return (
    <div onClick={handleNotification}>
      <FriendReqContr width={width}>
        <FriendReqLogoCtr >
          <FriendReqLogo src={FriendReqs} />
        </FriendReqLogoCtr>
        <RequestCountContr>
          <ReqText width={width}>Friends</ReqText>
        </RequestCountContr>
      </FriendReqContr>
      <ReqCount width={width}>
        <ReqCountDot></ReqCountDot> <FriendRequestCount /> Request
      </ReqCount>
    </div>
  );
}

export default FriendRequests;
