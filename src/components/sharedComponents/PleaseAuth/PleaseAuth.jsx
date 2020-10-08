import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import { SignOutAction } from "../../../Redux/Auth/SignOut/SignOut.Actions";
import { showToster } from "../../../Redux/toster/toster.action";

function PleaseAuth(props) {
  const dispatch = useDispatch();

  // Function for athenticating the user

  function handleAuth() {
    props.history.replace("/auth");
    dispatch(showToster("Please Authenticate"));
    props.history.go(0);
    dispatch(SignOutAction());
  }

  return (
    <div>
      Please Authenticate
      <button onClick={handleAuth}>ok</button>
    </div>
  );
}

export default withRouter(PleaseAuth);
