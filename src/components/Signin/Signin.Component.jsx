import React, { useEffect, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks/useFormInput";
import FormInput from "../sharedComponents/FormInput/FormInput.Component";
import ButtonComponent from "../sharedComponents/Button.Component/Button.Component";
import { SignInUser } from "../../Redux/Auth/SignIn/SignIn.Action";
import { signInSelector } from "../../Redux/Auth/SignIn/SignIn.Selector";
import Modal from "../sharedComponents/Modals/Model.Component";
// import useModal from "../../hooks/useModal";
import axios from "../../axios"
import { ShowModal } from "../../Redux/Modal/ModalAction";
import { modalSelector } from "../../Redux/Modal/ModalSelector";
import "./sign-in.styles.scss";

const INITIAL_STATE = { email: "", password: "" };

function SignInComponent(props) {
  // console.log("modalSelector --- ", modalSelector);
  const dispatch = useDispatch();
  const [values, handleValues, clearState] = useForm({
    email: "",
    password: "",
  });
  const userSelector = useSelector(signInSelector);
  const modalState = useSelector(modalSelector);

  // Checking If The Use Is Authenticated And Has Token
  useEffect(() => {
    // localStorage.clear();

    if (userSelector.length !== 0 && userSelector.data !== null) {
      let token = userSelector.data && userSelector.data.token;
      localStorage.setItem("fakeTkn", JSON.stringify(token));
      // axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
      props.history.replace("/home");
    }
  }, [userSelector, props.history]);

  // Logging Out The User
  const handleModal = () => {
    dispatch(ShowModal());
  };

  // Logging In A New User
  const handleLogIn = (e) => {
    e.preventDefault();
    dispatch(SignInUser(values));
    clearState(INITIAL_STATE);
  };

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
          {modalState.show && (
            <Modal
              showForm="SignUp"
              header1="Sign Up"
              header2="Its Quick And Easy"
            />
          )}
        </div>
        {/* <h6>Create a Page For Celebrity Brand Or Business</h6> */}
      </div>
    </div>
  );
}

export default memo(SignInComponent);
