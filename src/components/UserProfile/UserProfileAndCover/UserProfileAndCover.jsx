import React, { useState } from "react";
import "./UserProfileAndCover.styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { ShowModal } from "../../../Redux/Modal/ModalAction";

// Shared Components Import
import UserProfilePic from "../../sharedComponents/UserProfilePic/UserProfilePic";
import CoverChangeDropMenu from "../../sharedComponents/CoverChangeDropMenu/CoverChangeDropMenu";

// Redux Import
import { currentUser } from "../../../Redux/Auth/SignIn/SignIn.Selector";

function UserProfileAndCover() {
  const [showDrop, setShowDrop] = useState(false);
  let user = useSelector(currentUser);

  console.log("User Selector --- ", user.user.firstName);
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
          <button onClick={handeCoverDropDown}>
            <span role="img" aria-label="Camera Icon">
              &#128247;
            </span>
            Edit Cover Photo
          </button>
        </div>
        {showDrop && <CoverChangeDropMenu />}
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
        <h1 className="User_Name">
          {user.user.firstName} {user.user.lastName}
        </h1>
        <h5 className="User_Name">Add Bio</h5>
      </div>
    </>
  );
}

export default UserProfileAndCover;
