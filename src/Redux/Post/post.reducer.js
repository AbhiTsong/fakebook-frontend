import { PostActionTypes } from "./post.types";

const INITIAL_STATE = {
  loading: false,
  post: [],
  photoPath: "",
  photoPost: [],
  allPosts: [],
  error: "",
  like: "",
  comment: "",
  isEventCreated: false,
  isPhotoUploaded: false,
  // editMode: false,
};

function postReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case PostActionTypes.CREATE_POST_START:
    case PostActionTypes.FETCH_POST_START:
    case PostActionTypes.CREATE_PHOTO_START:
    case PostActionTypes.COMMENT_START:
    case PostActionTypes.LIKE_START:
      return {
        ...state,
        loading: true,
        post: [],
        error: "",
      };

    case PostActionTypes.COMMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        comment: action.payload,
      };

    case PostActionTypes.LIKE_SUCCESS:
      return {
        ...state,
        loading: false,
        like: action.payload,
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
    case PostActionTypes.CREATE_PHOTO_SUCCESS: {
      return {
        ...state,
        loading: false,
        photoPost: action.payload,
        error: "",
        isPhotoUploaded: true,
      };
    }
    case PostActionTypes.CREATE_POST_FAIL:
    case PostActionTypes.FETCH_POST_FAIL:
    case PostActionTypes.CREATE_PHOTO_FAIL:
    case PostActionTypes.COMMENT_FAIL:
    case PostActionTypes.LIKE_FAIL:
      return {
        ...state,
        loading: false,
        post: [],
        error: action.payload,
        isEventCreated: false,
      };
    case PostActionTypes.PHOTO_PATH: {
      return {
        ...state,
        photoPath: action.payload,
      };
    }

    case PostActionTypes.RESET_POST: {
      return {
        ...state,
        loading: false,
        post: [],
        photoPath: "",
        photoPost: [],
        error: "",
        isEventCreated: false,
        isPhotoUploaded: false,
      };
    }

    case PostActionTypes.PERSIST_USER_POST: {
      return {
        ...state,
        post: action.payload,
      };
    }

    case PostActionTypes.CLEAR_PHOTO_STATE: {
      return {
        ...state,
        photoPath: "",
      };
    }

    case PostActionTypes.CLEAR_PHOTO_PATH: {
      return { ...state, photoPath: "" };
    }

    default:
      return state;
  }
}

export { postReducer };
