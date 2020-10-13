import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { SignOutAction } from "../../../Redux/Auth/SignOut/SignOut.Actions";
import { showToster } from "../../../Redux/toster/toster.action";

// Redux Import
import { SignoutSelector } from "../../../Redux/Auth/SignOut/signout.selector";

function PleaseAuth(props) {
  const dispatch = useDispatch();
  const authState = useSelector(SignoutSelector);


  if (authState.loading) {
    return "Please Wait...";
  }

  if (!authState.loading && authState.user.length === 0) {
    props.history.replace("/auth");
    props.history.go(0);
  }

  // Function for athenticating the user
  function handleAuth() {
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
