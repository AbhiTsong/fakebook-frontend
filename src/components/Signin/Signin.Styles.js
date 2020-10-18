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
`;

const SignInTxtContr = styled.div`
  width: 30%;
`;
const SignInText1 = styled.h1``;

const SignInText2 = styled.h2``;

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
  height: 1rem;
  margin-bottom: 0.7rem;
  border: 1px solid gray;
  border-radius: 5px;
  font-size: medium;
  background-color: lavender;
  padding: 0.5rem;
`;
export {
  SignInContaner,
  SignInContent,
  SignInTxtContr,
  SignInText1,
  SignInText2,
  SignInFormContainer,
  SignInForm,
  FormInputStyled
};
