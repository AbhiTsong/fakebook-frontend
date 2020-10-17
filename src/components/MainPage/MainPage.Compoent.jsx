import React from "react";
import { withRouter } from "react-router-dom";
import { MainPageContainer, MainPageContent } from "./MainPage.styles";

// Child Compoents Imports
import PostFormComponent from "../sharedComponents/PostForm/PostForm.Component";
import AllPostsComponent from "../sharedComponents/AllPosts/AllPosts.Component";
import FriendSuggest from "../sharedComponents/FriendSuggest/FriendSuggest";

function MainPageCompoent() {
  return (
    <MainPageContainer>
      <MainPageContent>
        <PostFormComponent />
        <FriendSuggest />
        <AllPostsComponent />
      </MainPageContent>
    </MainPageContainer>
  );
}

export default withRouter(React.memo(MainPageCompoent));
