import React, { memo, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";

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
import { postSelector } from "./Redux/Post/post.selector";
import { SignOutAction } from "./Redux/Auth/SignOut/SignOut.Actions";

// Theme Imports
import lightTheme from "./theme/light";
import darkTheme from "./theme/dark";
import Container from "./theme/components/container";
import { getToken } from "./Redux/token";

// Styled Import
const AppContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1650px;
  margin: auto;
`;

function App() {
  const modalState = useSelector(modalSelector);
  const tostState = useSelector(tostSelector);
  const themeMode = useSelector(themeSelector);
  const postState = useSelector(postSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    if (postState.error.Error === "Please Authenticate") {
      dispatch(SignOutAction());
      localStorage.removeItem("fakeTkn");
      window.location.reload();
    }
  }, [dispatch, postState.error.Error]);

  return (
    <ThemeProvider theme={themeMode.light ? lightTheme : darkTheme}>
      <AppContainer>
        {modalState.show && <Modal header1="Create Post" />}
        {tostState.show && <Toster />}
        <Switch>
          <Route exact path="/home" component={HomePage} />
          <Route
            exact
            path="/auth"
            render={() =>
              getToken() ? <Redirect to="/" /> : <SigninSignupPage />
            }
            // render={() => <SigninSignupPage />}
          />
          <Route exact path="/videos" component={VideosPage} />
          <Route
            //  exact
            path="/profile"
            component={UserProfilePage}
          />
          <Redirect from="/" to="/home" />
        </Switch>
      </AppContainer>
    </ThemeProvider>
  );
}

export default memo(App);
