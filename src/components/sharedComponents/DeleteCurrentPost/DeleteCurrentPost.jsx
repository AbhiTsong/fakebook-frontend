import React from "react";

import CloseModalIcon from "../CloseModalIcon/CloseModalIcon";

function DeleteCurrentPost() {
  return (
    <div>
      <div className="Create_Post_Title_Container">
        <h4 className="Title_Text">Create Post</h4>
        <CloseModalIcon />
      </div>
    </div>
  );
}

export default DeleteCurrentPost;
