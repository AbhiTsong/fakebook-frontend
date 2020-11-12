import React from "react";
// import "./FriendSuggestImage.styles.scss";

// Styled Imports
import {
  FriendSuggesImgCtr,
  FriendSuggestImg,
} from "./FriendSuggestImg.styles";

import Default from "../../../../Assets/images/default.png";

// Custom Hook
// import useCheckProfilePic from "../../../../hooks/useCheckProfilePic";

function FriendSuggestImage({ id, avatar }) {

  console.log("env bro",process.env)
  return (
    <FriendSuggesImgCtr>
      <FriendSuggestImg
        src={
          avatar ? `${process.env.REACT_APP_BACK_END}/users/${id}/avatar` : Default
        }
      />
    </FriendSuggesImgCtr>
  );
}

export default React.memo(FriendSuggestImage);

// REACT_APP_BACK_END=http://localhost:3000
// # BACK_END_URL=https://fakebook-db.herokuapp.com/
// # JWT_SECRET=zyiGVlAU0r2xS7d76STl8

  // "private": true,
