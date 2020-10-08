import SignOutActionTypes from "./SignOutTypes";
import axios from "../../../axios";
import { getToken } from "../../token";
import { showToster } from "../../toster/toster.action";

function SignOutStart() {
  return {
    type: SignOutActionTypes.SIGN_OUT_START,
  };
}

function SignOutSuccess() {
  return {
    type: SignOutActionTypes.SIGN_OUT_SUCCESS,
  };
}

function SignOutFail() {
  return {
    type: SignOutActionTypes.SIGN_OUT_FAIL,
  };
}

function SignOutAction() {
  return async function (dispatch) {
    dispatch(SignOutStart());
    try {
      let user = await axios.post("/users/logout", {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      });
      dispatch(SignOutSuccess(user));
      localStorage.clear();
      dispatch(showToster("Please Authenticate"));
    } catch (error) {
      if (error.response) {
        dispatch(SignOutFail(error.response.data));
      }
    }
  };
}

export { SignOutAction };
