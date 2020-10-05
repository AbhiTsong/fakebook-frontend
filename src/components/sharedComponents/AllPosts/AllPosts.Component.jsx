import React, { useEffect } from "react";

// Redux Imports
import { useSelector, useDispatch } from "react-redux";
import { fetchAllPosts } from "../../../Redux/Post/fetchPosts.actions";
import { postSelector } from "../../../Redux/Post/post.selector";
import "./AllPosts.Styles.scss";

// Component Imports
import PhotoPost from "./PhotoPost/PhotoPost.Component";
import LikesContainer from "../LikesContainer/LikesContainer";
import LikeCommentsCount from "../../sharedComponents/LikeCommentsCount/LikeCommentsCount";
import CommentsContainer from "../../sharedComponents/CommentsContainer/CommentsContainer";
import AddComment from "../../sharedComponents/AddComment/AddComment";
import PostHeader from "./PostHeader/PostHeader";
import Skeleton from "../../Skeleton/AllPostsSkeleton/Skeleton";

function AllPostsComponent() {
  const dispatch = useDispatch();
  let allPost = useSelector(postSelector);

  useEffect(() => {
    dispatch(fetchAllPosts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  if (allPost.loading) {
    return [...Array(10).keys()].map((e, idx) => <Skeleton key={e + idx} />);
  }

  if (allPost.allPosts.data === "") {
    return "No Posts In The DataBase";
  }

  return (
    <div className="All_Post_Container">
      {allPost.allPosts.data &&
        allPost.allPosts.data
          .map((post, idx) => (
            <div key={post + idx} className="Single_Post_Container">
              <PostHeader post={post} />
              <div className="Single_Post_Content">
                {post.photo !== null ? (
                  <PhotoPost post={post} />
                ) : (
                  <div className="Center_Post_Text">
                    <p className="Single_Post_Text">{post.description}</p>
                  </div>
                )}
              </div>
              <div className="Comments_Container">
                {/* Likes And Comments Count */}
                <LikeCommentsCount like={post.like} comments={post.comments} />
                {/* Like Comments Container */}
                <LikesContainer id={post._id} like={post.like} />

                <CommentsContainer comments={post.comments} />
                <AddComment id={post._id} />
              </div>
            </div>
          ))
          .reverse()}
    </div>
  );
}

export default AllPostsComponent;
