import React, { useEffect } from "react";
import FormInput from "../FormInput/FormInput.Component";
import { useForm } from "../../../hooks/useFormInput";

const INITIAL_STATE = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  date: "",
  month: "",
  year: "",
  gender: "",
};

function FormsComponent() {
  const [values, handleValues, clearState] = useForm(INITIAL_STATE);

  // Checking If The Use Is Authenticated And Has Token
  useEffect(() => {}, []);

  // Function For Handling The Change

  // Function For Submitting The Form
  const handleLogIn = (e) => {
    e.preventDefault();
    clearState(INITIAL_STATE);
    // dispatch(SignInUser(values));
    // clearState();
  };
  return (
    <div>
      <form onSubmit={handleLogIn} className="SignInForm">
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
        <button>Sign Up</button>
      </form>
    </div>
  );
}

export default FormsComponent;
