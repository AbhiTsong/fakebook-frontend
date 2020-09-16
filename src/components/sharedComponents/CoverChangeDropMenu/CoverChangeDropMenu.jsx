import React from "react";
import "./CoverChangeDropMenu.styles.scss";

// Shared Compoenents
import HorizontalLine from "../../sharedComponents/HorizontalLine/HorizontalLine";
import ChangeCover from "../ChangeCover/ChangeCover";

function CoverChangeDropMenu() {
  return (
    <div className="Cover_Drop_Container">
      <div className="Select_Photo">Select Photo</div>
      <div className="Upload_Photo">
        <ChangeCover />
        {/* Upload Photo */}
      </div>
      <div className="Reposition">Reposition</div>
      <HorizontalLine />
      <div className="Remove"> Remove </div>
    </div>
  );
}

export default CoverChangeDropMenu;
