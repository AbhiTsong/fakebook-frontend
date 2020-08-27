import { PostActionTypes } from "./post.types";

const INITIAL_STATE = {
  loading: false,
  post: [],
  allPosts: [],
  error: "",
  isEventCreated: false,
  // editMode: false,
};

function postReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case PostActionTypes.CREATE_POST_START:
    case PostActionTypes.FETCH_POST_START:
      return {
        ...state,
        loading: true,
        post: [],
        error: "",
      };
    case PostActionTypes.FETCH_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        allPosts: action.payload,
        error: "",
        isEventCreated: false,
      };
    case PostActionTypes.CREATE_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        post: action.payload,
        error: "",
        isEventCreated: true,
      };
    case PostActionTypes.CREATE_POST_FAIL:
    case PostActionTypes.FETCH_POST_FAIL:
      return {
        ...state,
        loading: false,
        post: [],
        error: action.payload,
        isEventCreated: false,
      };

    default:
      return state;
  }
}

export { postReducer };
