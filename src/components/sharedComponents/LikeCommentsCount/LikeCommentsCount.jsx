import React from "react";
import "./LikeCommentsCount.syles.scss";

import Like from "../../../Assets/images/like2.png";

function LikeCommentsCount({ like, comments }) {
  return (
    <div className="Reaction_Count">
      <div
        className="Thumbs_Up_Container"
        role="img"
        aria-label="Post Reaction"
      >
        <img className="Thumbs_Up" src={Like} alt="Thumbs Up" />
      </div>
      {like}
      <div className="Comment_People">
        <span></span>
        <span>{comments.length} Comments</span>
      </div>
    </div>
  );
}

export default LikeCommentsCount;
