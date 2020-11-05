import React, { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

// Styled Imports
import {
  AddPostContainer,
  SinglePostContainer,
  PostEndTxtCntr,
  PaginatingBtns,
  PaginatingBtnCntr,
  SinglePostContent,
  CenterPostText,
  SinglrPostText,
  CommentContainer,
} from "./AddPost.Styles";

// Redux Imports
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
import { themeSelector } from "../../../Redux/theme/theme.selector";

function AllPostsComponent() {
  const dispatch = useDispatch();
  const [allPosts, setAllPosts] = useState([]);
  const [limit, setLimit] = useState(30);
  const [skip, setSkip] = useState(0);
  let { light } = useSelector(themeSelector);
  let allPost = useSelector(postSelector);

  useEffect(() => {
    dispatch(fetchAllPosts({ skip: skip, limit: limit }));
  }, [dispatch, skip, limit]);
  // eslint-disable-next-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (allPost.allPosts.data && allPost.allPosts.data) {
      setAllPosts((prevData) => [...allPost.allPosts.data]);
    }
  }, [allPost.allPosts.data]);

  const handelMore = useCallback(
    function () {
      setSkip((pv) => pv + 30);
      setLimit((pv) => pv + 0);
      dispatch(fetchAllPosts({ skip: skip, limit: limit }));
    },
    [dispatch, limit, skip]
  );

  const handelLess = useCallback(
    function () {
      setSkip((pv) => pv - 30);
      setLimit((pv) => pv - 0);
      dispatch(fetchAllPosts({ skip: skip, limit: limit }));
    },
    [dispatch, limit, skip]
  );

  const handleLastMore = () => {
    setSkip((pv) => pv - 30);
  };

  // if (true) {
  if (allPost.loading) {
    return [...Array(10).keys()].map((e, idx) => <Skeleton key={e + idx} />);
  }

  return (
    <AddPostContainer>
      {allPosts
        .map((post, idx) => (
          <SinglePostContainer light={light} key={post + idx}>
            <PostHeader post={post} />
            <HorizontalLine />
            <SinglePostContent>
              {post.photo !== null ? (
                <PhotoPost post={post} />
              ) : (
                <CenterPostText>
                  <SinglrPostText light={light}>
                    {post.description}
                  </SinglrPostText>
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

      {allPost.allPosts.data === "" && (
        <PostEndTxtCntr>"No Post In the Data Base"</PostEndTxtCntr>
      )}

      <PaginatingBtnCntr>
        {allPost.allPosts.data !== "" ? (
          <>
            {skip > 0 && (
              <PaginatingBtns
                onClick={handelLess}
              >{`< Previous`}</PaginatingBtns>
            )}
            <PaginatingBtns onClick={handelMore}>{`Next >`}</PaginatingBtns>
          </>
        ) : (
          <PaginatingBtns
            onClick={handleLastMore}
          >{`< Previous`}</PaginatingBtns>
        )}
      </PaginatingBtnCntr>
    </AddPostContainer>
  );
}

export default React.memo(AllPostsComponent);
