import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Images
import Message from "../../../Assets/images/messenger.png";
import { messageAction } from "../../../Redux/Message/Message.Action";
import { notificationAction } from "../../../Redux/Notification/Notification.action";
import { themeSelector } from "../../../Redux/theme/theme.selector";
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
  const { light } = useSelector(themeSelector);
  const [messageState, setMessage] = useState(true);

  function handleMessage() {
    setMessage(!messageState);
    dispatch(messageAction(messageState));
    dispatch(notificationAction(false));
  }

  console.log("Messanger here")
  return (
    <LeftMessageContainer light={light} onClick={handleMessage}>
      <LeftLogoContaner>
        <LeftMsgLogo src={Message} />
      </LeftLogoContaner>
      <LeftMsgTxtContr>
        <LeftMsgTxt light={light}>Message</LeftMsgTxt>
      </LeftMsgTxtContr>
    </LeftMessageContainer>
  );
}

export default Messanger;
