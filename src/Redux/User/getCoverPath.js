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


function clearCreatedPath(){
  return{
    type: userActionTypes.CLEAR_PROFILE_CREATED
  }
}

export { getCoverPath, clearCoverPath, clearCreatedPath };
