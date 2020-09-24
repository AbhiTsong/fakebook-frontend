const PostActionTypes = {
  CREATE_POST_START: "CREATE_POST_START",
  CREATE_POST_SUCCESS: "CREATE_POST_SUCCESS",
  CREATE_POST_FAIL: "CREATE_POST_FAIL",
  COMMENT_START: "COMMENT_START",
  COMMENT_SUCCESS: "COMMENT_SUCCESS",
  COMMENT_FAIL: "COMMENT_FAIL",
  LIKE_START: "LIKE_START",
  LIKE_SUCCESS: "LIKE_SUCCESS",
  LIKE_FAIL: "LIKE_FAIL",
  UPDATE_POST_START: "UPDATE_POST_START",
  UPDATE_POST_SUCCESS: "UPDATE_POST_SUCCESS",
  UPDATE_POST_FAIL: "UPDATE_POST_FAIL",
  UPDATE_CURRENT_POST_START: "UPDATE_CURRENT_POST_START",
  UPDATE_CURRENT_POST_SUCCESS: "UPDATE_CURRENT_POST_SUCCESS",
  UPDATE_CURRENT_POST_FAIL: "UPDATE_CURRENT_POST_FAIL",
  FETCH_POST_START: "FETCH_POST_START",
  FETCH_POST_SUCCESS: "FETCH_POST_SUCCESS",
  FETCH_POST_FAIL: "FETCH_POST_FAIL",
  // Non Network Action Types
  PHOTO_PATH: "PHOTO_PATH",
  RESET_POST: "RESET_POST",
  FETCH_CURRENT_POST_ID: "FETCH_CURRENT_POST_ID",
  PERSIST_USER_POST: "PERSIST_USER_POST",
  CLEAR_PHOTO_STATE: "CLEAR_PHOTO_STATE",
  CLEAR_PHOTO_PATH: "CLEAR_PHOTO_PATH",
  CLEAR_UPDATE_PHOTO_STATE: "CLEAR_UPDATE_PHOTO_STATE",
};

export { PostActionTypes };
