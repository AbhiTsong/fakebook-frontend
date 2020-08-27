import { PostActionTypes } from "./post.types";
import axios from "../../axios";

// Create Post Action Start
const CreatePostStart = () => {
  return {
    type: PostActionTypes.CREATE_POST_START,
  };
};

// Create Post Action Success
const CreatePostSuccess = (post) => {
  return {
    type: PostActionTypes.CREATE_POST_SUCCESS,
    payload: post,
  };
};

// Create Post Action Fail
const CreatePostFail = (error) => {
  return {
    type: PostActionTypes.CREATE_POST_FAIL,
    payload: error,
  };
};

// Create post action creater
function CreatePostAction(props) {
  console.log(props);
  return async function (dispatch) {
    dispatch(CreatePostStart());
    try {
      console.log("Inside try catch block");
      let post = await axios.post("/posts/create", {
        description: props.description,
      });
      dispatch(CreatePostSuccess(post));
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
      }
      dispatch(CreatePostFail(error.response));
    }
  };
}

export { CreatePostAction };