import React, { useEffect, useState } from "react";

// Redux Imports
import { useSelector, useDispatch } from "react-redux";
import { fetchAllPosts } from "../../../Redux/Post/fetchPosts.actions";
import { postSelector } from "../../../Redux/Post/post.selector";

function AllPostsComponent() {
  const dispatch = useDispatch();
  let allPost = useSelector(postSelector);
  let [posts, setPosts] = useState([]);

  useEffect(() => {
    dispatch(fetchAllPosts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!allPost.loading && allPost.allPosts) {
      setPosts(allPost.allPosts.data);
    }
  }, []);

  return <div>{posts.map((post) => console.log(post))}</div>;
}

export default AllPostsComponent;
