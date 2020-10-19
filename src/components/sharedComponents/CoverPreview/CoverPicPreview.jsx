import React from "react";
import { useSelector, useDispatch } from "react-redux";

// Styled Imports
import {
  CoverPreviewContainer,
  CoverPreviewHeader,
  CoverPreviewContent,
  CoverPicPreviewContainer,
  CoverPicPreviewContent,
  CoverPreviewPic,
  CoverPicPreviewFooter,
  CoverCancleBtn,
  CoverUploadBtn,
} from "./CoverPreview.Styles";

// Share Components
import CloseModalIcon from "../CloseModalIcon/CloseModalIcon";
import HorizontalLine from "../../sharedComponents/HorizontalLine/HorizontalLine";
import Warning from "../Warning/Warning";

// Redux Imports
import { userSelector } from "../../../Redux/User/UserSelector";
import { warningSelector } from "../../../Redux/Warning/Warning.Selector";
import { ShowWarning } from "../../../Redux/Warning/Warning.Action";
import { changeCoverAction } from "../../../Redux/User/changeCoverAction";

function CoverPicPreview() {
  const dispatch = useDispatch();
  const user = useSelector(userSelector);
  const warningState = useSelector(warningSelector);

  function handleAddProfilePic(e) {
    e.preventDefault();
    let formData = new FormData();
    formData.append("cover", user.coverPath[1]);
    dispatch(changeCoverAction(formData));
  }

  function handleCancle(e) {
    e.preventDefault();
    dispatch(ShowWarning());
  }

  return (
    <CoverPreviewContainer>
      <CoverPreviewHeader>
        <CoverPreviewContent>
          <h4>Update Profile Pic</h4>
        </CoverPreviewContent>
        <div className="Cover_Preview_Close_Container">
          <CloseModalIcon />
        </div>
      </CoverPreviewHeader>
      <HorizontalLine />
      <CoverPicPreviewContainer>
        <CoverPicPreviewContent>
          <CoverPreviewPic
            className="Cover_Pic"
            src={user.coverPath[0]}
            alt="Cover To Upload"
          />
        </CoverPicPreviewContent>
      </CoverPicPreviewContainer>
      <HorizontalLine />
      <CoverPicPreviewFooter>
        <CoverCancleBtn onClick={handleCancle}>Cancle</CoverCancleBtn>
        <form>
          <CoverUploadBtn onClick={handleAddProfilePic}>Save</CoverUploadBtn>
        </form>
      </CoverPicPreviewFooter>
      {warningState.show && <Warning />}
    </CoverPreviewContainer>
  );
}

export default CoverPicPreview;
