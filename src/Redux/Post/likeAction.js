import { PostActionTypes } from "./post.types";
import axios from "../../axios";
import { getToken } from "../token";

function likeCommentStart() {
  return {
    type: PostActionTypes.LIKE_START,
  };
}

function likeCommentSuccess(like) {
  return {
    type: PostActionTypes.LIKE_SUCCESS,
    payload: like,
  };
}

function likeCommentFail(error) {
  return {
    type: PostActionTypes.LIKE_FAIL,
    payload: error,
  };
}

function likeCommentAction({ like, id, userId }) {
 console.log("likelikelikelikelikelike",like)
  return async function (dispatch) {
    try {
      dispatch(likeCommentStart());
      let newLike = await axios.post(
        `/posts/${id}/like`,
        { like, id: userId },
        {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        }
      );
      dispatch(likeCommentSuccess(newLike));
    } catch (error) {
      if (error.response) {
        dispatch(likeCommentFail(error.response.data));
      }
    }
  };
}

export { likeCommentAction };
