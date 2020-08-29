import React, { useEffect, useState } from "react";
import "./SignUp.Styles.scss";
import { withRouter } from "react-router-dom";
// App Files
import FormInput from "../sharedComponents/FormInput/FormInput.Component";

// Shared Componenets
import ButtonComponent from "../sharedComponents/Button.Component/Button.Component";
import RadioButtonComponent from "../sharedComponents/RadioButton/RadioButton.Component";

// Custom Hook Import
import { useForm } from "../../hooks/useFormInput";

// Redux Imports
import { useDispatch, useSelector } from "react-redux";
import { SignUpUser } from "../../Redux/Auth/SignUp/SignUp.Actions";
import { newUserSelector } from "../../Redux/Auth/SignUp/SignUp.Selector";
import { CloseModal } from "../../Redux/Modal/ModalAction";

// Utility Function
import { validation } from "../../utility/validation";
import { Range } from "../../utility/range";
import { allMonths } from "../../utility/allMonths";

const TODAY = new Date();

let CURRENT_YEAR = new Date().getFullYear();
let LAST_100_YEAR = CURRENT_YEAR - 100;

function SignUpComponent(props) {
  const dispatch = useDispatch();
  const newUser = useSelector(newUserSelector);

  console.log("newUser ---- ", newUser.data)

  const INITIAL_STATE = {
    firstName: "",
    lastName: "",
    email: "",
    gender: "others",
    password: "",
    date: TODAY.getDate(),
    month: allMonths[TODAY.getMonth()],
    year: TODAY.getFullYear(),
  };

  //
  const [values, handleValues, clearState] = useForm(INITIAL_STATE);

  const [gender, setGender] = useState("");

  const handleChange = (e) => {
    setGender(e.target.value);
    console.log(e.target.value);
  };

  // Getting All The Last 100 year
  let YEARS = Range(LAST_100_YEAR, CURRENT_YEAR);

  // Function For Submitting The Form
  const handleSignUp = (e) => {
    e.preventDefault();
    values.gender = gender;
    try {
      // Validating the form data
      validation(values);
      dispatch(SignUpUser(values));
    } catch (error) {
      alert(error);
    }
  };

  console.log("Sign Up Component being called");
  return (
    <div className="SignUpFormContainer">
      <form onSubmit={handleSignUp} className="SignUpForm">
        <div className="Form-Name-Sir-Name">
          <FormInput
            className="Form-Input-Field"
            name="firstName"
            type="text"
            value={values.firstName}
            placeholder="First Name"
            onChange={handleValues}
          />
          <FormInput
            className="Form-Input-Field"
            name="lastName"
            type="text"
            value={values.lastName}
            placeholder="Surname"
            onChange={handleValues}
          />
        </div>
        <FormInput
          className="Form-Input-Field"
          name="email"
          type="email"
          value={values.email}
          placeholder="email address"
          onChange={handleValues}
        />
        <FormInput
          className="Form-Input-Field"
          name="password"
          type="password"
          value={values.password}
          placeholder="New Password"
          onChange={handleValues}
        />

        {/* Selecting The Data Of Birth */}
        <h6 className="DOBTitle">Date Of Birth</h6>
        <div className="DOBConatiner">
          {/* Select The Date */}
          <select
            value={values.date}
            name="date"
            type="date"
            className="dropdown-content"
            onChange={handleValues}
          >
            {[...Array(31).keys()].map((day) => (
              <option key={day} value={day}>
                {day}
              </option>
            ))}
          </select>

          {/* Selectin The Month */}
          <select
            value={values.month}
            name="month"
            type="month"
            className="dropdown-content"
            onChange={handleValues}
          >
            {allMonths.map((month, idx) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </select>

          {/* Selecting The Year */}
          <select
            value={values.year}
            name="year"
            type="year"
            onChange={handleValues}
            className="dropdown-content"
          >
            {YEARS.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        {/* Gender Radio Buttons */}
        <h6 className="GenderTitle">Gender</h6>
        <div className="GenderConatiner">
          <div className="Gender-Content">
            <label htmlFor="female" className="Value-Container">
              Female
              <RadioButtonComponent
                type="radio"
                value="female"
                id="female"
                onChange={handleChange}
                name="gender"
              />
            </label>
          </div>
          <div className="Gender-Content">
            <label htmlFor="male" className="Value-Container">
              Male
              <RadioButtonComponent
                type="radio"
                value="male"
                id="male"
                onChange={handleChange}
                name="gender"
              />
            </label>
          </div>
          <div className="Gender-Content">
            <label htmlFor="others" className="Value-Container">
              Others
              <RadioButtonComponent
                type="radio"
                value="others"
                id="others"
                onChange={handleChange}
                name="gender"
              />
            </label>
          </div>
        </div>
        <h6 className="Terms-And-Policy">
          By clicking Sign Up, you agree to our{" "}
          <span className="Color-Blue">Terms, Data Policy </span> and{" "}
          <span className="Color-Blue"> Cookie Policy. </span> You may receive
          SMS notifications from us and can opt out at any time.
        </h6>
        <ButtonComponent>Sign Up</ButtonComponent>
      </form>
    </div>
  );
}

export default React.memo(withRouter(SignUpComponent));
