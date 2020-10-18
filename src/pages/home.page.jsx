// React And NPM Imports
import React from "react";

// Styled Imports
import { HomePAgeContainer, HomePageContent } from "./HomePage.Styles";

import { withRouter } from "react-router-dom";

// Component Imports
import NavBarComponent from "../components/NavBar/NavBar.Component";
import LeftSideNavBar from "../components/LeftSideNav/LeftSide.NavBar";
import MainPageCompoent from "../components/MainPage/MainPage.Compoent";
import RightChatComponent from "../components/RightChat/RightChat.Component";
import withAuth from "../hoc/withAuth";

function HomePage(props) {
  return (
    <HomePAgeContainer>
      <NavBarComponent />
      <HomePageContent>
        <LeftSideNavBar />
        <MainPageCompoent />
        <RightChatComponent />
      </HomePageContent>
    </HomePAgeContainer>
  );
}

// export default withRouter(HomePage);
export default withAuth(withRouter(HomePage));
