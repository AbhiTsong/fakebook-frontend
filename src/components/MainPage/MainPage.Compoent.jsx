import React from "react";
import { withRouter } from "react-router-dom";
import "./MainPage.Styles.scss";

// Child Compoents Imports
import StoryComponent from "./Story/Story.Componetnt";
import PostFormComponent from "../sharedComponents/PostForm/PostForm.Component";
// import AllPostsComponent from "./AllPosts/AllPosts.Component";

function MainPageCompoent(props) {
  return (
    <div className="MainPageContainer">
      <div className="MainPageChildContainer">
        <StoryComponent />
        <PostFormComponent />
        {/* <AllPostsComponent /> */}
      </div>
    </div>
  );
}

export default withRouter(MainPageCompoent);
