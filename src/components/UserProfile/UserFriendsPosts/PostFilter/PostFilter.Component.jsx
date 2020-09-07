import React from "react";
import "./PostFilter.styles.scss";

// Shared Compoents
import HorizontalLine from "../../../sharedComponents/HorizontalLine/HorizontalLine";

function PostFilter() {
  return (
    <div className="Filter_Container">
      <div className="Filter_Title">
        <h4 className="Title_Text">Post</h4>
        <div className="Filter_Button_Contaner">
          <button>Filter</button>
          <button>Manage Post</button>
        </div>
      </div>
      <HorizontalLine />
      <div className="Filter_View_Options">
        <h5 className="Filter_Icons">List View</h5>
        <h5 className="Filter_Icons">Grid View</h5>
      </div>
    </div>
  );
}

export default PostFilter;
