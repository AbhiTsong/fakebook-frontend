import { PostActionTypes } from "./post.types";
import axios from "../../axios";
import { getToken } from "../token";
import { showToster } from "../toster/toster.action";

function deletePostStart() {
  return {
    type: PostActionTypes.DELETE_POST_START,
  };
}

function deletePostSuccess(post) {
  return {
    type: PostActionTypes.DELETE_POST_SUCCESS,
    payload: post,
  };
}

function deletePostFail(err) {
  return {
    type: PostActionTypes.FETCH_POST_FAIL,
    payload: err,
  };
}

function deletePostAction(id) {
  return async function (dispatch) {
    dispatch(deletePostStart());
    try {
      let post = await axios.delete(`/posts/${id}`, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      });
      dispatch(deletePostSuccess(post));
      dispatch(showToster("Post Successfully Deleted"));
    } catch (error) {
      if (error.response) {
        dispatch(deletePostFail(error.response.data));
        dispatch(showToster("Error Occures While Deleting the post"));
      }
    }
  };
}

export { deletePostAction };
