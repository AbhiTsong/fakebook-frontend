import React from "react";
import "./PostEditDrop.styles.scss";

// Icon Import
import File from "../../../../Assets/images/file.png";

function PostEditDrop() {
  return (
    <div className="Post_Edit_options">
      <div className="Icon_Text_Container">
        <div className="Icon_Content">
          <img src={File} alt="Edit Option" className="Edit_Icon" />
        </div>
        <h5 className="Edit_Text">Edit Post</h5>
      </div>

      <div className="Icon_Text_Container">
        <div className="Icon_Content">
          <img src={File} alt="Edit Option" className="Edit_Icon" />
        </div>
        <h5 className="Edit_Text">Update Post</h5>
      </div>

      <div className="Icon_Text_Container">
        <div className="Icon_Content">
          <img src={File} alt="Edit Option" className="Edit_Icon" />
        </div>
        <h5 className="Edit_Text">Delete Post</h5>
      </div>
    </div>
  );
}

export default PostEditDrop;
