import { createSelector } from "reselect";

const themeState = (state) => state.theme;

const themeSelector = createSelector(themeState, (theme) => theme);

export { themeSelector };
