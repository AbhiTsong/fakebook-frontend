import { PostActionTypes } from "./post.types";

function fetchCurrentPostID(id) {
  return {
    type: PostActionTypes.FETCH_CURRENT_POST_ID,
    payload: id,
  };
}

export { fetchCurrentPostID };
