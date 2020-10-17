import React, { memo } from "react";
// import "./RightChat.styles.scss";

import FriendRequests from "./FriendRequests/FriendRequests";
import RightChatFriends from "./RightChatFriends/RightChatFriends";

// Redux Imports
import { useSelector } from "react-redux";
import { signInSelector } from "../../Redux/Auth/SignIn/SignIn.Selector";

// Styled Imports
import {
  RightNavContainer,
  ContactsHeader,
  ContactsText,
  ContactDots,
} from "./RightChat.Styles";

function RightChatComponent() {
  const userState = useSelector(signInSelector);

  const {
    user: { friendRequests },
  } = userState;

  return (
    <RightNavContainer>
      {friendRequests.length > 0 ? <FriendRequests /> : ""}
      <ContactsHeader>
        <ContactsText>Contacts</ContactsText>
        <ContactDots>...</ContactDots>
      </ContactsHeader>
      <RightChatFriends />
    </RightNavContainer>
  );
}

export default memo(RightChatComponent);
