import { PostActionTypes } from "./post.types";
import axios from "../../axios";
import { getToken } from "../token";
import { showToster } from "../toster/toster.action";

function addCommentStart() {
  return {
    type: PostActionTypes.COMMENT_START,
  };
}

function addCommentSuccess(comment) {
  return {
    type: PostActionTypes.COMMENT_SUCCESS,
    payload: comment,
  };
}

function addCommentFail(error) {
  return {
    type: PostActionTypes.COMMENT_FAIL,
    payload: error,
  };
}

function addCommentAction({ comment, id, userId, name }) {
  return async function (dispatch) {
    try {
      dispatch(addCommentStart());
      let newComment = await axios.post(
        `/posts/${id}/comment`,
        { comment, id: userId, name },
        {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        }
      );
      dispatch(addCommentSuccess(newComment));
      dispatch(showToster("Comment Successfully Added"));
    } catch (error) {
      if (error.response) {
        dispatch(addCommentFail(error.response.data));
      }
    }
  };
}

export { addCommentAction };
