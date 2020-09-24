import { PostActionTypes } from "./post.types";
import axios from "../../axios";
import { getToken } from "../token";

function updateCurrentPostStart() {
  return {
    type: PostActionTypes.UPDATE_CURRENT_POST_START,
  };
}

function updateCurrentPostSuccess(post) {
  return {
    type: PostActionTypes.UPDATE_CURRENT_POST_SUCCESS,
    payload: post,
  };
}

function updateCurrentPostFail(err) {
  return {
    type: PostActionTypes.UPDATE_CURRENT_POST_FAIL,
    payload: err,
  };
}

function updateCurrentPostAction({ _id, description }) {
  return async function (dispatch) {
    dispatch(updateCurrentPostStart());
    try {
      let updatedPost = await axios.patch(
        `/posts/${_id}`,
        { description },
        {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        }
      );
      dispatch(updateCurrentPostSuccess(updatedPost));
    } catch (error) {
      if (error.response) {
        dispatch(dispatch(updateCurrentPostFail(error.response.data)));
      }
    }
  };
}

export { updateCurrentPostAction };
