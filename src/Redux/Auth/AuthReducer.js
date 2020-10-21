import SignUpActionTypes from "./SignUp/SignUp.Types";
import SignInActionTypes from "./SignIn/SignIn.Types";
import SignOutActionTypes from "./SignOut/SignOutTypes";

const INITIAL_STATE = {
  loading: false,
  signingOut: false,
  user: [],
  newUser: [],
  newAvatar: false,
  newCover: false,
  isSignedUp: false,
  error: "",
  signedIn: false,
  status: "",
};

export function authReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SignInActionTypes.SIGN_IN_START:
    case SignUpActionTypes.SIGN_UP_START:
      return {
        ...state,
        loading: true,
      };

    case SignInActionTypes.NEW_AVATAR:
      return {
        ...state,
        newAvatar: true,
      };

    case SignInActionTypes.NEW_COVER:
      return {
        ...state,
        newCover: true,
      };
    case SignOutActionTypes.SIGN_OUT_START:
      return {
        ...state,
        signingOut: false,
      };

    case SignOutActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        signedIn: false,
        signingOut: true,
        status: action.payload,
      };

    case SignInActionTypes.SIGN_IN_SUCCESS:
      return {
        loading: false,
        user: action.payload,
        signedIn: true,
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
        signingOut: false,
      };

    default:
      return state;
  }
}
