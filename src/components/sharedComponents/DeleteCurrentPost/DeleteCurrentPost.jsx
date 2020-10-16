import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./DeleteCurrrentPost.styles.scss";

// Redux Imports
import {
  currentPostIDSelector,
  postSelector,
} from "../../../Redux/Post/post.selector";
import { CloseModal } from "../../../Redux/Modal/ModalAction";
import { deletePostAction } from "../../../Redux/Post/deletePostAction";
import { fetchAllPosts } from "../../../Redux/Post/fetchPosts.actions.js";
import { showDrop } from "../../../Redux/Post/editDropAction.js";
import { clearDeletePostAction } from "../../../Redux/Post/clearsState.Actions.js";

// Shared Components
import CloseModalIcon from "../CloseModalIcon/CloseModalIcon";
import HorizontalLine from "../../sharedComponents/HorizontalLine/HorizontalLine";
import LoadingSpinner from "../LoadingSpinner/Loading.Spinner";

function DeleteCurrentPost() {
  const postID = useSelector(currentPostIDSelector);
  const dispatch = useDispatch();
  const post = useSelector(postSelector);

  useEffect(() => {
    if (post.loading === false && post.isPostDeleted === true) {
      dispatch(clearDeletePostAction());
      dispatch(CloseModal());
      dispatch(fetchAllPosts());
    }
  }, [dispatch, post.deletePost.length, post.isPostDeleted, post.loading]);

  function handleCancle(e) {
    e.preventDefault();
    dispatch(showDrop(false));
    dispatch(CloseModal());
  }

  function handleDelete(e) {
    e.preventDefault();
    dispatch(deletePostAction(postID));
  }

  if (post.loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="Delete_Modal_Container">
      <div className="Delete_Post_Title_Container">
        <h4 className="Delete_Title_Text">Delete Post</h4>
        <CloseModalIcon />
      </div>
      <HorizontalLine />
      <h6 className="Delete_Message">
        Are You Sure You Want To Delete This Post?
      </h6>
      <div className="Delete_Button_Container">
        <button className="Cancle_Button" onClick={handleCancle}>
          Cancle
        </button>
        <button className="Delete_Button" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default DeleteCurrentPost;
