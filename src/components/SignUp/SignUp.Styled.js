import styled, { css } from "styled-components";
import FormInput from "../sharedComponents/FormInput/FormInput.Component";
import RadioButtonComponent from "../sharedComponents/RadioButton/RadioButton.Component";

const ContrRegularWidth = css`
  width: 28rem;
`;

const ContrSmallScreenWidth = css`
  width: 21rem;
`;

const ModalContainerStyle = (props) => {
  if (props.width > 500) {
    return ContrRegularWidth;
  }

  return ContrSmallScreenWidth;
};

const ModalContainer = styled.div`
  ${ModalContainerStyle}
  position: relative;
  justify-content: center;
  background-color: #fefefe;
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 0;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -webkit-animation-name: animatetop;
  -webkit-animation-duration: 0.4s;
  animation-name: animatetop;
  animation-duration: 0.4s;
  &:focus {
    outline: none;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.3rem 1rem;
  margin: 0;
  height: 4.5rem;
`;

const ModalTitleText = styled.h1`
  margin: 0;
  color: rgb(34, 33, 33);
`;

const ModalSubTitleTxt = styled.h5`
  margin: 0;
  padding-top: 0.1rem;
`;

const SignUpFormContainer = styled.div`
  width: 100%;
`;

const SignUpFormContent = styled.div`
  padding: 1rem;
`;

const SignUpForm = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const normalLabel = css`
  display: flex;
  justify-content: space-between;
`;

const smallLable = css`
  display: flex;
  flex-direction: column;
`;

const nameLableStyle = (props) => {
  if (props.width > 500) {
    return normalLabel;
  }
  return smallLable;
};

const NameLabel = styled.div`
  ${nameLableStyle}
`;

const regularInputStyle = css`
  width: 11.5rem;
`;

const smallInputStyles = css``;

const inputStyle = (props) => {
  if (props.width > 500) {
    return regularInputStyle;
  }

  return smallInputStyles;
};

const StyledNameForms = styled(FormInput)`
  ${inputStyle}
  height: 1rem;
  margin-bottom: 0.7rem;
  border: 1px solid gray;
  border-radius: 5px;
  font-size: medium;
  background-color: lavender;
  padding: 0.5rem;
`;

const StyledEmailPassInput = styled(FormInput)`
  height: 1rem;
  margin-bottom: 0.7rem;
  border: 1px solid gray;
  border-radius: 5px;
  font-size: medium;
  background-color: lavender;
  padding: 0.5rem;
`;

const DateOFBirth = styled.h5`
  margin: 0;
  margin-bottom: 5px;
`;

const DOBContaoner = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.7rem;
`;

const DOMDropDowns = styled.select`
  min-width: 100px;
  width: 8rem;
  font-size: medium;
  padding: 0.5rem;
  border-radius: 5px;
  background-color: white;
`;


const Options = styled.option`
  height: 5rem;
`

const GenderTitle = styled.h5`
  margin: 0;
  margin-bottom: 5px;
`;

const GenderContinaer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const GenderContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 7rem;
  font-size: medium;
  padding: 0.5rem;
  border-radius: 5px;
  background-color: white;
  border: 1px solid grey;
`;

const ValueContainer = styled.label`
  position: relative;
  color: black;
  display: contents;
`;

const TermsAndPolicy = styled.h6`
  margin: 0;
  font-weight: lighter;
  margin-bottom: 2rem;
`;

const BlueColor = styled.span`
  color: blue;
`;

const StyledRadio = styled(RadioButtonComponent)`
  position: absolute;
  top: 0;
  left: 6rem;
`;

const StyledButton = styled.button`
  width: 80%;
  background-color: #42b72a;
  height: 2rem;
  border-radius: 5px;
  outline-color: transparent;
  border: none;
  color: white;
  margin: auto;
  cursor: pointer;
  font-weight: bolder;
  &::focus {
    outline: none;
  }
  &:hover {
    background-color: #5fe144;
  }
`;

export {
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
  Options,
  GenderTitle,
  GenderContinaer,
  GenderContent,
  StyledRadio,
  ValueContainer,
  TermsAndPolicy,
  BlueColor,
  StyledButton
};
