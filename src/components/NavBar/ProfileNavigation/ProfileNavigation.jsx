import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./ProfileNavigation.styles.scss";
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

function ProfileNavigation() {
  const user = useSelector(currentUser);
  const [showNotification, setShowNotification] = useState(false);
  const [showMessages, setShowMessages] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const {
    user: { firstName, friendRequests },
  } = user;

  function handleNotification() {
    setShowNotification(!showNotification);
    setShowMessages(false);
    setShowProfile(false);
  }

  function handleMessage() {
    setShowMessages(!showMessages);
    setShowNotification(false);
    setShowProfile(false);
  }

  function handleShowProfile() {
    setShowProfile(!showProfile);
    setShowNotification(false);
    setShowMessages(false);
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
      {showNotification && <Notification />}
      {showMessages && <Messages />}
      {showProfile && <SeeProfile user={user} />}
    </>
  );
}

export default ProfileNavigation;
