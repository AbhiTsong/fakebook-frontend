import React from "react";
import "./App.css";
import SigninSignupPage from "./pages/signin-signup.page";
import HomePage from "./pages/home.page.jsx";
import { Route, Switch, Redirect } from "react-router-dom";
import UserProfilePage from "./pages/userProfile.page";
// import { currentUser } from "./Redux/Auth/SignIn/SignIn.Selector";
// import { useSelector } from "react-redux";
// import axios from "./axios";

function App() {
  // let user = useSelector(currentUser);
  // axios.defaults.headers.common[
  //   "Authorization"
  // ] = `Bearer ${currentUser.token}`;

  // console.log("user ---- ", user);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/home" component={HomePage} />
        <Route
          // exact
          path="/auth"
          // render={() => (user ? <Redirect to="/" /> : <SigninSignupPage />)}
          render={() => <SigninSignupPage />}
        />
        <Route
          //  exact
          path="/profile"
          component={UserProfilePage}
        />
        <Redirect from="/" to="/home" />
      </Switch>
    </div>
  );
}

export default App;
