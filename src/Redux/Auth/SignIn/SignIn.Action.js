import SignInActionTypes from "./SignIn.Types";
import axios from "../../../axios";
import { SignOutAction } from "../SignOut/SignOut.Actions";

const SignInStart = () => {
  return {
    type: SignInActionTypes.SIGN_IN_START,
  };
};

const SignInSuccess = (user) => {
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

// Funcion For Signing In The User
export function SignInUser({ email, password }) {
  return async function (dispatch) {
    dispatch(SignInStart());

    try {
      let user = await axios.post("/users/login", {
        email,
        password,
      });

      dispatch(SignInSuccess(user));
    } catch (error) {
      if (error.response) {
        if (error.response.data.Error === "Please Authenticate") {
          dispatch(SignOutAction());
        }
        dispatch(SignInUserFail(error.response.data));
      }
    }
  };
}
