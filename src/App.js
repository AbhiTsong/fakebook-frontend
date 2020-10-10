import React, {memo} from "react";
import "./App.css";
import { useSelector } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import { ThemeProvider } from "styled-components";

// Nested Components
import SigninSignupPage from "./pages/signin-signup.page";
import HomePage from "./pages/home.page.jsx";
import VideosPage from "./pages/Videos.page";
import UserProfilePage from "./pages/userProfile.page";
import Modal from "./components/sharedComponents/Modals/Model.Component";
import Toster from "./components/sharedComponents/Toster/Toster.jsx";

// Redux Imports
import { tostSelector } from "./Redux/toster/tostSelectos";
import { modalSelector } from "./Redux/Modal/ModalSelector";
import { themeSelector } from "./Redux/theme/theme.selector";

// Theme Imports
import lightTheme from "./theme/light";
import darkTheme from "./theme/dark";
import Container from "./theme/components/container";

function App() {
  const modalState = useSelector(modalSelector);
  const tostState = useSelector(tostSelector);
  const themeMode = useSelector(themeSelector);

  return (
    <ThemeProvider theme={ themeMode.light ? lightTheme : darkTheme}>
      <Container className="App">
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
      </Container>
    </ThemeProvider>
  );
}

export default memo(App);
