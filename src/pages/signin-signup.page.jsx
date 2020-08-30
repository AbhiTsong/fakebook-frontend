import React from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import SignInComponent from "../components/Signin/Signin.Component";

function SigninSignupPage(props) {
  const {
    match: { path },
  } = props;

  let signInPath = `${path}/signin`;
  // let signUpPath = `${path}/signup`
  return (
    <div>
        {/* <SignUpComponent/> */}
      <Switch>
        <Route  path={signInPath} component={SignInComponent} />
        <Redirect from={path} to={signInPath}/>
      </Switch>
    </div>
  );
}

export default SigninSignupPage;
