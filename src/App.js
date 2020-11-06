import React, { memo, useEffect, lazy, Suspense } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";

// Nested Components
import Loader from "./components/sharedComponents/LoadingSpinner/Loading.Spinner";
import Modal from "./components/sharedComponents/Modals/Model.Component";
import Toster from "./components/sharedComponents/Toster/Toster.jsx";
import ErrorBoundary from "./components/sharedComponents/ErrorBoundries/ErrorBoundries";
import NavBar from "./components/NavBar/NavBar.Component"

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

// Lazy Imports
const HomePage = lazy(() => import("./pages/home.page.jsx"));
const SigninSignupPage = lazy(() => import("./pages/signin-signup.page"));
const VideosPage = lazy(() => import("./pages/Videos.page"));
const UserProfilePage = lazy(() => import("./pages/userProfile.page"));

// Styled Import
const AppContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  overflow-y: ${({ scroll }) => (scroll ? "hidden" : "")};
`;

function App() {
  const modalState = useSelector(modalSelector);
  const tostState = useSelector(tostSelector);
  const themeMode = useSelector(themeSelector);
  const postState = useSelector(postSelector);
  const dispatch = useDispatch();

  // Effect For Anth And Protected Routes
  useEffect(() => {
    if (postState.error.Error === "Please Authenticate") {
      dispatch(SignOutAction());
      localStorage.removeItem("fakeTkn");
      window.location.reload();
    }
  }, [dispatch, postState.error.Error]);

  return (
    <ThemeProvider theme={themeMode.light ? lightTheme : darkTheme}>
        <NavBar/>
      <AppContainer scroll={modalState.show}>
        {modalState.show && <Modal header1="Create Post" />}
        {tostState.show && <Toster />}
        <Switch>
          <ErrorBoundary>
            <Suspense fallback={<Loader />}>
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
            </Suspense>
          </ErrorBoundary>
        </Switch>
      </AppContainer>
    </ThemeProvider>
  );
}

export default memo(App);
