import React from "react";
import "./PostForm.Styles.scss";
import { useSelector, useDispatch } from "react-redux";

// Child Components
import HorizontalLine from "../HorizontalLine/HorizontalLine";
import LOgo from "../../../Assets/images/IMG-20190106-WA0001.jpg";

// Shared Components
import Modal from "../Modals/Model.Component";
import FileUploader from "../FileUploader/FileUploader.Component";

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
        <img className="UserProfilePic" src={LOgo} alt="User Pic" />
        <form className="Post_Form_Container">
          <input
            className="Post_Form"
            type="text"
            placeholder={createPostInput}
            onClick={handleModal}
          />
        </form>
        {modalState.show && <Modal header1="Create Post" />}
      </div>
      <HorizontalLine />
      {/*Opens the modal to create the post */}
      <div className="FeelingAndVideoContainer">
        <span
          onClick={handleModal}
          className="Activity_Icons"
          role="img"
          aria-label="Live Video"
        >
          &#127909; <span className="Activity_Text">Live Video</span>
        </span>
        {/* Photo Upload */}
        <FileUploader />
        {/* Opens the modal to create the post */}
        <span
          onClick={handleModal}
          className="Activity_Icons"
          role="img"
          aria-label="Live Video"
        >
          &#128512; <span className="Activity_Text">Feeling/Activity</span>
        </span>
      </div>
    </div>
  );
}

export default PostFormComponent;
