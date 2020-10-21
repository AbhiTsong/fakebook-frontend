import React, { useEffect } from "react";
import "./ProfilePicUploader.styles.scss";

// Styled Imports
import {
  PicCropperCOntainer,
  HeaderContainer,
  HeaderContent,
  // HeaderTitle,
  CloseButtonCntr,
  PicPreviewContr,
  // PicPreviewContent,
  PreviewPic,
  FooterCntr,
  CancleBtn,
  SaveBtn,
} from "../ProfilePicUploader/ProfilePicUploader.Styles";

// Redux Import
import { useSelector, useDispatch } from "react-redux";
import { warningSelector } from "../../../Redux/Warning/Warning.Selector";
import { ShowWarning } from "../../../Redux/Warning/Warning.Action";
import { userSelector } from "../../../Redux/User/UserSelector";
import { createUserAvatarAction } from "../../../Redux/User/createProfilePic.Action";

// Shared Compoent
import CloseModalIcon from "../CloseModalIcon/CloseModalIcon";
import HorizontalLine from "../HorizontalLine/HorizontalLine";
import Warning from "../Warning/Warning";
import { CloseModal } from "../../../Redux/Modal/ModalAction";

function ProfilePicUploader(props) {
  const dispatch = useDispatch();
  const warningState = useSelector(warningSelector);
  const user = useSelector(userSelector);

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    user.created ? dispatch(CloseModal()) : "";
  }, [dispatch, user.created]);

  // Functon For Cancaling adding new profile pic
  function handleCancle(e) {
    e.preventDefault();
    dispatch(ShowWarning());
  }

  // Function for adding a new profile pic
  function handleAddProfilePic(e) {
    e.preventDefault();
    let formData = new FormData();
    formData.append("avatar", user.profilePath[1]);
    dispatch(createUserAvatarAction(formData));
  }

  return (
    <PicCropperCOntainer>
      <HeaderContainer>
        <HeaderContent>
          <h4 className="Header_Title">Update Profile Pic</h4>
        </HeaderContent>
        <CloseButtonCntr>
          <CloseModalIcon />
        </CloseButtonCntr>
      </HeaderContainer>
      <HorizontalLine />
      <PicPreviewContr>
        <PreviewPic>
          {/* <RemoveImage /> */}
          <img
            className="Post_Pic"
            src={user.profilePath[0]}
            alt="File To Upload"
          />
        </PreviewPic>
      </PicPreviewContr>
      <HorizontalLine />
      <FooterCntr>
        <CancleBtn onClick={handleCancle}>Cancle</CancleBtn>
        <form>
          <SaveBtn onClick={handleAddProfilePic}>Save</SaveBtn>
        </form>
      </FooterCntr>
      {warningState.show && <Warning />}
    </PicCropperCOntainer>
  );
}

export default ProfilePicUploader;
