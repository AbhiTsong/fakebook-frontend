import React from "react";
import Pic from "../../../../Assets/images/person-2.jpg";

// Styled Imports
import {
  UserFriendsPhotoCntr,
  TitleContainer,
  Header1,
  Header2,
  ImgPostContr,
  ImgPostContent,
  ImgPost,
} from "./UserFriendsStyles";

function UserFriends() {
  return (
    <UserFriendsPhotoCntr>
      <TitleContainer>
        yoo
        <Header1>Photos</Header1>
        <Header2>See All</Header2>
      </TitleContainer>
      <ImgPostContr>
        {[...Array(9).keys()].map((pic, index) => (
          <ImgPostContent>
            <ImgPost src={Pic} />
          </ImgPostContent>
        ))}
      </ImgPostContr>
    </UserFriendsPhotoCntr>
  );
}

export default UserFriends;
