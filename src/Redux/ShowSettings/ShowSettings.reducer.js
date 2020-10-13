import { settingsTypes } from "./ShowSettings.types";

const INITIAL_STATE = {
  showSettings: "",
};

function settingsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case settingsTypes.MESSAGE_TOGGLE:
      return {
        ...state,
        showSettings: action.payload,
      };

    default:
      return state;
  }
}

export { settingsReducer };
