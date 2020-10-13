import { PostActionTypes } from "./post.types";
import axios from "../../axios";
import { getToken } from "../token";

function startPostUpdate() {
  return {
    type: PostActionTypes.UPDATE_POST_START,
  };
}

function successPostUpdate(update) {
  return {
    type: PostActionTypes.UPDATE_POST_SUCCESS,
    payload: update,
  };
}

function failPostUpdate(error) {
  return {
    type: PostActionTypes.UPDATE_POST_FAIL,
    payload: error,
  };
}

function updatePostAction({ id, 
  like, 
  comment }) {
  return function (dispatch) {
    dispatch(startPostUpdate());

    try {
      let update = axios.patch(
        `/posts/${id}`,
        { like, comment },
        {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        }
      );
      dispatch(successPostUpdate(update));
    } catch (error) {
      if (error.response) {
        dispatch(failPostUpdate(error.response.body));
      }
    }
  };
}

export { updatePostAction };
