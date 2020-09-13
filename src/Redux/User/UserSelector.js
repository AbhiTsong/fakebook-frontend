import { createSelector } from "reselect";

const userData = (state) => state.user;

const userSelector = createSelector(userData, (user) => user);

export { userSelector };
