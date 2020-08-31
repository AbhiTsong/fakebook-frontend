import React, { useEffect } from "react";
import "./CreatePost.Styles.scss";

// Redux Imports
import { useDispatch, useSelector } from "react-redux";
import { CreatePostAction } from "../../../Redux/Post/createPost.action";
import { uploadPhoto } from "../../../Redux/Post/createPhoto.action";
import { postSelector } from "../../../Redux/Post/post.selector";
import { CloseModal } from "../../../Redux/Modal/ModalAction";
import { resetPostAction } from "../../../Redux/Post/resetPost.action";

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
    }
  }, [post.loading, dispatch, post.isEventCreated, post.isPhotoUploaded]);

  // Word Limit And Count
  let words = countWord(values.description, 500);
  let numberCount = WORD_LIMIT - words;

  const handleCreatePost = (e) => {
    e.preventDefault();
    const { description } = values;
    if (description !== null || description.length <= 500) {
      dispatch(CreatePostAction(values));
    }
  };

  const handleCreatePhotoPost = (e) => {
    e.preventDefault();
    // const { description } = values;
    let formData = new FormData();
    formData.append("photo", props.path[1]);
    dispatch(uploadPhoto(formData));
  };

  return (
    <div className="CreatePostContainer">
      <div>
        <img className="UserProfilePic" src={Logo} alt="Monkey" />
      </div>
      <form>
        {props.path ? (
          <>
            <FormInput type="text" placeholder="What is on your mind Abhi??" />
            <img
              className="Post_Text_Area"
              src={props.path[0]}
              alt="File To Upload"
            />
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

export default CreatePostComponent;
