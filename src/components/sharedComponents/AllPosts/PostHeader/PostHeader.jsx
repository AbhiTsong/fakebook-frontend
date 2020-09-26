import React from "react";
import "./PostHeader.styles.scss";
import config from "../../../../config/config.json";
import { useSelector, useDispatch } from "react-redux";

// Shared Compoenet
import PostEditDrop from "../PostEditDrop/PostEditDrop";

// Redux Import
import { showDrop } from "../../../../Redux/Post/editDropAction";
import { editDropSelector } from "../../../../Redux/Post/post.selector";

function PostHeader({ post }) {
  const showEditDrop = useSelector(editDropSelector);
  const dispatch = useDispatch();
  // const [showEdit, setShowEdit] = useState(false);

  function handleEdit(e) {
    e.preventDefault();
    dispatch(showDrop(!showEditDrop));
  }

  console.log("post.creator --- ", post.creator);
  return (
    <div className="Image_Input_Container">
      <img
        className="UserProfilePic"
        src={`${config.serverURL}/users/${post.owner}/avatar`}
        alt="Creator Profile Pic"
      />

      <div className="Name_And_Dots_Container">
        <h4 className="Creater_Name">{post.creator}</h4>
        <div className="Edit_Container">
          <h3 className="Three_Dots" onClick={handleEdit}>
            ...
          </h3>
          {showEditDrop && <PostEditDrop id={post._id} />}
        </div>
      </div>
    </div>
  );
}

export default PostHeader;
