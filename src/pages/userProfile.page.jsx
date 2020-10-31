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

let UserProfileContainer = styled.div`
  display: flex;
  justify-content: center;
`;

function UserProfilePage(props) {
  // browserRefresh();
  return (
    <UserProfielContainer>
      <NavBarComponent />
      <UserProfileContainer>
        <UserProfile />
      </UserProfileContainer>
    </UserProfielContainer>
  );
}

export default withAuth(UserProfilePage);
