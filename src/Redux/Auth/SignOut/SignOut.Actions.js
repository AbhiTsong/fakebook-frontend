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
      let user = await axios.post("/users/logout", {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      });
      dispatch(SignOutSuccess(user));
      localStorage.clearItem("fakeTkn");
      window.location.reload();
    } catch (error) {
      if (error.response) {
        console.log("logges out fail");
        dispatch(SignOutFail(error.response.data));
      }
    }
  };
}

export { SignOutAction };
