import { userActionTypes } from "./User.Types";
import axios from "../../axios";

function fetchUserProfilePicStart() {
  return {
    type: userActionTypes.FETCH_PROFILE_PIC_START,
  };
}

function fetchUserProfilePicSuccess(pic) {
  return {
    type: userActionTypes.FETCH_PROFILE_PIC_SUCCESS,
    payload: pic,
  };
}

function fetchUserProfilePicFail(error) {
  return {
    type: userActionTypes.FETCH_USER_PROFILE_FAIL,
    payload: error,
  };
}

function fetchUserProfilePicAction(id) {
  return async function (dispatch) {
    dispatch(fetchUserProfilePicStart);

    try {
      let avatar = await axios.get(`/users/${id}/avatar`);
      dispatch(fetchUserProfilePicSuccess(avatar));
    } catch (error) {
      if (error.response) {
        dispatch(fetchUserProfilePicFail(error.response.dispatch));
      }
    }
  };
}

export { fetchUserProfilePicAction };
