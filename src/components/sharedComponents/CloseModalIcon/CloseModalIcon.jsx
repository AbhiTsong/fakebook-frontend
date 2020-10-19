import React from "react";

// Styled Imports

import { CloseBtnContr, CloseButton } from "./CloseModalIcon.Styles";

// Redux Import
import { useDispatch } from "react-redux";
import { CloseModal } from "../../../Redux/Modal/ModalAction";

function CloseModalIcon() {
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(CloseModal());
  };

  return (
    <CloseBtnContr>
      <CloseButton onClick={handleCloseModal}>×</CloseButton>
    </CloseBtnContr>
  );
}

export default CloseModalIcon;
