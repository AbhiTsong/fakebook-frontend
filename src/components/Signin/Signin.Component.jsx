import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import "./sign-in.styles.scss";

// Custom Hook
import { useForm } from "../../hooks/useFormInput";

// Redux Imports
import { useDispatch, useSelector } from "react-redux";
import { ShowModal } from "../../Redux/Modal/ModalAction";
import { signInSelector } from "../../Redux/Auth/SignIn/SignIn.Selector";
import { SignInUser } from "../../Redux/Auth/SignIn/SignIn.Action";
import { modalSelector } from "../../Redux/Modal/ModalSelector";

// Shared Component Imports
import Modal from "../sharedComponents/Modals/Model.Component";
import FormInput from "../sharedComponents/FormInput/FormInput.Component";
import ButtonComponent from "../sharedComponents/Button.Component/Button.Component";
import { getToken } from "../../Redux/token";
import LoadingSpinner from "../sharedComponents/LoadingSpinner/Loading.Spinner";

// Utility Function
// import { validation } from "../../utility/validation";

const INITIAL_STATE = { email: "", password: "" };

function SignInComponent(props) {
  const dispatch = useDispatch();
  const [values, handleValues, clearState] = useForm(INITIAL_STATE);
  const userSelector = useSelector(signInSelector);
  const modalState = useSelector(modalSelector);

  // Checking If The User Is Authenticated And Has Token
  useEffect(() => {
    if (userSelector.user.length !== 0 && getToken()) {
      props.history.push("/home");
    }
  }, [props.history, userSelector, userSelector.length]);

  // Logging Out The User
  const handleModal = () => {
    dispatch(ShowModal("SIGN_UP_USER"));
  };

  // Logging In A New User
  const handleLogIn = (e) => {
    e.preventDefault();
    try {
      // validation(values);
      dispatch(SignInUser(values));
    } catch (error) {
      alert(error.message);
    }
    clearState(INITIAL_STATE);
  };

    if (userSelector.loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="SignInSignUpContainer">
      <div className="SignInContainer">
        <div className="SignInText">
          <h1>fakebook</h1>
          <h2>Fakebook helps you connect and share</h2>
          <h2>with people in your life</h2>
        </div>
        <div className="SignInFormContainer">
          <form onSubmit={handleLogIn} className="SignInForm">
            <FormInput
              className="Form-Input-Field"
              name="email"
              type="email"
              value={values.email}
              placeholder="Email Address Or Phone Number"
              onChange={handleValues}
            />
            <FormInput
              className="Form-Input-Field"
              name="password"
              type="password"
              value={values.password}
              placeholder="password"
              onChange={handleValues}
            />
            <ButtonComponent>Log In</ButtonComponent>
            <h5>Forgot Password</h5>
            <div className="line" />
          </form>
          <ButtonComponent buttonType="button" buttonClick={handleModal}>
            Create A New Account
          </ButtonComponent>
          {modalState.show && <Modal />}
        </div>
        {/* <h6>Create a Page For Celebrity Brand Or Business</h6> */}
      </div>
    </div>
  );
}

export default withRouter(SignInComponent);
