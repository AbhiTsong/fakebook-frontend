import React, { useState, memo, useRef, useEffect } from "react";
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
  let ref = useRef();
  let width = useCalcInnerWidth(window.innerWidth);
  const dispatch = useDispatch();
  const userState = useSelector(signInSelector);
  const [messageState, setMessage] = useState(false);
  const [noticeState, setNotice] = useState(false);
  const [settingsState, setSettings] = useState(false);
  // Selectors
  const { showMessage } = useSelector(messageSelector);
  const { show } = useSelector(toggleState);
  let { light } = useSelector(themeSelector);

  useEffect(() => {
    function closeSettings(event) {
      if (show && ref.current && !ref.current.contains(event.target)) {
        dispatch(toggleHamburger(!show));
      }
    }
    function closeNotification(event) {
      if (noticeState && ref.current && !ref.current.contains(event.target)) {
        setNotice((pvSt) => !pvSt);
        // dispatch(toggleHamburger(!show));
      }
    }
    function closeMessage(event) {
      if (messageState && ref.current && !ref.current.contains(event.target)) {
        setMessage((pvSt) => !pvSt);
      }
    }
    window.addEventListener("click", closeSettings, true);
    window.addEventListener("click", closeNotification, true);
    window.addEventListener("click", closeMessage, true);
    return () => {
      window.removeEventListener("click", closeNotification, true);
      window.removeEventListener("click", closeSettings, true);
      window.removeEventListener("click", closeMessage, true);
    };
  }, [dispatch, messageState, noticeState, ref, show]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function handleMessage() {
    setMessage((pvSt) => !pvSt);
  }

  function handleNotification() {
    setNotice((pvSt) => !pvSt);
  }

  function handleShowProfile() {
    setSettings(!settingsState);
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
      <div ref={ref}>
        {show && <SeeProfile user={userState.user} />}
        {noticeState && <Notification />}
        {messageState && <Messages />}
      </div>
    </>
  );
}

export default memo(ProfileNavigation);
