import React from "react";

// User Profie Compoenent
import UserProfile from "../components/UserProfile/UserProfile.Component";
import NavBarComponent from "../components/NavBar/NavBar.Component";

// With Auth Hoc
import withAuth from "../hoc/withAuth";
import { browserRefresh } from "../utility/windowReload";

function UserProfilePage(props) {
  // browserRefresh();
  return (
    <div>
      <NavBarComponent />
      <UserProfile />
    </div>
  );
}

export default withAuth(UserProfilePage);
