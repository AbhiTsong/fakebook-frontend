import React from "react";
import "./CoverChangeDropMenu.styles.scss";

// Shared Compoenents
import HorizontalLine from "../../sharedComponents/HorizontalLine/HorizontalLine";
import ChangeCover from "../ChangeCover/ChangeCover";

// Icons Import
import Select from "../../../Assets/images/file.png";
import File from "../../../Assets/images/upload.png";
// import Remove from "../../../Assets/images/d"

function CoverChangeDropMenu() {
  return (
    <div className="Cover_Drop_Container">
      <div className="Select_Photo_Container">
        <div className="Select_Photo_Content">
          <img src={Select} alt="File Upload" className="Select_Photo" />
        </div>
        <h6 className="File_Text">Select Photo</h6>
      </div>
      <div className="Upload_Photo">
        <ChangeCover />
        <h6 className="Upload_text">Upload Photo</h6>
      </div>
      <div className="Remove">
        <div className="Select_Photo_Container">
          <div className="Select_Photo_Content">
            <img src={Select} alt="File Upload" className="Select_Photo" />
          </div>
          <h6 className="File_Text">Select Photo</h6>
        </div>
      </div>
      <HorizontalLine />
      <div className="Remove">
        <div className="Select_Photo_Container">
          <div className="Select_Photo_Content">
            <img src={Select} alt="File Upload" className="Select_Photo" />
          </div>
          <h6 className="File_Text">Delete Photo</h6>
        </div>
      </div>
    </div>
  );
}

export default CoverChangeDropMenu;
