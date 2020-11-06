import React from "react";
import styled from "styled-components";

// User Profie Compoenent
import UserProfile from "../components/UserProfile/UserProfile.Component";

// With Auth Hoc
import withAuth from "../hoc/withAuth";
// import { browserRefresh } from "../utility/windowReload";

let UserProfielContainer = styled.div`
  width: 100%;
`;

let UserProfileContainer = styled.div`
  display: flex;
  height: calc(100vh - 4rem);
`;

function UserProfilePage(props) {
  // browserRefresh();
  return (
    <UserProfielContainer>
      <UserProfileContainer>
        <UserProfile />
      </UserProfileContainer>
    </UserProfielContainer>
  );
}

export default withAuth(UserProfilePage);
