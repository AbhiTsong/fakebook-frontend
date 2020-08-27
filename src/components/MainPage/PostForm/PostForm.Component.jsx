import React from "react";
import "./PostForm.Styles.scss";
import { useSelector, useDispatch } from "react-redux";

// Child Components
import HorizontalLine from "../../sharedComponents/HorizontalLine/HorizontalLine";
import LOgo from "../../../Assets/images/IMG-20190106-WA0001.jpg";

// Shared Components
import Modal from "../../sharedComponents/Modals/Model.Component";

// Redux Import
import { modalSelector } from "../../../Redux/Modal/ModalSelector";
import { ShowModal } from "../../../Redux/Modal/ModalAction";

function PostFormComponent() {
  // Redux State Change
  const modalState = useSelector(modalSelector);
  const dispatch = useDispatch();

  const handleModal = () => {
    dispatch(ShowModal());
  };

  return (
    <div className="FormConatiner">
      {/* Image And Input  */}
      <div className="Image_Input_Container">
        <img className="UserProfilePic" src={LOgo} alt="User Pic" />
        <form>
          <input
            className="Post_Form"
            type="text"
            placeholder="What is on your mind Abhi?"
            // disabled
            onClick={handleModal}
          />
        </form>
        {modalState.show && <Modal showForm="AddPost" header1="Create Post" />}
      </div>
      <HorizontalLine />
      {/* Icons For Showing Videos Camers etc... */}
      <div className="FeelingAndVideoContainer">
        <span className="Activity_Icons" role="img" aria-label="Live Video">
          &#127909; <span className="Activity_Text">Live Video</span>
        </span>
        <span className="Activity_Icons" role="img" aria-label="Live Video">
          &#128248; <span className="Activity_Text">Photo/Video</span>
        </span>
        <span className="Activity_Icons" role="img" aria-label="Live Video">
          O <span className="Activity_Text">Feeling/Activity</span>
        </span>
      </div>
    </div>
  );
}

export default PostFormComponent;