import { messageTypes } from "./Message.types";

const INITIAL_STATE = {
  showMessage: "",
};

function messageReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case messageTypes.MESSAGE_TOGGLE:
      return {
        ...state,
        showMessage: action.payload,
      };

    default:
      return state;
  }
}

export { messageReducer };
