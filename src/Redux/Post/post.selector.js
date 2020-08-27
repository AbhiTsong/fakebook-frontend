import { createSelector } from "reselect";

const postData = (state) => state.post;

const postSelector = createSelector(postData, (post) => post);

export { postSelector };
