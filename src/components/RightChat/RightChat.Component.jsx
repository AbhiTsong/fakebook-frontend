import React, { memo } from "react";
import { useSelector } from "react-redux";
// import "./RightChat.styles.scss";

import FriendRequests from "./FriendRequests/FriendRequests";
import RightChatFriends from "./RightChatFriends/RightChatFriends";

// Redux Imports
import { signInSelector } from "../../Redux/Auth/SignIn/SignIn.Selector";
import { themeSelector } from "../../Redux/theme/theme.selector";

// Styled Imports
import {
  RightNavContainer,
  ContactsHeader,
  ContactsText,
  ContactDots,
} from "./RightChat.Styles";

function RightChatComponent() {
  let { light } = useSelector(themeSelector);
  const userState = useSelector(signInSelector);

  const {
    user: { friendRequests },
  } = userState;

  return (
    <RightNavContainer>
      {friendRequests.length > 0 ? <FriendRequests /> : ""}
      <ContactsHeader light={light}>
        <ContactsText>Contacts</ContactsText>
        <ContactDots>...</ContactDots>
      </ContactsHeader>
      <RightChatFriends />
    </RightNavContainer>
  );
}

export default memo(RightChatComponent);
