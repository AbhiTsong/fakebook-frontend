import React from "react";
import "./FriendRequestsAll.styles.scss";
import { useSelector } from "react-redux";
import { signInSelector } from "../../../Redux/Auth/SignIn/SignIn.Selector";
import CloseModalIcon from "../CloseModalIcon/CloseModalIcon";

// Nested Componet
import FriendRequestImages from "./FriendRequestImages/FriendRequestImages";
import HorizontalLine from "../HorizontalLine/HorizontalLine";
import FriendRequestNameAndButton from "./FriendRequestNameAndButton/FriendRequestNameAndButton";

function FriendRequests() {
  const userRequests = useSelector(signInSelector);

  return (
    <div className="Friend_Request_All_Container">
      <div className="Friend_Request_Header">
        <div></div>
        <h4 className="Friend_Header_Text">Friend Requests</h4>
        <CloseModalIcon />
      </div>
      <HorizontalLine />
      <div className="Friend_Request_All">
        {userRequests.user.friendRequests.map((req) => (
          <div className="Friend_Request_Indi">
            <FriendRequestImages id={req.owner} />
            <FriendRequestNameAndButton {...req} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FriendRequests;
