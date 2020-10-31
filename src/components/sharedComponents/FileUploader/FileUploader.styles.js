import styled from "styled-components";

const InputContainer = styled.div`
  position: relative;
  width: ${({ loader }) => (loader ? "4rem" : "2rem")};
  height: 2rem;

  @media screen and (max-width: 550px) {
    width: ${({ loader }) => (loader ? "2rem" : "1rem")};
    height: 1rem;
  }
`;

const InputIcon = styled.img`
  display: block;
  max-width: 100%;
  max-height: 100%;
  border-radius: ${({ loader }) => (loader ? "1.5rem" : "")};
`;

const Input = styled.input`
  opacity: 0;
  width: 5rem;
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  height: 2rem;
  cursor: pointer;
  &::-webkit-file-upload-button {
    visibility: hidden;
    opacity: 0;
  }

  @media screen and (max-width: 550px) {
    width: 1rem;
  }
`;

export { InputContainer, InputIcon, Input };
