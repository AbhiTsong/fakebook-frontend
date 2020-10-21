import styled from "styled-components";
import FormInput from "../FormInput/FormInput.Component";

const FormContainer = styled.div`
  height: 8rem;
  border: 1px solid black;
  background-color: white;
  width: auto;
  border: none;
  padding: 0.5rem;
  border-radius: 10px;
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
`;

const IconTextCtr = styled.div`
  display: flex;
  cursor: pointer;
`;

const IconCntr = styled.div`
  width: 2rem;
`;

const Icon = styled.img`
  display: block;
  max-width: 100%;
  max-height: 100%;
`;

const IconText = styled.h5`
  margin: 0;
  height: 0rem;
  margin-top: 0.5rem;
  margin-left: 0.5rem;
`;

const IconTextCamera = styled.h5`
  margin-top: 0.6rem;
  margin-left: -6rem;
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
