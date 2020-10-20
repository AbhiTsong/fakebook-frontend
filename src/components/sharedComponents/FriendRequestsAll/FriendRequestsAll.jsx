import React from "react";
import { useSelector } from "react-redux";
import { signInSelector } from "../../../Redux/Auth/SignIn/SignIn.Selector";
import CloseModalIcon from "../CloseModalIcon/CloseModalIcon";

// Styled Imports
import {
  FriendRequestContainer,
  FrinedReqHeader,
  HeaderText,
  FriendReqAll,
  FriendReqIndi,
} from "./FriendRequestAll.styles";

// Nested Componet
import FriendRequestImages from "./FriendRequestImages/FriendRequestImages";
import HorizontalLine from "../HorizontalLine/HorizontalLine";
import FriendRequestNameAndButton from "./FriendRequestNameAndButton/FriendRequestNameAndButton";

function FriendRequests() {
  const userRequests = useSelector(signInSelector);

  return (
    <FriendRequestContainer>
      <FrinedReqHeader>
        <div></div>
        <HeaderText>Friend Requests</HeaderText>
        <CloseModalIcon />
      </FrinedReqHeader>
      <HorizontalLine />
      <FriendReqAll>
        {userRequests.user.friendRequests.map((req) => (
          <FriendReqIndi>
            <FriendRequestImages id={req.owner} />
            <FriendRequestNameAndButton {...req} />
          </FriendReqIndi>
        ))}
      </FriendReqAll>
    </FriendRequestContainer>
  );
}

export default FriendRequests;
