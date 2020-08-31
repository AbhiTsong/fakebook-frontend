import { PostActionTypes } from "./post.types";

function resetPostAction() {
  return {
    type: PostActionTypes.RESET_POST,
  };
}

export { resetPostAction };
