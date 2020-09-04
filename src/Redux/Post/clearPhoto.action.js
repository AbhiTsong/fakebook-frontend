import { PostActionTypes } from "./post.types";

function clearPhotoState() {
  return {
    type: PostActionTypes.CLEAR_PHOTO_STATE,
  };
}

export { clearPhotoState };
