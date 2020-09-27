import { createSelector } from "reselect";

const friendsState = (state) => state.friends;

const friendsSelector = createSelector(friendsState, (friends) => friends);

export { friendsSelector };
