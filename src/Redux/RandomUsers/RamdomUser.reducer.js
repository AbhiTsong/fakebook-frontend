import { RandomUserTypes } from "./RandomUsers.Tyles";

const INITIAL_STATE = {
  loading: false,
  users: [],
  users2: [],
  users3: [],
  error: false,
};

function randomUsersReducer(state = INITIAL_STATE, { payload, type }) {
  switch (type) {
    case RandomUserTypes.GET_RANDOM_USER_START:
    case RandomUserTypes.GET_RANDOM_USER_START2:
    case RandomUserTypes.GET_RANDOM_USER_START3:
      return {
        ...state,
        loading: true,
      };

    case RandomUserTypes.GET_RANDOM_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        users: payload,
        error: false,
      };
    case RandomUserTypes.GET_RANDOM_USER_SUCCESS2:
      return {
        ...state,
        loading: false,
        users2: payload,
        error: false,
      };
    case RandomUserTypes.GET_RANDOM_USER_SUCCESS3:
      return {
        ...state,
        loading: false,
        users3: payload,
        error: false,
      };

    case RandomUserTypes.GET_RANDOM_USER_FAIL:
    case RandomUserTypes.GET_RANDOM_USER_FAIL2:
    case RandomUserTypes.GET_RANDOM_USER_FAIL3:
      return {
        ...state,
        loading: true,
        users: [],
        users2: [],
        users3: [],
        error: payload,
      };

    default:
      return state;
  }
}

export { randomUsersReducer };
