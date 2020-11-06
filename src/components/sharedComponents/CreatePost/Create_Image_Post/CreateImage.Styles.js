import styled from "styled-components";
import FormInput from "../../FormInput/FormInput.Component";

const StyledFormInput = styled(FormInput)`
  width: 95%;
  height: 2rem;
  border: none;
  outline: none;
  padding: 0.5rem;
  font-size: larger;
  color: ${({ light }) => (light ? "#3e3c3c" : `white`)};
  background-color: ${({ light }) => (light ? "whitesmoke" : "black")};

  &:focus {
    outline-color: none;
  }
`;

const PicRreviewContainer = styled.div`
  width: 100%;
  margin: 0.5rem 0;
  position: relative;
`;

const PicPreviewImg = styled.img`
  display: block;
  max-width: 100%;
  max-height: 100%;
  border-radius: 15px;
`;

export { StyledFormInput, PicRreviewContainer, PicPreviewImg };
