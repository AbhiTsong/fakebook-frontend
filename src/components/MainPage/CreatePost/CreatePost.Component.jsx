import React, { useEffect } from "react";
import "./CreatePost.Styles.scss";

// Redux Imports
import { useDispatch, useSelector } from "react-redux";
import { CreatePostAction } from "../../../Redux/Post/createPost.action";
import { postSelector } from "../../../Redux/Post/post.selector";
import { CloseModal } from "../../../Redux/Modal/ModalAction";

// Custom hook
import { useForm } from "../../../hooks/useFormInput";

// Shared Compoent
import FormInput from "../../sharedComponents/FormInput/FormInput.Component";
import Logo from "../../../Assets/images/IMG-20190106-WA0001.jpg";
import CustomButton from "../../sharedComponents/Button.Component/Button.Component";

function CreatePostComponent() {
  const dispatch = useDispatch();
  const post = useSelector(postSelector);
  const [values, setValues, clearState] = useForm({ description: "" });

  // Effect for resetting the state after state on unmount
  useEffect(() => {
    return () => dispatch(CreatePostAction());
  }, [dispatch]);

  // Effect for Creating the post
  useEffect(() => {
    if (!post.loading && post.isEventCreated === true) {
      dispatch(CloseModal());
    }
  }, [post.loading, dispatch, post.isEventCreated]);

  if (post.loading === true) {
    return "Loading....";
  }

  const handleCreatePost = (e) => {
    e.preventDefault();
    if (values.description !== "") {
      dispatch(CreatePostAction(values));
    }
  };
  return (
    <div className="CreatePostContainer">
      <div>
        <img className="UserProfilePic" src={Logo} alt="Monkey" />
      </div>
      <form>
        <textarea
          className="Post_Text_Area"
          name="description"
          placeholder="What is on your mind, Abhi??"
          type="text"
          value={values.description}
          onChange={setValues}
        />
        <div></div>
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
          buttonClick={handleCreatePost}
        >
          Post
        </CustomButton>
      </form>
    </div>
  );
}

export default CreatePostComponent;