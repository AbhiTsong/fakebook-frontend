import { createSelector } from "reselect";

const settingsState = (state) => state.settings;

const settingsSelector = createSelector(
  settingsState,
  (sett) => sett
);

export { settingsSelector };
