import React from "react";
import {Link} from "react-router-dom"
import "./ProfileNavigation.styles.scss";
// import ProfilePic from "../../../Assets/images/IMG-20190106-WA0001.jpg";

function ProfileNavigation() {
  return (
    <div className="UserInfoNotification">
      <Link
        onClick={() => console.log("I got clicked")}
        className="User_Nav_Options"
        to="/profile"
      >
        {/* <img className="User_Profile_Pic" src={ProfilePic} alt="Logged_In_User" /> */}
        Abhi
      </Link>
      <div className="User_Nav_Options">+</div>
      <div className="User_Nav_Options">mess</div>
      <div className="User_Nav_Options">bell</div>
      <div className="User_Nav_Options">drop</div>
    </div>
  );
}

export default ProfileNavigation;
