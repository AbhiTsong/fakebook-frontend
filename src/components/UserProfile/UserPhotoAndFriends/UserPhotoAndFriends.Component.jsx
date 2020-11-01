import React from "react";

// Styled Imports
import {
  UserCreatedPostContr,
  LeftPostsCntr,
} from "./UserPhotoAndFriends.styles";

// Nested Component Import
import UserIntro from "./UserIntro/UserIntro.Component";
import UserPhotoPosts from "../../sharedComponents/UserPhotoPosts/UserPhotoPosts.component";
import UserFriends from "./UserFriends/UserFriends.component";

function UserPhotoAndFreiends() {
  return (
    <UserCreatedPostContr>
      <LeftPostsCntr>
        <UserIntro />
        <UserPhotoPosts />
        <UserFriends />
      </LeftPostsCntr>
    </UserCreatedPostContr>
  );
}

export default UserPhotoAndFreiends;
