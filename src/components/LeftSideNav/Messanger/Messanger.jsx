import React, { useState } from "react";
import { useDispatch } from "react-redux";

// Images
import Message from "../../../Assets/images/messenger.png";
import { messageAction } from "../../../Redux/Message/Message.Action";
import { notificationAction } from "../../../Redux/Notification/Notification.action";
// import { settingsAction } from "../../../Redux/ShowSettings/ShowSettings.actions";

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

  function handleMessage() {
    setMessage(!messageState);
    dispatch(messageAction(messageState));
    dispatch(notificationAction(false));
  }
  return (
    <LeftMessageContainer onClick={handleMessage}>
      <LeftLogoContaner>
        <LeftMsgLogo src={Message} />
      </LeftLogoContaner>
      <LeftMsgTxtContr>
        <LeftMsgTxt>Message</LeftMsgTxt>
      </LeftMsgTxtContr>
    </LeftMessageContainer>
  );
}

export default Messanger;
