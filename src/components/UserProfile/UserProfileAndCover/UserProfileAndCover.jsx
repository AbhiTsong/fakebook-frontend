import React from "react";
import "./UserProfileAndCover.styles.scss";

// Shared Components Import
import CustomButton from "../../sharedComponents/Button.Component/Button.Component";
import UserProfilePic from "../../sharedComponents/UserProfilePic/UserProfilePic";

function UserProfileAndCover() {
  return (
    <>
      <div className="User_Profile_And_Cover">
        <div className="Change_Cover_Button">
          <CustomButton>
            <span role="img" aria-label="Camera Icon">
              &#128247;
            </span>
            Edit Cover Photo
          </CustomButton>
        </div>
        <UserProfilePic />
      </div>
      <div className="User_Name_Container">
        <h1 className="User_Name">Abhi Tsong</h1>
        <h5 className="User_Name">Add Bio</h5>
      </div>
    </>
  );
}

export default UserProfileAndCover;
