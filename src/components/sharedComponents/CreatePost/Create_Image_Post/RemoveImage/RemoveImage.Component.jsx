import React from "react";

// Styled Import
import { RemovePicButton } from "./RemoveImage.styles";

// Redux Import
import { useDispatch } from "react-redux";
import { clearPhotoState } from "../../../../../Redux/Post/clearsState.Actions";

function RemoveImage() {
  const dispatch = useDispatch();

  //
  function removePicHandler() {
    dispatch(clearPhotoState());
  }

  return <RemovePicButton onClick={removePicHandler}>×</RemovePicButton>;
}

export default RemoveImage;
