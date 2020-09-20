import React, { useState } from "react";
import "./LikesContainer.styles.scss";
import { useSelector, useDispatch } from "react-redux";

// Png Imports
import Share from "../../../Assets/images/share.png";
import Comment from "../../../Assets/images/comments.png";
import Like from "../../../Assets/images/like.png";

// Redux import
// import { updatePostAction } from "../../../Redux/Post/updatePostAction";
// import { postSelector } from "../../../Redux/Post/post.selector";
import { likeCommentAction } from "../../../Redux/Post/likeAction";
import { currentUser } from "../../../Redux/Auth/SignIn/SignIn.Selector";

function LikesContainer({ id, like }) {
  console.log(" like Container ---  ", like);
  const dispatch = useDispatch();
  const [likeCount, setLikeCount] = useState(like);
  // let post = useSelector(postSelector);

  let {
    user: { _id },
  } = useSelector(currentUser);

  function handleLike() {
    setLikeCount((pvSt) => pvSt + 1);
    dispatch(
      likeCommentAction({
        like: likeCount,
        id,
        userId: _id,
      })
    );
  }

  return (
    <div className="Like_Comment_Icons_Container">
      <span className="Icon_Container">
        <img
          onClick={handleLike}
          src={Like}
          className="Icon"
          alt="Comment Icon"
        />{" "}
        Like
      </span>
      <span className="Icon_Container">
        <img src={Comment} className="Icon" alt="Comment Icon" /> Comment
      </span>
      <span className="Icon_Container">
        <img src={Share} className="Icon" alt="Share Icon" /> Share
      </span>
    </div>
  );
}

export default LikesContainer;
