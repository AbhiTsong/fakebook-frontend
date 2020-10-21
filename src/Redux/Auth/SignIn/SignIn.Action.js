import SignInActionTypes from "./SignIn.Types";
import axios from "../../../axios";
import { showToster } from "../../toster/toster.action";

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

const newAvatarAdded = () => {
  return {
    type: SignInActionTypes.NEW_AVATAR,
  };
};

const newCoverAdded = () => {
  return {
    type: SignInActionTypes.NEW_COVER,
  };
};

// Funcion For Signing In The User
export function SignInUser({ email, password }) {
  return async function (dispatch) {
    dispatch(SignInStart());

    try {
      let signinUser = await axios.post("/users/login", {
        email,
        password,
      });

      const {
        data: { user, token },
      } = signinUser;

      console.log();

      dispatch(SignInSuccess(user));
      localStorage.setItem("fakeTkn", JSON.stringify(token));
    } catch (error) {
      if (error.response) {
        dispatch(SignInUserFail(error.response.data));
        dispatch(showToster(error.response.data));
      }
    }
  };
}

export { newAvatarAdded, newCoverAdded };
