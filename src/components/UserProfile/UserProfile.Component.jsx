import React, { useEffect } from "react";

// Styled Imports
import {
  UserProfileContainer,
  UserProfileContent,
  UserTimeLineContainer,
  UserPhotosAndPosts,
} from "./UserProfile.styles";

// Components Imports
import UserProfileAndCover from "./UserProfileAndCover/UserProfileAndCover";
import HorizontalLine from "../sharedComponents/HorizontalLine/HorizontalLine";
import UserTimeline from "./UserTimeline/UserTimeline.Component";
import UserPhotoAndFriends from "./UserPhotoAndFriends/UserPhotoAndFriends.Component";
import UserFriendsPost from "./UserFriendsPosts/UserFriendsPosts.Component";

// Cutom Hook
import { useCalcInnerWidth } from "../../hooks/useCalcInnerWidth";

function UserProfile() {
  let width = useCalcInnerWidth(window.innerWidth);

  return (
    <UserProfileContainer>
      <UserProfileContent>
        <UserProfileAndCover />
        <UserTimeLineContainer>
          <HorizontalLine />
          <UserTimeline />
        </UserTimeLineContainer>
        <UserPhotosAndPosts>
          {width > 800 ? <UserPhotoAndFriends /> : ""}
          <UserFriendsPost />
        </UserPhotosAndPosts>
      </UserProfileContent>
    </UserProfileContainer>
  );
}

export default UserProfile;
