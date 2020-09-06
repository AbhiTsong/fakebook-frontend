import React from "react";
import "./UserProfileAndCover.styles.scss";
import ProfilePic from "../../../Assets/images/person-2.jpg";

function UserProfileAndCover() {
  return (
    <>
      <div className="User_Profile_And_Cover">
        <div className="Profile_Pic_Container">
          <img className="Profile_Pic" src={ProfilePic} alt="User Pic" />
        </div>
      </div>
      <div className="User_Name_Container">
        <h1 className="User_Name">Abhi Tsong</h1>
        <h5 className="User_Name">Add Bio</h5>
      </div>
    </>
  );
}

export default UserProfileAndCover;
