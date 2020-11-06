import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pic from "../../../Assets/gifs/loading2.gif";

// Redux Import
import { FetchRandomUsers2 } from "../../../Redux/RandomUsers/randomUsersAction";
import { randomSelector } from "../../../Redux/RandomUsers/RandomUsers.selector";
import { themeSelector } from "../../../Redux/theme/theme.selector";

// Styled Imports
import {
  UserPhotoPostsCntr,
  TitleContainer,
  Header1,
  Header2,
  ImgPostContr,
  ImgPostContent,
  LoaderContr,
  ImgPost,
} from "./UserPhotoPost.styles";

function UserPhotoPosts() {
  let { light } = useSelector(themeSelector);
  const dispatch = useDispatch();
  const users = useSelector(randomSelector);

  useEffect(() => {
    dispatch(FetchRandomUsers2(9));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <UserPhotoPostsCntr light={light}>
      <TitleContainer>
        <Header1>Photos</Header1>
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
          : users.users2 &&
            users.users2.data &&
            users.users2.data.results.map((user, idx) => {
              return (
                <ImgPostContent key={idx + user.cell}>
                  <ImgPost src={user.picture.large} />
                </ImgPostContent>
              );
            })}
      </ImgPostContr>
    </UserPhotoPostsCntr>
  );
}

export default UserPhotoPosts;
