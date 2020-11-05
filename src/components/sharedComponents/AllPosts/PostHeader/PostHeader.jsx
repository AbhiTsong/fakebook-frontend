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
import { themeSelector } from "../../../../Redux/theme/theme.selector";

function PostHeader({ post }) {
  const loggedUser = useSelector(signInSelector);
  const [showEdit, setShowEdit] = useState(false);
  const { light } = useSelector(themeSelector);
  function handleEdit(e) {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    setShowEdit(!showEdit);
  }

  // Effect for editing the current post
  useEffect(() => {
    function closeEdit() {
      if (showEdit) {
        setShowEdit(false);
      }
    }
    window.addEventListener("click", closeEdit);
    return () => window.removeEventListener("click", closeEdit);
  }, [showEdit]);

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
              : `${config.serverURL}/users/${post.owner}/avatar`
            : Default
        }
        alt="Creator Profile Pic"
      />

      <NameAndDotContiner>
        <PostCreatorName light={light}>{post.creator}</PostCreatorName>
        <PostEditCOntainer>
          <ThreeDots light={light} onClick={handleEdit}>...</ThreeDots>
          {showEdit && <PostEditDrop id={post._id} />}
        </PostEditCOntainer>
      </NameAndDotContiner>
    </ImageInputContiner>
  );
}

export default PostHeader;
