import { createSelector } from "reselect";

const AuthState = (state) => state.auth;

const SignoutSelector = createSelector(AuthState, (auth) => auth);

export { SignoutSelector };
