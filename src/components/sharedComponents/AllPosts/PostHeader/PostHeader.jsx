import React, { useState, useEffect } from "react";
import config from "../../../../config/config.json";
import { useSelector } from "react-redux";

// Styled Import
import {
  ImageInputContiner,
  UserProfilePic,
  NameAndDotContiner,
  PostCreatorName,
  PostEditCOntainer,
  ThreeDots,
} from "./PostHeader.Style";

// Shared Compoenet
import PostEditDrop from "../PostEditDrop/PostEditDrop";

// Redux Import
import { signInSelector } from "../../../../Redux/Auth/SignIn/SignIn.Selector";

// Default Profile Pic
import Default from "../../../../Assets/images/default.png";

function PostHeader({ post }) {
  // const showEditDrop = useSelector(editDropSelector);
  const loggedUser = useSelector(signInSelector);

  console.log(loggedUser);
  const [showEdit, setShowEdit] = useState(false);
  function handleEdit(e) {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    setShowEdit(true);
  }

  // Effect for editing the current post
  useEffect(() => {
    function closeEdit() {
      setShowEdit(false);
    }
    window.addEventListener("click", closeEdit);
    return () => window.removeEventListener("click", closeEdit);
  }, []);

  let random = JSON.parse(window.sessionStorage.getItem("randomPic"));

  return (
    <ImageInputContiner>
      <UserProfilePic
        className="UserProfilePic"
        src={
          post.hasAvatar
            ? post.owner === loggedUser.user._id
              ? random
                ? random
                : `${config.serverURL}/users/${post.owner}/avatar`
              : ""
            : Default
        }
        alt="Creator Profile Pic"
      />

      <NameAndDotContiner>
        <PostCreatorName>{post.creator}</PostCreatorName>
        <PostEditCOntainer>
          <ThreeDots onClick={handleEdit}>...</ThreeDots>
          {showEdit && <PostEditDrop id={post._id} />}
        </PostEditCOntainer>
      </NameAndDotContiner>
    </ImageInputContiner>
  );
}

export default PostHeader;
