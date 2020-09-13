import React from "react";
import { useSelector } from "react-redux";
import { currentUser } from "../Redux/Auth/SignIn/SignIn.Selector";

function useCheckToken() {
  let user = useSelector(currentUser);

  return [user.currentUser.token];
}

export default useCheckToken;
