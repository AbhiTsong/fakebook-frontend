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
function fetchAllPosts({ skip, limit }) {
  return async function (dispatch) {
    dispatch(fetchPostStart());
    try {
      let allPosts = await axios.get(`/posts?limit=${limit}&skip=${skip}`, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
        // params: { page: page, limit: limit },
      });
      dispatch(fetchPostSuccess(allPosts));
    } catch (error) {
      if (error.response) {
        // if (error.response.data.Error === "Please Authenticate") {

        //   dispatch(SignOutAction())
        //   localStorage.clear();

        // }
        dispatch(fetchPostFail(error.response.data));
      }
    }
  };
}

export { fetchAllPosts };
