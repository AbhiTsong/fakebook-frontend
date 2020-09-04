import React, { useEffect } from "react";
import "./PostForm.Styles.scss";
import { useSelector, useDispatch } from "react-redux";

// Child Components
import HorizontalLine from "../../sharedComponents/HorizontalLine/HorizontalLine";
import LOgo from "../../../Assets/images/IMG-20190106-WA0001.jpg";

// Shared Components
import Modal from "../../sharedComponents/Modals/Model.Component";
import FileUploader from "../../sharedComponents/FileUploader/FileUploader.Component";

// Redux Import
import { postSelector } from "../../../Redux/Post/post.selector";
import { modalSelector } from "../../../Redux/Modal/ModalSelector";
import { ShowModal } from "../../../Redux/Modal/ModalAction";

let createPostInput;
// Componetnt Code
function PostFormComponent() {
  // Redux State Change
  const modalState = useSelector(modalSelector);
  const dispatch = useDispatch();
  const postText = useSelector(postSelector);

  const handleModal = () => {
    dispatch(ShowModal());
  };

  useEffect(() => {
    if (!postText.loading && postText.post !== "") {
      createPostInput = postText.post;
    } else {
      createPostInput = "What Is On Your Mind Abhi???";
    }
  }, [postText.loading, postText.post]);

  return (
    <div className="FormConatiner">
      {/* Image And Input  */}
      <div className="Image_Input_Container">
        <img className="UserProfilePic" src={LOgo} alt="User Pic" />
        <form>
          <input
            className="Post_Form"
            type="text"
            placeholder={createPostInput}
            onClick={handleModal}
          />
        </form>
        {modalState.show && <Modal showForm="AddPost" header1="Create Post" />}
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
