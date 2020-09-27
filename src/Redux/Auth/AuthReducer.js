import SignUpActionTypes from "./SignUp/SignUp.Types";
import SignInActionTypes from "./SignIn/SignIn.Types";

const INITIAL_STATE = {
  loading: false,
  user: [],
  newUser: [],
  isSignedUp: false,
  error: "",
};

export function authReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SignInActionTypes.SIGN_IN_START:
    case SignUpActionTypes.SIGN_UP_START:
      return {
        ...state,
        loading: true,
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

    case SignInActionTypes.SIGN_IN_FAIL:
    case SignUpActionTypes.SIGN_UP_FAIL:
      return {
        ...state,
        loading: false,
        user: [],
        error: action.payload,
      };

    default:
      return state;
  }
}
