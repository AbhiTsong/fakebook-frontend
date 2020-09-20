import { createSelector } from "reselect";

const postData = (state) => state.post;

const postSelector = createSelector(postData, (post) => post);

let commentsSelector = createSelector(postSelector, (post) => post.allPosts.data);

export { postSelector, commentsSelector };
