import React, { useEffect, useState } from "react";

// Styled Import
import { UserFrendPostCntr } from "./UserFriendssPosts.styles";

// Shared Components
import PostFormComponent from "../../sharedComponents/PostForm/PostForm.Component";
import AllPostsComponent from "../../sharedComponents/AllPosts/AllPosts.Component";
import PostFilter from "./PostFilter/PostFilter.Component";

function UserFriendsPost() {
  let [height, setHeight] = useState(window.innerWidth);

  useEffect(() => {
    function findHeight() {
      setHeight(window.innerHeight);
    }
    window.addEventListener("resize", findHeight);
    return () => window.removeEventListener("resize", findHeight);
  }, []);

  return (
    <UserFrendPostCntr height={height}>
      <PostFormComponent />
      <PostFilter />
      <AllPostsComponent />
    </UserFrendPostCntr>
  );
}

export default UserFriendsPost;
