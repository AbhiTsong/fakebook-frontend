import { createSelector } from "reselect";

let newUser = (state) => state.user;

let newUserSelector = createSelector(newUser, (user) => user.newUser);

export { newUserSelector };
