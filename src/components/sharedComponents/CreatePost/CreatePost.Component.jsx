import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Styled Imports
import {
  CreatePostContainer,
  CreatePostTitleContainer,
  CreatePostTitle,
  CreatePostProfilePic,
  CreatePostForm,
  CreatePostBtn,
} from "./CreatePost.Styles";

// Redux Imports
import {
  CreatePostAction,
  CreatePostActionOnlyText,
} from "../../../Redux/Post/createPost.action";
import { postSelector } from "../../../Redux/Post/post.selector";
import { CloseModal } from "../../../Redux/Modal/ModalAction";
import HorizontalLine from "../../sharedComponents/HorizontalLine/HorizontalLine";

// Custom hook
import { useForm } from "../../../hooks/useFormInput";

// Shared Component
import CreateImagePost from "./Create_Image_Post/Create_Image_Post";
import CreateTextPost from "./Create_Text_Post/Create_Text_Post";
import CreatePostIcons from "./CreatePostIcons/CreatePostIcons.Component";
import CloseModalIcon from "../CloseModalIcon/CloseModalIcon";
import UserProfilePic from "../../sharedComponents/UserProfilePic/UserProfilePic";
import LoadingSpinner from "../LoadingSpinner/Loading.Spinner";

// Redux Import
import { showToster } from "../../../Redux/toster/toster.action";
import { themeSelector } from "../../../Redux/theme/theme.selector";

function CreatePostComponent(props) {
  const dispatch = useDispatch();
  const post = useSelector(postSelector);
  const [values, setValues] = useForm({ description: "" });
  let { light } = useSelector(themeSelector);

  // Effect for Creating the post
  useEffect(() => {
    if (
      (!post.loading && post.isEventCreated === true) ||
      post.isPhotoUploaded === true
    ) {
      dispatch(CloseModal());
      // dispatch(resetPostAction());
    }
  }, [post.loading, dispatch, post.isEventCreated, post.isPhotoUploaded]);

  // Creating Only Text Post
  const handleCreatePost = (e) => {
    e.preventDefault();

    if (values.description === "") {
      dispatch(showToster("There is nothing to post."));
      return "";
    } else if (values.description.length <= 500) {
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

  if (post.loading) {
    return <LoadingSpinner />;
  }

  return (
    <CreatePostContainer light={light} post={props.path ? true : false}>
      <CreatePostTitleContainer>
        <CreatePostTitle>Create Post</CreatePostTitle>
        <CloseModalIcon />
      </CreatePostTitleContainer>
      <HorizontalLine />
      <CreatePostProfilePic>
        <UserProfilePic />
      </CreatePostProfilePic>
      <CreatePostForm>
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

        <CreatePostBtn
          light={light}
          buttonType="button"
          className="Post_Button"
          onClick={props.path[0] ? handleCreatePhotoPost : handleCreatePost}
        >
          {" "}
          Post{" "}
        </CreatePostBtn>
      </CreatePostForm>
    </CreatePostContainer>
  );
}

export default CreatePostComponent;
