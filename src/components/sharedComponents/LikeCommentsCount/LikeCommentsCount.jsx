import React from "react";
import { useSelector } from "react-redux";
import "./LikeCommentsCount.syles.js";

import Like from "../../../Assets/images/like2.png";

// Redux Import
import { themeSelector } from "../../../Redux/theme/theme.selector.js";

// styled imports
import {
  ReactionCount,
  ThumbsUpContainer,
  ThumbsUp,
  CommentPeople,
} from "./LikeCommentsCount.syles";

function LikeCommentsCount({ like, comments }) {
  let { light } = useSelector(themeSelector);
  return (
    <ReactionCount light={light}>
      <ThumbsUpContainer
        className="Thumbs_Up_Container"
        role="img"
        aria-label="Post Reaction"
      >
        <ThumbsUp src={Like} />
      </ThumbsUpContainer>
      {like}
      <CommentPeople>
        <span></span>
        <span>{comments.length} Comments</span>
      </CommentPeople>
    </ReactionCount>
  );
}

export default React.memo(LikeCommentsCount);
