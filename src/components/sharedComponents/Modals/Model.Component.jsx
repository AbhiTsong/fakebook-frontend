import React, { useEffect } from "react";
import "./Model.Styles.scss";
import SignUpComponent from "../../SignUp/SignUp.Component";
import { useDispatch } from "react-redux";
import { CloseModal } from "../../../Redux/Modal/ModalAction";

function Modal(props) {
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(CloseModal());
  };

  return (
    <div id="myModal" className="modal">
      <div className="modal-content" tabIndex={-1}>
        <div className="modal-header">
          <span className="close" onClick={handleCloseModal}>
            ×
          </span>
          <h1 className="header-title">{"Sign Up"}</h1>
          <h5 className="header-sub-title">Its Quick And Easy</h5>
        </div>
        <div className="modal-body">
          <SignUpComponent />
        </div>
      </div>
    </div>
  );
}
// }

export default Modal;
