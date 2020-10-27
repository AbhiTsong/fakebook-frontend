import styled from "styled-components";

const InputContainer = styled.div`
  position: relative;
  width: 2rem;
  height: 2rem;

  @media screen and (max-width: 550px) {
    width: 1rem;
    height: 1rem;
  }
`;

const InputIcon = styled.img`
  display: block;
  max-width: 100%;
  max-height: 100%;
`;

const Input = styled.input`
  opacity: 0;
  width: 10rem;
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

  @media screen and (max-width: 550px){
    width: 1rem
  }
`;

export { InputContainer, InputIcon, Input };
