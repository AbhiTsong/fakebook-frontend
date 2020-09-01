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
      let post = await axios.post("/posts/create", props);
      dispatch(CreatePostSuccess(post));
    } catch (error) {
      dispatch(CreatePostFail(error.response));
    }
  };
}

// Create post action (only text)
function CreatePostActionOnlyText(props) {
  return async function (dispatch) {
    dispatch(CreatePostStart());
    try {
      let post = await axios.post("/post",{
        description: props.description
      });
      dispatch(CreatePostSuccess(post));
    } catch (error) {
      dispatch(CreatePostFail(error.response));
    }
  };
}

export { CreatePostAction, CreatePostActionOnlyText };
