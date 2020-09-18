import React from "react";
import "./LikesContainer.styles.scss";
import { useSelector, useDispatch } from "react-redux";

// Png Imports
import Share from "../../../Assets/images/share.png";
import Comment from "../../../Assets/images/comments.png";
import Like from "../../../Assets/images/like.png";

// Redux import
import { updatePostAction } from "../../../Redux/Post/updatePostAction";
import { postSelector } from "../../../Redux/Post/post.selector";

function LikesContainer({ id, like }) {
  const dispatch = useDispatch();
  // let post = useSelector(postSelector);

  function handleLike() {
    // console.log("Yooo ---- > ", id)
    console.log("Like Container", like);
    dispatch(
      updatePostAction({
        like: like + 1,
        id,
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
