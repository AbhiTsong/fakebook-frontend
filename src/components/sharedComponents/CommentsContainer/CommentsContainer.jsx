import React from "react";
import config from "../../../config/config.json";

// Styled Imports
import {
  IndiCommentContr,
  CommentCntr,
  UserProfilePIc,
  Comments,
  CommentPerson,
  PersonsComment,
} from "./CommentsContainer.Styled";

// Default Imports
import Default from "../../../Assets/images/default.png";

function CommentsContainer({ comments }) {
  return (
    <div>
      {comments.length === 0 ? "" : <p>{comments.length} comments</p>}
      {comments.map((comment, idx) => (
        <IndiCommentContr>
          <CommentCntr>
            <UserProfilePIc
              src={
                comment.hasAvatar
                  ? `${config.serverURL}/users/${comment.owner}/avatar`
                  : Default
              }
              alt="Creator Profile Pic"
            />
            <Comments>
              <CommentPerson className="Person">{comment.name}</CommentPerson>
              <PersonsComment className="Person_Comment">
                {comment.comment}
              </PersonsComment>
            </Comments>
          </CommentCntr>
        </IndiCommentContr>
      ))}
    </div>
  );
}

export default CommentsContainer;
