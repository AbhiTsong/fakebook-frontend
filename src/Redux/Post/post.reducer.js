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
  currentPostID: "",
  editPost: [],
  isPostEdited: false,
  deletePost: "",
  isPostDeleted: false,
  showEditDrop: false,
};

function postReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case PostActionTypes.CREATE_POST_START:
    case PostActionTypes.FETCH_POST_START:
    case PostActionTypes.CREATE_PHOTO_START:
    case PostActionTypes.COMMENT_START:
    case PostActionTypes.LIKE_START:
    case PostActionTypes.FETCH_CURRENT_POST_START:
    case PostActionTypes.UPDATE_CURRENT_POST_START:
    case PostActionTypes.DELETE_POST_START:
      return {
        ...state,
        loading: true,
        post: [],
        error: "",
      };

    case PostActionTypes.DELETE_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        deletePost: action.payload,
        isPostDeleted: true,
      };

    case PostActionTypes.UPDATE_CURRENT_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        editPost: action.payload,
        isPostEdited: true,
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
    case PostActionTypes.FETCH_CURRENT_POST_FAIL:
    case PostActionTypes.UPDATE_CURRENT_POST_FAIL:
    case PostActionTypes.DELETE_POST_FAIL:
      return {
        ...state,
        loading: false,
        post: [],
        error: action.payload,
        editPost: [],
        isEventCreated: false,
        deletePost: "",
        isPostDeleted: false,
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

    // Non Network Reducer

    case PostActionTypes.CLEAR_POST_DELETE_STATE:
      return {
        ...state,
        deletePost: "",
        isPostDeleted: false,
      };

    case PostActionTypes.SHOW_POST_EDIT_DROP:
      return {
        ...state,
        showEditDrop: action.payload,
      };

    case PostActionTypes.FETCH_CURRENT_POST_ID:
      return {
        ...state,
        currentPostID: action.payload,
      };

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

    case PostActionTypes.CLEAR_UPDATE_PHOTO_STATE: {
      return {
        ...state,
        editPost: [],
        isPostEdited: false,
      };
    }

    default:
      return state;
  }
}

export { postReducer };
