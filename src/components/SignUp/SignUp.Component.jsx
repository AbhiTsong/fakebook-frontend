import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

import {
  ModalContainer,
  ModalHeader,
  ModalTitleText,
  ModalSubTitleTxt,
  SignUpFormContainer,
  SignUpFormContent,
  SignUpForm,
  NameLabel,
  StyledNameForms,
  StyledEmailPassInput,
  DateOFBirth,
  DOBContaoner,
  DOMDropDowns,
  GenderTitle,
  GenderContinaer,
  GenderContent,
  StyledRadio,
  ValueContainer,
  TermsAndPolicy,
  BlueColor,
} from "./SignUp.Styled";

// Shared Componenets
import HorizontaLine from "../sharedComponents/HorizontalLine/HorizontalLine";
import CloseModalIcon from "../sharedComponents/CloseModalIcon/CloseModalIcon";
import LoadingSpinner from "../sharedComponents/LoadingSpinner/Loading.Spinner";

// Custom Hook Import
import { useForm } from "../../hooks/useFormInput";

// Redux Imports
import { useDispatch, useSelector } from "react-redux";
import { SignUpUser } from "../../Redux/Auth/SignUp/SignUp.Actions";
import { signUpSelector } from "../../Redux/Auth/SignUp/SignUp.Selector";

// Utility Function
import { validation } from "../../utility/validation";
import { Range } from "../../utility/range";
import { allMonths } from "../../utility/allMonths";
import { CloseModal } from "../../Redux/Modal/ModalAction";

const TODAY = new Date();

let CURRENT_YEAR = new Date().getFullYear();
let LAST_100_YEAR = CURRENT_YEAR - 100;

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

function SignUpComponent(props) {
  const dispatch = useDispatch();
  const signUpState = useSelector(signUpSelector);
  const [width, setWidth] = useState(false);
  const [values, handleValues] = useForm(INITIAL_STATE);
  const [gender, setGender] = useState("");

  useEffect(() => {
    window.addEventListener('resize', () => {
      if(window.innerWidth === 375){

        setWidth(true)
      }
    })
  }, [])

  useEffect(() => {
    if (!signUpState.loading && signUpState.isSignedUp) {
      dispatch(CloseModal());
    }
  }, [dispatch, signUpState.isSignedUp, signUpState.loading]);

  const handleChange = (e) => {
    setGender(e.target.value);
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



  console.log("/////////",width)


  if (signUpState.loading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <ModalContainer>
        <ModalHeader>
          <div>
            <ModalTitleText className="header-title">Sign Up</ModalTitleText>
            <ModalSubTitleTxt className="header-sub-title">
              Its Quick And Easy
            </ModalSubTitleTxt>
          </div>
          <CloseModalIcon />
        </ModalHeader>
        <HorizontaLine />

        <SignUpFormContainer>
          <SignUpFormContent>
            <SignUpForm onSubmit={handleSignUp}>
              <NameLabel>
                <StyledNameForms
                  name="firstName"
                  type="text"
                  value={values.firstName}
                  placeholder="First Name"
                  onChange={handleValues}
                />
                <StyledNameForms
                  name="lastName"
                  type="text"
                  value={values.lastName}
                  placeholder="Surname"
                  onChange={handleValues}
                />
              </NameLabel>
              <StyledEmailPassInput
                name="email"
                type="email"
                value={values.email}
                placeholder="email address"
                onChange={handleValues}
              />
              <StyledEmailPassInput
                name="password"
                type="password"
                value={values.password}
                placeholder="New Password"
                onChange={handleValues}
              />

              {/* Selecting The Data Of Birth */}
              <DateOFBirth className="DOBTitle">Date Of Birth</DateOFBirth>
              <DOBContaoner>
                {/* Select The Date */}
                <DOMDropDowns
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
                </DOMDropDowns>

                {/* Selectin The Month */}
                <DOMDropDowns
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
                </DOMDropDowns>

                {/* Selecting The Year */}
                <DOMDropDowns
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
                </DOMDropDowns>
              </DOBContaoner>

              {/* Gender Radio Buttons */}
              <GenderTitle>Gender</GenderTitle>
              <GenderContinaer>
                <GenderContent>
                  <ValueContainer htmlFor="female">
                    Female
                    <StyledRadio
                      type="radio"
                      value="female"
                      id="female"
                      onChange={handleChange}
                      name="gender"
                    />
                  </ValueContainer>
                </GenderContent>
                <GenderContent>
                  <ValueContainer htmlFor="male">
                    Male
                    <StyledRadio
                      type="radio"
                      value="male"
                      id="male"
                      onChange={handleChange}
                      name="gender"
                    />
                  </ValueContainer>
                </GenderContent>
                <GenderContent>
                  <ValueContainer htmlFor="others">
                    Others
                    <StyledRadio
                      type="radio"
                      value="others"
                      id="others"
                      onChange={handleChange}
                      name="gender"
                    />
                  </ValueContainer>
                </GenderContent>
              </GenderContinaer>
              <TermsAndPolicy>
                By clicking Sign Up, you agree to our{" "}
                <BlueColor className="Color-Blue">
                  Terms, Data Policy{" "}
                </BlueColor>{" "}
                and{" "}
                <BlueColor className="Color-Blue"> Cookie Policy. </BlueColor>{" "}
                You may receive SMS notifications from us and can opt out at any
                time.
              </TermsAndPolicy>
              <button>Sign Up</button>
            </SignUpForm>
          </SignUpFormContent>
        </SignUpFormContainer>
      </ModalContainer>
    </>
  );
}

export default withRouter(SignUpComponent);
