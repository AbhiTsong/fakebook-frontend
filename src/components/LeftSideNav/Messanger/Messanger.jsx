import React, {useState} from "react";
import { useDispatch } from "react-redux"
import "./Messanger.styles.scss";

import Message from "../../../Assets/images/messenger.png";
import { messageAction } from "../../../Redux/Message/Message.Action";
import { notificationAction } from "../../../Redux/Notification/Notification.action";
// import { settingsAction } from "../../../Redux/ShowSettings/ShowSettings.actions";

function Messanger() {
  const dispatch = useDispatch();
  const [messageState, setMessage] = useState(true);

  function handleMessage() {
    setMessage(!messageState);
    dispatch(messageAction(messageState));
    dispatch(notificationAction(false));
  }
  return (
    <div onClick={handleMessage} className="Messanger_Container">
      <div className="Logo_Container">
        <img className="Logo" src={Message} alt="Messanger Container" />
      </div>
      <div className="Message_Text_Container">
        <h5 className="Message_text">Message</h5>
      </div>
    </div>
  );
}

export default Messanger;
