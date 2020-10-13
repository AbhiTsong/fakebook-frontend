import React, { useState, memo } from "react";
import "./ProfileNavigation.styles.scss";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// Utility Imports
import UserProfilePic from "../../sharedComponents/UserProfilePic/UserProfilePic";

import messanger from "../../../Assets/images/messenger.png";
import bell from "../../../Assets/images/bell.png";
import down from "../../../Assets/images/down.png";
import add from "../../../Assets/images/add.png";
import { currentUser } from "../../../Redux/Auth/SignIn/SignIn.Selector";

// Nested Components
import Notification from "../Notification/Notification";
import Messages from "../Messages/Messages";
import SeeProfile from "../SeeProfile/SeeProfile";

// Redux Imports
import { messageAction } from "../../../Redux/Message/Message.Action";
import { notificationAction } from "../../../Redux/Notification/Notification.action";
import { settingsAction } from "../../../Redux/ShowSettings/ShowSettings.actions";
import { noticeSelector } from "../../../Redux/Notification/Notification.selector";
import { messageSelector } from "../../../Redux/Message/Message.selector";
import { settingsSelector } from "../../../Redux/ShowSettings/ShowSettings.selector";

function ProfileNavigation() {
  const dispatch = useDispatch();
  const user = useSelector(currentUser);
  const notice = useSelector(noticeSelector);
  const message = useSelector(messageSelector);
  const [messageState, setMessage] = useState(true);
  const [noticeState, setNotice] = useState(true);
  const [settingsState, setSettings] = useState(false);

  const {
    user: { firstName, friendRequests },
  } = user;

  function handleNotification() {
    setNotice(!noticeState);
    dispatch(notificationAction(noticeState));
    dispatch(messageAction(false));
    setSettings(false);
  }

  function handleMessage() {
    setMessage(!messageState);
    dispatch(messageAction(messageState));
    dispatch(notificationAction(false));
    setSettings(false);
  }

  function handleShowProfile() {
    setSettings(!settingsState);
    // dispatch(settingsAction(settingsState));
    dispatch(notificationAction(false));
    dispatch(messageAction(false));
  }

  return (
    <>
      <div className="UserInfoNotification">
        <div className="User_Profile_And_Name">
          <div className="User_Nav_Options_Profile">
            <Link to="/profile">
              <UserProfilePic />
            </Link>
          </div>
          <Link to="/profile">
            <h5 className="User_Name">{firstName}</h5>
          </Link>
        </div>
        <div className="Icon_Container">
          <div className="User_Nav_Options_Profile">
            <img className="Nav_Icon" src={add} alt="Add Button" />
          </div>
        </div>
        <div onClick={handleMessage} className="Icon_Container">
          <div className="User_Nav_Options_Profile">
            <img className="Nav_Icon" src={messanger} alt="Message Button" />
          </div>
        </div>
        <div onClick={handleNotification} className="Icon_Container">
          <div className="User_Nav_Options_Bell">
            <img className="Nav_Icon" src={bell} alt="Message Button" />
          </div>
          {friendRequests ? (
            <span className="Bell_Count">{friendRequests.length}</span>
          ) : null}
        </div>
        <div onClick={handleShowProfile} className="Icon_Container">
          <div className="User_Nav_Options_Profile">
            <img className="Nav_Icon" src={down} alt="Message Button" />
          </div>
        </div>
      </div>
      {settingsState && <SeeProfile user={user} />}
      {notice.showNotification && <Notification />}
      {message.showMessage && <Messages />}
    </>
  );
}

export default memo(ProfileNavigation);
