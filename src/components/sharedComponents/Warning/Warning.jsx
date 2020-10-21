import React from "react";

// Styled Imports
import {
  WarningOverLay,
  WarningConainer,
  WarningContent,
  WarningTextContent,
  Text,
  WarningButtonContr,
  YesButton,
  NoButton,
} from "./Warning.styles";

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
      <WarningOverLay />
      <WarningConainer>
        <WarningContent>
          <WarningTextContent>
            <Text>Do You Want To Discard All Your Current Changes</Text>
          </WarningTextContent>
          <WarningButtonContr>
            <YesButton onClick={handleYes}>Yes</YesButton>
            <NoButton onClick={handleNo}>No</NoButton>
          </WarningButtonContr>
        </WarningContent>
      </WarningConainer>
    </>
  );
}

export default Warning;
