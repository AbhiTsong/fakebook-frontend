import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";

import {
  CreatePostContainer,
  CreatePostTitleContainer,
  CreatePostTitle,
  CreatePostProfilePic,
  CreatePostForm,
  CreatePostBtn,
} from "../CreatePost/CreatePost.Styles";

// Shared Component
import CloseModalIcon from "../../sharedComponents/CloseModalIcon/CloseModalIcon";
import HorizontalLine from "../../sharedComponents/HorizontalLine/HorizontalLine";
import UserProfilePic from "../../sharedComponents/UserProfilePic/UserProfilePic";
import CreateTextPost from "../CreatePost/Create_Text_Post/Create_Text_Post";
import CreatePostIcons from "../CreatePost/CreatePostIcons/CreatePostIcons.Component";

// Redux Imports
import {
  postSelector,
  currentPostIDSelector,
  allPostsSelector,
} from "../../../Redux/Post/post.selector";
import { updateCurrentPostAction } from "../../../Redux/Post/updateCurrentPostAction";
import { CloseModal } from "../../../Redux/Modal/ModalAction";
import { fetchAllPosts } from "../../../Redux/Post/fetchPosts.actions";

// custom Hook import
import { useForm } from "../../../hooks/useFormInput";
import { clearUpdatePostAction } from "../../../Redux/Post/clearsState.Actions";

function EditCurrentPost(props) {
  const postId = useSelector(currentPostIDSelector);
  const allPosts = useSelector(allPostsSelector);
  const post = useSelector(postSelector);
  let currentPost = allPosts.find((post) => post._id === postId);
  const [values, setValues] = useForm({ description: currentPost.description });
  const dispatch = useDispatch();

  useEffect(() => {
    if (!post.loading && post.isPostEdited) {
      dispatch(CloseModal());
      dispatch(clearUpdatePostAction());
      dispatch(fetchAllPosts());
    }
  }, [allPosts, dispatch, post, post.isPostEdited, post.loading]);

  function handleEditPost(e) {
    // e.preventDefault();
    dispatch(
      updateCurrentPostAction({
        description: values.description,
        _id: postId,
      })
    );
  }

  return (
    <CreatePostContainer>
      <CreatePostTitleContainer>
        <CreatePostTitle>Update Post</CreatePostTitle>
        <CloseModalIcon />
      </CreatePostTitleContainer>
      <HorizontalLine />
      <CreatePostProfilePic>
        <UserProfilePic />
      </CreatePostProfilePic>
      <CreatePostForm>
        <CreateTextPost
          type="text"
          value={values.description}
          onChange={setValues}
        />
        <CreatePostIcons />
        <CreatePostBtn
          buttonType="button"
          className="Post_Button"
          buttonClick={handleEditPost}
        >
          Update
        </CreatePostBtn>
      </CreatePostForm>
    </CreatePostContainer>
  );
}

export default withRouter(EditCurrentPost);
