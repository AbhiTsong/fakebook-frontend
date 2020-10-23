import { HambugerTypes } from "./Hamburger.types";

function toggleHamburger() {
  return {
    type: HambugerTypes.TOGGLE_HAMBURGER_MENU,
  };
}

export { toggleHamburger };
