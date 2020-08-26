import React from "react";
import "./MainPage.Styles.scss";

// Child Compoents Imports
import StoryComponent from "./Story/Story.Componetnt";
import PostFormComponent from "./PostForm/PostForm.Component";

function MainPageCompoent() {
  return (
    <div className="MainPageContainer">
      <div className="MainPageChildContainer">
        <StoryComponent />
        <PostFormComponent />
      </div>
    </div>
  );
}

export default MainPageCompoent;
