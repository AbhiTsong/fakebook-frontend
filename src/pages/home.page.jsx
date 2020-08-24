// React And NPM Imports
import React from "react";
import "./hpme.page.styles.scss";
import { withRouter } from "react-router-dom";

// Component Imports
import NavBarComponent from "../components/NavBar/NavBar.Component";
import LeftSideNavBar from "../components/LeftSideNav/LeftSide.NavBar";
import MainPageCompoent from "../components/MainPage/MainPage.Compoent";
import RightChatComponent from "../components/RightChat/RightChat.Component";
import withAuth from "../hoc/withAuth";

function HomePage(props) {
  return (
    <div className="HomePage_Container">
      <NavBarComponent />
      <div className="MainHomePageContent">
        <LeftSideNavBar className="LeftChatComponent"/>
        <MainPageCompoent />
        <RightChatComponent />
      </div>
    </div>
  );
}

export default withAuth(withRouter(HomePage));
// export default withRouter(HomePage);
