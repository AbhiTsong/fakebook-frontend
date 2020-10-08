import { PostActionTypes } from "./post.types";
import axios from "../../axios";
import { getToken } from "../token";
import { SignOutAction } from "../Auth/SignOut/SignOut.Actions";
import { ShowModal } from "../Modal/ModalAction";

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
      let allPosts = await axios.get("/posts", {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      });
      dispatch(fetchPostSuccess(allPosts));
    } catch (error) {
      if (error.response) {
        if (error.response.data === "Please Authenticate") {
          dispatch(ShowModal("PLEASE_AUTH"));
        }
        dispatch(fetchPostFail(error.response.data));
      }
    }
  };
}

export { fetchAllPosts };
