import React from "react";

// Nested Compoenents Imports
import NavBarComponent from "../components/NavBar/NavBar.Component";
import LeftSideNavBar from "../components/LeftSideNav/LeftSide.NavBar";
import RightChatComponent from "../components/RightChat/RightChat.Component";

function Videos() {
  return (
    <div className="HomePage_Container">
      <NavBarComponent />
      <div className="MainHomePageContent">
        <LeftSideNavBar />
        <h1>This Page Is Under Construction</h1>
        <RightChatComponent />
      </div>
    </div>
  );
}

export default Videos;
