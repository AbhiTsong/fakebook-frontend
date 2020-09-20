import React from "react";
import "./LeftSideBar.Styles.scss";

// Shared Compoenens
import NavProfilePic from "./NavProfilePic/NavProfilePic";
import FriendRequests from "./FriendRequests./FriendRequests";
import Messanger from "./Messanger/Messanger";

function LeftSideNavBar() {
  return (
    <div className="LeftChatComponent">
      <NavProfilePic />
      <FriendRequests />
      <Messanger />
      <div>Groups</div>
      <div>Pages</div>
      <div>Videos</div>
    </div>
  );
}

export default LeftSideNavBar;
