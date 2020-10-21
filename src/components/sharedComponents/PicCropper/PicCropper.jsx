import React, { useEffect, memo } from "react";
// import "./PicCropper.styles.scss";

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
} from "./PicCropper.styles";

// Redux Import
import { useSelector, useDispatch } from "react-redux";
import { warningSelector } from "../../../Redux/Warning/Warning.Selector";
import { ShowWarning } from "../../../Redux/Warning/Warning.Action";
import { userSelector } from "../../../Redux/User/UserSelector";
import { createUserAvatarAction } from "../../../Redux/User/createProfilePic.Action";

// Shared Compoent
import CloseModalIcon from "../CloseModalIcon/CloseModalIcon";
import HorizontalLine from "../../sharedComponents/HorizontalLine/HorizontalLine";
import Warning from "../Warning/Warning";
import { CloseModal } from "../../../Redux/Modal/ModalAction";
import LoadingSpinner from "../LoadingSpinner/Loading.Spinner";

function PicCropper(props) {
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

  if (user.loading) {
    return <LoadingSpinner />;
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
        <div className="Pic_Preview_Content">
          <PreviewPic
            className="Post_Pic"
            src={user.profilePath[0]}
            alt="File To Upload"
          />
        </div>
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

export default memo(PicCropper);
