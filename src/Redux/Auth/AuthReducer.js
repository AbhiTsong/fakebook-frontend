import SignUpActionTypes from "./SignUp/SignUp.Types";
import SignInActionTypes from "./SignIn/SignIn.Types";

const INITIAL_STATE = {
  loading: true,
  data: [],
  newUser: [],
  error: "",
};

export function authReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SignInActionTypes.SIGN_IN_START:
    case SignUpActionTypes.SIGN_UP_START:
      return {
        ...state,
      };
    case SignInActionTypes.SIGN_IN_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case SignUpActionTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        loading: false,
        data: [],
        newUser: action.payload,
        error: "",
      };

    case SignInActionTypes.SIGN_IN_FAIL:
    case SignUpActionTypes.SIGN_UP_FAIL:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };

    default:
      return state;
  }
}
