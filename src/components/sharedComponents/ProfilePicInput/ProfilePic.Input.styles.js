import styled from "styled-components";

const InputContainer = styled.div`
  position: relative;
  width: 15rem;
  margin: auto;
`;

const UploadButton = styled.button`
  background-color: #d8d8ff;
  border: none;
  outline-color: transparent;
  border-radius: 5px;
  width: 15rem;
  height: 2rem;
  color: blue;
  &:hover {
    background-color: #c6c6f6;
    cursor: pointer;
  }
`;

const LoadingImg = styled.img`
  display: block;
  max-width: 100%;
  max-height: 100%;
  margin: auto;
`;

const FileInput = styled.input`
  opacity: 0;
  width: 15rem;
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

export { InputContainer, UploadButton, LoadingImg, FileInput };
