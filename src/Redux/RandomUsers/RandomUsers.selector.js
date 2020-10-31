import { createSelector } from "reselect";

let randomUsers = (state) => state.randomUser;

const randomSelector = createSelector(randomUsers, (user) => user);

export { randomSelector };
