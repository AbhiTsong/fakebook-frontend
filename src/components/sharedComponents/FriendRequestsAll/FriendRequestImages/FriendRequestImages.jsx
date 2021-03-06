import React, { useState, useEffect } from "react";
import axios from "../../../../axios";

import Default from "../../../../Assets/images/default.png";

// Styled Imports
import { FriendRedImgCtr, ReqImg } from "./FriendRequestIImg.styles";

function FriendRequestImages({ id }) {
  let [isProfile, setIsProfile] = useState();

  async function isProfileFunc(id) {
    try {
      let data = await axios.get(`/users/${id}/avatar`);
      if (data) {
        setIsProfile(true);
      }
    } catch (error) {
      if (error.response) {
        setIsProfile(false);
      }
    }
  }

  useEffect(() => {
    isProfileFunc(id);
  }, [id]);

  return (
    <FriendRedImgCtr>
      <ReqImg
        src={!isProfile ? Default : `${process.env.REACT_APP_BACK_END}/users/${id}/avatar`}
      />
    </FriendRedImgCtr>
  );
}

export default React.memo(FriendRequestImages);
