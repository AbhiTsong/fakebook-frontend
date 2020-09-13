import React from "react";
import "./Warning.styles.scss";

// Reduc Imports
import { useDispatch } from "react-redux";
import { CloseWarning } from "../../../Redux/Warning/Warning.Action";
import { CloseModal } from "../../../Redux/Modal/ModalAction";
import { clearImagePath } from "../../../Redux/Post/photoPath.action";

function Warning() {
  const dispatch = useDispatch();

  // Function For Discarding The Changes
  function handleYes(e) {
    e.preventDefault();
    dispatch(CloseWarning());
    dispatch(CloseModal());
    dispatch(clearImagePath());
  }

  // Function For Contuninig with the changes
  function handleNo(e) {
    e.preventDefault();
    dispatch(CloseWarning());
  }
  return (
    <>
      <div className="Warning_Overlay" />
      <div className="Warning_Container">
        <div className="Warning_Content">
          <div className="Warning_Text_Content">
            <h4 className="Text">
              Do You Want To Discard All Your Current Changes
            </h4>
          </div>
          <div className="Warning_Button_Container">
            <button className="Warning_Yes" onClick={handleYes}>
              Yes
            </button>
            <button className="Warning_No" onClick={handleNo}>
              No
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Warning;
