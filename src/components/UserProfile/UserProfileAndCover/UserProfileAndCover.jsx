import React, { useState, useEffect, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
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
import { ToolTip } from "../../sharedComponents/ToolTip/ToolTip";

// Redux Import
import { signInSelector } from "../../../Redux/Auth/SignIn/SignIn.Selector";
import { userSelector } from "../../../Redux/User/UserSelector";

// Icon Img
import Camera from "../../../Assets/images/camera.png";

// Custom Hook
import { useOusideClick } from "../../../hooks/useOutsideClick";

function UserProfileAndCover(props) {
  let { visible, setVisible, ref } = useOusideClick(false);
  const [cover, setCover] = useState(false);
  let user = useSelector(signInSelector);
  let coverAndProfile = useSelector(userSelector);
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
    setVisible((pvSt) => !pvSt);
  }

  useEffect(() => {
    if (coverAndProfile.coverCreated) {
      window.location.reload();
    }
  }, [coverAndProfile.coverCreated]);

  return (
    <>
      <ProfileAndCover hasCover={cover} id={user.user._id}>
        <ChangeCoverButton>
          <ToolTip tip="Click To Add New Cover">
            <StyledButton onClick={handeCoverDropDown}>
              <CoverIconContr>
                <CoverCameraIcon src={Camera} />
              </CoverIconContr>
              Change Cover
            </StyledButton>
          </ToolTip>
        </ChangeCoverButton>
        {visible && (
          <div ref={ref}>
            <CoverChangeDropMenu />
          </div>
        )}
        <ProfilePicContainer>
          <ProfileIconCntr
            onClick={handleClick}
            role="img"
            className="Profile_Pic_Camera"
          >
            <ProfileCamerCntr>
              <ToolTip tip="Click To Change Profile Pic">
                <ProfileCameraIcn src={Camera} />
              </ToolTip>
            </ProfileCamerCntr>
          </ProfileIconCntr>
          {/* User Profile Pic */}
          <UserProfilePic border={true} />
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

export default withRouter(memo(UserProfileAndCover));
