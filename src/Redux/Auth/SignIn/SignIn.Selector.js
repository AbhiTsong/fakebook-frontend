import { createSelector } from "reselect";

const signInData = (state) => state.auth;

const signInSelector = createSelector(
  signInData,
  (userToken) => userToken.user
);

const currentUser = createSelector(signInSelector, (user) => user.data);


export { signInSelector, currentUser };
