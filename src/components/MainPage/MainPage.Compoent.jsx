import React from "react";
import { withRouter } from "react-router-dom";
import "./MainPage.Styles.scss";

// Child Compoents Imports
import PostFormComponent from "../sharedComponents/PostForm/PostForm.Component";
import AllPostsComponent from "../sharedComponents/AllPosts/AllPosts.Component";
import FriendSuggest from "../sharedComponents/FriendSuggest/FriendSuggest";

function MainPageCompoent(props) {
  return (
    <div className="MainPageContainer">
      <div className="MainPageChildContainer">
        <PostFormComponent />
        <FriendSuggest />
        <AllPostsComponent />
      </div>
    </div>
  );
}

export default withRouter(MainPageCompoent);
