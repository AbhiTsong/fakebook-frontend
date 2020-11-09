import React, { useState, useEffect, memo } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// Custon Hook Import
import { useCalcInnerWidth } from "../../../hooks/useCalcInnerWidth.jsx";

// Styled Components Imports
import {
  NavBarContainer,
  RightNameAndProfile,
  ProfilePicContainer,
  UserName,
  IconsContainer,
  IconImageContainer,
  IconImage,
  RequestCount,
} from "./NavProfile.Styles";

// Utility Imports
import UserProfilePic from "../../sharedComponents/UserProfilePic/UserProfilePic";

// Icom Imports
import messanger from "../../../Assets/images/messenger.png";
import bell from "../../../Assets/images/bell.png";
import down from "../../../Assets/images/down.png";
import add from "../../../Assets/images/add.png";
import Hamburger from "../../Hamburger/Hamburger";

// Nested Components
import Notification from "../Notification/Notification";
import Messages from "../Messages/Messages";
import SeeProfile from "../SeeProfile/SeeProfile";

// Redux Imports
import { signInSelector } from "../../../Redux/Auth/SignIn/SignIn.Selector";
import { messageAction } from "../../../Redux/Message/Message.Action";
import { notificationAction } from "../../../Redux/Notification/Notification.action";
import { noticeSelector } from "../../../Redux/Notification/Notification.selector";
import { messageSelector } from "../../../Redux/Message/Message.selector";
import { toggleState } from "../../../Redux/Hamburger/Hamburger.selector";
import { themeSelector } from "../../../Redux/theme/theme.selector.js";
import { toggleHamburger } from "../../../Redux/Hamburger/Hamburger.action";

function ProfileNavigation() {
  let width = useCalcInnerWidth(window.innerWidth);
  const dispatch = useDispatch();
  const userState = useSelector(signInSelector);
  const notice = useSelector(noticeSelector);
  const message = useSelector(messageSelector);
  const [messageState, setMessage] = useState(true);
  const [noticeState, setNotice] = useState(true);
  const [settingsState, setSettings] = useState(false);
  const { show } = useSelector(toggleState);
  let { light } = useSelector(themeSelector);

  function handleNotification() {
    setNotice(!noticeState);
    dispatch(notificationAction(noticeState));
    dispatch(messageAction(false));
    setSettings(false);
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
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
    dispatch(toggleHamburger(!show));
  }

  return (
    <>
      {/* Done  */}
      {width < 800 ? (
        <Hamburger width={width} />
      ) : (
        <NavBarContainer>
          <RightNameAndProfile>
            <ProfilePicContainer>
              <Link to="/profile">
                <UserProfilePic border={true} />
              </Link>
            </ProfilePicContainer>
            <Link to="/profile">
              <UserName light={light}>{userState.user.firstName}</UserName>
            </Link>
          </RightNameAndProfile>
          <IconsContainer>
            <IconImageContainer>
              <IconImage src={add} />
            </IconImageContainer>
          </IconsContainer>
          <IconsContainer onClick={handleMessage}>
            <IconImageContainer>
              <IconImage src={messanger} alt="Message Button" />
            </IconImageContainer>
          </IconsContainer>
          <IconsContainer onClick={handleNotification}>
            <IconImageContainer>
              <IconImage src={bell} alt="Message Button" />
            </IconImageContainer>
            {userState.user.friendRequests ? (
              <RequestCount>
                {userState.user.friendRequests.length}
              </RequestCount>
            ) : null}
          </IconsContainer>
          <IconsContainer onClick={handleShowProfile}>
            <IconImageContainer>
              <IconImage src={down} alt="Message Button" />
            </IconImageContainer>
          </IconsContainer>
        </NavBarContainer>
      )}
      {show && <SeeProfile user={userState.user} />}
      {notice.showNotification && <Notification />}
      {message.showMessage && <Messages />}
    </>
  );
}

export default memo(ProfileNavigation);
