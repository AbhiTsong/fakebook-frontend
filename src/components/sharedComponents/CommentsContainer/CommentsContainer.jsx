import React from "react";
import "./CommentsContainer.styles.scss";
import config from "../../../config/config.json";

// Default Imports
import Default from "../../../Assets/images/default.png";

function CommentsContainer({ comments }) {
  return (
    <div className="All_Comments_Container">
      {comments.length === 0 ? "" : <p>{comments.length} comments</p>}
      {comments.map((comment, idx) => (
        <div key={idx} className="Individual_Comment_Container">
          <div className="Comments_Cotent">
            <img
              className="UserProfilePic"
              src={
                comment.hasAvatar
                  ? `${config.serverURL}/users/${comment.owner}/avatar`
                  : Default
              }
              alt="Creator Profile Pic"
            />
            <div className="Comment">
              <p className="Person">{comment.name}</p>
              <p className="Person_Comment">{comment.comment}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CommentsContainer;
