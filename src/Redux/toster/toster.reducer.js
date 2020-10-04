import { TosterTypes } from "./toster.types";

const INITIAL_STATE = {
  show: false,
  content: "",
};

function tosterReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case TosterTypes.SHOW_TOSTER:
      return {
        ...state,
        show: true,
        content: action.payload,
      };

    case TosterTypes.CLOSE_TOSTER:
      return {
        ...state,
        show: false,
        content: "",
      };

    default:
      return state;
  }
}

export { tosterReducer };
