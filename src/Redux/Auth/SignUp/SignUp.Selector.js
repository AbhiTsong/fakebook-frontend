import { createSelector } from "reselect";

let newUser = (state) => state.auth;

let signUpSelector = createSelector(newUser, (user) => user);

let requestSent = createSelector(
  signUpSelector,
  (user) => user.user.data.user.friendRequestsSent
);

export { signUpSelector, requestSent };
