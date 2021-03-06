import { userActionTypes } from "./User.Types";
import axios from "../../axios";
import { getToken } from "../token";
import { newCoverAdded } from "../Auth/SignIn/SignIn.Action";
import { showToster } from "../toster/toster.action";

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

function changeCoverAction(props) {
  return async function (dispatch) {
    dispatch(changeCoverStart());
    try {
      let cover = await axios.post("/users/me/cover", props, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      });
      dispatch(newCoverAdded());
      dispatch(changeCoverSuccess(cover));
      dispatch(showToster("Cover Successfully Changed"));
    } catch (error) {
      if (error.resposne) {
        dispatch(changeCoverFail(error.resposne.data));
        dispatch(showToster("Error While Changing The Cover"));
      }
    }
  };
}

export { changeCoverAction };
