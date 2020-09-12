import React from "react";
import "./PicCropper.styles.scss";

// Shared Compoent
import CloseModalIcon from "../CloseModalIcon/CloseModalIcon";
import HorizontalLine from "../../sharedComponents/HorizontalLine/HorizontalLine"

function PicCropper(props) {
  return (
    <div className="Pic_Cropper_Container">
      <div className="Header_Container">
        <h4 className="Header_Title">Update Profile Pic</h4>
        <CloseModalIcon />
      </div>
      <HorizontalLine/>
      <div className="Pic_Preview_Container">
        {/* <RemoveImage /> */}
        <img className="Post_Pic" src={props.path[0]} alt="File To Upload" />
      </div>
      <HorizontalLine/>
      <footer className="Footer_Container">
        <div>Cancle</div>
        <div>Save</div>
      </footer>
    </div>
  );
}

export default PicCropper;
