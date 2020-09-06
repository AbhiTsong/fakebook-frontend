import React from "react";
import "./UserProfile.Styles.scss";

// Components Imports
import UserProfileAndCover from "./UserProfileAndCover/UserProfileAndCover";
import HorizontalLine from "../sharedComponents/HorizontalLine/HorizontalLine";
import UserTimeline from "./UserTimeline/UserTimeline.Component";

function UserProfile() {
  return (
    <div className="User_Profile_Container">
      <div className="User_Profile_Content">
        <UserProfileAndCover />
        <div className="User_Timeline_Container">
          <HorizontalLine />
          <UserTimeline />
          <div className="User_Photos_And_Posts">Intro Photos etc...</div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
