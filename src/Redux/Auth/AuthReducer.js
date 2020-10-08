import SignUpActionTypes from "./SignUp/SignUp.Types";
import SignInActionTypes from "./SignIn/SignIn.Types";
import SignOutActionTypes from "./SignOut/SignOutTypes";

const INITIAL_STATE = {
  loading: false,
  user: [],
  newUser: [],
  isSignedUp: false,
  error: "",
  signedIn: true,
  status: "",
};

export function authReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SignInActionTypes.SIGN_IN_START:
    case SignUpActionTypes.SIGN_UP_START:
    case SignOutActionTypes.SIGN_OUT_START:
      return {
        ...state,
        loading: true,
      };

    case SignOutActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        signedIn: false,
        user: [],
        status: action.payload,
      };

    case SignInActionTypes.SIGN_IN_SUCCESS:
      return {
        loading: false,
        user: action.payload,
        error: "",
      };
    case SignUpActionTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        loading: false,
        user: [],
        newUser: action.payload,
        isSignedUp: true,
        error: "",
      };

    case SignOutActionTypes.SIGN_OUT_FAIL:
    case SignInActionTypes.SIGN_IN_FAIL:
    case SignUpActionTypes.SIGN_UP_FAIL:
      return {
        ...state,
        loading: false,
        user: [],
        status: action.payload,
        error: action.payload,
      };

    default:
      return state;
  }
}
