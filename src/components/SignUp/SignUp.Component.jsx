import React, { useEffect } from "react";
import "./SignUp.Styles.scss";
// App Files
import FormInput from "../sharedComponents/FormInput/FormInput.Component";

import { withRouter } from "react-router-dom";
import { useForm } from "../../hooks/useFormInput";
import { useDispatch, useSelector } from "react-redux";
import ButtonComponent from "../sharedComponents/Button.Component/Button.Component";
import { SignUpUser } from "../../Redux/Auth/SignUp/SignUp.Actions";
import { newUserSelector } from "../../Redux/Auth/SignUp/SignUp.Selector";
import { CloseModal } from "../../Redux/Modal/ModalAction";

function SignUpComponent(props) {
  const dispatch = useDispatch();
  const newUser = useSelector(newUserSelector);
  // console.log(props)
  const [values, handleValues, clearState] = useForm({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    date: "",
    month: "",
    year: "",
    gender: "",
  });

  // Checking If The Use Is Authenticated And Has Token
  // useEffect(() => {

  // }, [newUser]);

  // Function For Handling The Change

  // Function For Submitting The Form
  const handleSignUp = (e) => {
    e.preventDefault();
    console.log(values);
    dispatch(SignUpUser(values));
    // clearState(INITIAL_STATE);
    // clearState();
  };
  return (
    <div>
      <form onSubmit={handleSignUp} className="SignInForm">
        <h4>Sign Up Its Quick And Easy</h4>
        <FormInput
          name="firstName"
          type="text"
          value={values.firstName}
          placeholder="First Name"
          onChange={handleValues}
        />
        <FormInput
          name="lastName"
          type="text"
          value={values.lastName}
          placeholder="Surname"
          onChange={handleValues}
        />
        <FormInput
          name="email"
          type="email"
          value={values.email}
          placeholder="email address"
          onChange={handleValues}
        />
        <FormInput
          name="password"
          type="password"
          value={values.password}
          placeholder="New Password"
          onChange={handleValues}
        />
        <div>
          <h6>Date Of Birth</h6>
          <FormInput
            name="date"
            type="day"
            value={values.date}
            placeholder="date"
            onChange={handleValues}
          />
          <FormInput
            name="month"
            type="text"
            value={values.month}
            placeholder="month"
            onChange={handleValues}
          />
          <FormInput
            name="year"
            type="number"
            value={values.year}
            placeholder="year"
            onChange={handleValues}
          />
        </div>
        <div>
          <h6>Gender</h6>
          <FormInput
            name="gender"
            type="text"
            value={values.gender}
            placeholder="Female"
            onChange={handleValues}
          />
          {/* <FormInput
            name="email"
            type="email"
            // value={values.password}
            placeholder="Male"
            // onChange={handleValues}
          />
          <FormInput
            name="password"
            type="password"
            // value={values.password}
            placeholder="Custom"
            // onChange={handleValues}
          /> */}
        </div>
        <ButtonComponent>Sign Up</ButtonComponent>
      </form>
    </div>
  );
}

export default React.memo(withRouter(SignUpComponent));
