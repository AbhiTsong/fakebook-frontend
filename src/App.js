import React from "react";
import "./App.css";
import { useSelector } from "react-redux";
import SigninSignupPage from "./pages/signin-signup.page";
import HomePage from "./pages/home.page.jsx";
import { Route, Switch, Redirect } from "react-router-dom";
import UserProfilePage from "./pages/userProfile.page";
import VideosPage from "./pages/Videos.page";
import { modalSelector } from "./Redux/Modal/ModalSelector";
import { tostSelector } from "./Redux/toster/tostSelectos";
import Modal from "./components/sharedComponents/Modals/Model.Component";
import Toster from "./components/sharedComponents/Toster/Toster.jsx";

function App() {
  const modalState = useSelector(modalSelector);
  const tostState = useSelector(tostSelector);
  return (
    <div className="App">
      {modalState.show && <Modal header1="Create Post" />}
      {tostState.show && <Toster />}
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
