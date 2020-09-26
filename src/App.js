import React from "react";
import "./App.css";
import {useSelector} from "react-redux"
import SigninSignupPage from "./pages/signin-signup.page";
import HomePage from "./pages/home.page.jsx";
import { Route, Switch, Redirect } from "react-router-dom";
import UserProfilePage from "./pages/userProfile.page";
import VideosPage from "./pages/Videos.page";
import { modalSelector } from "./Redux/Modal/ModalSelector"
import Modal from "./components/sharedComponents/Modals/Model.Component"
// import { currentUser } from "./Redux/Auth/SignIn/SignIn.Selector";
// import { useSelector } from "react-redux";
// import axios from "./axios";

function App() {
  const modalState = useSelector(modalSelector)
  return (
    <div className="App">
     {modalState.show && <Modal header1="Create Post" />}
      <Switch>
        <Route exact path="/home" component={HomePage} />
        <Route
          // exact
          path="/auth"
          // render={() => (user ? <Redirect to="/" /> : <SigninSignupPage />)}
          render={() => <SigninSignupPage />}
        />
        <Route exact path="/videos" component={VideosPage} />
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
