import React, { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";

// Styled Imports
import { ModalContainer } from "./Modal.Styles";

// Redux Imports
import { useSelector } from "react-redux";
import { postSelector } from "../../../Redux/Post/post.selector";
import { modalSelector } from "../../../Redux/Modal/ModalSelector";
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

function Modal(props) {
  let ref = useRef();
  let postPath = useSelector(postSelector);
  let modalContent = useSelector(modalSelector);
  let path = postPath.photoPath;
  const dispatch = useDispatch();



  return (
    <ModalContainer>
      {modalContent.content === "SIGN_UP_USER" && <SignUpComponent />}
      {modalContent.content === "SHOW_PHOTO_FORM" && <UserProfilePicSuggest />}
      {modalContent.content === "CREATE_POST" && (
        <CreatePostComponent path={path} />
      )}
      {modalContent.content === "ADD_NEW_PROFILE_PIC" && <PicCropper />}
      {modalContent.content === "CHANGE_USER_COVER" && <CoverPicPreview />}
      {modalContent.content === "EDIT_CURRENT_POST" && <EditCurrentPost />}
      {modalContent.content === "DELETE_CURRENT_POST" && <DeleteCurrentPost />}
      {modalContent.content === "FRIEND_REQUESTS" && <FriendRequests />}
    </ModalContainer>
  );
}
// }

export default Modal;
