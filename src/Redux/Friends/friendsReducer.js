import { friendTypes } from "./friends.Types";

const INITIAL_STATE = {
  loading: false,
  friendRequest: "",
  isRequestSent: false,
  requestReceived: "",
  error: "",
};

function friendsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case friendTypes.SEND_FRIEND_REQUEST_START:
    case friendTypes.FIND_REQUEST_RECEIVED_START:
      return {
        ...state,
        loading: true,
      };

    case friendTypes.FIND_REQUEST_RECEIVED_SUCCESS: {
      return {
        ...state,
        loading: false,
        requestReceived: action.payload,
      };
    }

    case friendTypes.SEND_FRIEND_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        friendRequest: action.payload,
        isRequestSent: true,
      };

    case friendTypes.SEND_FRIEND_REQUEST_FAIL:
    case friendTypes.FIND_REQUEST_RECEIVED_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
}

export { friendsReducer };
