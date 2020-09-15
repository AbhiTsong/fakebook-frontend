import React from "react";
import { Link } from "react-router-dom";
import "./ProfileNavigation.styles.scss";
import UserProfilePic from "../../sharedComponents/UserProfilePic/UserProfilePic";

function ProfileNavigation() {
  return (
    <div className="UserInfoNotification">
      <div className="User_Profile_And_Name">
        <div className="User_Nav_Options_Profile">
          <Link to="/profile">
            <UserProfilePic />
          </Link>
        </div>
        <Link to="/profile">
          <h5 className="User_Name">Abhi</h5>
        </Link>
      </div>
      <div className="User_Nav_Options">+</div>
      <div className="User_Nav_Options">mess</div>
      <div className="User_Nav_Options">bell</div>
      <div className="User_Nav_Options">drop</div>
    </div>
  );
}

export default ProfileNavigation;
