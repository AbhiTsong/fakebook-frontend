import { HambugerTypes } from "./Hamburger.types";

const INITIAL_STATE = {
  show: false,
};

function hamburgerReducer(state = INITIAL_STATE, { type }) {
  switch (type) {
    case HambugerTypes.TOGGLE_HAMBURGER_MENU:
      return {
        ...state,
        show: !state.show,
      };

    default:
      return state;
  }
}

export { hamburgerReducer };
