import React, { useEffect } from "react";
import "./CreatePost.Styles.scss";

// Redux Imports
import { useDispatch, useSelector } from "react-redux";
import {
  CreatePostAction,
  CreatePostActionOnlyText,
} from "../../../Redux/Post/createPost.action";
import { postSelector } from "../../../Redux/Post/post.selector";
import { CloseModal } from "../../../Redux/Modal/ModalAction";
import { resetPostAction } from "../../../Redux/Post/resetPost.action";
import { fetchAllPosts } from "../../../Redux/Post/fetchPosts.actions";
import HorizontalLine from "../../sharedComponents/HorizontalLine/HorizontalLine";
// import { persistUserTextPost } from "../../../Redux/Post/persistedUserPostAction";

// Custom hook
import { useForm } from "../../../hooks/useFormInput";

// Shared Compoent
import CustomButton from "../../sharedComponents/Button.Component/Button.Component";
import CreateImagePost from "./Create_Image_Post/Create_Image_Post";
import CreateTextPost from "./Create_Text_Post/Create_Text_Post";
import CreatePostIcons from "./CreatePostIcons/CreatePostIcons.Component";
import CloseModalIcon from "../CloseModalIcon/CloseModalIcon";
import UserProfilePic from "../../sharedComponents/UserProfilePic/UserProfilePic"

function CreatePostComponent(props) {
  const dispatch = useDispatch();
  const post = useSelector(postSelector);
  const [values, setValues] = useForm({ description: "" });

  // Effect for Creating the post
  useEffect(() => {
    if (
      (!post.loading && post.isEventCreated === true) ||
      post.isPhotoUploaded === true
    ) {
      dispatch(CloseModal());
      dispatch(resetPostAction());
      dispatch(fetchAllPosts());
    }
  }, [post.loading, dispatch, post.isEventCreated, post.isPhotoUploaded]);

  // Creating Only Text Post
  const handleCreatePost = (e) => {
    e.preventDefault();
    const { description } = values;
    if (description !== null || description.length <= 500) {
      dispatch(CreatePostActionOnlyText(values));
    }
  };

  // Creating  Photo & Text Post
  const handleCreatePhotoPost = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("photo", props.path[1]);
    formData.append("description", values.description);
    dispatch(CreatePostAction(formData));
  };

  return (
    <div className="CreatePostContainer">
      <div className="Create_Post_Title_Container">
        <h4 className="Title_Text">Create Post</h4>
        <CloseModalIcon />
      </div>
      <HorizontalLine />
      <div className="Create_Post_Profile_Pic">
        <UserProfilePic/>
      </div>
      <form className="Form_Container">
        {props.path ? (
          <CreateImagePost
            value={values.description.split("  ").join(" ")}
            onChange={setValues}
            {...props}
          />
        ) : (
          <CreateTextPost
            type="text"
            value={values.description.split("  ").join(" ")}
            onChange={setValues}
          />
        )}
        <CreatePostIcons />
        <CustomButton
          buttonType="button"
          className="Post_Button"
          buttonClick={props.path[0] ? handleCreatePhotoPost : handleCreatePost}
        >
          {post.loading ? "Uploading..." : "Post"}
        </CustomButton>
      </form>
    </div>
  );
}

export default CreatePostComponent;
