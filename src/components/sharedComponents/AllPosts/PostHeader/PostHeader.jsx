import React from "react";
import config from "../../../../config/config";
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

// Custom Hook
import { useOusideClick } from "../.././../../hooks/useOutsideClick";

function PostHeader({ post }) {
  // let ref = useRef(null);
  const loggedUser = useSelector(signInSelector);
  let { visible, setVisible, ref } = useOusideClick(false);

  // const [showEdit, setShowEdit] = useState(false);
  const { light } = useSelector(themeSelector);
  function handleEdit(e) {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    setVisible(pvSt => !pvSt);
  }

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
          <ThreeDots light={light} onClick={handleEdit}>
            ...
          </ThreeDots>
          {visible && (
            <div ref={ref}>
              <PostEditDrop id={post._id} />
            </div>
          )}
        </PostEditCOntainer>
      </NameAndDotContiner>
    </ImageInputContiner>
  );
}

export default PostHeader;
