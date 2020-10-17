import React, { memo } from "react";

// Styled Imports
import { LeftNavComponent } from "./LeftSide.styles";

// Shared Compoenens
import NavProfilePic from "./NavProfilePic/NavProfilePic";
import FriendRequests from "./FriendRequests./FriendRequests";
import Messanger from "./Messanger/Messanger";
import Groups from "./Groups/Groups";
import Pages from "./Pages/Pages";
import Videos from "./Videos/Videos";

function LeftSideNavBar() {
  return (
    <LeftNavComponent>
      <NavProfilePic />
      <FriendRequests />
      <Messanger />
      <Groups />
      <Pages />
      <Videos />
    </LeftNavComponent>
  );
}

export default memo(LeftSideNavBar);
