import React from "react";
import "./UserFriendsPosts.styles.scss";

// Shared Components
import PostFormComponent from "../../sharedComponents/PostForm/PostForm.Component";

function UserFriendsPost() {
  return (
    <div className="Users_Friends_Posts_Container">
      <PostFormComponent />
    </div>
  );
}

export default UserFriendsPost;
