import React from "react";
// import { useDispatch, useSelector } from "react-redux";
import "./SeeProfile.styles.scss";
import useCheckProfilePic from "../../../hooks/useCheckProfilePic";
import config from "../../../config/config.json";

// Defult Image Import
import Default from "../../../Assets/images/default.png";

function SeeProfile({ user }) {
  const {
    user: { _id, firstName, lastName },
  } = user;
  const [isProfilePic] = useCheckProfilePic(_id);
  return (
    <div className="Profile_Settings_Container">
      <div className="Profile_Settings_Header">
        <div className="Profile_Pic_Container">
          <img
            alt="Logged In User"
            className="Profie_Pic"
            src={
              !isProfilePic
                ? Default
                : `${config.serverURL}/users/${_id}/avatar`
            }
          />
        </div>
        <div className="Profile_Name_Container">
          <h5 className="Profile_Name">{`${firstName} ${lastName}`}</h5>
          <h6 className="Profile_Utility">See Your Profile</h6>
        </div>
      </div>
    </div>
  );
}

export default SeeProfile;
