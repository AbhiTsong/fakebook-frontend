import React from "react";
import "./PostEditDrop.styles.scss";
import { useDispatch, useSelector } from "react-redux";

// Shared Compoent
import HorizontalLine from "../../HorizontalLine/HorizontalLine";

// Icon Import
import Edit from "../../../../Assets/images/edit.png";
import Update from "../../../../Assets/images/update.png"
import Delete from "../../../../Assets/images/delete.png"

// Redux Import
import { ShowModal } from "../../../../Redux/Modal/ModalAction";
import { fetchCurrentPostID } from "../../../../Redux/Post/fetchCurrentPostIDAction";
import { currentUser } from "../../../../Redux/Auth/SignIn/SignIn.Selector";
import { allPostsSelector } from "../../../../Redux/Post/post.selector";
import { showDrop } from "../../../../Redux/Post/editDropAction";

function PostEditDrop({ id }) {
  const {
    user: { _id },
  } = useSelector(currentUser);
  const allPosts = useSelector(allPostsSelector);
  const dispatch = useDispatch();
  let userID = allPosts.find((post) => post._id === id);

  // Function for handling edit post modal
  function handleEditPost() {
    if (userID.owner !== _id) {
      alert("This post dosent belong to you cant perform the action.");
      return;
    }
    dispatch(showDrop(false));
    dispatch(ShowModal("EDIT_CURRENT_POST"));
    dispatch(fetchCurrentPostID(id));
  }

  function handleDeletePost() {
    if (userID.owner !== _id) {
      alert("This post dosent belong to you cant perform the action.");
      return;
    }
    dispatch(showDrop(false));
    dispatch(fetchCurrentPostID(id));
    dispatch(ShowModal("DELETE_CURRENT_POST"));
  }

  return (
    <div className="Post_Edit_options">
      <h5 className="Post_Edit_Header">Edit Post Options</h5>
      <HorizontalLine />
      <div onClick={handleEditPost} className="Icon_Text_Container">
        <div className="Icon_Content">
          <img src={Edit} alt="Edit Option" className="Edit_Icon" />
        </div>
        <h5 className="Edit_Text">Edit Post</h5>
      </div>

      <div onClick={handleEditPost} className="Icon_Text_Container">
        <div className="Icon_Content">
          <img src={Update} alt="Edit Option" className="Edit_Icon" />
        </div>
        <h5 className="Edit_Text">Update Post</h5>
      </div>

      <div onClick={handleDeletePost} className="Icon_Text_Container">
        <div className="Icon_Content">
          <img src={Delete} alt="Edit Option" className="Edit_Icon" />
        </div>
        <h5 className="Edit_Text">Delete Post</h5>
      </div>
      <HorizontalLine />
    </div>
  );
}

export default React.memo(PostEditDrop);
