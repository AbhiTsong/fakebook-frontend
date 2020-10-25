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
import { useCalcInnerWidth } from "../../hooks/useCalcInnerWidth";

function RightChatComponent() {
  const userState = useSelector(signInSelector);
  const width = useCalcInnerWidth(window.innerWidth);

  const {
    user: { friendRequests },
  } = userState;

  return (
    <>
      {width < 800 ? (
        ""
      ) : (
        <RightNavContainer>
          {friendRequests.length > 0 ? <FriendRequests /> : ""}
          <ContactsHeader>
            <ContactsText>Contacts</ContactsText>
            <ContactDots>...</ContactDots>
          </ContactsHeader>
          <RightChatFriends />
        </RightNavContainer>
      )}
    </>
  );
}

export default memo(RightChatComponent);
