import React, { useState } from "react";
import "./UserProfileAndCover.styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { ShowModal } from "../../../Redux/Modal/ModalAction";

// Shared Components Import
import UserProfilePic from "../../sharedComponents/UserProfilePic/UserProfilePic";
import CoverChangeDropMenu from "../../sharedComponents/CoverChangeDropMenu/CoverChangeDropMenu";

// Redux Import
import { signInSelector } from "../../../Redux/Auth/SignIn/SignIn.Selector";

// Icon Img
import Camera from "../../../Assets/images/camera.png";

function UserProfileAndCover() {
  const [showDrop, setShowDrop] = useState(false);
  let user = useSelector(signInSelector);
  const dispatch = useDispatch();

  // Function For Handling Upload Image
  function handleClick(e) {
    // e.preventDefault();
    dispatch(ShowModal("SHOW_PHOTO_FORM"));
  }

  // Function for Handling the Show and close of cart dropdown menu
  function handeCoverDropDown(e) {
    e.preventDefault();
    setShowDrop(!showDrop);
  }

  return (
    <>
      <div className="User_Profile_And_Cover">
        <div className="Change_Cover_Button">
          <button className="Button" onClick={handeCoverDropDown}>
            <div className="Button_Camera">
              <img
                alt="Camera Icon"
                src={Camera}
                className="Drop_Down_Camera"
              />
            </div>
            Edit Cover Photo
          </button>
        </div>
        {showDrop && <CoverChangeDropMenu />}
        <div className="Profile_Pic_Container">
          <div onClick={handleClick} role="img" className="Profile_Pic_Camera">
            <div className="Profile_Camera_Container">
              <img
                src={Camera}
                className="Profile_Camera_Icon"
                alt="Camera Icon"
              />
            </div>
          </div>
          <UserProfilePic />
        </div>
      </div>
      <div className="User_Name_Container">
        <h1 className="User_Name">
          {user.user.firstName} {user.user.lastName}
        </h1>
        <h5 className="User_Name">Add Bio</h5>
      </div>
    </>
  );
}

export default UserProfileAndCover;
