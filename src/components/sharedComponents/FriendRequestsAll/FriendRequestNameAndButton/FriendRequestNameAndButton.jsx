import React from "react";
import { useDispatch } from "react-redux";
import { acceptRequestAction } from "../../../../Redux/Friends/acceptFriendRequest";

// Styled Import
import {
  NameAndBtnCtr,
  RequesterName,
  BtnContainer,
  AcceptBtn,
  DeleteButton,
} from "./FrqNameAndBtn.styles";

function FriendRequestNameAndButton({ name, owner }) {
  const dispatch = useDispatch();

  // Function For Accepting The Friend Request
  function handleAccept() {
    dispatch(acceptRequestAction(owner));
  }

  // Function For Declining The Friend Request
  function handleDecline() {}

  return (
    <NameAndBtnCtr>
      <RequesterName>{name}</RequesterName>
      <BtnContainer>
        <AcceptBtn onClick={() => handleAccept(owner)}>Accept</AcceptBtn>
        <DeleteButton onClick={() => handleDecline(owner)}>
          Decline
        </DeleteButton>
      </BtnContainer>
    </NameAndBtnCtr>
  );
}

export default FriendRequestNameAndButton;
