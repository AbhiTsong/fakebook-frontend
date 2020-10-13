import React from "react";
import "./FriendSuggestImage.styles.scss";
import config from "../../../../config/config.json";

import Default from "../../../../Assets/images/default.png";

// Custom Hook
// import useCheckProfilePic from "../../../../hooks/useCheckProfilePic";

function FriendSuggestImage({ id, avatar }) {
  return (
    <div className="Friend_Suggest_Image">
      <img
        src={avatar ? `${config.serverURL}/users/${id}/avatar` : Default}
        alt="User_Message"
        className="Friend_Suggest_Person"
      />
    </div>
  );
}

export default React.memo(FriendSuggestImage);
