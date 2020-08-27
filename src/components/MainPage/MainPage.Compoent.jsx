import React from "react";
import "./MainPage.Styles.scss";

// Child Compoents Imports
import StoryComponent from "./Story/Story.Componetnt";
import PostFormComponent from "./PostForm/PostForm.Component";
import AllPostsComponent from "./AllPosts/AllPosts.Component";

function MainPageCompoent() {
  return (
    <div className="MainPageContainer">
      <div className="MainPageChildContainer">
        <StoryComponent />
        <PostFormComponent />
        <AllPostsComponent />
      </div>
    </div>
  );
}

export default MainPageCompoent;
