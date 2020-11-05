import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// Styled Imports
import {
  LikeContainer,
  CommentIconCntr,
  ContainerIcn,
} from "./LikesContainer.styles";

// Png Imports
import Share from "../../../Assets/images/share.png";
import Comment from "../../../Assets/images/comments.png";
import Like from "../../../Assets/images/like.png";

// Redux import
import { likeCommentAction } from "../../../Redux/Post/likeAction";
import { currentUser } from "../../../Redux/Auth/SignIn/SignIn.Selector";
import { showToster } from "../../../Redux/toster/toster.action";
import { themeSelector } from "../../../Redux/theme/theme.selector";

function LikesContainer({ id, like }) {
  const dispatch = useDispatch();
  const { light } = useSelector(themeSelector);
  const [likeCount, setLikeCount] = useState(like + 1);

  let { _id } = useSelector(currentUser);

  function handleLike(e) {
    e.preventDefault();
    setLikeCount((pvCount) => pvCount + 1);

    if (likeCount > like) {
      dispatch(
        likeCommentAction({
          like: likeCount,
          id,
          userId: _id,
        })
      );
    }
  }

  function handleShare() {
    dispatch(showToster("This Feture Is Under Going Construction"));
  }

  return (
    <LikeContainer light={light}>
      <CommentIconCntr onClick={handleLike}>
        <ContainerIcn src={Like} /> Like
      </CommentIconCntr>
      <CommentIconCntr>
        <ContainerIcn src={Comment} /> Comment
      </CommentIconCntr>
      <CommentIconCntr onClick={handleShare}>
        <ContainerIcn src={Share} /> Share
      </CommentIconCntr>
    </LikeContainer>
  );
}

export default LikesContainer;
