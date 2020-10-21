import React from "react";

// Styled Import
import { UserFrendPostCntr } from "./UserFriendssPosts.styles";

// Shared Components
import PostFormComponent from "../../sharedComponents/PostForm/PostForm.Component";
import AllPostsComponent from "../../sharedComponents/AllPosts/AllPosts.Component";
import PostFilter from "./PostFilter/PostFilter.Component";

function UserFriendsPost() {
  return (
    <UserFrendPostCntr>
      <PostFormComponent />
      <PostFilter />
      {/* <AllPostsComponent /> */}
    </UserFrendPostCntr>
  );
}

export default UserFriendsPost;
