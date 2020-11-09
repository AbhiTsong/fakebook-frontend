import React, { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Styled Imports
import { ModalContainer } from "./Modal.Styles";

// Redux Imports
import { postSelector } from "../../../Redux/Post/post.selector";
import { modalSelector } from "../../../Redux/Modal/ModalSelector";
import { themeSelector } from "../../../Redux/theme/theme.selector";
import { CloseModal } from "../../../Redux/Modal/ModalAction";

// Shared Components
import CreatePostComponent from "../../sharedComponents/CreatePost/CreatePost.Component";
import UserProfilePicSuggest from "../../sharedComponents/UserProfilePicSuggest/UserProfilePicSuggest";
import PicCropper from "../../sharedComponents/PicCropper/PicCropper";
import CoverPicPreview from "../CoverPreview/CoverPicPreview";
import EditCurrentPost from "../EditCurrentPost/EditCurrentPost";
import DeleteCurrentPost from "../DeleteCurrentPost/DeleteCurrentPost";
import SignUpComponent from "../../SignUp/SignUp.Component";
import FriendRequests from "../FriendRequestsAll/FriendRequestsAll";

function Modal() {
  let ref = useRef(null);
  const dispatch = useDispatch();
  let { light } = useSelector(themeSelector);
  let postPath = useSelector(postSelector);
  let { show, content } = useSelector(modalSelector);
  let path = postPath.photoPath;

  // Effect For Closing the Modal On Outside Click
  useEffect(() => {
    function closeSettings(event) {
      if (show && ref.current && !ref.current.contains(event.target)) {
        dispatch(CloseModal());
      }
    }

    window.addEventListener("click", closeSettings, true);
    return () => window.removeEventListener("click", closeSettings, true);
  }, [dispatch, ref, show]);

  return (
    <ModalContainer light={light}>
      <div ref={ref}>
        {content === "SIGN_UP_USER" && <SignUpComponent />}
        {content === "SHOW_PHOTO_FORM" && <UserProfilePicSuggest />}
        {content === "CREATE_POST" && <CreatePostComponent path={path} />}
        {content === "ADD_NEW_PROFILE_PIC" && <PicCropper />}
        {content === "CHANGE_USER_COVER" && <CoverPicPreview />}
        {content === "EDIT_CURRENT_POST" && <EditCurrentPost />}
        {content === "DELETE_CURRENT_POST" && <DeleteCurrentPost />}
        {content === "FRIEND_REQUESTS" && <FriendRequests />}
      </div>
    </ModalContainer>
  );
}
// }

export default Modal;
