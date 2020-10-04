import { createSelector } from "reselect";

const tostState = (state) => state.tost;

const tostSelector = createSelector(tostState, (tost) => tost);


export { tostSelector };
