import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";

// Shared Component
import CloseModalIcon from "../../sharedComponents/CloseModalIcon/CloseModalIcon";
import HorizontalLine from "../../sharedComponents/HorizontalLine/HorizontalLine";
import UserProfilePic from "../../sharedComponents/UserProfilePic/UserProfilePic";
import CreateTextPost from "../CreatePost/Create_Text_Post/Create_Text_Post";
import CreatePostIcons from "../CreatePost/CreatePostIcons/CreatePostIcons.Component";
import CustomButton from "../../sharedComponents/Button.Component/Button.Component";

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
    <div className="CreatePostContainer">
      <div className="Create_Post_Title_Container">
        <h4 className="Title_Text">Update Post</h4>
        <CloseModalIcon />
      </div>
      <HorizontalLine />
      <div className="Create_Post_Profile_Pic">
        <UserProfilePic />
      </div>
      <form className="Form_Container">
        <CreateTextPost
          type="text"
          value={values.description}
          onChange={setValues}
        />
        <CreatePostIcons />
        <CustomButton
          buttonType="button"
          className="Post_Button"
          buttonClick={handleEditPost}
        >
          Update
        </CustomButton>
      </form>
    </div>
  );
}

export default withRouter(EditCurrentPost);
