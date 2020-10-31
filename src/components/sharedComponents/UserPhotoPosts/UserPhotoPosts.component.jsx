import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pic from "../../../Assets/gifs/loading2.gif";

// Redux Import
import { FetchRandomUsers2 } from "../../../Redux/RandomUsers/randomUsersAction";
import { randomSelector } from "../../../Redux/RandomUsers/RandomUsers.selector";

// Styled Imports
import {
  UserPhotoPostsCntr,
  TitleContainer,
  Header1,
  Header2,
  ImgPostContr,
  ImgPostContent,
  ImgPost,
} from "./UserPhotoPost.styles";

function UserPhotoPosts() {
  const dispatch = useDispatch();
  const users = useSelector(randomSelector);

  useEffect(() => {
    dispatch(FetchRandomUsers2(9));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <UserPhotoPostsCntr>
      <TitleContainer>
        <Header1>Photos</Header1>
        <Header2>See All</Header2>
      </TitleContainer>
      <ImgPostContr>
        {users.loading
          ? [...Array(9).keys()].map((pic, index) => (
              <ImgPostContent>
                <ImgPost src={Pic} />
              </ImgPostContent>
            ))
          : users.users2 &&
            users.users2.data &&
            users.users2.data.results.map((user) => {
              return (
                <ImgPostContent>
                  <ImgPost src={user.picture.large} />
                </ImgPostContent>
              );
            })}
      </ImgPostContr>
    </UserPhotoPostsCntr>
  );
}

export default UserPhotoPosts;
