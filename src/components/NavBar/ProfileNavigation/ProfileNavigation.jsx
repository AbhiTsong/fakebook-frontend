import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./ProfileNavigation.styles.scss";
import UserProfilePic from "../../sharedComponents/UserProfilePic/UserProfilePic";

import messanger from "../../../Assets/images/messenger.png";
import bell from "../../../Assets/images/bell.png";
import down from "../../../Assets/images/down.png";
import add from "../../../Assets/images/add.png";
import { currentUser } from "../../../Redux/Auth/SignIn/SignIn.Selector";

function ProfileNavigation() {
  const user = useSelector(currentUser);
  const {
    user: { firstName },
  } = user;
  return (
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
      <div className="Icon_Container">
        <div className="User_Nav_Options_Profile">
          <img className="Nav_Icon" src={messanger} alt="Message Button" />
        </div>
      </div>
      <div className="Icon_Container">
        <div className="User_Nav_Options_Profile">
          <img className="Nav_Icon" src={bell} alt="Message Button" />
        </div>
      </div>
      <div className="Icon_Container">
        <div className="User_Nav_Options_Profile">
          <img className="Nav_Icon" src={down} alt="Message Button" />
        </div>
      </div>
    </div>
  );
}

export default ProfileNavigation;
