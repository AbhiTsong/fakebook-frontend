import { PostActionTypes } from "./post.types";
import axios from "../../axios";

function fetchPostStart() {
  return {
    type: PostActionTypes.FETCH_POST_START,
  };
}

function fetchPostSuccess(posts) {
  return {
    type: PostActionTypes.FETCH_POST_SUCCESS,
    payload: posts,
  };
}

function fetchPostFail(error) {
  return {
    type: PostActionTypes.FETCH_POST_FAIL,
    payload: error,
  };
}

// Async Action For Fetching All The Posts
function fetchAllPosts() {
  return async function (dispatch) {
    dispatch(fetchPostStart());
    try {
      let allPosts = await axios.get("/posts");
      dispatch(fetchPostSuccess(allPosts));
    } catch (error) {
      if (error.response) {
        dispatch(fetchPostFail(error.response.message));
      }
    }
  };
}

export { fetchAllPosts };
