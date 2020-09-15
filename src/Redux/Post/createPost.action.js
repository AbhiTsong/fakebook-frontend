import { PostActionTypes } from "./post.types";
import axios from "../../axios";

import { getToken } from "../token";

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

// Create post action creater (photo and text)
function CreatePostAction(props) {
  return async function (dispatch) {
    dispatch(CreatePostStart());
    try {
      let post = await axios.post("/posts/create", props, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      });
      dispatch(CreatePostSuccess(post));
    } catch (error) {
      if (error.response) {
        dispatch(CreatePostFail(error.response.data));
      }
    }
  };
}

// Create post action (only text)
function CreatePostActionOnlyText(props) {
  return async function (dispatch) {
    dispatch(CreatePostStart());
    try {
      let post = await axios.post("/post", props, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      });
      dispatch(CreatePostSuccess(post));
    } catch (error) {
      dispatch(CreatePostFail(error.response));
    }
  };
}

export { CreatePostAction, CreatePostActionOnlyText };
