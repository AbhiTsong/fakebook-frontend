import { WarningActionTYpes } from "./Warning.Types";

const INITIAL_STATE = {
  show: false,
};

function warningReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case WarningActionTYpes.SHOW_WARNING_BOX:
      return {
        ...state,
        show: true,
      };

    case WarningActionTYpes.CLOSE_WARNING_BOX:
      return {
        ...state,
        show: false,
      };

    default:
      return state;
  }
}

export { warningReducer };
