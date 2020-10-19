import React from "react";
import { useDispatch, useSelector } from "react-redux";

// Styled Imports
import {
  PostEditOptions,
  PostEditHeader,
  IconTextContainer,
  IconContent,
  Icon,
  EditText,
} from "./PostEdit.Styles";

// Shared Compoent
import HorizontalLine from "../../HorizontalLine/HorizontalLine";

// Icon Import
import Edit from "../../../../Assets/images/edit.png";
import Update from "../../../../Assets/images/update.png";
import Delete from "../../../../Assets/images/delete.png";

// Redux Import
import { ShowModal } from "../../../../Redux/Modal/ModalAction";
import { fetchCurrentPostID } from "../../../../Redux/Post/fetchCurrentPostIDAction";
import { signInSelector } from "../../../../Redux/Auth/SignIn/SignIn.Selector";
import { allPostsSelector } from "../../../../Redux/Post/post.selector";
import { showDrop } from "../../../../Redux/Post/editDropAction";

function PostEditDrop({ id }) {
  const user = useSelector(signInSelector);
  const allPosts = useSelector(allPostsSelector);
  const dispatch = useDispatch();
  let userID = allPosts.find((post) => post._id === id);

  // Function for handling edit post modal
  function handleEditPost() {
    if (userID.owner !== user.user._id) {
      alert("This post dosent belong to you cant perform the action.");
      return;
    }
    dispatch(showDrop(false));
    dispatch(ShowModal("EDIT_CURRENT_POST"));
    dispatch(fetchCurrentPostID(id));
  }

  function handleDeletePost() {
    if (userID.owner !== user.user._id) {
      alert("This post dosent belong to you cant perform the action.");
      return;
    }
    dispatch(showDrop(false));
    dispatch(fetchCurrentPostID(id));
    dispatch(ShowModal("DELETE_CURRENT_POST"));
  }

  return (
    <PostEditOptions>
      <PostEditHeader className="Post_Edit_Header">
        Edit Post Options
      </PostEditHeader>
      <HorizontalLine />
      <IconTextContainer onClick={handleEditPost}>
        <IconContent>
          <Icon src={Edit} Icon />
        </IconContent>
        <EditText>Edit Post</EditText>
      </IconTextContainer>

      <IconTextContainer onClick={handleEditPost}>
        <IconContent>
          <Icon src={Update} Icon />
        </IconContent>
        <EditText>Update Post</EditText>
      </IconTextContainer>

      <IconTextContainer onClick={handleDeletePost}>
        <IconContent>
          <Icon src={Delete} Icon />
        </IconContent>
        <EditText>Delete Post</EditText>
      </IconTextContainer>
      <HorizontalLine />
    </PostEditOptions>
  );
}

export default React.memo(PostEditDrop);
