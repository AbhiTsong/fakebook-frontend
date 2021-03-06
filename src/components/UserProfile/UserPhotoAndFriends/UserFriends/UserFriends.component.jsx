import React, { useEffect } from "react";
import Pic from "../../../../Assets/gifs/loading2.gif";
import { useDispatch, useSelector } from "react-redux";

// Redux Imoort
import { FetchRandomUsers } from "../../../../Redux/RandomUsers/randomUsersAction";
import { randomSelector } from "../../../../Redux/RandomUsers/RandomUsers.selector";

// Styled Imports
import {
  UserFriendsPhotoCntr,
  TitleContainer,
  Header1,
  Header2,
  ImgPostContr,
  ImgPostContent,
  LoaderContr,
  ImgPost,
} from "./UserFriendsStyles";
import { themeSelector } from "../../../../Redux/theme/theme.selector";

function UserFriends() {
  let { light } = useSelector(themeSelector);
  const dispatch = useDispatch();
  const users = useSelector(randomSelector);

  useEffect(() => {
    dispatch(FetchRandomUsers());
  }, [dispatch]);

  return (
    <UserFriendsPhotoCntr light={light}>
      <TitleContainer>
        <Header1>Friends</Header1>
        <Header2>See All</Header2>
      </TitleContainer>
      <ImgPostContr>
        {users.loading
          ? [...Array(9).keys()].map((pic, index) => (
              <ImgPostContent loading="true" key={index + pic}>
                <LoaderContr>
                  <ImgPost src={Pic} />
                </LoaderContr>
              </ImgPostContent>
            ))
          : users.users &&
            users.users.data &&
            users.users.data.results.map((user, idx) => {
              return (
                <ImgPostContent key={user.cell + idx}>
                  <ImgPost src={user.picture.large} />
                </ImgPostContent>
              );
            })}
      </ImgPostContr>
    </UserFriendsPhotoCntr>
  );
}

export default UserFriends;
