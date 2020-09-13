import { createSelector } from "reselect";

const warningState = (state) => state.warning;

const warningSelector = createSelector(warningState, (warning) => warning);

export { warningSelector };
