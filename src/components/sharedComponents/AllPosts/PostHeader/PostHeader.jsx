import React, { useState, useEffect } from "react";
import "./PostHeader.styles.scss";
import config from "../../../../config/config.json";
import { useSelector } from "react-redux";
import axios from "../../../../axios";

// Shared Compoenet
import PostEditDrop from "../PostEditDrop/PostEditDrop";

// Redux Import
import { editDropSelector } from "../../../../Redux/Post/post.selector";

// Default Profile Pic
import Default from "../../../../Assets/images/default.png";

function PostHeader({ post }) {
  const showEditDrop = useSelector(editDropSelector);
  const [showEdit, setShowEdit] = useState(showEditDrop);
  function handleEdit(e) {
    setShowEdit(!showEdit);
  }

  return (
    <div className="Image_Input_Container">
      <img
        className="UserProfilePic"
        src={
          post.hasAvatar
            ? `${config.serverURL}/users/${post.owner}/avatar`
            : Default
        }
        alt="Creator Profile Pic"
      />

      <div className="Name_And_Dots_Container">
        <h4 className="Creater_Name">{post.creator}</h4>
        <div className="Edit_Container">
          <h3 className="Three_Dots" onClick={handleEdit}>
            ...
          </h3>
          {showEdit && <PostEditDrop id={post._id} />}
        </div>
      </div>
    </div>
  );
}

export default PostHeader;
