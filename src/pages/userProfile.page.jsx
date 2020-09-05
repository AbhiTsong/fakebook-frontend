import React from "react";

// User Profie Compoenent
import UserProfile from "../components/UserProfile/UserProfile.Component";
import NavBarComponent from "../components/NavBar/NavBar.Component";

// With Auth Hoc
import withAuth from "../hoc/withAuth";

function UserProfilePage(props) {
  console.log("user profile page", props);
  return (
    <div>
      <NavBarComponent />
      <UserProfile />
    </div>
  );
}

export default withAuth(UserProfilePage);
