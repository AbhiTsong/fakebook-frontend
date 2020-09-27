import { useState } from "react";
import axios from "../axios";

function useCheckProfilePic(id) {
  let [isProfilePic, setIsProfile] = useState();

  (async function isProfileFunc() {
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
  })();

  return [isProfilePic];
}

export default useCheckProfilePic;
