import React from "react";
import "./App.css";
import SigninSignupPage from "./pages/signin-signup.page";
import HomePage from "./pages/home.page.jsx";
import { Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/home" component={HomePage} />
        <Route path="/auth" component={SigninSignupPage} />
        <Redirect from="/" to="/home" />
      </Switch>
    </div>
  );
}

export default App;
