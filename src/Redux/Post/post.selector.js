import { createSelector } from "reselect";

const postData = (state) => state.post;

const postSelector = createSelector(postData, (post) => post);

// Comments Selector
let commentsSelector = createSelector(
  postSelector,
  (post) => post.allPosts.data
);

// Post ID Selector
let currentPostIDSelector = createSelector(
  postSelector,
  (post) => post.currentPostID
);

// Seleting Array Of Posts
let allPostsSelector = createSelector(
  postSelector,
  (post) => post.allPosts.data
);

export {
  postSelector,
  commentsSelector,
  currentPostIDSelector,
  allPostsSelector,
};
