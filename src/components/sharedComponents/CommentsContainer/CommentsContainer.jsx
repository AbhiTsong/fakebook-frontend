import React from "react";
import "./CommentsContainer.styles.scss";
import config from "../../../config/config.json";
import { useDispatch, useSelector } from "react-redux";

// Redux Import
import { commentsSelector } from "../../../Redux/Post/post.selector";

function CommentsContainer({ comments }) {
  // const comments = useSelector(commentsSelector);

  return (
    <div className="All_Comments_Container">
      {comments.length === 0 ? "" : <p>{comments.length} comments</p>}
      {comments.map((comment, idx) => (
        <div key={idx} className="Individual_Comment_Container">
          <div className="Comments_Cotent">
            <img
              className="UserProfilePic"
              src={`${config.serverURL}/users/${comment.owner}/avatar`}
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
