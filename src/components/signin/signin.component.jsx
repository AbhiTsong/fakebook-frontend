import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks/useFormInput";
import FormInput from "../../components/sharedComponents/FormInput/FormInput.Component";
import ButtonComponent from "../sharedComponents/Button.Component/Button.Component";
import { SignInUser } from "../../Redux/SignIn/SignIn.Action";
import { signInSelector } from "../../Redux/SignIn/SignIn.Selector";
import Modal from "../sharedComponents/Modals/Model.Component";
import useModal from "../../hooks/useModal";
import "./sign-in.styles.scss";

const INITIAL_STATE = { email: "", password: "" };

function SignInComponent(props) {
  const dispatch = useDispatch();
  const [values, handleValues, clearState] = useForm(INITIAL_STATE);
  const { isShowing, toggle } = useModal();
  const userSelector = useSelector(signInSelector);

  // Checking If The Use Is Authenticated And Has Token
  useEffect(() => {
    if (userSelector.length !== 0 && userSelector.data !== null) {
      localStorage.setItem("fakeTkn", JSON.stringify(userSelector.data.token));
      props.history.replace("/home");
    }
  }, [userSelector, props.history]);

  const handleLogIn = (e) => {
    e.preventDefault();
    dispatch(SignInUser(values));
    clearState();
  };

  return (
    <div className="SignInSignUpContainer">
      <div className="SignInContainer">
        <div className="SignInText">
          <h1>fakebook</h1>
          <h2>Fakebook helps you connect and share</h2>
          <h2>with people in your life</h2>
        </div>
        <div className="SignUpFormContainer">
          <form onSubmit={handleLogIn} className="SignInForm">
            <FormInput
              name="email"
              type="email"
              value={values.email}
              placeholder="Email Address Or Phone Number"
              onChange={handleValues}
            />
            <FormInput
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
          <ButtonComponent buttonClick={toggle}>
            Create A New Account
          </ButtonComponent>
          <Modal formName="SignUp" isShowing={isShowing} hide={toggle} />
        </div>
        {/* <h6>Create a Page For Celebrity Brand Or Business</h6> */}
      </div>
    </div>
  );
}

export default SignInComponent;
