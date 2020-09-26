import React from "react";
import "./PostForm.Styles.scss";
import { useSelector, useDispatch } from "react-redux";

// Icons Import
// import Camera from "../../../Assets/images/camera.png"

// Child Components
import HorizontalLine from "../HorizontalLine/HorizontalLine";

// Shared Components
import Modal from "../Modals/Model.Component";
import FileUploader from "../FileUploader/FileUploader.Component";
import UserProfilePic from "../../sharedComponents/UserProfilePic/UserProfilePic";

// Icom Image Import
import VideoCamera from "../../../Assets/images/video.png";
import Smile from "../../../Assets/images/smile.png";

// Redux Import
// import { postSelector } from "../../../Redux/Post/post.selector";
import { modalSelector } from "../../../Redux/Modal/ModalSelector";
import { ShowModal } from "../../../Redux/Modal/ModalAction";

let createPostInput = "What is on your mind Abhi??";
// Componetnt Code
function PostFormComponent() {
  // Redux State Change
  const modalState = useSelector(modalSelector);
  const dispatch = useDispatch();
  // const postText = useSelector(postSelector);

  const handleModal = () => {
    dispatch(ShowModal("CREATE_POST"));
  };

  return (
    <div className="FormConatiner">
      {/* Image And Input  */}
      <div className="Image_Input_Container">
        <div className="Form_Pic_Container">
          <UserProfilePic />
        </div>
        <form className="Post_Form_Container">
          <input
            className="Post_Form"
            type="text"
            placeholder={createPostInput}
            onClick={handleModal}
          />
        </form>
        {/* {modalState.show && <Modal header1="Create Post" />} */}
      </div>
      <HorizontalLine />
      {/*Opens the modal to create the post */}
      <div className="FeelingAndVideoContainer">
        <span className="Icon_And_Text" onClick={handleModal}>
          <div className="Icon_Conatiner">
            <img className="Icon_Content" src={VideoCamera} alt="Video Icon" />
          </div>
          <h5 className="Icon_Text">Live Video</h5>
        </span>
        {/* Photo Upload */}
        <FileUploader />
        <h5 className="Icon_Text_Camera">Photo/Video</h5>
        {/* Opens the modal to create the post */}
        <span className="Icon_And_Text" onClick={handleModal}>
          <div className="Icon_Conatiner">
            <img className="Icon_Content" src={Smile} alt="Smile Icon" />
          </div>
          <h5 className="Icon_Text">Feeling</h5>
        </span>
      </div>
    </div>
  );
}

export default PostFormComponent;
