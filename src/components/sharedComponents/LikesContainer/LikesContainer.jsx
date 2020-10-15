import React, { useState, useEffect } from "react";
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
  const dispatch = useDispatch();
  const [likeCount, setLikeCount] = useState(like + 1);
  // let post = useSelector(postSelector);

  // useEffect(() => {
  //   setLikeCount(like + 1);
  // }, []);

  let { _id } = useSelector(currentUser);

  function handleLike(e) {
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
    alert("This Feture Is Under Going Construction");
  }

  return (
    <div className="Like_Comment_Icons_Container">
      <span onClick={handleLike} className="Icon_Container">
        <img src={Like} className="Icon" alt="Comment Icon" /> Like
      </span>
      <span className="Icon_Container">
        <img src={Comment} className="Icon" alt="Comment Icon" /> Comment
      </span>
      <span onClick={handleShare} className="Icon_Container">
        <img src={Share} className="Icon" alt="Share Icon" /> Share
      </span>
    </div>
  );
}

export default LikesContainer;
