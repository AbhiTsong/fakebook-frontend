import React, { useEffect } from "react";
import "./UserProfile.styles.scss";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import config from "../../../config/config.json";

// Redux Import
import { ShowModal } from "../../../Redux/Modal/ModalAction";
import { currentUser } from "../../../Redux/Auth/SignIn/SignIn.Selector";

// utility function

function UserProfilePic(props) {
  console.log("UserProfilePic ---- ", props);
  const dispatch = useDispatch();
  const id = useSelector(currentUser);

  // Function For Handling Upload Image
  function handleClick(e) {
    // e.preventDefault();
    dispatch(ShowModal("SHOW_PHOTO_FORM"));
  }

  return (
    <div className="Profile_Pic_Container">
      <div onClick={handleClick} role="img" className="Profile_Pic_Camera">
        <span role="img" aria-label="Camera Icon">
          &#128247;
        </span>
      </div>
      <img
        className="Profile_Pic"
        src={`${config.serverURL}/users/${id.user._id}/avatar`}
        alt="User Pic"
      />
    </div>
  );
}

export default withRouter(UserProfilePic);
