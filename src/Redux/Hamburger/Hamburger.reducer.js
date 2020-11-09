import { HambugerTypes } from "./Hamburger.types";

const INITIAL_STATE = {
  show: false,
};

function hamburgerReducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case HambugerTypes.TOGGLE_HAMBURGER_MENU:
      return {
        show: payload,
      };

    default:
      return state;
  }
}

export { hamburgerReducer };
