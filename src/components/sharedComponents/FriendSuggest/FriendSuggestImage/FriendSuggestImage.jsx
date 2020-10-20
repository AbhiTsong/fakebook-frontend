import React from "react";
// import "./FriendSuggestImage.styles.scss";
import config from "../../../../config/config.json";

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
        src={avatar ? `${config.serverURL}/users/${id}/avatar` : Default}
      />
    </FriendSuggesImgCtr>
  );
}

export default React.memo(FriendSuggestImage);
