import { userActionTypes } from "./User.Types";

function getProfilePath(path) {
  return {
    type: userActionTypes.GET_USER_PROFILE_PATH,
    payload: path,
  };
}

function clearProfilePath() {
  return {
    type: userActionTypes.GET_USER_PROFILE_PATH,
  };
}

export { getProfilePath, clearProfilePath };
