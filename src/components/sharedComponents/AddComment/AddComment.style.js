import styled from "styled-components";
import FormInput from "../../sharedComponents/FormInput/FormInput.Component";

const CommentsContainer = styled.div`
  display: flex;
  margin: 0.5rem;
`;

const ImageContr = styled.img`
  width: 2rem;
  height: 2rem;
  margin-right: 1rem;
  border-radius: 50%;
`;

const StyledFormInput = styled(FormInput)`
  width: 95%;
  height: 2.2rem;
  border: none;
  border-radius: 5rem;
  background-color: lavender;
  padding-left: 1rem;
`;

export { CommentsContainer, ImageContr, StyledFormInput };
