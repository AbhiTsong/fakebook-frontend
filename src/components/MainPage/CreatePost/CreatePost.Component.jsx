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
// import { persistUserTextPost } from "../../../Redux/Post/persistedUserPostAction";

// Custom hook
import { useForm } from "../../../hooks/useFormInput";

// Shared Compoent
import FormInput from "../../sharedComponents/FormInput/FormInput.Component";
import Logo from "../../../Assets/images/IMG-20190106-WA0001.jpg";
import CustomButton from "../../sharedComponents/Button.Component/Button.Component";

// Utility Function Imports
import { countWord } from "../../../utility/wordCount";

// Constants
let WORD_LIMIT = 300;

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

  // Word Limit And Count
  let words = countWord(values.description, 500);
  let numberCount = WORD_LIMIT - words;

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
    const { description } = values;
    e.preventDefault();
    let formData = new FormData();
    formData.append("photo", props.path[1]);
    formData.append("description", description);
    dispatch(CreatePostAction(formData));
  };

  return (
    <div className="CreatePostContainer">
      <div>
        <img className="UserProfilePic" src={Logo} alt="Monkey" />
      </div>
      <form>
        {props.path ? (
          <>
            <FormInput
              name="description"
              placeholder="What is on your mind, Abhi??"
              type="text"
              value={values.description.split("  ").join(" ")}
              onChange={setValues}
              maxLength={WORD_LIMIT}
              className="Photo_Description"
            />
            <div className="Pic_Preview_Container">
              <img
                className="Post_Pic"
                src={props.path[0]}
                alt="File To Upload"
              />
            </div>
          </>
        ) : (
          <>
            {" "}
            <textarea
              className="Post_Text_Area"
              name="description"
              placeholder="What is on your mind, Abhi??"
              type="text"
              value={values.description.split("  ").join(" ")}
              onChange={setValues}
              maxLength={WORD_LIMIT}
            />
            <h6>Words Left {numberCount}</h6>
          </>
        )}
        <div className="Add_Post_Container">
          <span>Add to your post</span>
          <span>
            <i>1</i>
            <i>2</i>
            <i>3</i>
            <i>4</i>
            <i>5</i>
            <i>...</i>
          </span>
        </div>
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

export default React.memo(CreatePostComponent);
