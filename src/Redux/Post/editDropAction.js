import { PostActionTypes } from "./post.types";

function showDrop(val) {
  return {
    type: PostActionTypes.SHOW_POST_EDIT_DROP,
    payload: val,
  };
}

export { showDrop }