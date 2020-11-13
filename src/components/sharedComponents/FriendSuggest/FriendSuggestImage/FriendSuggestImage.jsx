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
