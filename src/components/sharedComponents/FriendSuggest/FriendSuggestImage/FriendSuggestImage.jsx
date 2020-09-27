import React, { useState } from "react";
import "./FriendSuggestImage.styles.scss";
import axios from "../../../../axios";
import config from "../../../../config/config.json";

import Default from "../../../../Assets/images/default.png";

// Custom Hook
import useCheckProfilePic from "../../../../hooks/useCheckProfilePic";

function FriendSuggestImage({ id }) {
  let [isProfilePic] = useCheckProfilePic(id);

  return (
    <div className="Friend_Suggest_Image">
      <img
        src={!isProfilePic ? Default : `${config.serverURL}/users/${id}/avatar`}
        alt="User_Message"
        className="Friend_Suggest_Person"
      />
    </div>
  );
}

export default FriendSuggestImage;
