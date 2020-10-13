import SignOutActionTypes from "./SignOutTypes";
import axios from "../../../axios";
import { getToken } from "../../token";

function SignOutStart() {
  return {
    type: SignOutActionTypes.SIGN_OUT_START,
  };
}

function SignOutSuccess(response) {
  return {
    type: SignOutActionTypes.SIGN_OUT_SUCCESS,
    payload: response,
  };
}

function SignOutFail(error) {
  return {
    type: SignOutActionTypes.SIGN_OUT_FAIL,
    payload: error,
  };
}

function SignOutAction() {
  return async function (dispatch) {
    dispatch(SignOutStart());
    try {
      let user = await axios.post("/users/logoutAll", {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      });
      dispatch(SignOutSuccess(user));
      localStorage.clearItem("fakeTkn");
    } catch (error) {
      if (error.response) {
        dispatch(SignOutFail(error.response.data));
        localStorage.clearItem("fakeTkn");
      }
    }
  };
}

export { SignOutAction };
