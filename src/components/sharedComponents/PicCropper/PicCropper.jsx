import React, { useEffect } from "react";
import "./PicCropper.styles.scss";

// Redux Import
import { useSelector, useDispatch } from "react-redux";
import { warningSelector } from "../../../Redux/Warning/Warning.Selector";
import { ShowWarning } from "../../../Redux/Warning/Warning.Action";
import { userSelector } from "../../../Redux/User/UserSelector";
import { createUserAvatarAction } from "../../../Redux/User/createProfilePic.Action";

// Shared Compoent
import CloseModalIcon from "../CloseModalIcon/CloseModalIcon";
import HorizontalLine from "../../sharedComponents/HorizontalLine/HorizontalLine";
import Warning from "../Warning/Warning";
import { CloseModal } from "../../../Redux/Modal/ModalAction";

function PicCropper(props) {
  const dispatch = useDispatch();
  const warningState = useSelector(warningSelector);
  const user = useSelector(userSelector);

  useEffect(() => {
      // eslint-disable-next-line no-unused-expressions
      user.created ? dispatch(CloseModal()) : ""
  }, [dispatch, user.created]);

  // Functon For Cancaling adding new profile pic
  function handleCancle(e) {
    e.preventDefault();
    dispatch(ShowWarning());
  }

  // Function for adding a new profile pic
  function handleAddProfilePic(e) {
    e.preventDefault();
    let formData = new FormData();
    formData.append("avatar", user.profilePath[1]);
    dispatch(createUserAvatarAction(formData));
  }

  return (
    <div className="Pic_Cropper_Container">
      <div className="Header_Container">
        <div className="Header_Content">
          <h4 className="Header_Title">Update Profile Pic</h4>
        </div>
        <div className="Close_Button_Container">
          <CloseModalIcon />
        </div>
      </div>
      <HorizontalLine />
      <div className="Pic_Preview_Container">
        <div className="Pic_Preview_Content">
          {/* <RemoveImage /> */}
          <img
            className="Post_Pic"
            src={user.profilePath[0]}
            alt="File To Upload"
          />
        </div>
      </div>
      <HorizontalLine />
      <footer className="Footer_Container">
        <button onClick={handleCancle} className="Cancle_Button">
          Cancle
        </button>
        <form>
          <button onClick={handleAddProfilePic} className="Submit_Button">
            Save
          </button>
        </form>
      </footer>
      {warningState.show && <Warning />}
    </div>
  );
}

export default PicCropper;
