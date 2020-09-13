import { PostActionTypes } from "./post.types";

function getImagePath(path) {
  return {
    type: PostActionTypes.PHOTO_PATH,
    payload: path,
  };
}

function clearImagePath() {
  return {
    type: PostActionTypes.CLEAR_PHOTO_PATH,
  };
}

export { getImagePath, clearImagePath };
