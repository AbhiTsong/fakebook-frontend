import SignInActionTypes from "./SignInTypes";
import axios from "../../axios";

const SignInUserStart = () => {
  return {
    type: SignInActionTypes.SIGN_IN_START,
  };
};

const SignInUserSuccess = (user) => {
  return {
    type: SignInActionTypes.SIGN_IN_SUCCESS,
    payload: user,
  };
};

const SignInUserFail = (error) => {
  return {
    type: SignInActionTypes.SIGN_IN_FAIL,
    payload: error,
  };
};

export function SignInUser({ email, password }) {
  return function (dispatch) {
    dispatch(SignInUserStart());

    axios
      .post("/users/login", {
        email,
        password,
      })
      .then(function (response) {
        dispatch(SignInUserSuccess(response));
      })
      .catch(function (error) {
        dispatch(SignInUserFail(error.message));
      });
  };
}
