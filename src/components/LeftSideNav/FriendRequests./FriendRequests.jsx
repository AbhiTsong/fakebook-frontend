import React from "react";
import { useDispatch, useSelector } from "react-redux";

import FriendReqs from "../../../Assets/images/bell.png";
import FriendRequestCount from "../../sharedComponents/FriendRequestCount/FriendRequestCount";

// Redux Import
import { ShowModal } from "../../../Redux/Modal/ModalAction";
import { themeSelector } from "../../../Redux/theme/theme.selector";

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
  let { light } = useSelector(themeSelector);
  const dispatch = useDispatch();
  function handleNotification() {
    dispatch(ShowModal("FRIEND_REQUESTS"));
  }
  return (
    <div onClick={handleNotification}>
      <FriendReqContr light={light}>
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
