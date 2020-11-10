import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Styled Imports
import { TosterContaier, TosterMessage, CloseButton } from "./Toster.styles";

// Redux Imports
import { closeToster } from "../../../Redux/toster/toster.action";
import { tostSelector } from "../../../Redux/toster/tostSelectos";

function Toster() {
  const tostMessage = useSelector(tostSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(closeToster());
    }, 5000);
  }, [dispatch]);

  // Function For Closing The Modal
  function handleCloseModal() {
    dispatch(closeToster());
  }

  return (
    <TosterContaier>
      <TosterMessage>
        {tostMessage.content}{" "}
        <CloseButton onClick={handleCloseModal}>x</CloseButton>
      </TosterMessage>
    </TosterContaier>
  );
}

export default Toster;
