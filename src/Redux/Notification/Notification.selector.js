import { createSelector } from "reselect";

const noticeState = (state) => state.notification;

const noticeSelector = createSelector(noticeState, (msg) => msg);

export { noticeSelector };
