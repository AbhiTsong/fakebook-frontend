import { createSelector } from "reselect";

const postData = (state) => state.post;

const postSelector = createSelector(postData, (post) => post);

let commentsSelector = createSelector(
  postSelector,
  (post) => post.allPosts.data
);

let currentPostIDSelector = createSelector(
  postSelector,
  (post) => post.currentPostID
);

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


// a = [{a:"a"}, {b:"b"}, {c:"c"}, {d:"d"}, {e:"e"}, {f:"f"}]