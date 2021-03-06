import React, { useEffect, memo } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  PicCropperCOntainer,
  HeaderContainer,
  HeaderContent,
  // HeaderTitle,
  CloseButtonCntr,
  PicPreviewContr,
  PicPreviewContent,
  PreviewPic,
  FooterCntr,
  CancleBtn,
  SaveBtn,
} from "./PicCropper.styles";

// Redux Import
import { warningSelector } from "../../../Redux/Warning/Warning.Selector";
import { ShowWarning } from "../../../Redux/Warning/Warning.Action";
import { userSelector } from "../../../Redux/User/UserSelector";
import { createUserAvatarAction } from "../../../Redux/User/createProfilePic.Action";
import { themeSelector } from "../../../Redux/theme/theme.selector";

// Shared Compoent
import CloseModalIcon from "../CloseModalIcon/CloseModalIcon";
import HorizontalLine from "../../sharedComponents/HorizontalLine/HorizontalLine";
import Warning from "../Warning/Warning";
import { CloseModal } from "../../../Redux/Modal/ModalAction";
import LoadingSpinner from "../LoadingSpinner/Loading.Spinner";

function PicCropper(props) {
  let { light } = useSelector(themeSelector);
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
    <PicCropperCOntainer light={light}>
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
        <PicPreviewContent>
          <PreviewPic
            className="Post_Pic"
            src={user.profilePath[0]}
            alt="File To Upload"
          />
        </PicPreviewContent>
      </PicPreviewContr>
      <HorizontalLine />
      <FooterCntr>
        <CancleBtn light={light} onClick={handleCancle}>
          Cancle
        </CancleBtn>
        <form>
          <SaveBtn light={light} onClick={handleAddProfilePic}>
            Save
          </SaveBtn>
        </form>
      </FooterCntr>
      {warningState.show && <Warning />}
    </PicCropperCOntainer>
  );
}

export default memo(PicCropper);
