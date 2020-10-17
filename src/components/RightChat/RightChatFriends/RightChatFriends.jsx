import React from "react";
import { useSelector } from "react-redux";
import { userSelector } from "../../../Redux/User/UserSelector";
import ContactImagesAndName from "./ContactImages/ContactImages";
import ContactsSkeleton from "../../Skeleton/ContactsSkeleton/ContactsSkeleton";

import { ContactsContainer } from "./RightChatUsers.Styles";

function RightChatFriends() {
  const users = useSelector(userSelector);

  if (users.loading) {
    return [...Array(10).keys()].map((e, idx) => (
      <ContactsSkeleton key={e + idx} />
    ));
  }

  return (
    <ContactsContainer>
      {users.allUsers.data &&
        users.allUsers.data.map((user, idx) => (
          <div key={user + idx}>
            <ContactImagesAndName
              avatar={user.hasAvatar}
              id={user._id}
              name={`${user.firstName} ${user.lastName}`}
            />
          </div>
        ))}
    </ContactsContainer>
  );
}

export default RightChatFriends;
