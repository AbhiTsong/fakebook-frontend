import React, { useState } from "react";
import { useDispatch } from "react-redux";

// Images
import Message from "../../../Assets/images/messenger.png";
import { messageAction } from "../../../Redux/Message/Message.Action";
import { notificationAction } from "../../../Redux/Notification/Notification.action";
// import { settingsAction } from "../../../Redux/ShowSettings/ShowSettings.actions";

// Custom Hook
import { useCalcInnerWidth } from "../../../hooks/useCalcInnerWidth";

// Styled Imports
import {
  LeftMessageContainer,
  LeftLogoContaner,
  LeftMsgLogo,
  LeftMsgTxtContr,
  LeftMsgTxt,
} from "./Messenger.Styles";

function Messanger() {
  const dispatch = useDispatch();
  const [messageState, setMessage] = useState(true);
  const width = useCalcInnerWidth(window.innerWidth);

  function handleMessage() {
    setMessage(!messageState);
    dispatch(messageAction(messageState));
    dispatch(notificationAction(false));
  }
  return (
    <LeftMessageContainer width={width} onClick={handleMessage}>
      <LeftLogoContaner width={width}>
        <LeftMsgLogo src={Message} />
      </LeftLogoContaner>
      <LeftMsgTxtContr>
        <LeftMsgTxt>Message</LeftMsgTxt>
      </LeftMsgTxtContr>
    </LeftMessageContainer>
  );
}

export default Messanger;
