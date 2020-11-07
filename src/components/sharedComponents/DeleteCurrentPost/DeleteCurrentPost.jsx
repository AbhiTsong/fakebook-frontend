import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Styled Imports
import {
  DeleteModalContainer,
  TitileContainer,
  DeleteTitleText,
  DeleteMessage,
  DeleteBtnContainer,
  CancleBtn,
  DeleteBtn,
} from "./DeleteCurrentPost.style";

// Redux Imports
import {
  currentPostIDSelector,
  postSelector,
} from "../../../Redux/Post/post.selector";
import { CloseModal } from "../../../Redux/Modal/ModalAction";
import { deletePostAction } from "../../../Redux/Post/deletePostAction";
import { fetchAllPosts } from "../../../Redux/Post/fetchPosts.actions.js";
import { clearDeletePostAction } from "../../../Redux/Post/clearsState.Actions.js";
import { themeSelector } from "../../../Redux/theme/theme.selector";

// Shared Components
import CloseModalIcon from "../CloseModalIcon/CloseModalIcon";
import HorizontalLine from "../../sharedComponents/HorizontalLine/HorizontalLine";
import LoadingSpinner from "../LoadingSpinner/Loading.Spinner";

function DeleteCurrentPost() {
  let { light } = useSelector(themeSelector)
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
    <DeleteModalContainer light={light}>
      <TitileContainer>
        <DeleteTitleText>Delete Post</DeleteTitleText>
        <CloseModalIcon />
      </TitileContainer>
      <HorizontalLine />
      <DeleteMessage>Are You Sure You Want To Delete This Post?</DeleteMessage>
      <DeleteBtnContainer>
        <CancleBtn onClick={handleCancle}>Cancle</CancleBtn>
        <DeleteBtn onClick={handleDelete}>Delete</DeleteBtn>
      </DeleteBtnContainer>
    </DeleteModalContainer>
  );
}

export default DeleteCurrentPost;
