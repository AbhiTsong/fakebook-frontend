import { userActionTypes } from "./User.Types";

function getCoverPath(path) {
  return {
    type: userActionTypes.GET_COVER_PATH,
    payload: path,
  };
}

function clearCoverPath() {
  return {
    type: userActionTypes.CLEAR_COVER_PATH,
  };
}

export { getCoverPath, clearCoverPath };
