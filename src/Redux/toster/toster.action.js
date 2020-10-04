import { TosterTypes } from "./toster.types";

function showToster(mess) {
  return {
    type: TosterTypes.SHOW_TOSTER,
    payload: mess,
  };
}

function closeToster() {
  return {
    type: TosterTypes.CLOSE_TOSTER,
  };
}

export { showToster, closeToster };
