import SignUpActionTypes from "./SignUp.Types";
import axios from "../../../axios";
import { showToster } from "../../toster/toster.action";

const SignUpUserStart = () => {
  return {
    type: SignUpActionTypes.SIGN_UP_START,
  };
};

const SignUpUserSuccess = (user) => {
  return {
    type: SignUpActionTypes.SIGN_UP_SUCCESS,
    payload: user,
  };
};

const SignUpUserFail = (error) => {
  return {
    type: SignUpActionTypes.SIGN_UP_FAIL,
    payload: error,
  };
};

export const ClearSignUpState = () => {
  return {
    type: SignUpActionTypes.CLEAR_SIGNED_UP,
  };
};

// Function For Signing Up Yhe User
export function SignUpUser({
  date,
  email,
  firstName,
  gender,
  lastName,
  month,
  password,
  year,
}) {
  return async function (dispatch) {
    dispatch(SignUpUserStart());
    try {
      let newUser = await axios.post("/users/create", {
        firstName,
        lastName,
        email,
        password,
        dateOfBirth: {
          date: parseInt(date),
          month,
          year: parseInt(year),
        },
        gender,
      });
      dispatch(SignUpUserSuccess(newUser));
      dispatch(
        showToster("Successfully Signed Up. Please Log In To Get Started")
      );
    } catch (error) {
      if (error.response) {
        dispatch(SignUpUserFail(error.response.data));
        dispatch(showToster("Something Went Wrong While Signing Up"));
      }
    }
  };
}
