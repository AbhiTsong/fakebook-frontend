import React from "react";
import "./CoverPreview.styles.scss";
import { useSelector, useDispatch } from "react-redux";

// Share Components
import CloseModalIcon from "../CloseModalIcon/CloseModalIcon";
import HorizontalLine from "../../sharedComponents/HorizontalLine/HorizontalLine";
import UserProfilePic from "../UserProfilePic/UserProfilePic";
import Warning from "../Warning/Warning";

// Redux Imports
import { userSelector } from "../../../Redux/User/UserSelector";
import { warningSelector } from "../../../Redux/Warning/Warning.Selector";
import { ShowWarning } from "../../../Redux/Warning/Warning.Action";

function CoverPicPreview() {
  const dispatch = useDispatch();
  const user = useSelector(userSelector);
  const warningState = useSelector(warningSelector);

  function handleAddProfilePic(e) {
    e.preventDefault();
    alert("The Backend Is Not Yet Created ");
  }

  function handleCancle(e) {
    e.preventDefault();
    dispatch(ShowWarning());
  }

  return (
    <div className="New_Cover_Container">
      <div className="New_Cover_Title_Container">
        <h4 className="Cover_Text">Create Post</h4>
        <CloseModalIcon />
      </div>
      <HorizontalLine />
      <div className="Cover_Profile_Pic">
        <UserProfilePic />
      </div>
      <form className="Cover_Form_Container">
        <img
          className="Cover_Pic"
          src={user.coverPath[0]}
          alt="New Cover To Upload"
        />

        <HorizontalLine />
        <footer className="Cover_Footer_Container">
          <button onClick={handleCancle} className="Cover_Cancle_Button">
            Cancle
          </button>
          <button onClick={handleAddProfilePic} className="Cover_Submit_Button">
            Save
          </button>
        </footer>
      </form>
      {warningState.show && <Warning />}
    </div>
  );
}

export default CoverPicPreview;
