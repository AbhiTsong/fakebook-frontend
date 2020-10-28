import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Styled Imports
import {
  CoverPreviewContainer,
  CoverPreviewHeader,
  CoverPreviewContent,
  CoverPreviewCloseContr,
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
import LoadingSpinner from "../LoadingSpinner/Loading.Spinner";

// Redux Imports
import { userSelector } from "../../../Redux/User/UserSelector";
import { warningSelector } from "../../../Redux/Warning/Warning.Selector";
import { ShowWarning } from "../../../Redux/Warning/Warning.Action";
import { changeCoverAction } from "../../../Redux/User/changeCoverAction";
import { CloseModal } from "../../../Redux/Modal/ModalAction";

function CoverPicPreview() {
  const dispatch = useDispatch();
  const user = useSelector(userSelector);
  const warningState = useSelector(warningSelector);

  // Close Modal If the cover is updated
  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    user.coverCreated ? dispatch(CloseModal()) : "";
  }, [dispatch, user.coverCreated]);

  function handleChangeCover(e) {
    e.preventDefault();
    let formData = new FormData();
    formData.append("cover", user.coverPath[1]);
    dispatch(changeCoverAction(formData));
  }

  function handleCancle(e) {
    e.preventDefault();
    dispatch(ShowWarning());
  }

  if (user.loading) {
    return <LoadingSpinner />;
  }

  return (
    <CoverPreviewContainer>
      <CoverPreviewHeader>
        <CoverPreviewContent>
          <h4>Update Profile Pic</h4>
        </CoverPreviewContent>
        <CoverPreviewCloseContr>
          <CloseModalIcon />
        </CoverPreviewCloseContr>
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
          <CoverUploadBtn onClick={handleChangeCover}>Save</CoverUploadBtn>
        </form>
      </CoverPicPreviewFooter>
      {warningState.show && <Warning />}
    </CoverPreviewContainer>
  );
}

export default CoverPicPreview;
