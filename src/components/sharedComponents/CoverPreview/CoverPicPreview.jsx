import React from "react";
import "./CoverPreview.styles.scss";
import { useSelector, useDispatch } from "react-redux";

// Share Components
import CloseModalIcon from "../CloseModalIcon/CloseModalIcon";
import HorizontalLine from "../../sharedComponents/HorizontalLine/HorizontalLine";
import Warning from "../Warning/Warning";

// Redux Imports
import { userSelector } from "../../../Redux/User/UserSelector";
import { warningSelector } from "../../../Redux/Warning/Warning.Selector";
import { ShowWarning } from "../../../Redux/Warning/Warning.Action";
import { changeCoverAction } from "../../../Redux/User/changeCoverAction";

function CoverPicPreview() {
  const dispatch = useDispatch();
  const user = useSelector(userSelector);
  const warningState = useSelector(warningSelector);

  function handleAddProfilePic(e) {
    e.preventDefault();
    let formData = new FormData();
    formData.append("cover", user.coverPath[1]);
    dispatch(changeCoverAction(formData));
  }

  function handleCancle(e) {
    e.preventDefault();
    dispatch(ShowWarning());
  }

  return (
    <div className="Cover_Preview_Container">
      <div className="Cover_Preview_Header">
        <div className="Cover_Preview_Content">
          <h4>Update Profile Pic</h4>
        </div>
        <div className="Cover_Preview_Close_Container">
          <CloseModalIcon />
        </div>
      </div>
      <HorizontalLine />
      <div className="Cover_Pic_Preview_Container">
        <div className="Cover_Pic_Preview_Content">
          <img
            className="Cover_Pic"
            src={user.coverPath[0]}
            alt="Cover To Upload"
          />
        </div>
      </div>
      <HorizontalLine />
      <footer className="Cover_Footer_Container">
        <button onClick={handleCancle} className="Cover_Cancle_Button">
          Cancle
        </button>
        <form>
          <button onClick={handleAddProfilePic} className="Cover_Submit_Button">
            Save
          </button>
        </form>
      </footer>
      {warningState.show && <Warning />}
    </div>
  );
}

export default CoverPicPreview;
