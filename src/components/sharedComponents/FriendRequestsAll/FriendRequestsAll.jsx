import React from "react";
import { useSelector } from "react-redux";
import { signInSelector } from "../../../Redux/Auth/SignIn/SignIn.Selector";
import CloseModalIcon from "../CloseModalIcon/CloseModalIcon";
// Redux Imports
import { themeSelector } from "../../../Redux/theme/theme.selector";

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
  let { light } = useSelector(themeSelector);
  const userRequests = useSelector(signInSelector);

  return (
    <FriendRequestContainer light={light}>
      <FrinedReqHeader>
        <div></div>
        <HeaderText>Friend Requests</HeaderText>
        <CloseModalIcon />
      </FrinedReqHeader>
      <HorizontalLine />
      <FriendReqAll>
        {userRequests.user.friendRequests.length > 0 ? (
          userRequests.user.friendRequests.map((req) => (
            <FriendReqIndi>
              <FriendRequestImages id={req.owner} />
              <FriendRequestNameAndButton {...req} />
            </FriendReqIndi>
          ))
        ) : (
          <h4>Currently You Dont Have Any Requests</h4>
        )}
      </FriendReqAll>
    </FriendRequestContainer>
  );
}

export default FriendRequests;
