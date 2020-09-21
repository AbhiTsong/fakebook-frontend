import React from "react";
import "./LeftSideBar.Styles.scss";

// Shared Compoenens
import NavProfilePic from "./NavProfilePic/NavProfilePic";
import FriendRequests from "./FriendRequests./FriendRequests";
import Messanger from "./Messanger/Messanger";
import Groups from "./Groups/Groups";
import Pages from "./Pages/Pages";
import Videos from "./Videos/Videos"

function LeftSideNavBar() {
  return (
    <div className="LeftChatComponent">
      <NavProfilePic />
      <FriendRequests />
      <Messanger />
      <Groups />
      <Pages />
      <Videos/>
    </div>
  );
}

export default LeftSideNavBar;
