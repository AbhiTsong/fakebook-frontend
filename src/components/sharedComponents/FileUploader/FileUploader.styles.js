import styled from "styled-components";

const InputContainer = styled.div`
  position: relative;
  width: ${({width}) => width < 550 ? "1rem" : "2rem"};
  height: ${({width}) => width < 550 ? "1rem" : "2rem"};
`;

const InputIcon = styled.img`
  display: block;
  max-width: 100%;
  max-height: 100%;
`;

const Input = styled.input`
  opacity: 0;
  width: ${({width}) => width < 550 ? "1rem" :"10rem"};
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
`;

export { InputContainer, InputIcon, Input };
