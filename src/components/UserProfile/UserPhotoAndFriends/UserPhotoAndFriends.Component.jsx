import React from "react";
import "./UserPhotoAndFriends.styles.scss";

// Nested Component Import
import UserIntro from "./UserIntro/UserIntro.Component";
import UserPhotoPosts from "./UserPhotoPosts/UserPhotoPosts.component";
import UserFriends from "./UserFriends/UserFriends.component";

function UserPhotoAndFreiends() {
  return (
    <div className="User_Created_Photos_Container">
      <UserIntro />
      <div className="User_Photo_Sticky">
        <UserPhotoPosts />
        <UserFriends />
      </div>
    </div>
  );
}

export default UserPhotoAndFreiends;
