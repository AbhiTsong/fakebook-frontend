import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ShowModal } from "../../../Redux/Modal/ModalAction";

// Styled Import
import {
  ProfileAndCover,
  ChangeCoverButton,
  StyledButton,
  CoverIconContr,
  CoverCameraIcon,
  ProfilePicContainer,
  ProfileIconCntr,
  ProfileCamerCntr,
  ProfileCameraIcn,
  UserNameCutr,
  UserName,
  UserBio,
} from "./UserProfileAndCover.styles";

// Shared Components Import
import UserProfilePic from "../../sharedComponents/UserProfilePic/UserProfilePic";
import CoverChangeDropMenu from "../../sharedComponents/CoverChangeDropMenu/CoverChangeDropMenu";

// Redux Import
import { signInSelector } from "../../../Redux/Auth/SignIn/SignIn.Selector";

// Icon Img
import Camera from "../../../Assets/images/camera.png";

function UserProfileAndCover() {
  const [showDrop, setShowDrop] = useState(false);
  const [cover, setCover] = useState(false);
  let user = useSelector(signInSelector);
  const dispatch = useDispatch();

  // Function For Handling Upload Image
  function handleClick(e) {
    // e.preventDefault();
    dispatch(ShowModal("SHOW_PHOTO_FORM"));
  }

  useEffect(() => {
    if (user.user.hasCover || user.newCover) {
      setCover(true);
    }
  }, [user.newCover, user.user.hasCover]);

  // Function for Handling the Show and close of cart dropdown menu
  function handeCoverDropDown(e) {
    e.preventDefault();
    setShowDrop(!showDrop);
  }

  return (
    <>
      <ProfileAndCover hasCover={cover} id={user.user._id}>
        <ChangeCoverButton>
          <StyledButton onClick={handeCoverDropDown}>
            <CoverIconContr>
              <CoverCameraIcon src={Camera} />
            </CoverIconContr>
            Edit Cover Photo
          </StyledButton>
        </ChangeCoverButton>
        {showDrop && <CoverChangeDropMenu />}
        <ProfilePicContainer>
          <ProfileIconCntr
            onClick={handleClick}
            role="img"
            className="Profile_Pic_Camera"
          >
            <ProfileCamerCntr>
              <ProfileCameraIcn src={Camera} />
            </ProfileCamerCntr>
          </ProfileIconCntr>
          <UserProfilePic />
        </ProfilePicContainer>
      </ProfileAndCover>
      <UserNameCutr>
        <UserName>
          {user.user.firstName} {user.user.lastName}
        </UserName>
        <UserBio>Add Bio</UserBio>
      </UserNameCutr>
    </>
  );
}

export default UserProfileAndCover;
