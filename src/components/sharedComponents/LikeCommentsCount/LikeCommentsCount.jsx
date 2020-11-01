import React from "react";
import "./LikeCommentsCount.syles.js";

import Like from "../../../Assets/images/like2.png";

// styled imports
import {
  ReactionCount,
  ThumbsUpContainer,
  ThumbsUp,
  CommentPeople
} from "./LikeCommentsCount.syles"

function LikeCommentsCount({ like, comments }) {
  return (
    <ReactionCount>
      <ThumbsUpContainer
        className="Thumbs_Up_Container"
        role="img"
        aria-label="Post Reaction"
      >
        <ThumbsUp src={Like}  />
      </ThumbsUpContainer>
      {like}
      <CommentPeople>
        <span></span>
        <span>{comments.length} Comments</span>
      </CommentPeople>
    </ReactionCount>
  );
}

export default LikeCommentsCount;
