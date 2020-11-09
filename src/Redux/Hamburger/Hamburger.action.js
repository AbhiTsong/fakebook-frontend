import { HambugerTypes } from "./Hamburger.types";

function toggleHamburger(state) {
  return {
    type: HambugerTypes.TOGGLE_HAMBURGER_MENU,
    payload: state,
  };
}

export { toggleHamburger };
