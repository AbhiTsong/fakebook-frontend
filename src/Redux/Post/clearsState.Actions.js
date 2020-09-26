import { PostActionTypes } from "./post.types";

function clearPhotoState() {
  return {
    type: PostActionTypes.CLEAR_PHOTO_STATE,
  };
}

function clearUpdatePostAction() {
  return {
    type: PostActionTypes.CLEAR_UPDATE_PHOTO_STATE,
  };
}

function clearDeletePostAction() {
  return {
    type: PostActionTypes.CLEAR_POST_DELETE_STATE,
  };
}

export { clearPhotoState, clearUpdatePostAction, clearDeletePostAction };
