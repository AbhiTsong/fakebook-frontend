import React from "react";
import "./UserProfileAndCover.styles.scss";
import { useDispatch } from "react-redux";

// Shared Components Import
import CustomButton from "../../sharedComponents/Button.Component/Button.Component";
import UserProfilePic from "../../sharedComponents/UserProfilePic/UserProfilePic";
import { ShowModal } from "../../../Redux/Modal/ModalAction";

function UserProfileAndCover() {
  const dispatch = useDispatch();

  // Function For Handling Upload Image
  function handleClick(e) {
    // e.preventDefault();
    dispatch(ShowModal("SHOW_PHOTO_FORM"));
  }

  return (
    <>
      <div className="User_Profile_And_Cover">
        <div className="Change_Cover_Button">
          <CustomButton>
            <span role="img" aria-label="Camera Icon">
              &#128247;
            </span>
            Edit Cover Photo
          </CustomButton>
        </div>
        <div className="Profile_Pic_Container">
          <div onClick={handleClick} role="img" className="Profile_Pic_Camera">
            <span role="img" aria-label="Camera Icon">
              &#128247;
            </span>
          </div>
          <UserProfilePic />
        </div>
      </div>
      <div className="User_Name_Container">
        <h1 className="User_Name">Abhi Tsong</h1>
        <h5 className="User_Name">Add Bio</h5>
      </div>
    </>
  );
}

export default UserProfileAndCover;
