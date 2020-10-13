import { settingsTypes } from "./ShowSettings.types";

function settingsAction(show) {
  return {
    type: settingsTypes.SETTINGS_TOGGLE,
    payload: show,
  };
}

export { settingsAction };
