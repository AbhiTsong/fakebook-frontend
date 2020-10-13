import React, { useState, useEffect } from "react";
import "./FriendRequestImages.styles.scss";
import axios from "../../../../axios";
import config from "../../../../config/config.json";

import Default from "../../../../Assets/images/default.png";

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
  }, []);

  return (
    <div className="Friend_Request_Image">
      <img
        src={!isProfile ? Default : `${config.serverURL}/users/${id}/avatar`}
        alt="User_Message"
        className="Friend_Requestor"
      />
    </div>
  );
}

export default React.memo(FriendRequestImages);
