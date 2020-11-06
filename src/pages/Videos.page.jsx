import React from "react";
import withAuth from "../hoc/withAuth";

// Styled Imports
import { HomePAgeContainer, HomePageContent } from "./HomePage.Styles";
import { VideoContiner } from "./VideosPage.styles";

// Nested Compoenents Imports
import NavBarComponent from "../components/NavBar/NavBar.Component";
import LeftSideNavBar from "../components/LeftSideNav/LeftSide.NavBar";
import RightChatComponent from "../components/RightChat/RightChat.Component";
import Video from "../components/sharedComponents/Video/Video";

function Videos() {
  return (
    <HomePAgeContainer>
      {/* <NavBarComponent /> */}
      <HomePageContent>
        <LeftSideNavBar />
        <VideoContiner>
          <Video />
        </VideoContiner>
        <RightChatComponent />
      </HomePageContent>
    </HomePAgeContainer>
  );
}

export default withAuth(Videos);
