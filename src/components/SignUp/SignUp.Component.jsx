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
import { Range } from "./Utility";

let allMonths = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

let CURRENT_YEAR = new Date().getFullYear();
let LAST_100_YEAR = CURRENT_YEAR - 100;

function SignUpComponent(props) {
  const dispatch = useDispatch();
  const newUser = useSelector(newUserSelector);
  // console.log(props)
  const [values, handleValues, clearState] = useForm({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    date: new Date().getDate(),
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
    gender: "",
  });

  // Getting All The Last 100 year
  let YEARS = Range(LAST_100_YEAR, CURRENT_YEAR);

  // Function For Submitting The Form
  const handleSignUp = (e) => {
    e.preventDefault();
    console.log(values);
    // dispatch(SignUpUser(values));
    // clearState(INITIAL_STATE);
    // clearState();
  };

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
            // defaultValue={new Date().getDate()}
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
            // defaultValue={new Date().getMonth()}
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
            // defaultValue={new Date().getFullYear()}
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
            <label className="Value-Container">
              Female
              <input
                className="Gender-Radio"
                type="radio"
                // checked="checked"
                name="radio"
              />
            </label>
          </div>
          <div className="Gender-Content">
            <label className="Value-Container">
              Male
              <input className="Gender-Radio" type="radio" name="radio" />
            </label>
          </div>
          <div className="Gender-Content">
            <label className="Value-Container">
              Others
              <input className="Gender-Radio" type="radio" name="radio" />
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
