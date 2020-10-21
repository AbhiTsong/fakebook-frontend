import React from "react";
import Pic from "../../../Assets/images/person-1.jpg";

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
  return (
    <UserPhotoPostsCntr>
      <TitleContainer>
        <Header1>Photos</Header1>
        <Header2>See All</Header2>
      </TitleContainer>
      <ImgPostContr>
        {[...Array(9).keys()].map((pic, idx) => (
          <ImgPostContent>
            <ImgPost src={Pic} />
          </ImgPostContent>
        ))}
      </ImgPostContr>
    </UserPhotoPostsCntr>
  );
}

export default UserPhotoPosts;
