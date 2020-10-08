import React from "react";
import "./Video.page.styles.scss"
import withAuth from "../hoc/withAuth"

// Nested Compoenents Imports
import NavBarComponent from "../components/NavBar/NavBar.Component";
import LeftSideNavBar from "../components/LeftSideNav/LeftSide.NavBar";
import RightChatComponent from "../components/RightChat/RightChat.Component";
import Video from "../components/sharedComponents/Video/Video";

function Videos() {
  return (
    <div className="HomePage_Container">
      <NavBarComponent />
      <div className="MainHomePageContent">
        <LeftSideNavBar />
        <div className="video_containet">
          <Video />
        </div>
        <RightChatComponent />
      </div>
    </div>
  );
}

export default withAuth(Videos);
