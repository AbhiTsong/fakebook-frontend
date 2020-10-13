import { createSelector } from "reselect";

const messageState = (state) => state.message;

const messageSelector = createSelector(messageState, (msg) => msg);

export { messageSelector };
