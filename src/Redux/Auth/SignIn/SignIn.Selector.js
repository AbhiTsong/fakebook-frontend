import { createSelector } from "reselect";

const signInData = (state) => state.user;

const signInSelector = createSelector(
  signInData,
  (userToken) => userToken.data
);

export { signInSelector };
