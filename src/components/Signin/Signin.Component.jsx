import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// Styled Imports
import {
  SignInContaner,
  SignInContent,
  SignInTxtContr,
  SignInText1,
  SignInText2,
  SignInFormContainer,
  SignInForm,
  FormInputStyled,
  LogInButton,
  CreateAccountButton,
} from "./Signin.Styles";

// Custom Hook
import { useForm } from "../../hooks/useFormInput";

// Redux Imports
import { ShowModal2 } from "../../Redux/Modal/ModalAction";
import { signInSelector } from "../../Redux/Auth/SignIn/SignIn.Selector";
import { SignInUser } from "../../Redux/Auth/SignIn/SignIn.Action";
import { modalSelector } from "../../Redux/Modal/ModalSelector";

// Shared Component Imports
import { Modal2 } from "../sharedComponents/Modals/Model.Component";
import { getToken } from "../../Redux/token";
import LoadingSpinner from "../sharedComponents/LoadingSpinner/Loading.Spinner";
import HorizontalLine from "../sharedComponents/HorizontalLine/HorizontalLine";

// Utility Function
import { validation } from "../../utility/validation";

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
    dispatch(ShowModal2("SIGN_UP_USER"));
  };

  // Logging In A New User
  const handleLogIn = (e) => {
    e.preventDefault();
    try {
      validation(values);
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
    <SignInContaner>
      <SignInContent>
        <SignInTxtContr>
          <SignInText1>fakebook</SignInText1>
          <SignInText2>Fakebook helps you fake and share</SignInText2>
          <SignInText2>with fake people in your life</SignInText2>
        </SignInTxtContr>
        <SignInFormContainer>
          <SignInForm onSubmit={handleLogIn}>
            <FormInputStyled
              className="Form-Input-Field"
              name="email"
              type="email"
              value={values.email}
              placeholder="Email Address"
              onChange={handleValues}
            />
            <FormInputStyled
              className="Form-Input-Field"
              name="password"
              type="password"
              value={values.password}
              placeholder="Password"
              onChange={handleValues}
            />
            <LogInButton>Log In</LogInButton>
            <h5>Forgot Password</h5>
            <div className="line" />
          </SignInForm>
          <HorizontalLine />
          <CreateAccountButton onClick={handleModal}>
            Create A New Account
          </CreateAccountButton>
          {modalState.show2 && <Modal2 />}
        </SignInFormContainer>
        {/* <h6>Create a Page For Celebrity Brand Or Business</h6> */}
      </SignInContent>
    </SignInContaner>
  );
}

export default withRouter(SignInComponent);
