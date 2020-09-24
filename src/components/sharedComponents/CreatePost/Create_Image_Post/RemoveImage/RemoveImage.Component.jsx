import React from "react";
import "./RemoveImage.Styles.scss";

// Redux Import
import { useDispatch } from "react-redux";
import { clearPhotoState } from "../../../../../Redux/Post/clearsState.Actions";

function RemoveImage() {
  const dispatch = useDispatch();

  // 
  function removePicHandler() {
    dispatch(clearPhotoState());
  }

  return (
    <span onClick={removePicHandler} className="Remove_Pic_Button">
      ×
    </span>
  );
}

export default RemoveImage;
