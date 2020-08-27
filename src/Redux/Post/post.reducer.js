import { CreatePostActionTypes } from "./post.types";

const INITIAL_STATE = {
  loading: false,
  post: [],
  error: "",
};

function postReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CreatePostActionTypes.CREATE_POST_START:
      return {
        ...state,
        loading: true,
        post: [],
        error: "",
      };

    case CreatePostActionTypes.CREATE_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        post: action.payload,
        error: "",
      };
    case CreatePostActionTypes.CREATE_POST_FAIL:
      return {
        ...state,
        loading: false,
        post: [],
        error: action.payload,
      };

    default:
      return state;
  }
}

export { postReducer };
