import { userActionTypes } from "./User.Types";

const INITIAL_STATE = {
  avatar: "",
  created: false,
  loading: false,
  profilePath: "",
  coverPath: "",
  coverCreated: false,
  cover: "",
  error: "",
  allUsers: "",
};

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case userActionTypes.CREATE_USER_PROFILE_START:
    case userActionTypes.CHANGE_USER_COVER_START:
    case userActionTypes.GET_ALL_USERS_START:
      return {
        ...state,
        loading: true,
      };

    case userActionTypes.GET_ALL_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        allUsers: action.payload,
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

    case userActionTypes.CHANGE_USER_COVER_SUCCESS:
      return {
        ...state,
        loading: false,
        created: true,
        coverCreated: true,
      };

    case userActionTypes.CREATE_USER_PROFILE_FAIL:
    case userActionTypes.CHANGE_USER_COVER_FAIL:
      return {
        ...state,
        loading: false,
        avatar: "",
        created: false,
        error: action.payload,
        profilePath: "",
      };

    case userActionTypes.GET_ALL_USERS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
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

    case userActionTypes.GET_COVER_PATH:
      return {
        ...state,
        coverPath: action.payload,
      };

    case userActionTypes.CLEAR_PROFILE_CREATED:
      return {
        ...state,
        created: false,
      };

    case userActionTypes.CLEAR_COVER_PATH:
      return {
        ...state,
        coverPath: "",
      };

    default:
      return state;
  }
}

export { userReducer };
