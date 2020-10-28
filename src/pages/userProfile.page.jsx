import React from "react";
import styled from "styled-components";

// User Profie Compoenent
import UserProfile from "../components/UserProfile/UserProfile.Component";
import NavBarComponent from "../components/NavBar/NavBar.Component";

// With Auth Hoc
import withAuth from "../hoc/withAuth";
// import { browserRefresh } from "../utility/windowReload";

let UserProfielContainer = styled.div`
  width: 100%;
`;

let UserProfileContr = styled.div`
  position: relative;
  height: calc(100vh - 4rem);
  overflow-y: scroll;
  overflow-x: hidden;
`;

function UserProfilePage(props) {
  // browserRefresh();
  return (
    <UserProfielContainer>
      <NavBarComponent />
      <UserProfileContr>
        <UserProfile />
      </UserProfileContr>
    </UserProfielContainer>
  );
}

export default withAuth(UserProfilePage);
