import { createSelector } from "reselect";

const signInData = (state) => state.auth;

const signInSelector = createSelector(
  signInData,
  (userToken) => userToken
);

const currentUser = createSelector(signInSelector, (user) => user);


export { signInSelector, currentUser };
