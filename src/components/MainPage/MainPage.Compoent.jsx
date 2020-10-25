import React from "react";
import { withRouter } from "react-router-dom";
import { MainPageContainer, MainPageContent } from "./MainPage.styles";

// Child Compoents Imports
import PostFormComponent from "../sharedComponents/PostForm/PostForm.Component";
import AllPostsComponent from "../sharedComponents/AllPosts/AllPosts.Component";
import FriendSuggest from "../sharedComponents/FriendSuggest/FriendSuggest";

// Custom Hook
import { useCalcInnerWidth } from "../../hooks/useCalcInnerWidth";

function MainPageCompoent() {
  const width = useCalcInnerWidth(window.innerWidth);
  return (
    <MainPageContainer width={width}>
      <MainPageContent width={width}>
        <PostFormComponent />
        <FriendSuggest />
        <AllPostsComponent />
      </MainPageContent>
    </MainPageContainer>
  );
}

export default withRouter(React.memo(MainPageCompoent));
