import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { acceptRequestAction } from "../../../../Redux/Friends/acceptFriendRequest";
import "./FriendRequestNameAndButton.styles.scss";

function FriendRequestNameAndButton({ name, owner }) {
  const dispatch = useDispatch();

  // Function For Accepting The Friend Request
  function handleAccept() {
    dispatch(acceptRequestAction(owner));
  }

  // Function For Declining The Friend Request
  function handleDecline() {
  }

  return (
    <div className="Name_And_Button_Container">
      <h5 className="Requester_Name">{name}</h5>
      <div className="Request_Buttons">
        <button onClick={() => handleAccept(owner)} className="Accept_Request">
          Accept
        </button>
        <button onClick={() => handleDecline(owner)} className="Delete_Request">
          Decline
        </button>
      </div>
    </div>
  );
}

export default FriendRequestNameAndButton;
