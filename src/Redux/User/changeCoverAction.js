import { userActionTypes } from "./User.Types";
import axios from "../../axios";

function changeCoverStart() {
  return {
    type: userActionTypes.CHANGE_USER_COVER_START,
  };
}

function changeCoverSuccess(cover) {
  return {
    type: userActionTypes.CHANGE_USER_COVER_SUCCESS,
    payload: cover,
  };
}

function changeCoverFail(fail) {
  return {
    type: userActionTypes.CREATE_USER_PROFILE_FAIL,
    payload: fail,
  };
}

function changeCoverAction() {
  return async function (dispatch) {
    dispatch(changeCoverStart());
    try {
      let cover = await axios.post();
      dispatch(changeCoverSuccess(cover));
    } catch (error) {
      if (error.resposne) {
        dispatch(changeCoverFail(error.resposne.data));
      }
    }
  };
}

export { changeCoverAction };
