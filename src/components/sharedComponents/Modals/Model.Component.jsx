import React from "react";
import "./Model.Styles.scss";

// Redux Imports
import { useSelector } from "react-redux";
import { postSelector } from "../../../Redux/Post/post.selector";
import { modalSelector } from "../../../Redux/Modal/ModalSelector";

// Shared Components
import CreatePostComponent from "../../sharedComponents/CreatePost/CreatePost.Component";
import UserProfilePicSuggest from "../../sharedComponents/UserProfilePicSuggest/UserProfilePicSuggest";
import PicCropper from "../../sharedComponents/PicCropper/PicCropper";
import CoverPicPreview from "../CoverPreview/CoverPicPreview";
import EditCurrentPost from "../EditCurrentPost/EditCurrentPost";
import DeleteCurrentPost from "../DeleteCurrentPost/DeleteCurrentPost";
import PleaseAuth from "../PleaseAuth/PleaseAuth";
import SignUpComponent from "../../SignUp/SignUp.Component";
import FriendRequests from "../FriendRequestsAll/FriendRequestsAll";


function Modal(props) {
  let postPath = useSelector(postSelector);
  let modalContent = useSelector(modalSelector);
  let path = postPath.photoPath;

  return (
    <div className="modal">
      {modalContent.content === "SIGN_UP_USER" && <SignUpComponent />}
      {modalContent.content === "SHOW_PHOTO_FORM" && <UserProfilePicSuggest />}
      {modalContent.content === "CREATE_POST" && (
        <CreatePostComponent path={path} />
      )}
      {modalContent.content === "ADD_NEW_PROFILE_PIC" && <PicCropper />}
      {modalContent.content === "CHANGE_USER_COVER" && <CoverPicPreview />}
      {modalContent.content === "EDIT_CURRENT_POST" && <EditCurrentPost />}
      {modalContent.content === "DELETE_CURRENT_POST" && <DeleteCurrentPost />}
      {modalContent.content === "PLEASE_AUTH" && <PleaseAuth />}
      {modalContent.content === "FRIEND_REQUESTS" && <FriendRequests />}
    </div>
  );
}
// }

export default Modal;
