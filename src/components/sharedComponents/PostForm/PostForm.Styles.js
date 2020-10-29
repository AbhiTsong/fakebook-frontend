import styled from "styled-components";
import FormInput from "../FormInput/FormInput.Component";

const FormContainer = styled.div`
  border: 1px solid black;
  background-color: white;
  border: none;
  padding: 0.5rem;
  height: 8rem;
  border-radius: 10px;

  @media screen and (max-width: 550px) {
    height: 5rem;
    border-radius: 0px;
  }
`;

const ImgInputCntr = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FormPicContr = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.3rem;
  height: 2.3rem;
  border-radius: 50%;
`;

const PostFormContr = styled.form`
  width: 100%;
  padding-left: 0.5rem;
  margin-bottom: 0.5rem;
`;

const StyledInput = styled(FormInput)`
  width: 95%;
  height: 2.2rem;
  border: none;
  border-radius: 5rem;
  background-color: lavender;
  padding-left: 1rem;
  color: transparent;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

const FeeingContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-self: center;
  padding-top: 1.8rem;

  @media screen and (max-width: 550px) {
    padding-top: 0.8rem;
  }
`;

const IconTextCtr = styled.div`
  display: flex;
  cursor: pointer;
`;

const IconCntr = styled.div`
  width: ${({ loader }) => (loader ? "4rem" : "2rem")};

  @media screen and (max-width: 550px) {
    width: ${({ loader }) => (loader ? "2rem" : "1rem")};
  }
`;

const Icon = styled.img`
  display: block;
  max-width: 100%;
  max-height: 100%;
  border-radius: ${({ loader }) => (loader ? "1.5rem" : "")};
`;

const IconText = styled.h5`
  margin: 0;
  height: 0rem;
  margin-top: 0.5rem;
  margin-left: 0.5rem;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

const IconTextCamera = styled.h5`
  margin-top: 0.6rem;
  margin-left: -6rem;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export {
  FormContainer,
  ImgInputCntr,
  FormPicContr,
  PostFormContr,
  StyledInput,
  FeeingContainer,
  IconTextCtr,
  IconCntr,
  Icon,
  IconTextCamera,
  IconText,
};
