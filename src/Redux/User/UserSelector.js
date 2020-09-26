import { createSelector } from "reselect";

const userData = (state) => state.user;

const userSelector = createSelector(userData, (user) => user);

const allUsers = createSelector(userSelector, (user) => user.allUsers);

export { userSelector, allUsers };
