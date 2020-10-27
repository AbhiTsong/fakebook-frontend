import React, { useEffect } from "react";

// Styled Imports
import {
  AddPostContainer,
  SinglePostContainer,
  SinglePostContent,
  CenterPostText,
  SinglrPostText,
  CommentContainer,
} from "./AddPost.Styles";

// Redux Imports
import { useSelector, useDispatch } from "react-redux";
import { fetchAllPosts } from "../../../Redux/Post/fetchPosts.actions";
import { postSelector } from "../../../Redux/Post/post.selector";

// Component Imports
import PhotoPost from "./PhotoPost/PhotoPost.Component";
import LikesContainer from "../LikesContainer/LikesContainer";
import LikeCommentsCount from "../../sharedComponents/LikeCommentsCount/LikeCommentsCount";
import CommentsContainer from "../../sharedComponents/CommentsContainer/CommentsContainer";
import AddComment from "../../sharedComponents/AddComment/AddComment";
import PostHeader from "./PostHeader/PostHeader";
import Skeleton from "../../Skeleton/AllPostsSkeleton/Skeleton";
import HorizontalLine from "../HorizontalLine/HorizontalLine";

function AllPostsComponent() {
  const dispatch = useDispatch();
  let allPost = useSelector(postSelector);

  useEffect(() => {
    dispatch(fetchAllPosts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (allPost.loading) {
    return [...Array(10).keys()].map((e, idx) => <Skeleton key={e + idx} />);
  }

  if (allPost.allPosts.data === "") {
    return "No Posts In The DataBase";
  }

  return (
    <AddPostContainer>
      {allPost.allPosts.data &&
        allPost.allPosts.data
          .map((post, idx) => (
            <SinglePostContainer key={post + idx}>
              <PostHeader post={post} />
              <HorizontalLine />
              <SinglePostContent>
                {post.photo !== null ? (
                  <PhotoPost post={post} />
                ) : (
                  <CenterPostText>
                    <SinglrPostText>{post.description}</SinglrPostText>
                  </CenterPostText>
                )}
              </SinglePostContent>
              <CommentContainer>
                {/* Likes And Comments Count */}
                <LikeCommentsCount like={post.like} comments={post.comments} />
                {/* Like Comments Container */}
                <LikesContainer id={post._id} like={post.like} />

                <CommentsContainer comments={post.comments} />
                <AddComment id={post._id} />
              </CommentContainer>
            </SinglePostContainer>
          ))
          .reverse()}
    </AddPostContainer>
  );
}

export default AllPostsComponent;
