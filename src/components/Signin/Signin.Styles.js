import styled from "styled-components";
import FormInput from "../sharedComponents/FormInput/FormInput.Component";

const SignInContaner = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: lavender;
  overflow: hidden;
  margin: auto;
  position: relative;
`;

const SignInContent = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  width: 90%;
  height: 60%;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    margin-top: -5rem;
  }
`;

const SignInTxtContr = styled.div`
  width: 30%;
`;
const SignInText1 = styled.h1``;

const SignInText2 = styled.h2`
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

const SignInFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 20rem;
  height: 19rem;
  padding: 1rem;
  border: 1px solid gray;
  border-radius: 5px;
  background-color: white;
`;

const SignInForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
`;

const FormInputStyled = styled(FormInput)`
  height: 2rem;
  margin-bottom: 0.7rem;
  border: 1px solid gray;
  border-radius: 5px;
  font-size: medium;
  background-color: lavender;
  padding: 0.5rem;
`;

const LogInButton = styled.button`
  width: 100%;
  background-color: #1877f2;
  height: 3rem;
  border-radius: 5px;
  outline-color: transparent;
  border: none;
  color: white;
  font-weight: bolder;
  cursor: pointer;
  &::focus {
    outline: none;
  }
  &:hover {
    background-color: #4b97f9;
  }
`;

const CreateAccountButton = styled.button`
  width: 80%;
  background-color: #42b72a;
  height: 3rem;
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

// #42b72a
export {
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
};
