import { PostActionTypes } from "./post.types";

function getImagePath(path) {
  return {
    type: PostActionTypes.PHOTO_PATH,
    payload: path,
  };
}

export { getImagePath };
