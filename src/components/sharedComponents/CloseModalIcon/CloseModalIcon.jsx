import React from "react";
import "./CloseModal.styles.scss";

// Redux Import
import { useDispatch } from "react-redux";
import { CloseModal } from "../../../Redux/Modal/ModalAction";

function CloseModalIcon() {
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(CloseModal());
  };

  return (
    <div className="Close_Button_Container">
      <span className="close" onClick={handleCloseModal}>
        ×
      </span>
    </div>
  );
}

export default CloseModalIcon;
