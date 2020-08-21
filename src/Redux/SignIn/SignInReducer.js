import SignInActionTypes from "./SignInTypes";

const INITIAL_STATE = {
  loading: true,
  data: [],
  error: "",
};

export function signInReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SignInActionTypes.SIGN_IN_START:
      return {
        ...state,
      };
    case SignInActionTypes.SIGN_IN_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };

    case SignInActionTypes.SIGN_IN_FAIL:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };

    default:
      return state
  }
}
