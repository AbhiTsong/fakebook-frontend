import React from "react";
import "./RightChatFriends.styles.scss";
import { useSelector, useDispatch } from "react-redux";
import { userSelector } from "../../../Redux/User/UserSelector";
import ContactImagesAndName from "./ContactImages/ContactImages";
import ContactsSkeleton from "../../Skeleton/ContactsSkeleton/ContactsSkeleton";

function RightChatFriends() {
  const users = useSelector(userSelector);

  if (users.loading) {
    return [...Array(10).keys()].map((e, idx) => (
      <ContactsSkeleton key={e + idx} />
    ));
  }

  return (
    <div className="Contacts_Container">
      {users.allUsers.data &&
        users.allUsers.data.map((user, idx) => (
          <div key={user + idx} className="Contacts_List">
            <ContactImagesAndName
              id={user._id}
              name={`${user.firstName} ${user.lastName}`}
            />
          </div>
        ))}
    </div>
  );
}

export default RightChatFriends;
