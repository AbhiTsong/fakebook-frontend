import React from "react";
import "./UserFriendsPosts.styles.scss";

// Shared Components
import PostFormComponent from "../../sharedComponents/PostForm/PostForm.Component";
import AllPostsComponent from "../../sharedComponents/AllPosts/AllPosts.Component";
import PostFilter from "./PostFilter/PostFilter.Component";

function UserFriendsPost() {
  return (
    <div className="Users_Friends_Posts_Container">
      <PostFormComponent />
      <PostFilter />
      <AllPostsComponent />
    </div>
  );
}

export default UserFriendsPost;
