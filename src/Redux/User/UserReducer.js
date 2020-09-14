import { userActionTypes } from "./User.Types";

const INITIAL_STATE = {
  avatar: "",
  avatarFromDB: "",
  created: false,
  error: "",
  loading: false,
  profilePath: "",
};

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case userActionTypes.CREATE_USER_PROFILE_START:
      return {
        ...state,
        loading: true,
      };

    case userActionTypes.CREATE_USER_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        avatar: action.payload,
        created: true,
        error: "",
        profilePath: "",
      };

    case userActionTypes.CREATE_USER_PROFILE_FAIL:
      return {
        ...state,
        loading: false,
        avatar: "",
        created: false,
        error: action.payload,
        profilePath: "",
      };

    case userActionTypes.GET_USER_PROFILE_PATH:
      return {
        ...state,
        profilePath: action.payload,
      };

    case userActionTypes.CLEAR_USER_PROFILE_PATH:
      return {
        ...state,
        profilePath: "",
      };

    default:
      return state;
  }
}

export { userReducer };
